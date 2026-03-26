// FLE Prompt Studio — Seed Data
// Architecture composable V3: archétypes × packs thématiques × niveaux CECRL
// 60+ prompts couvrant A1→C1, 4 compétences, types variés

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const LEVEL_COLORS = {
  A1: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300', accent: '#059669', light: '#d1fae5' },
  A2: { bg: 'bg-teal-100',    text: 'text-teal-800',    border: 'border-teal-300',    accent: '#0d9488', light: '#ccfbf1' },
  B1: { bg: 'bg-amber-100',   text: 'text-amber-800',   border: 'border-amber-300',   accent: '#d97706', light: '#fef3c7' },
  B2: { bg: 'bg-blue-100',    text: 'text-blue-800',    border: 'border-blue-300',    accent: '#2563eb', light: '#dbeafe' },
  C1: { bg: 'bg-rose-100',    text: 'text-rose-800',    border: 'border-rose-300',    accent: '#be123c', light: '#ffe4e6' },
};

export const SKILLS = [
  { id: 'grammaire',            label: 'Grammaire',              icon: '⚙️' },
  { id: 'vocabulaire',          label: 'Vocabulaire',            icon: '📖' },
  { id: 'production_ecrite',    label: 'Production écrite',      icon: '✍️' },
  { id: 'comprehension_ecrite', label: 'Compréhension écrite',   icon: '👁️' },
  { id: 'expression_orale',     label: 'Expression orale',       icon: '🎙️' },
  { id: 'prononciation',        label: 'Prononciation',          icon: '🔊' },
  { id: 'methodologie',         label: 'Méthodologie universitaire', icon: '🎓' },
  { id: 'vie_quotidienne',      label: 'Vie quotidienne',        icon: '🏠' },
];

export const CONTEXTS = ['vie_quotidienne', 'academique', 'professionnel', 'examen'];
export const AI_TOOLS = ['any', 'chatgpt', 'claude', 'perplexity'];

export const PROMPT_TYPES = [
  'tuteur', 'correction', 'reformulation', 'dialogue_guide',
  'expansion_vocab', 'flashcards', 'dictee', 'coaching_prononciation',
  'roleplay', 'socratique', 'simulation_examen', 'email',
  'presentation_orale', 'synthese', 'comparaison_sources', 'survie_universitaire'
];

export const prompts = [
  // ═══════════════════════════════════════════════
  // NIVEAU A1
  // ═══════════════════════════════════════════════
  {
    id: 'a1_gram_01',
    title: 'Se présenter avec le verbe être et avoir',
    level: 'A1',
    skill: 'grammaire',
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
  // NIVEAU A2
  // ═══════════════════════════════════════════════
  {
    id: 'a2_gram_01',
    title: 'Passé composé — construction et auxiliaires',
    level: 'A2',
    skill: 'grammaire',
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
    title: 'Vocabulaire du voyage — préparer son séjour',
    level: 'A2',
    skill: 'vocabulaire',
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
    title: 'Écrire un e-mail simple — demande de renseignements',
    level: 'A2',
    skill: 'production_ecrite',
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
    title: 'Futur proche — projets et intentions',
    level: 'A2',
    skill: 'grammaire',
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
    title: 'Comprendre une annonce ou un panneau',
    level: 'A2',
    skill: 'comprehension_ecrite',
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
  // NIVEAU B1
  // ═══════════════════════════════════════════════
  {
    id: 'b1_gram_01',
    title: 'Imparfait vs Passé composé — récits',
    level: 'B1',
    skill: 'grammaire',
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
  // NIVEAU C1
  // ═══════════════════════════════════════════════
  {
    id: 'c1_ecrit_01',
    title: 'Essai critique — analyse d\'un éditorial',
    level: 'C1',
    skill: 'production_ecrite',
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
    title: 'Améliorer le style — précision et nuance',
    level: 'C1',
    skill: 'production_ecrite',
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
    title: 'Préparer une soutenance ou un débat oral',
    level: 'C1',
    skill: 'expression_orale',
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
    title: 'Analyser les inférences et l\'implicite',
    level: 'C1',
    skill: 'comprehension_ecrite',
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
    title: 'Rédiger une note de synthèse académique',
    level: 'C1',
    skill: 'methodologie',
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
    title: 'Registres et variations stylistiques',
    level: 'C1',
    skill: 'vocabulaire',
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
  // PROMPTS TRANSVERSAUX & SOCRATIQUES
  // ═══════════════════════════════════════════════
  {
    id: 'trans_socrat_01',
    title: 'Tuteur socratique universel — ne donne pas la réponse',
    level: 'B1',
    skill: 'grammaire',
    subcategory: 'Apprentissage actif',
    context: 'academique',
    tags: ['socratique', 'universel', 'méthode', 'guidage', 'autonomie'],
    objective: 'Utiliser l\'IA comme tuteur qui guide sans donner les réponses.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un tuteur de FLE socratique. Ton principe absolu : tu ne donnes jamais directement la bonne réponse. Tu poses des questions qui guident l'apprenant vers la solution.

Niveau de l'apprenant : [NIVEAU_CECRL]
Question ou problème de l'apprenant : [QUESTION_OU_ERREUR]

Méthode :
- Pose une question de guidage (pas une explication directe)
- Attends la réponse de l'apprenant
- Si la réponse est partiellement correcte : valide ce qui est juste + nouvel indice
- Si la réponse est fausse : reformule la question différemment, change l'angle
- Maximum 3 niveaux d'indice avant d'expliquer directement`,
    placeholders: ['[NIVEAU_CECRL]', '[QUESTION_OU_ERREUR]'],
    exampleOutput: null,
    caution: 'Ce prompt requiert un vrai échange interactif. Ne fonctionne pas bien avec une seule requête.',
    featured: true,
    type: 'socratique',
  },
  {
    id: 'trans_anki_01',
    title: 'Générer des cartes Anki depuis un texte',
    level: 'A2',
    skill: 'vocabulaire',
    subcategory: 'Mémorisation',
    context: 'vie_quotidienne',
    tags: ['anki', 'flashcards', 'mémorisation', 'SRS', 'révision'],
    objective: 'Transformer un texte en cartes Anki prêtes à l\'emploi.',
    duration: '10 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un expert en mémorisation et en FLE. À partir du texte suivant, crée des cartes Anki pour un apprenant de niveau [NIVEAU_CECRL].

Texte source : [TEXTE_SOURCE]

Génère les cartes au format CSV (séparateur point-virgule) :
Recto;Verso;Tags

Types de cartes à créer :
- Vocabulaire (mot → définition + exemple)
- Expressions clés (expression → traduction + contexte)
- Points de grammaire repérés (structure → règle + exemple)

Crée entre [MIN_CARTES] et [MAX_CARTES] cartes. Priorité aux items les plus utiles pour ce niveau.`,
    placeholders: ['[NIVEAU_CECRL]', '[TEXTE_SOURCE]', '[MIN_CARTES]', '[MAX_CARTES]'],
    exampleOutput: 'se renseigner;obtenir des informations sur quelque chose;A2,vocabulaire',
    caution: null,
    featured: false,
    type: 'flashcards',
  },
  {
    id: 'trans_pron_01',
    title: 'Coach de prononciation — sons difficiles',
    level: 'A2',
    skill: 'prononciation',
    subcategory: 'Phonétique',
    context: 'vie_quotidienne',
    tags: ['prononciation', 'phonétique', 'sons', 'liaison', 'rythme'],
    objective: 'Comprendre et travailler les sons du français difficiles pour sa langue maternelle.',
    duration: '20 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un coach de phonétique française et professeur de FLE. Ma langue maternelle est [LANGUE_MATERNELLE].

1. Identifie les 5 sons du français les plus difficiles pour un locuteur de [LANGUE_MATERNELLE] et explique pourquoi.
2. Pour chaque son : transcription phonétique API, description de la position des organes, exercice de répétition avec des mots progressifs.
3. Explique les règles principales de liaison et d'élision avec 5 exemples chacune.
4. Donne-moi une phrase-clé contenant les sons difficiles à pratiquer chaque jour.`,
    placeholders: ['[LANGUE_MATERNELLE]'],
    exampleOutput: null,
    caution: 'Pour la pratique audio, combiner avec TTSMaker ou Forvo pour entendre les sons.',
    featured: false,
    type: 'coaching_prononciation',
  },
  {
    id: 'trans_exam_01',
    title: 'Simuler un entretien oral — tous niveaux',
    level: 'B1',
    skill: 'expression_orale',
    subcategory: 'Préparation aux examens',
    context: 'examen',
    tags: ['entretien', 'oral', 'examen', 'DELF', 'DALF', 'simulation'],
    objective: 'Pratiquer l\'expression orale guidée pour la préparation aux examens.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un examinateur de l'examen [NOM_EXAMEN] (DELF/DALF/TCF). Simule une épreuve d'expression orale.

Niveau : [NIVEAU_CECRL]
Durée simulée : [DURÉE] minutes
Thème au choix de l'examinateur ou imposé : [THÈME_OU_LIBRE]

Procède comme un vrai examinateur :
1. Présentez le sujet et les consignes officiellement.
2. Donnez-moi le temps de préparer (indiquez "Vous avez 2 minutes de préparation.").
3. Attendez ma réponse (je vais taper mon monologue).
4. Posez 2-3 questions complémentaires de relance.
5. Évaluez sur les critères officiels de l'examen.`,
    placeholders: ['[NOM_EXAMEN]', '[NIVEAU_CECRL]', '[DURÉE]', '[THÈME_OU_LIBRE]'],
    exampleOutput: null,
    caution: 'Simulation non officielle. Les notes sont indicatives.',
    featured: false,
    type: 'simulation_examen',
  },
];

// Daily Challenges — 10 défis rotatifs
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
