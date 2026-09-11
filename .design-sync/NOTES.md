# design-sync — notes de reprise

Ce dossier est l'entrée de synchronisation de `marsclub-interface` vers
**claude.ai/design**. Le principe : l'agent de design de claude.ai construit
des écrans **avec les vrais composants compilés de ce dépôt**, plus leur CSS,
leurs polices et leur doctrine. Ce qui est ici est ce qu'il lit.

**Premier réflexe d'une resynchronisation : relire la section « Risques »
en bas.** C'est la liste de ce qui peut se périmer en silence.

## Ce que ce dépôt a de particulier

- **Il ne livre AUCUN CSS compilé.** C'est l'application hôte qui fait tourner
  Tailwind sur `node_modules/marsclub-interface/dist` (voir le `globals.css`
  d'Hora et la ligne `@source`). Un aperçu de design system n'a pas
  d'application hôte : `.design-sync/tailwind/entree.css` refait ce que fait
  `globals.css`, et le résultat compilé (`compile.css`) est le `cssEntry` du
  convertisseur. **Sans cette étape, tous les aperçus arrivent sans style,
  sans la moindre erreur** — la même panne silencieuse que la ligne `@source`
  manquante dans un outil.
- **Il ne déclare pas `react` en dépendance** (c'est une `peerDependency`).
  React et React-DOM sont donc installés dans `.ds-sync/`, et
  `--node-modules` pointe là, pas sur le `node_modules` du dépôt.
- **Ses composants sont groupés par thème, pas un fichier par composant**
  (`cartes.tsx` en porte quatre). La recherche floue du convertisseur n'en
  retrouvait que 5 sur 23 : d'où le `componentSrcMap` exhaustif du
  `config.json`. **C'est lui qui fait remonter la doctrine en commentaire
  de chaque composant dans son `.prompt.md`** — sans lui, l'agent de design
  ne reçoit que les props, jamais le pourquoi.

## La charpente Tailwind (à comprendre avant d'y toucher)

Le CSS livré ne contient **que les classes que le scan a trouvées**. Dans un
outil, Tailwind tourne sur tout le code de l'application : qui écrit
`grid-cols-3` l'obtient. Ici, non. Or l'agent de design compose des pages : il
lui faut de quoi poser une grille, un écart, une marge.

D'où la liste `@source inline(...)` en tête de `tailwind/entree.css` : le
vocabulaire de charpente **garanti présent**. Il est borné exprès — la palette
de la maison et rien d'autre, pas de couleur hors charte. La règle « ne jamais
inventer de couleur » se tient aussi par ce qui manque.

⚠️ **Toute classe ajoutée à la liste doit être ajoutée à `conventions.md`**,
qui est ce que l'agent lit. Une liste qui ment est pire qu'absente. La
vérification est scriptable : chaque famille annoncée doit se retrouver dans
`ds-bundle/_ds_bundle.css`.

`@source "../previews"` est là aussi : les classes utilisées par les aperçus
eux-mêmes sont donc compilées d'office, même hors liste.

**`tailwind/compile.css` est versionné alors qu'il est généré** — exprès. Un
diff sur ce fichier est la seule façon de VOIR qu'une classe est entrée ou
sortie du vocabulaire livré, ce qui est précisément le risque n° 2 ci-dessous.
Il reste régénéré par `cfg.buildCmd` à chaque construction : s'il apparaît
modifié dans un commit qui ne touche pas un composant, c'est un signal.

## Les polices

`.design-sync/polices/` contient Nunito Sans (variable) et Atma (400/600/700)
en `woff2`, plus le `polices.css` qui les déclare. Dans la vraie vie chaque
outil les charge par `next/font/google` ; ici elles sont servies en dur.

- **Sous-ensembles `latin` ET `latin-ext`, obligatoirement** : le `ā` de BāM,
  OLLā et Mārs Clūb est U+0101, il vit dans `latin-ext`. Sans lui les macrons
  de la maison tombent en police de secours — et le premier test visuel d'un
  aperçu, c'est justement une pastille « BāM ».
- Licence **SIL OFL 1.1** pour les deux familles : redistribuables.
- **Régénérer** : interroger `https://fonts.googleapis.com/css2?family=...`
  avec un `User-Agent` de navigateur récent (sinon Google sert du `ttf`), ne
  garder que les blocs `/* latin */` et `/* latin-ext */`, télécharger les
  `woff2`, réécrire les `url()` en relatif. Nunito Sans est **variable** : un
  seul fichier par sous-ensemble, avec `font-weight: 400 700` — ne pas
  redemander `wght@400;600;700`, Google renvoie alors trois fois le même
  fichier.

## Mise en route sur un clone neuf

```sh
npm ci                                    # + build tsc (prepare)
mkdir -p .ds-sync && cp -r <skill>/package-*.mjs <skill>/resync.mjs <skill>/lib <skill>/storybook .ds-sync/
echo '{"name":"ds-sync-deps","private":true}' > .ds-sync/package.json
(cd .ds-sync && npm i esbuild ts-morph @types/react react@19.2.8 react-dom@19.2.8 \
   tailwindcss @tailwindcss/cli && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright@1.56.0)
ln -sfn ../.ds-sync/node_modules .design-sync/node_modules   # ⚠ indispensable
```

- **Le lien `.design-sync/node_modules` n'est pas optionnel** : `entree.css`
  fait `@import "tailwindcss"`, résolu depuis le dossier du fichier CSS. Sans
  le lien : « Can't resolve 'tailwindcss' ». Il est gitignoré, donc à recréer
  à chaque clone.
- **Playwright 1.56.0 exactement** dans cet environnement : le Chromium en
  cache est le build **1194**, que seule cette version épingle (1.55 → 1187,
  1.57 → 1200). Une autre version échoue sur « Executable doesn't exist ».
  Si le cache change, `DS_CHROMIUM_PATH` force le chemin du binaire.
- **Sur le Mac de Roch (session du 11/09/2026)** : aucun Chromium Playwright
  en cache. On a installé `playwright` sans épingle
  (`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`, 1.63.0 ce jour-là) et fait tourner
  validate et capture sur le **Google Chrome installé** :
  `DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`.
  Aucun téléchargement, et les emojis y sortent en vraie couleur.
- npm bloque les scripts d'installation d'esbuild et de @parcel/watcher
  (`allow-scripts`) : sans conséquence, esbuild marche par son paquet de
  plateforme, et le CLI Tailwind n'a besoin du watcher qu'en `--watch`.
- Commandes : `cfg.buildCmd` (tsc + Tailwind) puis `package-build.mjs`, puis
  `package-validate.mjs`, puis `package-capture.mjs`. Ou `resync.mjs` qui
  enchaîne tout.

## Pièges rencontrés, et leur remède

- **Un commentaire ENTRE deux exports d'un aperçu fuit dans le bloc
  d'exemple précédent.** L'extracteur de `.prompt.md` prend tout depuis
  `export const X =` jusqu'au prochain `export const [A-Z]`. D'où la
  convention de ce dépôt : **toute la prose va dans un commentaire en tête de
  fichier, les exports se suivent nus.**
- **Un aperçu dont le texte rendu COMMENCE par « ⚠ » est lu comme une erreur
  attrapée** par `package-capture` (il teste `textContent.startsWith('⚠')`).
  Faux positif rencontré sur `Bandeau`. Ne jamais commencer une cellule par
  ce glyphe — le mettre plus loin dans la phrase.
- **Les groupes deviennent des noms de DOSSIER, tels quels, en minuscules.**
  D'où sept familles sans accent ni espace : `contexte`, `actions`, `cartes`,
  `messages`, `maisons`, `shifts`, `signes`. Un `Repères` aurait mis un
  accent dans un chemin de fichier — et ce dépôt a déjà une histoire de
  normalisation Unicode avec iCloud. Les groupes se posent par les entêtes
  `category:` de `.design-sync/docs/<Nom>.md`.
- **`readmeHeader` doit pointer sur un fichier qui existe** au moment de la
  construction : n'ajouter la clé qu'une fois `conventions.md` écrit.

## Avertissements de rendu connus

Ceux-ci sont légitimes et déjà arbitrés. Un avertissement **absent de cette
liste est nouveau** : le regarder, puis le corriger ou l'inscrire ici.

- **`CompteurSolari` — capture prise en pleine animation.** `package-capture`
  n'attend que les polices et les images, jamais un minuteur : les palettes
  du compteur roulent encore au moment de la photo. Ce n'est **pas** un
  défaut. Vérifié à part (playwright, 2,5 s d'attente) : les trois cellules
  se posent bien sur « 612 », « 12 » et « 57,9 ». À revérifier de la même
  façon si le composant change, plutôt que de croire la planche.
- **`Aide` — la carte ne peut pas s'ouvrir dans un rendu statique.** Elle
  s'ouvre au clic et se referme au moindre défilement (elle est en `fixed`).
  Les aperçus montrent donc le « ? » à sa place réelle, jamais la phrase
  dépliée.
- **`LisereLieux` / `PleineLargeur` — 6 px de haut.** C'est le composant
  entier, pas un rendu incomplet.
- **`BoutonFermer` — `cardMode: "column"`** dans `cfg.overrides` : la cellule
  `DansUnPanneau` débordait de sa case de grille (`[GRID_OVERFLOW]`).
- **Les emojis (⏸️ 🍴 🔑 🏡) sortent en glyphes de secours** dans le Chromium
  sans police emoji couleur du conteneur distant. Ils s'affichent
  normalement dans un navigateur réel — vérifié le 11/09/2026 sur le Chrome
  du Mac, où les planches les montrent en couleur.

## Risques — ce qui peut se périmer en silence

1. **`tailwind/compile.css` peut vieillir sans prévenir.** Il est compilé
   depuis `dist/`, donc **toute classe ajoutée à un composant sans
   recompilation arrive sans style**, sans erreur. `cfg.buildCmd` enchaîne
   `tsc` puis Tailwind précisément pour ça : le lancer à chaque
   resynchronisation, même si « rien n'a bougé ».
2. **`conventions.md` peut mentir.** Il énumère des classes, des composants
   et des jetons. Si un composant est retiré ou une famille d'utilitaires
   sortie de la liste `@source inline`, le fichier continue de les annoncer
   et l'agent de design écrira du vocabulaire qui ne résout pas — **du style
   silencieusement absent**. D'où
   **`node .design-sync/verifier-conventions.mjs`**, à rejouer après chaque
   construction : il confronte chaque nom annoncé au `_ds_bundle.js`, au
   `_ds_bundle.css` et à l'arbre `ds-bundle/components/`, et sort en 1 en
   nommant les manques. Il a déjà attrapé un vrai défaut : `col-span-1` à
   `col-span-6` étaient annoncés mais absents, parce que Tailwind n'étend pas
   une plage `{1..6}` mêlée à un littéral dans la même accolade.
3. **Les polices sont figées à la version Google du 11/09/2026.** Rien ne les
   met à jour ; rien ne casse non plus. Elles ne bougent que si quelqu'un les
   régénère.
4. **Le contenu des aperçus est de la fiction plausible** — prénoms (Franck,
   Camille, Inès), chiffres de Prime Cost, horaires de service. Rien n'en
   vient de la base. À corriger si Roch veut d'autres exemples, mais **aucune
   donnée réelle ne doit y entrer** : ces cartes sont lues par un agent et
   publiées dans un projet claude.ai.
5. **La version de Chromium en cache** (`/opt/pw-browsers`, build 1194)
   dépend de l'environnement d'exécution, pas du dépôt. Sur une autre
   machine, refaire l'appariement playwright ↔ build.
6. **L'état de vérification ne vit PAS dans git.** `.design-sync/.cache/` est
   ignoré ; ce qui rend les notes durables, c'est le `_ds_sync.json`
   **téléversé** dans le projet claude.ai. Il y est depuis le 11/09/2026 :
   une resynchronisation qui ne va pas le chercher (voir ci-dessous) renote
   les 65 cellules à partir de zéro, pour rien.

## Téléversement — fait le 11/09/2026

Projet Claude Design **« MarsClub Interface »**, épinglé dans `config.json` :
`d512a586-62af-46e6-92b1-1254970af9c1` —
https://claude.ai/design/p/d512a586-62af-46e6-92b1-1254970af9c1

Premier import depuis une session Claude Code interactive sur le Mac (la
session distante n'avait pas l'autorisation `/design-login`). 23 composants,
65 cellules renotées `good` sur ce Mac (les notes de la session distante,
gitignorées, n'avaient pas suivi), validate sans avertissement,
`verifier-conventions.mjs` en 0, 134 fichiers envoyés, ancre `_ds_sync.json`
en dernier.

**Resynchroniser** (après la mise en route sur un clone neuf) :

1. `/design-login` si la session n'a pas l'autorisation, puis `/design-sync`.
2. Rapatrier l'ancre : `DesignSync get_file _ds_sync.json` →
   `.design-sync/.cache/remote-sync.json`.
3. `DS_CHROMIUM_PATH=… node .ds-sync/resync.mjs --config .design-sync/config.json
   --node-modules ./.ds-sync/node_modules --entry ./dist/index.js --out ./ds-bundle
   --remote .design-sync/.cache/remote-sync.json`
4. `node .design-sync/verifier-conventions.mjs`, puis envoi atomique selon
   la skill (le `projectId` est épinglé : plus jamais de chemin incrémental).
