export const RESTAURANT = {
  name: "Idreesia Chargha House",
  tagline: "Authentic Taste of Mardan – Fresh, Juicy, and Affordable",
  phone: "+92 316 9464352",
  phoneHref: "tel:+923169464352",
  whatsappHref: "https://wa.me/923169464352?text=Assalam%20o%20Alaikum!%20I%27d%20like%20to%20place%20an%20order%20from%20Idreesia%20Chargha%20House.",
  address: "52XX+5XQ, Shaheedan Bazar Rd, Mardan, 23200, Pakistan",
  city: "Mardan, Pakistan",
  directionsHref: "https://www.google.com/maps/dir/?api=1&destination=Idreesia+Chargha+House+Shaheedan+Bazar+Rd+Mardan",
  mapEmbed: "https://www.google.com/maps?q=Idreesia%20Chargha%20House%20Shaheedan%20Bazar%20Rd%20Mardan&output=embed",
  hours: "Daily · 11:00 AM – 12:00 AM",
  rating: 4.1,
  reviewCount: 720,
};

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  image?: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};
