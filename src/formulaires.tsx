/**
 * Les champs et leurs intitulés (04/09/2026) — Hora en avait onze gabarits
 * de champ et quatre définitions de `Libelle`, avec une trentaine de
 * recopies en ligne.
 */

/** Un champ de saisie : texte, nombre, date, heure. */
export const CLASSE_CHAMP = 'rounded-lg border border-charbon/30 bg-white px-2.5 py-1 text-sm'

/** L'intitulé d'un champ, au-dessus de lui. */
export function Libelle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-1 text-sm font-semibold text-charbon/70 ${className}`.trim()}>{children}</div>
}

/**
 * L'intitulé d'un bloc ou d'une rangée — petites capitales estompées, au-dessus
 * d'un chiffre ou d'une ligne d'ajout. Treize recopies, cinq opacités.
 */
export const CLASSE_INTITULE = 'text-xs font-semibold uppercase tracking-wide text-charbon/50'
