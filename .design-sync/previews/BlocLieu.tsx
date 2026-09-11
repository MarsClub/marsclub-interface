/*
 * Les cellules de cet aperçu :
 *
 * - `MatriceDuPlanning` — son cas d'origine : la cellule de lieu FUSIONNÉE
 *   sur plusieurs rangées de zone, avec le liseré bicolore entre les deux
 *   maisons. Le nom se lit une fois par bloc, jamais ligne à ligne.
 * - `LesDeuxMaisons` — les deux blocs nus, côte à côte.
 *
 * ⚠️ **Toujours à l'horizontale** (Roch, 05/09/2026 : « écriture verticale
 * interdite ») — même fusionnée sur plusieurs rangées, dans une colonne
 * étroite. C'est à la COLONNE d'être assez large pour « BāM » et « OLLā »
 * en toutes lettres, plus à cette cellule de pivoter.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BlocLieu, CLASSE_CARTE, LisereLieux } from 'marsclub-interface'

export const MatriceDuPlanning = () => (
  <div className={`max-w-2xl overflow-hidden ${CLASSE_CARTE}`}>
    <div className="grid grid-cols-4 gap-1 p-1 text-sm tabular-nums">
      <div className="row-span-2"><BlocLieu lieu="bam" className="h-full" /></div>
      <div className="px-2 py-1 font-semibold">Cuisine</div>
      <div className="px-2 py-1">11:30 – 15:30</div>
      <div className="px-2 py-1 text-right">4 h 00</div>
      <div className="px-2 py-1 font-semibold">Salle</div>
      <div className="px-2 py-1">18:30 – 00:30</div>
      <div className="px-2 py-1 text-right">6 h 00</div>
    </div>
    <LisereLieux />
    <div className="grid grid-cols-4 gap-1 p-1 text-sm tabular-nums">
      <div className="row-span-2"><BlocLieu lieu="olla" className="h-full" /></div>
      <div className="px-2 py-1 font-semibold">Cuisine</div>
      <div className="px-2 py-1">10:30 – 15:30</div>
      <div className="px-2 py-1 text-right">5 h 00</div>
      <div className="px-2 py-1 font-semibold">Salle</div>
      <div className="px-2 py-1">18:00 – 23:30</div>
      <div className="px-2 py-1 text-right">5 h 30</div>
    </div>
  </div>
)

export const LesDeuxMaisons = () => (
  <div className="flex w-64 flex-col gap-2">
    <BlocLieu lieu="bam" />
    <BlocLieu lieu="olla" />
  </div>
)
