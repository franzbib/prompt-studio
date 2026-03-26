import { AI_TOOLS, CONTEXTS, LEVELS, PROMPT_TYPES, SKILLS } from "./meta.js";

const allowedSkills = new Set(SKILLS.map((skill) => skill.id));
const allowedLevels = new Set(LEVELS);
const allowedContexts = new Set(CONTEXTS);
const allowedTypes = new Set(PROMPT_TYPES);
const allowedAiTools = new Set(AI_TOOLS);

function warn(message, details) {
  console.warn(`[promptCatalog] ${message}`, details);
}

function validatePrompt(prompt, seenIds) {
  const requiredFields = [
    "id",
    "title",
    "level",
    "skill",
    "context",
    "objective",
    "promptText",
    "type",
  ];

  requiredFields.forEach((field) => {
    if (!prompt[field]) {
      warn(`Missing required field "${field}" on prompt`, prompt);
    }
  });

  if (seenIds.has(prompt.id)) {
    warn(`Duplicate prompt id "${prompt.id}"`, prompt);
  }
  seenIds.add(prompt.id);

  if (!allowedLevels.has(prompt.level)) {
    warn(`Unknown level "${prompt.level}"`, prompt);
  }

  if (!allowedSkills.has(prompt.skill)) {
    warn(`Unknown skill "${prompt.skill}"`, prompt);
  }

  if (!allowedContexts.has(prompt.context)) {
    warn(`Unknown context "${prompt.context}"`, prompt);
  }

  if (!allowedTypes.has(prompt.type)) {
    warn(`Unknown prompt type "${prompt.type}"`, prompt);
  }

  if (!Array.isArray(prompt.aiToolCompatibility) || prompt.aiToolCompatibility.length === 0) {
    warn(`Prompt "${prompt.id}" should declare aiToolCompatibility`, prompt);
  } else {
    prompt.aiToolCompatibility.forEach((tool) => {
      if (!allowedAiTools.has(tool)) {
        warn(`Unknown AI tool "${tool}" on prompt "${prompt.id}"`, prompt);
      }
    });
  }
}

export function validatePromptCatalog({ prompts, dailyChallenges }) {
  const seenIds = new Set();

  prompts.forEach((prompt) => validatePrompt(prompt, seenIds));

  dailyChallenges.forEach((challenge) => {
    if (!seenIds.has(challenge.promptSuggestion)) {
      warn(`Unknown promptSuggestion "${challenge.promptSuggestion}" in daily challenge "${challenge.id}"`, challenge);
    }
  });
}
