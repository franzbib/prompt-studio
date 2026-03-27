import { useState } from "react";
import {
  AI_TOOLS,
  CONTEXTS,
  LEVEL_COLORS,
  LEVELS,
  PROMPT_TYPES,
  SKILLS,
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

function formatTypeLabel(type) {
  return type.replaceAll("_", " ");
}

function formatRichLabel(labelMap, value) {
  return getRichLabel(labelMap, value);
}

export function PromptLibrary({ favorites, settings, initialFilters = null }) {
  const filters = usePromptFilters(initialFilters || { level: settings.s.globalLevel || "" });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const isAdvancedFiltersOpen = showAdvancedFilters || filters.hasAdvancedFilters;

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
          className="w-full pl-9 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
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

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
              Filtres principaux
            </p>
            <p className="text-[11px] text-slate-500 mb-3">
              Niveau, activité, finalité et guidage pour trouver vite le bon prompt.
            </p>
            {filters.selectedPedagogicalFamily && !filters.selectedPedagogicalFunction && (
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-2.5 py-1 text-[11px] font-medium">
                  Parcours dashboard · {PEDAGOGICAL_FAMILY_LABELS[filters.selectedPedagogicalFamily] || filters.selectedPedagogicalFamily}
                </span>
              </div>
            )}

            <div className="flex gap-1 flex-wrap mb-3">
              {LEVELS.map((level) => {
                const colors = LEVEL_COLORS[level];

                return (
                  <button
                    key={level}
                    onClick={() => filters.setSelectedLevel(filters.selectedLevel === level ? "" : level)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${filters.selectedLevel === level ? `${colors.bg} ${colors.text} ${colors.border}` : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}
                  >
                    {settings.s.showChineseLabels ? `${level} · ${LEVEL_ZH_LABELS[level]}` : level}
                  </button>
                );
              })}
            </div>

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
