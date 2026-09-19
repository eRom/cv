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
  title: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
  description:
    "Romain Ecarnot - Passeur du numérique & Architecte du simple. 25 ans d'architecture des systèmes aujourd'hui au service de ceux qui les utilisent.",
  keywords: [
    "Romain Ecarnot",
    "Passeur du numérique",
    "Architecte du simple",
    "accompagnement numérique",
    "intelligence artificielle",
    "IA",
    "architecture des systèmes",
    "vulgarisation tech",
    "sobriété numérique",
    "anti-overkill",
    "reprise professionnelle",
    "AVC",
    "cloud computing",
    "CV",
  ],
  authors: [{ name: "Romain Ecarnot" }],
  creator: "Romain Ecarnot",
  publisher: "Romain Ecarnot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cv.romain-ecarnot.com",
    title: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
    description:
      "Romain Ecarnot - Passeur du numérique & Architecte du simple. 25 ans d'architecture des systèmes aujourd'hui au service de ceux qui les utilisent.",
    siteName: "Romain Ecarnot",
    images: [
      {
        url: "https://cv.romain-ecarnot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Passeur du numérique & Architecte du simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
    description:
      "Romain Ecarnot - Passeur du numérique & Architecte du simple. 25 ans d'architecture des systèmes aujourd'hui au service de ceux qui les utilisent.",
    images: [
      "https://cv.romain-ecarnot.com/og-image.jpg",
    ],
  },
  alternates: {
    canonical: "https://cv.romain-ecarnot.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfilePage",
                  "@id": "https://cv.romain-ecarnot.com/#profilepage",
                  "url": "https://cv.romain-ecarnot.com",
                  "name": "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
                  "description":
                    "Romain Ecarnot - Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA.",
                  "inLanguage": "fr-FR",
                  "mainEntity": {
                    "@id": "https://cv.romain-ecarnot.com/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://cv.romain-ecarnot.com/#person",
                  "name": "Romain Ecarnot",
                  "alternateName": "eRom",
                  "jobTitle": "Passeur du numérique & Architecte du simple",
                  "disambiguatingDescription":
                    "Passeur du numérique & Architecte du simple. Accompagnement aux usages du numérique et de l'IA, résilience post-AVC.",
                  "description":
                    "Passeur du numérique et architecte du simple, Romain Ecarnot accompagne particuliers et professionnels vers une appropriation fluide, sobre et émancipatrice du numérique et de l'intelligence artificielle.",
                  "url": "https://cv.romain-ecarnot.com",
                  "image": "https://cv.romain-ecarnot.com/avatar.jpg",
                  "sameAs": [
                    "https://www.linkedin.com/in/romainecarnot/",
                    "https://github.com/eRom",
                    "https://romain-ecarnot.com",
                  ],
                  "knowsAbout": [
                    "Accompagnement aux usages du numérique",
                    "Intelligence Artificielle & IA Locale",
                    "Architecture des Systèmes",
                    "Développement Web & Cloud",
                    "Sobriété et Simplicité logicielle",
                    "Pédagogie & Vulgarisation Tech",
                    "Résilience et Rebond post-AVC",
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "FR",
                  },
                },
              ],
            }),
          }}
        />

        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
