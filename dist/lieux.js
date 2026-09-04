import { jsx as _jsx } from "react/jsx-runtime";
export const LIBELLE_LIEU = { bam: 'BāM', olla: 'OLLā' };
/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export const COULEUR_LIEU = { bam: '#ffde59', olla: '#78e762' };
/** La classe d'aplat d'une maison. */
export const classeAplatLieu = (lieu) => (lieu === 'bam' ? 'bg-jaune-bam' : 'bg-vert-olla');
/** La pastille « BāM » / « OLLā » : petit aplat, texte charbon, gras. */
export function PastilleLieu({ lieu, className = '' }) {
    return (_jsx("span", { className: `rounded px-1.5 py-0.5 text-xs font-semibold text-charbon ${classeAplatLieu(lieu)} ${className}`.trim(), children: LIBELLE_LIEU[lieu] }));
}
