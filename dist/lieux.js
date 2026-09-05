import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const LIBELLE_LIEU = { bam: 'BāM', olla: 'OLLā' };
/** Le libellé d'un périmètre, entier compris — l'abréviation interne « 🏡 MC ». */
export const LIBELLE_MAISON = { ...LIBELLE_LIEU, mc: '🏡 MC' };
/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export const COULEUR_LIEU = { bam: '#ffde59', olla: '#78e762' };
/** La classe d'aplat d'une maison. */
export const classeAplatLieu = (lieu) => lieu === 'bam' ? 'bg-jaune-bam' : lieu === 'olla' ? 'bg-vert-olla' : 'bg-sable';
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
export function PastilleLieu({ lieu, variante = 'aplat', className = '', }) {
    const liseré = lieu === 'bam' ? 'border-l-jaune-bam' : lieu === 'olla' ? 'border-l-vert-olla' : 'border-l-sable';
    const fond = variante === 'neutre' ? `border border-charbon/30 border-l-4 bg-white ${liseré}` : classeAplatLieu(lieu);
    return (_jsx("span", { className: `rounded px-1.5 py-0.5 text-xs font-semibold text-charbon ${fond} ${className}`.trim(), children: LIBELLE_MAISON[lieu] }));
}
/**
 * Le libellé d'une zone (05/09/2026, revu le même jour : « supprime les
 * emoji de salle et cuisine ») — un mot, jamais une icône. Une seule fois
 * par rangée ou par sous-groupe, jamais répété colonne par colonne.
 */
export function libelleZone(equipe) {
    if (equipe === 'management')
        return 'Management';
    if (equipe === 'cuisine')
        return 'Cuisine';
    return 'Salle';
}
/** La mise en avant d'un en-tête de zone — nettement plus visible qu'un intitulé courant (05/09/2026). */
export const CLASSE_ZONE = 'text-sm font-bold uppercase tracking-wide text-charbon';
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
export function libelleShift(lieu, equipe) {
    return `${LIBELLE_LIEU[lieu]} ${libelleZone(equipe)}`;
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
const SALLE_ECLAIRCIE = { bam: '#ffe88b', olla: '#a1ee91' };
const SABLE = '#d6cdaa';
export function couleurShift(lieu, equipe) {
    if (equipe === 'management')
        return SABLE;
    return equipe === 'cuisine' ? COULEUR_LIEU[lieu] : SALLE_ECLAIRCIE[lieu];
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
export function BlocLieu({ lieu, className = '', style, }) {
    return (_jsx("div", { style: style, className: `flex items-center justify-center rounded-lg px-1 py-1 text-center text-sm font-bold text-charbon ${classeAplatLieu(lieu)} ${className}`.trim(), children: LIBELLE_LIEU[lieu] }));
}
/**
 * Le liseré bicolore fin entre deux blocs de lieu (05/09/2026) : une bande
 * jaune en haut, une bande verte en dessous — deux aplats solides empilés,
 * jamais un dégradé. Pensé pour occuper toute la largeur d'une matrice, entre
 * le bloc BāM et le bloc OLLā.
 */
export function LisereLieux({ className = '' }) {
    return (_jsxs("div", { className: `flex flex-col ${className}`.trim(), children: [_jsx("div", { className: "h-[3px] bg-jaune-bam" }), _jsx("div", { className: "h-[3px] bg-vert-olla" })] }));
}
