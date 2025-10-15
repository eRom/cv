import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";

/**
 * Métadonnées SEO optimisées pour la page CV de Romain Ecarnot
 * Inclut Open Graph, Twitter Cards, et informations de base
 */
export const metadata: Metadata = {
  title: "Romain Ecarnot - Architecte Cloud & Développeur | CV Professionnel",
  description:
    "CV de Romain Ecarnot, architecte cloud et développeur passionné. Expert en technologies cloud, reprise professionnelle après AVC, engagé dans la tech et la santé digitale.",
  keywords: [
    "Romain Ecarnot",
    "Architecte Cloud",
    "Développeur",
    "Cloud Computing",
    "AWS",
    "Azure",
    "DevOps",
    "Santé Digitale",
    "Health Tech",
    "Reprise professionnelle",
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
    type: "profile",
    locale: "fr_FR",
    url: "https://cv.romain-ecarnot.com",
    siteName: "Romain Ecarnot - CV Professionnel",
    title: "Romain Ecarnot - Architecte Cloud & Développeur",
    description:
      "Architecte cloud et développeur passionné. Engagé dans la reprise professionnelle après un AVC, expertise en cloud computing et santé digitale.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Romain Ecarnot - Architecte Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romain Ecarnot - Architecte Cloud & Développeur",
    description:
      "Architecte cloud et développeur. Reprise professionnelle post-AVC, expert en cloud computing et santé digitale.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://cv.romain-ecarnot.com",
  },
  verification: {
    google: "IEOR1xYofoX9wNR1O31-PSF9hK__8p-OpojAVz7O4JQ",
  },
};

/**
 * Schéma JSON-LD pour SEO structuré (Schema.org Person)
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Romain Ecarnot",
  jobTitle: "Architecte Cloud & Développeur",
  description:
    "Architecte cloud et développeur passionné, engagé dans la reprise professionnelle après un AVC. Expert en technologies cloud et santé digitale.",
  url: "https://cv.romain-ecarnot.com",
  sameAs: [
    "https://www.linkedin.com/in/romainecarnot/",
    "https://github.com/eRom",
    "https://www.healthincloud.app/",
    "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
  ],
  knowsAbout: [
    "Cloud Computing",
    "Architecture Cloud",
    "Développement Web",
    "AWS",
    "Azure",
    "DevOps",
    "Santé Digitale",
    "Health Tech",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Formation Tech & Cloud",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Injection du JSON-LD dans le head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Contenu principal de la page */}
      <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
          {/* En-tête avec présentation */}
          <header className="text-center mb-12" role="banner">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Romain Ecarnot
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Architecte Cloud & Développeur
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge variant="secondary" className="text-sm">
                Cloud Architecture
              </Badge>
              <Badge variant="secondary" className="text-sm">
                DevOps
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Santé Digitale
              </Badge>
              <Badge variant="secondary" className="text-sm">
                AWS / Azure
              </Badge>
            </div>
          </header>

          {/* Section Introduction */}
          <Card className="mb-8 border-2" role="region" aria-label="Introduction">
            <CardHeader>
              <CardTitle className="text-2xl">À propos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Romain Ecarnot, architecte cloud & développeur. Engagé dans la reprise
                professionnelle après un AVC, il met son expertise au service de la tech
                et de la santé digitale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionné par les technologies cloud, l&apos;innovation dans la santé
                numérique et le développement de solutions robustes et scalables.
                Spécialisé dans l&apos;architecture de systèmes distribués et les pratiques
                DevOps modernes.
              </p>
            </CardContent>
          </Card>

          {/* Section Expertise */}
          <Card className="mb-8 border-2" role="region" aria-label="Domaines d'expertise">
            <CardHeader>
              <CardTitle className="text-2xl">Expertise</CardTitle>
              <CardDescription>Domaines de compétences clés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Cloud & Infrastructure</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>• Architecture cloud (AWS, Azure)</li>
                    <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                    <li>• Containerisation (Docker, Kubernetes)</li>
                    <li>• CI/CD & DevOps practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Développement</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>• Applications web modernes</li>
                    <li>• API RESTful & GraphQL</li>
                    <li>• Microservices architecture</li>
                    <li>• Solutions de santé digitale</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Section Projets */}
          <section className="mb-12" role="region" aria-label="Projets">
            <h2 className="text-3xl font-bold mb-6">Projets</h2>
            <div className="grid gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Health In Cloud
                        <Heart className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </CardTitle>
                      <CardDescription>Plateforme de santé digitale</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      aria-label="Visiter Health In Cloud"
                    >
                      <a
                        href="https://www.healthincloud.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Application innovante dédiée à la santé numérique, combinant
                    architecture cloud moderne et expérience utilisateur optimale.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Rebondir après l&apos;AVC</CardTitle>
                      <CardDescription>Partage d&apos;expérience & inspiration</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      aria-label="Soutenir sur Tipeee"
                    >
                      <a
                        href="https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projet de sensibilisation et d&apos;accompagnement pour la reprise
                    professionnelle dans la tech après un parcours de santé complexe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Section Contact & Réseaux */}
          <section role="region" aria-label="Contact et réseaux sociaux">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact & Réseaux</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                asChild
                aria-label="Profil LinkedIn de Romain Ecarnot"
              >
                <a
                  href="https://www.linkedin.com/in/romainecarnot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                aria-label="Profil GitHub de Romain Ecarnot"
              >
                <a
                  href="https://github.com/eRom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-center text-sm text-muted-foreground" role="contentinfo">
            <p>© {new Date().getFullYear()} Romain Ecarnot. Tous droits réservés.</p>
            <p className="mt-2">
              Construit avec Next.js, React, TypeScript & Tailwind CSS
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
