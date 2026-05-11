import { MENU } from "@/lib/menu";
import { RESTAURANT } from "@/lib/restaurant";
import { Phone } from "lucide-react";

export function MenuList({ compact = false }: { compact?: boolean }) {
  const cats = compact ? MENU.slice(0, 3) : MENU;

  return (
    <div className="space-y-20">
      {cats.map((cat) => (
        <section key={cat.id} id={cat.id}>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Menu
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-1">{cat.title}</h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-border ml-4" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover-lift"
              >
                {item.image && (
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold">{item.name}</h3>
                    <span className="font-bold text-primary whitespace-nowrap">
                      Rs {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={RESTAURANT.phoneHref}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold py-2.5 hover:brightness-110 transition"
                    >
                      <Phone className="h-3.5 w-3.5" /> Order Now
                    </a>
                    <a
                      href={`${RESTAURANT.whatsappHref}%20-%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-border bg-background text-sm font-semibold px-4 hover:bg-secondary transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
