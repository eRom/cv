"use client";

import { Copy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { CopyButton } from "@/components/CopyButton";
import { markAsRead, useIsRead } from "@/components/TrackedLink";
import { CONSOLE_PATH, CONTACT_EMAIL, PDF_PATH, REPORTAGE_PATH } from "@/data/cv";
import { createLocalStore } from "@/lib/localStore";
import { fr } from "@/lib/typography";

interface Reading {
  /** Référence du coupon, qui est aussi la touche du clavier qui ouvre la lecture. */
  shortcut: "S" | "C" | "P";
  /** Touches historiques du hub, gardées actives sans être affichées. */
  aliases: string[];
  label: string;
  summary: string;
  href: string;
  /** Route Next, page statique hors de Next (la Console), ou document ouvert dans un nouvel onglet. */
  kind: "route" | "static" | "document";
  primary?: boolean;
}

const READINGS: Reading[] = [
  {
    shortcut: "S",
    aliases: ["2"],
    label: "Je lis le grand reportage",
    summary: "Le récit, les preuves, le parcours.",
    href: REPORTAGE_PATH,
    kind: "route",
    primary: true,
  },
  {
    shortcut: "C",
    aliases: ["1"],
    label: "Je parcours la Console",
    summary: "L'essentiel en quatre vues, au clavier.",
    href: CONSOLE_PATH,
    kind: "static",
  },
  {
    shortcut: "P",
    aliases: [],
    label: "J'imprime le PDF",
    summary: "La version papier, pour la transmettre.",
    href: PDF_PATH,
    kind: "document",
  },
];

// Raccourcis d'une seule touche : actifs par défaut, et qu'on peut couper (WCAG 2.1.4).
const keyboardSetting = createLocalStore("cv-romain-ecarnot:clavier", "on");

function useKeyboardShortcuts(): [boolean, () => void] {
  const value = useSyncExternalStore(keyboardSetting.subscribe, keyboardSetting.read, () => "on");
  const enabled = value !== "off";
  return [enabled, () => keyboardSetting.write(enabled ? "off" : "on")];
}

function openReading(reading: Reading, push: (href: string) => void) {
  markAsRead(reading.href);
  if (reading.kind === "route") push(reading.href);
  else if (reading.kind === "static") window.location.assign(reading.href);
  else window.open(reading.href, "_blank", "noopener,noreferrer");
}

// Case du coupon : la coche au crayon s'y trace au survol et au focus, et y reste une fois la lecture faite.
function CouponBox({ checked }: { checked: boolean }) {
  return (
    <span aria-hidden="true" className="relative mt-1 block size-[1.3rem] border border-current">
      <svg
        viewBox="0 0 20 16"
        data-checked={checked || undefined}
        className="coupon-tick absolute -top-2 -left-0.5 h-[1.6rem] w-8 overflow-visible"
      >
        <path
          pathLength={1}
          d="M2.2 8.9c1.5 1.2 2.7 2.6 3.9 4.5C8.5 8.6 12.2 4.5 17.8 1.9"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface CouponLineProps {
  reading: Reading;
  format: { short: string; spoken: string };
  showShortcut: boolean;
}

function CouponLine({ reading, format, showShortcut }: CouponLineProps) {
  const read = useIsRead(reading.href);
  const inverse = reading.primary === true;

  const lineClass = `group grid grid-cols-[1.3rem_minmax(0,1fr)_auto] items-start gap-x-4 px-5 py-4 focus-visible:-outline-offset-[6px] sm:px-6 ${
    inverse ? "bg-ink py-5 text-paper focus-visible:outline-paper" : ""
  }`;

  const content: ReactNode = (
    <>
      <CouponBox checked={read} />
      <span className="flex min-w-0 flex-col gap-1">
        <span
          className={`font-grotesk leading-[1.08] font-extrabold [font-variation-settings:'wdth'_80] ${
            inverse ? "text-[clamp(1.375rem,1.9vw,1.75rem)]" : "text-[clamp(1.1875rem,1.5vw,1.375rem)]"
          }`}
        >
          {/* Sur le noir inversé, le crayon trace en couleur papier. */}
          <span className={inverse ? "pencil pencil-paper" : "pencil"}>{fr(reading.label)}</span>
        </span>
        <span
          className={`type-body text-[0.9375rem] leading-snug ${inverse ? "text-paper-deep" : "text-ink-soft"}`}
        >
          {fr(reading.summary)}
        </span>
      </span>
      <span className="flex flex-col items-end gap-1.5 pt-0.5 text-right">
        <span
          aria-hidden="true"
          className="tabular font-grotesk text-[1.375rem] leading-none font-black whitespace-nowrap [font-variation-settings:'wdth'_72]"
        >
          {format.short}
        </span>
        <span className="sr-only">{`, ${format.spoken}`}</span>
        {/* La référence est la touche du clavier : affichée en grand écran, tant que le clavier est actif. */}
        {showShortcut && (
          <span
            aria-hidden="true"
            className={`type-folio hidden lg:inline ${inverse ? "text-paper-deep" : "text-ink-soft"}`}
          >
            {`Réf. ${reading.shortcut}`}
          </span>
        )}
      </span>
      {read && <span className="sr-only">, déjà consulté</span>}
      {reading.kind === "document" && <span className="sr-only"> (nouvel onglet)</span>}
    </>
  );

  const shared = {
    className: lineClass,
    "aria-keyshortcuts": showShortcut ? reading.shortcut : undefined,
    onClick: () => markAsRead(reading.href),
  };

  if (reading.kind === "route") {
    return (
      <Link href={reading.href} {...shared}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={reading.href}
      {...shared}
      {...(reading.kind === "document" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

interface ReadingCouponProps {
  /** Durée de lecture du grand reportage, calculée sur son texte. */
  reportageMinutes: number;
}

// Bulletin de lecture, bordé du pointillé des coupons à découper : le recruteur coche la lecture qu'il veut,
// au crayon ou au clavier (réf. S, C, P).
export function ReadingCoupon({ reportageMinutes }: ReadingCouponProps) {
  const router = useRouter();
  const [keyboardOn, toggleKeyboard] = useKeyboardShortcuts();

  useEffect(() => {
    if (!keyboardOn) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      const key = event.key.toUpperCase();
      const reading = READINGS.find((item) => item.shortcut === key || item.aliases.includes(key));
      if (!reading) return;
      event.preventDefault();
      openReading(reading, (href) => router.push(href));
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, keyboardOn]);

  const formats: Record<Reading["shortcut"], { short: string; spoken: string }> = {
    S: { short: `${reportageMinutes} min`, spoken: `${reportageMinutes} minutes de lecture` },
    C: { short: "4 vues", spoken: "quatre vues" },
    P: { short: "2 pages", spoken: "deux pages" },
  };

  return (
    <section aria-labelledby="bulletin" className="border border-dashed border-ink">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 pt-4 pb-3 sm:px-6">
        <h2 id="bulletin" className="type-rubric">
          Bulletin de lecture
        </h2>
        <p className="type-caption lg:hidden">À remplir au crayon</p>
        <p className="type-caption hidden lg:block">
          {keyboardOn ? "Au crayon, ou au clavier · " : "Au crayon · "}
          <button
            type="button"
            onClick={toggleKeyboard}
            className="pencil cursor-pointer text-ink"
            aria-label={keyboardOn ? "Couper les raccourcis clavier" : "Rétablir les raccourcis clavier"}
          >
            {keyboardOn ? "couper le clavier" : "rétablir le clavier"}
          </button>
        </p>
      </div>
      <ul className="border-t border-ink">
        {READINGS.map((reading) => (
          <li key={reading.href} className="border-t border-ink first:border-t-0">
            <CouponLine
              reading={reading}
              format={formats[reading.shortcut]}
              showShortcut={keyboardOn}
            />
          </li>
        ))}
      </ul>
      {/* Le lien n'ouvre une messagerie que si le poste en a une : l'adresse se copie aussi. */}
      <div className="border-t border-ink px-5 pt-3.5 pb-4 sm:px-6">
        <p className="type-caption">{fr("Bulletin à renvoyer à :")}</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-grotesk text-[1.25rem] leading-tight font-extrabold [font-variation-settings:'wdth'_84]"
          >
            <span className="pencil">{CONTACT_EMAIL}</span>
          </a>
          <CopyButton
            text={CONTACT_EMAIL}
            label="Copier l'adresse électronique"
            className="type-folio inline-flex items-center gap-1.5 border border-ink px-3 py-1.5 transition-colors hover:bg-paper-deep"
          >
            <Copy aria-hidden="true" className="size-3.5" strokeWidth={2} />
            Copier
          </CopyButton>
        </div>
      </div>
    </section>
  );
}
