// Legacy compatibility layer.
// The prompt catalog now lives in ./promptCatalog so the app can scale
// without forcing a mass import rewrite across the codebase.

export * from "./promptCatalog/index.js";
