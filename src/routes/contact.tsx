import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Idreesia Chargha House Mardan" },
      { name: "description", content: "Visit Idreesia Chargha House at Shaheedan Bazar Rd, Mardan. Call +92 316 9464352 or order via WhatsApp." },
      { property: "og:title", content: "Contact Idreesia Chargha House" },
      { property: "og:description", content: "Address, phone, WhatsApp and Google Maps directions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-warm bg-noise border-b border-border">
        <div className="container mx-auto px-5 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Find Us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-black text-balance">
            Visit us in <span className="text-primary">Mardan</span>.
          </h1>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            We're easy to find on Shaheedan Bazar Road. Walk in any time, or call ahead.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <Card icon={<MapPin className="h-5 w-5" />} title="Address">
            <p className="text-foreground/85">{RESTAURANT.address}</p>
            <a
              href={RESTAURANT.directionsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition"
            >
              Get Directions
            </a>
          </Card>

          <Card icon={<Phone className="h-5 w-5" />} title="Phone & WhatsApp">
            <p className="text-foreground/85">{RESTAURANT.phone}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={RESTAURANT.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <a href={RESTAURANT.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 py-2.5 text-sm font-semibold hover:brightness-110 transition">
                WhatsApp Order
              </a>
            </div>
          </Card>

          <Card icon={<Clock className="h-5 w-5" />} title="Opening Hours">
            <p className="text-foreground/85">{RESTAURANT.hours}</p>
            <p className="mt-2 text-sm text-muted-foreground">Open every day including weekends and public holidays.</p>
          </Card>
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-card min-h-[500px] bg-muted">
          <iframe
            title="Idreesia Chargha House location"
            src={RESTAURANT.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full min-h-[500px]"
          />
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-spice text-spice-foreground">{icon}</div>
        <h2 className="font-display text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
