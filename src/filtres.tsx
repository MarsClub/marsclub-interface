/**
 * La barre de filtres, en un seul endroit (20/08/2026).
 *
 * Elle s'était mise à diverger DANS Hora : quatre écrans définissaient leur
 * propre `boutonFiltre`, avec quatre variantes de bordure et de fond. Le
 * remède est monté d'un cran (Roch, 20/08/2026) : ces éléments sont
 * **communs à tous les outils internes**, au même titre que la garde d'accès
 * et la sitemap. Un filtre doit se manœuvrer pareil dans Hora, dans Fama et
 * dans les suivants — sans quoi chaque outil réapprend à son utilisateur ce
 * qu'il savait déjà.
 *
 * Trois règles, demandées par Roch le 20/08/2026 :
 *
 * 1. **L'état se dit par le cadre, jamais par un aplat.** Un fond plein se
 *    lit comme un bouton d'action, or un filtre n'agit sur rien : il ouvre
 *    ou ferme une vue. Le cadre est épais dans les deux états pour que les
 *    hauteurs s'alignent ; seule sa couleur change.
 * 2. **Le cadre actif doit se voir.** Le liseré d'un pixel qu'on avait ne se
 *    distinguait pas de l'inactif.
 * 3. **Les filtres forment une zone**, encadrée d'un liseré plutôt que bornée
 *    par deux traits verticaux : on voit d'un coup où ils commencent et où
 *    ils finissent, sans relier deux repères distants du regard.
 *
 * Les enseignes gardent leur couleur de marque — c'est le repère le plus
 * rapide de l'outil, et il vaut sur tous les écrans.
 */

export type LieuFiltre = 'bam' | 'olla'

/** Le signal d'état, commun à tous les filtres. */
export const cadreFiltre = (actif: boolean) =>
  actif ? 'border-2 border-charbon' : 'border-2 border-charbon/15 hover:border-charbon/40'

/** Un filtre ordinaire : Salle, Cuisine, Personne, Mārs Clūb… */
export const classeFiltre = (actif: boolean) =>
  `rounded-lg bg-white px-2.5 py-1 font-semibold ${cadreFiltre(actif)}`

/** Un filtre d'enseigne, qui porte sa couleur. */
export const classeFiltreLieu = (lieu: LieuFiltre, actif: boolean) =>
  `rounded-lg px-2.5 py-1 font-bold ${lieu === 'bam' ? 'bg-jaune-bam' : 'bg-vert-olla'} ${cadreFiltre(actif)}`

/** Une action DANS la barre de filtres — retirer les filtres, par exemple. */
export const classeActionFiltre =
  'rounded-lg border-2 border-charbon/15 bg-white px-2 py-1 font-semibold hover:border-charbon'

/** La zone qui les contient. */
/**
 * Un groupe encadré de petites commandes.
 *
 * Renommée depuis `ZoneFiltres` le 23/08/2026 : le cadre ne dit pas
 * « filtres », il dit « ces boutons vont ensemble ». Hora s'en sert pour les
 * filtres, pour les deux façons de créer, et pour les deux publications —
 * trois groupes qu'on lit d'un coup au lieu d'une file de boutons dont on ne
 * sait plus lequel appartient à quoi.
 */
export function Cartouche({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-xl border-2 border-sable bg-white/50 px-2 py-1 text-sm">
      {children}
    </div>
  )
}
