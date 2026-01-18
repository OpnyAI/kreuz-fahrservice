import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-sm text-ink-600 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand & Kontakt */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo.png"
                alt="Kreuz-Fahrservice"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <p className="font-semibold text-ink-900">Kreuz-Fahrservice</p>
            </div>

            <div className="space-y-1">
              <p>Nassachtalstr. 253</p>
              <p>73066 Uhingen</p>
            </div>

            <div className="space-y-1">
              <p>Telefon +49 172 8352885</p>
              <p>kontakt@kreuz-fahrservice.de</p>
            </div>
          </div>

          {/* Rechtliches */}
          <div className="space-y-3">
            <p className="font-semibold text-ink-700">Rechtliches</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/impressum"
                className="block w-fit hover:text-accent-600"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="block w-fit hover:text-accent-600"
              >
                Datenschutz
              </Link>
            </div>
          </div>

          {/* Standorte */}
          <div className="space-y-3">
            <p className="font-semibold text-ink-700">Standorte</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/uhingen"
                className="block w-fit hover:text-accent-600"
              >
                Uhingen
              </Link>
              <Link
                href="/goeppingen"
                className="block w-fit hover:text-accent-600"
              >
                Göppingen
              </Link>
              <Link
                href="/schorndorf"
                className="block w-fit hover:text-accent-600"
              >
                Schorndorf
              </Link>
              <Link
                href="/schwaebisch-gmuend"
                className="block w-fit hover:text-accent-600"
              >
                Schwäbisch Gmünd
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-200 pt-6 text-xs text-ink-500">
          © 2026 Kreuz-Fahrservice
        </div>
      </div>
    </footer>
  );
}
