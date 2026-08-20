# marsclub-interface

Les **éléments d'interface communs** aux outils internes de Mārs Clūb — Hora,
Fama, Locus et les suivants.

## Pourquoi ce dépôt existe

Même raison que [`marsclub-acces`](https://github.com/MarsClub/marsclub-acces),
appliquée à l'ergonomie plutôt qu'aux droits : **ce qui est recopié diverge.**

Dans Hora, quatre écrans avaient chacun leur propre `boutonFiltre`, avec quatre
variantes de bordure et de fond. Personne ne l'avait décidé — c'est ce que
produit la copie. Résultat : un filtre actif ne se signalait pas de la même
façon d'un écran à l'autre, et sur l'un d'eux il ressemblait à un bouton
d'action.

Un filtre doit se manœuvrer pareil partout. Sinon chaque outil réapprend à son
utilisateur ce qu'il savait déjà.

## Ce qu'il contient

- **La palette** (`theme.css`) — charbon, sable, crème, jaune BāM, vert OLLā.
  Elle vient du site : ne jamais inventer de couleur.
- **La barre de filtres** — `ZoneFiltres`, `classeFiltre`, `classeFiltreLieu`,
  `classeActionFiltre`.

## Les trois règles de la barre de filtres

Arbitrages Roch du 20/08/2026 :

1. **L'état se dit par le cadre, jamais par un aplat.** Un fond plein se lit
   comme un bouton d'action, or un filtre n'agit sur rien : il ouvre ou ferme
   une vue.
2. **Le cadre actif doit se voir.** Un liseré d'un pixel ne se distingue pas de
   l'inactif. Le cadre est épais dans les deux états pour que les hauteurs
   s'alignent ; seule sa couleur change.
3. **Les filtres forment une zone**, encadrée d'un liseré plutôt que bornée par
   deux traits verticaux : on voit d'un coup où ils commencent et où ils
   finissent.

Et une règle de place : **les filtres à gauche, la droite aux actions.**

Les enseignes gardent leur couleur de marque — c'est le repère le plus rapide
de l'outil, et il vaut sur tous les écrans.

## Installation

```
npm install github:MarsClub/marsclub-interface
```

Puis, dans le CSS global de l'outil :

```css
@import "tailwindcss";
@import "marsclub-interface/theme.css";
@source "../../node_modules/marsclub-interface/dist";
```

⚠️ **La ligne `@source` n'est pas optionnelle.** Tailwind ne scanne pas
`node_modules` : sans elle, les classes des composants partagés sont purgées et
les filtres arrivent **sans style, sans la moindre erreur**. C'est une panne
silencieuse, donc à vérifier à l'œil la première fois.

## Usage

```tsx
import { ZoneFiltres, classeFiltre, classeFiltreLieu } from 'marsclub-interface'

<ZoneFiltres>
  <Link href={…} className={classeFiltre(perimetre === null)}>Mārs Clūb</Link>
  <Link href={…} className={classeFiltreLieu('bam', perimetre === 'bam')}>BāM</Link>
  <Link href={…} className={classeFiltreLieu('olla', perimetre === 'olla')}>OLLā</Link>
</ZoneFiltres>
```

## Ce qu'il ne faut jamais faire

**Recopier ces classes dans un outil.** C'est exactement ce qui a produit les
quatre variantes qu'on vient de supprimer. Un besoin qui n'entre pas dans la
charte se discute ici, et profite alors à tous les outils.

## Ce qui viendra ici

Les mêmes candidats, déjà mutualisés à l'intérieur d'Hora et qui méritent de
monter d'un cran : **BoutonFermer** et **CroixRetirer** (fermer est toujours un
bouton bordé, supprimer toujours une croix discrète), et **BoutonConfirme**,
qui demande confirmation avant un geste qui sort de l'outil.
