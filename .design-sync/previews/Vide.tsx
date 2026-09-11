/*
 * Les cellules de cet aperçu :
 *
 * - `DansUneCarte` — sa place réelle : là où une liste aurait dû être. Un
 *   état vide qui PARLE — il dit quoi faire, ou pourquoi c'est vide.
 * - `PhrasesUtiles` — trois vides du vrai outil, à la file. Aucun ne dit
 *   « Aucun résultat ».
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CarteSection, CLASSE_CARTE, Vide } from 'marsclub-interface'

export const DansUneCarte = () => (
  <div className="max-w-xl">
    <CarteSection titre="Propositions" sous="échanges de shifts entre collègues">
      <Vide>Aucune proposition en attente. Une proposition apparaît ici dès qu'un collègue demande un échange.</Vide>
    </CarteSection>
  </div>
)

export const PhrasesUtiles = () => (
  <div className="flex max-w-xl flex-col gap-2">
    <div className={CLASSE_CARTE}>
      <Vide>Rien à pointer aujourd'hui — vous n'avez pas de shift.</Vide>
    </div>
    <div className={CLASSE_CARTE}>
      <Vide>La semaine S38 n'est pas encore construite. Partir de la semaine passée ou d'un gabarit.</Vide>
    </div>
    <div className={CLASSE_CARTE}>
      <Vide>Aucune indisponibilité posée. Les congés et absences restent dans Payfit.</Vide>
    </div>
  </div>
)
