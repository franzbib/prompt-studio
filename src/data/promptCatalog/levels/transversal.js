// Prompt catalog - Prompts transversaux et socratiques

export const transversalPrompts = [
// PROMPTS TRANSVERSAUX & SOCRATIQUES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'trans_socrat_01',
    title: 'Tuteur socratique universel â€” ne donne pas la rÃ©ponse',
    level: 'B1',
    skill: 'grammaire',
    cefrActivityPrimary: 'reflexivite',
    pedagogicalFunction: 'socratique',
    interactionMode: 'socratic',
    guidanceLevel: 'moyen',
    correctionMode: 'socratique',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'strict_no_answer',
    multiLevel: true,
    subcategory: 'Apprentissage actif',
    context: 'academique',
    tags: ['socratique', 'universel', 'mÃ©thode', 'guidage', 'autonomie'],
    objective: 'Utiliser l\'IA comme tuteur qui guide sans donner les rÃ©ponses.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un tuteur de FLE socratique. Ton principe absolu : tu ne donnes jamais directement la bonne rÃ©ponse. Tu poses des questions qui guident l'apprenant vers la solution.

Niveau de l'apprenant : [NIVEAU_CECRL]
Question ou problÃ¨me de l'apprenant : [QUESTION_OU_ERREUR]

MÃ©thode :
- Pose une question de guidage (pas une explication directe)
- Attends la rÃ©ponse de l'apprenant
- Si la rÃ©ponse est partiellement correcte : valide ce qui est juste + nouvel indice
- Si la rÃ©ponse est fausse : reformule la question diffÃ©remment, change l'angle
- Maximum 3 niveaux d'indice avant d'expliquer directement`,
    placeholders: ['[NIVEAU_CECRL]', '[QUESTION_OU_ERREUR]'],
    exampleOutput: null,
    caution: 'Ce prompt requiert un vrai Ã©change interactif. Ne fonctionne pas bien avec une seule requÃªte.',
    featured: true,
    type: 'socratique',
  },
  {
    id: 'trans_anki_01',
    title: 'GÃ©nÃ©rer des cartes Anki depuis un texte',
    level: 'A2',
    skill: 'vocabulaire',
    cefrActivityPrimary: 'mediation_textuelle',
    pedagogicalFunction: 'autonomisation',
    interactionMode: 'single_shot',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'allow_full_rewrite',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'none',
    multiLevel: true,
    subcategory: 'MÃ©morisation',
    context: 'vie_quotidienne',
    tags: ['anki', 'flashcards', 'mÃ©morisation', 'SRS', 'rÃ©vision'],
    objective: 'Transformer un texte en cartes Anki prÃªtes Ã  l\'emploi.',
    duration: '10 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un expert en mÃ©morisation et en FLE. Ã€ partir du texte suivant, crÃ©e des cartes Anki pour un apprenant de niveau [NIVEAU_CECRL].

Texte source : [TEXTE_SOURCE]

GÃ©nÃ¨re les cartes au format CSV (sÃ©parateur point-virgule) :
Recto;Verso;Tags

Types de cartes Ã  crÃ©er :
- Vocabulaire (mot â†’ dÃ©finition + exemple)
- Expressions clÃ©s (expression â†’ traduction + contexte)
- Points de grammaire repÃ©rÃ©s (structure â†’ rÃ¨gle + exemple)

CrÃ©e entre [MIN_CARTES] et [MAX_CARTES] cartes. PrioritÃ© aux items les plus utiles pour ce niveau.`,
    placeholders: ['[NIVEAU_CECRL]', '[TEXTE_SOURCE]', '[MIN_CARTES]', '[MAX_CARTES]'],
    exampleOutput: 'se renseigner;obtenir des informations sur quelque chose;A2,vocabulaire',
    caution: null,
    featured: false,
    type: 'flashcards',
  },
  {
    id: 'trans_pron_01',
    title: 'Coach de prononciation â€” sons difficiles',
    level: 'A2',
    skill: 'prononciation',
    cefrActivityPrimary: 'prononciation',
    pedagogicalFunction: 'entrainement_guide',
    interactionMode: 'single_shot',
    guidanceLevel: 'fort',
    correctionMode: 'directe',
    rewritePolicy: 'allow_full_rewrite',
    supportLanguage: 'required',
    antiSubstitutionPolicy: 'none',
    multiLevel: false,
    subcategory: 'PhonÃ©tique',
    context: 'vie_quotidienne',
    tags: ['prononciation', 'phonÃ©tique', 'sons', 'liaison', 'rythme'],
    objective: 'Comprendre et travailler les sons du franÃ§ais difficiles pour sa langue maternelle.',
    duration: '20 min',
    difficulty: 2,
    aiToolCompatibility: ['any'],
    promptText: `Tu es un coach de phonÃ©tique franÃ§aise et professeur de FLE. Ma langue maternelle est [LANGUE_MATERNELLE].

1. Identifie les 5 sons du franÃ§ais les plus difficiles pour un locuteur de [LANGUE_MATERNELLE] et explique pourquoi.
2. Pour chaque son : transcription phonÃ©tique API, description de la position des organes, exercice de rÃ©pÃ©tition avec des mots progressifs.
3. Explique les rÃ¨gles principales de liaison et d'Ã©lision avec 5 exemples chacune.
4. Donne-moi une phrase-clÃ© contenant les sons difficiles Ã  pratiquer chaque jour.`,
    placeholders: ['[LANGUE_MATERNELLE]'],
    exampleOutput: null,
    caution: 'Pour la pratique audio, combiner avec TTSMaker ou Forvo pour entendre les sons.',
    featured: false,
    type: 'coaching_prononciation',
  },
  {
    id: 'trans_exam_01',
    title: 'Simuler un entretien oral â€” tous niveaux',
    level: 'B1',
    skill: 'expression_orale',
    cefrActivityPrimary: 'production_orale',
    pedagogicalFunction: 'simulation',
    interactionMode: 'simulation',
    guidanceLevel: 'moyen',
    correctionMode: 'signalee',
    rewritePolicy: 'learner_attempt_first',
    supportLanguage: 'none',
    antiSubstitutionPolicy: 'attempt_first',
    multiLevel: true,
    subcategory: 'PrÃ©paration aux examens',
    context: 'examen',
    tags: ['entretien', 'oral', 'examen', 'DELF', 'DALF', 'simulation'],
    objective: 'Pratiquer l\'expression orale guidÃ©e pour la prÃ©paration aux examens.',
    duration: '20 min',
    difficulty: 3,
    aiToolCompatibility: ['claude', 'chatgpt'],
    promptText: `Tu es un examinateur de l'examen [NOM_EXAMEN] (DELF/DALF/TCF). Simule une Ã©preuve d'expression orale.

Niveau : [NIVEAU_CECRL]
DurÃ©e simulÃ©e : [DURÃ‰E] minutes
ThÃ¨me au choix de l'examinateur ou imposÃ© : [THÃˆME_OU_LIBRE]

ProcÃ¨de comme un vrai examinateur :
1. PrÃ©sentez le sujet et les consignes officiellement.
2. Donnez-moi le temps de prÃ©parer (indiquez "Vous avez 2 minutes de prÃ©paration.").
3. Attendez ma rÃ©ponse (je vais taper mon monologue).
4. Posez 2-3 questions complÃ©mentaires de relance.
5. Ã‰valuez sur les critÃ¨res officiels de l'examen.`,
    placeholders: ['[NOM_EXAMEN]', '[NIVEAU_CECRL]', '[DURÃ‰E]', '[THÃˆME_OU_LIBRE]'],
    exampleOutput: null,
    caution: 'Simulation non officielle. Les notes sont indicatives.',
    featured: false,
    type: 'simulation_examen',
  },
];

