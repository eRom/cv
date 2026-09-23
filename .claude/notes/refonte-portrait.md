# Refonte du CV dans le monde « page Portrait » (session du 23/09/2026)

Demande : refondre l'accueil `/` et le reportage `/scrollytelling` dans le monde de romain-ecarnot.com ; Console `/dashboard` intacte ; aucun commit, push ni déploiement sans le feu vert de Romain.

## Décisions de Romain (23/09)
- Email : contact@ (remplace hire@ : JSON-LD, llms.txt, accueil, reportage). La Console affiche encore hire@ (2 endroits de `public/dashboard/index.html`) : question ouverte.
- AVC : discret, question 8 « Et 2025 ? » ; la phrase « Je sais où le numérique perd les gens » reste comme argument pro.
- Action principale de l'accueil : le grand reportage. Méthode : code direct.
- Accueil : « Le bulletin de lecture » (seed 34bdb3c1). Reportage : « Le CV en questions » (seed 8e51affa). Briefs dans `.impeccable/surfaces/`.

## État
- Construit : `src/app/page.tsx` (bulletin `ReadingCoupon`, sommaire `ReportageTeaser`), `src/app/scrollytelling/page.tsx` (`InterviewSummary`, `RunningHead`, `ProofBox`), socle (`globals.css`, `layout.tsx`, `Folio`, `Colophon`, `TrackedLink`, `lib/localStore`, `lib/readingProgress`). Ancien reportage statique à la corbeille ; réécriture `/scrollytelling` retirée.
- Revue de fin : tour 1 « fix » (8 points), tour 2 : 6 résolus ; restes traités (colonne de lecture unique, « couper le clavier »). Captures : `.impeccable/review/`.
- Vérifié à la main : S ouvre le reportage et le coche, Cmd+C ne navigue plus, clavier coupé = touches inertes ; Console sans diff ; build de prod vert.

## Questions ouvertes pour Romain
1. Garder ou retirer le sommaire « Dans le grand reportage » ajouté sur l'accueil (ajout non demandé, signalé par la revue).
2. Tests : aucun test dans le dépôt ; la logique de lecture n'est vérifiée que par captures et essais manuels.
3. Valider la copie nouvelle : titre de l'accueil, chapeaux, questions, citation-titre du reportage.
4. Console : passer hire@ en contact@ ?

## Hors périmètre, signalé
- `public/dir1.html` à `dir5.html` : prototypes publics avec hire@.
- `src/lib/utils.ts` (cn) inutilisé, avec clsx, tailwind-merge, class-variance-authority et `components.json` (reliquats shadcn antérieurs). `tw-animate-css` retiré par cette session (son import a disparu avec le nouveau `globals.css`).
- `public/og-image.jpg` encore dans l'ancien monde sombre.
- `.gitignore` modifié et `.ignore` créé par l'outil graft, pas par cette session.
