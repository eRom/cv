"use client";

import Link from "next/link";
import { markAsRead, ReadTick } from "@/components/TrackedLink";
import { REPORTAGE_PATH } from "@/data/cv";
import { useInterviewProgress } from "@/lib/readingProgress";
import { fr } from "@/lib/typography";

// Le sommaire du grand reportage sur l'accueil : les questions du recruteur servent d'appel,
// et le crayon y reporte les questions déjà lues dans l'entretien.
export function ReportageTeaser({ questions }: { questions: { id: string; text: string }[] }) {
  const progress = useInterviewProgress();

  return (
    <section aria-labelledby="au-sommaire">
      <h2 id="au-sommaire" className="type-rubric border-t-[3px] border-ink pt-2">
        Dans le grand reportage
      </h2>
      <ol className="mt-1 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-3 md:gap-x-10">
        {questions.map((question, index) => {
          const read = progress.read.includes(question.id);
          return (
            <li
              key={question.id}
              className="border-t border-ink first:border-t-0 md:[&:nth-child(3n+1)]:border-t-0"
            >
              <Link
                href={`${REPORTAGE_PATH}#${question.id}`}
                onClick={() => markAsRead(REPORTAGE_PATH)}
                className="group grid grid-cols-[1.75rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-2 py-2.5"
              >
                <span className="tabular font-grotesk text-lg leading-none font-black [font-variation-settings:'wdth'_72]">
                  {index + 1}
                </span>
                <span className="font-grotesk text-[1.0625rem] leading-snug font-bold [font-variation-settings:'wdth'_84]">
                  <span className="pencil">{fr(question.text)}</span>
                </span>
                <span className="self-center">
                  {read && (
                    <>
                      <ReadTick className="block h-[0.85em] w-[1.05em]" />
                      <span className="sr-only">, lue</span>
                    </>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
