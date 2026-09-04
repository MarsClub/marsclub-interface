/**
 * Les messages de la charte (§5) : trois tons, un seul gabarit. Hora en avait
 * neuf teintes (revue du 04/09/2026) — cinq rouges, quatre oranges.
 *
 * | Ton          | Sens                                         | Signe                    |
 * |--------------|----------------------------------------------|--------------------------|
 * | refus        | l'action n'a pas eu lieu, et pourquoi         | cadre rouge              |
 * | vigilance    | rien n'est bloqué, mais il faut regarder      | cadre charbon, ⚠ devant  |
 * | ok           | c'est fait, et ce que ça implique             | cadre sable, fond sable  |
 *
 * ⚠️ **L'orange n'existe pas dans la palette de la maison** (Roch,
 * 04/09/2026 : « le orange n'existe pas dans notre charte »). La vigilance
 * se dit en charbon avec le glyphe ⚠, le langage d'icônes de la charte. Le
 * rouge reste la SEULE couleur hors palette : un refus doit se distinguer
 * d'une vigilance au premier regard. Pas de vert non plus : la confirmation
 * est sable, comme tout état acquis.
 */
export type Ton = 'refus' | 'vigilance' | 'ok';
export declare const classeBandeau: (ton: Ton) => string;
export declare function Bandeau({ ton, children, className }: {
    ton: Ton;
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/**
 * Une valeur hors repère — un ratio au-dessus du seuil, un prix trop vieux,
 * un chiffre qui manque : charbon gras, précédé du glyphe ⚠. Aucune couleur :
 * l'orange n'est pas dans la palette. Le mot qui explique va à côté ; le
 * glyphe seul ne dit pas pourquoi.
 */
export declare const CLASSE_HORS_REPERE = "font-bold text-charbon before:content-['\u26A0_']";
/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export declare function Vide({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
