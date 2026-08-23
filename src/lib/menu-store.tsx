import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_MENU } from "./menu";
import type { MenuCategory, MenuItem } from "./restaurant";

const STORAGE_KEY = "mardan-feast-menu";

function readMenu(): MenuCategory[] {
  if (typeof window === "undefined") return DEFAULT_MENU;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_MENU;
  } catch {
    return DEFAULT_MENU;
  }
}

type MenuStore = {
  menu: MenuCategory[];
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, "id">) => void;
  updateItem: (id: string, item: Omit<MenuItem, "id">) => void;
  deleteItem: (id: string) => void;
};

const MenuContext = createContext<MenuStore | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<MenuCategory[]>(readMenu);
  const items = useMemo(() => menu.flatMap((category) => category.items), [menu]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  }, [menu]);

  const value = useMemo<MenuStore>(() => {
    const save = (next: MenuCategory[]) => setMenu(next);
    const replaceItem = (id: string, nextItem: MenuItem) => {
      const withoutItem = menu.map((category) => ({
        ...category,
        items: category.items.filter((item) => item.id !== id),
      })).filter((category) => category.items.length > 0);
      const target = withoutItem.find((category) => category.title === nextItem.category);
      save(target
        ? withoutItem.map((category) => category.title === nextItem.category ? { ...category, items: [...category.items, nextItem] } : category)
        : [...withoutItem, { id: nextItem.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "other", title: nextItem.category, items: [nextItem] }]);
    };

    return {
      menu,
      items,
      addItem: (item) => {
        const categoryId = item.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "other";
        const nextItem = { ...item, id: `${categoryId}-${Date.now()}` };
        const existing = menu.find((category) => category.title === item.category);
        if (existing) {
          save(menu.map((category) => category.title === item.category
            ? { ...category, items: [...category.items, nextItem] }
            : category));
        } else {
          save([...menu, { id: categoryId, title: item.category, items: [nextItem] }]);
        }
      },
      updateItem: (id, item) => replaceItem(id, { ...item, id }),
      deleteItem: (id) => save(menu.map((category) => ({
        ...category,
        items: category.items.filter((item) => item.id !== id),
      })).filter((category) => category.items.length > 0)),
    };
  }, [items, menu]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used inside MenuProvider");
  return context;
}