import { useState } from "react";
import { LEVEL_COLORS, SKILLS } from "../../data/prompts.js";
import { LEVEL_ZH_LABELS, SKILL_ZH_LABELS } from "../../config/chineseSupport.js";
import {
  getRichLabel,
  RICH_ACTIVITY_LABELS,
  RICH_ANTI_SUBSTITUTION_LABELS,
  RICH_CORRECTION_MODE_LABELS,
  RICH_GUIDANCE_LEVEL_LABELS,
  RICH_PEDAGOGICAL_FUNCTION_LABELS,
  RICH_REWRITE_POLICY_LABELS,
  RICH_SUPPORT_LANGUAGE_LABELS,
} from "../../config/richPromptLabels.js";
import { copyText } from "../../lib/clipboard.js";
import { DifficultyDots } from "../ui/DifficultyDots.jsx";
import { LevelBadge } from "../ui/LevelBadge.jsx";

export function PromptCard({
  prompt,
  isFav = false,
  onToggleFav,
  compact = false,
  showFavoriteButton = true,
  showChineseLabels = false,
}) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const levelColors = LEVEL_COLORS[prompt.level] || {};
  const skillInfo = SKILLS.find((skill) => skill.id === prompt.skill) || {
    icon: "📄",
    label: prompt.skill,
  };
  const skillZhLabel = SKILL_ZH_LABELS[prompt.skill];
  const activityLabel = getRichLabel(RICH_ACTIVITY_LABELS, prompt.cefrActivityPrimary);
  const pedagogicalFunctionLabel = getRichLabel(
    RICH_PEDAGOGICAL_FUNCTION_LABELS,
    prompt.pedagogicalFunction,
  );
  const richDetails = [
    {
      key: "guidanceLevel",
      label: "Guidage",
      value: getRichLabel(RICH_GUIDANCE_LEVEL_LABELS, prompt.guidanceLevel),
    },
    {
      key: "correctionMode",
      label: "Correction",
      value: getRichLabel(RICH_CORRECTION_MODE_LABELS, prompt.correctionMode),
    },
    {
      key: "rewritePolicy",
      label: "Réécriture",
      value: getRichLabel(RICH_REWRITE_POLICY_LABELS, prompt.rewritePolicy),
    },
    {
      key: "antiSubstitutionPolicy",
      label: "Anti-substitution",
      value: getRichLabel(RICH_ANTI_SUBSTITUTION_LABELS, prompt.antiSubstitutionPolicy),
    },
    {
      key: "supportLanguage",
      label: "Langue d'appui",
      value: getRichLabel(RICH_SUPPORT_LANGUAGE_LABELS, prompt.supportLanguage),
    },
  ].filter((detail) => detail.value);

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${expanded ? "ring-2 ring-blue-100" : ""}`}
      style={{ borderTop: `3px solid ${levelColors.accent}` }}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <LevelBadge level={prompt.level} showChineseLabel={showChineseLabels} />
            <span className="text-xs text-slate-500 font-medium">
              {skillInfo.icon} {skillInfo.label}
            </span>
            {showChineseLabels && skillZhLabel && (
              <span className="text-[11px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                {skillZhLabel}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <DifficultyDots value={prompt.difficulty} />
            {showFavoriteButton && (
              <button
                onClick={() => onToggleFav?.(prompt.id)}
                className={`text-lg transition-transform hover:scale-110 ${isFav ? "text-amber-400" : "text-slate-200 hover:text-amber-300"}`}
                title={showChineseLabels ? (isFav ? "Retirer des favoris · 取消收藏" : "Ajouter aux favoris · 加入收藏") : (isFav ? "Retirer des favoris" : "Ajouter aux favoris")}
              >
                ★
              </button>
            )}
          </div>
        </div>

        <h3 className="font-semibold text-slate-800 text-sm leading-tight mb-1">{prompt.title}</h3>
        {showChineseLabels && prompt.titleZh && (
          <p className="text-[11px] text-slate-400 mb-1 leading-snug">{prompt.titleZh}</p>
        )}
        {showChineseLabels && (
          <p className="text-[11px] text-slate-400 mb-1">Objectif d'apprentissage · 学习目标</p>
        )}
        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{prompt.objective}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[11px] bg-sky-50 text-sky-700 px-2 py-1 rounded-full font-medium">
            {activityLabel}
          </span>
          <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
            {pedagogicalFunctionLabel}
          </span>
        </div>

        {!compact && (
          <div className="flex flex-wrap gap-1 mb-3">
            {prompt.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{showChineseLabels ? `⏱ ${prompt.duration} · 用时` : `⏱ ${prompt.duration}`}</span>
            {prompt.aiToolCompatibility[0] !== "any" && (
              <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded">
                {prompt.aiToolCompatibility.join(", ")}
              </span>
            )}
          </div>

          <button
            onClick={() => setExpanded((current) => !current)}
            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
          >
            {expanded
              ? (showChineseLabels ? "Réduire ↑ · 收起" : "Réduire ↑")
              : (showChineseLabels ? "Voir le prompt ↓ · 查看提示词" : "Voir le prompt ↓")}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-slate-100 p-4 bg-slate-50">
          <div className="mb-3">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Repères pédagogiques
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {richDetails.map((detail) => (
                <div key={detail.key} className="bg-white rounded-xl border border-slate-100 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">{detail.label}</p>
                  <p className="text-xs text-slate-700 font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            {showChineseLabels ? "Prompt · 提示词" : "Prompt"}
          </p>
          <div className="relative">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans bg-white rounded-xl p-3 border border-slate-100 leading-relaxed">
              {prompt.promptText}
            </pre>

            {prompt.placeholders.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="text-xs text-slate-400">
                  {showChineseLabels ? "Remplacer · 替换：" : "Remplacer :"}
                </span>
                {showChineseLabels && (
                  <span className="text-xs text-slate-400">
                    方括号里的内容要换成你自己的信息
                  </span>
                )}
                {prompt.placeholders.map((placeholder) => (
                  <span
                    key={placeholder}
                    className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-mono"
                  >
                    {placeholder}
                  </span>
                ))}
              </div>
            )}
          </div>

          {prompt.caution && (
            <div className="mt-2 bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs text-amber-700">
              {showChineseLabels ? "⚠️ Attention · 注意：" : "⚠️ "}
              {prompt.caution}
            </div>
          )}

          {prompt.exampleOutput && (
            <div className="mt-2 bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-xs text-emerald-700">
              {showChineseLabels ? "💡 Exemple · 示例：" : "💡 Exemple :"} {prompt.exampleOutput}
            </div>
          )}

          {showChineseLabels && (
            <div className="mt-3 space-y-2">
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-[11px] text-slate-600">
                Niveau CECRL：{prompt.level} = {LEVEL_ZH_LABELS[prompt.level]}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-[11px] text-blue-700">
                使用方法：先复制提示词，再粘贴到 ChatGPT / Claude / Perplexity，然后替换方括号里的内容。
              </div>
            </div>
          )}

          <button
            onClick={() => copyText(prompt.promptText, setCopied)}
            className={`mt-3 w-full py-2 rounded-xl text-sm font-semibold transition-all ${copied ? "bg-emerald-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            {copied
              ? (showChineseLabels ? "✓ Copié ! · 已复制" : "✓ Copié !")
              : (showChineseLabels ? "📋 Copier le prompt · 复制提示词" : "📋 Copier le prompt")}
          </button>
        </div>
      )}
    </div>
  );
}
