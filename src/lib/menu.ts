import chargha from "@/assets/chargha.jpg";
import tikka from "@/assets/tikka.jpg";
import bbq from "@/assets/bbq-platter.jpg";
import seekh from "@/assets/seekh.jpg";
import naan from "@/assets/naan.jpg";
import drinks from "@/assets/drinks.jpg";
import type { MenuCategory } from "./restaurant";

export const MENU: MenuCategory[] = [
  {
    id: "chargha",
    title: "Chargha Chicken",
    items: [
      { name: "Quarter Chargha", desc: "Juicy spiced quarter, slow-roasted to perfection.", price: 350, image: chargha },
      { name: "Half Chargha", desc: "Our signature — half whole chicken, golden & crisp.", price: 650, image: chargha, badge: "Bestseller" },
      { name: "Full Chargha", desc: "Whole chargha for the family. Pairs with naan & raita.", price: 1200, image: chargha },
    ],
  },
  {
    id: "tikka",
    title: "Chicken Tikka",
    items: [
      { name: "Single Tikka", desc: "Charcoal-grilled tikka piece with chutney.", price: 280, image: tikka },
      { name: "Tikka Plate (2 pcs)", desc: "Two flame-kissed tikka pieces with salad & roti.", price: 520, image: tikka },
      { name: "Malai Boti", desc: "Creamy, smoky boneless chicken on skewers.", price: 580, image: tikka },
    ],
  },
  {
    id: "bbq",
    title: "BBQ Platter",
    items: [
      { name: "Mixed BBQ Platter", desc: "Tikka, kabab, malai boti, naan, raita & salad.", price: 950, image: bbq, badge: "Family Favorite" },
      { name: "Boti Plate", desc: "Tender beef boti, charcoal-grilled with fresh chutney.", price: 620, image: bbq },
    ],
  },
  {
    id: "seekh",
    title: "Seekh Kabab",
    items: [
      { name: "Beef Seekh (2 sticks)", desc: "Hand-minced beef seekh kabab on charcoal.", price: 320, image: seekh },
      { name: "Chicken Seekh (2 sticks)", desc: "Soft chicken seekh with desi spices.", price: 280, image: seekh },
    ],
  },
  {
    id: "bread",
    title: "Paratha & Naan",
    items: [
      { name: "Tandoori Naan", desc: "Fresh from the tandoor, soft and warm.", price: 40, image: naan },
      { name: "Roghni Naan", desc: "Buttery, sesame-topped naan.", price: 80, image: naan },
      { name: "Paratha", desc: "Crispy layered paratha, perfect with chargha.", price: 90, image: naan },
    ],
  },
  {
    id: "drinks",
    title: "Soft Drinks",
    items: [
      { name: "Soft Drink (Regular)", desc: "Coke, Sprite, Fanta — 345ml.", price: 80, image: drinks },
      { name: "Soft Drink (1.5L)", desc: "Family-sized cold bottle.", price: 220, image: drinks },
      { name: "Mineral Water", desc: "Chilled 500ml bottle.", price: 60, image: drinks },
    ],
  },
];

export const DEFAULT_MENU: MenuCategory[] = MENU.map((category) => ({
  ...category,
  items: category.items.map((item, index) => ({
    ...item,
    id: `${category.id}-${index + 1}`,
    category: category.title,
    restaurant: "Idreesia Chargha House",
    available: true,
  })),
}));
