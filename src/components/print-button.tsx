"use client";

import { useState } from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

/**
 * Bouton de téléchargement du CV en PDF
 * Télécharge un PDF professionnel généré côté serveur
 */
export function PrintButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsLoading(true);

      // Télécharger le PDF depuis l'API
      const response = await fetch("/api/cv-pdf");

      if (!response.ok) {
        throw new Error("Erreur lors de la génération du PDF");
      }

      // Créer un blob depuis la réponse
      const blob = await response.blob();

      // Créer un lien de téléchargement
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Romain-Ecarnot.pdf";
      document.body.appendChild(link);
      link.click();

      // Nettoyage
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement du PDF:", error);
      alert("Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDownloadPDF}
      disabled={isLoading}
      className="fixed top-4 left-4 z-50 h-14 w-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-black/5 hover:bg-white/20 hover:border-white/30 transition-all duration-300 print:hidden disabled:opacity-50 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50"
      aria-label="Télécharger le CV en PDF"
      title="Télécharger le CV en PDF"
    >
      <FontAwesomeIcon
        icon={faFilePdf}
        className={`h-6 w-6 text-foreground relative z-10 ${isLoading ? "animate-pulse" : ""}`}
        aria-hidden="true"
      />
    </Button>
  );
}
