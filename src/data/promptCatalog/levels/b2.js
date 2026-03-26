// Prompt catalog - Niveau B2

export const b2Prompts = [
// NIVEAU B2
  // ═══════════════════════════════════════════════
  {
    id: 'b2_ecrit_01',
    title: 'Corriger un paragraphe sans tout réécrire',
    level: 'B2',
    skill: 'production_ecrite',
    subcategory: 'Correction ciblée',
    context: 'academique',
    tags: ['correction', 'erreurs', 'autonomie', 'B2', 'ciblé'],
    objective: 'Identifier et corriger ses erreurs récurrentes de manière autonome.',
    duration: '25 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je vais te donner un paragraphe écrit par un apprenant de niveau B2. Corrige seulement les erreurs les plus importantes. N'écris pas une version parfaite tout de suite.

Commence par repérer 5 erreurs maximum, classe-les par type (grammatical, lexical, syntaxique, registre), puis demande-moi d'essayer de les corriger moi-même avant de proposer une version améliorée.

[TEXTE_DE_L_APPRENANT]

Format de ta réponse :
- Erreur 1 (type) : citation → question de guidage
- Erreur 2 (type) : ...
→ "Essaie maintenant de corriger ces points dans ton texte."`,
    placeholders: ['[TEXTE_DE_L_APPRENANT]'],
    exampleOutput: null,
    caution: null,
    featured: true,
    type: 'correction',
  },
  {
    id: 'b2_ecrit_02',
    title: 'Argumentation nuancée — thèse, antithèse, synthèse',
    level: 'B2',
    skill: 'production_ecrite',
    subcategory: 'Dissertation',
    context: 'academique',
    tags: ['argumentation', 'dissertation', 'TAS', 'connecteurs', 'nuance'],
    objective: 'Maîtriser la structure thèse-antithèse-synthèse pour un texte argumentatif solide.',
    duration: '45 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de français et de rhétorique. Je suis au niveau B2 et je dois rédiger un texte argumentatif sur : [SUJET_DISSERTATION]

1. Explique la structure TAS (thèse, antithèse, synthèse) avec un schéma textuel.
2. Propose 8 connecteurs logiques avancés (concession, opposition, nuance) avec exemples.
3. Aide-moi à construire un plan détaillé : 2 arguments pour, 2 contre, 1 position nuancée.
4. Je rédige la synthèse. Évalue-la sur 4 critères : cohérence logique, richesse lexicale, registre, longueur appropriée.`,
    placeholders: ['[SUJET_DISSERTATION]'],
    exampleOutput: null,
    caution: 'Idéal pour la préparation au DELF B2 ou aux examens universitaires.',
    featured: true,
    type: 'tuteur',
  },
  {
    id: 'b2_comp_01',
    title: 'Synthèse de deux sources contradictoires',
    level: 'B2',
    skill: 'comprehension_ecrite',
    subcategory: 'Synthèse de documents',
    context: 'academique',
    tags: ['synthèse', 'sources', 'comparaison', 'reformulation', 'B2'],
    objective: 'Lire, comprendre et synthétiser deux documents aux perspectives différentes.',
    duration: '40 min',
    difficulty: 4,
    aiToolCompatibility: ['perplexity', 'claude', 'chatgpt'],
    promptText: `Tu es un professeur de FLE spécialisé en méthodologie universitaire. Génère deux textes courts (150-200 mots chacun) présentant deux points de vue différents sur : [SUJET_DÉBAT]

Document A : point de vue favorable
Document B : point de vue critique

Ensuite :
1. Pose 3 questions de compréhension par document.
2. Demande-moi de rédiger une synthèse de 200 mots qui présente les deux positions sans donner mon avis.
3. Évalue ma synthèse sur : reformulation (pas de copie), équilibre entre les sources, clarté, cohésion.`,
    placeholders: ['[SUJET_DÉBAT]'],
    exampleOutput: null,
    caution: 'Ce prompt fonctionne particulièrement bien avec Perplexity pour un ancrage dans des sources réelles.',
    featured: false,
    type: 'synthese',
  },
  {
    id: 'b2_gram_01',
    title: 'Subjonctif et conditionnel — hypothèse et nuance',
    level: 'B2',
    skill: 'grammaire',
    subcategory: 'Modes et modalité',
    context: 'academique',
    tags: ['subjonctif', 'conditionnel', 'hypothèse', 'nuance', 'registre'],
    objective: 'Utiliser subjonctif et conditionnel pour exprimer hypothèse, doute et nuance.',
    duration: '30 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE expert. Je suis au niveau B2 et je veux maîtriser l'usage avancé du subjonctif et du conditionnel.

1. Tableau comparatif : quand utiliser subjonctif vs conditionnel (avec exemples).
2. Focus sur les structures d'hypothèse : si + imparfait + conditionnel présent ; au cas où + conditionnel.
3. Exercice de transformation : transforme ces 6 affirmations en les nuançant avec le mode approprié.
4. Production : réécris ce paragraphe factuel en introduisant des nuances et hypothèses : [PARAGRAPHE_À_NUANCER]`,
    placeholders: ['[PARAGRAPHE_À_NUANCER]'],
    exampleOutput: 'Si j\'avais plus de temps, je lirais davantage. / Il est possible qu\'il vienne...',
    caution: null,
    featured: false,
    type: 'reformulation',
  },
  {
    id: 'b2_vocab_01',
    title: 'Connecteurs avancés et registre soutenu',
    level: 'B2',
    skill: 'vocabulaire',
    subcategory: 'Cohésion textuelle',
    context: 'academique',
    tags: ['connecteurs', 'registre', 'soutenu', 'cohésion', 'discours'],
    objective: 'Enrichir son répertoire de connecteurs logiques pour un discours structuré.',
    duration: '20 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de linguistique textuelle et de FLE. Je suis au niveau B2.

1. Classe 20 connecteurs avancés en 5 catégories : addition, opposition, cause, conséquence, concession. Exemple d'usage pour chacun.
2. Exercice : dans ce texte, remplace les connecteurs basiques (mais, et, donc, parce que) par des équivalents plus soutenus : [TEXTE_À_AMÉLIORER]
3. Donne-moi 5 formules pour "changer de registre" (passer d'une langue quotidienne à soutenue).`,
    placeholders: ['[TEXTE_À_AMÉLIORER]'],
    exampleOutput: 'néanmoins, toutefois, en outre, par conséquent, bien que, quoique...',
    caution: null,
    featured: false,
    type: 'expansion_vocab',
  },
  {
    id: 'b2_methodo_01',
    title: 'Lettre de motivation — université française',
    level: 'B2',
    skill: 'production_ecrite',
    subcategory: 'Écrits professionnels',
    context: 'academique',
    tags: ['lettre de motivation', 'université', 'candidature', 'formel', 'B2'],
    objective: 'Rédiger une lettre de motivation convaincante pour une candidature universitaire.',
    duration: '45 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un conseiller en orientation et professeur de FLE. Je dois rédiger une lettre de motivation pour [PROGRAMME_VISÉ] à [UNIVERSITÉ].

1. Explique la structure d'une lettre de motivation française (3-4 paragraphes, formules obligatoires).
2. Quelles sont les 3 erreurs les plus fréquentes des apprenants étrangers dans cet exercice ?
3. Aide-moi à construire un plan personnalisé. Mon profil : [MON_PROFIL_RÉSUMÉ].
4. Je rédige le 1er paragraphe. Évalue : accroche, pertinence, registre, longueur.`,
    placeholders: ['[PROGRAMME_VISÉ]', '[UNIVERSITÉ]', '[MON_PROFIL_RÉSUMÉ]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'email',
  },
  {
    id: 'b2_exam_01',
    title: 'Simulation DELF B2 — production écrite',
    level: 'B2',
    skill: 'production_ecrite',
    subcategory: 'Préparation aux examens',
    context: 'examen',
    tags: ['DELF', 'B2', 'examen', 'simulation', 'production écrite'],
    objective: 'Se préparer à l\'épreuve de production écrite du DELF B2.',
    duration: '60 min',
    difficulty: 4,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un correcteur officiel de l'examen DELF B2. Simule une épreuve de production écrite.

1. Donne-moi un sujet réaliste (article de blog, contribution à un forum, lettre ouverte) de type DELF B2.
2. Rappelle les critères d'évaluation officiels (tâche, cohérence, lexique, morphosyntaxe).
3. Je rédige mon texte de 250 mots (consigne DELF : 200-250 mots).
4. Évalue mon texte avec une note indicative sur 25 et un retour qualitatif structuré.

Sujet au choix ou imposé : [THÈME_OU_LIBRE]`,
    placeholders: ['[THÈME_OU_LIBRE]'],
    exampleOutput: null,
    caution: 'Simulation non officielle. Pour une préparation optimale, combiner avec des sujets authentiques DELF.',
    featured: true,
    type: 'simulation_examen',
  },

  // ═══════════════════════════════════════════════
];
