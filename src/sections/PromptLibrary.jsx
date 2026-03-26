import {
  AI_TOOLS,
  CONTEXTS,
  LEVEL_COLORS,
  LEVELS,
  PROMPT_TYPES,
  SKILLS,
} from "../data/prompts.js";
import { LEVEL_ZH_LABELS, SKILL_ZH_LABELS } from "../config/chineseSupport.js";
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

function formatTypeLabel(type) {
  return type.replaceAll("_", " ");
}

export function PromptLibrary({ favorites, settings }) {
  const filters = usePromptFilters(settings.s.globalLevel || "");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Bibliothèque de prompts</h2>
        <p className="text-slate-500 text-sm">
          {filters.totalCount} prompts pédagogiques · Niveaux A1 à C1
        </p>
        {settings.s.showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">提示库 · 可按等级、技能、场景、模型和类型筛选</p>
        )}
      </div>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🈶</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Aide rapide pour les filtres</h3>
              <p className="text-xs text-slate-500">中文使用提示</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">1. Recherche</span>
              <span className="block mt-0.5">搜索关键词，如语法点、主题或标题。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">2. Filtres</span>
              <span className="block mt-0.5">按等级、技能、场景、AI 模型和类型筛选。</span>
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
          placeholder="Rechercher un prompt, une compétence, un point de grammaire..."
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
            { fr: "Compétence", zh: "技能" },
            { fr: "Contexte", zh: "场景" },
            { fr: "Outil IA", zh: "模型" },
            { fr: "Format", zh: "类型" },
          ].map((item) => (
            <span key={item.fr} className="text-[11px] bg-slate-50 text-slate-500 border border-slate-100 rounded-full px-2.5 py-1">
              {item.fr} · {item.zh}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex gap-1 flex-wrap">
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

        <select
          value={filters.selectedSkill}
          onChange={(event) => filters.setSelectedSkill(event.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
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
          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="">Tous les formats</option>
          {PROMPT_TYPES.map((type) => (
            <option key={type} value={type}>
              {settings.s.showChineseLabels ? `${formatTypeLabel(type)} · ${TYPE_ZH_LABELS[type]}` : formatTypeLabel(type)}
            </option>
          ))}
        </select>

        <button
          onClick={() => filters.setShowFeaturedOnly((current) => !current)}
          className={`text-xs px-3 py-1.5 rounded-lg border transition-all font-medium ${filters.showFeaturedOnly ? "bg-amber-100 text-amber-700 border-amber-300" : "bg-white border-slate-200 text-slate-500"}`}
        >
          {settings.s.showChineseLabels ? "★ Coups de cœur · 精选" : "★ Coups de cœur"}
        </button>

        {filters.hasActiveFilters && (
          <button
            onClick={filters.resetFilters}
            className="text-xs text-blue-600 hover:underline px-2"
          >
            {settings.s.showChineseLabels ? "Réinitialiser · 重置" : "Réinitialiser"}
          </button>
        )}
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
            <button onClick={filters.resetFilters} className="text-blue-500 hover:underline">
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
