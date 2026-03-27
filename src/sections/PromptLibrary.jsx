import { useMemo, useState } from "react";
import {
  AI_TOOLS,
  CONTEXTS,
  LEVEL_COLORS,
  LEVELS,
  PROMPT_TYPES,
  SKILLS,
  prompts,
} from "../data/prompts.js";
import { LEVEL_ZH_LABELS, SKILL_ZH_LABELS } from "../config/chineseSupport.js";
import {
  getRichLabel,
  RICH_ACTIVITY_LABELS,
  RICH_ANTI_SUBSTITUTION_LABELS,
  RICH_GUIDANCE_LEVEL_LABELS,
  RICH_PEDAGOGICAL_FUNCTION_LABELS,
} from "../config/richPromptLabels.js";
import { usePromptFilters } from "../hooks/usePromptFilters.js";
import { PromptCard } from "../components/prompts/PromptCard.jsx";

const CONTEXT_LABELS = {
  vie_quotidienne: "Vie quotidienne",
  academique: "Académique",
  professionnel: "Professionnel",
  examen: "Examen",
};

const CONTEXT_ZH_LABELS = {
  vie_quotidienne: "日常生活",
  academique: "学术",
  professionnel: "职场",
  examen: "考试",
};

const AI_TOOL_LABELS = {
  chatgpt: "ChatGPT",
  claude: "Claude",
  perplexity: "Perplexity",
};

const AI_TOOL_ZH_LABELS = {
  chatgpt: "适合 ChatGPT",
  claude: "适合 Claude",
  perplexity: "适合 Perplexity",
};

const TYPE_ZH_LABELS = {
  tuteur: "导师",
  correction: "纠错",
  reformulation: "改写",
  dialogue_guide: "对话引导",
  expansion_vocab: "词汇扩展",
  flashcards: "闪卡",
  dictee: "听写",
  coaching_prononciation: "发音训练",
  roleplay: "角色扮演",
  socratique: "苏格拉底提问",
  simulation_examen: "考试模拟",
  email: "邮件写作",
  presentation_orale: "口头表达",
  synthese: "总结",
  comparaison_sources: "来源比较",
  survie_universitaire: "大学学习",
};

const PEDAGOGICAL_FAMILY_LABELS = {
  simulation_socratique: "Simulation / Socratique",
};

const LEVEL_ENTRY_COPY = {
  A1: {
    label: "Entrer dans les bases",
    zh: "从法语基础起步",
  },
  A2: {
    label: "Gagner en autonomie",
    zh: "开始更独立地表达",
  },
  B1: {
    label: "Prendre confiance",
    zh: "更自信地表达和组织",
  },
  B2: {
    label: "Structurer et nuancer",
    zh: "让表达更有层次和分寸",
  },
  C1: {
    label: "Affiner et maîtriser",
    zh: "提升精度与掌控力",
  },
};

function formatTypeLabel(type) {
  return type.replaceAll("_", " ");
}

function formatRichLabel(labelMap, value) {
  return getRichLabel(labelMap, value);
}

function hexToRgba(hex, alpha) {
  if (!hex) {
    return `rgba(15, 23, 42, ${alpha})`;
  }

  const normalizedHex = hex.replace("#", "");
  const hexValue =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((character) => character + character)
          .join("")
      : normalizedHex;

  const intValue = Number.parseInt(hexValue, 16);
  const red = (intValue >> 16) & 255;
  const green = (intValue >> 8) & 255;
  const blue = intValue & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function formatPromptCount(count) {
  return `${count} prompt${count > 1 ? "s" : ""}`;
}

export function PromptLibrary({ favorites, settings, initialFilters = null }) {
  const filters = usePromptFilters(initialFilters || { level: settings.s.globalLevel || "" });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const isAdvancedFiltersOpen = showAdvancedFilters || filters.hasAdvancedFilters;
  const levelCounts = useMemo(
    () =>
      prompts.reduce((counts, prompt) => {
        counts[prompt.level] = (counts[prompt.level] || 0) + 1;
        return counts;
      }, {}),
    [],
  );
  const selectedLevelColors = filters.selectedLevel ? LEVEL_COLORS[filters.selectedLevel] : null;

  const handleAdvancedFiltersToggle = (event) => {
    if (!filters.hasAdvancedFilters) {
      setShowAdvancedFilters(event.currentTarget.open);
    }
  };

  const handleResetFilters = () => {
    filters.resetFilters();
    setShowAdvancedFilters(false);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Bibliothèque de prompts</h2>
        <p className="text-slate-500 text-sm">
          {filters.totalCount} prompts pédagogiques · Niveaux A1 à C1
        </p>
        {settings.s.showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">提示库 · 可按等级、活动类型、教学目标和引导程度筛选</p>
        )}
      </div>

      <section
        className="rounded-[28px] border shadow-sm p-5 mb-5"
        style={{
          borderColor: selectedLevelColors
            ? hexToRgba(selectedLevelColors.accent, 0.22)
            : "rgba(226, 232, 240, 0.95)",
          background: selectedLevelColors
            ? `linear-gradient(135deg, rgba(255,255,255,0.96), ${hexToRgba(selectedLevelColors.light, 0.96)} 55%, rgba(248,250,252,0.94))`
            : "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96) 58%, rgba(241,245,249,0.92))",
          boxShadow: selectedLevelColors
            ? `0 22px 40px -30px ${hexToRgba(selectedLevelColors.accent, 0.45)}`
            : "0 18px 36px -32px rgba(15, 23, 42, 0.28)",
        }}
      >
        <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
              Choisissez votre niveau
            </p>
            <h3 className="text-lg font-semibold text-slate-900 leading-tight">
              Les niveaux CECRL sont la porte d&apos;entrée principale de la bibliothèque.
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Commencez par votre niveau, puis affinez avec les filtres pédagogiques.
            </p>
            {settings.s.showChineseLabels && (
              <p className="text-xs text-slate-400 mt-1.5">
                先选等级，再用活动、目标和引导程度细化筛选。
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.selectedLevel && (
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium text-slate-700"
                style={{
                  backgroundColor: hexToRgba(selectedLevelColors?.light, 0.9),
                  borderColor: hexToRgba(selectedLevelColors?.accent, 0.22),
                }}
              >
                Niveau actif · {filters.selectedLevel}
              </span>
            )}
            <span className="text-[11px] text-slate-500">
              Cliquez à nouveau pour revenir à tous les niveaux.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
          {LEVELS.map((level) => {
            const colors = LEVEL_COLORS[level];
            const isActive = filters.selectedLevel === level;
            const levelCopy = LEVEL_ENTRY_COPY[level];

            return (
              <button
                key={level}
                type="button"
                aria-pressed={isActive}
                onClick={() => filters.setSelectedLevel(isActive ? "" : level)}
                className="group relative overflow-hidden rounded-[24px] border px-4 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
                style={{
                  borderColor: isActive
                    ? hexToRgba(colors.accent, 0.34)
                    : hexToRgba(colors.accent, 0.12),
                  background: isActive
                    ? `linear-gradient(140deg, rgba(255,255,255,0.98), ${hexToRgba(colors.light, 0.98)} 52%, ${hexToRgba(colors.accent, 0.18)})`
                    : `linear-gradient(180deg, ${hexToRgba(colors.light, 0.52)}, rgba(255,255,255,0.96))`,
                  boxShadow: isActive
                    ? `0 22px 34px -26px ${hexToRgba(colors.accent, 0.6)}`
                    : `0 18px 28px -28px ${hexToRgba(colors.accent, 0.45)}`,
                }}
              >
                <span
                  className="absolute inset-x-4 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${hexToRgba(colors.accent, isActive ? 0.9 : 0.55)}, transparent)`,
                  }}
                />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-[0.18em] font-semibold"
                      style={{ color: isActive ? colors.accent : hexToRgba(colors.accent, 0.82) }}
                    >
                      Niveau
                    </p>
                    <p className="text-[1.7rem] font-semibold text-slate-900 leading-none mt-2">{level}</p>
                  </div>

                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      color: colors.accent,
                      backgroundColor: isActive
                        ? hexToRgba(colors.accent, 0.14)
                        : "rgba(255,255,255,0.78)",
                    }}
                  >
                    {settings.s.showChineseLabels ? LEVEL_ZH_LABELS[level] : "CECRL"}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-800 leading-snug">{levelCopy.label}</p>
                  {settings.s.showChineseLabels && (
                    <p className="text-[11px] text-slate-500 leading-snug">{levelCopy.zh}</p>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 text-[11px]">
                  <span className="text-slate-500">{formatPromptCount(levelCounts[level] || 0)}</span>
                  <span
                    className="font-medium"
                    style={{ color: isActive ? colors.accent : "rgb(100 116 139)" }}
                  >
                    {isActive ? "Sélectionné" : "Explorer"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">指南</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Aide rapide pour les filtres</h3>
              <p className="text-xs text-slate-500">中文使用提示</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">1. Recherche</span>
              <span className="block mt-0.5">搜索关键词，例如语法点、主题、活动类型或教学目标。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">2. Filtres</span>
              <span className="block mt-0.5">先用等级、活动、目标和引导程度筛选，再按需要打开高级筛选。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">3. Action</span>
              <span className="block mt-0.5">打开卡片后复制提示词到 ChatGPT、Claude 或 Perplexity。</span>
            </div>
          </div>
        </div>
      )}

      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        <input
          className="w-full pl-9 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
          placeholder="Rechercher un prompt, une activité, une finalité, un point de grammaire..."
          value={filters.search}
          onChange={(event) => filters.setSearch(event.target.value)}
        />
        {filters.search && (
          <button
            onClick={() => filters.setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        )}
      </div>

      {settings.s.showChineseLabels && (
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { fr: "Niveau", zh: "等级" },
            { fr: "Activité", zh: "活动类型" },
            { fr: "Finalité", zh: "教学目标" },
            { fr: "Guidage", zh: "引导程度" },
            { fr: "Avancé", zh: "高级筛选" },
          ].map((item) => (
            <span key={item.fr} className="text-[11px] bg-slate-50 text-slate-500 border border-slate-100 rounded-full px-2.5 py-1">
              {item.fr} · {item.zh}
            </span>
          ))}
        </div>
      )}

      <div className="bg-white/95 rounded-[24px] border border-slate-100 shadow-sm p-4 mb-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
              Affiner ensuite
            </p>
            <p className="text-[11px] text-slate-500 mb-3">
              Activité, finalité et guidage pour préciser votre sélection sans alourdir l'exploration.
            </p>
            {filters.selectedPedagogicalFamily && !filters.selectedPedagogicalFunction && (
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-2.5 py-1 text-[11px] font-medium">
                  Parcours dashboard · {PEDAGOGICAL_FAMILY_LABELS[filters.selectedPedagogicalFamily] || filters.selectedPedagogicalFamily}
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <select
                value={filters.selectedActivity}
                onChange={(event) => filters.setSelectedActivity(event.target.value)}
                className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Toutes les activités</option>
                {filters.availableActivities.map((activity) => (
                  <option key={activity} value={activity}>
                    {formatRichLabel(RICH_ACTIVITY_LABELS, activity)}
                  </option>
                ))}
              </select>

              <select
                value={filters.selectedPedagogicalFunction}
                onChange={(event) => filters.setSelectedPedagogicalFunction(event.target.value)}
                className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Toutes les finalités</option>
                {filters.availablePedagogicalFunctions.map((pedagogicalFunction) => (
                  <option key={pedagogicalFunction} value={pedagogicalFunction}>
                    {formatRichLabel(RICH_PEDAGOGICAL_FUNCTION_LABELS, pedagogicalFunction)}
                  </option>
                ))}
              </select>

              <select
                value={filters.selectedGuidanceLevel}
                onChange={(event) => filters.setSelectedGuidanceLevel(event.target.value)}
                className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Tous les guidages</option>
                {filters.availableGuidanceLevels.map((guidanceLevel) => (
                  <option key={guidanceLevel} value={guidanceLevel}>
                    {formatRichLabel(RICH_GUIDANCE_LEVEL_LABELS, guidanceLevel)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <details
            open={isAdvancedFiltersOpen}
            onToggle={handleAdvancedFiltersToggle}
            className="group rounded-xl border border-slate-100 bg-slate-50/70"
          >
            <summary className="list-none cursor-pointer px-3 py-2.5 flex items-center justify-between text-sm text-slate-600">
              <span className="font-medium">
                Filtres avancés
                {filters.hasAdvancedFilters && (
                  <span className="ml-2 text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    actifs
                  </span>
                )}
              </span>
              <span className="text-slate-400 transition group-open:rotate-180">↓</span>
            </summary>

            <div className="px-3 pb-3">
              <p className="text-[11px] text-slate-500 mb-2">
                Compétence, contexte, format, garde-fous d'usage et favoris.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                <select
                  value={filters.selectedSkill}
                  onChange={(event) => filters.setSelectedSkill(event.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Toutes les compétences</option>
                  {SKILLS.map((skill) => (
                    <option key={skill.id} value={skill.id}>
                      {settings.s.showChineseLabels ? `${skill.label} · ${SKILL_ZH_LABELS[skill.id]}` : skill.label}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.selectedContext}
                  onChange={(event) => filters.setSelectedContext(event.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Tous les contextes</option>
                  {CONTEXTS.map((context) => (
                    <option key={context} value={context}>
                      {settings.s.showChineseLabels ? `${CONTEXT_LABELS[context]} · ${CONTEXT_ZH_LABELS[context]}` : CONTEXT_LABELS[context]}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.selectedAITool}
                  onChange={(event) => filters.setSelectedAITool(event.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Tous les outils IA</option>
                  {AI_TOOLS.filter((tool) => tool !== "any").map((tool) => (
                    <option key={tool} value={tool}>
                      {settings.s.showChineseLabels ? `${AI_TOOL_LABELS[tool]} · ${AI_TOOL_ZH_LABELS[tool]}` : AI_TOOL_LABELS[tool]}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.selectedType}
                  onChange={(event) => filters.setSelectedType(event.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Tous les formats</option>
                  {PROMPT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {settings.s.showChineseLabels ? `${formatTypeLabel(type)} · ${TYPE_ZH_LABELS[type]}` : formatTypeLabel(type)}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.selectedAntiSubstitutionPolicy}
                  onChange={(event) => filters.setSelectedAntiSubstitutionPolicy(event.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Tous les garde-fous</option>
                  {filters.availableAntiSubstitutionPolicies.map((policy) => (
                    <option key={policy} value={policy}>
                      {formatRichLabel(RICH_ANTI_SUBSTITUTION_LABELS, policy)}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => filters.setShowFeaturedOnly((current) => !current)}
                  className={`text-xs px-3 py-2 rounded-lg border transition-all font-medium text-left ${filters.showFeaturedOnly ? "bg-amber-100 text-amber-700 border-amber-300" : "bg-white border-slate-200 text-slate-500"}`}
                >
                  {settings.s.showChineseLabels ? "★ Coups de cœur · 精选" : "★ Coups de cœur"}
                </button>
              </div>
            </div>
          </details>

          {filters.hasActiveFilters && (
            <div className="flex justify-end">
              <button
                onClick={handleResetFilters}
                className="text-xs text-blue-600 hover:underline px-2"
              >
                {settings.s.showChineseLabels ? "Réinitialiser · 重置" : "Réinitialiser"}
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-400 mb-4">
        {filters.filtered.length} prompt{filters.filtered.length > 1 ? "s" : ""} trouvé{filters.filtered.length > 1 ? "s" : ""}
      </p>

      {filters.filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">Aucun prompt trouvé</p>
          <p className="text-sm">
            Essaie d'autres filtres ou{" "}
            <button onClick={handleResetFilters} className="text-blue-500 hover:underline">
              réinitialise la recherche
            </button>
            .
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filters.filtered.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              isFav={favorites.is(prompt.id)}
              onToggleFav={favorites.toggle}
              compact={settings.s.compactView}
              showChineseLabels={settings.s.showChineseLabels}
            />
          ))}
        </div>
      )}
    </div>
  );
}
