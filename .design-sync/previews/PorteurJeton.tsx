/*
 * Les cellules de cet aperçu :
 *
 * - `DansUnRail` — la variante `rail` : bloc encadré et centré, pour une
 *   colonne étroite. Sa place d'origine, en tête du menu latéral.
 * - `EnLigne` — la variante `ligne` : inline et sans bordure, pour une barre
 *   du haut ou un pied de panneau.
 * - `LesDeuxVariantes` — côte à côte. Hora avait fini par réécrire
 *   l'affichage à la main à deux endroits, faute d'une variante : trois
 *   rendus pour une seule information, exactement ce que ce paquet existe
 *   pour empêcher.
 *
 * ⚠️ **Il est permanent, et ce n'est pas un menu.** Nos outils s'ouvrent par
 * un lien personnel, jamais par un mot de passe : on suit le lien d'un
 * collègue sans s'en apercevoir, et on agit sous son nom. Roch l'a vécu. Un
 * écran qui ne dit pas au nom de qui il agit laisse cette faute invisible.
 * Il ne se clique pas et n'ouvre rien — changer de porteur se fait en
 * suivant son propre lien.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_INTITULE, classeOnglet, PorteurJeton } from 'marsclub-interface'

export const DansUnRail = () => (
  <div className="w-48 rounded-xl border-2 border-sable bg-white/50 p-3">
    <p className="mb-2 font-display text-lg font-semibold">Hora</p>
    <PorteurJeton prenom="Franck" />
    <nav className="flex flex-col gap-2 text-sm">
      <a href="#" className="font-semibold">Planning</a>
      <a href="#" className="text-charbon/60">Pointeuse</a>
      <a href="#" className="text-charbon/60">Propositions</a>
      <a href="#" className="text-charbon/60">Indisponibilités</a>
    </nav>
  </div>
)

export const EnLigne = () => (
  <div className="flex max-w-lg items-center gap-4 border-b border-sable pb-2">
    <a href="#" className={classeOnglet(true)}>Planning</a>
    <a href="#" className={classeOnglet(false)}>Pointeuse</a>
    <span className="ml-auto"><PorteurJeton prenom="Camille" variante="ligne" /></span>
  </div>
)

export const LesDeuxVariantes = () => (
  <div className="flex flex-wrap items-start gap-6">
    <div className="w-40">
      <div className={CLASSE_INTITULE}>rail</div>
      <PorteurJeton prenom="Franck" />
    </div>
    <div>
      <div className={CLASSE_INTITULE}>ligne</div>
      <div className="mt-1"><PorteurJeton prenom="Camille" variante="ligne" /></div>
    </div>
  </div>
)
