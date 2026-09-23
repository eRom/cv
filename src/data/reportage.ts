// Faits du CV, repris mot pour mot du reportage d'origine et de public/llms.txt. Rien d'inventé ici.
// Seuls le titre, le chapeau et les questions sont une copie nouvelle ; les réponses sont les mots de Romain.

import { CRUCHOT_URL } from "@/data/cv";
import { WORDS_PER_MINUTE } from "@/lib/reading";

/** Citation titre, tirée de sa réponse sur la transmission. */
export const TITLE_QUOTE = "Je parle la langue des ingénieurs, celle des métiers et celle des usagers";

export const CHAPEAU =
  "Architecte logiciel sur les services Bbox TV de Bouygues Telecom, architecte solutions AWS sur la migration du système d'information de Veolia, puis cofondateur et CTO de pharmacylounge. Neuf questions qu'un recruteur se pose sur Romain Ecarnot ; les réponses sont les siennes, tirées de son CV.";

export interface Question {
  /** Ancre de la question dans la page (visible dans l'adresse). */
  id: string;
  text: string;
}

export const QUESTIONS: Question[] = [
  { id: "aujourdhui", text: "Que faites-vous aujourd'hui ?" },
  { id: "reconversion", text: "L'accompagnement, c'est une reconversion ?" },
  { id: "livrer", text: "Vous livrez, ou vous conseillez ?" },
  { id: "veille", text: "Comment suivez-vous une IA qui change chaque semaine ?" },
  { id: "donnees", text: "Et les données ?" },
  { id: "competences", text: "Vos compétences, concrètement ?" },
  { id: "parcours", text: "Votre parcours, en bref ?" },
  { id: "annee-2025", text: "Et 2025 ?" },
  { id: "disponibilite", text: "Disponible pour quoi ?" },
];

export interface Pillar {
  heading: string;
  text: string;
}

export const LEAD =
  "J'aide les organisations, entreprises, collectivités, associations, organismes de formation, à faire adopter le numérique et l'IA par ceux qui les utilisent. Vingt-cinq ans à construire des systèmes m'ont appris une chose : ils échouent quand on oublie leurs utilisateurs.";

export const PILLARS: Pillar[] = [
  {
    heading: "Apporteur de solutions",
    text: "Un problème repéré, un outil livré. Cruchot, client IA de bureau 100 % local et open source, publié en 2026 ; Trinity LifeOS, système d'IA personnel complet ; une vingtaine d'outils open source. Le chemin le plus court entre l'idée et la production, sans sur-ingénierie.",
  },
  {
    heading: "Veille constante",
    text: "Je lis, je teste, j'indexe. Chaque modèle majeur (Claude, Gemini, DeepSeek, GLM, Kimi, Mistral) est essayé la semaine de sa sortie, sur des tâches réelles. Tout ce que je lis alimente un RAG local qui me le ressert daté et sourcé. Une veille qui produit des études, pas des captures d'écran.",
  },
  {
    heading: "IA locale et données maîtrisées",
    text: "Les données restent où elles sont. Modèles ouverts sur Ollama, RAG hybride en local, clés chiffrées, zéro télémétrie ; 4 ans de DPO interne sur des données sensibles. Je sais dire ce qu'un modèle local fait bien, ce qu'il fait mal, et quand le cloud reste le bon choix.",
  },
  {
    heading: "Transmission",
    text: "Un fil rouge, pas une reconversion : animation d'une communauté cloud nationale chez OPEN (webinaires, workshops, mentorat), conduite du changement sur la migration SI de Veolia, services Bbox TV conçus pour des millions d'utilisateurs peu technophiles, formation des pharmaciens de pharmacylounge. Je parle la langue des ingénieurs, celle des métiers et celle des usagers : mon métier est de traduire entre les trois.",
  },
];

/** La phrase de l'AVC : présente, discrète, et d'abord un argument professionnel. */
export const LIVED_EXPERIENCE = {
  context: "Un AVC en janvier 2025 m'a fait vivre l'administration numérique avec des capacités diminuées.",
  insight: "Je sais où le numérique perd les gens : j'y suis passé.",
};

export interface Proof {
  id: string;
  name: string;
  headline: string;
  period: string;
  intro: string;
  link?: { label: string; href: string };
  /** Les mots forts de chaque point sont mis en gras à l'affichage. */
  points: { before?: string; strong: string; rest: string }[];
  note?: string;
}

export const PROOFS: Proof[] = [
  {
    id: "cruchot",
    name: "Cruchot",
    headline: "L'IA sur le bureau, sans fuite de données",
    period: "2026",
    intro: "Client de bureau multi-LLM (Electron, TypeScript), open source, publié avec site et binaire macOS.",
    link: { label: "cruchot.romain-ecarnot.com", href: CRUCHOT_URL },
    points: [
      { strong: "11 fournisseurs", rest: " dans une seule application, dont les modèles locaux (Ollama, LM Studio)" },
      {
        strong: "100 % local",
        rest: " : base et index vectoriel embarqués, clés chiffrées dans le trousseau macOS, zéro télémétrie",
      },
      {
        strong: "Arène LLM contre LLM",
        rest: ", mémoire épisodique, RAG personnel, voix en direct, sécurité renforcée",
      },
    ],
  },
  {
    id: "trinity",
    name: "Trinity LifeOS",
    headline: "L'IA comme outil de reconstruction",
    period: "2025–2026",
    intro: "Système d'IA personnel conçu et développé pendant et après ma rééducation.",
    points: [
      {
        strong: "Orchestration multi-agents",
        rest: " (Claude, Gemini, Mistral), agent vocal temps réel, serveur MCP",
      },
      { strong: "30+ endpoints API", rest: " (n8n), mémoire sémantique vectorielle, déployé en production" },
      {
        before: "Ce projet prouve deux choses : ",
        strong: "mes compétences sont à jour",
        rest: ", et je sais raconter l'IA à travers une expérience humaine, ce qui fait un formateur qu'on écoute.",
      },
    ],
    note: "Démo sur demande.",
  },
  {
    id: "atelier",
    name: "L'atelier",
    headline: "Une équipe d'agents IA au travail tous les jours",
    period: "2025–2026",
    intro: "Environnement de travail où Claude, Gemini, DeepSeek, GLM et Kimi coopèrent sous supervision.",
    points: [
      {
        strong: "Orchestration multi-agents",
        rest: ", revues contradictoires (avocats du diable), recherche approfondie, routines automatisées supervisées, mémoire partagée entre sessions",
      },
      {
        strong: "RAG local de veille",
        rest: " (articles, vidéos, dépôts) et RAG juridique hors ligne sur les 12 codes Légifrance (recherche hybride), jeu de données de questions-réponses pour affiner un petit modèle juridique",
      },
      {
        strong: "Étude d'une infrastructure IA locale",
        rest: " pour une petite structure : 3 classes de service, HDS 2.1, AI Act",
      },
      {
        strong: "Une vingtaine de briques open source",
        rest: " : plugins Claude Code, serveurs MCP, outils CLI, auditeur de sécurité pour skills d'agents IA (18 catégories de menaces)",
      },
    ],
  },
  {
    id: "pharmacylounge",
    name: "pharmacylounge",
    headline: "Une plateforme métier sécurisée, de bout en bout",
    period: "2021–2025",
    intro: "Co-fondateur, CTO et DPO interne d'une plateforme sécurisée pour professionnels de la pharmacie.",
    points: [
      { strong: "RGPD by design", rest: ", données sensibles, sécurité applicative en production" },
      { strong: "Accompagnement des utilisateurs", rest: " : recueil des besoins, démos, formation, support" },
      {
        strong: "4 ans à faire le pont quotidien",
        rest: " entre des professionnels non techniciens et une équipe technique",
      },
    ],
  },
];

export interface Skill {
  heading: string;
  text: string;
}

export const SKILLS: Skill[] = [
  { heading: "Accompagnement et formation", text: "Formation d'utilisateurs, vulgarisation, conduite du changement" },
  {
    heading: "IA générative et agentique",
    text: "Claude, Gemini, Mistral, DeepSeek, modèles ouverts en local (Ollama), RAG hybride (Qdrant), MCP, n8n, orchestration multi-agents, intégration dans les workflows métier, AI Act",
  },
  { heading: "Données et conformité", text: "RGPD, DPO interne, sécurité applicative, données sensibles, local ou cloud" },
  {
    heading: "Conduite de projet",
    text: "AMOA, cadrage, coordination pluridisciplinaire, parties prenantes, méthodes agiles",
  },
  {
    heading: "Socle technique",
    text: "AWS (certifié), Terraform, Docker, Node.js et TypeScript, Python, Electron, architectures sécurisées : de quoi dialoguer d'égal à égal avec les DSI",
  },
  { heading: "Secteurs traversés", text: "Santé et pharmacie, télécoms grand public, énergie, services numériques" },
];

export interface Milestone {
  period: string;
  role: string;
  organisation?: string;
  detail?: string;
  /** La rupture de 2025 : dessinée en pointillé, discrète et assumée. */
  isBreak?: boolean;
}

export const MILESTONES: Milestone[] = [
  {
    period: "2025–2026",
    role: "Reconstruction post-AVC, immersion IA",
    detail:
      "Conception intensive d'architectures d'IA locales et agentiques, validation pratique de l'ergonomie cognitive des interfaces.",
    isBreak: true,
  },
  { period: "2021–2025", role: "Co-fondateur, CTO et DPO interne", organisation: "pharmacylounge, Nantes" },
  { period: "2021–2025", role: "Architecte cloud, développeur fullstack", organisation: "Morannon (indépendant)" },
  {
    period: "2019–2020",
    role: "Directeur de programme AWS, animation de communauté et formation",
    organisation: "OPEN, Paris",
  },
  { period: "2016–2018", role: "Architecte solutions AWS, migration SI Veolia", organisation: "GFI Informatique, Paris" },
  { period: "2011–2015", role: "Architecte logiciel, services Bbox TV", organisation: "Bouygues Telecom, Paris" },
  {
    period: "1998–2010",
    role: "Développeur multimédia, framework Adobe Flash open source",
    organisation: "Divers, Nantes",
  },
];

export interface Credential {
  name: string;
  school?: string;
  year: string;
}

export const CREDENTIALS: Credential[] = [
  { name: "AWS Professional Services Delivery Best Practices", year: "2018" },
  { name: "Architecture avancée et migration d'applications (AWS)", year: "2017" },
  { name: "D.U.T. Informatique", school: "Université de Nantes", year: "1998" },
];

export const AVAILABILITY =
  "Missions de cadrage, accompagnement et formation, conseil en architecture IA.";

/** Durée de lecture de l'entretien, calculée sur son texte (affichée dans le bulletin de l'accueil). */
export function readingMinutes(): number {
  const texts = [
    TITLE_QUOTE,
    CHAPEAU,
    LEAD,
    LIVED_EXPERIENCE.context,
    LIVED_EXPERIENCE.insight,
    AVAILABILITY,
    ...QUESTIONS.map((question) => question.text),
    // Les intitulés des piliers ne s'affichent pas : la question de l'entretien en tient lieu.
    ...PILLARS.map((pillar) => pillar.text),
    ...PROOFS.flatMap((proof) => [
      proof.name,
      proof.headline,
      proof.period,
      proof.intro,
      proof.note ?? "",
      ...proof.points.map((point) => `${point.before ?? ""}${point.strong}${point.rest}`),
    ]),
    ...SKILLS.flatMap((skill) => [skill.heading, skill.text]),
    ...MILESTONES.flatMap((milestone) => [
      milestone.period,
      milestone.role,
      milestone.organisation ?? "",
      milestone.detail ?? "",
    ]),
    ...CREDENTIALS.flatMap((credential) => [credential.name, credential.school ?? "", credential.year]),
  ];
  const words = texts.join(" ").split(/\s+/).filter((word) => /[\p{L}\d]/u.test(word)).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
