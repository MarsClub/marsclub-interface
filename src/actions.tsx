import { CLASSE_FERMER } from './boutons.js'

/**
 * Les poids d'action de la charte (§3), en classes — un écran se lit par ses
 * boutons, et quatre poids ne se mélangent pas. Hora en avait six gabarits
 * de « principal » et trois de « tertiaire » (revue du 04/09/2026).
 *
 * | Poids       | Usage                                           |
 * |-------------|-------------------------------------------------|
 * | principal   | fait avancer : créer, valider, publier, envoyer |
 * | acquis      | un état réversible : publié ✓, validé ✓          |
 * | tertiaire   | naviguer, fermer, modifier, exporter            |
 * | vide        | à pourvoir, non renseigné                       |
 *
 * **Un seul principal par zone.** Le destructif est un tertiaire isolé à
 * gauche de la barre — jamais un aplat rouge.
 */
export const CLASSE_PRINCIPAL = 'rounded-lg bg-charbon px-4 py-1.5 text-sm font-semibold text-creme'
export const CLASSE_ACQUIS = 'rounded-lg bg-sable px-4 py-1.5 text-sm font-semibold text-charbon'
/** Tertiaire = la forme de « Fermer » : naviguer, modifier, exporter. */
export const CLASSE_TERTIAIRE = CLASSE_FERMER
export const CLASSE_VIDE =
  'rounded-lg border border-dashed border-charbon/40 bg-white px-3 py-1.5 text-sm font-semibold text-charbon/70'

/** Les chevrons ‹ › et le retour au présent d'un en-tête daté. */
export const CLASSE_NAV = 'rounded-lg border border-charbon/30 bg-white px-2.5 py-1 font-semibold hover:border-charbon'

/**
 * La barre d'actions d'un formulaire : trait sable au-dessus, le destructif
 * (ou « Dupliquer ») à GAUCHE, Fermer et l'action principale à DROITE.
 * `gauche` reste isolé par un espace : l'écart physique protège du faux clic.
 */
export function BarreActions({ gauche, children }: { gauche?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 border-t-2 border-sable pt-3">
      {gauche}
      <div className="grow" />
      {children}
    </div>
  )
}
