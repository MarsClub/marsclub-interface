/**
 * Les champs et leurs intitulés (04/09/2026) — Hora en avait onze gabarits
 * de champ et quatre définitions de `Libelle`, avec une trentaine de
 * recopies en ligne.
 */
/** Un champ de saisie : texte, nombre, date, heure. */
export declare const CLASSE_CHAMP = "rounded-lg border border-charbon/30 bg-white px-2.5 py-1 text-sm";
/** L'intitulé d'un champ, au-dessus de lui. */
export declare function Libelle({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/**
 * L'intitulé d'un bloc ou d'une rangée — petites capitales estompées, au-dessus
 * d'un chiffre ou d'une ligne d'ajout. Treize recopies, cinq opacités.
 */
export declare const CLASSE_INTITULE = "text-xs font-semibold uppercase tracking-wide text-charbon/50";
