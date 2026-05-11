import { createFileRoute, Link } from "@tanstack/react-router";
import chargha from "@/assets/chargha.jpg";
import bbq from "@/assets/bbq-platter.jpg";
import { Flame, Leaf, Users, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Idreesia Chargha House Mardan" },
      { name: "description", content: "The story of Idreesia Chargha House — Mardan's family-friendly spot for authentic chargha, BBQ and Pakistani flavors." },
      { property: "og:title", content: "About Idreesia Chargha House" },
      { property: "og:description", content: "Family recipes, hand-ground spices, and charcoal-fired grills since the streets of Mardan." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="container mx-auto px-5 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black text-balance">
            Born on the streets of <span className="text-primary">Mardan</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Idreesia Chargha House began as a small charcoal grill on Shaheedan Bazar Road —
            a place where neighbours gathered after work for honest, mouth-watering food.
            Today we serve hundreds of guests every day, but the recipe hasn't changed:
            fresh chicken, hand-ground masalas, and slow charcoal heat.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We are family-run and family-loved. Whether you're here for a quick takeout
            chargha after Maghrib, or a long table dinner with relatives from out of town,
            you'll find us doing what we do best — grilling with pride.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-warm">
            <img src={chargha} alt="Roasted chargha at Idreesia" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-warm bg-noise py-20">
        <div className="container mx-auto px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Value icon={<Flame className="h-5 w-5" />} title="Charcoal-fired" desc="Real wood charcoal, real smoke flavor." />
          <Value icon={<Leaf className="h-5 w-5" />} title="Fresh daily" desc="Local sourcing, never frozen." />
          <Value icon={<Users className="h-5 w-5" />} title="Family-friendly" desc="Comfortable seating for every guest." />
          <Value icon={<MapPin className="h-5 w-5" />} title="Heart of Mardan" desc="Shaheedan Bazar Road since day one." />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={bbq} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative container mx-auto px-5 lg:px-8 py-20 text-center text-cream">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Come taste the difference.</h2>
          <p className="mt-3 text-cream/80">Visit us in Mardan, or order ahead by phone.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-warm hover:brightness-110 transition">View Menu</Link>
            <Link to="/contact" className="rounded-full border-2 border-cream/40 text-cream px-7 py-3.5 font-semibold hover:bg-cream/10 transition">Contact & Map</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Value({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-card border border-border hover-lift">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-spice text-spice-foreground">{icon}</div>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
