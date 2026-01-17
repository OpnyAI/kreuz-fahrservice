import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Kreuz-Fahrservice",
  description:
    "Impressum von Kreuz-Fahrservice in Uhingen (Einsatzgebiet Schorndorf & Region)."
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-16 text-sm text-ink-700 sm:px-6">
      <h1 className="text-3xl font-semibold text-ink-900">Impressum</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink-900">
          Angaben gemäß § 5 DDG
        </h2>
        <p>
          Kreuz-Fahrservice<br />
          Ingo Kreuz<br />
          Nassachtalstr. 253<br />
          73066 Uhingen<br />
          Deutschland
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">Kontakt</h2>
        <p>
          Telefon: +49 1522 2665594<br />
          E-Mail: kontakt@kreuz-fahrservice.de
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">Umsatzsteuer-ID</h2>
        <p>Keine Angabe / nicht vorhanden.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">
          Verantwortlich i.S.d. § 18 Abs. 2 MStV
        </h2>
        <p>
          Ingo Kreuz<br />
          Nassachtalstr. 253<br />
          73066 Uhingen
        </p>
      </section>
    </main>
  );
}
