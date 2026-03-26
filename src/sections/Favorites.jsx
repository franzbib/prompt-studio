import { prompts } from "../data/prompts.js";
import { PromptCard } from "../components/prompts/PromptCard.jsx";

export function Favorites({ favorites, settings }) {
  const favoritePrompts = prompts.filter((prompt) => favorites.favs.includes(prompt.id));

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-1">Mes favoris</h2>
        <p className="text-slate-500 text-sm">
          {favoritePrompts.length} prompt{favoritePrompts.length !== 1 ? "s" : ""} sauvegardé{favoritePrompts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {favoritePrompts.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <div className="text-5xl mb-3">★</div>
          <p className="font-medium text-slate-500">Aucun favori pour l'instant</p>
          <p className="text-sm mt-1">Clique sur l'étoile d'un prompt pour le retrouver ici.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {favoritePrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              isFav
              onToggleFav={favorites.toggle}
              compact={false}
              showChineseLabels={settings.s.showChineseLabels}
            />
          ))}
        </div>
      )}
    </div>
  );
}
