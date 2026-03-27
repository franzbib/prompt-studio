// Prompt catalog - Niveau C1

export const c1Prompts = [
// NIVEAU C1
  // ═══════════════════════════════════════════════
  {
    id: 'c1_ecrit_01',
    titleZh: '分析社论并写批判性文章',
    title: 'Essai critique — analyse d\'un éditorial',
    level: 'C1',
    skill: 'production_ecrite',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'transfert',
    interactionMode: 'revision_loop',
    guidanceLevel: 'faible',
    correctionMode: 'signalee',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Écrit académique',
    context: 'academique',
    tags: ['essai', 'critique', 'analyse', 'éditorial', 'académique'],
    objective: 'Rédiger un essai critique rigoureux analysant la position d\'un éditorial.',
    duration: '60 min',
    difficulty: 5,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un directeur de thèse et professeur de français académique de haut niveau. Je suis au niveau C1.

Je vais te donner un éditorial ou une tribune. Ton rôle :
1. Aide-moi à déconstruire l'argumentation : thèse implicite, arguments principaux, présupposés idéologiques, figures rhétoriques.
2. Formule 3 questions critiques que je pourrais approfondir dans mon essai.
3. Je rédige un essai critique de 400-500 mots.
4. Évalue sur 4 axes (C1) : rigueur argumentative, précision lexicale, cohésion discursive, originalité de la réflexion.

Éditorial à analyser : [ÉDITORIAL_OU_TRIBUNE]`,
    placeholders: ['[ÉDITORIAL_OU_TRIBUNE]'],
    exampleOutput: null,
    caution: 'Prompt avancé. Prévoir 60-90 minutes pour une session complète.',
    featured: true,
    type: 'socratique',
  },
  {
    id: 'c1_ecrit_02',
    titleZh: '提升文风：表达更准确、更细腻',
    title: 'Améliorer le style — précision et nuance',
    level: 'C1',
    skill: 'production_ecrite',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'revision',
    interactionMode: 'revision_loop',
    guidanceLevel: 'faible',
    correctionMode: 'hybride',
    rewritePolicy: 'targeted_rewrite_only',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'light_guardrails',
    multiLevel: false,
    subcategory: 'Style et précision',
    context: 'academique',
    tags: ['style', 'précision', 'réécriture', 'nuance', 'C1'],
    objective: 'Affiner le style académique en éliminant les approximations et les répétitions.',
    duration: '30 min',
    difficulty: 5,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un éditeur littéraire et professeur de style académique français. Je suis au niveau C1.

Analyse mon texte ci-dessous à travers le prisme du style :
1. Identifie 5 faiblesses stylistiques : répétitions lexicales, tournures lourdes, imprécisions, registre incohérent.
2. Pour chaque faiblesse, propose 2 reformulations possibles avec une justification stylistique.
3. Ne réécris pas l'intégralité — guide-moi par des suggestions ciblées.
4. Évalue la densité lexicale globale et suggère 3 mots ou expressions plus précis.

Mon texte : [MON_TEXTE]`,
    placeholders: ['[MON_TEXTE]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'reformulation',
  },
  {
    id: 'c1_debat_01',
    titleZh: '准备答辩或口头辩论',
    title: 'Préparer une soutenance ou un débat oral',
    level: 'C1',
    skill: 'expression_orale',
    cefrActivityPrimary: 'interaction_orale',
    pedagogicalFunction: 'simulation',
    interactionMode: 'simulation',
    guidanceLevel: 'faible',
    correctionMode: 'signalee',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Rhétorique et argumentation',
    context: 'academique',
    tags: ['soutenance', 'débat', 'rhétorique', 'contre-arguments', 'C1'],
    objective: 'Se préparer à défendre une thèse face à des objections et questions.',
    duration: '45 min',
    difficulty: 5,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un jury académique exigeant. Je dois soutenir/défendre la position suivante : [MA_THÈSE] dans le cadre de [CONTEXTE_ACADÉMIQUE].

Joue le rôle d'un jury hostile mais constructif :
1. Formule 5 objections sérieuses à ma thèse.
2. Pour chaque objection, je dois répondre. Attends ma réponse avant de continuer.
3. Évalue mes réponses : précision, réactivité, solidité argumentative.
4. Donne-moi 3 formules rhétoriques en français pour gérer les objections (concéder, nuancer, contre-attaquer).`,
    placeholders: ['[MA_THÈSE]', '[CONTEXTE_ACADÉMIQUE]'],
    exampleOutput: null,
    caution: 'Prévoir une session interactive de 45+ minutes. Fonctionne mieux avec Claude pour la nuance.',
    featured: true,
    type: 'simulation_examen',
  },
  {
    id: 'c1_comp_01',
    titleZh: '分析文中的言外之意与隐含信息',
    title: 'Analyser les inférences et l\'implicite',
    level: 'C1',
    skill: 'comprehension_ecrite',
    cefrActivityPrimary: 'reception_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'moyen',
    correctionMode: 'directe',
    rewritePolicy: 'targeted_rewrite_only',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'light_guardrails',
    multiLevel: false,
    subcategory: 'Lecture critique',
    context: 'academique',
    tags: ['inférence', 'implicite', 'présupposé', 'analyse', 'C1'],
    objective: 'Décoder les intentions, présupposés et sous-entendus d\'un texte complexe.',
    duration: '35 min',
    difficulty: 5,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un analyste du discours et professeur de FLE C1. Aide-moi à travailler la compréhension en profondeur.

Donne-moi un texte argumentatif ou un extrait de presse de niveau C1 sur [THÈME].

Pour ce texte, guide-moi à :
1. Identifier la thèse explicite vs la thèse implicite.
2. Repérer 3 présupposés (ce qui est tenu pour acquis sans être dit).
3. Analyser 2 stratégies rhétoriques du locuteur.
4. Rédiger un résumé analytique de 100 mots qui intègre ces niveaux de lecture.`,
    placeholders: ['[THÈME]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'socratique',
  },
  {
    id: 'c1_methodo_01',
    titleZh: '撰写学术综合报告',
    title: 'Rédiger une note de synthèse académique',
    level: 'C1',
    skill: 'methodologie',
    cefrActivityPrimary: 'mediation_textuelle',
    pedagogicalFunction: 'mediation',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'signalee',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Méthodologie universitaire',
    context: 'academique',
    tags: ['note de synthèse', 'sources', 'objectivité', 'résumé', 'C1'],
    objective: 'Maîtriser la note de synthèse, exercice clé des concours et masters en France.',
    duration: '60 min',
    difficulty: 5,
    aiToolCompatibility: ['perplexity', 'claude'],
    promptText: `Tu es un professeur de préparation aux concours de la fonction publique française et expert FLE C1.

La note de synthèse est un exercice académique fondamental. Aide-moi à le maîtriser.

1. Explique les règles impératives (pas d'opinion personnelle, reformulation totale, organisation thématique).
2. Quelles sont les 5 erreurs les plus fréquentes des candidats ?
3. Génère un dossier de 3 textes courts (200 mots chacun) sur [THÈME_DOSSIER].
4. Je rédige une note de synthèse de 300 mots.
5. Évalue : respect des règles, complétude, reformulation, organisation, registre.`,
    placeholders: ['[THÈME_DOSSIER]'],
    exampleOutput: null,
    caution: 'Prompt Perplexity recommandé pour générer des dossiers avec sources réelles.',
    featured: false,
    type: 'survie_universitaire',
  },
  {
    id: 'c1_vocab_01',
    titleZh: '掌握不同语体与文体变化',
    title: 'Registres et variations stylistiques',
    level: 'C1',
    skill: 'vocabulaire',
    cefrActivityPrimary: 'mediation_textuelle',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'faible',
    correctionMode: 'hybride',
    rewritePolicy: 'targeted_rewrite_only',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'light_guardrails',
    multiLevel: false,
    subcategory: 'Variation sociolinguistique',
    context: 'academique',
    tags: ['registre', 'style', 'soutenu', 'familier', 'neutre', 'variation'],
    objective: 'Maîtriser les variations de registre pour adapter son discours au contexte.',
    duration: '25 min',
    difficulty: 5,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un linguiste et professeur de FLE C1. Je veux maîtriser les variations de registre en français.

1. Présente un tableau de 10 expressions dans 3 registres : familier / neutre / soutenu.
2. Exercice de réécriture : transforme ce texte écrit en registre familier en registre soutenu : [TEXTE_FAMILIER]
3. Explique 3 marqueurs syntaxiques qui distinguent le registre soutenu (inversion, ne explétif, subjonctif imparfait).
4. Donne-moi 5 contextes professionnels/académiques et quel registre est attendu pour chacun.`,
    placeholders: ['[TEXTE_FAMILIER]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'expansion_vocab',
  },

  // ═══════════════════════════════════════════════
];
