// Prompt catalog - Niveau A2

export const a2Prompts = [
// NIVEAU A2
  // ═══════════════════════════════════════════════
  {
    id: 'a2_gram_01',
    titleZh: '复合过去时：构成与助动词',
    title: 'Passé composé — construction et auxiliaires',
    level: 'A2',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'optional',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Temps du passé',
    context: 'vie_quotidienne',
    tags: ['passé composé', 'avoir', 'être', 'participe passé'],
    objective: 'Comprendre et utiliser le passé composé avec avoir et être.',
    duration: '20 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE expert. Je suis au niveau A2. Aide-moi à maîtriser le passé composé.

Étape 1 : Explique la règle avec avoir vs être (verbes de mouvement, pronominaux). Donne une liste mémorisable.

Étape 2 : Propose 8 phrases à mettre au passé composé sur le thème de [THÈME].

Étape 3 : Corrige mes réponses. Pour chaque erreur, explique-moi :
- Ce que j'ai écrit
- Ce qui est correct
- La règle en 1 phrase simple

Ne donne pas toutes les réponses avant que j'essaie.`,
    placeholders: ['[THÈME]'],
    exampleOutput: 'J\'ai mangé / Je suis allé(e) / Nous nous sommes levés...',
    caution: null,
    featured: true,
    type: 'tuteur',
  },
  {
    id: 'a2_vocab_01',
    titleZh: '旅行词汇：为出行做准备',
    title: 'Vocabulaire du voyage — préparer son séjour',
    level: 'A2',
    skill: 'vocabulaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'allow_full_rewrite',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'none',
    multiLevel: false,
    subcategory: 'Voyage et transport',
    context: 'vie_quotidienne',
    tags: ['voyage', 'transport', 'hôtel', 'réservation'],
    objective: 'Maîtriser le lexique pour organiser et raconter un voyage.',
    duration: '15 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Crée un exercice de vocabulaire sur le thème du voyage pour le niveau A2.

1. Présente 12 mots essentiels (transport, hébergement, réservation) avec définition simple et exemple.
2. Exercice texte à trous : un court récit de voyage avec 8 espaces à compléter.
3. Mini-dialogue : aide-moi à simuler une conversation à l'hôtel pour réserver une chambre.
4. Génère 5 cartes Anki-style (recto : mot français / verso : définition + exemple).`,
    placeholders: [],
    exampleOutput: 'réserver, l\'aéroport, le billet, la chambre double, l\'embarquement...',
    caution: null,
    featured: false,
    type: 'flashcards',
  },
  {
    id: 'a2_ecrit_01',
    titleZh: '写一封简单咨询邮件',
    title: 'Écrire un e-mail simple — demande de renseignements',
    level: 'A2',
    skill: 'production_ecrite',
    cefrActivityPrimary: 'interaction_ecrite',
    pedagogicalFunction: 'transfert',
    interactionMode: 'revision_loop',
    guidanceLevel: 'fort',
    correctionMode: 'signalee',
    rewritePolicy: 'targeted_rewrite_only',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'E-mails pratiques',
    context: 'vie_quotidienne',
    tags: ['e-mail', 'formules', 'demande', 'politesse'],
    objective: 'Rédiger un e-mail formel simple avec les formules appropriées.',
    duration: '20 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je dois écrire un e-mail en français pour [OBJECTIF_EMAIL] à [DESTINATAIRE_TYPE].

1. Explique la structure d'un e-mail formel simple : objet, salutation, corps, clôture.
2. Donne-moi 3 formules d'ouverture et 3 formules de clôture adaptées au niveau A2.
3. Écris un e-mail modèle de 60-80 mots.
4. Demande-moi d'écrire mon propre e-mail.
5. Corrige en soulignant les erreurs de registre et de structure — sans réécrire tout le texte.`,
    placeholders: ['[OBJECTIF_EMAIL]', '[DESTINATAIRE_TYPE]'],
    exampleOutput: 'Madame, Monsieur, / Je vous contacte pour... / Cordialement,',
    caution: null,
    featured: true,
    type: 'email',
  },
  {
    id: 'a2_gram_02',
    titleZh: '最近将来时：计划与打算',
    title: 'Futur proche — projets et intentions',
    level: 'A2',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'optional',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Temps du futur',
    context: 'vie_quotidienne',
    tags: ['futur proche', 'aller + infinitif', 'projets', 'intentions'],
    objective: 'Exprimer des intentions et des projets avec le futur proche.',
    duration: '15 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Aide-moi à utiliser le futur proche (aller + infinitif) au niveau A2.

1. Explique la formation avec un tableau clair.
2. Compare futur proche vs futur simple : quand utiliser l'un ou l'autre ?
3. Exercice de transformation : transforme ces 6 phrases au présent en futur proche.
4. Aide-moi à décrire mes projets pour [PÉRIODE] en utilisant le futur proche. Corrige mes phrases.`,
    placeholders: ['[PÉRIODE]'],
    exampleOutput: 'Je vais étudier / Nous allons voyager / Elle va chercher un appartement',
    caution: null,
    featured: false,
    type: 'tuteur',
  },
  {
    id: 'a2_comp_01',
    titleZh: '看懂通知或标识',
    title: 'Comprendre une annonce ou un panneau',
    level: 'A2',
    skill: 'comprehension_ecrite',
    cefrActivityPrimary: 'reception_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Textes pratiques',
    context: 'vie_quotidienne',
    tags: ['annonce', 'panneau', 'compréhension', 'informations pratiques'],
    objective: 'Repérer les informations essentielles dans des textes courts et pratiques.',
    duration: '15 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Crée 3 exercices de compréhension écrite pour le niveau A2 sur des textes courts de la vie quotidienne (annonce, affiche, message court).

Pour chaque texte :
1. Rédige un texte authentique de 50-80 mots (horaires, règlement, invitation...).
2. Pose 3 questions de compréhension (vrai/faux + QCM).
3. Identifie 3-4 mots de vocabulaire à expliquer.
4. Corrige mes réponses avec des explications simples.

Thème des textes : [THÈME_CHOISI]`,
    placeholders: ['[THÈME_CHOISI]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'tuteur',
  },

  // ═══════════════════════════════════════════════
];
