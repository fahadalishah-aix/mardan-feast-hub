import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { RESTAURANT } from "./restaurant";

const STORAGE_KEY = "mardan-feast-restaurant";
type Restaurant = typeof RESTAURANT;
function readRestaurant(): Restaurant {
  if (typeof window === "undefined") return RESTAURANT;
  try { const stored = window.localStorage.getItem(STORAGE_KEY); return stored ? { ...RESTAURANT, ...JSON.parse(stored) } : RESTAURANT; } catch { return RESTAURANT; }
}
type RestaurantStore = Restaurant & { updateRestaurant: (changes: Partial<Restaurant>) => void };
const RestaurantContext = createContext<RestaurantStore | null>(null);
export function RestaurantProvider({ children }: { children: ReactNode }) {
  const [restaurant, setRestaurant] = useState<Restaurant>(readRestaurant);
  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurant)); }, [restaurant]);
  const value = useMemo(() => ({ ...restaurant, updateRestaurant: (changes: Partial<Restaurant>) => setRestaurant((current) => ({ ...current, ...changes })) }), [restaurant]);
  return <RestaurantContext.Provider value={value}>{children}</RestaurantContext.Provider>;
}
export function useRestaurant() {
  const restaurant = useContext(RestaurantContext);
  if (!restaurant) throw new Error("useRestaurant must be used inside RestaurantProvider");
  return restaurant;
}