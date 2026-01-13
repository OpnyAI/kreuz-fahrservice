import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Kreuz-Fahrservice | Medizinischer Fahrdienst in Schorndorf & Region",
  description:
    "Medizinischer Fahrdienst und Transfers in Schorndorf (73614), Göppingen (73033), Uhingen (73066) und Schwäbisch Gmünd (73525). Rettungsassistent mit 16 Jahren Erfahrung für Kassen- und Privatfahrten.",
  metadataBase: new URL("https://www.kreuz-fahrservice.de"),
  alternates: {
    canonical: "https://www.kreuz-fahrservice.de" // Domain später ersetzen
  },
  openGraph: {
    title: "Kreuz-Fahrservice | Medizinischer Fahrdienst in Ihrer Region",
    description:
      "Zuverlässige medizinische Fahrten und Transfers in Schorndorf, Göppingen, Uhingen und Schwäbisch Gmünd.",
    url: "https://www.kreuz-fahrservice.de",
    siteName: "Kreuz-Fahrservice",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreuz-Fahrservice | Medizinischer Fahrdienst",
    description:
      "Kassen- und Privatfahrten für Schorndorf, Göppingen, Uhingen und Schwäbisch Gmünd."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
