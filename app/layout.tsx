import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salty Crew PR | Luxury Boat Experiences in Puerto Rico",
  description:
    "Luxury tropical boat routes through the most beautiful islands of Puerto Rico. Private and guided boat experiences with captain and crew services.",
  keywords: [
    "Puerto Rico",
    "boat tours",
    "luxury",
    "Caribbean",
    "Icacos",
    "Culebra",
    "Vieques",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
