"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { ResponsiveMessageCta } from "./ResponsiveMessageCta";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#qualifikation", label: "Qualifikation" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5">
            <Image
              src="/brand/logo.png"
              alt="Kreuz-Fahrservice"
              width={32}
              height={32}
              className="h-7 w-7 object-contain"
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink-900">
              Kreuz-Fahrservice
            </p>
            <p className="text-xs text-ink-600">Medizinischer Fahrdienst</p>
          </div>
        </Link>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-700 hover:text-accent-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-full border border-ink-300 bg-white p-2 text-ink-800 md:hidden"
          aria-label="Menü öffnen"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+491728352885"
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-accent-600 hover:text-accent-600"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +49 172 8352885
          </a>
          <ResponsiveMessageCta
            type="link"
            mobileClassName="items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
            desktopClassName="items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
            iconClassName="h-4 w-4"
          />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm transition-opacity duration-200"
            aria-label="Menü schließen"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-dvh w-[85vw] max-w-sm translate-x-0 rounded-l-2xl bg-white shadow-xl transition-transform duration-200 ease-out">
            <div className="flex h-full flex-col gap-6 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink-900">Menü</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-ink-300 bg-white p-2 text-ink-800"
                  aria-label="Menü schließen"
                  onClick={() => setIsMenuOpen(false)}
                  ref={closeButtonRef}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Mobile Navigation" className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-base font-semibold text-ink-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:+491728352885"
                  className="block text-base font-semibold text-ink-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  +49 172 8352885
                </a>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
