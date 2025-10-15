import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
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
  metadataBase: new URL("https://cv.romain-ecarnot.com"),
  title: {
    default: "Romain Ecarnot - CV Professionnel",
    template: "%s | Romain Ecarnot",
  },
  description: "Architecte cloud et développeur passionné",
  applicationName: "CV Romain Ecarnot",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Romain Ecarnot", url: "https://www.romain-ecarnot.com" },
  ],
  creator: "Romain Ecarnot",
  publisher: "Romain Ecarnot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "theme-color": "#0a0a0a",
    "color-scheme": "dark light",
  },
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
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
