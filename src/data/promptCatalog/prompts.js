import { a1Prompts } from "./levels/a1.js";
import { a2Prompts } from "./levels/a2.js";
import { b1Prompts } from "./levels/b1.js";
import { b2Prompts } from "./levels/b2.js";
import { c1Prompts } from "./levels/c1.js";
import { transversalPrompts } from "./levels/transversal.js";
import { normalizePromptCollection } from "./adapters.js";

export const rawPrompts = [
  ...a1Prompts,
  ...a2Prompts,
  ...b1Prompts,
  ...b2Prompts,
  ...c1Prompts,
  ...transversalPrompts,
];

export const prompts = normalizePromptCollection(rawPrompts);
