import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useRestaurant } from "@/lib/restaurant-store";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const RESTAURANT = useRestaurant();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-8 h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-spice text-spice-foreground font-display font-black text-lg shadow-warm">
            I
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-bold text-base tracking-tight">Idreesia</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Chargha House
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              activeProps={{ className: "text-primary after:w-full" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={RESTAURANT.phoneHref}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm hover:brightness-110 transition"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-lg border border-border bg-background/80"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg font-medium text-foreground/90 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={RESTAURANT.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {RESTAURANT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
