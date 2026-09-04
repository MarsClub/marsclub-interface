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
/**
 * Les deux maisons, ou le périmètre entier (Roch, 04/09/2026) : « puisque
 * l'aplat est au BāM et à OLLā, il faut aussi que Mārs Clūb ait son aplat
 * avec sa couleur, sinon ça tranche trop dans les menus ». La couleur de
 * la maison entière est le **sable** — la troisième couleur de l'identité,
 * celle des états acquis et des pastilles ; le charbon est le texte et
 * l'action, le crème est le fond.
 */
export type Maison = Lieu | 'mc'

export const LIBELLE_LIEU: Record<Lieu, string> = { bam: 'BāM', olla: 'OLLā' }
/** Le libellé d'un périmètre, entier compris — l'abréviation interne « 🏡 MC ». */
export const LIBELLE_MAISON: Record<Maison, string> = { ...LIBELLE_LIEU, mc: '🏡 MC' }

/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export const COULEUR_LIEU: Record<Lieu, string> = { bam: '#ffde59', olla: '#78e762' }

/** La classe d'aplat d'une maison. */
export const classeAplatLieu = (lieu: Maison) =>
  lieu === 'bam' ? 'bg-jaune-bam' : lieu === 'olla' ? 'bg-vert-olla' : 'bg-sable'

/**
 * La pastille « BāM » / « OLLā ». Deux variantes, décidées par Roch le
 * 04/09/2026, toutes deux permises selon le contexte et la surface :
 *
 * - **aplat** (défaut des OUTILS INTERNES) : le nom en charbon sur sa
 *   couleur — le repère le plus rapide d'un écran de travail ;
 * - **neutre** (défaut des DISPOSITIFS PUBLICS : site, imprimés) : le nom
 *   en charbon sur fond blanc, la couleur en liseré à gauche — la règle de
 *   marque, « un nom ne se pose jamais sur sa propre couleur en aplat ».
 *
 * Ce sont des défauts, pas des interdits : ils se renversent au cas par cas.
 */
export function PastilleLieu({
  lieu,
  variante = 'aplat',
  className = '',
}: {
  /** Une maison, ou `mc` : le périmètre entier, en sable (04/09/2026). */
  lieu: Maison
  variante?: 'aplat' | 'neutre'
  className?: string
}) {
  const liseré = lieu === 'bam' ? 'border-l-jaune-bam' : lieu === 'olla' ? 'border-l-vert-olla' : 'border-l-sable'
  const fond =
    variante === 'neutre' ? `border border-charbon/30 border-l-4 bg-white ${liseré}` : classeAplatLieu(lieu)
  return (
    <span className={`rounded px-1.5 py-0.5 text-xs font-semibold text-charbon ${fond} ${className}`.trim()}>
      {LIBELLE_MAISON[lieu]}
    </span>
  )
}
