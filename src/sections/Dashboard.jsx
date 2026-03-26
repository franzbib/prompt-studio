import { NAV_ITEMS } from "../config/navigation.js";
import { LEVEL_ZH_LABELS } from "../config/chineseSupport.js";
import { LEVEL_COLORS, LEVELS, dailyChallenges, prompts } from "../data/prompts.js";
import { PromptCard } from "../components/prompts/PromptCard.jsx";

export function Dashboard({ onNavigate, favorites, settings }) {
  const levelCounts = LEVELS.reduce((accumulator, level) => {
    accumulator[level] = prompts.filter((prompt) => prompt.level === level).length;
    return accumulator;
  }, {});
  const todayChallenge = dailyChallenges[Math.floor(Date.now() / 86400000) % dailyChallenges.length];
  const featuredPrompts = prompts.filter((prompt) => prompt.featured).slice(0, 6);
  const quickAccess = [
    { id: "library", icon: "📚", title: "Bibliothèque", subtitle: "提示库", text: `${prompts.length} prompts pédagogiques A1→C1` },
    { id: "tools", icon: "🔧", title: "Boîte à outils", subtitle: "工具", text: "Anki, Checklist, Prompt Builder..." },
    { id: "challenge", icon: "🎯", title: "Défi du jour", subtitle: "每日挑战", text: todayChallenge.title },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Bonjour ! 👋</h1>
        <p className="text-slate-500">Votre assistant FLE · {prompts.length} prompts disponibles</p>
      </div>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🧭</span>
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

      <div className="grid grid-cols-5 gap-2 mb-6">
        {LEVELS.map((level) => {
          const colors = LEVEL_COLORS[level];

          return (
            <button
              key={level}
              onClick={() => onNavigate("library")}
              className={`${colors.bg} ${colors.border} border rounded-xl p-3 text-center hover:shadow-md transition-all`}
            >
              <p className={`font-bold text-lg ${colors.text}`}>{level}</p>
              {settings.s.showChineseLabels && (
                <p className="text-[10px] text-slate-500 mt-0.5">{LEVEL_ZH_LABELS[level]}</p>
              )}
              <p className="text-xs text-slate-500 mt-0.5">{levelCounts[level]} prompts</p>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {quickAccess.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-left hover:shadow-md hover:border-blue-200 transition-all"
          >
            <span className="text-3xl mb-2 block">{item.icon}</span>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            {settings.s.showChineseLabels && (
              <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
            )}
            <p className="text-sm text-slate-500 mt-1">{item.text}</p>
          </button>
        ))}
      </div>

      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-bold text-slate-700">★ Prompts coups de cœur</h2>
        <button onClick={() => onNavigate("library")} className="text-sm text-blue-600 hover:underline">
          Voir tout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featuredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            isFav={favorites.is(prompt.id)}
            onToggleFav={favorites.toggle}
            compact={false}
            showChineseLabels={settings.s.showChineseLabels}
          />
        ))}
      </div>
    </div>
  );
}
