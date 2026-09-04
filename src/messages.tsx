/**
 * Les messages de la charte (§5) : trois tons, un seul gabarit. Hora en avait
 * neuf teintes (revue du 04/09/2026) — cinq rouges, quatre oranges.
 *
 * | Ton          | Sens                                         | Signe                    |
 * |--------------|----------------------------------------------|--------------------------|
 * | refus        | l'action n'a pas eu lieu, et pourquoi         | cadre rouge              |
 * | vigilance    | rien n'est bloqué, mais il faut regarder      | cadre charbon, ⚠ devant  |
 * | ok           | c'est fait, et ce que ça implique             | cadre sable, fond sable  |
 *
 * ⚠️ **L'orange n'existe pas dans la palette de la maison** (Roch,
 * 04/09/2026 : « le orange n'existe pas dans notre charte »). La vigilance
 * se dit en charbon avec le glyphe ⚠, le langage d'icônes de la charte. Le
 * rouge reste la SEULE couleur hors palette : un refus doit se distinguer
 * d'une vigilance au premier regard. Pas de vert non plus : la confirmation
 * est sable, comme tout état acquis.
 */
export type Ton = 'refus' | 'vigilance' | 'ok'

const BORDURE: Record<Ton, string> = {
  refus: 'border-red-600 bg-white',
  vigilance: "border-charbon bg-white before:content-['⚠_']",
  ok: 'border-sable bg-sable/40',
}

export const classeBandeau = (ton: Ton) => `rounded-lg border-2 px-3 py-2 text-sm font-semibold ${BORDURE[ton]}`

export function Bandeau({ ton, children, className = '' }: { ton: Ton; children: React.ReactNode; className?: string }) {
  return (
    <div role={ton === 'refus' ? 'alert' : 'status'} className={`${classeBandeau(ton)} ${className}`.trim()}>
      {children}
    </div>
  )
}

/**
 * Une valeur hors repère — un ratio au-dessus du seuil, un prix trop vieux,
 * un chiffre qui manque : charbon gras, précédé du glyphe ⚠. Aucune couleur :
 * l'orange n'est pas dans la palette. Le mot qui explique va à côté ; le
 * glyphe seul ne dit pas pourquoi.
 */
export const CLASSE_HORS_REPERE = "font-bold text-charbon before:content-['⚠_']"

/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export function Vide({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`px-3 py-6 text-center text-sm text-charbon/60 ${className}`.trim()}>{children}</p>
}
