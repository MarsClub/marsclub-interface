import { Aide } from './aide.js'
import { CLASSE_INTITULE } from './formulaires.js'

/**
 * Les cartes de la charte (§6) : le cadre de tout contenu structuré.
 */

/** La carte : listes, tableaux, panneaux. */
export const CLASSE_CARTE = 'rounded-xl border-2 border-sable bg-white/50'

/** Le voile d'une carte estompée : crème translucide par-dessus tout, sans capter le doigt. */
/**
 * Le voile fait tout le travail (3.4.1, Roch : « les textes déjà atténués le
 * sont deux fois… écrire ces mentions en charbon plein ») : sous le voile,
 * tout le texte passe en charbon plein, quelle que soit sa classe.
 */
const CLASSE_ESTOMPEE = 'relative after:pointer-events-none after:absolute after:inset-0 after:bg-creme/50 [&_*]:text-charbon!'

/**
 * Ce qui reste net dans une carte estompée (Roch, 07/09/2026 : « on a des
 * actions et un statut ») — un bouton, un badge : posé au-dessus du voile.
 */
export const CLASSE_TENU = 'relative z-10'

/**
 * Le jour qu'on corrige reste net (Roch, 07/09/2026 : « si clic sur
 * Modifier, dégriser le bloc jour ») — pour l'élément qui CONTIENT le
 * dépliant : dès qu'un `<details>` s'y ouvre, il se lève au-dessus du voile.
 */
export const CLASSE_TENU_SI_OUVERT = '[&:has(details[open])]:relative [&:has(details[open])]:z-10'

/**
 * Une carte de section, avec sa bande de titre sable : un titre en Atma, un
 * sous-titre estompé qui dit d'où viennent les chiffres. Huit copies dans
 * Hora avant le 04/09/2026. Un tableau à l'intérieur défile dans son propre
 * `overflow-x-auto` — la page ne défile jamais horizontalement.
 */
export function CarteSection({
  titre,
  sous,
  centre,
  droite,
  estompee = false,
  children,
  className = '',
}: {
  titre: React.ReactNode
  sous?: React.ReactNode
  /**
   * La troisième zone de la bande (Roch, 06/09/2026, pour le bloc de la
   * semaine de Hora : « le numéro de semaine à gauche, les dates au
   * centre, les flèches à droite ») — centrée entre le titre et `droite`.
   * Elle prend la place restante : avec elle, la bande ne se replie pas,
   * elle se partage.
   */
  centre?: React.ReactNode
  /** Ce qui se pose à droite de la bande : un compte, un filtre, une action. */
  droite?: React.ReactNode
  /**
   * Légèrement grisée (Roch, 07/09/2026) : une carte dont le contenu est
   * derrière soi — une semaine passée et déjà pointée. Un voile crème
   * translucide se pose sur son CONTENU (3.3.0, puis 3.4.0 : la bande de
   * titre reste nette, avec le statut qu'elle porte) plutôt qu'une opacité :
   * ce qui doit rester net dans le contenu — un bouton, le jour qu'on est
   * en train de corriger — se lève au-dessus du voile avec `CLASSE_TENU`.
   */
  estompee?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`overflow-hidden ${CLASSE_CARTE} ${className}`.trim()}>
      <div className={`flex items-baseline gap-2 bg-sable/40 px-3 py-1.5 ${centre ? 'flex-nowrap' : 'flex-wrap'}`}>
        <h2 className="shrink-0 font-display font-semibold">{titre}</h2>
        {sous && <span className="text-xs text-charbon/60">{sous}</span>}
        {centre && <span className="min-w-0 flex-1 truncate text-center font-display font-semibold">{centre}</span>}
        {droite && <span className="ml-auto shrink-0">{droite}</span>}
      </div>
      {/* Le voile ne couvre que le CONTENU (3.4.0, Roch : « enlève le voile
          sur le titre — le statut d'une semaine reste lisible, seul son
          contenu se voile »). */}
      {estompee ? <div className={CLASSE_ESTOMPEE}>{children}</div> : children}
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
      <div className={`font-display text-lg font-semibold md:text-xl ${alerte ? "text-red-700 before:content-['⚠_']" : ''}`}>{valeur}</div>
      {detail && <div className="text-[10px] leading-tight tabular-nums text-charbon/50 md:text-xs">{detail}</div>}
      {echo && <div className="text-[10px] leading-tight tabular-nums text-charbon/45 md:text-xs">{echo}</div>}
    </div>
  )
}

/**
 * Le bloc d'information (Roch, 07/09/2026 : « le format exact du bloc
 * galet », « toujours le même format en hauteur et en largeur ») — deux
 * lignes, jamais plus : l'intitulé en petites capitales, son « ? » s'il y a
 * une explication invariable, un signe tout à droite s'il y a lieu ; puis UNE
 * ligne de contenu, qui ne se replie pas (elle défile si l'écran est trop
 * étroit). Le geste des galets sur Planning, « Pas de pointage à effectuer »
 * sur Pointeuse, l'attente sur Propositions, la prochaine période sur
 * Indisponibilités : le même bloc, à la même place, en tête.
 */
export function BlocInformation({
  titre,
  aide,
  droite,
  children,
  className = '',
}: {
  titre: React.ReactNode
  /** L'explication invariable, derrière le « ? ». */
  aide?: string
  /** Un signe tout à droite de l'intitulé (↗, ↘…). */
  droite?: React.ReactNode
  /** La ligne de contenu — une seule. */
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`px-3 py-2 ${CLASSE_CARTE} ${className}`.trim()}>
      <div className={`mb-1 flex items-center gap-1.5 ${CLASSE_INTITULE}`}>
        {titre}
        {aide && <Aide texte={aide} />}
        {/* Le coin droit ne fixe ni taille ni graisse (3.2.1) : un signe se
            passe en gras et plus grand par l'appelant, une date en petit —
            et la rangée garde la hauteur de l'intitulé, jamais un pixel de
            plus (Roch, 07/09/2026 : « trop grand en hauteur »). */}
        {droite && <span className="ml-auto flex items-center leading-none normal-case tracking-normal text-charbon">{droite}</span>}
      </div>
      <p className="flex flex-nowrap items-baseline gap-x-3 overflow-x-auto whitespace-nowrap text-sm text-charbon tabular-nums">
        {children}
      </p>
    </section>
  )
}
