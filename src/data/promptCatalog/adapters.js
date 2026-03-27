import { RICH_PROMPT_DEFAULTS } from "./schema.js";

// Important: these inference maps are only a compatibility backstop for prompts
// that do not yet declare explicit rich metadata. Source-level rich fields always
// take priority over every heuristic in this file.

const LEVEL_GUIDANCE_MAP = {
  A1: "fort",
  A2: "fort",
  B1: "moyen",
  B2: "moyen",
  C1: "faible",
};

const TYPE_ACTIVITY_MAP = {
  dialogue_guide: "interaction_orale",
  roleplay: "interaction_orale",
  socratique: "reflexivite",
  email: "interaction_ecrite",
  presentation_orale: "production_orale",
  synthese: "mediation_textuelle",
  comparaison_sources: "mediation_textuelle",
  coaching_prononciation: "prononciation",
};

const SKILL_ACTIVITY_MAP = {
  grammaire: "production_ecrite",
  vocabulaire: "production_ecrite",
  production_ecrite: "production_ecrite",
  comprehension_ecrite: "reception_ecrite",
  expression_orale: "production_orale",
  prononciation: "prononciation",
  vie_quotidienne: "interaction_orale",
};

const TYPE_PEDAGOGICAL_FUNCTION_MAP = {
  correction: "correction",
  reformulation: "revision",
  dialogue_guide: "simulation",
  roleplay: "simulation",
  socratique: "socratique",
  simulation_examen: "simulation",
  synthese: "mediation",
  comparaison_sources: "mediation",
  coaching_prononciation: "entrainement_guide",
  presentation_orale: "transfert",
  email: "transfert",
  survie_universitaire: "transfert",
};

const TYPE_CORRECTION_MODE_MAP = {
  correction: "guidee",
  reformulation: "hybride",
  socratique: "socratique",
};

const TYPE_INTERACTION_MODE_MAP = {
  dialogue_guide: "simulation",
  roleplay: "simulation",
  simulation_examen: "simulation",
  socratique: "socratic",
};

function buildSearchText(prompt) {
  return [prompt.promptText, prompt.objective, prompt.caution]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasTextSnippet(prompt, snippets) {
  const haystack = buildSearchText(prompt);
  return snippets.some((snippet) => haystack.includes(snippet));
}

function inferCefrActivityPrimary(prompt) {
  return (
    // Some legacy types such as "simulation_examen" are intentionally left
    // unresolved here because the dominant activity may be oral or written.
    TYPE_ACTIVITY_MAP[prompt.type] ||
    SKILL_ACTIVITY_MAP[prompt.skill] ||
    RICH_PROMPT_DEFAULTS.cefrActivityPrimary
  );
}

function inferPedagogicalFunction(prompt) {
  if (prompt.skill === "methodologie" && prompt.type === "tuteur") {
    return "autonomisation";
  }

  return (
    // Flashcard-like prompts are not forced into "entrainement_guide" anymore.
    // They may just as well be tool prompts, so explicit source metadata should
    // carry that meaning whenever available.
    TYPE_PEDAGOGICAL_FUNCTION_MAP[prompt.type] ||
    (prompt.type === "tuteur" ? "entrainement_guide" : null) ||
    RICH_PROMPT_DEFAULTS.pedagogicalFunction
  );
}

function inferInteractionMode(prompt) {
  if (TYPE_INTERACTION_MODE_MAP[prompt.type]) {
    return TYPE_INTERACTION_MODE_MAP[prompt.type];
  }

  if (hasTextSnippet(prompt, ["attends ma reponse", "attendez ma reponse", "attends la reponse", "je vais taper mon monologue"])) {
    return prompt.type === "correction" || prompt.type === "reformulation"
      ? "revision_loop"
      : "multi_turn";
  }

  return RICH_PROMPT_DEFAULTS.interactionMode;
}

function inferGuidanceLevel(prompt) {
  if (prompt.type === "socratique" || prompt.type === "dialogue_guide") {
    return "fort";
  }

  if (hasTextSnippet(prompt, ["etape 1", "procede ainsi", "commence par", "donne-moi d'abord"])) {
    return "fort";
  }

  return LEVEL_GUIDANCE_MAP[prompt.level] || RICH_PROMPT_DEFAULTS.guidanceLevel;
}

function inferCorrectionMode(prompt) {
  if (TYPE_CORRECTION_MODE_MAP[prompt.type]) {
    return TYPE_CORRECTION_MODE_MAP[prompt.type];
  }

  if (hasTextSnippet(prompt, ["sans reecrire tout", "ne reecris pas tout", "indique seulement ce qui doit changer"])) {
    return "guidee";
  }

  if (hasTextSnippet(prompt, ["corrige", "correction", "explique chaque erreur"])) {
    return "directe";
  }

  return RICH_PROMPT_DEFAULTS.correctionMode;
}

function inferRewritePolicy(prompt) {
  if (hasTextSnippet(prompt, ["sans reecrire tout", "ne reecris pas tout", "indique seulement ce qui doit changer"])) {
    return "no_full_rewrite_first";
  }

  if (prompt.type === "reformulation") {
    return "targeted_rewrite_only";
  }

  if (prompt.type === "socratique") {
    return "learner_attempt_first";
  }

  return RICH_PROMPT_DEFAULTS.rewritePolicy;
}

function inferSupportLanguage(prompt) {
  const placeholders = Array.isArray(prompt.placeholders) ? prompt.placeholders : [];
  const hasSupportLanguagePlaceholder = placeholders.some((placeholder) => placeholder.includes("LANGUE_AIDE"));
  const hasRequiredLanguagePlaceholder = placeholders.some((placeholder) => placeholder.includes("LANGUE_MATERNELLE"));

  if (hasRequiredLanguagePlaceholder || hasTextSnippet(prompt, ["traduction en [langue_maternelle]", "ma langue maternelle est"])) {
    return "required";
  }

  if (hasSupportLanguagePlaceholder || hasTextSnippet(prompt, ["en [langue_aide]", "langue aide"])) {
    return "optional";
  }

  return RICH_PROMPT_DEFAULTS.supportLanguage;
}

function inferAntiSubstitutionPolicy(prompt) {
  if (prompt.type === "socratique" || hasTextSnippet(prompt, ["ne donne jamais directement la bonne reponse"])) {
    return "strict_no_answer";
  }

  if (inferRewritePolicy(prompt) === "no_full_rewrite_first" || hasTextSnippet(prompt, ["ne le corrige pas tout de suite"])) {
    return "attempt_first";
  }

  if (prompt.type === "correction" || prompt.type === "reformulation") {
    return "light_guardrails";
  }

  return RICH_PROMPT_DEFAULTS.antiSubstitutionPolicy;
}

function inferMultiLevel(prompt) {
  const placeholders = Array.isArray(prompt.placeholders) ? prompt.placeholders : [];
  return placeholders.some((placeholder) => placeholder.includes("NIVEAU_CECRL"));
}

export function normalizePrompt(rawPrompt) {
  const normalizedTitleZh =
    typeof rawPrompt.titleZh === "string" && rawPrompt.titleZh.trim().length > 0
      ? rawPrompt.titleZh.trim()
      : undefined;

  const prompt = {
    ...rawPrompt,
    titleZh: normalizedTitleZh,
    tags: Array.isArray(rawPrompt.tags) ? rawPrompt.tags : [],
    placeholders: Array.isArray(rawPrompt.placeholders) ? rawPrompt.placeholders : [],
    aiToolCompatibility:
      Array.isArray(rawPrompt.aiToolCompatibility) && rawPrompt.aiToolCompatibility.length > 0
        ? rawPrompt.aiToolCompatibility
        : ["any"],
    featured: Boolean(rawPrompt.featured),
  };

  return {
    ...prompt,
    // Explicit metadata declared in source files always wins. Inference is only
    // used to keep partially migrated or future prompts compatible by default.
    cefrActivityPrimary: prompt.cefrActivityPrimary ?? inferCefrActivityPrimary(prompt),
    pedagogicalFunction: prompt.pedagogicalFunction ?? inferPedagogicalFunction(prompt),
    interactionMode: prompt.interactionMode ?? inferInteractionMode(prompt),
    guidanceLevel: prompt.guidanceLevel ?? inferGuidanceLevel(prompt),
    correctionMode: prompt.correctionMode ?? inferCorrectionMode(prompt),
    rewritePolicy: prompt.rewritePolicy ?? inferRewritePolicy(prompt),
    supportLanguage: prompt.supportLanguage ?? inferSupportLanguage(prompt),
    antiSubstitutionPolicy: prompt.antiSubstitutionPolicy ?? inferAntiSubstitutionPolicy(prompt),
    multiLevel: prompt.multiLevel ?? inferMultiLevel(prompt),
  };
}

export function normalizePromptCollection(collection = []) {
  return collection.map((prompt) => normalizePrompt(prompt));
}
