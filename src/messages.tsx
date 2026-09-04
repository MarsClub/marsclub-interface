/**
 * Les messages de la charte (§5) : trois tons, un seul gabarit. Hora en avait
 * neuf teintes (revue du 04/09/2026) — cinq rouges, quatre oranges.
 *
 * | Ton          | Sens                                         |
 * |--------------|----------------------------------------------|
 * | refus        | l'action n'a pas eu lieu, et pourquoi         |
 * | vigilance    | rien n'est bloqué, mais il faut regarder      |
 * | ok           | c'est fait, et ce que ça implique             |
 *
 * Pas de vert : la confirmation est sable, comme tout état acquis. Le rouge
 * et l'orange n'existent que pour les messages et, en texte seul, pour une
 * valeur hors repère (`CLASSE_HORS_REPERE`) — jamais en aplat, jamais
 * décoratifs.
 */
export type Ton = 'refus' | 'vigilance' | 'ok'

const BORDURE: Record<Ton, string> = {
  refus: 'border-red-600 bg-white',
  vigilance: 'border-orange-400 bg-white',
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
 * un chiffre qui manque : UNE seule nuance d'orange, en texte, jamais en
 * aplat. Le mot qui explique va à côté ; la couleur seule ne dit rien.
 */
export const CLASSE_HORS_REPERE = 'font-semibold text-orange-700'

/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export function Vide({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`px-3 py-6 text-center text-sm text-charbon/60 ${className}`.trim()}>{children}</p>
}
