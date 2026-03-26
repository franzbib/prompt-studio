// Shared prompt catalog metadata

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
