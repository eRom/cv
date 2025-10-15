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

/**
 * Métadonnées par défaut pour le site
 * Les pages individuelles peuvent surcharger ces métadonnées
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://romainecarnot.fr"),
  title: {
    default: "Romain Ecarnot - CV Professionnel",
    template: "%s | Romain Ecarnot",
  },
  description: "Architecte cloud et développeur passionné",
  manifest: "/manifest.json",
};

/**
 * Configuration du viewport pour un affichage optimal
 */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
