import { LEVEL_COLORS, LEVELS, prompts } from "../data/prompts.js";

export function Settings({ settings }) {
  const { s, update } = settings;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Paramètres</h2>
        <p className="text-slate-500 text-sm">Personnalise ton expérience FLE Prompt Studio</p>
      </div>

      <div className="space-y-4 max-w-lg">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="font-bold text-slate-700 mb-4">Mon profil d'apprentissage</h3>
          <div className="mb-4">
            <label className="text-sm font-semibold text-slate-600 mb-2 block">Niveau CECRL global</label>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => update("globalLevel", "")}
                className={`px-3 py-1.5 rounded-lg text-xs border transition-all ${!s.globalLevel ? "bg-slate-700 text-white border-slate-700" : "bg-white border-slate-200 text-slate-500"}`}
              >
                Tous
              </button>

              {LEVELS.map((level) => {
                const colors = LEVEL_COLORS[level];

                return (
                  <button
                    key={level}
                    onClick={() => update("globalLevel", level)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${s.globalLevel === level ? `${colors.bg} ${colors.text} ${colors.border}` : "bg-white border-slate-200 text-slate-500"}`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>

            {s.globalLevel && (
              <p className="text-xs text-slate-400 mt-1">
                Filtre automatique sur la bibliothèque activé pour {s.globalLevel}
              </p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="font-bold text-slate-700 mb-4">Affichage</h3>
          <div className="space-y-3">
            {[
              { key: "compactView", label: "Vue compacte", desc: "Réduire les tags et détails sur les cartes" },
              { key: "showTips", label: "Afficher les conseils", desc: "Afficher les bulles d'aide contextuelle" },
              { key: "showChineseLabels", label: "Aide de navigation en chinois", desc: "Affiche les repères chinois sous les onglets et accès clés" },
            ].map((option) => (
              <label key={option.key} className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="font-medium text-sm text-slate-700">{option.label}</p>
                  <p className="text-xs text-slate-400">{option.desc}</p>
                </div>
                <div
                  onClick={() => update(option.key, !s[option.key])}
                  className={`w-11 h-6 rounded-full transition-colors ${s[option.key] ? "bg-blue-600" : "bg-slate-200"} relative cursor-pointer`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${s[option.key] ? "translate-x-6" : "translate-x-1"}`}
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <h3 className="font-bold text-slate-700 mb-2">À propos</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            FLE Prompt Studio est une application d'aide à l'apprentissage du français langue étrangère.
            Elle propose une bibliothèque de prompts pédagogiques basée sur le cadre CECRL,
            des outils d'apprentissage et un guide méthodologique.
          </p>
          <div className="mt-3 flex gap-2 flex-wrap text-xs text-slate-400">
            <span>Version 1.0</span>
            <span>·</span>
            <span>{prompts.length} prompts</span>
            <span>·</span>
            <span>Niveaux A1-C1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
