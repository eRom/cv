"use client";

import Link from "next/link";
import { useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
import { createLocalStore, parseStringList } from "@/lib/localStore";

// Mémoire des lectures faites sur le CV (propre à cv.romain-ecarnot.com).
const readLinks = createLocalStore("cv-romain-ecarnot:lectures", "[]");

export function markAsRead(href: string) {
  // Une valeur illisible est remplacée : les coches ne restent jamais bloquées.
  const hrefs = parseStringList(readLinks.read());
  if (!hrefs.includes(href)) readLinks.write(JSON.stringify([...hrefs, href]));
}

/** Indique si une adresse a déjà été consultée depuis ce navigateur. */
export function useIsRead(href: string): boolean {
  const snapshot = useSyncExternalStore(readLinks.subscribe, readLinks.read, () => "[]");
  return parseStringList(snapshot).includes(href);
}

// Coche au crayon, tracée une fois quand le lien a été consulté.
export function ReadTick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 16" aria-hidden="true" className={className}>
      <path
        className="tick-draw"
        pathLength={1}
        d="M2.2 8.9c1.5 1.2 2.7 2.6 3.9 4.5C8.5 8.6 12.2 4.5 17.8 1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface TrackedLinkProps {
  href: string;
  external?: boolean;
  className?: string;
  tickClassName?: string;
  children: ReactNode;
}

// Lien qui garde la marque du crayon : une fois consulté, il porte sa coche (mémorisée en local).
export function TrackedLink({
  href,
  external = false,
  className,
  tickClassName = "ml-2 inline-block h-[0.8em] w-[1em] align-baseline",
  children,
}: TrackedLinkProps) {
  const read = useIsRead(href);

  const content = (
    <>
      {children}
      {read && (
        <>
          <ReadTick className={tickClassName} />
          <span className="sr-only">, déjà consulté</span>
        </>
      )}
      {external && <span className="sr-only"> (nouvel onglet)</span>}
    </>
  );

  // Clic principal ou clic molette (ouverture dans un nouvel onglet) : les deux valent lecture.
  const handleAuxClick = (event: MouseEvent) => {
    if (event.button === 1) markAsRead(href);
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={() => markAsRead(href)}
        onAuxClick={handleAuxClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      onClick={() => markAsRead(href)}
      onAuxClick={handleAuxClick}
    >
      {content}
    </Link>
  );
}
