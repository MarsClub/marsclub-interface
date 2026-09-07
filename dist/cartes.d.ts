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
export declare function CarteSection({ titre, sous, centre, droite, estompee, children, className, }: {
    titre: React.ReactNode;
    sous?: React.ReactNode;
    /**
     * La troisième zone de la bande (Roch, 06/09/2026, pour le bloc de la
     * semaine de Hora : « le numéro de semaine à gauche, les dates au
     * centre, les flèches à droite ») — centrée entre le titre et `droite`.
     * Elle prend la place restante : avec elle, la bande ne se replie pas,
     * elle se partage.
     */
    centre?: React.ReactNode;
    /** Ce qui se pose à droite de la bande : un compte, un filtre, une action. */
    droite?: React.ReactNode;
    /**
     * Légèrement grisée (Roch, 07/09/2026) : une carte dont le contenu est
     * derrière soi — une semaine passée et déjà pointée. Le contenu reste
     * lisible et actionnable ; seule l'attention baisse.
     */
    estompee?: boolean;
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
    /** Hors repère : le chiffre garde sa couleur et prend le glyphe ⚠ — l'orange n'est pas dans la palette. */
    alerte?: boolean;
    /** L'explication invariable, derrière un « ? ». */
    aide?: string;
    className?: string;
}): import("react").JSX.Element;
/**
 * Le bloc d'information (Roch, 07/09/2026 : « le format exact du bloc
 * galet », « toujours le même format en hauteur et en largeur ») — deux
 * lignes, jamais plus : l'intitulé en petites capitales, son « ? » s'il y a
 * une explication invariable, un signe tout à droite s'il y a lieu ; puis UNE
 * ligne de contenu, qui ne se replie pas (elle défile si l'écran est trop
 * étroit). Le geste des galets sur Planning, « Pas de pointage à effectuer »
 * sur Pointeuse, l'attente sur Propositions, la prochaine période sur
 * Indisponibilités : le même bloc, à la même place, en tête.
 */
export declare function BlocInformation({ titre, aide, droite, children, className, }: {
    titre: React.ReactNode;
    /** L'explication invariable, derrière le « ? ». */
    aide?: string;
    /** Un signe tout à droite de l'intitulé (↗, ↘…). */
    droite?: React.ReactNode;
    /** La ligne de contenu — une seule. */
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
