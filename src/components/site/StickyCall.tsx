import { Phone } from "lucide-react";
import { useRestaurant } from "@/lib/restaurant-store";

export function StickyCall() {
  const RESTAURANT = useRestaurant();
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={RESTAURANT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Order"
        className="grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-warm hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M20.5 3.5A11 11 0 0 0 3.4 17.2L2 22l4.9-1.3A11 11 0 1 0 20.5 3.5Zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.9.8.8-2.8-.2-.3A9 9 0 1 1 12 20.5Zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a7.4 7.4 0 0 1-3.6-3.2c-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7.1.2 1.9 3 4.6 4.2 1.7.7 2.4.8 3.2.7.5-.1 1.6-.7 1.8-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
      <a
        href={RESTAURANT.phoneHref}
        aria-label="Call Now"
        className="md:hidden grid place-items-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-warm animate-ember"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
