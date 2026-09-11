# marsclub-interface — comment construire avec

Les éléments d'interface communs aux outils internes de **Mārs Clūb** (Hora,
Victus, Fama). Français partout : noms de composants, props, contenus.

## Montage

**Aucun provider, aucun contexte, aucun thème à envelopper.** Les composants
sont des fonctions React pures : on les prend dans `window.MarsclubInterface`
et on les pose. Ce qui est indispensable, c'est **`styles.css`** — il porte
les polices (Nunito Sans, Atma) et tout le CSS des composants. Sans lui, tout
arrive sans style et sans erreur.

`body` est déjà posé par `styles.css` : fond `--color-creme`, texte
`--color-charbon`, Nunito Sans. Ne pas le redéfinir.

## L'idiome : classes Tailwind, mais d'abord celles du paquet

Le paquet exporte **ses classes en même temps que ses composants**. Toujours
préférer la constante à une chaîne d'utilitaires retapée — c'est la raison
d'être du paquet, et une recopie diverge.

| Besoin | À utiliser | Règle |
|---|---|---|
| Un bouton | `CLASSE_BOUTON`, `_COMPACT` (dans une ligne), `_TELEPHONE` (pleine largeur) | charbon sur blanc, cadre `charbon/30` ; le survol le REMPLIT. Il n'y a qu'un bouton. `CLASSE_PRINCIPAL` / `CLASSE_TERTIAIRE` / `CLASSE_FERMER` en sont des alias |
| Un état acquis / en cours | `CLASSE_ACQUIS`, `CLASSE_EN_COURS`, + `_PETIT` pour une bande de titre | aplat sable (acquis) ou cadre sable sans fond (en cours). **Non cliquable** — ce qui se clique est un bouton |
| Un filtre, une bascule | `classeFiltre(actif)`, `classeFiltreLieu(lieu, actif)`, `classeBascule(choisi)`, `classeActionFiltre`, dans un `<Cartouche>` | l'état se dit par un **cadre charbon de 3 px**, JAMAIS par un aplat |
| Un onglet | `classeOnglet(actif)` ou `<Onglets>` | Atma souligné ; rien ne s'affiche sous deux onglets |
| Une carte, un chevron | `CLASSE_CARTE`, `CLASSE_NAV` | |
| Un champ, son intitulé | `CLASSE_CHAMP` + `<Libelle>` ; `CLASSE_INTITULE` pour un bloc | l'intitulé va AU-DESSUS |
| Un message | `<Bandeau ton="refus\|vigilance\|ok">`, `classeBandeau(ton)`, `<Vide>` | trois tons, pas un de plus |
| Une valeur hors seuil | `CLASSE_HORS_REPERE` | ⚠ rouge devant, en gras |
| Un vide, un en-tête de zone | `CLASSE_VIDE`, `CLASSE_ZONE` | |
| Net au-dessus d'une carte estompée | `CLASSE_TENU`, `CLASSE_TENU_SI_OUVERT` | |
| Nommer une maison | `<PastilleLieu lieu="bam\|olla\|mc">`, `LIBELLE_LIEU`, `LIBELLE_MAISON`, `classeAplatLieu`, `COULEUR_LIEU` (pour un `style=`, un PDF, un email) | |
| Dériver un shift | `libelleZone(zone)`, `libelleShift(lieu, zone)`, `couleurShift(lieu, zone)` | jamais composé à la main |

## La palette — et ce qu'elle interdit

Cinq couleurs, disponibles en variables CSS et en utilitaires :

| Jeton | Valeur | Emploi |
|---|---|---|
| `--color-charbon` | `#373336` | texte, cadres, structure |
| `--color-sable` | `#d6cdaa` | **la couleur de Mārs Clūb** : bandes de titre, états acquis, séparateurs |
| `--color-creme` | `#faf7f0` | fond général |
| `--color-jaune-bam` | `#ffde59` | BāM |
| `--color-vert-olla` | `#78e762` | OLLā |

- **Jaune et vert n'existent qu'en APLAT DE FOND** (`bg-jaune-bam`,
  `bg-vert-olla`). Jamais en texte, jamais en bordure : lisibilité en plein
  soleil, et les PDF s'impriment. Le texte sur aplat coloré reste charbon.
- **Le rouge est la seule teinte hors palette** — `text-red-700`,
  `border-red-600` — et il ne veut dire qu'une chose : attention. Pas de
  vert, pas d'orange, pas de bleu.
- La hiérarchie se dit par **la place** (le geste qui engage en dernier à
  droite), **l'icône** (lui seul en porte une) et **la taille** — jamais par
  la couleur.

## Typographie

- `font-sans` (Nunito Sans) porte tout le labeur : grille, chiffres,
  formulaires. C'est le défaut de `body`.
- `font-display` (Atma) est réservée aux **titres et aux chiffres qu'on vient
  lire**. Jamais dans un tableau — Atma n'a pas de chasse fixe.
- `tabular-nums` sur tout horaire, durée et total.

## Les utilitaires de charpente disponibles

Le CSS livré est compilé, pas complet : seules ces familles existent pour
votre propre mise en page (tout le reste est purgé et n'aura **aucun effet**).

`block` `inline-block` `flex` `inline-flex` `grid` `hidden` (+ `sm:` `md:`
`lg:`) · `flex-row` `flex-col` `flex-wrap` `flex-1` · `items-*`
`justify-*` `self-*` `grow` `shrink-0` · `grid-cols-1..6` (+ `md:`)
`col-span-*` · `gap-*` `gap-x-*` `gap-y-*` · `p-* px-* py-* pt-* pr-* pb-*
pl-*` · `m-* mx-auto ml-auto` · `w-full w-fit w-1/2 w-1/3 h-full` ·
`max-w-sm..7xl` `min-w-0` · `text-xs..5xl` (+ `md:`) · `font-normal`
`font-medium` `font-semibold` `font-bold` · `text-left/center/right` ·
`leading-*` `tracking-*` `uppercase` `truncate` `whitespace-nowrap`
`tabular-nums` `sr-only` · `bg-{charbon,sable,creme,jaune-bam,vert-olla,white,transparent}`
et `bg-{charbon,sable,creme,white}/10..90` · `text-{charbon,creme,white}` et
`text-charbon/30..90` · `border` `border-2` `border-4` `border-{t,r,b,l}`
`border-{charbon,sable}` et `/10..70` · `rounded` `-md` `-lg` `-xl` `-2xl`
`-full` · `relative` `absolute` `fixed` `inset-0` `z-0..50` ·
`overflow-hidden` `overflow-x-auto` · `shadow-sm/-md/-lg` `opacity-*` ·
`transition-colors` `cursor-pointer` `pointer-events-none`.

Un besoin hors de cette liste se règle par un `style=` en ligne, ou en
ajoutant la famille à `.design-sync/tailwind/entree.css` **et à ce fichier**.

## Un écran type

```jsx
const { EnTete, Cartouche, CarteSection, Kpi, PastilleLieu,
        classeFiltreLieu, MAISON_FILTRE } = window.MarsclubInterface

<div className="mx-auto max-w-5xl p-4">
  <EnTete badge="S37" libelle="8 – 14 septembre 2026"
          precedent="/s36" suivant="/s38"
          present={{ href: '/', libelle: 'Cette semaine' }}>
    <Cartouche>
      <a href="/" className={classeFiltreLieu('mc', true)}>{MAISON_FILTRE}</a>
      <a href="/bam" className={classeFiltreLieu('bam', false)}>BāM</a>
      <a href="/olla" className={classeFiltreLieu('olla', false)}>OLLā</a>
    </Cartouche>
  </EnTete>

  <div className="my-4 grid grid-cols-2 gap-2 md:grid-cols-4">
    <Kpi libelle="Ratio personnel" valeur="28,4 %" detail="seuil 30 %" echo="OLLā 31,2 %" />
    <Kpi libelle="Prime Cost" valeur="64,7 %" detail="seuil 60 %" alerte />
  </div>

  <CarteSection titre="Heures par zone" sous="d'après les shifts validés">
    <table className="w-full text-sm tabular-nums">
      <tbody><tr className="border-b border-sable">
        <td className="px-3 py-1.5"><PastilleLieu lieu="bam" /></td>
        <td className="px-3 py-1.5 font-semibold">Cuisine</td>
        <td className="px-3 py-1.5 text-right">62 h 00</td>
      </tr></tbody>
    </table>
  </CarteSection>
</div>
```

## Où est la vérité

- `styles.css` et ce qu'il importe : la palette, les polices, tout le CSS.
- `components/<famille>/<Nom>/<Nom>.prompt.md` : pour chaque composant, **sa
  doctrine** (pourquoi il existe, ce qu'il interdit), ses props et des
  exemples réels. À lire avant de s'en servir.
- `guidelines/README.md` : la charte entière — « une couleur, un sens », les
  trois règles de la barre de filtres, les deux formes de fermer et retirer.

## Deux règles d'écriture

- **La marque garde ses macrons : « Mārs Clūb », « BāM », « OLLā ».** La seule
  exception est l'abréviation interne `MAISON_FILTRE` (« 🏡 MC »), réservée
  aux filtres et aux lignes de total. Partout où quelqu'un d'autre lit — un
  email, un PDF, une page publique — on écrit la marque en entier.
- **Un outil qui redéfinit localement un motif de cette charte a tort**, même
  à l'identique. C'est la copie qui a produit, dans Hora, six cartes KPI, six
  pastilles et onze gabarits de champ divergents. Un besoin non couvert se
  discute dans le paquet.
