/*
 * Les cellules de cet aperçu :
 *
 * - `MesShifts` — la liste telle qu'elle s'affiche : pastille de la maison,
 *   horaire, durée, puis les icônes APRÈS le décompte, l'état à droite.
 * - `AvecBoutonADroite` — la Pointeuse : après l'état, un bouton compact.
 * - `LesTroisEtats` — planifié, en cours, réalisé.
 *
 * ⚠️ **Une ligne n'est JAMAIS colorée** (Roch, 07/09/2026) : la cellule
 * colorée de la grille (`couleurShift`) appartient à la vue globale, pas à
 * une liste. Ici la couleur ne vit que dans la pastille du nom de la maison.
 *
 * ⚠️ La zone ne se dit pas — les gens savent où ils travaillent.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_BOUTON_COMPACT, CLASSE_CARTE, LigneShift } from 'marsclub-interface'

export const MesShifts = () => (
  <div className={`max-w-xl px-3 py-2 ${CLASSE_CARTE}`}>
    <LigneShift lieu="bam" debut="11:30" fin="15:30" duree="4 h 00" icones="🍴" etat="réalisé" />
    <LigneShift lieu="bam" debut="18:30" fin="00:30" duree="6 h 00" icones="⏸️ 🍴" etat="planifié" />
    <LigneShift lieu="olla" debut="10:30" fin="15:30" duree="5 h 00" icones="⏸️ 🍴" etat="planifié" />
  </div>
)

export const AvecBoutonADroite = () => (
  <div className={`max-w-xl px-3 py-2 ${CLASSE_CARTE}`}>
    <LigneShift
      lieu="olla"
      debut="18:00"
      fin="23:30"
      duree="5 h 30"
      icones="⏸️ 🍴"
      etat="en cours"
      droite={<button className={`ml-2 ${CLASSE_BOUTON_COMPACT}`}>Pointer la sortie</button>}
    />
    <LigneShift
      lieu="bam"
      debut="11:30"
      fin="15:30"
      duree="4 h 00"
      icones="🍴"
      etat="réalisé"
      droite={<button className={`ml-2 ${CLASSE_BOUTON_COMPACT}`}>Corriger</button>}
    />
  </div>
)

export const LesTroisEtats = () => (
  <div className={`max-w-xl px-3 py-2 ${CLASSE_CARTE}`}>
    <LigneShift lieu="bam" debut="11:30" fin="15:30" duree="4 h 00" etat="planifié" />
    <LigneShift lieu="bam" debut="18:30" fin="00:30" duree="6 h 00" etat="en cours" />
    <LigneShift lieu="olla" debut="10:30" fin="15:30" duree="5 h 00" etat="réalisé" />
  </div>
)
