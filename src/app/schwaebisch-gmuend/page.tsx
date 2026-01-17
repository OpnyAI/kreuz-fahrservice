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
  title: "Medizinischer Fahrdienst Schwäbisch Gmünd | Kreuz-Fahrservice",
  description:
    "Zuverlässiger medizinischer Fahrdienst in Schwäbisch Gmünd und Umgebung. Kassen- und Privatfahrten. Rettungsassistent mit 16 Jahren Erfahrung."
};

const faqItems = [
  {
    title: "Welche Angaben benötigen Sie für eine Fahrt in Schwäbisch Gmünd?",
    content:
      "Abholort, Ziel, gewünschte Uhrzeit und Hinweise zur Mobilität helfen uns, die Fahrt in Schwäbisch Gmünd passend zu planen."
  },
  {
    title: "Kann eine Begleitperson ab Schwäbisch Gmünd mitfahren?",
    content:
      "Eine Begleitperson ist oft möglich. Bitte nennen Sie das bei der Anfrage, damit wir entsprechend planen können."
  },
  {
    title: "Unterstützen Sie in Schwäbisch Gmünd bei Kassenfahrten?",
    content:
      "Ja, wir unterstützen bei Fragen zu Verordnung und Genehmigung, damit Kassenfahrten korrekt vorbereitet sind."
  }
];

export default function SchwaebischGmuendPage() {
  return (
    <main className="bg-offwhite">
      <section className="bg-offwhite py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Kreuz-Fahrservice und medizinischer Fahrdienst
            </p>
            <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
              Medizinischer Fahrdienst in Schwäbisch Gmünd &amp; Umgebung
            </h1>
            <p className="text-base text-ink-600 sm:text-lg">
              Zuverlässige Kranken- und Transferfahrten in Schwäbisch Gmünd
              (73525) mit klarer Kommunikation, pünktlicher Abholung und ruhiger
              Begleitung. Wir übernehmen medizinische Fahrten, Kassenfahrten
              und Begleitfahrten – diskret und sicher.
            </p>
            <p className="text-base text-ink-600 sm:text-lg">
              Als medizinischer Fahrdienst für Schwäbisch Gmünd (73525) und
              Umgebung unterstützen wir Sie auch bei Fragen zu Verordnung und
              Genehmigung – damit die Fahrt organisatorisch sauber läuft.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href="tel:01728352885"
                size="lg"
                ariaLabel="Jetzt anrufen"
              >
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
              <ResponsiveMessageCta
                type="button"
                variant="secondary"
                size="lg"
                iconClassName="h-5 w-5"
              />
            </div>
            <p className="text-xs text-ink-600">
              Unverbindlich · Persönliche Rückmeldung · Keine Warteschleife
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-ink-600">
              <Badge>Rettungsassistent</Badge>
              <Badge>16 Jahre Erfahrung</Badge>
              <Badge>Diskret</Badge>
              <Badge>Unterstützung bei Genehmigungen</Badge>
            </div>
          </div>
          <Card>
            <SectionHeader
              eyebrow="Leistungen in Schwäbisch Gmünd"
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
            title="Schwäbisch Gmünd im Fokus – regional stark"
            description="Wir fahren regelmäßig in Schwäbisch Gmünd (73525) und sind auch in Uhingen, Göppingen, Schorndorf und der Umgebung zuverlässig im Einsatz."
          />
          <div className="flex flex-wrap gap-3 text-xs text-ink-600">
            <Badge>Schwäbisch Gmünd · 73525</Badge>
            <Badge>Göppingen · 73033</Badge>
            <Badge>Uhingen · 73066</Badge>
            <Badge>Schorndorf · 73614</Badge>
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
            <Button href="tel:01728352885" variant="secondary">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Kontakt"
            title="Schnell erreichbar für Fahrten in Schwäbisch Gmünd"
            description="Rufen Sie uns an oder fragen Sie die Verfügbarkeit an – wir melden uns schnellstmöglich zurück."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="tel:01728352885" size="lg" ariaLabel="Jetzt anrufen">
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
            title="Häufige Fragen zu Schwäbisch Gmünd"
            description="Kurz beantwortet, klar auf Schwäbisch Gmünd und Umgebung bezogen."
          />
          <Accordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
