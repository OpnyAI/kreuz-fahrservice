import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href="tel:01728352885"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-600 px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Jetzt anrufen
        </a>
        <a
          href="https://wa.me/491728352885"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-3 text-sm font-semibold text-ink-900"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
