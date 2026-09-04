/**
 * Les cartes de la charte (§6) : le cadre de tout contenu structuré.
 */
/** La carte : listes, tableaux, panneaux. */
export declare const CLASSE_CARTE = "rounded-xl border-2 border-sable bg-white/50";
/**
 * Une carte de section, avec sa bande de titre sable : un titre en Atma, un
 * sous-titre estompé qui dit d'où viennent les chiffres. Huit copies dans
 * Hora avant le 04/09/2026. Un tableau à l'intérieur défile dans son propre
 * `overflow-x-auto` — la page ne défile jamais horizontalement.
 */
export declare function CarteSection({ titre, sous, droite, children, className, }: {
    titre: React.ReactNode;
    sous?: React.ReactNode;
    /** Ce qui se pose à droite de la bande : un compte, un filtre, une action. */
    droite?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/** Une sous-section dans un panneau de fiche : un titre, un contenu. */
export declare function SousSection({ titre, children, className }: {
    titre?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/**
 * Le bloc de chiffre : l'intitulé en petit, le chiffre en Atma — la fonte
 * de l'identité sur ce qu'on vient lire —, le détail et l'écho en appui.
 * Six implémentations dans Hora avant le 04/09/2026.
 *
 * ⚠️ Atma n'a pas de chiffres à chasse fixe : `tabular-nums` n'y peut rien.
 * C'est assumé — un bloc porte un chiffre, pas une colonne à aligner.
 */
export declare function Kpi({ libelle, valeur, detail, echo, alerte, aide, className, }: {
    libelle: string;
    valeur: string;
    /** Ce qui VARIE — un seuil, une valorisation. La pédagogie va dans `aide`. */
    detail?: string;
    /** La valeur de l'autre maison, en plus petit. */
    echo?: string;
    /** Hors repère : le chiffre passe en orange, seule couleur de vigilance sur une valeur. */
    alerte?: boolean;
    /** L'explication invariable, derrière un « ? ». */
    aide?: string;
    className?: string;
}): import("react").JSX.Element;
