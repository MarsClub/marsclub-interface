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

/**
 * La zone d'un shift : cuisine, salle, ou management (hors service, §13 de
 * la spec de Hora). Jamais un shift-type nommé — le libellé se dérive de
 * l'équipe et, pour la salle seule, de la période (05/09/2026, « on ne doit
 * pas répéter » : Roch a retoqué le `libelle` composé à la main, « BāM 🧑🏻‍🍳 »,
 * qui mélangeait lieu et zone dans une seule chaîne, recopiée ligne à ligne).
 */
export type Zone = 'salle' | 'cuisine' | 'management'

/**
 * Le libellé d'une zone (05/09/2026, revu le même jour : « supprime les
 * emoji de salle et cuisine ») — un mot, jamais une icône. Une seule fois
 * par rangée ou par sous-groupe, jamais répété colonne par colonne.
 */
export function libelleZone(equipe: Zone): string {
  if (equipe === 'management') return 'Management'
  if (equipe === 'cuisine') return 'Cuisine'
  return 'Salle'
}

/** La mise en avant d'un en-tête de zone — nettement plus visible qu'un intitulé courant (05/09/2026). */
export const CLASSE_ZONE = 'text-sm font-bold uppercase tracking-wide text-charbon'

/**
 * La cellule de lieu fusionnée (05/09/2026) : le même aplat que
 * `PastilleLieu`, pensée pour couvrir plusieurs rangées de zone d'un seul
 * tenant — la matrice du planning, un bloc de revue groupé. Le nom de la
 * maison s'y lit une fois par bloc, jamais ligne à ligne.
 *
 * ⚠️ **Toujours à l'horizontale** (Roch, 05/09/2026 : « écriture verticale
 * interdite ») — même fusionnée sur plusieurs rangées, dans une colonne
 * étroite. La colonne qui la porte doit être assez large pour « BāM »/« OLLā »
 * en toutes lettres ; ce n'est plus à cette cellule de s'y adapter en pivotant.
 */
export function BlocLieu({
  lieu,
  className = '',
  style,
}: {
  lieu: Lieu
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={style}
      className={`flex items-center justify-center rounded-lg px-1 py-1 text-center text-sm font-bold text-charbon ${classeAplatLieu(
        lieu,
      )} ${className}`.trim()}
    >
      {LIBELLE_LIEU[lieu]}
    </div>
  )
}

/**
 * Le liseré bicolore fin entre deux blocs de lieu (05/09/2026) : une bande
 * jaune en haut, une bande verte en dessous — deux aplats solides empilés,
 * jamais un dégradé. Pensé pour occuper toute la largeur d'une matrice, entre
 * le bloc BāM et le bloc OLLā.
 */
export function LisereLieux({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <div className="h-[3px] bg-jaune-bam" />
      <div className="h-[3px] bg-vert-olla" />
    </div>
  )
}
