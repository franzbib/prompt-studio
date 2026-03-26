export * from "./meta.js";
export * from "./supplemental.js";
export { prompts } from "./prompts.js";

import { prompts } from "./prompts.js";
import { dailyChallenges } from "./supplemental.js";
import { validatePromptCatalog } from "./validators.js";

if (import.meta.env.DEV) {
  validatePromptCatalog({ prompts, dailyChallenges });
}
