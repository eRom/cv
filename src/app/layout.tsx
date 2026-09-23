import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// Grotesque de titraille (axe de largeur pour les titres condensés) et serif de texte en colonnes.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
  description:
    "CV interactif de Romain Ecarnot. Deux expériences de lecture : la Console d'Architecte (/dashboard) et le Scrollytelling Documentaire (/scrollytelling). 25 ans d'architecture des systèmes au service des usages.",
  keywords: [
    "Romain Ecarnot",
    "Passeur du numérique",
    "Architecte du simple",
    "accompagnement numérique",
    "intelligence artificielle",
    "IA locale",
    "architecture des systèmes",
    "vulgarisation tech",
    "sobriété numérique",
    "anti-overkill",
    "reprise professionnelle",
    "AVC",
    "cloud computing",
    "AWS",
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
      "CV interactif de Romain Ecarnot. Deux lectures au choix : le grand reportage, le CV en neuf questions (/scrollytelling), et la Console d'Architecte (/dashboard). 25 ans d'architecture des systèmes au service des usages.",
    siteName: "Romain Ecarnot",
    images: [
      {
        url: "https://cv.romain-ecarnot.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ecarnot - Passeur du numérique & Architecte du simple | CV",
    description:
      "CV interactif de Romain Ecarnot. Deux lectures au choix : le grand reportage, le CV en neuf questions (/scrollytelling), et la Console d'Architecte (/dashboard). 25 ans d'architecture des systèmes au service des usages.",
    images: [
      "https://cv.romain-ecarnot.com/og-image.jpg",
    ],
  },
  alternates: {
    canonical: "https://cv.romain-ecarnot.com",
  },
  verification: {
    google: "IEOR1xYofoX9wNR1O31-PSF9hK__8p-OpojAVz7O4JQ",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${sourceSerif.variable}`}>
      <head>
        {/* JSON-LD Schema.org (Google ProfilePage + Person + WebSite + ItemList Graph) */}
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
                    "Curriculum Vitae interactif de Romain Ecarnot. Accompagnement aux usages du numérique et de l'IA, architecture des systèmes et sobriété logicielle.",
                  "dateModified": "2026-09-23T12:00:00+02:00",
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
                  "email": "contact@romain-ecarnot.com",
                  "sameAs": [
                    "https://www.linkedin.com/in/romainecarnot/",
                    "https://github.com/eRom",
                    "https://romain-ecarnot.com",
                    "https://linktree.romain-ecarnot.com",
                  ],
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Université de Nantes",
                  },
                  "knowsAbout": [
                    "Accompagnement aux usages du numérique",
                    "Intelligence Artificielle & Multi-LLM",
                    "Architecture des Systèmes Cloud",
                    "Gouvernance des Données & RGPD / HDS",
                    "Sobriété et Simplicité logicielle",
                    "Pédagogie & Vulgarisation Tech",
                    "Résilience et Rebond post-AVC",
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nantes",
                    "addressCountry": "FR",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cv.romain-ecarnot.com/#website",
                  "url": "https://cv.romain-ecarnot.com",
                  "name": "Romain Ecarnot - CV",
                  "publisher": {
                    "@id": "https://cv.romain-ecarnot.com/#person",
                  },
                  "inLanguage": "fr-FR",
                },
                {
                  "@type": "ItemList",
                  "@id": "https://cv.romain-ecarnot.com/#experiences",
                  "name": "Expériences de consultation du CV",
                  "description": "Deux formats interactifs et complémentaires pour découvrir le parcours de Romain Ecarnot",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Expérience A - Console d'Architecte",
                      "description": "Interface technique dense et scannable, navigation au clavier (touches 1 à 4), matrice des compétences interconnectée et inspecteur d'architecture SVG.",
                      "url": "https://cv.romain-ecarnot.com/dashboard"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Expérience B - Grand reportage, le CV en questions",
                      "description": "Entretien de page Portrait : neuf questions de recruteur, les réponses de Romain tirées de son CV, ses preuves en production en encadrés, et un sommaire coché au crayon à mesure de la lecture.",
                      "url": "https://cv.romain-ecarnot.com/scrollytelling"
                    }
                  ]
                }
              ],
            }),
          }}
        />

        {/* AI Manifest Discovery */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />

        <meta name="theme-color" content="#facebc" />
        <meta name="msapplication-TileColor" content="#facebc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Favicons & Manifest */}
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
      <body className="antialiased">
        <a
          href="#contenu"
          className="type-folio sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-20 focus:border-2 focus:border-ink focus:bg-paper focus:px-3 focus:py-2"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
