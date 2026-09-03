/** L'alphabet que fait défiler une palette. Un symbole ne roule pas. */
export declare function alphabetDePalette(caractere: string): string;
/** Reste positif là où `%` de JavaScript ne l'est pas. */
export declare function modulo(n: number, m: number): number;
/**
 * Le caractère qu'affiche une palette à `restants` crans de sa cible — la
 * fonction pure derrière l'animation, pour qu'un test la fixe sans DOM.
 */
export declare function paletteEnRoute(cible: string, restants: number): string;
export declare function CompteurSolari({ valeur, unite, intitule, compact, className, }: {
    /** Ce qui roule. Les espaces deviennent des vides, pas des palettes. */
    valeur: string;
    /** Ce qui suit, en clair — l'unité ne roule pas, on la lit d'un coup. */
    unite: string;
    /** Ce que le nombre veut dire, au-dessus. Facultatif : l'unité suffit souvent à lire le panneau. */
    intitule?: string;
    /**
     * Pour un coin d'écran plutôt qu'un panneau (04/09/2026, le coin de la
     * grille murale d'Hora) : marges serrées, palettes plus petites, l'unité
     * passe SOUS le chiffre au lieu de le suivre.
     */
    compact?: boolean;
    className?: string;
}): import("react").JSX.Element;
