import { useState } from "react";

const CEFR_GLOSSARY = [
  { fr: "A1", zh: "入门", desc: "phrases simples, survie quotidienne" },
  { fr: "A2", zh: "基础", desc: "situations courantes, messages simples" },
  { fr: "B1", zh: "中级", desc: "exprimer une opinion, raconter une expérience" },
  { fr: "B2", zh: "中高级", desc: "argumenter, nuancer, structurer un discours" },
  { fr: "C1", zh: "高级", desc: "analyse, registre, précision académique" },
];

const SKILL_GLOSSARY = [
  { fr: "grammaire", zh: "语法" },
  { fr: "vocabulaire", zh: "词汇" },
  { fr: "production écrite", zh: "写作" },
  { fr: "compréhension écrite", zh: "阅读" },
  { fr: "expression orale", zh: "口语" },
  { fr: "prononciation", zh: "发音" },
  { fr: "méthodologie", zh: "学习方法" },
  { fr: "vie quotidienne", zh: "法国生活" },
];

export function HowToPrompt({ settings }) {
  const [tab, setTab] = useState("debutant");
  const showChineseLabels = settings?.s?.showChineseLabels;

  const principles = [
    {
      icon: "🎭",
      title: "Rôle / Persona",
      description: "Dis à l'IA quel rôle jouer.",
      exBad: "\"Explique le passé composé.\"",
      exGood: "\"Tu es un professeur de FLE expert. Explique le passé composé à un apprenant A2...\"",
    },
    {
      icon: "🎯",
      title: "Objectif précis",
      description: "Définis exactement ce que tu veux obtenir.",
      exBad: "\"Aide-moi avec mon texte.\"",
      exGood: "\"Corrige les 5 erreurs de grammaire les plus importantes dans ce texte B1, sans le réécrire entièrement.\"",
    },
    {
      icon: "🚧",
      title: "Contraintes explicites",
      description: "Dis ce que tu ne veux pas.",
      exBad: "\"Corrige mon texte.\"",
      exGood: "\"Corrige mon texte. NE réécris PAS tout le texte. Signale seulement les erreurs.\"",
    },
    {
      icon: "📐",
      title: "Format de sortie",
      description: "Spécifie la structure attendue.",
      exBad: "\"Fais-moi des exercices.\"",
      exGood: "\"Génère 5 phrases à compléter au format : Phrase incomplète → [choix A / choix B] → Correction + règle en 1 ligne.\"",
    },
    {
      icon: "📏",
      title: "Niveau et longueur",
      description: "Ancre l'IA dans le bon niveau CECRL.",
      exBad: "\"Explique la conjugaison.\"",
      exGood: "\"Je suis au niveau B1. Explique la conjugaison du subjonctif en 150 mots maximum, sans jargon linguistique.\"",
    },
    {
      icon: "🔁",
      title: "Itération",
      description: "Affine avec des prompts de suivi.",
      exBad: "Nouvelle conversation à chaque fois",
      exGood: "\"C'est bien mais trop difficile pour mon niveau. Simplifie et donne 2 exemples supplémentaires.\"",
    },
  ];

  const beginnerSteps = [
    {
      num: "1",
      title: "Dis qui tu es",
      text: "Commence toujours par : \"Je suis un(e) apprenant(e) de français de niveau [NIVEAU].\"",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      num: "2",
      title: "Dis ce que tu veux",
      text: "Sois précis : \"Aide-moi à pratiquer le passé composé\" plutôt que \"aide-moi avec la grammaire\".",
      color: "bg-blue-100 text-blue-700",
    },
    {
      num: "3",
      title: "Dis comment tu veux être aidé",
      text: "\"Corrige mes erreurs mais ne réécris pas tout\" ou \"Explique simplement, sans trop de jargon\".",
      color: "bg-amber-100 text-amber-700",
    },
  ];

  const slowDownTips = [
    "\"Ne me donne pas la réponse tout de suite.\"",
    "\"D'abord, demande-moi d'essayer.\"",
    "\"Utilise le mode socratique : guide-moi par des questions.\"",
    "\"Attends ma réponse avant de corriger.\"",
  ];

  const advancedTips = [
    {
      title: "Chaining (enchaînement de prompts)",
      desc: "Utilise les réponses précédentes comme point de départ du prompt suivant.",
    },
    {
      title: "Few-shot prompting",
      desc: "Donne 1 ou 2 exemples de la forme attendue avant de demander la génération.",
    },
    {
      title: "Délimiteurs XML",
      desc: "Encadre les textes longs avec des balises comme <texte_apprenant>...</texte_apprenant>.",
    },
    {
      title: "Adapter la difficulté CECRL dynamiquement",
      desc: "\"Si je réussis, augmente la difficulté. Si j'échoue, reste au même niveau et varie les exemples.\"",
    },
    {
      title: "Demander une rétroaction graduée",
      desc: "\"Évalue mon texte sur plusieurs critères et développe seulement le critère le plus faible.\"",
    },
  ];

  const chineseGuide = [
    {
      title: "1. 先说明你的身份",
      body: "先告诉 AI 你的法语水平，例如：Je suis un apprenant de français de niveau A2.",
    },
    {
      title: "2. 再说明你的目标",
      body: "明确说出你想练什么，例如：Je veux pratiquer le passé composé ou Je veux écrire un e-mail formel.",
    },
    {
      title: "3. 告诉 AI 你希望它怎么帮助你",
      body: "比如：Corrige seulement 5 erreurs / Ne réécris pas tout / Pose-moi des questions d'abord.",
    },
    {
      title: "4. 如果提示词里有 [PLACEHOLDER]",
      body: "方括号里的内容需要你自己替换，例如 [THÈME]、[NIVEAU]、[LANGUE_AIDE]。",
    },
  ];

  const chineseTemplate = `Tu es un professeur de FLE.
Je suis un apprenant chinois de niveau [NIVEAU].
Objectif : [OBJECTIF]
Thème : [THÈME]

Consignes :
1. Explique simplement.
2. Utilise un français adapté à mon niveau.
3. Ne donne pas tout de suite la réponse finale.
4. Corrige seulement les erreurs importantes.
5. Si nécessaire, ajoute une courte aide en chinois.`;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Comment bien prompter ?</h2>
        <p className="text-slate-500 text-sm">
          Maîtriser l'art de communiquer avec une IA pour apprendre le français
        </p>
        {showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">提示指南 · 帮助中文用户更容易写出有效提示词</p>
        )}
      </div>

      {showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🈶</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Glossaire FLE FR-中文</h3>
              <p className="text-xs text-slate-500">Comprendre les niveaux et catégories principales</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Niveaux CECRL</p>
              <div className="space-y-2">
                {CEFR_GLOSSARY.map((item) => (
                  <div key={item.fr} className="bg-slate-50 rounded-xl px-3 py-2">
                    <p className="text-sm font-semibold text-slate-700">{item.fr} · {item.zh}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Compétences</p>
              <div className="grid grid-cols-1 gap-2">
                {SKILL_GLOSSARY.map((item) => (
                  <div key={item.fr} className="bg-slate-50 rounded-xl px-3 py-2 text-sm text-slate-700">
                    {item.fr} · {item.zh}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setTab("debutant")}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${tab === "debutant" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white border-slate-200 text-slate-600"}`}
        >
          🌱 Débutant
        </button>
        <button
          onClick={() => setTab("avance")}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${tab === "avance" ? "bg-rose-600 text-white border-rose-600" : "bg-white border-slate-200 text-slate-600"}`}
        >
          🔥 Avancé
        </button>
        <button
          onClick={() => setTab("principes")}
          className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${tab === "principes" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-200 text-slate-600"}`}
        >
          📐 Les 6 principes
        </button>
        {showChineseLabels && (
          <button
            onClick={() => setTab("zh")}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${tab === "zh" ? "bg-slate-800 text-white border-slate-800" : "bg-white border-slate-200 text-slate-600"}`}
          >
            🈶 中文指南
          </button>
        )}
      </div>

      {tab === "principes" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{principle.icon}</span>
                <h3 className="font-bold text-slate-800">{principle.title}</h3>
              </div>
              <p className="text-sm text-slate-500 mb-3">{principle.description}</p>
              <div className="space-y-2">
                <div className="bg-red-50 rounded-lg p-2 text-xs">
                  <span className="text-red-500 font-bold">❌ Faible : </span>
                  <span className="text-red-700 font-mono">{principle.exBad}</span>
                </div>
                <div className="bg-emerald-50 rounded-lg p-2 text-xs">
                  <span className="text-emerald-600 font-bold">✅ Fort : </span>
                  <span className="text-emerald-700 font-mono">{principle.exGood}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "debutant" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🌱 Guide pour débutants · 3 étapes simples</h3>
            <div className="space-y-4">
              {beginnerSteps.map((step) => (
                <div key={step.num} className="flex gap-3">
                  <span className={`w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center shrink-0 ${step.color}`}>
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-slate-700">{step.title}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🔒 Comment empêcher l'IA de donner les réponses trop vite</h3>
            <p className="text-sm text-slate-500 mb-3">
              L'IA a tendance à tout corriger immédiatement. Pour apprendre vraiment,
              ajoute ces phrases à ton prompt :
            </p>
            {slowDownTips.map((tip) => (
              <div key={tip} className="bg-slate-50 rounded-lg px-3 py-2 mb-2 text-sm font-mono text-slate-700">
                {tip}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "avance" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🔥 Techniques avancées pour apprenants B2/C1</h3>
            <div className="space-y-3">
              {advancedTips.map((tip) => (
                <div key={tip.title} className="border-l-2 border-blue-200 pl-3">
                  <p className="font-semibold text-sm text-slate-700">{tip.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "zh" && showChineseLabels && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🈶 中文版提示指南</h3>
            <div className="space-y-3">
              {chineseGuide.map((item) => (
                <div key={item.title} className="border-l-2 border-slate-200 pl-3">
                  <p className="font-semibold text-sm text-slate-700">{item.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🧩 Modèle simple à copier</h3>
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans bg-slate-50 rounded-xl p-3 border border-slate-100 leading-relaxed">
              {chineseTemplate}
            </pre>
            <p className="text-xs text-slate-400 mt-3">
              说明：把 [NIVEAU]、[OBJECTIF]、[THÈME] 换成你自己的内容。
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-3">🎯 对中文学习者特别有用的法语指令</h3>
            <div className="space-y-2">
              {[
                "Explique simplement.",
                "Utilise un français adapté au niveau A2/B1/B2.",
                "Ne donne pas la réponse finale tout de suite.",
                "Corrige seulement les erreurs importantes.",
                "Ajoute une courte aide en chinois si nécessaire.",
              ].map((item) => (
                <div key={item} className="bg-slate-50 rounded-lg px-3 py-2 text-sm font-mono text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
