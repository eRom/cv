import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

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
    "https://www.romain-ecarnot.com",
    "https://github.com/eRom",
    "https://www.healthincloud.app/",
    "https://fr.tipeee.com/rebondir-apres-lavc-ma-carriere-dans-la-tech/",
  ],
  knowsAbout: [
    "Cloud Computing",
    "Architecture Cloud",
    "Développement Web",
    "AWS",
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
            </div>
          </header>

          {/* Section Introduction */}
          <Card
            className="mb-8 border-2"
            role="region"
            aria-label="Introduction"
          >
            <CardHeader>
              <CardTitle className="text-2xl">À propos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Romain Ecarnot, architecte cloud & développeur. Engagé dans la
                reprise professionnelle après un AVC, il met son expertise au
                service de la tech et de la santé digitale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Passionné par les technologies cloud, l&apos;innovation dans la
                santé numérique et le développement de solutions robustes et
                scalables. Spécialisé dans l&apos;architecture de systèmes et
                les pratiques DevOps modernes.
              </p>
            </CardContent>
          </Card>

          {/* Section Expertise */}
          <Card
            className="mb-8 border-2"
            role="region"
            aria-label="Domaines d'expertise"
          >
            <CardHeader>
              <CardTitle className="text-2xl">Expertise</CardTitle>
              <CardDescription>Domaines de compétences clés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Cloud & Infrastructure
                  </h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>• Architecture Cloud (AWS)</li>
                    <li>• Infrastructure as Code (Terraform)</li>
                    <li>• Containerisation (Docker, Kubernetes)</li>
                    <li>• CI/CD & DevOps practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Développement</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>• Applications web modernes</li>
                    <li>• Microservices architecture</li>
                    <li>• Solutions de santé digitale</li>
                    <li>• Agents IA</li>
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
                        <Image
                          src="/healthincloud-icon.png"
                          alt="Health In Cloud"
                          width={24}
                          height={24}
                          className="rounded"
                        />
                        Health In Cloud
                      </CardTitle>
                      <CardDescription>
                        Plateforme de santé digitale
                      </CardDescription>
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
                    Application innovante dédiée à la rééducation numérique,
                    combinant Web moderne et expérience utilisateur optimale.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Image
                          src="/pharmacylounge-icon.png"
                          alt="Pharmacy Lounge"
                          width={24}
                          height={24}
                          className="rounded"
                        />
                        pharmacylounge
                      </CardTitle>
                      <CardDescription>
                        Le réseau social sécurisé et éthique des professionnels
                        de la pharmacie
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      aria-label="Visiter pharmacylounge"
                    >
                      <a
                        href="https://www.pharmacylounge.fr/"
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
                    Une plateforme d&apos;échanges simple et intuitive conçue
                    par des pharmaciens pour communiquer, s&apos;informer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Section Contact & Réseaux */}
          <section role="region" aria-label="Contact et réseaux sociaux">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Contact & Réseaux
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                asChild
                aria-label="Site personnel de Romain Ecarnot"
                className="bg-[#8b44f7] hover:bg-[#7a39e0] text-white border-[#8b44f7] hover:border-[#7a39e0] dark:bg-[#8b44f7] dark:hover:bg-[#7a39e0] dark:text-white dark:border-[#8b44f7] dark:hover:border-[#7a39e0]"
              >
                <a
                  href="https://www.romain-ecarnot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  Linktree
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
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  GitHub
                </a>
              </Button>
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
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  LinkedIn
                </a>
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer
            className="mt-16 text-center text-sm text-muted-foreground"
            role="contentinfo"
          >
            <p>
              © {new Date().getFullYear()} Romain Ecarnot. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Développé avec ❤️ et{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Next.js
              </a>{" "}
              /{" "}
              <a
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Cursor
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
