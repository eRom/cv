"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Auto-entrepreneur – Architecte Cloud / Développeur Fullstack",
    company: "Morannon",
    location: "France",
    period: "Janv. 2021 – Aujourd'hui",
    description: [
      "Conception et déploiement d'architectures AWS sécurisées et scalables",
      "Développement fullstack d'applications métiers (Node.js, NextJS)",
      "Mise en place de pipelines CI/CD et automatisation d'infrastructures avec Terraform",
    ],
  },
  {
    title: "Co-fondateur & Directeur Technique",
    company: "pharmacylounge",
    location: "Nantes",
    period: "Janv. 2021 – Janv. 2025",
    description: [
      "Pilotage de la roadmap technique et de la sécurité applicative",
      "Mise en place du dispositif RGPD : rédaction de procédures, DPO interne",
      "Encadrement d'une équipe de développeurs fullstack et DevOps",
    ],
  },
  {
    title: "Directeur de Programme AWS & Terraform Advocate",
    company: "OPEN",
    location: "Paris",
    period: "Janv. 2019 – Déc. 2020",
    description: [
      "Animation nationale de la communauté AWS : webinaires, workshops, formations",
      "Avant-vente et déploiement de solutions Terraform chez grands comptes",
      "Coordination technique des squads et standardisation des bonnes pratiques Cloud",
    ],
  },
  {
    title: "Architecte Solutions AWS",
    company: "GFI Informatique",
    location: "Paris",
    period: "Janv. 2016 – Déc. 2018",
    description: [
      "Migration vers AWS du SI de Veolia : audit, POC, automatisation, sécurité",
      "Conception de modules Terraform pour déploiement multi-environnements",
      "Optimisations des coûts",
    ],
  },
  {
    title: "Architecte solutions & Responsable qualité",
    company: "Bouygues Telecom",
    location: "Paris",
    period: "Mars 2011 – Déc. 2015",
    description: [
      "Architecte Logiciel des Services Bbox TV",
      "Optimisation des algorithmes, benchmark performance sur systèmes embarqués",
      "Gestion des règles de développement",
    ],
  },
  {
    title: "Adobe Flash Platform Expert",
    company: "Freelance",
    location: "Nantes",
    period: "Août 2007 – Mars 2011",
    description: [
      "Architecte Flash, Adobe AIR et Flex",
      "Conception et développement d'applications web interactives",
      "Formation et support technique pour les clients",
    ],
  },
  {
    title: "Autres expériences",
    company: "Divers",
    location: "Nantes",
    period: "Sept. 1998 – Juil. 2007",
    description: [
      "Développeur Flash / Multimédia",
      "Développeur Web",
      "Vidéo production et scripts 3D",
    ],
  },
];

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="mb-8 border-2"
      role="region"
      aria-label="Expériences professionnelles"
    >
      <CardHeader>
        <CardTitle className="text-2xl">Expériences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Les 2 premières expériences toujours visibles */}
        {experiences.slice(0, 2).map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="text-muted-foreground text-sm mb-2">
              {exp.company} · {exp.location} · {exp.period}
            </p>
            <ul className="space-y-1 text-muted-foreground" role="list">
              {exp.description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Expériences supplémentaires - toujours dans le DOM pour SEO, mais cachées visuellement */}
        <div
          className={`space-y-6 transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-[820px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isExpanded}
        >
          {experiences.slice(2).map((exp, index) => (
            <div key={index + 2} className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {exp.company} · {exp.location} · {exp.period}
              </p>
              <ul className="space-y-1 text-muted-foreground" role="list">
                {exp.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {experiences.length > 2 && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-muted-foreground hover:text-foreground p-0 h-auto"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Voir moins" : "Voir plus d'expériences…"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
