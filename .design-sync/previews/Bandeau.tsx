/*
 * Les cellules de cet aperçu :
 *
 * - `LesTroisTons` — les trois ensemble : c'est ainsi qu'on voit que le poids
 *   se dit par la FORME et jamais par une seconde couleur. `refus` et
 *   `vigilance` rendent le même bandeau ; ils restent distincts parce que le
 *   message n'est pas le même, et qu'un `role="alert"` ne va qu'au refus.
 * - `Refus` — ce qui empêche d'avancer, et ce qu'il faut corriger.
 * - `Ok` — c'est fait, et ce que ça implique. Aplat sable, jamais de vert.
 * - `DansUneCarte` — à l'échelle d'une carte plutôt que d'une page : même
 *   forme, c'est tout l'intérêt.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { Bandeau } from 'marsclub-interface'

export const LesTroisTons = () => (
  <div className="flex max-w-2xl flex-col gap-2">
    <Bandeau ton="refus">
      Publication refusée : deux shifts de Franck se chevauchent le mardi 9 septembre.
    </Bandeau>
    <Bandeau ton="vigilance">
      ⚠ Trois prix de matière datent de plus de six mois — la matière théorique est à prendre avec précaution.
    </Bandeau>
    <Bandeau ton="ok">
      Semaine S37 publiée. L'équipe a reçu le planning ; le délai de prévenance court depuis ce matin.
    </Bandeau>
  </div>
)

export const Refus = () => (
  <div className="max-w-2xl">
    <Bandeau ton="refus">
      Dépublication impossible : le mois d'août est clôturé. Rouvrir la clôture avant de modifier un shift réalisé.
    </Bandeau>
  </div>
)

export const Ok = () => (
  <div className="max-w-2xl">
    <Bandeau ton="ok">
      Clôture d'août archivée. Le décompte légal est figé : 214 repas, 486 h de journée, 612 h 30 de soirée.
    </Bandeau>
  </div>
)

export const DansUneCarte = () => (
  <div className="max-w-sm rounded-xl border-2 border-sable bg-white/50 p-3">
    <Bandeau ton="vigilance">Aucun pointage depuis jeudi — trois shifts attendent leur validation.</Bandeau>
  </div>
)
