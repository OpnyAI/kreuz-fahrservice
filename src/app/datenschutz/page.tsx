import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Kreuz-Fahrservice",
  description: "Datenschutzerklärung von Kreuz-Fahrservice."
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-16 text-sm text-ink-700 sm:px-6">
      <h1 className="text-3xl font-semibold text-ink-900">Datenschutz</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-ink-900">Verantwortlicher</h2>
        <p>
          Ingo Kreuz<br />
          Kreuz-Fahrservice<br />
          Wieslauftalstr. 30<br />
          73614 Schorndorf<br />
          Telefon: 01728352885<br />
          E-Mail: kontakt@kreuz-fahrservice.de
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">
          Allgemeine Hinweise
        </h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur im Rahmen der gesetzlichen
          Bestimmungen und ausschließlich zur Kontaktaufnahme und
          Leistungserbringung.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">Server-Logs</h2>
        <p>
          Beim Besuch dieser Website werden durch den Hosting-Provider
          automatisch technische Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit
          des Zugriffs, aufgerufene Seite, Browserinformationen) in Server-Logs
          gespeichert. Die Verarbeitung erfolgt zur Sicherstellung des
          technischen Betriebs und zur Abwehr von Missbrauch auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO. Server-Logs werden nach kurzer Zeit
          gelöscht.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, verarbeiten
          wir Ihre Angaben (Name, E-Mail, optional Telefon, Nachricht) zur
          Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO. Die Daten werden gelöscht, sobald die Anfrage abgeschlossen ist
          und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">WhatsApp</h2>
        <p>
          Wenn Sie den WhatsApp-Kontakt nutzen, erfolgt die Datenverarbeitung
          durch WhatsApp. Bitte nutzen Sie diesen Kontakt nur auf eigene Initiative.
          Alternativ können Sie uns jederzeit per Telefon oder E-Mail erreichen.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">
          Empfänger und Auftragsverarbeiter
        </h2>
        <p>
          Für das Hosting und die technische Bereitstellung dieser Website
          setzen wir Dienstleister als Auftragsverarbeiter ein. Eine Weitergabe
          an Dritte erfolgt nicht, sofern keine gesetzliche Verpflichtung besteht.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">SSL/TLS</h2>
        <p>
          Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung, um die
          Übertragung vertraulicher Inhalte zu schützen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung sowie Datenübertragbarkeit Ihrer personenbezogenen
          Daten. Zudem können Sie der Verarbeitung widersprechen. Bitte wenden
          Sie sich hierzu an den Verantwortlichen.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-ink-900">
          Kein Tracking, keine Cookies
        </h2>
        <p>
          Wir setzen keine Tracking- oder Analyse-Tools ein und verwenden keine
          Cookies zu Analysezwecken.
        </p>
      </section>
    </main>
  );
}
