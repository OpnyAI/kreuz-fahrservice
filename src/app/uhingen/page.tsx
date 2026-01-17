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
  title: "Medizinischer Fahrdienst Uhingen | Kreuz-Fahrservice",
  description:
    "Zuverlässiger medizinischer Fahrdienst in Uhingen und Umgebung. Kassen- und Privatfahrten. Rettungsassistent mit 16 Jahren Erfahrung."
};

const faqItems = [
  {
    title: "Wie kurzfristig kann ich in Uhingen eine Fahrt anfragen?",
    content:
      "Je nach Auslastung sind auch kurzfristige Fahrten möglich. Rufen Sie uns an, damit wir die Verfügbarkeit für Uhingen zeitnah prüfen können."
  },
  {
    title: "Unterstützen Sie in Uhingen bei Kassenfahrten und Genehmigungen?",
    content:
      "Ja, wir helfen bei Fragen zu Verordnung und Genehmigung, damit Kassenfahrten organisatorisch sauber vorbereitet sind."
  },
  {
    title: "Fahren Sie von Uhingen auch zu Terminen außerhalb?",
    content:
      "Ja, wir übernehmen Fahrten von Uhingen zu Arzt-, Klinik- oder Reha-Terminen nach Absprache und planen die Strecke mit Ihnen."
  }
];

export default function UhingenPage() {
  return (
    <main className="bg-offwhite">
      <section className="bg-offwhite py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Kreuz-Fahrservice und medizinischer Fahrdienst
            </p>
            <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
              Medizinischer Fahrdienst in Uhingen &amp; Umgebung
            </h1>
            <p className="text-base text-ink-600 sm:text-lg">
              Zuverlässige Kranken- und Transferfahrten in Uhingen (73066) mit
              klarer Kommunikation, pünktlicher Abholung und ruhiger Begleitung.
              Wir übernehmen medizinische Fahrten, Kassenfahrten und
              Begleitfahrten – diskret und sicher.
            </p>
            <p className="text-base text-ink-600 sm:text-lg">
              Als medizinischer Fahrdienst für Uhingen (73066) und Umgebung
              unterstützen wir Sie auch bei Fragen zu Verordnung und Genehmigung
              – damit die Fahrt organisatorisch sauber läuft.
            </p>
            <div id="hero-cta-sentinel">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href="tel:+4915222665594"
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
              eyebrow="Leistungen in Uhingen"
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
            title="Uhingen im Fokus – regional stark"
            description="Wir fahren regelmäßig in Uhingen (73066) und sind auch in Göppingen, Schorndorf und der Umgebung zuverlässig im Einsatz."
          />
          <div className="flex flex-wrap gap-3 text-xs text-ink-600">
            <Badge>Uhingen · 73066</Badge>
            <Badge>Göppingen · 73033</Badge>
            <Badge>Schorndorf · 73614</Badge>
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
            <Button href="tel:+4915222665594" variant="secondary">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Kontakt"
            title="Schnell erreichbar für Fahrten in Uhingen"
            description="Rufen Sie uns an oder fragen Sie die Verfügbarkeit an – wir melden uns schnellstmöglich zurück."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="tel:+4915222665594" size="lg" ariaLabel="Jetzt anrufen">
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
            title="Häufige Fragen zu Uhingen"
            description="Kurz beantwortet, klar auf Uhingen und Umgebung bezogen."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
