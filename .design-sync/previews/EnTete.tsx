/*
 * Les cellules de cet aperçu :
 *
 * - `SemaineComplete` — l'ordre de la charte, en entier : badge, libellé,
 *   chevrons, retour au présent, puis la cartouche de filtres.
 * - `MoisSansRetour` — on est déjà au présent : `present` vaut `null` et le
 *   bouton disparaît, les chevrons restent.
 * - `Compact` — pour un espace étroit (en-tête de téléphone, ligne fusionnée
 *   avec un menu) : un cran de taille en moins, plus de retour à la ligne.
 * - `SansBadge` — le libellé seul, quand la période n'a pas de nom court.
 *
 * ⚠️ Ce n'est jamais un titre de page : le rail dit où l'on est. Le libellé
 * est le CONTEXTE — une plage de dates, un mois.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { Cartouche, EnTete, classeFiltre, classeFiltreLieu, MAISON_FILTRE } from 'marsclub-interface'

export const SemaineComplete = () => (
  <EnTete
    badge="S37"
    libelle="8 – 14 septembre 2026"
    precedent="#s36"
    suivant="#s38"
    present={{ href: '#', libelle: 'Cette semaine' }}
  >
    <Cartouche>
      <a href="#" className={classeFiltreLieu('mc', true)}>{MAISON_FILTRE}</a>
      <a href="#" className={classeFiltreLieu('bam', false)}>BāM</a>
      <a href="#" className={classeFiltreLieu('olla', false)}>OLLā</a>
    </Cartouche>
  </EnTete>
)

export const MoisSansRetour = () => (
  <EnTete badge="Août 2026" libelle="Clôture mensuelle" precedent="#juillet" suivant="#septembre" present={null}>
    <Cartouche>
      <a href="#" className={classeFiltre(true)}>Salle</a>
      <a href="#" className={classeFiltre(false)}>Cuisine</a>
    </Cartouche>
  </EnTete>
)

export const Compact = () => (
  <div className="max-w-md">
    <EnTete
      compact
      badge="S37"
      libelle="8 – 14 septembre"
      precedent="#s36"
      suivant="#s38"
      present={{ href: '#', libelle: 'Auj.' }}
    />
  </div>
)

export const SansBadge = () => (
  <EnTete libelle="30 derniers jours" precedent="#avant" suivant="#apres" present={{ href: '#', libelle: 'Aujourd’hui' }} />
)
