// Prompt catalog - Niveau B1

export const b1Prompts = [
// NIVEAU B1
  // ═══════════════════════════════════════════════
  {
    id: 'b1_gram_01',
    title: 'Imparfait vs Passé composé — récits',
    level: 'B1',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Opposition aspectuelle',
    context: 'vie_quotidienne',
    tags: ['imparfait', 'passé composé', 'récit', 'aspect'],
    objective: 'Distinguer et utiliser correctement imparfait et passé composé dans un récit.',
    duration: '25 min',
    difficulty: 3,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE expert en grammaire narrative. Je suis au niveau B1 et j'ai des difficultés avec imparfait vs passé composé.

1. Explique la logique aspectuelle (action en cours vs action accomplie) avec une métaphore visuelle.
2. Donne une règle mnémotechnique simple.
3. Propose un texte narratif court (8-10 phrases) avec des verbes à l'infinitif entre parenthèses. Je dois choisir le bon temps.
4. Attends mes réponses.
5. Corrige en expliquant chaque choix — surtout les erreurs. Ne donne pas les réponses d'abord.

Thème du récit : [THÈME_RÉCIT]`,
    placeholders: ['[THÈME_RÉCIT]'],
    exampleOutput: 'Il faisait beau quand je suis sorti. / Pendant qu\'elle lisait, le téléphone a sonné.',
    caution: null,
    featured: true,
    type: 'correction',
  },
  {
    id: 'b1_gram_02',
    title: 'Introduction au subjonctif présent',
    level: 'B1',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'guidee',
    rewritePolicy: 'no_full_rewrite_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Subjonctif',
    context: 'academique',
    tags: ['subjonctif', 'expression', 'doute', 'obligation', 'volonté'],
    objective: 'Comprendre quand et comment utiliser le subjonctif présent.',
    duration: '30 min',
    difficulty: 3,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE spécialisé en grammaire avancée. Je suis au niveau B1 et j'aborde le subjonctif.

1. Explique les 4 grandes catégories de déclencheurs du subjonctif (volonté, doute, sentiment, obligation) avec 2 exemples chacun.
2. Donne la conjugaison des 5 verbes irréguliers les plus fréquents (être, avoir, aller, faire, pouvoir).
3. Exercice : transforme ces 6 phrases pour introduire le subjonctif.
4. Production guidée : écris 3 phrases exprimant ton opinion sur [SUJET] en utilisant le subjonctif.
5. Corrige mes phrases — explique chaque erreur sans réécrire tout.`,
    placeholders: ['[SUJET]'],
    exampleOutput: 'Il faut que tu sois patient. / Je veux qu\'il vienne. / Bien qu\'il fasse froid...',
    caution: 'Meilleures résultats avec Claude ou ChatGPT-4 pour les explications grammaticales nuancées.',
    featured: true,
    type: 'tuteur',
  },
  {
    id: 'b1_ecrit_01',
    title: 'Donner son opinion — texte argumenté court',
    level: 'B1',
    skill: 'production_ecrite',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'transfert',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'signalee',
    rewritePolicy: 'targeted_rewrite_only',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Opinion et argumentation',
    context: 'academique',
    tags: ['opinion', 'argumentation', 'connecteurs', 'justification'],
    objective: 'Structurer une opinion avec des arguments et des exemples.',
    duration: '30 min',
    difficulty: 3,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je suis au niveau B1 et je dois écrire un texte d'opinion de 150-200 mots sur [SUJET_OPINION].

1. Explique la structure : introduction (thèse) → argument 1 + exemple → argument 2 + exemple → conclusion.
2. Donne-moi 6 connecteurs utiles pour exprimer une opinion (d'une part, en revanche, c'est pourquoi...).
3. Écris un modèle court (120 mots).
4. Demande-moi d'écrire mon propre texte.
5. Corrige en te concentrant sur : structure, connecteurs, registre. Signale maximum 5 erreurs linguistiques.`,
    placeholders: ['[SUJET_OPINION]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'correction',
  },
  {
    id: 'b1_vocab_01',
    title: 'Exprimer le doute, la certitude, la probabilité',
    level: 'B1',
    skill: 'vocabulaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'directe',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Modalité épistémique',
    context: 'vie_quotidienne',
    tags: ['doute', 'certitude', 'probabilité', 'nuance', 'modalité'],
    objective: 'Utiliser un répertoire lexical pour nuancer ses affirmations.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un professeur de FLE. Je suis au niveau B1 et je veux apprendre à nuancer mes propos.

1. Organise 15 expressions en 3 colonnes : certitude / probabilité / doute. Donne un exemple d'usage pour chacune.
2. Exercice de transformation : reformule ces 5 affirmations en introduisant de la nuance selon la consigne.
3. Mini-production : décris tes plans pour [PÉRIODE] en utilisant au moins 4 expressions de modalité différentes.
4. Corrige mon texte et identifie les expressions bien utilisées vs les erreurs.`,
    placeholders: ['[PÉRIODE]'],
    exampleOutput: 'Il est probable que... / Je suis certain(e) que... / Il se peut que (+ subjonctif)',
    caution: null,
    featured: false,
    type: 'expansion_vocab',
  },
  {
    id: 'b1_socrat_01',
    title: 'Tuteur socratique — corriger sans donner la réponse',
    level: 'B1',
    skill: 'grammaire',
    cefrActivityPrimary: 'production_ecrite',
    pedagogicalFunction: 'socratique',
    interactionMode: 'socratic',
    guidanceLevel: 'moyen',
    correctionMode: 'socratique',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'strict_no_answer',
    multiLevel: false,
    subcategory: 'Apprentissage actif',
    context: 'academique',
    tags: ['socratique', 'autonomie', 'auto-correction', 'méthode'],
    objective: 'Apprendre à identifier et corriger ses propres erreurs avec l\'aide de l\'IA.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un tuteur socratique de FLE. Tu ne donnes jamais directement la bonne réponse — tu poses des questions pour que je découvre la règle moi-même.

Voici mon texte : [TEXTE_APPRENANT]

Procède ainsi :
1. Identifie les 3 erreurs les plus importantes (type : grammatical, lexical, syntaxique).
2. Pour chaque erreur : pose-moi 1 question de guidage ("Quel temps utilise-t-on quand...?").
3. Attends ma réponse. Si je trouve, félicite et passe à l'erreur suivante. Si j'échoue, donne un indice supplémentaire.
4. À la fin, récapitule les règles abordées.`,
    placeholders: ['[TEXTE_APPRENANT]'],
    exampleOutput: null,
    caution: 'Conçu pour un échange interactif. Copiez ce prompt dans Claude ou ChatGPT et engagez un vrai dialogue.',
    featured: true,
    type: 'socratique',
  },
  {
    id: 'b1_methodo_01',
    title: 'Préparer une présentation orale courte',
    level: 'B1',
    skill: 'methodologie',
    cefrActivityPrimary: 'production_orale',
    pedagogicalFunction: 'transfert',
    interactionMode: 'revision_loop',
    guidanceLevel: 'moyen',
    correctionMode: 'signalee',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: false,
    subcategory: 'Expression orale structurée',
    context: 'academique',
    tags: ['présentation', 'plan', 'oral', 'structure', 'université'],
    objective: 'Structurer et préparer une présentation orale de 3-5 minutes.',
    duration: '30 min',
    difficulty: 3,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un coach en prise de parole et professeur de FLE. Je dois préparer une présentation orale de [DURÉE] minutes sur [SUJET] pour [CONTEXTE].

1. Aide-moi à construire un plan en 3 parties avec introduction et conclusion.
2. Propose 4 formules de transition entre les parties.
3. Donne-moi 3 conseils pour gérer le stress et la fluidité à l'oral.
4. Rédige une introduction modèle de 50 mots.
5. Lis mon introduction quand je te la propose et évalue : clarté, accroche, annonce du plan (note sur 5 pour chaque critère).`,
    placeholders: ['[DURÉE]', '[SUJET]', '[CONTEXTE]'],
    exampleOutput: null,
    caution: null,
    featured: false,
    type: 'presentation_orale',
  },

  // ═══════════════════════════════════════════════
];
