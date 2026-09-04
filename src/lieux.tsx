/**
 * Les deux maisons, en un seul endroit (04/09/2026).
 *
 * Le libellé et l'aplat étaient recopiés six fois dans Hora — dont une avec
 * les hexadécimaux en dur dans un `style=`. Le couple libellé + couleur ne
 * vit plus qu'ici : jaune BāM et vert OLLā **en aplat de fond uniquement**,
 * texte charbon dessus, jamais de couleur de marque en texte (lisibilité
 * plein soleil, et les PDF s'impriment).
 */

export type Lieu = 'bam' | 'olla'

export const LIBELLE_LIEU: Record<Lieu, string> = { bam: 'BāM', olla: 'OLLā' }

/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export const COULEUR_LIEU: Record<Lieu, string> = { bam: '#ffde59', olla: '#78e762' }

/** La classe d'aplat d'une maison. */
export const classeAplatLieu = (lieu: Lieu) => (lieu === 'bam' ? 'bg-jaune-bam' : 'bg-vert-olla')

/** La pastille « BāM » / « OLLā » : petit aplat, texte charbon, gras. */
export function PastilleLieu({ lieu, className = '' }: { lieu: Lieu; className?: string }) {
  return (
    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold text-charbon ${classeAplatLieu(lieu)} ${className}`.trim()}>
      {LIBELLE_LIEU[lieu]}
    </span>
  )
}
