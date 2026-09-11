/*
 * Les cellules de cet aperçu :
 *
 * - `MaSemaine` — le cas d'origine (Roch, 07/09/2026 : « regrouper les
 *   shifts par jour, même si deux lieux ») : le nom du jour en titre, son
 *   total à droite en petit, ses lignes dessous, un trait sable entre deux
 *   jours.
 * - `UnJourDeuxMaisons` — le cas qui a fait naître le regroupement : deux
 *   shifts le même jour, dans les deux maisons.
 *
 * ⚠️ Le titre arrive DÉJÀ composé (« Aujourd'hui · mardi 8 septembre ») :
 * pas de `capitalize`, une capitale par mot le défigurerait.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CarteSection, Journee, LigneShift } from 'marsclub-interface'

export const MaSemaine = () => (
  <div className="max-w-xl">
    <CarteSection titre="Mes shifts" centre="8 – 14 septembre" droite={<span className="text-xs font-semibold tabular-nums">21 h 30</span>}>
      <Journee titre="Aujourd’hui · mardi 8 septembre" droite="6 h 00">
        <LigneShift lieu="bam" debut="18:30" fin="00:30" duree="6 h 00" icones="⏸️ 🍴" etat="en cours" />
      </Journee>
      <Journee titre="mercredi 9 septembre" droite="9 h 30">
        <LigneShift lieu="bam" debut="11:30" fin="15:30" duree="4 h 00" icones="🍴" etat="planifié" />
        <LigneShift lieu="bam" debut="18:30" fin="00:00" duree="5 h 30" icones="⏸️ 🍴" etat="planifié" />
      </Journee>
      <Journee titre="vendredi 11 septembre" droite="6 h 00">
        <LigneShift lieu="olla" debut="18:00" fin="00:00" duree="6 h 00" icones="⏸️ 🍴" etat="planifié" />
      </Journee>
    </CarteSection>
  </div>
)

export const UnJourDeuxMaisons = () => (
  <div className="max-w-xl">
    <Journee titre="jeudi 10 septembre" droite="9 h 00">
      <LigneShift lieu="bam" debut="11:30" fin="15:30" duree="4 h 00" icones="🍴" etat="planifié" />
      <LigneShift lieu="olla" debut="18:30" fin="23:30" duree="5 h 00" icones="⏸️ 🍴" etat="planifié" />
    </Journee>
  </div>
)
