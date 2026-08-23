import { createFileRoute } from "@tanstack/react-router";
import { MenuList } from "@/components/site/MenuList";
import { useRestaurant } from "@/lib/restaurant-store";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Idreesia Chargha House Mardan" },
      { name: "description", content: "Full menu: chargha, chicken tikka, BBQ platters, seekh kabab, naan and drinks. Prices from Rs 40 to Rs 1,200." },
      { property: "og:title", content: "Menu — Idreesia Chargha House" },
      { property: "og:description", content: "Authentic Pakistani BBQ menu in Mardan. Fresh, affordable, mouth-watering." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const RESTAURANT = useRestaurant();
  return (
    <div>
      <section className="bg-gradient-warm bg-noise border-b border-border">
        <div className="container mx-auto px-5 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Menu</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black text-balance">
            Fresh from the <span className="text-primary">tandoor</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Marinated overnight, grilled over real charcoal. Every plate tells a Mardan story.
          </p>
          <a
            href={RESTAURANT.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-warm hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" /> Order by Phone
          </a>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 md:py-24">
        <MenuList />
      </section>
    </div>
  );
}
