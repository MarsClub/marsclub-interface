/**
 * L'en-tête de contexte daté (charte §2), le même ordre partout :
 * `[badge période] [libellé] [‹ ›] [retour au présent] [cartouche]`.
 *
 * **Pas de titre de page** : le rail dit où l'on est. Le libellé est le
 * contexte — une plage de dates, un mois —, pas le nom de l'écran ; il se
 * rend en Atma mais n'est pas un `<h1>`. Le badge est en SABLE (04/09/2026) :
 * l'aplat charbon est le survol d'un bouton, jamais un repère de période. Neuf copies dans Hora avant le
 * 04/09/2026, dont trois sans badge et deux avec un glyphe à la place du mot.
 *
 * `Lien` est injectable, comme pour `BoutonFermer`.
 */
export declare function EnTete({ badge, libelle, precedent, suivant, present, children, Lien, compact, }: {
    /** « S36 », « 30 j », « Août 2026 » — charbon, Atma. */
    badge?: string;
    libelle: React.ReactNode;
    precedent?: string;
    suivant?: string;
    /** « Aujourd'hui », « Cette semaine », « Ce mois-ci » — null quand on y est. */
    present?: {
        href: string;
        libelle: string;
    } | null;
    /** La cartouche de filtres, puis ce qui se pose à droite. */
    children?: React.ReactNode;
    Lien?: React.ElementType;
    /**
     * Tient sur une seule ligne, texte réduit (05/09/2026) — pour se glisser
     * dans un espace étroit : un en-tête mobile, une ligne fusionnée avec un
     * menu. Le badge et le libellé perdent un cran de taille, l'ensemble ne
     * retombe plus à la ligne.
     */
    compact?: boolean;
}): import("react").JSX.Element;
