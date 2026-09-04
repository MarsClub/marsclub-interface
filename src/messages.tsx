/**
 * Les messages de la charte (§5) — un seul rouge, un seul sens (Roch,
 * 04/09/2026) : « le rouge veut dire attention ». Le POIDS se dit par la
 * forme, jamais par une seconde couleur :
 *
 * | Forme                | Sens                                              |
 * |----------------------|---------------------------------------------------|
 * | bandeau rouge        | l'action est refusée, ou il y a quelque chose à faire |
 * | ⚠ rouge sur une valeur | hors repère : un seuil dépassé, un prix trop vieux |
 * | bandeau sable        | c'est fait, et ce que ça implique                 |
 *
 * Les tons `refus` et `vigilance` rendent le MÊME bandeau : ils restent
 * distincts dans le code parce que le message n'est pas le même, et parce
 * qu'un `role="alert"` ne convient qu'au refus. Pas de vert, pas d'orange,
 * pas de charbon-⚠ : treize rendus d'« attention » sont devenus trois.
 */
export type Ton = 'refus' | 'vigilance' | 'ok'

const BORDURE: Record<Ton, string> = {
  refus: 'border-red-600 bg-white',
  vigilance: 'border-red-600 bg-white',
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
 * un chiffre qui manque : ⚠ rouge devant, en gras. Le mot qui explique va à
 * côté ; la couleur seule ne dit rien.
 */
export const CLASSE_HORS_REPERE = "font-bold text-red-700 before:content-['⚠_']"

/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export function Vide({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`px-3 py-6 text-center text-sm text-charbon/60 ${className}`.trim()}>{children}</p>
}
