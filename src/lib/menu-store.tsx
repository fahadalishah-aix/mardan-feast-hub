import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "./supabase";
import type { MenuCategory, MenuItem } from "./restaurant";

type MenuStore = {
  menu: MenuCategory[];
  items: MenuItem[];
  loading: boolean;
  addItem: (item: Omit<MenuItem, "id">) => Promise<void>;
  updateItem: (id: string, item: Omit<MenuItem, "id">) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  refreshMenu: () => Promise<void>;
};

const MenuContext = createContext<MenuStore | null>(null);

function buildMenu(items: MenuItem[]): MenuCategory[] {
  const categories = new Map<string, MenuItem[]>();

  for (const item of items) {
    const existing = categories.get(item.category) || [];
    existing.push(item);
    categories.set(item.category, existing);
  }

  return Array.from(categories.entries()).map(([title, categoryItems]) => ({
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "other",
    title,
    items: categoryItems,
  }));
}

export function MenuProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshMenu = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Failed to load menu:", error);
      setLoading(false);
      return;
    }

    const formattedItems: MenuItem[] = (data || []).map((item) => ({
      id: item.id,
      name: item.name,
      desc: item.description || "",
      price: Number(item.price),
      image: item.image_url || undefined,
      badge: item.badge || undefined,
      category: item.category || "Other",
      restaurant: "Idreesia Chargha House", // temporary – we will improve this later
      available: item.available ?? true,
    }));

    setItems(formattedItems);
    setLoading(false);
  };

  useEffect(() => {
    refreshMenu();
  }, []);

  const menu = useMemo(() => buildMenu(items), [items]);

  const addItem = async (item: Omit<MenuItem, "id">) => {
    const categoryId =
      item.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "other";
    const id = `${categoryId}-${Date.now()}`;

    const { error } = await supabase.from("menu_items").insert({
      id,
      name: item.name,
      description: item.desc,
      price: item.price,
      image_url: item.image || null,
      badge: item.badge || null,
      category: item.category,
      available: item.available,
    });

    if (error) {
      console.error("Failed to add item:", error);
      throw error;
    }

    await refreshMenu();
  };

  const updateItem = async (id: string, item: Omit<MenuItem, "id">) => {
    const { error } = await supabase
      .from("menu_items")
      .update({
        name: item.name,
        description: item.desc,
        price: item.price,
        image_url: item.image || null,
        badge: item.badge || null,
        category: item.category,
        available: item.available,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Failed to update item:", error);
      throw error;
    }

    await refreshMenu();
  };

  const deleteItem = async (id: string) => {
    const { error } = await supabase
      .from("menu_items")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Failed to delete item:", error);
      throw error;
    }

    await refreshMenu();
  };

  const value = useMemo<MenuStore>(
    () => ({
      menu,
      items,
      loading,
      addItem,
      updateItem,
      deleteItem,
      refreshMenu,
    }),
    [menu, items, loading]
  );

  return (
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }
  return context;
}