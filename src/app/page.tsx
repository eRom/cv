import Image from "next/image";
import { Colophon } from "@/components/Colophon";
import { Folio } from "@/components/Folio";
import { ReadingCoupon } from "@/components/ReadingCoupon";
import { ReportageTeaser } from "@/components/ReportageTeaser";
import { TrackedLink } from "@/components/TrackedLink";
import { GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/data/cv";
import { QUESTIONS, readingMinutes } from "@/data/reportage";
import { fr } from "@/lib/typography";

export default function HomePage() {
  return (
    <>
      <Folio current="cv" lead={{ label: "Suite de la page Portrait", href: SITE_URL }} />

      <main id="contenu" className="mx-auto w-full max-w-[88rem] px-4 sm:px-8 lg:px-10">
        {/* Sur mobile : titre, bulletin, signature. En grand écran, le bulletin tient la colonne de droite. */}
        <div className="grid gap-x-12 gap-y-10 pt-6 pb-14 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:pt-10 lg:pb-20">
          <header className="flex flex-col gap-6 lg:col-span-7 lg:gap-7">
            <h1 className="type-headline text-[clamp(2.6rem,10.5vw,4.75rem)] lg:text-[clamp(3.5rem,6.6vw,6rem)]">
              <span className="block">Romain Ecarnot,</span>
              <span className="block">{fr("à lire au choix.")}</span>
            </h1>
            <p className="type-deck max-w-[38ch] text-[clamp(1.1875rem,1.8vw,1.5rem)]">
              {fr(
                "Vingt-cinq ans d'architecture des systèmes, aujourd'hui au service de ceux qui les utilisent. Son CV se lit en grand reportage, pour le récit et les preuves, ou dans la Console, pour l'essentiel d'un coup d'œil ; il s'imprime aussi, en deux pages.",
              )}
            </p>
          </header>

          <div className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <ReadingCoupon reportageMinutes={readingMinutes()} />
          </div>

          {/* Signature : la vignette du portrait ramène à la page Portrait du site. */}
          <div className="lg:col-span-7 lg:row-start-2">
            <div className="flex items-center gap-4 border-t border-ink pt-5 sm:gap-5">
              <a
                href={SITE_URL}
                aria-label="Romain Ecarnot sur romain-ecarnot.com"
                className="relative block size-[4.5rem] shrink-0 overflow-hidden sm:size-20"
              >
                <Image
                  src="/portrait.jpg"
                  alt=""
                  fill
                  sizes="160px"
                  className="origin-[46%_30%] scale-[1.55] object-cover object-[46%_30%]"
                />
              </a>
              <div className="flex min-w-0 flex-col gap-2">
                <p className="type-caption">
                  <span className="font-bold text-ink">Romain Ecarnot</span>
                  {fr(", basé à Nantes, disponible pour de nouveaux projets.")}
                </p>
                <p className="type-folio flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="text-ink-soft">Ailleurs</span>
                  <TrackedLink href={LINKEDIN_URL} external className="pencil">
                    LinkedIn
                  </TrackedLink>
                  <TrackedLink href={GITHUB_URL} external className="pencil">
                    GitHub
                  </TrackedLink>
                </p>
              </div>
            </div>
          </div>

          {/* Les questions de l'entretien servent d'appel au grand reportage. */}
          <div className="lg:col-span-12">
            <ReportageTeaser questions={QUESTIONS} />
          </div>
        </div>
      </main>

      <Colophon />
    </>
  );
}
