# Taxonomie enrichie du catalogue

Ce document sert de reference rapide pour attribuer les metadonnees enrichies
du catalogue de prompts. Les champs enrichis sont additifs : ils completent les
champs legacy, mais ne les remplacent pas.

## Ordre de decision

Toujours raisonner dans cet ordre :

1. action dominante de l'apprenant
2. finalite pedagogique principale
3. mode d'interaction
4. mode de correction
5. politique de reecriture
6. politique anti-substitution
7. langue d'appui
8. multiLevel

## Definitions des champs

### `cefrActivityPrimary`

Action dominante de l'apprenant au regard d'une logique CECRL.

- `reception_ecrite` : lire, reperer, interpreter un texte
- `reception_orale` : ecouter, reperer, interpreter un contenu oral
- `production_ecrite` : rediger principalement son propre texte
- `production_orale` : prendre la parole de facon structuree sans interlocution dominante
- `interaction_orale` : echange, simulation, tours de parole
- `interaction_ecrite` : ecriture adressee a un destinataire
- `interaction_en_ligne` : interaction ecrite outillee ou asynchrone
- `mediation_textuelle` : reformuler, synthetiser ou adapter un contenu source
- `mediation_conceptuelle` : faire comprendre un concept ou organiser une idee pour autrui
- `mediation_communication` : faciliter l'echange entre parties ou langues
- `prononciation` : travail phonologique, articulatoire, prosodique
- `reflexivite` : tache veritablement metacognitive ou introspective

### `pedagogicalFunction`

But pedagogique principal du prompt.

- `diagnostic` : situer, reperer des besoins, faire emerger un profil
- `entrainement_guide` : apprendre ou s'exercer avec un fort etayage
- `simulation` : mise en situation dialoguee ou examen simule
- `correction` : retour correctif principal sur une production
- `revision` : amelioration raisonnee d'un texte deja existant
- `mediation` : transformer un contenu source pour un autre usage
- `transfert` : reemploi dans une tache reelle ou quasi reelle
- `autonomisation` : outillage du travail personnel et de l'apprentissage autonome
- `socratique` : progression par questions avec reponse directe limitee ou interdite

### `interactionMode`

Forme d'echange attendue avec l'IA.

- `single_shot` : une demande principale, resultat direct
- `multi_turn` : plusieurs tours, sans boucle de correction explicite
- `simulation` : jeu de role, oral simule, examen simule
- `socratic` : questions progressives, pas de reponse directe
- `revision_loop` : production de l'apprenant puis retour sur cette production

### `guidanceLevel`

Niveau d'etayage fourni par le prompt.

- `fort` : pas-a-pas clair, etapes ou guidage serre
- `moyen` : structure presente mais marge d'autonomie reelle
- `faible` : autonomie forte de l'apprenant

### `correctionMode`

Nature du retour attendu de l'IA.

- `directe` : reponse ou correction fournie directement
- `signalee` : signalement des points a reprendre sans correction complete
- `guidee` : aide a s'auto-corriger ou a reformuler soi-meme
- `socratique` : correction par questions successives
- `hybride` : melange de signalement, commentaire et reprise partielle

### `rewritePolicy`

Rapport a la reecriture du texte.

- `allow_full_rewrite` : reecriture complete acceptable
- `targeted_rewrite_only` : reprise ciblee seulement
- `no_full_rewrite_first` : pas de reecriture complete au premier passage
- `learner_attempt_first` : tentative de l'apprenant attendue avant aide forte

### `antiSubstitutionPolicy`

Niveau de protection contre la substitution du travail de l'apprenant par l'IA.

- `none` : pas de garde-fou particulier
- `light_guardrails` : garde-fous legers
- `attempt_first` : tentative de l'apprenant attendue avant aide forte
- `strict_no_answer` : interdiction explicite de donner directement la bonne reponse

### `supportLanguage`

Place donnee a la langue premiere ou a une langue d'appui.

- `none` : pas d'appui linguistique prevu
- `optional` : aide possible si utile
- `recommended` : aide conseillee pour ce prompt
- `required` : aide linguistique structurellement necessaire

### `multiLevel`

Indique si le prompt prevoit un parametre de niveau reellement exploitable, par
exemple `[NIVEAU_CECRL]`.

## Quand ne pas utiliser certaines valeurs

### Ne pas utiliser `reflexivite` comme categorie refuge

`reflexivite` ne doit pas servir a classer un prompt juste parce qu'il est
"complexe", "methodologique" ou "socratique". Si l'apprenant lit un texte,
ecrit un essai, reformule une source ou prepare une prise de parole, il faut
choisir l'action dominante correspondante.

### Ne pas utiliser `mediation_textuelle` par prestige

Choisir `mediation_textuelle` seulement quand un contenu source est reellement
transforme, reformule, adapte ou synthetise pour un autre usage. Si le texte
source n'est qu'un point de depart vers une production personnelle, preferer
souvent `production_ecrite` ou `reception_ecrite`.

### Ne pas utiliser `transfert` par prestige pragmatique

`transfert` s'applique quand la finalite principale est l'accomplissement d'une
tache reelle ou quasi reelle. Si le prompt reste surtout un exercice, une
demarche documentaire ou une progression methodologique, preferer
`entrainement_guide` ou `mediation`.

## Cas atypiques commentes

### `trans_anki_01`

Ce prompt-outil n'est pas une tache langagiere classique. La valeur
`pedagogicalFunction = autonomisation` est donc centrale. Le choix
`cefrActivityPrimary = mediation_textuelle` n'est pas parfait, mais il est le
moins trompeur : le prompt transforme un texte source en cartes de revision pour
un nouvel usage.

### `trans_socrat_01`

Ce prompt reste l'exception principale pour `reflexivite`. Le coeur de la tache
est bien metacognitif : l'IA guide l'apprenant dans sa facon d'apprendre et dans
sa demarche de resolution, sans fournir directement la reponse. Cette valeur doit
rester rare et explicitement justifiee.

### `c1_ecrit_01`

Le champ legacy `type = socratique` ne doit pas dicter la lecture du prompt.
Ici, la tache centrale est la redaction d'un essai critique personnel. Le prompt
est donc classe en `production_ecrite` et `transfert`, meme s'il s'appuie sur un
texte source.

### `c1_comp_01`

La presence d'un texte source et d'une dimension critique ne suffit pas a faire
de ce prompt un cas socratique ou un cas de mediation. Le coeur de l'activite
reste l'analyse et l'interpretation d'un texte, donc `reception_ecrite`.

## Exemples canoniques par famille

- entrainement guide grammatical : `a2_gram_02`
- entrainement guide lexical avec production : `b1_vocab_01`
- transfert ecrit adresse : `a2_ecrit_01`
- transfert ecrit academique : `b2_ecrit_02`
- mediation textuelle de synthese : `b2_comp_01`
- simulation orale : `a1_oral_01`
- simulation d'examen : `trans_exam_01`
- socratique explicite : `b1_socrat_01`
- autonomisation outillee : `trans_anki_01`

## Regle pratique finale

Quand plusieurs valeurs semblent possibles, retenir celle qui decrit le mieux
ce que fait principalement l'apprenant, et non ce que l'IA sait produire.
