// Petite mémoire locale partagée entre composants et onglets, lisible sans casser le rendu serveur.
export interface LocalStore {
  subscribe: (onChange: () => void) => () => void;
  read: () => string;
  write: (value: string) => void;
}

export function createLocalStore(key: string, fallback: string): LocalStore {
  const listeners = new Set<() => void>();
  // Relais en mémoire : sans stockage (navigation privée), l'état tient au moins le temps de la visite.
  let memory: string | null = null;

  return {
    subscribe(onChange) {
      listeners.add(onChange);
      const onStorage = (event: StorageEvent) => {
        if (event.key === null || event.key === key) onChange();
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(onChange);
        window.removeEventListener("storage", onStorage);
      };
    },
    read() {
      try {
        return window.localStorage.getItem(key) ?? memory ?? fallback;
      } catch {
        return memory ?? fallback;
      }
    },
    write(value) {
      memory = value;
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // Stockage indisponible : le relais en mémoire suffit pour cette visite.
      }
      listeners.forEach((listener) => listener());
    },
  };
}

/** Lit un tableau de chaînes ; une valeur illisible vaut un tableau vide, qu'on réécrit à la prochaine écriture. */
export function parseStringList(value: string): string[] {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}
