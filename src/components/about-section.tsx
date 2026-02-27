"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8 border-2" role="region" aria-label="Introduction">
      <CardHeader>
        <CardTitle className="text-2xl">À propos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-lg leading-relaxed space-y-3">
          <p>
            Il y a un an, on m&apos;a sauvé la vie. AVC, 47 ans, Hôpital Nord
            Laennec, Nantes. Puis des mois de rééducation au MPR Saint-Jacques
            du CHU.
          </p>
          <p>
            Architecte Cloud & Développeur Fullstack avec 20+ ans
            d&apos;expérience. J&apos;ai traversé l&apos;épreuve — et je suis
            revenu avec les idées en place.
          </p>
        </div>

        {/* Contenu toujours présent dans le DOM pour le SEO, mais caché visuellement */}
        <div
          className={`text-muted-foreground leading-relaxed space-y-3 pt-2 transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isExpanded}
        >
          <p>
            Pendant ma rééducation, j&apos;ai construit Trinity — un système
            d&apos;IA personnel complet. Voice agent temps réel, orchestration
            multi-LLM, mémoire sémantique vectorielle, 30+ endpoints API.
            Node.js, TypeScript, Docker, Gemini, Claude. Pas un tuto suivi un
            dimanche. Un vrai système en production.
          </p>
          <p>
            J&apos;ai accompagné startups et grands groupes dans des projets
            techniques ambitieux : Cloud AWS, DevOps, sécurité SI, conformité
            RGPD. L&apos;AVC n&apos;a rien effacé. Il a recalibré mes
            priorités.
          </p>
          <p>
            Aujourd&apos;hui je suis opérationnel et je veux mettre cette
            énergie au service de quelque chose qui a du sens.
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
