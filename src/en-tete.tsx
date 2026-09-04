import { CLASSE_NAV } from './actions.js'

/**
 * L'en-tête de contexte daté (charte §2), le même ordre partout :
 * `[badge période] [libellé] [‹ ›] [retour au présent] [cartouche]`.
 *
 * **Pas de titre de page** : le rail dit où l'on est. Le libellé est le
 * contexte — une plage de dates, un mois —, pas le nom de l'écran ; il se
 * rend en Atma mais n'est pas un `<h1>`. Neuf copies dans Hora avant le
 * 04/09/2026, dont trois sans badge et deux avec un glyphe à la place du mot.
 *
 * `Lien` est injectable, comme pour `BoutonFermer`.
 */
export function EnTete({
  badge,
  libelle,
  precedent,
  suivant,
  present,
  children,
  Lien = 'a',
}: {
  /** « S36 », « 30 j », « Août 2026 » — charbon, Atma. */
  badge?: string
  libelle: React.ReactNode
  precedent?: string
  suivant?: string
  /** « Aujourd'hui », « Cette semaine », « Ce mois-ci » — null quand on y est. */
  present?: { href: string; libelle: string } | null
  /** La cartouche de filtres, puis ce qui se pose à droite. */
  children?: React.ReactNode
  Lien?: React.ElementType
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {badge && (
        <span className="rounded-lg bg-charbon px-2.5 py-1 font-display text-lg font-semibold text-creme">{badge}</span>
      )}
      <div className="font-display text-2xl font-semibold">{libelle}</div>
      {(precedent || suivant || present) && (
        <div className="flex items-center gap-1">
          {precedent && (
            <Lien href={precedent} className={CLASSE_NAV}>
              ‹
            </Lien>
          )}
          {suivant && (
            <Lien href={suivant} className={CLASSE_NAV}>
              ›
            </Lien>
          )}
          {/* Le retour au présent tient seul : en bout de fenêtre navigable
              les chevrons peuvent manquer, pas le chemin du retour. */}
          {present && (
            <Lien href={present.href} className={`ml-1 ${CLASSE_NAV} text-sm`}>
              {present.libelle}
            </Lien>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
