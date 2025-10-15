"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Composant de basculement entre mode clair et mode sombre
 * Utilise localStorage pour persister la préférence utilisateur
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Éviter les problèmes d'hydratation SSR
  useEffect(() => {
    setMounted(true);

    // Charger la préférence depuis localStorage ou system
    const stored = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = stored === "dark" || (!stored && systemPreference);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Ne rien afficher pendant le SSR
  if (!mounted) {
    return (
      <div className="w-10 h-10" aria-hidden="true" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full hover:bg-accent/50 transition-all print:hidden"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-foreground transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-transform hover:-rotate-12 duration-300" />
      )}
    </Button>
  );
}
