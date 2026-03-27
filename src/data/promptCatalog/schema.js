export const CEFR_ACTIVITIES = [
  "reception_ecrite",
  "reception_orale",
  "production_ecrite",
  "production_orale",
  "interaction_orale",
  "interaction_ecrite",
  "interaction_en_ligne",
  "mediation_textuelle",
  "mediation_conceptuelle",
  "mediation_communication",
  "prononciation",
  "reflexivite",
];

export const PEDAGOGICAL_FUNCTIONS = [
  "diagnostic",
  "entrainement_guide",
  "simulation",
  "correction",
  "revision",
  "mediation",
  "transfert",
  "autonomisation",
  "socratique",
];

export const INTERACTION_MODES = [
  "single_shot",
  "multi_turn",
  "simulation",
  "socratic",
  "revision_loop",
];

export const GUIDANCE_LEVELS = [
  "fort",
  "moyen",
  "faible",
];

export const CORRECTION_MODES = [
  "directe",
  "signalee",
  "guidee",
  "socratique",
  "hybride",
];

export const REWRITE_POLICIES = [
  "allow_full_rewrite",
  "targeted_rewrite_only",
  "no_full_rewrite_first",
  "learner_attempt_first",
];

export const SUPPORT_LANGUAGE_OPTIONS = [
  "none",
  "optional",
  "recommended",
  "required",
];

export const ANTI_SUBSTITUTION_POLICIES = [
  "none",
  "light_guardrails",
  "attempt_first",
  "strict_no_answer",
];

export const RICH_PROMPT_FIELDS = [
  "cefrActivityPrimary",
  "pedagogicalFunction",
  "interactionMode",
  "guidanceLevel",
  "correctionMode",
  "rewritePolicy",
  "supportLanguage",
  "antiSubstitutionPolicy",
  "multiLevel",
];

export const RICH_PROMPT_DEFAULTS = {
  cefrActivityPrimary: "production_ecrite",
  pedagogicalFunction: "entrainement_guide",
  interactionMode: "single_shot",
  guidanceLevel: "moyen",
  correctionMode: "directe",
  rewritePolicy: "allow_full_rewrite",
  supportLanguage: "none",
  antiSubstitutionPolicy: "none",
  multiLevel: false,
};

export const RICH_PROMPT_ENUMS = {
  cefrActivityPrimary: CEFR_ACTIVITIES,
  pedagogicalFunction: PEDAGOGICAL_FUNCTIONS,
  interactionMode: INTERACTION_MODES,
  guidanceLevel: GUIDANCE_LEVELS,
  correctionMode: CORRECTION_MODES,
  rewritePolicy: REWRITE_POLICIES,
  supportLanguage: SUPPORT_LANGUAGE_OPTIONS,
  antiSubstitutionPolicy: ANTI_SUBSTITUTION_POLICIES,
};

export const RICH_PROMPT_ENUM_SETS = Object.fromEntries(
  Object.entries(RICH_PROMPT_ENUMS).map(([field, values]) => [field, new Set(values)]),
);

export function isKnownRichPromptField(field) {
  return RICH_PROMPT_FIELDS.includes(field);
}

export function isKnownRichPromptValue(field, value) {
  if (field === "multiLevel") {
    return typeof value === "boolean";
  }

  const allowedValues = RICH_PROMPT_ENUM_SETS[field];
  return allowedValues ? allowedValues.has(value) : false;
}
