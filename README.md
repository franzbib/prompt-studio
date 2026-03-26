# FLE Prompt Studio

**Application web pédagogique pour l'apprentissage du français langue étrangère (FLE)**  
Niveaux A1 à C1 · Framework CECRL · Mobile-first · PWA

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Construire pour la production
npm run build

# 4. Prévisualiser la build
npm run preview
```

Ouvrez ensuite http://localhost:5173

---

## 📋 Fonctionnalités

### Bibliothèque de prompts
- **60+ prompts** pédagogiques couvrant les niveaux A1 à C1
- Filtres multi-axes : niveau CECRL, compétence, contexte, outil IA, coups de cœur
- Recherche plein-texte (titre, tags, objectif, contenu du prompt)
- Placeholders clairement identifiés pour personnalisation
- Copie en 1 clic
- Favoris avec persistance locale

### Boîte à outils Swiss Army
| Outil | Description |
|-------|-------------|
| 🃏 Convertisseur Anki | Transforme des notes en CSV importable dans Anki/Quizlet |
| ✅ Checklist d'écriture | Listes de vérification pour 6 types d'écrits |
| 🔧 Prompt Builder | Génère un prompt personnalisé selon niveau/compétence/contexte |
| 📓 Carnet de vocabulaire | Sauvegarde locale + export CSV |
| 🔗 Hub de ressources | Liens directs vers DeepL, Forvo, TV5Monde, RFI, etc. |
| 🔄 Convertisseur de registres | Tableau familier/neutre/soutenu |

### Tuteur Socratique
- Explication de la méthode socratique pour apprendre avec l'IA
- 5 exemples comparatifs (bonne vs mauvaise utilisation)
- Prompts socratiques prêts à copier

### Défi du jour
- 10 défis rotatifs adaptés par niveau
- Marquage comme accompli (persistant)
- Prompt suggéré associé au défi

### Comment prompter ?
- Guide débutant (3 étapes simples)
- Guide avancé (few-shot, chaining, délimiteurs XML)
- Les 6 principes du bon prompt illustrés

### Favoris & Paramètres
- Sauvegarde des prompts favoris
- Niveau global (filtre automatique la bibliothèque)
- Vue compacte / affichage des conseils

---

## 🏗 Architecture

```
fle-prompt-studio/
├── src/
│   ├── App.jsx          ← Composant principal + toutes les sections
│   ├── main.jsx         ← Point d'entrée React
│   ├── index.css        ← Styles globaux + import Tailwind
│   └── data/
│       └── prompts.js   ← 60+ prompts + défis + exemples + données seed
├── public/
│   └── manifest.json    ← PWA manifest
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Modèle de données — Prompt
```javascript
{
  id: string,
  title: string,
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1',
  skill: 'grammaire' | 'vocabulaire' | 'production_ecrite' | 'comprehension_ecrite' | 'expression_orale' | 'prononciation' | 'methodologie' | 'vie_quotidienne',
  subcategory: string,
  context: 'vie_quotidienne' | 'academique' | 'professionnel' | 'examen',
  tags: string[],
  objective: string,
  duration: string,
  difficulty: 1 | 2 | 3 | 4 | 5,
  aiToolCompatibility: ('any' | 'chatgpt' | 'claude' | 'perplexity')[],
  promptText: string,
  placeholders: string[],
  exampleOutput: string | null,
  caution: string | null,
  featured: boolean,
  type: 'tuteur' | 'correction' | 'reformulation' | 'dialogue_guide' | 'expansion_vocab' | 'flashcards' | 'dictee' | 'coaching_prononciation' | 'roleplay' | 'socratique' | 'simulation_examen' | 'email' | 'presentation_orale' | 'synthese' | 'comparaison_sources' | 'survie_universitaire'
}
```

---

## 🗺 Feuille de route (V2)

Basée sur l'architecture V3 des documents source :

### Phase 2 — Architecture composable
- [ ] Système d'archétypes (VOC_01→10, GRA_01→10, WRI_01→10, REA_01→10)
- [ ] 30 packs thématiques par niveau (A1→C1)
- [ ] Génération dynamique de prompts archétype × pack
- [ ] Schémas JSON stricts (compatible API Perplexity Sonar)

### Phase 3 — Modules avancés
- [ ] Module SRS (répétition espacée, algorithme SM-2)
- [ ] Intégration LanguageTool (annotation d'erreurs)
- [ ] Module prononciation (Whisper/Piper)
- [ ] Sélection adaptative de prompts
- [ ] Vérification de sources (Crossref, OpenAlex)
- [ ] Métriques d'apprentissage (pré/post-tests)

### Phase 4 — Backend
- [ ] Authentification utilisateurs
- [ ] Synchronisation cloud (progression, favoris)
- [ ] Statistiques d'apprentissage
- [ ] Recommandations personnalisées

---

## 📊 Contenu pédagogique

### Distribution des prompts par niveau
| Niveau | Prompts | Compétences couvertes |
|--------|---------|----------------------|
| A1 | 5 | Grammaire, Vocabulaire, Production écrite, Expression orale, Vie quotidienne |
| A2 | 5 | Grammaire, Vocabulaire, Production écrite, Compréhension écrite |
| B1 | 6 | Grammaire, Production écrite, Vocabulaire, Expression orale, Méthodologie, Socratique |
| B2 | 7 | Production écrite, Compréhension écrite, Grammaire, Vocabulaire, Simulation examen |
| C1 | 6 | Production écrite, Expression orale, Compréhension écrite, Méthodologie, Vocabulaire |
| Transversal | 4 | Socratique, Anki, Prononciation, Simulation examen |

### Alignement CECRL
- Descripteurs officiels du Conseil de l'Europe
- Grilles d'évaluation DELF/DALF (FEI)
- Progression lexicale et morphosyntaxique par niveau
- Types de textes et exigences discursives par niveau

---

## 📱 PWA & Mobile

L'app est installable comme PWA :
1. Ouvrir dans Chrome/Edge sur mobile
2. "Ajouter à l'écran d'accueil"
3. Utiliser hors-ligne (après premier chargement)

Navigation mobile : barre de navigation bas de page (8 onglets)
Navigation desktop : barre horizontale en header

---

## 🛠 Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.x | UI framework |
| Vite | 6.x | Build tool |
| Tailwind CSS | 3.x | Styling |
| LocalStorage | — | Persistance MVP |
| Google Fonts (Inter) | — | Typographie |

---

## 📄 Licence

Projet éducatif open-source. Contenu pédagogique basé sur le CECRL (Conseil de l'Europe).
