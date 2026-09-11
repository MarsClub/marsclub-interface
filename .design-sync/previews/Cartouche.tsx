/*
 * Les cellules de cet aperçu :
 *
 * - `FiltresDEnseigne` — le cas d'origine : le périmètre entier en sable,
 *   les deux maisons à leur couleur. L'état se dit par le CADRE, jamais par
 *   un aplat — un fond plein se lirait comme un bouton d'action, or un
 *   filtre n'agit sur rien : il ouvre ou ferme une vue.
 * - `FiltresEtAction` — les filtres à gauche, l'action de la zone (retirer
 *   les filtres) au même endroit, en `classeActionFiltre`.
 * - `Bascules` — le même cadre sert aux choix bornés : jours, personnes,
 *   variantes, allergènes. Sélectionner, c'est dire « c'est celui-là ».
 * - `DeuxGroupes` — ce que la cartouche dit vraiment : « ces boutons vont
 *   ensemble ». Elle a été renommée pour ça le 23/08/2026.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import {
  Cartouche,
  classeActionFiltre,
  classeBascule,
  classeFiltre,
  classeFiltreLieu,
  MAISON_FILTRE,
} from 'marsclub-interface'

export const FiltresDEnseigne = () => (
  <Cartouche>
    <a href="#" className={classeFiltreLieu('mc', true)}>{MAISON_FILTRE}</a>
    <a href="#" className={classeFiltreLieu('bam', false)}>BāM</a>
    <a href="#" className={classeFiltreLieu('olla', false)}>OLLā</a>
  </Cartouche>
)

export const FiltresEtAction = () => (
  <Cartouche>
    <a href="#" className={classeFiltre(false)}>Salle</a>
    <a href="#" className={classeFiltre(true)}>Cuisine</a>
    <a href="#" className={classeFiltre(false)}>Management</a>
    <a href="#" className={classeActionFiltre}>Tout afficher</a>
  </Cartouche>
)

export const Bascules = () => (
  <Cartouche>
    <button className={classeBascule(true)}>lun</button>
    <button className={classeBascule(true)}>mar</button>
    <button className={classeBascule(false)}>mer</button>
    <button className={classeBascule(false)}>jeu</button>
    <button className={classeBascule(true)}>ven</button>
    <button className={classeBascule(false)}>sam</button>
    <button className={classeBascule(false)}>dim</button>
  </Cartouche>
)

export const DeuxGroupes = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Cartouche>
      <a href="#" className={classeFiltreLieu('bam', true)}>BāM</a>
      <a href="#" className={classeFiltreLieu('olla', false)}>OLLā</a>
    </Cartouche>
    <Cartouche>
      <button className={classeFiltre(false)}>Depuis la semaine passée</button>
      <button className={classeFiltre(false)}>Depuis un gabarit</button>
    </Cartouche>
  </div>
)
