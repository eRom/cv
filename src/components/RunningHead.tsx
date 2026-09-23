"use client";

import { useCurrentQuestion } from "@/lib/readingProgress";
import { fr } from "@/lib/typography";

// Titre courant du mobile, comme en haut des pages intérieures d'un journal : la question en cours,
// son rang, et un retour au sommaire. Il se pose sur la page sans la décaler.
export function RunningHead({ questions }: { questions: { id: string; text: string }[] }) {
  const currentId = useCurrentQuestion();
  const index = questions.findIndex((question) => question.id === currentId);

  return (
    <div className="sticky top-0 z-10 h-0 lg:hidden">
      {index >= 0 && (
        <a
          href="#sommaire"
          aria-label={fr(
            `Question ${index + 1} sur ${questions.length} : ${questions[index].text} Retour au sommaire`,
          )}
          className="paper-surface absolute inset-x-0 top-0 -mx-4 flex items-baseline gap-2.5 border-b border-ink px-4 py-2.5 sm:-mx-8 sm:px-8"
        >
          <span className="tabular font-grotesk text-[0.9375rem] leading-none font-black [font-variation-settings:'wdth'_72]">
            {`${index + 1}/${questions.length}`}
          </span>
          <span className="min-w-0 truncate font-grotesk text-[0.9375rem] leading-tight font-bold [font-variation-settings:'wdth'_84]">
            {fr(questions[index].text)}
          </span>
        </a>
      )}
    </div>
  );
}
