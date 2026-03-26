import { LEVEL_COLORS, LEVELS, dailyChallenges, prompts } from "../data/prompts.js";
import { CHALLENGE_TYPE_ZH_LABELS, LEVEL_ZH_LABELS } from "../config/chineseSupport.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { PromptCard } from "../components/prompts/PromptCard.jsx";
import { LevelBadge } from "../components/ui/LevelBadge.jsx";

function challengeIcon(type) {
  if (type === "grammaire") return "⚙️";
  if (type === "vocabulaire") return "📖";
  if (type === "production_ecrite") return "✍️";
  return "📝";
}

export function DailyChallenge({ favorites, settings }) {
  const todayKey = new Date().toDateString();
  const [level, setLevel] = useLocalStorage("fle_daily_level", "B1");
  const [completed, setCompleted] = useLocalStorage("fle_daily_done", {});

  const levelChallenges = dailyChallenges.filter((challenge) => challenge.level === level);
  const dayIndex = Math.floor(Date.now() / 86400000);
  const todayChallenge = levelChallenges[dayIndex % levelChallenges.length] || dailyChallenges[0];
  const isDone = !!completed[todayKey];
  const suggestedPrompt = prompts.find((prompt) => prompt.id === todayChallenge.promptSuggestion);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Défi du jour</h2>
        <p className="text-slate-500 text-sm">Un défi quotidien adapté à ton niveau</p>
        {settings.s.showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">每日挑战 · 先选等级，再完成今天的练习</p>
        )}
      </div>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🈶</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Aide rapide pour le défi du jour</h3>
              <p className="text-xs text-slate-500">中文使用提示</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">Choisir le niveau</span>
              <span className="block mt-0.5">先选择你的 CECRL 等级，例如 A2、B1 或 B2。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">Faire le défi</span>
              <span className="block mt-0.5">阅读任务说明，先自己完成，再用下面推荐的提示词练习。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">Valider</span>
              <span className="block mt-0.5">完成后点击按钮打卡，明天会自动轮换新的挑战。</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-sm text-slate-500 font-medium self-center">Mon niveau :</span>
        {LEVELS.map((value) => {
          const colors = LEVEL_COLORS[value];

          return (
            <button
              key={value}
              onClick={() => setLevel(value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${level === value ? `${colors.bg} ${colors.text} ${colors.border}` : "bg-white border-slate-200 text-slate-500"}`}
            >
              {settings.s.showChineseLabels ? `${value} · ${LEVEL_ZH_LABELS[value]}` : value}
            </button>
          );
        })}
      </div>

      <div className={`rounded-2xl p-6 mb-6 ${isDone ? "bg-emerald-50 border-2 border-emerald-200" : "bg-gradient-to-br from-blue-600 to-blue-700 text-white"}`}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <LevelBadge level={todayChallenge.level} size="md" showChineseLabel={settings.s.showChineseLabels} />
            <h3 className={`text-xl font-bold mt-2 ${isDone ? "text-emerald-800" : ""}`}>
              {todayChallenge.title}
            </h3>
            {settings.s.showChineseLabels && (
              <p className={`text-xs mt-1 ${isDone ? "text-emerald-600" : "text-blue-100"}`}>
                类型：{CHALLENGE_TYPE_ZH_LABELS[todayChallenge.type] || todayChallenge.type}
              </p>
            )}
          </div>
          <span className={`text-3xl ${isDone ? "" : "opacity-80"}`}>{challengeIcon(todayChallenge.type)}</span>
        </div>

        <p className={`leading-relaxed mb-4 ${isDone ? "text-emerald-700" : "text-blue-100"}`}>
          {todayChallenge.challenge}
        </p>

        {todayChallenge.tip && (
          <div className={`rounded-xl p-3 text-sm mb-4 ${isDone ? "bg-emerald-100 text-emerald-700" : "bg-white/10 text-blue-100"}`}>
            💡 <strong>{settings.s.showChineseLabels ? "Conseil · 提示：" : "Conseil :"}</strong> {todayChallenge.tip}
          </div>
        )}

        <button
          onClick={() => setCompleted((previous) => ({ ...previous, [todayKey]: !isDone }))}
          className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${isDone ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-white text-blue-700 hover:bg-blue-50"}`}
        >
          {isDone
            ? (settings.s.showChineseLabels ? "✓ Défi accompli ! Recommencer ? · 已完成，重新开始？" : "✓ Défi accompli ! Recommencer ?")
            : (settings.s.showChineseLabels ? "Marquer comme accompli ✓ · 标记为已完成" : "Marquer comme accompli ✓")}
        </button>
      </div>

      {suggestedPrompt && (
        <div>
          <h3 className="font-bold text-slate-700 mb-3">Prompt suggéré pour ce défi</h3>
          <PromptCard
            prompt={suggestedPrompt}
            isFav={favorites.is(suggestedPrompt.id)}
            onToggleFav={favorites.toggle}
            compact={false}
            showChineseLabels={settings.s.showChineseLabels}
          />
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-bold text-slate-700 mb-3">Tous les défis ({level})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {levelChallenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <LevelBadge level={challenge.level} showChineseLabel={settings.s.showChineseLabels} />
                <span className="text-xs text-slate-400 capitalize">
                  {settings.s.showChineseLabels
                    ? `${challenge.type.replaceAll("_", " ")} · ${CHALLENGE_TYPE_ZH_LABELS[challenge.type] || challenge.type}`
                    : challenge.type.replaceAll("_", " ")}
                </span>
              </div>
              <p className="font-medium text-sm text-slate-700">{challenge.title}</p>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">{challenge.challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
