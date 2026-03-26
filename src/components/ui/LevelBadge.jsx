import { LEVEL_COLORS } from "../../data/prompts.js";
import { LEVEL_ZH_LABELS } from "../../config/chineseSupport.js";

export function LevelBadge({ level, size = "sm", showChineseLabel = false }) {
  const colors = LEVEL_COLORS[level] || {};
  const sizeClasses = size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1";
  const label = showChineseLabel && LEVEL_ZH_LABELS[level]
    ? `${level} · ${LEVEL_ZH_LABELS[level]}`
    : level;

  return (
    <span className={`${colors.bg} ${colors.text} ${colors.border} border rounded-full font-semibold ${sizeClasses}`}>
      {label}
    </span>
  );
}
