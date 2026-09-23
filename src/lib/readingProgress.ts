import { useSyncExternalStore } from "react";
import { createLocalStore } from "@/lib/localStore";

// Progression de lecture de l'entretien : questions lues et dernière question ouverte, gardées en local.
const EMPTY = '{"read":[],"last":null}';
const progressStore = createLocalStore("cv-romain-ecarnot:entretien", EMPTY);

export interface Progress {
  read: string[];
  last: string | null;
}

export function parseProgress(snapshot: string): Progress {
  try {
    const value = JSON.parse(snapshot) as Partial<Progress>;
    return {
      read: Array.isArray(value.read) ? value.read.filter((id) => typeof id === "string") : [],
      last: typeof value.last === "string" ? value.last : null,
    };
  } catch {
    return { read: [], last: null };
  }
}

export function readProgress(): Progress {
  return parseProgress(progressStore.read());
}

export function saveProgress(next: Progress) {
  progressStore.write(JSON.stringify(next));
}

export function useInterviewProgress(): Progress {
  const snapshot = useSyncExternalStore(progressStore.subscribe, progressStore.read, () => EMPTY);
  return parseProgress(snapshot);
}

// Question en cours de lecture : état de la visite, partagé entre le sommaire et le titre courant du mobile.
let currentQuestion: string | null = null;
const currentListeners = new Set<() => void>();

export function setCurrentQuestion(id: string | null) {
  if (id === currentQuestion) return;
  currentQuestion = id;
  currentListeners.forEach((listener) => listener());
}

function subscribeCurrent(onChange: () => void) {
  currentListeners.add(onChange);
  return () => {
    currentListeners.delete(onChange);
  };
}

export function useCurrentQuestion(): string | null {
  return useSyncExternalStore(subscribeCurrent, () => currentQuestion, () => null);
}
