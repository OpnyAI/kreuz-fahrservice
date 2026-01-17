import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Kreuz-Fahrservice | Medizinischer Fahrdienst in Uhingen & Region",
  description:
    "Medizinischer Fahrdienst und Transfers in Uhingen (73066), Schorndorf (73614), Göppingen (73033) und Schwäbisch Gmünd (73525). Rettungsassistent mit 16 Jahren Erfahrung für Kassen- und Privatfahrten.",
  metadataBase: new URL("https://www.kreuz-fahrservice.de"),
  alternates: {
    canonical: "https://www.kreuz-fahrservice.de" // Domain später ersetzen
  },
  openGraph: {
    title: "Kreuz-Fahrservice | Medizinischer Fahrdienst in Uhingen & Region",
    description:
      "Zuverlässige medizinische Fahrten und Transfers in Uhingen, Schorndorf, Göppingen und Schwäbisch Gmünd.",
    url: "https://www.kreuz-fahrservice.de",
    siteName: "Kreuz-Fahrservice",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kreuz-Fahrservice | Medizinischer Fahrdienst in Uhingen",
    description:
      "Kassen- und Privatfahrten für Uhingen, Schorndorf, Göppingen und Schwäbisch Gmünd."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="font-sans pb-[calc(env(safe-area-inset-bottom)+6rem)] md:pb-0">
        <Header />
        {children}
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
