---
name: cv.romain-ecarnot.com
description: Le CV de Romain Ecarnot, suite de la page Portrait, imprimé sur le même papier saumon des pages éco.
colors:
  ink: "oklch(0.2 0.014 40)"
  ink-soft: "oklch(0.4 0.035 42)"
  paper: "oklch(0.885 0.056 43)"
  paper-deep: "oklch(0.83 0.072 40)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 6.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 70"
  display-interview:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 4.9vw, 4.75rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 70"
  proof-name:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 74"
  question:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.1vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.06
    fontVariation: "'wdth' 80"
  coupon-label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.5vw, 1.375rem)"
    fontWeight: 800
    lineHeight: 1.08
    fontVariation: "'wdth' 80"
  deck:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.1875rem, 1.8vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.32
  deck-proof:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.32
  numeral:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 2rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 72"
    fontFeature: "'tnum', 'lnum'"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.375
    fontVariation: "'wdth' 84"
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.58
  rubric:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 850
    lineHeight: 1.2
    letterSpacing: "0.045em"
    fontVariation: "'wdth' 80"
  folio:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "0.07em"
    fontVariation: "'wdth' 88"
  caption:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    fontVariation: "'wdth' 92"
rounded:
  none: "0"
spacing:
  gutter-sm: "1rem"
  gutter-md: "2rem"
  gutter-lg: "2.5rem"
  grid-gap: "3rem"
  block-sm: "20px"
  block-md: "24px"
  question-gap: "2.5rem"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  coupon-line-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.coupon-label}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  coupon-line:
    textColor: "{colors.ink}"
    typography: "{typography.coupon-label}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  proof-box:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  summary-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "6px 0"
  running-head:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
---

# Design System: cv.romain-ecarnot.com

## Overview

**Creative North Star: "La suite de la page Portrait"**

Le CV est la suite, en pages intérieures, de la page Portrait que www.romain-ecarnot.com consacre à Romain Ecarnot. Même monde, même papier saumon des pages éco, même encre noire chaude, même folio à double filet, même crayon du lecteur (le monde et son vocabulaire sont définis par `/Users/recarnot/dev/linktree/DESIGN.md`). Le CV y ajoute deux objets de presse : un bulletin de lecture à découper sur l'accueil, et un entretien en neuf questions numérotées en marge sur `/scrollytelling`, avec ses encadrés de preuve.

La densité est celle d'une page de journal lue sur écran, mais sans colonnes de journal : les réponses font trois à six lignes et se lisent sur une seule mesure d'environ 65 caractères, en drapeau. Un seul bloc en noir inversé par page dit où aller. Le mouvement appartient au lecteur : le crayon souligne, coche la case du bulletin, coche les questions vraiment lues et marque l'endroit où la lecture s'était arrêtée. Le CV mémorise ces marques d'une visite à l'autre.

La Console (`/dashboard`, `public/dashboard/*`) est hors de ce monde : HTML statique avec son propre thème sombre, elle n'importe ni `globals.css` ni les polices du layout. Ce document ne la décrit pas et ses styles n'en font pas partie.

**Key Characteristics:**
- Deux couleurs au sens strict : papier saumon et encre noire chaude, avec leurs deux nuances, héritées sans changement du site parent.
- Titraille Archivo condensée (axe `wdth`), texte Source Serif 4 (axe `opsz`), chiffres de titraille tabulaires.
- Structure par filets d'encre et encadrés, jamais par cartes, ombres ou arrondis.
- Noir inversé réservé à l'action principale de chaque page ; le crayon y trace en couleur papier.
- Le crayon a des états persistants : case cochée, question lue, question en cours, « reprendre ici ».
- Une seule mesure de lecture, pas de colonnes de journal.

## Colors

La palette du site parent, telle quelle : une encre et un papier, rien d'autre.

### Primary
- **Encre noire chaude** (ink) : tout le texte, tous les filets et bordures, le contour de focus, le trait du crayon et de la coche, le fond des blocs en noir inversé, la piste de défilement.

### Neutral
- **Saumon des pages éco** (paper) : le papier de chaque page (porté par `html`, grain fractal à 0,13 sous le contenu), le texte et le crayon sur le noir inversé, le fond du titre courant mobile.
- **Saumon soutenu** (paper-deep) : la sélection de texte, la piste de la barre de défilement, et les textes secondaires posés sur l'encre (résumé et référence de la ligne principale du bulletin, adresse sous « Écrire à Romain »).
- **Encre délavée** (ink-soft) : légendes, résumés des lignes du bulletin, libellé « Ailleurs », descriptions des compétences, organisations et écoles, texte de la rupture de 2025, intro des encadrés de preuve. Jamais pour un titre ni une action.

### Named Rules
**The Reversed Ink Rule.** Le noir inversé est réservé à l'action principale de la page, une seule par page : la ligne « Je lis le grand reportage » du bulletin sur l'accueil, le bloc « Écrire à Romain » en fin d'entretien. À l'impression, il redevient un encadré de 3px en encre sur blanc, sans quoi son texte disparaîtrait.

**The One Ink Rule.** Aucune autre teinte : pas d'accent, pas de couleur d'état, pas de vert de disponibilité. Lu, en cours, à reprendre : chaque état passe par le crayon, la graisse ou la position.

## Typography

**Display Font:** Archivo (avec Helvetica Neue, Arial), variable, axe `wdth` chargé.
**Body Font:** Source Serif 4 (avec Georgia, Times New Roman), variable, axe `opsz` chargé, `font-optical-sizing: auto`.

**Character:** la grotesque de titraille serrée du site parent contre son serif de labeur. La largeur reste un outil de hiérarchie : plus le rôle est fort, plus la grotesque est condensée.

### Hierarchy
- **Display** (900, plafond 6rem, `wdth` 70) : le titre de l'accueil ; sur mobile clamp(2.6rem, 10.5vw, 4.75rem).
- **Display interview** (900, plafond 4.75rem, `wdth` 70) : le titre-citation du reportage, plus court de plafond parce qu'il porte une citation sur quatre lignes dans 8 colonnes ; sur mobile clamp(2.4rem, 9vw, 3.5rem).
- **Proof name** (900, `wdth` 74) : le nom du système prouvé dans un encadré, protégé de la césure.
- **Question** (800, `wdth` 80) : la question du recruteur, titre de chaque section de l'entretien.
- **Coupon label** (800, `wdth` 80) : le libellé d'une ligne du bulletin, à la première personne du lecteur ; agrandi à clamp(1.375rem, 1.9vw, 1.75rem) sur la ligne principale.
- **Deck** (serif 600) : le chapeau sous chaque titre, sur 38ch à l'accueil, sur toute la largeur du titre dans le reportage (choix de Romain du 23/09/2026). **Deck proof** (serif 600, 1.125rem) : la phrase-titre d'un encadré de preuve.
- **Numeral** (900, `wdth` 72, chiffres tabulaires) : les numéros de questions en marge, les périodes du parcours, les formats du bulletin (« 4 min », « 4 vues », « 2 pages », à 1.375rem), les années des formations et les numéros des sommaires (1rem à 1.125rem).
- **Title** (700 à 800, `wdth` 84) : les questions dans les sommaires, le titre courant, l'intitulé d'une compétence, l'adresse de retour du bulletin (800, 1.25rem), les liens des encadrés.
- **Body** (serif 400, 1.0625rem, interligne 1.58) : les réponses, sur 38rem au plus ; les points des encadrés et les descriptions descendent à 0.9375rem.
- **Rubric**, **Folio**, **Caption** : identiques au site parent (rubrique sous filet de 3px, folio et liens secondaires en capitales, légendes et pied de page en encre délavée).

La première réponse s'ouvre sur une attaque en petites capitales grasses (`all-small-caps`, interlettrage 0.03em), comme l'ouverture de la page Portrait.

### Named Rules
**The French Typography Rule.** Toute copie visible passe par `fr()` (`src/lib/typography.ts`) : apostrophe courbe, fine insécable avant ; ! ? et %, insécable avant les deux-points et dans les guillemets français.

**The Width Hierarchy Rule.** 70 pour les titres, 72 pour les chiffres de titraille, 74 pour les noms de preuve, 80 pour les questions, les libellés du bulletin et les rubriques, 84 pour les questions en sommaire et les intitulés, 88 pour le folio, 92 pour les légendes.

**The No Mono Rule.** Le CV n'a aucune commande à copier, donc aucune monospace en usage : le jeton `--font-mono` n'existe que pour garder la règle du monde (monospace réservée aux vraies commandes).

## Layout

Une page de 88rem au plus, gouttières de 1rem, puis 2rem dès 40rem, puis 2.5rem dès 64rem ; grille de 12 colonnes à 3rem d'écart dès 64rem, une seule colonne en dessous.

- **Accueil :** titre, chapeau et ligne de signature (vignette du portrait, « Ailleurs ») sur 7 colonnes ; le bulletin sur les 5 de droite, sur deux rangées. Sur mobile, l'ordre est titre, bulletin, signature. Sous l'ensemble, « Dans le grand reportage » : les neuf questions en trois colonnes de trois dès 48rem, une seule liste en dessous.
- **Reportage :** portrait au format 4:3 et sommaire sur 4 colonnes (le sommaire seul reste collé à 1rem du haut), titre, chapeau et entretien sur 8. Sur mobile : portrait 5:4, titre, sommaire, entretien, dans cet ordre.
- **Entretien :** chaque question est une grille à colonne de marge (2.25rem, puis 3rem dès 40rem) qui porte le numéro ; la réponse s'aligne sur la question dès 40rem et reprend toute la largeur en dessous. Questions séparées d'un filet de 1px, 2.5 à 3rem de blanc sous chacune. Encadrés, listes et bloc final prennent toute la colonne ; seul le texte des réponses garde sa mesure de 38rem.
- **Listes :** une information par ligne pleine largeur, séparée d'un filet fin ; compétences et parcours en deux colonnes fixes (13rem, puis 8.5rem pour les périodes).

### Named Rules
**The One Measure Rule.** Pas de colonnes de journal sur le CV : des réponses de trois à six lignes se lisent sur une seule mesure (38rem), en drapeau, sans justification. Les colonnes du site parent restent réservées à un récit long.

## Elevation & Depth

Aucune ombre. La profondeur vient du grain de papier, de l'épaisseur des filets et du noir inversé. Le seul élément posé au-dessus de la page est le titre courant mobile, collé en haut de l'écran : il porte le même papier et le même grain (déjà atténué, `paper-grain-flat`) et se détache par un filet de 1px, jamais par une ombre.

### Named Rules
**The Same Paper Rule.** Une surface posée sur la page est découpée dans la même feuille : papier, grain à la même intensité, filet d'encre. Jamais de voile, de flou ni d'ombre portée.

**The Untouched Portrait Rule.** Le portrait (`public/portrait.jpg`) est affiché tel quel : recadré par `object-position` (et par un agrandissement pour la vignette de l'accueil), jamais filtré ni régénéré.

## Shapes

Angles vifs partout (rayon 0). Le vocabulaire de filets du site parent, avec un sens de plus pour le pointillé :
- **3px** ouvre : rubriques, entretien, encadrés de preuve, pied de page.
- **1px** sépare : lignes de liste, questions, lignes du bulletin, filet vertical entre fiche et faits d'un encadré.
- **Double filet** (3px puis 1px) : sous le folio seulement.
- **Pointillé 1px** marque une rupture : la rupture de 2025 dans le parcours, et le bord du bulletin, ligne de découpe d'un coupon.

La case du bulletin est un carré de 1.3rem bordé de 1px en `currentColor`.

### Named Rules
**The Cut Line Rule.** Le pointillé dit « ici, ça se coupe » : rupture dans un récit ou découpe d'un coupon. Il distingue le bulletin (objet qu'on remplit) des encadrés pleins de 3px (texte qu'on lit). Pas d'autre usage.

## Components

### Buttons
Pas de bouton applicatif : les actions sont des liens et des blocs de page. Seul vrai `button` : « couper le clavier » / « rétablir le clavier », un lien au crayon dans la légende du bulletin.
- **Primary :** « Écrire à Romain », bloc pleine largeur de colonne en noir inversé, libellé en grotesque 800 `wdth` 80, adresse en légende saumon soutenu, flèche droite.
- **Focus :** contour de 2px à 3px de décalage, en encre ; en papier sur l'encre ; décalé vers l'intérieur (-6px) sur les lignes du bulletin.

### Navigation
Le folio du site parent : date de l'édition du jour, mention de suite (« Suite de la page Portrait » sur l'accueil, « romain-ecarnot.com » sur le reportage), sommaire Le CV, Reportage, Console, PDF. Page courante en graisse 850 avec crayon permanent. Sous 48rem la mention de suite disparaît, sous 24rem la date aussi.

### Bulletin de lecture (signature)
Coupon bordé de pointillé : rubrique « Bulletin de lecture », trois lignes (case, libellé à la première personne, résumé, format en chiffres de titraille, « Réf. » qui est la touche du clavier), puis « Bulletin à renvoyer à : » et l'adresse. La ligne du grand reportage est en noir inversé. Au survol et au focus, la coche se trace dans la case et le libellé se souligne ; une lecture faite garde sa coche. Raccourcis S, C, P (1 et 2 gardés en alias) actifs par défaut et coupables depuis le bulletin (mémorisé en local) ; les références ne s'affichent qu'en grand écran et tant que le clavier est actif.

### Encadré de preuve
Encadré de 3px posé sous la réponse qu'il prouve : à gauche la fiche (nom, période, phrase-titre, intro délavée, lien au crayon avec flèche diagonale, note), à droite les faits séparés de filets de 1px, avec une amorce en gras. Les deux moitiés (2/5, 3/5) sont séparées d'un filet vertical dès 48rem, empilées en dessous.

### Sommaire de l'entretien
Liste numérotée des neuf questions, filet fin entre chaque. Le crayon souligne en permanence la question en cours (`aria-current="location"`), coche celle tenue assez longtemps dans la bande de lecture (un saut par le sommaire ne coche rien), et avant la première question marque la dernière question lue d'un soulignement et de « · reprendre ici ». La même liste, en trois colonnes, sert d'appel au reportage sur l'accueil et y reporte les coches.

Le teaser « Dans le grand reportage » de l'accueil est gardé, choix de Romain du 23/09/2026.

### Titre courant (mobile)
Sous 64rem, une bande collée en haut de l'écran donne « 3/9 » et la question en cours sur une ligne tronquée ; elle ramène au sommaire. Elle se pose sur la page sans la décaler et n'apparaît qu'une fois l'entretien commencé.

### The Reader's Pencil
Le trait SVG du site parent, avec les états propres au CV :
- **Soulignement** tracé au survol et au focus (420ms, cubic-bezier(0.16, 1, 0.3, 1)) ; permanent sur la page courante et sur les marques de lecture (`pencil-marked`).
- **Crayon papier** (`pencil-paper`) : le même trait en couleur papier sur le noir inversé.
- **Coche de case** : tracée au survol et au focus, gardée une fois la lecture faite.
- **Coche de lecture** (480ms) après un lien consulté ou une question lue, annoncée aux lecteurs d'écran.

### Named Rules
**The Pencil Rule.** Le mouvement n'existe qu'en réponse au lecteur (survol, focus, lecture) et il est coupé sous `prefers-reduced-motion`. Pas de compteur animé, pas de jauge de progression, pas d'animation d'entrée : la progression est une marque de crayon.

**The Remembered Reading Rule.** Ce que le lecteur a fait reste marqué : lectures du bulletin, liens consultés, questions lues et dernière question, en `localStorage` propre au CV, partagé entre onglets.

## Do's and Don'ts

### Do:
- **Do** réserver le noir inversé à une seule action par page, et y tracer le crayon en couleur papier.
- **Do** structurer par filets : 3px ouvre, 1px sépare, pointillé pour une rupture ou une ligne de découpe.
- **Do** composer les réponses sur une seule mesure de 38rem, en drapeau.
- **Do** exprimer tout état (lu, en cours, à reprendre, coché) par une marque de crayon, jamais par une couleur.
- **Do** passer toute copie visible par `fr()`.
- **Do** laisser la Console (`/dashboard`) dans son propre monde sombre, hors de ce système.

### Don't:
- **Don't** ajouter une teinte, un dégradé ou une couleur d'état.
- **Don't** composer en cartes arrondies à ombre portée, ni en « A contre B » côte à côte.
- **Don't** couper des réponses courtes en colonnes de journal.
- **Don't** ajouter de compteur animé, de jauge de progression ou de bascule clair/sombre.
- **Don't** filtrer ou régénérer le portrait.
- **Don't** afficher un raccourci d'une seule touche qu'on ne peut pas couper.
