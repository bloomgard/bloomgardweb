import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const devanagari = Tiro_Devanagari_Hindi({
  variable: "--font-deva",
  weight: "400",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bloomgard.co"),
  title: {
    default: "Bloomgard",
    template: "%s · Bloomgard",
  },
  description:
    "Bloomgard is a Mumbai-based AI company building AI systems for the infrastructure economies run on: enterprise, energy, data, quantum and finance.",
  openGraph: {
    title: "Bloomgard",
    description: "AI for the systems that run the world. Built in Mumbai.",
    url: "https://bloomgard.co",
    siteName: "Bloomgard",
    images: [
      {
        url: "https://bloomgard.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bloomgard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${devanagari.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
