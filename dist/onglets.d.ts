/**
 * Les onglets d'une même page (charte §4) : Atma soulignés, l'actif en
 * charbon, le reste estompé. Un onglet déplace le regard, il ne déclenche
 * rien. Six copies identiques dans Hora avant le 04/09/2026.
 *
 * La rangée ne s'affiche qu'à partir de deux onglets : un onglet seul serait
 * un titre de page déguisé, et la charte n'en veut pas.
 */
export declare const classeOnglet: (actif: boolean) => string;
export declare function Onglets({ onglets, Lien, className, }: {
    onglets: {
        href: string;
        libelle: string;
        actif: boolean;
    }[];
    Lien?: React.ElementType;
    className?: string;
}): import("react").JSX.Element | null;
