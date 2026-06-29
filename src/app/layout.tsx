import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'bloomgard',
  description: "Bloomgard builds autonomous systems and enterprise management protocols to optimize global infrastructure, data grids, and future computing.",
  openGraph: {
    title: 'Bloomgard',
    description: 'Global infrastructure optimization and AI native erp.',
    url: 'https://bloomgard.co',
    siteName: 'Bloomgard',
    images: [
      {
        url: 'https://bloomgard.co/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bloomgard Headquarters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
