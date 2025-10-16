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
      <div className="w-14 h-14" aria-hidden="true" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 h-14 w-14 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg shadow-black/5 hover:bg-white/20 hover:border-white/30 transition-all duration-300 print:hidden before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-foreground relative z-10 transition-transform hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-6 w-6 text-foreground relative z-10 transition-transform hover:-rotate-12 duration-300" />
      )}
    </Button>
  );
}
