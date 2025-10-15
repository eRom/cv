"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className="mb-8 border-2"
      role="region"
      aria-label="Introduction"
    >
      <CardHeader>
        <CardTitle className="text-2xl">À propos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-lg leading-relaxed space-y-3">
          <p>
            Architecte Cloud & Développeur Fullstack, j&apos;accompagne la transformation numérique avec plus de 20 ans d&apos;expertise et une forte résilience après un accident de santé.
          </p>
         
          <p>
            Animé par la satisfaction client, l&apos;innovation et l&apos;agilité, je veux contribuer au secteur de la santé.
          </p>
        </div>

        {/* Contenu toujours présent dans le DOM pour le SEO, mais caché visuellement */}
        <div
          className={`text-muted-foreground leading-relaxed space-y-3 pt-2 transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isExpanded}
        >
          <p>
            Après un AVC en janvier 2025, j&apos;ai engagé une reconversion active et une intense rééducation. Cette épreuve m&apos;a permis de développer une grande capacité d&apos;adaptation et de renforcer mon engagement professionnel.
          </p>
          <p>
            J&apos;ai accompagné startups et grands groupes dans la réalisation de projets techniques ambitieux (fullstack, automatisation, sécurité SI, conformité RGPD). Passionné par les défis humains et technologiques, je souhaite aujourd&apos;hui mettre mon énergie et mon expertise au service d&apos;une équipe engagée.
          </p>
          <p>
            Mon objectif : apporter une valeur ajoutée concrète en santé digitale, sécuriser et accélérer l&apos;évolution numérique de l&apos;organisation.
          </p>
        </div>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-muted-foreground hover:text-foreground p-0 h-auto"
          aria-expanded={isExpanded}
        >
          {isExpanded ? "Lire moins" : "Lire la suite…"}
        </Button>
      </CardContent>
    </Card>
  );
}
