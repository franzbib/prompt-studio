// Supplemental prompt catalog data

export const dailyChallenges = [
  {
    id: 'dc_01',
    level: 'A1',
    title: 'Ma journée en 5 phrases',
    type: 'production_ecrite',
    challenge: 'Décris ta matinée en 5 phrases simples. Utilise le présent. Commence chaque phrase par "Je...".',
    tip: 'Verbes utiles : se lever, manger, aller, regarder, parler.',
    promptSuggestion: 'a1_ecrit_01',
  },
  {
    id: 'dc_02',
    level: 'A2',
    title: 'Hier, j\'ai...',
    type: 'grammaire',
    challenge: 'Raconte 5 choses que tu as faites hier en utilisant le passé composé.',
    tip: 'Attention aux verbes avec être (aller, venir, partir, arriver...).',
    promptSuggestion: 'a2_gram_01',
  },
  {
    id: 'dc_03',
    level: 'B1',
    title: 'Pour ou contre — 3 arguments',
    type: 'production_ecrite',
    challenge: 'Choisis un sujet d\'actualité et donne 3 arguments pour + 3 arguments contre en 150 mots.',
    tip: 'Utilise : d\'un côté... de l\'autre côté... / en revanche / cependant.',
    promptSuggestion: 'b1_ecrit_01',
  },
  {
    id: 'dc_04',
    level: 'B2',
    title: 'Corriger avec précision',
    type: 'correction',
    challenge: 'Copie un de tes anciens textes dans un LLM et demande-lui de ne corriger que les 5 erreurs les plus importantes.',
    tip: 'Utilise le prompt "Corriger sans tout réécrire".',
    promptSuggestion: 'b2_ecrit_01',
  },
  {
    id: 'dc_05',
    level: 'C1',
    title: 'Déconstruire un argument',
    type: 'comprehension_ecrite',
    challenge: 'Trouve un éditorial en ligne. Identifie la thèse implicite, 2 présupposés et 1 stratégie rhétorique.',
    tip: 'Les éditoriaux du Monde ou du Figaro sont idéaux pour cet exercice.',
    promptSuggestion: 'c1_comp_01',
  },
  {
    id: 'dc_06',
    level: 'A1',
    title: 'Vocabulaire de la cuisine',
    type: 'vocabulaire',
    challenge: 'Apprends 10 mots liés à la cuisine. Utilise-les dans 5 phrases avec "il y a" ou "j\'aime".',
    tip: 'Utilise le prompt de cartes lexicales.',
    promptSuggestion: 'a1_vocab_01',
  },
  {
    id: 'dc_07',
    level: 'B1',
    title: 'Tuteur socratique — une erreur récurrente',
    type: 'grammaire',
    challenge: 'Identifie une erreur que tu fais souvent. Utilise le prompt Socratique pour comprendre la règle sans qu\'on te donne la réponse.',
    tip: 'Sois précis dans ta question : "Je confonds imparfait et passé composé dans les récits."',
    promptSuggestion: 'b1_socrat_01',
  },
  {
    id: 'dc_08',
    level: 'B2',
    title: 'Simulation DELF — 20 minutes',
    type: 'examen',
    challenge: 'Utilise le prompt de simulation DELF B2. Rédige un texte de 250 mots en conditions réelles.',
    tip: 'Chronomètre-toi. Le vrai DELF donne 60 min pour 250 mots.',
    promptSuggestion: 'b2_exam_01',
  },
  {
    id: 'dc_09',
    level: 'A2',
    title: 'Générer mes flashcards',
    type: 'vocabulaire',
    challenge: 'Prends un texte de 200 mots en français (article simple, recette, programme TV). Génère 10 cartes Anki avec le prompt dédié.',
    tip: 'Tu peux importer le CSV dans Anki gratuitement.',
    promptSuggestion: 'trans_anki_01',
  },
  {
    id: 'dc_10',
    level: 'C1',
    title: 'Améliorer un paragraphe',
    type: 'production_ecrite',
    challenge: 'Prends un texte que tu as écrit récemment. Demande une analyse stylistique C1 : répétitions, imprécisions, registre.',
    tip: 'Sois ouvert à la critique — c\'est ainsi qu\'on progresse au niveau C1.',
    promptSuggestion: 'c1_ecrit_02',
  },
];

// Socratic Tutor examples
export const socraticExamples = [
  {
    id: 'soc_01',
    title: 'Bonne utilisation du tuteur socratique',
    skill: 'grammaire',
    bad: '"Explique-moi le subjonctif."',
    good: '"Je suis au niveau B1. J\'ai écrit cette phrase : \'Il faut que tu viens\'. Je sens qu\'il y a une erreur mais je ne sais pas laquelle. Pose-moi des questions pour m\'aider à comprendre la règle moi-même."',
    explanation: 'La bonne version donne un contexte précis, identifie le problème, et demande explicitement le mode socratique.'
  },
  {
    id: 'soc_02',
    title: 'Demander des indices progressifs',
    skill: 'vocabulaire',
    bad: '"Donne-moi la traduction de tous ces mots."',
    good: '"Je ne comprends pas ce mot : \'pourtant\'. Avant de me donner la traduction, peux-tu me donner un indice contextuel et m\'aider à déduire son sens à partir de la phrase ?"',
    explanation: 'Chercher à déduire avant de recevoir la réponse ancre beaucoup mieux la mémorisation.'
  },
  {
    id: 'soc_03',
    title: 'Auto-correction guidée',
    skill: 'production_ecrite',
    bad: '"Corrige mon texte."',
    good: '"Voici mon texte. Ne le corrige pas tout de suite. D\'abord, indique-moi les catégories d\'erreurs présentes (sans me montrer où elles sont). Ensuite demande-moi de relire et de trouver les erreurs moi-même."',
    explanation: 'Cette méthode développe l\'auto-correction, compétence essentielle pour progresser durablement.'
  },
  {
    id: 'soc_04',
    title: 'Comprendre une règle en profondeur',
    skill: 'grammaire',
    bad: '"Quand utilise-t-on le conditionnel ?"',
    good: '"J\'ai du mal à choisir entre conditionnel et subjonctif. Je vais t\'écrire 3 phrases et tu me poses une question pour chacune qui m\'aide à comprendre pourquoi je dois utiliser l\'un ou l\'autre."',
    explanation: 'Travailler en contexte sur ses propres exemples est bien plus efficace que les explications générales.'
  },
  {
    id: 'soc_05',
    title: 'Progresser par niveau de difficulté',
    skill: 'vocabulaire',
    bad: '"Donne-moi des exercices de vocabulaire B2."',
    good: '"Je suis B2. Commence par m\'évaluer avec 5 phrases : si j\'en réussis 4, passe au niveau C1. Sinon, reste au B2 et adapte la difficulté selon mes réponses."',
    explanation: 'Demander une évaluation adaptative maximise l\'efficacité de la session d\'apprentissage.'
  },
];

// Writing checklists
export const writingChecklists = {
  email_simple: {
    title: 'E-mail simple (A2-B1)',
    items: [
      'Objet de l\'e-mail clairement formulé',
      'Formule de salutation adaptée (Madame/Monsieur ou Bonjour + prénom)',
      'Introduction : raison de l\'e-mail en 1 phrase',
      'Corps : maximum 2-3 paragraphes courts',
      'Demande ou action attendue clairement formulée',
      'Formule de clôture appropriée (Cordialement / Bien à vous)',
      'Signature complète',
      'Relecture : pas de fautes d\'orthographe évidentes',
    ]
  },
  paragraphe_opinion: {
    title: 'Paragraphe d\'opinion (B1-B2)',
    items: [
      'Thèse clairement énoncée dès la première phrase',
      'Au moins 2 arguments distincts',
      'Chaque argument illustré d\'un exemple concret',
      'Connecteurs logiques utilisés (donc, en revanche, c\'est pourquoi...)',
      'Absence d\'arguments contradictoires non résolus',
      'Conclusion qui reprend et ouvre',
      'Registre soutenu (pas de "on est d\'accord que", etc.)',
      'Longueur appropriée : 150-250 mots',
    ]
  },
  texte_argumentatif: {
    title: 'Texte argumentatif (B2-C1)',
    items: [
      'Introduction : contextualisation + thèse + plan annoncé',
      'Structure TAS respectée (thèse, antithèse, synthèse)',
      'Transitions claires entre les parties',
      'Sources ou exemples concrets cités',
      'Concessions et nuances présentes',
      'Vocabulaire précis (pas de répétitions lexicales)',
      'Registre académique cohérent du début à la fin',
      'Conclusion : synthèse + ouverture',
      'Longueur : 300-500 mots selon consigne',
    ]
  },
  presentation_orale: {
    title: 'Présentation orale (B1-C1)',
    items: [
      'Introduction avec accroche et annonce du plan',
      'Plan en 2-3 parties clairement signalées',
      'Transitions orales explicites ("Passons maintenant à...")',
      'Exemples concrets pour illustrer chaque point',
      'Formules pour gérer les questions (Si j\'ai bien compris...)',
      'Conclusion : résumé + ouverture ou recommandation',
      'Absence de lecture mot-à-mot (notes de mots-clés seulement)',
      'Contact visuel simulé / gestion du temps',
    ]
  },
  synthese_universitaire: {
    title: 'Note de synthèse (C1)',
    items: [
      'Aucune opinion personnelle (règle absolue)',
      'Toutes les sources représentées équitablement',
      'Reformulation totale (aucune reprise mot-à-mot)',
      'Organisation thématique (pas chronologique)',
      'Introduction présentant le dossier sans le résumer',
      'Hiérarchisation des informations (principal vs secondaire)',
      'Registre neutre et objectif',
      'Longueur conforme à la consigne',
    ]
  },
  email_formel: {
    title: 'E-mail formel avancé (B2-C1)',
    items: [
      'Objet précis et professionnel',
      'Formule d\'appel correcte selon le destinataire',
      'Registre formel maintenu tout au long',
      'Paragraphes bien délimités (1 idée = 1 paragraphe)',
      'Demande ou proposition clairement formulée',
      'Justification de la demande',
      'Formule de politesse finale complète',
      'PJ mentionnées si nécessaire',
      'Relecture : syntaxe complexe sans ambiguïté',
    ]
  }
};

// Direct links hub
export const directLinks = [
  { name: 'DeepL', url: 'https://www.deepl.com/translator', icon: '🔤', description: 'Traducteur IA de référence', category: 'traduction' },
  { name: 'WordReference', url: 'https://www.wordreference.com/fren/', icon: '📚', description: 'Dictionnaire bilingue et forum', category: 'dictionnaire' },
  { name: 'Reverso Context', url: 'https://context.reverso.net/traduction/', icon: '🔍', description: 'Traductions en contexte réel', category: 'traduction' },
  { name: 'Forvo', url: 'https://fr.forvo.com/', icon: '🎧', description: 'Prononciation par des natifs', category: 'prononciation' },
  { name: 'TV5Monde', url: 'https://apprendre.tv5monde.com/', icon: '📺', description: 'Ressources FLE avec vidéos', category: 'apprentissage' },
  { name: 'RFI Savoirs', url: 'https://savoirs.rfi.fr/', icon: '📻', description: 'Français avec l\'actualité', category: 'apprentissage' },
  { name: 'Language Reactor', url: 'https://www.languagereactor.com/', icon: '🎬', description: 'Apprendre avec Netflix & YouTube', category: 'immersion' },
  { name: 'TTSMaker', url: 'https://ttsmaker.com/fr', icon: '🔊', description: 'Synthèse vocale française', category: 'prononciation' },
  { name: 'Conjugaison Reverso', url: 'https://conjugator.reverso.net/conjugation-french.html', icon: '⚙️', description: 'Conjugueur complet', category: 'grammaire' },
  { name: 'Le Robert en ligne', url: 'https://dictionnaire.lerobert.com/', icon: '📖', description: 'Dictionnaire monolingue français', category: 'dictionnaire' },
];

