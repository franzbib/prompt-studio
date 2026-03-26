import { useLocalStorage } from "./useLocalStorage.js";

const DEFAULT_SETTINGS = {
  globalLevel: "",
  showTips: true,
  compactView: false,
  showChineseLabels: true,
};

export function useSettings() {
  const [s, set] = useLocalStorage("fle_settings", DEFAULT_SETTINGS);
  const mergedSettings = { ...DEFAULT_SETTINGS, ...s };

  return {
    s: mergedSettings,
    update: (key, value) => set((previous) => ({ ...previous, [key]: value })),
  };
}
