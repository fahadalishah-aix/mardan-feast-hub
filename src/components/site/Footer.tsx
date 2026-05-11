import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-cream">
      <div className="container mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-spice font-display font-black text-xl">
              I
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold">{RESTAURANT.name}</h3>
              <p className="text-sm text-cream/70">{RESTAURANT.tagline}</p>
            </div>
          </div>
          <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
            Mardan's beloved chargha & BBQ destination. Family-friendly, freshly grilled, and
            priced for everyone.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center h-10 w-10 rounded-full bg-cream/10 hover:bg-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center h-10 w-10 rounded-full bg-cream/10 hover:bg-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={RESTAURANT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid place-items-center h-10 w-10 rounded-full bg-whatsapp hover:brightness-110 transition"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.6 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-saffron">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {RESTAURANT.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> {RESTAURANT.phone}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> {RESTAURANT.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-saffron">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/menu" className="hover:text-saffron">Full Menu</Link></li>
            <li><Link to="/about" className="hover:text-saffron">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-saffron">Contact & Map</Link></li>
            <li><a href={RESTAURANT.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-saffron">WhatsApp Order</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.</p>
          <p>Made with love in Mardan, Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}
