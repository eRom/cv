import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "@/components/TrackedLink";
import type { Proof } from "@/data/reportage";
import { fr } from "@/lib/typography";

// Encadré de preuve : posé sous la réponse qu'il prouve. À gauche la fiche, à droite les faits, séparés d'un filet.
export function ProofBox({ proof }: { proof: Proof }) {
  const titleId = `preuve-${proof.id}`;
  return (
    <aside
      aria-labelledby={titleId}
      className="grid border-[3px] border-ink md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
    >
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <p className="flex flex-col gap-1.5">
          <span
            id={titleId}
            className="font-grotesk text-[clamp(1.625rem,2.4vw,2.125rem)] leading-none font-black hyphens-none [font-variation-settings:'wdth'_74]"
          >
            {proof.name}
          </span>
          <span className="tabular font-grotesk text-base leading-none font-black whitespace-nowrap [font-variation-settings:'wdth'_72]">
            {proof.period}
          </span>
        </p>
        <p className="type-deck text-[1.125rem]">{fr(proof.headline)}</p>
        <p className="type-body text-[0.9375rem] leading-snug text-ink-soft">{fr(proof.intro)}</p>
        {proof.link && (
          <TrackedLink
            href={proof.link.href}
            external
            className="group mt-1 inline-flex items-baseline gap-1.5 self-start font-grotesk text-[0.9375rem] font-extrabold [font-variation-settings:'wdth'_84]"
          >
            <span className="pencil">{proof.link.label}</span>
            <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-4 shrink-0 self-center" />
          </TrackedLink>
        )}
        {proof.note && <p className="type-caption">{fr(proof.note)}</p>}
      </div>
      <ul className="border-t border-ink px-5 sm:px-6 md:border-t-0 md:border-l">
        {proof.points.map((point) => (
          <li
            key={point.strong}
            className="type-body border-t border-ink py-3 text-[0.9375rem] leading-snug first:border-t-0"
          >
            {point.before && fr(point.before)}
            <strong className="font-bold">{fr(point.strong)}</strong>
            {fr(point.rest)}
          </li>
        ))}
      </ul>
    </aside>
  );
}
