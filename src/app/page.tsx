import Image from "next/image";
import Script from "next/script";
import {
  Ambulance,
  HeartHandshake,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { IconList, IconListItem } from "@/components/IconList";
import { Steps, Step } from "@/components/Steps";
import { Accordion } from "@/components/Accordion";
import { ContactForm } from "@/components/ContactForm";
import { ResponsiveMessageCta } from "@/components/ResponsiveMessageCta";

const faqItems = [
  {
    title: "Welche Unterlagen werden für Kassenfahrten benötigt?",
    content:
      "In der Regel benötigen Sie eine ärztliche Verordnung sowie ggf. eine Genehmigung der Krankenkasse. Wir unterstützen Sie bei der Klärung der Details.",
  },
  {
    title: "Fahren Sie auch am Wochenende oder kurzfristig?",
    content:
      "Ja, je nach Verfügbarkeit bieten wir auch Wochenend- und Sonderfahrten an. Bitte melden Sie sich frühzeitig für eine Abstimmung.",
  },
  {
    title: "Welche Regionen bedienen Sie?",
    content:
      "Unser Schwerpunkt liegt in Schorndorf, Göppingen, Uhingen und Schwäbisch Gmünd. Fahrten darüber hinaus sind nach Absprache möglich.",
  },
  {
    title: "Bieten Sie medizinische Fahrten in Schorndorf an?",
    content:
      "Ja, wir übernehmen regelmäßig medizinische Fahrten in Schorndorf und Umgebung, inklusive Arzt-, Klinik- und Reha-Terminen.",
  },
  {
    title: "Übernehmen Sie Fahrten im Rems-Murr-Kreis und Ostalbkreis?",
    content:
      "Ja, wir sind im gesamten Rems-Murr-Kreis sowie im Ostalbkreis unterwegs. Sprechen Sie uns an, wenn Ihr Ziel außerhalb des Kerngebiets liegt.",
  },
  {
    title: "Kann eine Begleitperson mitfahren?",
    content:
      "Ja, wir klären im Vorfeld, ob eine Begleitperson erforderlich ist und planen die Fahrt entsprechend.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kreuz-Fahrservice",
    image: "https://www.kreuz-fahrservice.de/images/vehicle-placeholder.jpg",
    telephone: "01728352885",
    email: "kontakt@kreuz-fahrservice.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wieslauftalstr. 30",
      addressLocality: "Schorndorf",
      postalCode: "73614",
      addressCountry: "DE",
    },
    areaServed: ["Schorndorf", "Göppingen", "Uhingen", "Schwäbisch Gmünd"],
    url: "https://www.kreuz-fahrservice.de",
    makesOffer: {
      "@type": "Service",
      name: "Medizinischer Fahrdienst",
      serviceType: "Patiententransport & Transferfahrten",
    },
  };

  return (
    <main className="bg-offwhite">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-offwhite">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              Kreuz-Fahrservice und medizinischer Fahrdienst
            </p>
            <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl lg:text-5xl">
              Medizinischer Fahrdienst in Schorndorf &amp; Umgebung
            </h1>
            <p className="text-base text-ink-600 sm:text-lg">
              Zuverlässige Kranken- und Transferfahrten
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
              <ResponsiveMessageCta
                type="button"
                variant="secondary"
                size="lg"
                iconClassName="h-5 w-5"
              />
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-ink-600">
              <Badge>Rettungsassistent</Badge>
              <Badge>16 Jahre Erfahrung</Badge>
              <Badge>Diskret</Badge>
              <Badge>Unterstützung bei Genehmigungen</Badge>
            </div>
          </div>
          <div className="relative rounded-2xl border border-ink-200 bg-white p-4 shadow-soft">
            <Image
              src="/images/vehicle-placeholder.jpg"
              alt="Fahrzeug des Kreuz-Fahrservice"
              width={520}
              height={420}
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink-800 shadow">
              Einsatzgebiet: Rems-Murr-Kreis &amp; Ostalbkreis
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Leistungen"
            title="Zwei Leistungswelten – medizinisch und individuell"
            description="Ob verordnete Fahrten oder flexible Transfers: Wir bieten verlässliche Unterstützung mit klarer Kommunikation und diskreter Begleitung."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <Ambulance className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-ink-900">
                  Medizinischer Fahrdienst
                </h3>
              </div>
              <p className="mt-4 text-sm text-ink-600">
                Ärztlich verordnete medizinische Fahrten mit Begleitung –
                sicher, ruhig und kassenkonform.
              </p>
              <IconList>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Ambulante Fahrten zu und von Krankenhäusern, Bestrahlungs- und
                  Chemotherapieeinrichtungen, Dialysezentren, Arztpraxen/MVZ,
                  Pflegeheimen/sozialen Einrichtungen, Reha-Einrichtungen sowie
                  Krankenhausentlassungen
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Genehmigungsfahrten Pflegegrad 3–5, Schwerbehindertenausweis
                  mit Merkzeichen G, H oder Bl
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Genehmigte Fahrten der gesetzlichen Krankenkassen und private
                  medizinische Fahrten nach ärztlicher Verordnung
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Begleitete Fahrten bei Mobilitätseinschränkungen und
                  Einkaufsfahrten (Selbstzahler)
                </IconListItem>
              </IconList>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-ink-900">
                  Transfer- &amp; Sonderfahrten
                </h3>
              </div>
              <p className="mt-4 text-sm text-ink-600">
                Flexible Transfers mit Fokus auf Komfort und Entlastung für
                Angehörige und Organisationen.
              </p>
              <IconList>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Flughafentransfer: Stuttgart · München · Frankfurt
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Wochenend- und Ausflugsfahrten
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Individuelle Fahrten nach Absprache und Entlastung der
                  Angehörigen
                </IconListItem>
                <IconListItem icon={<CheckCircle2 className="h-4 w-4" />}>
                  Firmen und Daueraufträge
                </IconListItem>
              </IconList>
            </Card>
          </div>
        </div>
      </section>

      <section id="ablauf" className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeader
            eyebrow="So funktioniert's"
            title="In drei klaren Schritten zur sicheren Fahrt"
            description="Wir begleiten Sie von der Anfrage bis zur Fahrt – inklusive Unterstützung bei Genehmigungen und organisatorischen Details."
          />
          <Steps>
            <Step index="01" title="Anfrage">
              Telefonisch, per WhatsApp oder per Formular. Wir erfassen Datum,
              Strecke und besondere Bedürfnisse.
            </Step>
            <Step index="02" title="Klärung">
              Wir prüfen Genehmigungen, Pflegegrad oder Verordnung und stimmen
              Abholung sowie Begleitung ab.
            </Step>
            <Step index="03" title="Fahrt &amp; Begleitung">
              Pünktliche Abholung, ruhige Unterstützung vor Ort und sichere
              Rückfahrt – diskret und verlässlich.
            </Step>
          </Steps>
        </div>
      </section>

      <section id="qualifikation" className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Qualifikation"
              title="Erfahrung, die Vertrauen schafft"
              description="Inhaber Ingo Kreuz ist Rettungsassistent mit 16 Jahren Berufserfahrung. Ruhe, Geduld und ein sicherer Umgang mit mobilitätseingeschränkten Menschen stehen im Mittelpunkt."
            />
            <IconList>
              <IconListItem icon={<ShieldCheck className="h-4 w-4" />}>
                Rettungsassistent und 16 Jahre Berufserfahrung im Rettungsdienst
              </IconListItem>
              <IconListItem icon={<ShieldCheck className="h-4 w-4" />}>
                Erfahrung mit Demenz, Alzheimer, Muskeldystrophie und
                vergleichbaren Erkrankungen
              </IconListItem>
              <IconListItem icon={<ShieldCheck className="h-4 w-4" />}>
                Sehr sicherer und einfühlsamer Umgang mit
                mobilitätseingeschränkten Menschen
              </IconListItem>
              <IconListItem icon={<ShieldCheck className="h-4 w-4" />}>
                Unterstützung bei Kommunikation mit Landratsämtern,
                Krankenkassen, Behörden (Genehmigungen)
              </IconListItem>
              <IconListItem icon={<ShieldCheck className="h-4 w-4" />}>
                Hohe Zuverlässigkeit, Diskretion, Verantwortungsbewusstsein
              </IconListItem>
            </IconList>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-offwhite p-4 shadow-soft">
            <Image
              src="/images/owner-placeholder.jpg"
              alt="Inhaber Ingo Kreuz"
              width={480}
              height={520}
              className="h-full w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-sm font-semibold text-ink-900">
              Ingo Kreuz · Rettungsassistent
            </p>
            <p className="text-xs text-ink-600">
              Rettungsassistent · 16 Jahre Berufserfahrung · Schorndorf
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <SectionHeader
                eyebrow="Für Angehörige"
                title="Ruhige Entlastung, wenn es darauf ankommt"
                description="Wir begleiten Ihre Angehörigen mit Geduld, Struktur und einem respektvollen Umgang – damit Sie sich sicher fühlen können."
              />
              <p className="mt-4 text-sm text-ink-600">
                Verlässliche Kommunikation, pünktliche Abholung und sichere
                Begleitung bis zur Einrichtung oder nach Hause entlasten die
                Familie spürbar.
              </p>
            </Card>
            <Card>
              <SectionHeader
                eyebrow="Für Krankenkassen/Behörden"
                title="Kassentauglich und sauber dokumentiert"
                description="Wir unterstützen bei Genehmigungen, Verordnungen und Pflegegrad-Nachweisen, damit Fahrten korrekt durchgeführt werden."
              />
              <ul className="mt-4 space-y-2 text-sm text-ink-600">
                <li>Klare Abstimmung der Voraussetzungen</li>
                <li>Verlässliche Umsetzung ärztlicher Verordnungen</li>
                <li>Transparente Kommunikation mit Angehörigen</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="einsatzgebiet" className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6">
          <SectionHeader
            eyebrow="Einsatzgebiet"
            title="Regional stark – zuverlässig vor Ort"
            description="Wir fahren für Sie im Rems-Murr-Kreis und Ostalbkreis. Schorndorf, Göppingen, Uhingen und Schwäbisch Gmünd gehören zu unserem Kerngebiet."
          />
          <p className="text-sm text-ink-600">
            Unser medizinischer Fahrdienst ist regelmäßig in Schorndorf (73614),
            Göppingen (73033), Uhingen (73066) und Schwäbisch Gmünd (73525) im
            Einsatz. Zusätzlich übernehmen wir Fahrten im gesamten
            Rems-Murr-Kreis sowie im Ostalbkreis.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>Schorndorf · 73614</Badge>
            <Badge>Göppingen · 73033</Badge>
            <Badge>Uhingen · 73066</Badge>
            <Badge>Schwäbisch Gmünd · 73525</Badge>
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
            <p className="text-sm text-ink-600">
              Weitere Ziele nach Absprache – sprechen Sie uns an.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="mx-auto w-full max-w-4xl space-y-8 px-4 sm:px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Häufige Fragen"
            description="Hier finden Sie Antworten zu Abläufen, Genehmigungen und Regionen."
          />
          <Accordion items={faqItems} />
        </div>
      </section>

      <section id="kontakt" className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl gap-10 space-y-10 px-4 sm:px-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:space-y-0">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Kontakt"
              title="Direkt erreichbar – wir freuen uns auf Ihre Anfrage"
              description="Telefonisch, per WhatsApp oder über das Formular. Wir melden uns schnellstmöglich zurück."
            />
            <div className="space-y-4 rounded-xl border border-ink-200 bg-offwhite p-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-600" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ink-600">Telefon</p>
                  <a
                    href="tel:01728352885"
                    className="text-lg font-semibold text-ink-900"
                  >
                    01728352885
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  className="h-5 w-5 text-accent-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-ink-600">WhatsApp</p>
                  <a
                    href="https://wa.me/491728352885"
                    className="text-lg font-semibold text-ink-900"
                  >
                    01728352885
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-600" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ink-600">E-Mail</p>
                  <a
                    href="mailto:kontakt@kreuz-fahrservice.de"
                    className="text-base font-semibold text-ink-900"
                  >
                    kontakt@kreuz-fahrservice.de
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-5 w-5 text-accent-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm text-ink-600">Adresse</p>
                  <p className="text-base font-semibold text-ink-900">
                    Wieslauftalstr. 30, 73614 Schorndorf
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-ink-600">
              Inhaber: Ingo Kreuz · Beginn: 02.02.2026
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
