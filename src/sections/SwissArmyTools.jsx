import { useState } from "react";
import {
  LEVELS,
  SKILLS,
  directLinks,
  writingChecklists,
} from "../data/prompts.js";
import { copyText } from "../lib/clipboard.js";
import { LevelBadge } from "../components/ui/LevelBadge.jsx";

const TOOL_META = {
  anki: {
    zhLabel: "闪卡 CSV",
    zhHint: "把词汇或问答转换成可导入 Anki 的表格",
  },
  checklist: {
    zhLabel: "写作检查",
    zhHint: "写完后逐项检查，避免遗漏",
  },
  builder: {
    zhLabel: "提示生成器",
    zhHint: "按等级和目标快速生成个性化提示词",
  },
  vocab: {
    zhLabel: "词汇本",
    zhHint: "保存单词、例句和等级，便于复习",
  },
  links: {
    zhLabel: "资源链接",
    zhHint: "快速打开 DeepL、Forvo、TV5Monde 等工具",
  },
  register: {
    zhLabel: "语域转换",
    zhHint: "比较口语、中性和正式表达",
  },
};

function downloadCSV(filename, content) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = Object.assign(document.createElement("a"), {
    href: url,
    download: filename,
  });

  link.click();
  URL.revokeObjectURL(url);
}

function AnkiConverter({ showChineseLabels }) {
  const [input, setInput] = useState("");
  const [format, setFormat] = useState("word_definition");
  const [downloaded, setDownloaded] = useState(false);

  const generate = () => {
    const lines = input.trim().split("\n").filter(Boolean);
    let csv = "";

    if (format === "word_definition") {
      csv = [
        "Mot/Expression;Définition/Traduction;Tags",
        ...lines.map((line) => {
          const parts = line.split(/[;:\t—–-]/).map((part) => part.trim());
          return `${parts[0] || ""};${parts[1] || ""};fle`;
        }),
      ].join("\n");
    } else {
      csv = [
        "Question;Réponse;Tags",
        ...lines.map((line) => {
          const parts = line.split("?");
          return `${(parts[0] || "").trim()}?;${(parts[1] || "").trim()};fle`;
        }),
      ].join("\n");
    }

    downloadCSV("cartes_anki_fle.csv", csv);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🃏</span>
        <div>
          <h3 className="font-bold text-slate-800">Convertisseur Anki / CSV</h3>
          <p className="text-sm text-slate-500">
            Transforme tes notes en cartes mémorisation importables
          </p>
          {showChineseLabels && (
            <p className="text-xs text-slate-400 mt-1">把词汇或问答转成可导入 Anki 的 CSV</p>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
          Format
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setFormat("word_definition")}
            className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${format === "word_definition" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white border-slate-200 text-slate-500"}`}
          >
            Mot → Définition
          </button>
          <button
            onClick={() => setFormat("qa")}
            className={`text-sm px-3 py-1.5 rounded-lg border transition-all ${format === "qa" ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-white border-slate-200 text-slate-500"}`}
          >
            Question → Réponse
          </button>
        </div>
      </div>

      <textarea
        className="w-full h-40 border border-slate-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 font-mono"
        placeholder={format === "word_definition" ? "se renseigner : obtenir des informations\nle bilan : résumé d'une situation\n..." : "Comment former le passé composé ?\nQu'est-ce que le subjonctif ?\n..."}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={generate}
          disabled={!input.trim()}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all"
        >
          {downloaded ? "✓ Téléchargé !" : "⬇ Télécharger CSV"}
        </button>
        <p className="text-xs text-slate-400">Importable dans Anki, Quizlet, Brainscape...</p>
      </div>
    </div>
  );
}

function WritingChecklist({ showChineseLabels }) {
  const [type, setType] = useState("email_simple");
  const [checked, setChecked] = useState({});
  const list = writingChecklists[type] || { title: "", items: [] };
  const doneCount = list.items.filter((_, index) => checked[`${type}_${index}`]).length;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">✅</span>
        <div>
          <h3 className="font-bold text-slate-800">Générateur de checklist d'écriture</h3>
          <p className="text-sm text-slate-500">Vérifier ton écrit avant de le rendre</p>
          {showChineseLabels && (
            <p className="text-xs text-slate-400 mt-1">写作完成后逐项核对</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(writingChecklists).map(([key, value]) => (
          <button
            key={key}
            onClick={() => {
              setType(key);
              setChecked({});
            }}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${type === key ? "bg-blue-50 text-blue-700 border-blue-200 font-medium" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}
          >
            {value.title}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-semibold text-slate-700">{list.title}</h4>
        <span className={`text-sm font-bold ${doneCount === list.items.length ? "text-emerald-600" : "text-slate-400"}`}>
          {doneCount}/{list.items.length}
        </span>
      </div>

      <div className="space-y-2">
        {list.items.map((item, index) => {
          const key = `${type}_${index}`;

          return (
            <label
              key={key}
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-colors ${checked[key] ? "bg-emerald-50" : "hover:bg-slate-50"}`}
            >
              <input
                type="checkbox"
                checked={!!checked[key]}
                onChange={(event) => setChecked((previous) => ({ ...previous, [key]: event.target.checked }))}
                className="mt-0.5 accent-emerald-600 w-4 h-4 shrink-0"
              />
              <span className={`text-sm ${checked[key] ? "line-through text-slate-400" : "text-slate-700"}`}>
                {item}
              </span>
            </label>
          );
        })}
      </div>

      {doneCount === list.items.length && list.items.length > 0 && (
        <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center text-emerald-700 font-semibold text-sm">
          🎉 Tout est coché, ton texte est prêt !
        </div>
      )}
    </div>
  );
}

function PromptBuilder({ showChineseLabels }) {
  const [form, setForm] = useState({
    level: "B1",
    skill: "production_ecrite",
    topic: "",
    format: "tuteur",
    strictness: "modéré",
    language: "français",
    duration: "20 min",
    context: "académique",
  });
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (key, value) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const generate = () => {
    const skillLabel = form.skill.replaceAll("_", " ");

    setGenerated(`Tu es un professeur de FLE expert et pédagogue rigoureux. Tu travailles avec un apprenant de niveau ${form.level} (CECRL).

Compétence travaillée : ${skillLabel}
Sujet / thème : ${form.topic || "[THÈME À PRÉCISER]"}
Format de la session : ${form.format}
Durée estimée : ${form.duration}
Contexte : ${form.context}
Niveau de correction : ${form.strictness}
Langue de retour : ${form.language}

Instructions :
1. Commence par présenter clairement l'objectif pédagogique de la session.
2. Propose des activités adaptées au niveau ${form.level}, progressives et engageantes.
3. Donne un retour ${form.strictness === "strict" ? "précis et exhaustif" : form.strictness === "bienveillant" ? "encourageant en soulignant les réussites" : "équilibré entre encouragement et correction"}.
4. Adapte la complexité de tes explications à un apprenant ${form.level}.
5. Conclus la session par un résumé des points travaillés et 1 exercice de consolidation.`);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔧</span>
        <div>
          <h3 className="font-bold text-slate-800">Constructeur de prompts</h3>
          <p className="text-sm text-slate-500">Génère un prompt personnalisé selon ton profil</p>
          {showChineseLabels && (
            <p className="text-xs text-slate-400 mt-1">根据等级、主题和目标自动生成提示词</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Niveau CECRL
          </label>
          <select
            value={form.level}
            onChange={(event) => update("level", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {LEVELS.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Compétence
          </label>
          <select
            value={form.skill}
            onChange={(event) => update("skill", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {SKILLS.map((skill) => (
              <option key={skill.id} value={skill.id}>
                {skill.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Contexte
          </label>
          <select
            value={form.context}
            onChange={(event) => update("context", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="académique">Académique</option>
            <option value="professionnel">Professionnel</option>
            <option value="vie quotidienne">Vie quotidienne</option>
            <option value="examen">Préparation examen</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Niveau de correction
          </label>
          <select
            value={form.strictness}
            onChange={(event) => update("strictness", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="bienveillant">Bienveillant</option>
            <option value="modéré">Modéré</option>
            <option value="strict">Strict</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Durée
          </label>
          <select
            value={form.duration}
            onChange={(event) => update("duration", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option>10 min</option>
            <option>20 min</option>
            <option>30 min</option>
            <option>45 min</option>
            <option>60 min</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Langue de retour
          </label>
          <select
            value={form.language}
            onChange={(event) => update("language", event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="français">Français</option>
            <option value="anglais">Anglais</option>
            <option value="espagnol">Espagnol</option>
            <option value="arabe">Arabe</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
          Sujet / thème (optionnel)
        </label>
        <input
          className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="ex: le subjonctif, les transports, la lettre formelle..."
          value={form.topic}
          onChange={(event) => update("topic", event.target.value)}
        />
      </div>

      <button
        onClick={generate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all mb-3"
      >
        ✨ Générer mon prompt personnalisé
      </button>

      {generated && (
        <div>
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans bg-slate-50 rounded-xl p-3 border border-slate-100 leading-relaxed">
            {generated}
          </pre>
          <button
            onClick={() => copyText(generated, setCopied)}
            className={`mt-2 w-full py-2 rounded-xl text-sm font-semibold transition-all ${copied ? "bg-emerald-500 text-white" : "bg-slate-800 hover:bg-slate-900 text-white"}`}
          >
            {copied ? "✓ Copié !" : "📋 Copier"}
          </button>
        </div>
      )}
    </div>
  );
}

function VocabNotebook({ vocab, showChineseLabels }) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("nom");
  const [example, setExample] = useState("");
  const [level, setLevel] = useState("B1");
  const [saved, setSaved] = useState(false);

  const save = () => {
    if (!word.trim()) {
      return;
    }

    vocab.add({ word, translation, category, example, level });
    setWord("");
    setTranslation("");
    setExample("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📓</span>
          <div>
            <h3 className="font-bold text-slate-800">Carnet de vocabulaire</h3>
            <p className="text-sm text-slate-500">
              {vocab.entries.length} mot{vocab.entries.length !== 1 ? "s" : ""} enregistré{vocab.entries.length !== 1 ? "s" : ""}
            </p>
            {showChineseLabels && (
              <p className="text-xs text-slate-400 mt-1">保存单词、翻译、例句和 CECRL 等级</p>
            )}
          </div>
        </div>

        {vocab.entries.length > 0 && (
          <button
            onClick={vocab.exportCSV}
            className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition font-medium"
          >
            ⬇ Exporter CSV
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Mot / Expression
          </label>
          <input
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="se renseigner"
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Traduction
          </label>
          <input
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="to find out / informarse..."
            value={translation}
            onChange={(event) => setTranslation(event.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Catégorie
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="nom">Nom</option>
            <option value="verbe">Verbe</option>
            <option value="adjectif">Adjectif</option>
            <option value="adverbe">Adverbe</option>
            <option value="expression">Expression</option>
            <option value="connecteur">Connecteur</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
            Niveau
          </label>
          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="w-full text-sm border border-slate-200 rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {LEVELS.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1 block">
          Exemple d'usage (optionnel)
        </label>
        <input
          className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Je me suis renseigné sur les horaires."
          value={example}
          onChange={(event) => setExample(event.target.value)}
        />
      </div>

      <button
        onClick={save}
        disabled={!word.trim()}
        className={`w-full py-2 rounded-xl text-sm font-semibold transition-all mb-4 ${saved ? "bg-emerald-500 text-white" : "bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white"}`}
      >
        {saved ? "✓ Enregistré !" : "➕ Ajouter au carnet"}
      </button>

      {vocab.entries.length > 0 && (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {vocab.entries.map((entry) => (
            <div key={entry.id} className="flex items-start justify-between bg-slate-50 rounded-lg p-2.5 gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm text-slate-800">{entry.word}</span>
                  <LevelBadge level={entry.level} />
                  <span className="text-xs text-slate-400 capitalize">{entry.category}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{entry.translation}</p>
                {entry.example && <p className="text-xs text-slate-400 italic mt-0.5">« {entry.example} »</p>}
              </div>
              <button
                onClick={() => vocab.remove(entry.id)}
                className="text-slate-300 hover:text-red-400 text-sm shrink-0"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DirectLinksHub({ showChineseLabels }) {
  const categories = [...new Set(directLinks.map((link) => link.category))];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔗</span>
        <div>
          <h3 className="font-bold text-slate-800">Ressources & liens directs</h3>
          <p className="text-sm text-slate-500">Les meilleurs outils FLE, accessibles en un clic</p>
          {showChineseLabels && (
            <p className="text-xs text-slate-400 mt-1">常用法语学习网站与发音资源</p>
          )}
        </div>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 capitalize">
            {category}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {directLinks
              .filter((link) => link.category === category)
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 p-2.5 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group"
                >
                  <span className="text-lg">{link.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                      {link.name}
                    </p>
                    <p className="text-xs text-slate-400">{link.description}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RegisterConverter({ showChineseLabels }) {
  const examples = [
    { familier: "C'est chiant", neutre: "C'est difficile", soutenu: "Cela s'avère complexe" },
    { familier: "J'ai pas compris", neutre: "Je n'ai pas compris", soutenu: "Je n'ai pas saisi ce point" },
    { familier: "T'as qu'à faire ça", neutre: "Tu devrais faire ça", soutenu: "Il vous serait conseillé de procéder ainsi" },
    { familier: "Ça marche pas", neutre: "Ça ne fonctionne pas", soutenu: "Cela ne semble pas fonctionner correctement" },
    { familier: "J'suis à fond pour", neutre: "Je suis tout à fait d'accord", soutenu: "Je souscris entièrement à cette proposition" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">🔄</span>
        <div>
          <h3 className="font-bold text-slate-800">Convertisseur de registres</h3>
          <p className="text-sm text-slate-500">Familier → Neutre → Soutenu</p>
          {showChineseLabels && (
            <p className="text-xs text-slate-400 mt-1">比较口语、中性和正式表达</p>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400 uppercase">Familier</th>
              <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400 uppercase">Neutre</th>
              <th className="text-left py-2 px-3 text-xs font-semibold text-blue-500 uppercase">Soutenu</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((example) => (
              <tr key={example.familier} className="border-b border-slate-50 hover:bg-slate-50">
                <td className="py-2 px-3 text-slate-500 italic">{example.familier}</td>
                <td className="py-2 px-3 text-slate-600">{example.neutre}</td>
                <td className="py-2 px-3 text-blue-700 font-medium">{example.soutenu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-xl text-xs text-blue-700">
        💡 <strong>Pour transformer votre propre texte :</strong> utilise le prompt
        {" "}
        &quot;Registres et variations stylistiques&quot; dans la bibliothèque.
      </div>
    </div>
  );
}

export function SwissArmyTools({ vocab, settings }) {
  const [tool, setTool] = useState("anki");
  const tools = [
    { id: "anki", label: "Anki CSV", icon: "🃏" },
    { id: "checklist", label: "Checklist", icon: "✅" },
    { id: "builder", label: "Prompt Builder", icon: "🔧" },
    { id: "vocab", label: "Carnet vocab.", icon: "📓" },
    { id: "links", label: "Ressources", icon: "🔗" },
    { id: "register", label: "Registres", icon: "🔄" },
  ];
  const showChineseLabels = settings.s.showChineseLabels;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Boîte à outils FLE</h2>
        <p className="text-slate-500 text-sm">Des micro-outils pour apprendre plus vite et mieux</p>
        {showChineseLabels && (
          <p className="text-xs text-slate-400 mt-1">工具区 · 选择你现在最需要的学习工具</p>
        )}
      </div>

      {showChineseLabels && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🈶</span>
            <div>
              <h3 className="text-sm font-bold text-slate-800">Aide rapide pour les outils</h3>
              <p className="text-xs text-slate-500">中文使用提示</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {tools.map((item) => (
              <button
                key={item.id}
                onClick={() => setTool(item.id)}
                className={`text-left rounded-xl px-3 py-2 border transition-all ${tool === item.id ? "bg-blue-50 border-blue-200" : "bg-slate-50 border-slate-100 hover:border-blue-200 hover:bg-blue-50"}`}
              >
                <span className="block text-xs font-semibold text-slate-700">
                  {item.icon} {item.label}
                </span>
                <span className="block text-xs text-slate-400 mt-0.5">
                  {TOOL_META[item.id].zhLabel} · {TOOL_META[item.id].zhHint}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {tools.map((item) => (
          <button
            key={item.id}
            onClick={() => setTool(item.id)}
            className={`rounded-xl border transition-all ${tool === item.id ? "bg-blue-600 text-white border-blue-600 shadow-sm" : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"}`}
          >
            <span className={`flex items-center ${showChineseLabels ? "gap-2 px-3 py-1.5" : "gap-1.5 px-3 py-2"}`}>
              <span>{item.icon}</span>
              <span className="text-left">
                <span className="block text-sm font-medium leading-tight">{item.label}</span>
                {showChineseLabels && (
                  <span className="block text-[10px] leading-tight opacity-80">
                    {TOOL_META[item.id].zhLabel}
                  </span>
                )}
              </span>
            </span>
          </button>
        ))}
      </div>

      {tool === "anki" && <AnkiConverter showChineseLabels={showChineseLabels} />}
      {tool === "checklist" && <WritingChecklist showChineseLabels={showChineseLabels} />}
      {tool === "builder" && <PromptBuilder showChineseLabels={showChineseLabels} />}
      {tool === "vocab" && <VocabNotebook vocab={vocab} showChineseLabels={showChineseLabels} />}
      {tool === "links" && <DirectLinksHub showChineseLabels={showChineseLabels} />}
      {tool === "register" && <RegisterConverter showChineseLabels={showChineseLabels} />}
    </div>
  );
}
