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
  title: "Bloomgard Group | AI-Native Enterprise Infrastructure",
  description: "Bloomgard builds the autonomous systems required to manage the next generation of global industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <div className="mesh-bg">
          <div className="mesh-blob-1"></div>
          <div className="mesh-blob-2"></div>
          <div className="mesh-blob-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
