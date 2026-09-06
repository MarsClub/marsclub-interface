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
 * Le nom d'un shift-type, dérivé du lieu et de la zone (05/09/2026) — plus
 * de saisie manuelle. Jusqu'ici composé à la main dans le formulaire de
 * réglages (« BāM 👩🏻‍🍳 »), il finissait par diverger des mots employés
 * partout ailleurs — le cas qui a fait tomber le badge d'un des deux shifts
 * de Franck le même jour, la fusion des jours consécutifs comparant des
 * `shiftTypeId`, jamais ce texte, mais le texte affiché, lui, ne
 * correspondait déjà plus à ce que la grille disait par ailleurs. Mêmes
 * mots que `PastilleLieu` et `libelleZone`, jamais recomposés : « BāM
 * Cuisine », « OLLā Salle », « BāM Management ».
 */
export function libelleShift(lieu: Lieu, equipe: Zone): string {
  return `${LIBELLE_LIEU[lieu]} ${libelleZone(equipe)}`
}

/**
 * La couleur d'un shift, dérivée du lieu et de la zone (05/09/2026) —
 * jamais un choix manuel par shift-type. Roch, tranchant entre une couleur
 * de zone universelle et une déclinaison par lieu : « une déclinaison […]
 * qu'on dérive du BāM comme d'OLLā » — une couleur de zone indépendante du
 * lieu choquerait juste à côté de l'aplat du bloc de lieu, dans la grille,
 * qui reste jaune ou vert. Cuisine porte l'aplat plein du lieu ; Salle une
 * teinte plus claire du même ton, jamais un ton étranger. Management reste
 * neutre, sable — ce sont des heures travaillées comme les autres, pas un
 * troisième lieu (§13 de la spec).
 */
const SALLE_ECLAIRCIE: Record<Lieu, string> = { bam: '#ffe88b', olla: '#a1ee91' }
const SABLE = '#d6cdaa'
export function couleurShift(lieu: Lieu, equipe: Zone): string {
  if (equipe === 'management') return SABLE
  return equipe === 'cuisine' ? COULEUR_LIEU[lieu] : SALLE_ECLAIRCIE[lieu]
}

/**
 * Un shift dans une LISTE (Roch, 07/09/2026) — Mes shifts, Pointeuse : « ce
 * design [la cellule de la grille] vit dans un contexte de vue globale et
 * pas du tout de liste ». Une ligne, jamais colorée : la pastille de la
 * maison (son nom, en aplat comme partout dans les outils — pas une couleur
 * de shift), l'horaire, la durée, puis les icônes (repas, pause) après le
 * décompte, l'état à droite (« planifié », « réalisé », « en cours »).
 * La zone ne se dit pas : les gens savent où ils travaillent.
 */
export function LigneShift({
  lieu,
  debut,
  fin,
  duree,
  icones,
  etat,
  droite,
  className = '',
}: {
  lieu: Lieu
  debut: string
  fin: string
  /** Déjà formatée (« 6h30 ») — la ligne ne calcule rien. */
  duree?: string
  /** Après la durée : « ⏸️ 🍴 », ce que ce service compte. */
  icones?: React.ReactNode
  etat?: React.ReactNode
  /** Tout à droite, après l'état : un bouton compact, une mention. */
  droite?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-0.5 py-0.5 text-sm text-charbon tabular-nums ${className}`.trim()}>
      <PastilleLieu lieu={lieu} />
      <span className="font-semibold">
        {debut} – {fin}
      </span>
      {duree && <span className="text-charbon/75">{duree}</span>}
      {icones && <span>{icones}</span>}
      {etat && <span className="ml-auto text-xs text-charbon/60">{etat}</span>}
      {droite}
    </div>
  )
}

/**
 * Une journée dans une liste de shifts (Roch, 07/09/2026 : « regrouper les
 * shifts par jour, même si deux lieux ») : son nom en titre, son total à
 * droite en petit, ses lignes dessous. Un trait sable entre deux jours.
 */
export function Journee({
  titre,
  droite,
  children,
  className = '',
}: {
  titre: React.ReactNode
  droite?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border-t border-sable px-3 py-2 first:border-t-0 ${className}`.trim()}>
      <div className="mb-0.5 flex items-baseline justify-between gap-2">
        {/* Pas de `capitalize` : le titre arrive déjà composé (« Aujourd’hui ·
            mardi 8 septembre », 07/09/2026) — une capitale par mot le défigurerait. */}
        <span className="font-bold">{titre}</span>
        {droite && <span className="text-xs font-semibold text-charbon/60 tabular-nums">{droite}</span>}
      </div>
      {children}
    </div>
  )
}

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
