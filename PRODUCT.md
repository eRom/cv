# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primaire : recruteurs et employeurs.** Même public que romain-ecarnot.com (confirmé par Romain le 23/09/2026) : le CV est l'action visée par ce site. Ils évaluent le profil pour un poste ou une mission.
- Situation (inféré) : ils arrivent depuis romain-ecarnot.com (lien « Suite : le CV complet »), LinkedIn, une candidature ou une recherche, avec peu de temps ; une partie veut le PDF pour le transmettre.
- Directeurs techniques et recruteurs tech : public nommé de la Console (`public/llms.txt`).
- Audience machine : moteurs de recherche et moteurs génératifs (JSON-LD du layout, `public/llms.txt`).

## Product Purpose

CV interactif de Romain Ecarnot sur cv.romain-ecarnot.com. Un hub propose deux lectures du même CV : la Console, dense et scannable, et le grand reportage, narratif. Le PDF complète les deux.

Succès : un recruteur choisit sa lecture en quelques secondes, comprend qui est Romain et ce qu'il sait faire, puis prend contact, ouvre LinkedIn ou télécharge le PDF.

## Positioning

- Titre : « Passeur du numérique & Architecte du simple ».
- Mission : faire adopter le numérique et l'IA par ceux qui les utilisent.
- Ce qu'un profil voisin ne peut pas copier : 25 ans d'architecture des systèmes, et une compétence IA prouvée par des systèmes en production (Cruchot, Trinity LifeOS, l'atelier de veille, pharmacylounge) plutôt que déclarée.
- Philosophie : anti-overkill, le chemin le plus court entre l'idée et la production.

## Operating Context

- Trois routes : `/` (hub, Next.js), `/scrollytelling` (le grand reportage, route Next.js depuis le 23/09/2026), `/dashboard` (la Console, HTML statique dans `public/dashboard/`, servi par une réécriture de `next.config.ts`).
- Raccourcis clavier du hub : S ou 2 ouvrent le reportage, C ou 1 la Console, P le PDF ; on peut les couper depuis le bulletin.
- PDF : `public/CV_Romain_Ecarnot.pdf`, ouvert dans un nouvel onglet depuis les deux expériences.
- Consultation desktop et mobile.
- Soumission IndexNow après modification de page : `bun run indexnow`.

## Capabilities and Constraints

- Stack : Next.js 15 (App Router), React 19, Tailwind CSS 4, `bun`. La Console est en HTML, CSS et JavaScript sans dépendance.
- La Console (`/dashboard`) reste intacte : décision de Romain le 23/09/2026.
- Langue : français (`lang="fr"`).
- Le hub garde un titre SEO sous 70 caractères.
- JSON-LD à préserver dans `src/app/layout.tsx` : `ProfilePage`, `Person`, `WebSite` et l'`ItemList` des deux expériences. `public/llms.txt` décrit les expériences : il suit toute évolution de leurs fonctions.
- Liens sortants : romain-ecarnot.com, LinkedIn `https://www.linkedin.com/in/romainecarnot/`, GitHub `https://github.com/eRom`, Cruchot `https://cruchot.romain-ecarnot.com`.

## Brand Commitments

- Nom : Romain Ecarnot, alias eRom. Titre : « Passeur du numérique & Architecte du simple ».
- Voix : sobre, pragmatique, pédagogique, en français.
- Email unique : `contact@romain-ecarnot.com`, recruteurs compris (confirmé par Romain le 23/09/2026 ; remplace `hire@`).
- Récit post-AVC et RQTH : présents mais discrets, le métier passe devant (confirmé le 23/09/2026). La phrase « Je sais où le numérique perd les gens : j'y suis passé » reste, comme un argument professionnel.
- Portrait noir et blanc : intouchable, jamais filtré ni régénéré, recadré seulement. Original dans le dépôt du site : `/Users/recarnot/dev/linktree/public/portrait.jpg`.
- Référence rendue contraignante par Romain le 23/09/2026 : le CV rejoint le monde visuel de romain-ecarnot.com. Son détail vit dans DESIGN.md, pas ici.

## Evidence on Hand

- Faits du CV : `public/llms.txt`, et le contenu de `public/scrollytelling/index.html` et `public/dashboard/index.html`.
- PDF : `public/CV_Romain_Ecarnot.pdf`.
- Avatar carré : `public/avatar.jpg` (800x800).
- Image de partage : `public/og-image.jpg` (1200x630), générée par `scripts/generate-og-image.mjs`.
- Absences à ne pas fabriquer : aucun témoignage, aucun client ni chiffre de résultat absent du CV, aucun tarif, aucune expérience hors du parcours publié.

## Product Principles

1. Le recruteur d'abord : il choisit sa lecture en quelques secondes et trouve le contact sans chercher.
2. Deux lectures, un seul CV : les mêmes faits dans le hub, la Console, le reportage, le PDF et `llms.txt`.
3. Prouver plutôt qu'affirmer : des systèmes en production, des liens vérifiables.
4. Anti-overkill jusque dans le CV : léger, rapide, sans gadget.
5. Le récit de résilience éclaire le profil sans le définir.

## Accessibility & Inclusion

- WCAG AA visé : contrastes stricts, focus visibles, navigation clavier (même engagement que romain-ecarnot.com).
- `prefers-reduced-motion` respecté (inféré : déjà appliqué par le reportage actuel).
