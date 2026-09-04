import { jsx as _jsx } from "react/jsx-runtime";
export const LIBELLE_LIEU = { bam: 'BāM', olla: 'OLLā' };
/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export const COULEUR_LIEU = { bam: '#ffde59', olla: '#78e762' };
/** La classe d'aplat d'une maison. */
export const classeAplatLieu = (lieu) => (lieu === 'bam' ? 'bg-jaune-bam' : 'bg-vert-olla');
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
    const fond = variante === 'neutre'
        ? `border border-charbon/30 border-l-4 bg-white ${lieu === 'bam' ? 'border-l-jaune-bam' : 'border-l-vert-olla'}`
        : classeAplatLieu(lieu);
    return (_jsx("span", { className: `rounded px-1.5 py-0.5 text-xs font-semibold text-charbon ${fond} ${className}`.trim(), children: LIBELLE_LIEU[lieu] }));
}
