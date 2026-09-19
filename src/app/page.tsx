import {
  ArrowRight,
  BookOpen,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Halo lumineux supérieur d'ambiance */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-2xl py-10 sm:py-14 flex flex-col gap-10">
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
              CV Interactif · Deux visions
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

        {/* Section de sélection des deux expériences A & B */}
        <section className="flex flex-col gap-4" aria-label="Choix de l'expérience de lecture">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Sélectionnez une expérience
            </h2>
            <span className="text-[11px] font-mono text-zinc-400">
              Format A4 &amp; Web interactif
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* EXPÉRIENCE A : Console d'Architecte */}
            <Link
              href="/dashboard"
              className="group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/90 text-sky-400 group-hover:border-sky-500/50 group-hover:bg-sky-500/10 transition-colors shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        Expérience A
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">/dashboard</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors mt-0.5">
                      Console d&apos;Architecte
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mb-4">
                Interface technique dense, sombre et hautement scannable. Raccourcis clavier (touches 1 à 4), matrice des compétences synchronisée, inspecteur d&apos;architecture SVG et filtre instantané.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/50">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Raccourcis 1-4
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Matrice interactive
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Filtre instantané (/)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Export PDF 2 pages
                </span>
              </div>
            </Link>

            {/* EXPÉRIENCE B : Scrollytelling Documentaire */}
            <Link
              href="/scrollytelling"
              className="group relative flex flex-col p-5 sm:p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-700/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-950 border border-zinc-800/90 text-amber-400 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        Expérience B
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">/scrollytelling</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors mt-0.5">
                      Scrollytelling Documentaire
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed mb-4">
                Grand format narratif conçu selon les codes du journalisme d&apos;investigation. Progression latérale rythmée, compteurs dynamiques incrémentés au défilement, dossier de preuves et focus humain post-AVC.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/50">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Long format
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Scroll progressif
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Compteurs animés
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/30">
                  Mode Clair / Sombre
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Liens de contact & Réseaux */}
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
