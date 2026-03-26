import { useState } from "react";
import { prompts, socraticExamples } from "../data/prompts.js";
import { PromptCard } from "../components/prompts/PromptCard.jsx";

export function SocraticTutor({ favorites, settings }) {
  const [activeExample, setActiveExample] = useState(null);
  const socraticPrompts = prompts.filter((prompt) => prompt.type === "socratique");

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Tuteur Socratique</h2>
        <p className="text-slate-500 text-sm">
          Apprendre avec l'IA sans se faire donner les réponses
        </p>
        {settings.s.showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">苏格拉底模式 · 不直接给答案，而是一步一步引导你思考</p>
        )}
      </div>

      {settings.s.showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🈶</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Aide rapide pour le mode socratique</h3>
              <p className="text-xs text-slate-500">中文使用提示</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">But</span>
              <span className="block mt-0.5">不要立刻要答案，而是让 AI 通过提问帮助你自己发现规则。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">Bonne méthode</span>
              <span className="block mt-0.5">告诉 AI 你的等级、句子、错误感觉和你想要的帮助方式。</span>
            </div>
            <div className="bg-slate-50 rounded-xl px-3 py-2 text-slate-600">
              <span className="font-semibold text-slate-700">À éviter</span>
              <span className="block mt-0.5">不要只说“解释语法”，要给具体例句和问题。</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-bold mb-2">🦉 C'est quoi le mode socratique ?</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Au lieu de te donner directement la réponse, le tuteur te pose des
          {" "}
          <strong className="text-white">questions de guidage</strong>
          {" "}
          pour que tu découvres la règle toi-même. Cette méthode ancre bien mieux les
          connaissances en mémoire à long terme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-red-900/30 border border-red-700/40 rounded-xl p-3">
            <p className="text-xs font-bold text-red-300 mb-1">
              {settings.s.showChineseLabels ? "❌ Mauvaise utilisation · 不推荐" : "❌ Mauvaise utilisation"}
            </p>
            <p className="text-xs text-red-200">&quot;Explique-moi le subjonctif.&quot;</p>
          </div>

          <div className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl p-3">
            <p className="text-xs font-bold text-emerald-300 mb-1">
              {settings.s.showChineseLabels ? "✅ Bonne utilisation · 推荐" : "✅ Bonne utilisation"}
            </p>
            <p className="text-xs text-emerald-200">
              &quot;J'ai écrit 'il faut que tu viens'. Je pense qu'il y a une erreur.
              Pose-moi des questions pour me faire comprendre la règle moi-même.&quot;
            </p>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-slate-700 mb-3">
        {settings.s.showChineseLabels ? "Exemples comparatifs · 对比示例" : "Exemples comparatifs"}
      </h3>
      <div className="space-y-3 mb-6">
        {socraticExamples.map((example) => (
          <div
            key={example.id}
            className={`bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden cursor-pointer transition-all ${activeExample === example.id ? "ring-2 ring-blue-200" : ""}`}
            onClick={() => setActiveExample(activeExample === example.id ? null : example.id)}
          >
            <div className="flex items-center justify-between p-4">
              <h4 className="font-semibold text-slate-700 text-sm">{example.title}</h4>
              <span className="text-slate-400 text-sm">{activeExample === example.id ? "↑" : "↓"}</span>
            </div>

            {activeExample === example.id && (
              <div className="px-4 pb-4 border-t border-slate-100 pt-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                    <p className="text-xs font-bold text-red-600 mb-1">❌ À éviter</p>
                    <p className="text-sm text-red-800 font-mono">{example.bad}</p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                    <p className="text-xs font-bold text-emerald-600 mb-1">✅ Recommandé</p>
                    <p className="text-sm text-emerald-800 font-mono">{example.good}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 bg-slate-50 rounded-lg p-2">
                  💡 {example.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="font-bold text-slate-700 mb-3">
        {settings.s.showChineseLabels ? "Prompts socratiques prêts à copier · 可直接复制的苏格拉底提示词" : "Prompts socratiques prêts à copier"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socraticPrompts.map((prompt) => (
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
