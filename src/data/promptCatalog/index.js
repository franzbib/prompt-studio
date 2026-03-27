export * from "./meta.js";
export * from "./schema.js";
export * from "./adapters.js";
export * from "./supplemental.js";
export { prompts, rawPrompts } from "./prompts.js";

import { prompts } from "./prompts.js";
import { dailyChallenges } from "./supplemental.js";
import { validatePromptCatalog } from "./validators.js";
import { validateRichPromptCatalog } from "./validators.rich.js";

if (import.meta.env.DEV) {
  validatePromptCatalog({ prompts, dailyChallenges });
  validateRichPromptCatalog({ prompts, dailyChallenges });
}
