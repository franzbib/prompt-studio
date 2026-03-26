# Prompt Catalog

Organisation actuelle du catalogue :

- `meta.js` : niveaux, couleurs, compétences, contextes, types et outils IA
- `levels/` : prompts répartis par niveau et bloc transversal
- `prompts.js` : agrège tous les tableaux de prompts dans l'ordre d'affichage
- `supplemental.js` : défis du jour, exemples socratiques, checklists, liens
- `validators.js` : garde-fous en développement pour repérer les erreurs de structure
- `index.js` : point d'entrée unique du catalogue

Pour ajouter un nouveau prompt :

1. Choisir le bon fichier dans `levels/`
2. Ajouter un objet cohérent avec la structure existante
3. Vérifier `skill`, `context`, `type` et `aiToolCompatibility`
4. Lancer `npm run build` puis `npm run dev` pour voir les éventuels warnings en développement

Si un nouveau filtre ou une nouvelle taxonomie apparaît :

- ajouter la valeur dans `meta.js`
- adapter les vues qui présentent ces options
- laisser `validators.js` signaler les oublis éventuels pendant le développement
