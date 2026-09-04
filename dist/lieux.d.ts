/**
 * Les deux maisons, en un seul endroit (04/09/2026).
 *
 * Le libellé et l'aplat étaient recopiés six fois dans Hora — dont une avec
 * les hexadécimaux en dur dans un `style=`. Le couple libellé + couleur ne
 * vit plus qu'ici : jaune BāM et vert OLLā **en aplat de fond uniquement**,
 * texte charbon dessus, jamais de couleur de marque en texte (lisibilité
 * plein soleil, et les PDF s'impriment).
 */
export type Lieu = 'bam' | 'olla';
export declare const LIBELLE_LIEU: Record<Lieu, string>;
/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export declare const COULEUR_LIEU: Record<Lieu, string>;
/** La classe d'aplat d'une maison. */
export declare const classeAplatLieu: (lieu: Lieu) => "bg-jaune-bam" | "bg-vert-olla";
/** La pastille « BāM » / « OLLā » : petit aplat, texte charbon, gras. */
export declare function PastilleLieu({ lieu, className }: {
    lieu: Lieu;
    className?: string;
}): import("react").JSX.Element;
