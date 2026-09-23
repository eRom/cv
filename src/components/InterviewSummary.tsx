"use client";

import { useEffect } from "react";
import { ReadTick } from "@/components/TrackedLink";
import { WORDS_PER_MINUTE } from "@/lib/reading";
import {
  readProgress,
  saveProgress,
  setCurrentQuestion,
  useCurrentQuestion,
  useInterviewProgress,
} from "@/lib/readingProgress";
import { fr } from "@/lib/typography";

// Ligne de lecture : la question en cours est celle dont le haut est passé au-dessus.
const READING_LINE = 0.4;
// Bande de lecture : une question compte comme lue après y avoir été tenue assez longtemps.
const BAND_TOP = 0.15;
const BAND_BOTTOM = 0.85;
// Seuil par question : 30 % de son temps de lecture estimé, entre 2,5 et 8 secondes.
const DWELL_SHARE = 0.3;
const DWELL_MIN_MS = 2500;
const DWELL_MAX_MS = 8000;
const SAMPLE_MS = 500;

function dwellThreshold(section: HTMLElement): number {
  const words = (section.textContent ?? "").split(/\s+/).filter(Boolean).length;
  const estimate = (words / WORDS_PER_MINUTE) * 60_000 * DWELL_SHARE;
  return Math.min(DWELL_MAX_MS, Math.max(DWELL_MIN_MS, estimate));
}

interface InterviewSummaryProps {
  questions: { id: string; text: string }[];
  className?: string;
}

// Sommaire de l'entretien : le crayon du lecteur coche chaque question lue et souligne celle en cours.
export function InterviewSummary({ questions, className }: InterviewSummaryProps) {
  const progress = useInterviewProgress();
  const currentId = useCurrentQuestion();

  useEffect(() => {
    const sections = questions
      .map((question) => document.getElementById(question.id))
      .filter((section): section is HTMLElement => section !== null);
    const thresholds = new Map(sections.map((section) => [section.id, dwellThreshold(section)]));
    const dwell = new Map<string, number>();
    let frame = 0;
    let lastSample = performance.now();

    function locate() {
      frame = 0;
      const line = window.innerHeight * READING_LINE;
      const atEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      // En bas de page, les dernières questions ne passent jamais la ligne : la dernière est la question en cours.
      if (atEnd && sections.length > 0) current = sections[sections.length - 1].id;
      setCurrentQuestion(current);
      if (current) {
        const stored = readProgress();
        if (stored.last !== current) saveProgress({ ...stored, last: current });
      }
    }

    // Le temps passé s'accumule pour chaque question tenue dans la bande de lecture, page au premier plan.
    // Un saut par le sommaire ne coche donc rien : les questions franchies n'y ont pas été tenues.
    function sample() {
      const now = performance.now();
      const elapsed = Math.min(now - lastSample, 1000);
      lastSample = now;
      if (document.visibilityState !== "visible") return;
      const height = window.innerHeight;
      const bandTop = height * BAND_TOP;
      const bandBottom = height * BAND_BOTTOM;
      const done: string[] = [];
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visible = Math.min(rect.bottom, bandBottom) - Math.max(rect.top, bandTop);
        if (visible < Math.min(rect.height, bandBottom - bandTop) * 0.4) continue;
        const total = (dwell.get(section.id) ?? 0) + elapsed;
        dwell.set(section.id, total);
        if (total >= (thresholds.get(section.id) ?? DWELL_MIN_MS)) done.push(section.id);
      }
      if (done.length === 0) return;
      const stored = readProgress();
      const fresh = done.filter((id) => !stored.read.includes(id));
      if (fresh.length > 0) saveProgress({ ...stored, read: [...stored.read, ...fresh] });
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(locate);
    }

    locate();
    const timer = window.setInterval(sample, SAMPLE_MS);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      setCurrentQuestion(null);
    };
  }, [questions]);

  // Avant la première question, le crayon marque l'endroit où la lecture s'était arrêtée.
  const resumeId = currentId === null && progress.last !== questions[0]?.id ? progress.last : null;

  return (
    <nav id="sommaire" aria-labelledby="sommaire-titre" className={`scroll-mt-6 ${className ?? ""}`}>
      <h2 id="sommaire-titre" className="type-rubric border-t-[3px] border-ink pt-2">
        {fr("L'entretien en neuf questions")}
      </h2>
      <ol className="mt-1">
        {questions.map((question, index) => {
          const isRead = progress.read.includes(question.id);
          const isCurrent = question.id === currentId;
          const isResume = question.id === resumeId;
          return (
            <li key={question.id} className="border-t border-ink first:border-t-0">
              <a
                href={`#${question.id}`}
                aria-current={isCurrent ? "location" : undefined}
                className="group grid grid-cols-[1.5rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-2 py-1.5"
              >
                <span className="tabular font-grotesk text-base leading-none font-black [font-variation-settings:'wdth'_72]">
                  {index + 1}
                </span>
                <span className="font-grotesk text-[0.9375rem] leading-snug font-bold [font-variation-settings:'wdth'_84]">
                  <span className={`pencil ${isCurrent || isResume ? "pencil-marked" : ""}`}>
                    {fr(question.text)}
                  </span>
                  {isResume && <span className="type-caption font-medium"> · reprendre ici</span>}
                </span>
                <span className="self-center">
                  {isRead && (
                    <>
                      <ReadTick className="block h-[0.85em] w-[1.05em]" />
                      <span className="sr-only">, lue</span>
                    </>
                  )}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
