import { Aide } from './aide.js'

/**
 * Les cartes de la charte (§6) : le cadre de tout contenu structuré.
 */

/** La carte : listes, tableaux, panneaux. */
export const CLASSE_CARTE = 'rounded-xl border-2 border-sable bg-white/50'

/**
 * Une carte de section, avec sa bande de titre sable : un titre en Atma, un
 * sous-titre estompé qui dit d'où viennent les chiffres. Huit copies dans
 * Hora avant le 04/09/2026. Un tableau à l'intérieur défile dans son propre
 * `overflow-x-auto` — la page ne défile jamais horizontalement.
 */
export function CarteSection({
  titre,
  sous,
  droite,
  children,
  className = '',
}: {
  titre: React.ReactNode
  sous?: React.ReactNode
  /** Ce qui se pose à droite de la bande : un compte, un filtre, une action. */
  droite?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`overflow-hidden ${CLASSE_CARTE} ${className}`.trim()}>
      <div className="flex flex-wrap items-baseline gap-2 bg-sable/40 px-3 py-1.5">
        <h2 className="font-display font-semibold">{titre}</h2>
        {sous && <span className="text-xs text-charbon/60">{sous}</span>}
        {droite && <span className="ml-auto">{droite}</span>}
      </div>
      {children}
    </section>
  )
}

/** Une sous-section dans un panneau de fiche : un titre, un contenu. */
export function SousSection({ titre, children, className = '' }: { titre?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border-2 border-sable bg-white/60 p-3 ${className}`.trim()}>
      {titre && <h3 className="mb-2 font-display text-lg font-semibold">{titre}</h3>}
      {children}
    </div>
  )
}

/**
 * Le bloc de chiffre : l'intitulé en petit, le chiffre en Atma — la fonte
 * de l'identité sur ce qu'on vient lire —, le détail et l'écho en appui.
 * Six implémentations dans Hora avant le 04/09/2026.
 *
 * ⚠️ Atma n'a pas de chiffres à chasse fixe : `tabular-nums` n'y peut rien.
 * C'est assumé — un bloc porte un chiffre, pas une colonne à aligner.
 */
export function Kpi({
  libelle,
  valeur,
  detail,
  echo,
  alerte = false,
  aide,
  className = '',
}: {
  libelle: string
  valeur: string
  /** Ce qui VARIE — un seuil, une valorisation. La pédagogie va dans `aide`. */
  detail?: string
  /** La valeur de l'autre maison, en plus petit. */
  echo?: string
  /** Hors repère : le chiffre garde sa couleur et prend le glyphe ⚠ — l'orange n'est pas dans la palette. */
  alerte?: boolean
  /** L'explication invariable, derrière un « ? ». */
  aide?: string
  className?: string
}) {
  return (
    <div className={`${CLASSE_CARTE} px-2 py-1.5 md:px-3 md:py-2 ${className}`.trim()}>
      <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-charbon/50 md:text-xs">
        {libelle}
        {aide && <Aide texte={aide} />}
      </div>
      <div className={`font-display text-lg font-semibold md:text-xl ${alerte ? "before:content-['⚠_']" : ''}`}>{valeur}</div>
      {detail && <div className="text-[10px] leading-tight tabular-nums text-charbon/50 md:text-xs">{detail}</div>}
      {echo && <div className="text-[10px] leading-tight tabular-nums text-charbon/45 md:text-xs">{echo}</div>}
    </div>
  )
}
