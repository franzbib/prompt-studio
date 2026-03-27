import { NAV_ITEMS } from "../config/navigation.js";
import { prompts } from "../data/prompts.js";

const LEVEL_ORDER = {
  A1: 0,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
};

const DASHBOARD_BLOCKS = [
  {
    id: "entrainement_guide",
    title: "Entraînement guidé",
    subtitle: "Exercices pas à pas pour construire les bases.",
    zhSubtitle: "循序渐进练习，先搭好基础。",
    accent: "bg-sky-50 border-sky-100",
    badge: "text-sky-700 bg-white border-sky-200",
    libraryFilters: { pedagogicalFunction: "entrainement_guide" },
    matches: (prompt) => prompt.pedagogicalFunction === "entrainement_guide",
  },
  {
    id: "transfert",
    title: "Transfert",
    subtitle: "Réemploi dans des tâches proches du réel.",
    zhSubtitle: "把法语真正用到接近真实的任务里。",
    accent: "bg-emerald-50 border-emerald-100",
    badge: "text-emerald-700 bg-white border-emerald-200",
    libraryFilters: { pedagogicalFunction: "transfert" },
    matches: (prompt) => prompt.pedagogicalFunction === "transfert",
  },
  {
    id: "mediation",
    title: "Médiation",
    subtitle: "Synthèse, reformulation et circulation des idées.",
    zhSubtitle: "做摘要、转述、整理和传递信息。",
    accent: "bg-amber-50 border-amber-100",
    badge: "text-amber-700 bg-white border-amber-200",
    libraryFilters: { pedagogicalFunction: "mediation" },
    matches: (prompt) => prompt.pedagogicalFunction === "mediation",
  },
  {
    id: "simulation_socratique",
    title: "Simulation / Socratique",
    subtitle: "Jouer une scène ou progresser par questions.",
    zhSubtitle: "模拟情境，或用提问一步步引导学习。",
    accent: "bg-violet-50 border-violet-100",
    badge: "text-violet-700 bg-white border-violet-200",
    libraryFilters: { pedagogicalFamily: "simulation_socratique" },
    matches: (prompt) => ["simulation", "socratique"].includes(prompt.pedagogicalFunction),
    representativeFunctions: ["simulation", "socratique"],
  },
];

function sortPromptsForDashboard(collection) {
  return [...collection].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    if (left.level !== right.level) {
      return LEVEL_ORDER[left.level] - LEVEL_ORDER[right.level];
    }

    return left.title.localeCompare(right.title, "fr");
  });
}

function pickRepresentativePrompts(collection, representativeFunctions = [], limit = 3) {
  const sorted = sortPromptsForDashboard(collection);

  if (representativeFunctions.length === 0) {
    return sorted.slice(0, limit);
  }

  const selected = [];
  const selectedIds = new Set();

  representativeFunctions.forEach((pedagogicalFunction) => {
    const match = sorted.find(
      (prompt) =>
        prompt.pedagogicalFunction === pedagogicalFunction && !selectedIds.has(prompt.id),
    );

    if (match) {
      selected.push(match);
      selectedIds.add(match.id);
    }
  });

  sorted.forEach((prompt) => {
    if (selected.length < limit && !selectedIds.has(prompt.id)) {
      selected.push(prompt);
      selectedIds.add(prompt.id);
    }
  });

  return selected;
}

function buildDashboardBlocks() {
  return DASHBOARD_BLOCKS.map((block) => {
    const matchingPrompts = prompts.filter(block.matches);

    return {
      ...block,
      count: matchingPrompts.length,
      samplePrompts: pickRepresentativePrompts(
        matchingPrompts,
        block.representativeFunctions || [],
      ),
    };
  });
}

export function Dashboard({ onNavigate, settings }) {
  const dashboardBlocks = buildDashboardBlocks();

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Explorer la bibliothèque</h1>
          <p className="text-slate-500">
            Entrez par grandes familles pédagogiques, puis ouvrez la bibliothèque avec un filtre déjà posé.
          </p>
        </div>

        <button
          onClick={() => onNavigate("library")}
          className="inline-flex items-center justify-center rounded-xl bg-slate-800 text-white text-sm font-semibold px-4 py-2 hover:bg-slate-700 transition-colors"
        >
          Voir toute la bibliothèque
        </button>
      </div>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">导航</span>
            <div>
              <h2 className="font-bold text-slate-800 text-sm">Aide de navigation en chinois</h2>
              <p className="text-xs text-slate-500">Repères rapides pour les utilisateurs sinophones</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-left bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl px-3 py-2 transition-all"
              >
                <span className="block text-xs text-slate-700 font-semibold">
                  {item.icon} {item.label}
                </span>
                <span className="block text-xs text-slate-400 mt-0.5">{item.zhLabel}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {dashboardBlocks.map((block) => (
          <section
            key={block.id}
            className={`rounded-3xl border shadow-sm p-5 ${block.accent}`}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="font-bold text-slate-800 text-lg">{block.title}</h2>
                <p className="text-sm text-slate-600 mt-1">{block.subtitle}</p>
                {settings.s.showChineseLabels && (
                  <p className="text-xs text-slate-400 mt-1">{block.zhSubtitle}</p>
                )}
              </div>

              <span className={`shrink-0 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${block.badge}`}>
                {block.count} prompts
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {block.samplePrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-white/90 border border-white rounded-2xl px-3 py-2"
                >
                  <div className="flex items-start gap-2">
                    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold px-2 py-0.5">
                      {prompt.level}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-700 leading-snug">{prompt.title}</p>
                      {settings.s.showChineseLabels && prompt.titleZh && (
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{prompt.titleZh}</p>
                      )}
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{prompt.objective}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate("library", { libraryFilters: block.libraryFilters })}
              className="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              Ouvrir dans la bibliothèque →
            </button>
          </section>
        ))}
      </div>
    </div>
  );
}
