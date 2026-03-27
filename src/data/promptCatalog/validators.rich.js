import { LEVELS } from "./meta.js";
import {
  OPTIONAL_LOCALIZED_PROMPT_FIELDS,
  RICH_PROMPT_ENUM_SETS,
  RICH_PROMPT_FIELDS,
} from "./schema.js";

const allowedLevels = new Set(LEVELS);

function warn(message, details) {
  console.warn(`[promptCatalog.rich] ${message}`, details);
}

function buildSearchText(prompt) {
  return [prompt.promptText, prompt.objective, prompt.caution]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasWaitForLearnerSignal(prompt) {
  const haystack = buildSearchText(prompt);
  return [
    "attends ma reponse",
    "attendez ma reponse",
    "attends la reponse",
    "attendez la reponse",
    "je vais taper mon monologue",
  ].some((snippet) => haystack.includes(snippet));
}

function hasSupportLanguageSignal(prompt) {
  const haystack = buildSearchText(prompt);
  const placeholders = Array.isArray(prompt.placeholders) ? prompt.placeholders : [];

  return (
    placeholders.some((placeholder) => placeholder.includes("LANGUE")) ||
    ["langue maternelle", "traduction en", "langue_aide", "langue_maternelle"].some((snippet) =>
      haystack.includes(snippet),
    )
  );
}

function hasLevelParameter(prompt) {
  const placeholders = Array.isArray(prompt.placeholders) ? prompt.placeholders : [];
  return placeholders.some((placeholder) => placeholder.includes("NIVEAU_CECRL"));
}

function validateRichFields(prompt) {
  RICH_PROMPT_FIELDS.forEach((field) => {
    if (!(field in prompt)) {
      warn(`Missing rich field "${field}" on prompt "${prompt.id}"`, prompt);
      return;
    }

    if (field === "multiLevel") {
      if (typeof prompt.multiLevel !== "boolean") {
        warn(`Field "multiLevel" must be a boolean on prompt "${prompt.id}"`, prompt);
      }
      return;
    }

    const allowedValues = RICH_PROMPT_ENUM_SETS[field];
    if (allowedValues && !allowedValues.has(prompt[field])) {
      warn(`Unknown rich value "${prompt[field]}" for field "${field}" on prompt "${prompt.id}"`, prompt);
    }
  });
}

function validateOptionalLocalizedFields(prompt) {
  OPTIONAL_LOCALIZED_PROMPT_FIELDS.forEach((field) => {
    if (!(field in prompt) || prompt[field] == null) {
      return;
    }

    if (typeof prompt[field] !== "string" || prompt[field].trim().length === 0) {
      warn(`Optional localized field "${field}" must be a non-empty string on prompt "${prompt.id}"`, prompt);
    }
  });
}

function validateRichCoherence(prompt) {
  if (!allowedLevels.has(prompt.level)) {
    return;
  }

  if (["A1", "A2"].includes(prompt.level) && prompt.guidanceLevel === "faible") {
    warn(`Low guidance on an early-level prompt "${prompt.id}"`, prompt);
  }

  if (prompt.interactionMode === "socratic" && prompt.correctionMode !== "socratique") {
    warn(`Socratic prompt "${prompt.id}" should usually use correctionMode "socratique"`, prompt);
  }

  if (["multi_turn", "simulation", "socratic", "revision_loop"].includes(prompt.interactionMode) && !hasWaitForLearnerSignal(prompt)) {
    warn(`Interactive prompt "${prompt.id}" has no explicit wait-for-learner signal`, prompt);
  }

  if (prompt.supportLanguage !== "none" && !hasSupportLanguageSignal(prompt)) {
    warn(`Prompt "${prompt.id}" declares supportLanguage without a visible language cue`, prompt);
  }

  if (prompt.multiLevel && !hasLevelParameter(prompt)) {
    warn(`Prompt "${prompt.id}" is marked multiLevel without a level placeholder`, prompt);
  }

  if (["correction", "revision", "socratique"].includes(prompt.pedagogicalFunction) && prompt.antiSubstitutionPolicy === "none") {
    warn(`Prompt "${prompt.id}" should usually declare anti-substitution guardrails`, prompt);
  }
}

export function validateRichPromptCatalog({ prompts }) {
  prompts.forEach((prompt) => {
    validateRichFields(prompt);
    validateOptionalLocalizedFields(prompt);
    validateRichCoherence(prompt);
  });
}
