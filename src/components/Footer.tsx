import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-ink-600 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-ink-900">Kreuz-Fahrservice</p>
          <p>Nassachtalstr. 253, 73066 Uhingen</p>
          <p>Telefon 01728352885 · kontakt@kreuz-fahrservice.de</p>
        </div>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-accent-600">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-accent-600">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
