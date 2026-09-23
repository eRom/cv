import Link from "next/link";
import { EditionDate } from "@/components/EditionDate";
import { CONSOLE_PATH, PDF_PATH, REPORTAGE_PATH } from "@/data/cv";
import { editionOf } from "@/lib/edition";

export type Section = "cv" | "reportage";

interface FolioEntry {
  id: Section | "console" | "pdf";
  label: string;
  href: string;
  /** La Console est une page statique hors de Next, le PDF s'ouvre dans un nouvel onglet. */
  kind: "route" | "static" | "document";
}

const ENTRIES: FolioEntry[] = [
  { id: "cv", label: "Le CV", href: "/", kind: "route" },
  { id: "reportage", label: "Reportage", href: REPORTAGE_PATH, kind: "route" },
  { id: "console", label: "Console", href: CONSOLE_PATH, kind: "static" },
  { id: "pdf", label: "PDF", href: PDF_PATH, kind: "document" },
];

interface FolioProps {
  current: Section;
  /** Mention de gauche après la date, façon « Suite de la page 1 ». */
  lead: { label: string; href: string };
}

// Folio de journal : date de l'édition et mention de suite à gauche, sommaire du CV à droite, double filet dessous.
export function Folio({ current, lead }: FolioProps) {
  return (
    <header className="relative mx-auto w-full max-w-[88rem] px-4 pt-3 sm:px-8 lg:px-10">
      <div className="type-folio flex items-baseline justify-between gap-4 pb-2">
        {/* Sous 24rem, la date cède la place au sommaire. */}
        <p className="flex min-w-0 items-baseline gap-2 whitespace-nowrap max-[24rem]:hidden">
          <EditionDate fallback={editionOf(new Date())} />
          <span aria-hidden="true" className="hidden md:inline">
            ·
          </span>
          <a href={lead.href} className="pencil hidden md:inline">
            {lead.label}
          </a>
        </p>
        <nav aria-label="Sommaire du CV" className="max-[24rem]:w-full">
          <ul className="flex items-baseline gap-3.5 whitespace-nowrap max-[24rem]:justify-between sm:gap-6">
            {ENTRIES.map((entry) => {
              const isCurrent = entry.id === current;
              const className = "pencil aria-[current=page]:font-[850]";
              return (
                <li key={entry.id}>
                  {entry.kind === "route" ? (
                    <Link
                      href={entry.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={className}
                    >
                      {entry.label}
                    </Link>
                  ) : (
                    <a
                      href={entry.href}
                      className={className}
                      {...(entry.kind === "document"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {entry.label}
                      {entry.kind === "document" && (
                        <span className="sr-only"> (nouvel onglet)</span>
                      )}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="rule-double" />
    </header>
  );
}
