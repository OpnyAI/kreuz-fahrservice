import Link from "next/link";
import { Phone } from "lucide-react";
import { ResponsiveMessageCta } from "./ResponsiveMessageCta";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#qualifikation", label: "Qualifikation" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-base font-bold text-accent-600">
            KF
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink-900">
              Kreuz-Fahrservice
            </p>
            <p className="text-xs text-ink-600">Medizinischer Fahrdienst</p>
          </div>
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 lg:flex">
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
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:01728352885"
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-accent-600 hover:text-accent-600"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            01728 352885
          </a>
          <ResponsiveMessageCta
            type="link"
            mobileClassName="items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
            desktopClassName="items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white"
            iconClassName="h-4 w-4"
          />
        </div>
      </div>
    </header>
  );
}
