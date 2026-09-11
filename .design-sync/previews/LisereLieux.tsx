/*
 * Les cellules de cet aperçu :
 *
 * - `EntreDeuxBlocs` — son seul vrai usage : la couture entre le bloc BāM et
 *   le bloc OLLā d'une matrice, sur toute la largeur. Deux aplats solides
 *   empilés — jamais un dégradé.
 * - `PleineLargeur` — le liseré seul, pour le voir : 3 px de jaune sur 3 px
 *   de vert.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BlocLieu, CLASSE_CARTE, LisereLieux } from 'marsclub-interface'

export const EntreDeuxBlocs = () => (
  <div className={`max-w-md overflow-hidden ${CLASSE_CARTE}`}>
    <div className="flex items-center gap-2 p-2 text-sm tabular-nums">
      <div className="w-20"><BlocLieu lieu="bam" /></div>
      <span className="font-semibold">140 h 30</span>
      <span className="ml-auto text-charbon/60">4 personnes</span>
    </div>
    <LisereLieux />
    <div className="flex items-center gap-2 p-2 text-sm tabular-nums">
      <div className="w-20"><BlocLieu lieu="olla" /></div>
      <span className="font-semibold">118 h 00</span>
      <span className="ml-auto text-charbon/60">3 personnes</span>
    </div>
  </div>
)

export const PleineLargeur = () => (
  <div className="max-w-md">
    <LisereLieux />
  </div>
)
