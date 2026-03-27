export const RICH_ACTIVITY_LABELS = {
  reception_ecrite: "Reception ecrite",
  reception_orale: "Reception orale",
  production_ecrite: "Production ecrite",
  production_orale: "Production orale",
  interaction_orale: "Interaction orale",
  interaction_ecrite: "Interaction ecrite",
  interaction_en_ligne: "Interaction en ligne",
  mediation_textuelle: "Mediation textuelle",
  mediation_conceptuelle: "Mediation conceptuelle",
  mediation_communication: "Mediation communication",
  prononciation: "Prononciation",
  reflexivite: "Reflexivite",
};

export const RICH_PEDAGOGICAL_FUNCTION_LABELS = {
  diagnostic: "Diagnostic",
  entrainement_guide: "Entrainement guide",
  simulation: "Simulation",
  correction: "Correction",
  revision: "Revision",
  mediation: "Mediation",
  transfert: "Transfert",
  autonomisation: "Autonomisation",
  socratique: "Socratique",
};

export const RICH_INTERACTION_MODE_LABELS = {
  single_shot: "Single shot",
  multi_turn: "Multi-turn",
  simulation: "Simulation",
  socratic: "Socratic",
  revision_loop: "Boucle de revision",
};

export const RICH_GUIDANCE_LEVEL_LABELS = {
  fort: "Guidage fort",
  moyen: "Guidage moyen",
  faible: "Guidage faible",
};

export const RICH_CORRECTION_MODE_LABELS = {
  directe: "Correction directe",
  signalee: "Correction signalee",
  guidee: "Correction guidee",
  socratique: "Correction socratique",
  hybride: "Correction hybride",
};

export const RICH_REWRITE_POLICY_LABELS = {
  allow_full_rewrite: "Reecriture complete autorisee",
  targeted_rewrite_only: "Reecriture ciblee seulement",
  no_full_rewrite_first: "Pas de reecriture complete d'abord",
  learner_attempt_first: "Tentative apprenant d'abord",
};

export const RICH_SUPPORT_LANGUAGE_LABELS = {
  none: "Sans langue d'appui",
  optional: "Langue d'appui possible",
  recommended: "Langue d'appui conseillee",
  required: "Langue d'appui requise",
};

export const RICH_ANTI_SUBSTITUTION_LABELS = {
  none: "Sans garde-fou",
  light_guardrails: "Garde-fous legers",
  attempt_first: "Tentative d'abord",
  strict_no_answer: "Pas de reponse directe",
};

export function getRichLabel(labelMap, value) {
  return labelMap[value] || value;
}
