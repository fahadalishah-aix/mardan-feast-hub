import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, UtensilsCrossed, Star, Flame, Truck, Users, ShoppingBag, Clock } from "lucide-react";
import hero from "@/assets/hero-chargha.jpg";
import bbq from "@/assets/bbq-platter.jpg";
import tikka from "@/assets/tikka.jpg";
import chargha from "@/assets/chargha.jpg";
import { RESTAURANT } from "@/lib/restaurant";
import { MENU } from "@/lib/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Idreesia Chargha House — Mardan's Authentic Chargha & BBQ" },
      { name: "description", content: "Authentic Pakistani chargha, tikka and BBQ in Mardan. Fresh, juicy and affordable. Dine-in, takeaway and phone orders welcome." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  const specials = [
    { ...MENU[0].items[1], cat: "Signature" },
    { ...MENU[2].items[0], cat: "Family" },
    { ...MENU[1].items[2], cat: "Today" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative -mt-16 lg:-mt-20 min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Sizzling chargha chicken at Idreesia Chargha House Mardan"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-charcoal/40" />

        <div className="relative container mx-auto px-5 lg:px-8 pt-28 pb-20 text-cream">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 backdrop-blur border border-cream/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              <Flame className="h-3.5 w-3.5 text-saffron" /> Since the streets of Mardan
            </span>
            <h1 className="mt-6 font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance">
              Idreesia
              <span className="block text-saffron">Chargha House</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg sm:text-xl text-cream/85 leading-relaxed">
              {RESTAURANT.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-warm hover:brightness-110 transition"
              >
                <UtensilsCrossed className="h-4 w-4" /> View Menu
              </Link>
              <a
                href={RESTAURANT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-7 py-3.5 font-semibold hover:bg-saffron transition"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={RESTAURANT.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 font-semibold text-cream hover:bg-cream/10 transition"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <Stat icon={<Star className="h-4 w-4 fill-saffron text-saffron" />} label={`${RESTAURANT.rating} ★ rating`} sub={`${RESTAURANT.reviewCount}+ reviews`} />
              <Stat icon={<Clock className="h-4 w-4 text-saffron" />} label="Open today" sub={RESTAURANT.hours} />
              <Stat icon={<MapPin className="h-4 w-4 text-saffron" />} label="Shaheedan Bazar" sub="Mardan, KP" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-charcoal text-cream">
        <div className="container mx-auto px-5 lg:px-8 py-10 grid sm:grid-cols-3 gap-6">
          <Service icon={<Users className="h-5 w-5" />} title="Dine-in" desc="Family-friendly seating" />
          <Service icon={<ShoppingBag className="h-5 w-5" />} title="Takeaway" desc="Hot, fresh & ready to go" />
          <Service icon={<Truck className="h-5 w-5" />} title="Phone Orders" desc="Just call — we'll prep it" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Story</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-balance">
              Real Mardan flavor,<br />grilled the way nani taught.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For years, families across Mardan have gathered around our charcoal pits for one
              reason — that unmistakable, smoky, spice-rubbed chargha you simply can't find
              elsewhere. We marinate every bird overnight, hand-grind our masalas, and roast
              over open flame until the skin crackles and the meat falls off the bone.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <Bullet>100% fresh local ingredients, sourced daily</Bullet>
              <Bullet>Authentic Pakistani spices, hand-ground in-house</Bullet>
              <Bullet>Family-friendly dining at Shaheedan Bazar Rd, Mardan</Bullet>
              <Bullet>Affordable prices — from Rs 40 to Rs 1,200</Bullet>
            </ul>
            <div className="mt-8 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition">
                Read Our Story
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary transition">
                Explore Menu
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-warm">
              <img src={chargha} alt="Roasted chargha chicken" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden md:block w-48 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-card animate-float">
              <img src={tikka} alt="Chicken tikka" loading="lazy" width={400} height={400} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 hidden md:block bg-accent text-accent-foreground rounded-2xl p-5 shadow-warm">
              <p className="font-display text-3xl font-black leading-none">25+</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1">Years of grilling</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY SPECIALS */}
      <section className="bg-gradient-warm bg-noise py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Today's Pick
            </p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Daily Specials</h2>
            <p className="mt-3 text-muted-foreground">Fresh off the grill, hand-picked for today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specials.map((s) => (
              <article key={s.name} className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover-lift">
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={s.image} alt={s.name} loading="lazy" width={800} height={640} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/80 text-cream backdrop-blur text-[11px] font-bold uppercase tracking-wider">
                  {s.cat}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                    <span className="font-bold text-primary">Rs {s.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <a href={RESTAURANT.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Order Now <Phone className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-8 py-4 font-semibold hover:bg-primary transition">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container mx-auto px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Reviews</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold">Loved across Mardan</h2>
            <div className="mt-6 inline-flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-6 w-6 ${i < 4 ? "fill-saffron text-saffron" : "fill-saffron/30 text-saffron/30"}`} />
                ))}
              </div>
              <div>
                <p className="font-display font-black text-3xl leading-none">{RESTAURANT.rating}</p>
                <p className="text-xs text-muted-foreground">{RESTAURANT.reviewCount}+ reviews</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm text-muted-foreground mx-auto lg:mx-0">
              From regulars to first-timers — here's what our guests say about us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {REVIEWS.map((r) => (
              <article key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-saffron text-saffron" : "fill-muted text-muted"}`} />
                  ))}
                </div>
                <p className="mt-4 text-foreground/85 leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-spice text-spice-foreground font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.when}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bbq} alt="" loading="lazy" width={1920} height={800} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative container mx-auto px-5 lg:px-8 py-20 text-center text-cream">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
            Hungry? We're firing up the grill right now.
          </h2>
          <p className="mt-4 text-cream/80 max-w-xl mx-auto">
            Call ahead and your order will be ready when you arrive.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={RESTAURANT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-warm hover:brightness-110 transition">
              <Phone className="h-4 w-4" /> {RESTAURANT.phone}
            </a>
            <a href={RESTAURANT.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-7 py-3.5 font-semibold hover:brightness-110 transition">
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const REVIEWS = [
  { name: "Asad Khan", when: "2 weeks ago", rating: 5, text: "Best chargha in Mardan, hands down. Crispy outside, juicy inside. Whole family loved it." },
  { name: "Sana Ullah", when: "1 month ago", rating: 4, text: "Great taste and very affordable. The seekh kabab is a must-try with naan." },
  { name: "Bilal Ahmad", when: "3 weeks ago", rating: 5, text: "Portion size is huge for the price. Service is quick even on weekends." },
  { name: "Hira Khan", when: "2 months ago", rating: 4, text: "Authentic flavors. Reminds me of my dadi's cooking. Will be back for sure." },
];

function Stat({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid place-items-center h-10 w-10 rounded-full bg-cream/10 backdrop-blur border border-cream/20">{icon}</div>
      <div className="leading-tight">
        <p className="font-semibold">{label}</p>
        <p className="text-xs text-cream/60">{sub}</p>
      </div>
    </div>
  );
}

function Service({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-display text-lg font-bold">{title}</p>
        <p className="text-sm text-cream/70">{desc}</p>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
      <span className="text-foreground/85">{children}</span>
    </li>
  );
}
