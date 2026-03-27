// Prompt catalog - Niveau A1

export const a1Prompts = [
// NIVEAU A1
  // ═══════════════════════════════════════════════
  {
    id: 'a1_gram_01',
    title: 'Se présenter avec le verbe être et avoir',
    level: 'A1',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'multi_turn',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'optional',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Verbes essentiels',
    context: 'vie_quotidienne',
    tags: ['être', 'avoir', 'présentation', 'identité'],
    objective: 'Maîtriser les conjugaisons de base pour se présenter correctement.',
    duration: '10 min',
    difficulty: 1,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE bienveillant. Je suis un apprenant de niveau A1. Aide-moi à pratiquer le verbe "être" et "avoir" au présent. 

1. Donne-moi d'abord les conjugaisons complètes avec des exemples simples.
2. Propose-moi 5 phrases à compléter avec "être" ou "avoir".
3. Corrige mes réponses en expliquant chaque erreur très simplement, en [LANGUE_AIDE].

Mon contexte : je veux parler de [INFORMATIONS_PERSONNELLES].`,
    placeholders: ['[LANGUE_AIDE]', '[INFORMATIONS_PERSONNELLES]'],
    exampleOutput: 'Je suis étudiant. J\'ai 22 ans. Tu es français ? Nous avons un cours de français.',
    caution: null,
    featured: true,
    type: 'tuteur',
  },
  {
    id: 'a1_vocab_01',
    title: 'Cartes lexicales : la salle de classe',
    level: 'A1',
    skill: 'vocabulaire',
    cefrActivityPrimary: 'reception_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'allow_full_rewrite',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'none',
    multiLevel: false,
    subcategory: 'Environnement immédiat',
    context: 'vie_quotidienne',
    tags: ['classe', 'objets', 'articles', 'genre'],
    objective: 'Apprendre le vocabulaire de la salle de classe avec les articles (le/la/un/une).',
    duration: '15 min',
    difficulty: 1,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Crée 10 cartes lexicales sur le thème de la salle de classe pour un apprenant A1.

Pour chaque mot, donne :
- Le mot avec son article défini (le / la / l')
- Une définition très simple (1 phrase)
- Un exemple d'usage
- Une phrase modèle : "Dans la classe, il y a..."

Ensuite, propose un mini-test de 5 questions pour vérifier la mémorisation.`,
    placeholders: [],
    exampleOutput: 'le tableau, la chaise, le cahier, le stylo, la fenêtre...',
    caution: null,
    featured: false,
    type: 'flashcards',
  },
  {
    id: 'a1_ecrit_01',
    title: 'Écrire une carte postale simple',
    level: 'A1',
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
    subcategory: 'Messages courts',
    context: 'vie_quotidienne',
    tags: ['carte postale', 'présent', 'salutations', 'décrire'],
    objective: 'Rédiger un message court de 30-50 mots en utilisant le présent.',
    duration: '15 min',
    difficulty: 1,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je suis au niveau A1. Aide-moi à écrire une carte postale depuis [LIEU] à [DESTINATAIRE].

Procède ainsi :
1. Montre-moi un modèle de carte postale simple (30-40 mots).
2. Explique les formules de salutation et de clôture.
3. Demande-moi d'écrire ma propre version.
4. Corrige mon texte en signalant maximum 3 erreurs. Ne réécris pas tout — indique seulement ce qui doit changer.`,
    placeholders: ['[LIEU]', '[DESTINATAIRE]'],
    exampleOutput: 'Bonjour Marie ! Je suis à Paris. La ville est belle. Il fait beau. Je visite la Tour Eiffel. À bientôt ! Lucas',
    caution: null,
    featured: true,
    type: 'correction',
  },
  {
    id: 'a1_oral_01',
    title: 'Se présenter à l\'oral — simulation',
    level: 'A1',
    skill: 'expression_orale',
    cefrActivityPrimary: 'interaction_orale',
    pedagogicalFunction: 'simulation',
    interactionMode: 'simulation',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'optional',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Présentation personnelle',
    context: 'vie_quotidienne',
    tags: ['présentation', 'dialogue', 'questions', 'réponses'],
    objective: 'Pratiquer une présentation personnelle complète à l\'oral.',
    duration: '10 min',
    difficulty: 1,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Joue le rôle d'un étudiant qui rencontre [PRÉNOM_APPRENANT] pour la première fois. 

1. Pose-moi 5 questions simples (prénom, nationalité, âge, profession, ville).
2. Attends ma réponse à chaque question.
3. Corrige poliment si j'utilise une structure incorrecte.
4. À la fin, fais un résumé de ma présentation.

Parle lentement et simplement. Si je ne comprends pas, reformule en [LANGUE_AIDE].`,
    placeholders: ['[PRÉNOM_APPRENANT]', '[LANGUE_AIDE]'],
    exampleOutput: null,
    caution: 'Fonctionne mieux avec un LLM qui gère les échanges interactifs (Claude, ChatGPT).',
    featured: false,
    type: 'dialogue_guide',
  },
  {
    id: 'a1_surv_01',
    title: 'Français de survie — urgences et directions',
    level: 'A1',
    skill: 'vie_quotidienne',
    cefrActivityPrimary: 'interaction_orale',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'allow_full_rewrite',
    supportLanguage: 'required',
    antiSubstitutionPolicy: 'none',
    multiLevel: false,
    subcategory: 'Survie linguistique',
    context: 'vie_quotidienne',
    tags: ['urgences', 'directions', 'aider', 'survie'],
    objective: 'Connaître les phrases essentielles pour les situations d\'urgence.',
    duration: '10 min',
    difficulty: 1,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je suis en France pour la première fois et j'ai besoin des phrases essentielles pour survivre dans les situations suivantes :

1. Demander de l'aide
2. Demander son chemin
3. Au médecin / à la pharmacie
4. Comprendre les panneaux importants

Pour chaque situation : donne 3-5 phrases clés avec la traduction en [LANGUE_MATERNELLE] et une note de prononciation simple.`,
    placeholders: ['[LANGUE_MATERNELLE]'],
    exampleOutput: 'Où est la pharmacie ? / J\'ai besoin d\'un médecin. / Appelez le SAMU !',
    caution: null,
    featured: false,
    type: 'tuteur',
  },

  // ═══════════════════════════════════════════════
];
