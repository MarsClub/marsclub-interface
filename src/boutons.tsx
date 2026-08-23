/**
 * Les gestes de sortie et de retrait, en un seul endroit.
 *
 * Ils s'étaient mis à diverger dans Hora : quatre panneaux fermaient par un
 * bouton blanc bordé, un cinquième par un lien souligné qu'on ne voyait pas,
 * et des croix servaient ailleurs à supprimer. Fermer et supprimer se
 * ressemblaient assez pour hésiter — or l'un est sans conséquence et l'autre
 * non.
 *
 * La charte, remontée au niveau de tous les outils le 20/08/2026 :
 * **fermer est toujours un bouton bordé qui dit « Fermer »**, **retirer est
 * toujours une croix discrète**, et la croix porte toujours son intitulé au
 * survol — le geste est petit, sa conséquence ne l'est pas forcément.
 *
 * **Et il a toujours la même place** (Roch, 23/08/2026) : dans un panneau,
 * **« Fermer » va en HAUT À DROITE, les gestes qui changent quelque chose en
 * BAS À DROITE**. Hora les avait des deux façons — deux panneaux fermaient par
 * le haut, deux par le bas, entre « Supprimer » et « Enregistrer ». On fermait
 * donc au milieu de deux boutons qui, eux, engagent. Un même geste se fait au
 * même endroit partout, sinon on lit l'écran au lieu de l'utiliser.
 */

/** La classe d'un bouton de sortie, pour les cas qui n'utilisent pas le composant. */
export const CLASSE_FERMER =
  'rounded-lg border border-charbon/30 bg-white px-3 py-1.5 text-sm font-semibold hover:border-charbon'

/**
 * Quitter un panneau sans rien changer.
 *
 * `Lien` reste **injectable** : le paquet ne dépend pas de Next, sans quoi il
 * l'imposerait à tout outil futur qui n'en voudrait pas. Une application Next
 * passe son `Link` et garde la navigation côté client ; les autres laissent
 * le `<a>` par défaut.
 */
export function BoutonFermer({
  href,
  className = '',
  Lien = 'a',
}: {
  href: string
  className?: string
  Lien?: React.ElementType
}) {
  return (
    <Lien href={href} className={`${CLASSE_FERMER} ${className}`.trim()}>
      Fermer
    </Lien>
  )
}

/**
 * Retirer quelque chose — une note, un filtre. La croix reste discrète et
 * porte toujours un intitulé au survol.
 */
export function CroixRetirer({ titre }: { titre: string }) {
  return (
    <button title={titre} className="opacity-40 transition-opacity hover:opacity-100">
      ×
    </button>
  )
}
