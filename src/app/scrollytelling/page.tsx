import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Colophon } from "@/components/Colophon";
import { Folio } from "@/components/Folio";
import { InterviewSummary } from "@/components/InterviewSummary";
import { ProofBox } from "@/components/ProofBox";
import { RunningHead } from "@/components/RunningHead";
import { TrackedLink } from "@/components/TrackedLink";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, PDF_PATH, SITE_URL } from "@/data/cv";
import {
  AVAILABILITY,
  CHAPEAU,
  CREDENTIALS,
  LEAD,
  LIVED_EXPERIENCE,
  MILESTONES,
  PILLARS,
  PROOFS,
  QUESTIONS,
  SKILLS,
  TITLE_QUOTE,
} from "@/data/reportage";
import { fr } from "@/lib/typography";

const PAGE_URL = "https://cv.romain-ecarnot.com/scrollytelling";
const PAGE_TITLE = "Romain Ecarnot - Le CV en questions | Grand reportage";
const PAGE_DESCRIPTION =
  "Le CV de Romain Ecarnot en neuf questions de recruteur : ce qu'il fait, les systèmes qui le prouvent, son parcours. Accompagnement aux usages du numérique et de l'IA.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "Romain Ecarnot",
    images: [{ url: "https://cv.romain-ecarnot.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const [solutions, watch, data, transmission] = PILLARS;
const [cruchot, trinity, workshop, pharmacylounge] = PROOFS;
// Attaque de la première réponse, en petites capitales comme l'ouverture de la page Portrait.
const LEAD_ATTACK = "J'aide les organisations";
const [leadAttack, leadRest] = LEAD.startsWith(LEAD_ATTACK)
  ? [LEAD_ATTACK, LEAD.slice(LEAD_ATTACK.length)]
  : [undefined, LEAD];

// Une question de l'entretien : numéro en marge, question en titraille, réponse alignée sur la question.
function Question({ index, children }: { index: number; children: ReactNode }) {
  const question = QUESTIONS[index];
  return (
    <section
      id={question.id}
      aria-labelledby={`${question.id}-question`}
      className="grid scroll-mt-14 grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-t border-ink pt-5 pb-10 first-of-type:border-t-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-4 lg:scroll-mt-6 lg:pb-12"
    >
      <span
        aria-hidden="true"
        className="tabular font-grotesk text-[clamp(1.625rem,2.4vw,2rem)] leading-none font-black [font-variation-settings:'wdth'_72]"
      >
        {index + 1}
      </span>
      <h2
        id={`${question.id}-question`}
        className="font-grotesk text-[clamp(1.375rem,2.1vw,1.875rem)] leading-[1.06] font-extrabold text-balance [font-variation-settings:'wdth'_80]"
      >
        {fr(question.text)}
      </h2>
      {/* Sur mobile, la réponse reprend toute la largeur ; dès 40rem, elle s'aligne sur la question. */}
      <div className="col-span-2 mt-3 flex flex-col gap-6 sm:col-span-1 sm:col-start-2">{children}</div>
    </section>
  );
}

// Réponse sur une colonne de lecture d'environ 65 caractères, en drapeau, avec au besoin l'attaque en petites capitales.
// Les réponses font trois à six lignes : les couper en colonnes de journal ferait aller l'œil et venir pour rien.
function Answer({ attack, children }: { attack?: string; children: string }) {
  return (
    <div className="type-body max-w-[38rem]">
      <p className="text-pretty">
        {attack && (
          <span className="font-bold tracking-[0.03em] [font-variant-caps:all-small-caps]">
            {fr(attack)}
          </span>
        )}
        {fr(children)}
      </p>
    </div>
  );
}

export default function ReportagePage() {
  return (
    <>
      <Folio current="reportage" lead={{ label: "romain-ecarnot.com", href: SITE_URL }} />

      <main id="contenu" className="mx-auto w-full max-w-[88rem] px-4 sm:px-8 lg:px-10">
        {/* Sur mobile : portrait, titre, sommaire, entretien. En grand écran, deux colonnes. */}
        <div className="flex flex-col gap-y-8 pt-5 pb-6 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:pt-6">
          <div className="contents lg:col-span-4 lg:flex lg:flex-col lg:gap-8">
            <figure className="order-1 flex flex-col gap-2.5">
              <div className="relative aspect-[5/4] overflow-hidden lg:aspect-[4/3]">
                <Image
                  src="/portrait.jpg"
                  alt="Portrait en noir et blanc de Romain Ecarnot"
                  fill
                  priority
                  sizes="(min-width: 1408px) 420px, (min-width: 1024px) 30vw, 100vw"
                  className="object-cover object-[41%_35%]"
                />
              </div>
              <figcaption className="type-caption">
                <span className="font-bold text-ink">Romain Ecarnot</span>, basé à Nantes.
              </figcaption>
            </figure>

            {/* Le sommaire reste à l'écran pendant toute la lecture. */}
            <InterviewSummary questions={QUESTIONS} className="order-3 lg:sticky lg:top-4" />
          </div>

          <div className="contents lg:col-span-8 lg:block">
            <header className="order-2 flex flex-col gap-6 lg:gap-7">
              <h1
                id="titre"
                className="type-headline text-[clamp(2.4rem,9vw,3.5rem)] lg:text-[clamp(3rem,4.9vw,4.75rem)]"
              >
                <span className="block">{fr("Romain Ecarnot :")}</span>
                <span className="block">{fr(`« ${TITLE_QUOTE} »`)}</span>
              </h1>
              {/* Le chapeau prend toute la largeur du titre (choix de Romain du 23/09/2026). */}
              <p className="type-deck text-[clamp(1.1875rem,1.7vw,1.4375rem)]">
                {fr(CHAPEAU)}
              </p>
            </header>

            <div className="order-4 border-t-[3px] border-ink pt-1 lg:mt-10">
              <RunningHead questions={QUESTIONS} />

              <Question index={0}>
                <Answer attack={leadAttack}>{leadRest}</Answer>
              </Question>

              <Question index={1}>
                <Answer>{transmission.text}</Answer>
              </Question>

              <Question index={2}>
                <Answer>{solutions.text}</Answer>
                <ProofBox proof={cruchot} />
                <ProofBox proof={trinity} />
              </Question>

              <Question index={3}>
                <Answer>{watch.text}</Answer>
                <ProofBox proof={workshop} />
              </Question>

              <Question index={4}>
                <Answer>{data.text}</Answer>
                <ProofBox proof={pharmacylounge} />
              </Question>

              <Question index={5}>
                <ul>
                  {SKILLS.map((skill) => (
                    <li
                      key={skill.heading}
                      className="grid gap-x-6 gap-y-0.5 border-t border-ink py-3 first:border-t-0 first:pt-0 md:grid-cols-[13rem_minmax(0,1fr)]"
                    >
                      <span className="font-grotesk text-[1.0625rem] leading-snug font-extrabold [font-variation-settings:'wdth'_84]">
                        {fr(skill.heading)}
                      </span>
                      <span className="type-body text-[0.9375rem] leading-snug text-ink-soft">
                        {fr(skill.text)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Question>

              <Question index={6}>
                {/* La rupture de 2025 est dessinée en pointillé, comme sur la page Portrait. */}
                <ol>
                  {MILESTONES.map((milestone, position) => {
                    const dashedTop = milestone.isBreak || MILESTONES[position - 1]?.isBreak;
                    return (
                      <li
                        key={`${milestone.period}-${milestone.role}`}
                        className={`grid items-baseline gap-x-5 gap-y-1 border-t border-ink py-3 first:border-t-0 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] ${
                          dashedTop ? "border-dashed" : ""
                        }`}
                      >
                        <span className="tabular font-grotesk text-[clamp(1.25rem,2.2vw,1.625rem)] leading-none font-black [font-variation-settings:'wdth'_72]">
                          {milestone.period}
                        </span>
                        <p className={`type-body text-pretty ${milestone.isBreak ? "text-ink-soft" : ""}`}>
                          <span className="font-semibold">{fr(milestone.role)}</span>
                          {milestone.organisation && (
                            <span className="text-ink-soft">{fr(`, ${milestone.organisation}`)}</span>
                          )}
                          {milestone.detail && (
                            <span className="mt-0.5 block text-[0.9375rem] leading-snug">
                              {fr(milestone.detail)}
                            </span>
                          )}
                        </p>
                      </li>
                    );
                  })}
                </ol>
                <div>
                  <h3 className="type-rubric border-t-[3px] border-ink pt-2">Formations et certifications</h3>
                  <ul className="mt-1">
                    {CREDENTIALS.map((credential) => (
                      <li
                        key={credential.name}
                        className="grid items-baseline gap-x-5 gap-y-1 border-t border-ink py-2.5 first:border-t-0 sm:grid-cols-[8.5rem_minmax(0,1fr)]"
                      >
                        <span className="tabular font-grotesk text-lg leading-none font-black [font-variation-settings:'wdth'_72]">
                          {credential.year}
                        </span>
                        <p className="type-body">
                          {fr(credential.name)}
                          {credential.school && (
                            <span className="text-ink-soft">{fr(`, ${credential.school}`)}</span>
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Question>

              <Question index={7}>
                <Answer>{`${LIVED_EXPERIENCE.context} ${LIVED_EXPERIENCE.insight}`}</Answer>
              </Question>

              <Question index={8}>
                <Answer>{AVAILABILITY}</Answer>
                {/* L'action principale de la page, seule en noir inversé. */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-between gap-6 bg-ink px-5 py-4 text-paper sm:px-6 sm:py-5"
                >
                  <span className="flex flex-col gap-1">
                    <span className="font-grotesk text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight font-extrabold [font-variation-settings:'wdth'_80]">
                      {fr("Écrire à Romain")}
                    </span>
                    <span className="type-caption text-paper-deep">{CONTACT_EMAIL}</span>
                  </span>
                  <ArrowRight aria-hidden="true" strokeWidth={1.75} className="size-7 shrink-0" />
                </a>
                <p className="type-folio flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="text-ink-soft">Ailleurs</span>
                  <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" className="pencil">
                    Le PDF, 2 pages<span className="sr-only"> (nouvel onglet)</span>
                  </a>
                  <TrackedLink href={LINKEDIN_URL} external className="pencil">
                    LinkedIn
                  </TrackedLink>
                  <TrackedLink href={GITHUB_URL} external className="pencil">
                    GitHub
                  </TrackedLink>
                  <Link href="/" className="pencil">
                    Le bulletin de lecture
                  </Link>
                </p>
              </Question>
            </div>
          </div>
        </div>
      </main>

      <Colophon />
    </>
  );
}
