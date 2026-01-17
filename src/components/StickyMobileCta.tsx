"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { ResponsiveMessageCta } from "./ResponsiveMessageCta";

export function StickyMobileCta() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("hero-cta-sentinel");
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!showSticky) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink-200 bg-white/95 px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href="tel:+4915222665594"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Jetzt anrufen
        </a>
        <ResponsiveMessageCta
          type="link"
          mobileClassName="h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-2 text-sm font-semibold text-ink-900"
          desktopClassName="flex-1 items-center justify-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-3 text-sm font-semibold text-ink-900"
          mobileDisplayClassName="flex"
          desktopDisplayClassName="flex"
          iconClassName="h-4 w-4"
        />
      </div>
    </div>
  );
}
