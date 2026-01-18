import type { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { IconList, IconListItem } from "@/components/IconList";
import { Accordion } from "@/components/Accordion";
import { ResponsiveMessageCta } from "@/components/ResponsiveMessageCta";

export const metadata: Metadata = {
  title: "Medizinischer Fahrdienst Schorndorf | Kreuz-Fahrservice",
  description:
    "Zuverlässiger medizinischer Fahrdienst in Schorndorf und Umgebung. Kassen- und Privatfahrten. Rettungsassistent mit 16 Jahren Erfahrung."
};

const faqItems = [
  {
    title: "Wie kurzfristig kann ich in Schorndorf eine Fahrt anfragen?",
    content:
      "Kurzfristige Anfragen sind je nach Auslastung möglich. Wir prüfen die Verfügbarkeit für Schorndorf so schnell wie möglich."
  },
  {
    title: "Fahren Sie von Schorndorf auch zu Terminen außerhalb?",
    content:
      "Ja, wir übernehmen Fahrten von Schorndorf zu Terminen außerhalb nach Absprache, z. B. zu Kliniken oder Reha."
  },
  {
    title: "Unterstützen Sie in Schorndorf bei Kassenfahrten und Genehmigungen?",
    content:
      "Ja, wir unterstützen bei Fragen zu Verordnung und Genehmigung, damit die Fahrt gut vorbereitet ist."
  }
];

export default function SchorndorfPage() {
  return (
    <main className="bg-offwhite">
      <section className="bg-offwhite py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Kreuz-Fahrservice und medizinischer Fahrdienst
            </p>
            <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
              Medizinischer Fahrdienst in Schorndorf &amp; Umgebung
            </h1>
            <p className="text-base text-ink-600 sm:text-lg">
              Zuverlässige Kranken- und Transferfahrten in Schorndorf (73614)
              mit klarer Kommunikation, pünktlicher Abholung und ruhiger
              Begleitung. Wir übernehmen medizinische Fahrten, Kassenfahrten
              und Begleitfahrten – diskret und sicher.
            </p>
            <p className="text-base text-ink-600 sm:text-lg">
              Als medizinischer Fahrdienst für Schorndorf (73614) und Umgebung
              unterstützen wir Sie auch bei Fragen zu Verordnung und Genehmigung
              – damit die Fahrt organisatorisch sauber läuft.
            </p>
            <div id="hero-cta-sentinel">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href="tel:+491728352885"
                  size="lg"
                  ariaLabel="Jetzt anrufen"
                  className="hidden md:inline-flex md:h-12 md:px-6 md:py-2 md:gap-2"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Jetzt anrufen
                </Button>
                <Button
                  href="#kontakt"
                  variant="secondary"
                  size="lg"
                  ariaLabel="Verfügbarkeit anfragen"
                  className="md:h-12 md:px-6 md:py-2 md:gap-2"
                >
                  Verfügbarkeit anfragen
                </Button>
                <ResponsiveMessageCta
                  type="button"
                  variant="secondary"
                  size="lg"
                  iconClassName="h-5 w-5"
                  mobileClassName="hidden"
                  desktopClassName="md:h-12 md:px-6 md:py-2 md:gap-2"
                />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-600">
                Unverbindlich · Persönliche Rückmeldung · Keine Warteschleife
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-ink-600">
              <Badge>Rettungsassistent</Badge>
              <Badge>16 Jahre Erfahrung</Badge>
              <Badge>Diskret</Badge>
              <Badge>Unterstützung bei Genehmigungen</Badge>
            </div>
          </div>
          <Card>
            <SectionHeader
              eyebrow="Leistungen in Schorndorf"
              title="Medizinische Fahrten mit klarer Begleitung"
              description="Kassenfahrten, Begleitfahrten und private Transfers – zuverlässig, ruhig und sicher."
            />
            <IconList>
              <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                Medizinische Fahrten zu Arztpraxen, Kliniken und Reha-Terminen
              </IconListItem>
              <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                Kassenfahrten inkl. Unterstützung bei Verordnung und Genehmigung
              </IconListItem>
              <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                Begleitfahrten für mobilitätseingeschränkte Fahrgäste
              </IconListItem>
            </IconList>
          </Card>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Einsatzgebiet"
            title="Schorndorf im Fokus – regional stark"
            description="Wir fahren regelmäßig in Schorndorf (73614) und sind auch in Uhingen, Göppingen und der Umgebung zuverlässig im Einsatz."
          />
          <div className="flex flex-wrap gap-3 text-xs text-ink-600">
            <Badge>Schorndorf · 73614</Badge>
            <Badge>Göppingen · 73033</Badge>
            <Badge>Uhingen · 73066</Badge>
            <Badge>Umgebung nach Absprache</Badge>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="#kontakt"
              variant="primary"
              ariaLabel="Verfügbarkeit anfragen"
            >
              Verfügbarkeit anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="tel:+491728352885" variant="secondary">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Kontakt"
            title="Schnell erreichbar für Fahrten in Schorndorf"
            description="Rufen Sie uns an oder fragen Sie die Verfügbarkeit an – wir melden uns schnellstmöglich zurück."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="tel:+491728352885" size="lg" ariaLabel="Jetzt anrufen">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Jetzt anrufen
            </Button>
            <Button
              href="#kontakt"
              variant="secondary"
              size="lg"
              ariaLabel="Verfügbarkeit anfragen"
            >
              Verfügbarkeit anfragen
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Häufige Fragen zu Schorndorf"
            description="Kurz beantwortet, klar auf Schorndorf und Umgebung bezogen."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
