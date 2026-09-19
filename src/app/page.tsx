"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Sparkles, Terminal, BookOpen } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Home() {
  const router = useRouter();
  const [hoveredSide, setHoveredSide] = useState<"a" | "b" | null>(null);

  // Raccourcis clavier A, 1 pour Console / B, 2 pour Scrollytelling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ["INPUT", "TEXTAREA"].includes(
          (document.activeElement as HTMLElement)?.tagName
        )
      ) {
        return;
      }
      if (e.key === "a" || e.key === "A" || e.key === "1") {
        router.push("/dashboard");
      } else if (e.key === "b" || e.key === "B" || e.key === "2") {
        router.push("/scrollytelling");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Halo lumineux supérieur d'ambiance */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-3xl py-10 sm:py-14 flex flex-col gap-9">
        {/* En-tête profil Romain Ecarnot */}
        <header className="flex flex-col items-center text-center gap-4">
          <div className="relative">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 ring-1 ring-zinc-800 bg-zinc-900/60 shadow-2xl shadow-black/60">
              <Image
                src="/avatar.jpg"
                alt="Photo de profil de Romain Ecarnot"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Indicateur d'activité pulsant */}
            <span
              className="absolute bottom-1 right-1 flex h-3.5 w-3.5"
              title="Disponible pour de nouveaux projets"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-[#09090b]" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              CV Interactif · Deux visions face à face
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Romain Ecarnot
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-medium max-w-lg">
              Passeur du numérique &amp; Architecte du simple
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-md">
              25 ans d&apos;architecture des systèmes aujourd&apos;hui au service de ceux qui les utilisent.
            </p>
          </div>
        </header>

        {/* DIRECTION 04 : TACTICAL COCKPIT VS */}
        <section
          className="relative w-full rounded-2xl bg-[#0d0e12] border border-zinc-800 p-4 sm:p-6 shadow-2xl shadow-black/80 before:content-['+'] before:absolute before:top-2.5 before:left-3.5 before:font-mono before:text-xs before:text-zinc-600 after:content-['+'] after:absolute after:top-2.5 after:right-3.5 after:font-mono after:text-xs after:text-zinc-600"
          aria-label="Sélection opérationnelle de votre expérience de CV"
        >
          {/* Barre technique supérieure */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-5">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              <span>SÉLECTION OPÉRATIONNELLE</span>
              <span className="text-zinc-600">{"//"}</span>
              <span>CV PROTOCOLE</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                A : Console
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                B : Scrolly
              </span>
            </div>
          </div>

          {/* Grille Cockpit avec commutateur central */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
            
            {/* BAIE A : Console d'Architecte */}
            <Link
              href="/dashboard"
              onMouseEnter={() => setHoveredSide("a")}
              onMouseLeave={() => setHoveredSide(null)}
              className="group relative flex flex-col justify-between min-h-[300px] p-5 sm:p-6 rounded-xl border transition-all duration-200 bg-[#121318] border-zinc-800 hover:border-sky-500/50 hover:bg-[#141720] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    CANAL_01 // SYS
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700/50 text-[10px] font-mono text-zinc-400">
                    Touche 1
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                    Console d&apos;Architecte
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mb-4">
                  Écran de contrôle dense et scannable. Raccourcis clavier (1-4), matrice des compétences croisée et schémas d&apos;architecture SVG.
                </p>

                <div className="bg-[#08080a] border border-zinc-800/80 rounded-lg p-2.5 font-mono text-xs text-zinc-500 mb-4 leading-relaxed">
                  <div className="text-zinc-400">$ route --target /dashboard</div>
                  <div className="text-sky-400 mt-0.5">status: 200 OK | zero-dependency</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs font-mono font-bold text-sky-400">
                <span>ENGAGER LA CONSOLE</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  [ENTER] &rarr;
                </span>
              </div>
            </Link>

            {/* PILIER CENTRAL VS */}
            <div className="flex md:flex-col items-center justify-center gap-2 my-1 md:my-0 select-none">
              <div
                className={`hidden md:block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  hoveredSide === "a"
                    ? "bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                    : "bg-zinc-700"
                }`}
              />
              <div className="w-16 h-8 md:w-11 md:h-18 rounded-full md:rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner shadow-black">
                <span className="font-mono text-xs font-extrabold tracking-wider text-zinc-300">
                  VS
                </span>
              </div>
              <div
                className={`hidden md:block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  hoveredSide === "b"
                    ? "bg-amber-400 shadow-[0_0_10px_#f59e0b]"
                    : "bg-zinc-700"
                }`}
              />
            </div>

            {/* BAIE B : Scrollytelling Documentaire */}
            <Link
              href="/scrollytelling"
              onMouseEnter={() => setHoveredSide("b")}
              onMouseLeave={() => setHoveredSide(null)}
              className="group relative flex flex-col justify-between min-h-[300px] p-5 sm:p-6 rounded-xl border transition-all duration-200 bg-[#121318] border-zinc-800 hover:border-amber-500/50 hover:bg-[#1c1714] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    CANAL_02 // DOC
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700/50 text-[10px] font-mono text-zinc-400">
                    Touche 2
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                    Scrollytelling Documentaire
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mb-4">
                  Format d&apos;enquête narrative. Défilement progressif, 4 compteurs réactifs, tournant post-AVC et bascule clair/sombre.
                </p>

                <div className="bg-[#08080a] border border-zinc-800/80 rounded-lg p-2.5 font-mono text-xs text-zinc-500 mb-4 leading-relaxed">
                  <div className="text-zinc-400">$ view --format long-story</div>
                  <div className="text-amber-400 mt-0.5">mode: narrative | metrics: 4-live</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs font-mono font-bold text-amber-400">
                <span>OUVRIR LE DOSSIER</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  [ENTER] &rarr;
                </span>
              </div>
            </Link>

          </div>
        </section>

        {/* Boutons de contact & réseaux conservés à l'identique */}
        <nav className="flex flex-wrap items-center justify-center gap-3 pt-2" aria-label="Liens et contacts">
          <a
            href="https://www.linkedin.com/in/romainecarnot/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 text-[#0a66c2]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/eRom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <GitHubIcon className="w-4 h-4 text-zinc-300" />
            <span>GitHub</span>
          </a>

          <a
            href="https://romain-ecarnot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Site &amp; Outils</span>
          </a>

          <a
            href="mailto:hire@romain-ecarnot.com"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>hire@romain-ecarnot.com</span>
          </a>
        </nav>

        {/* Pied de page sobre */}
        <footer className="flex flex-col items-center gap-1.5 text-center pt-4 border-t border-zinc-900 text-zinc-400 font-mono text-[11px]">
          <span>Romain Ecarnot · Nantes, France</span>
          <span>Accompagnement aux usages du numérique &amp; de l&apos;IA · RQTH</span>
        </footer>
      </main>
    </div>
  );
}
