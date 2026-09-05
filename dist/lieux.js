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
 * Le libellé d'une zone, emoji compris : Cuisine 🧑🏻‍🍳, Salle ☀️ le jour /
 * 🌙 le soir, Management sans emoji (règle CLAUDE.md — le hors-service n'a
 * pas de repère visuel, c'est un mot). Une seule fois par rangée ou par
 * sous-groupe, jamais répété colonne par colonne.
 */
export function libelleZone(equipe, periode) {
    if (equipe === 'management')
        return 'Management';
    if (equipe === 'cuisine')
        return 'Cuisine 🧑🏻‍🍳';
    return periode === 'soiree' ? 'Salle 🌙' : 'Salle ☀️';
}
/**
 * La cellule de lieu fusionnée (05/09/2026) : le même aplat que
 * `PastilleLieu`, pensée pour couvrir plusieurs rangées de zone d'un seul
 * tenant — la matrice du planning, un bloc de revue groupé. Le nom de la
 * maison s'y lit une fois par bloc, jamais ligne à ligne.
 *
 * `vertical` tourne le texte à 90° pour une colonne étroite fusionnée par
 * `grid-row: span N` : c'est l'appelant qui calcule N (le nombre de rangées
 * de zone du bloc) et le pose en `style` — cette cellule ne fait que l'aplat
 * et le texte.
 */
export function BlocLieu({ lieu, vertical = false, className = '', style, }) {
    return (_jsx("div", { style: style, className: `flex items-center justify-center rounded-lg px-1 py-1 text-center text-xs font-bold text-charbon ${classeAplatLieu(lieu)} ${vertical ? '[writing-mode:vertical-rl]' : ''} ${className}`.trim(), children: LIBELLE_LIEU[lieu] }));
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
