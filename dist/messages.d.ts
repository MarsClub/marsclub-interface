/**
 * Les messages de la charte (§5) — un seul rouge, un seul sens (Roch,
 * 04/09/2026) : « le rouge veut dire attention ». Le POIDS se dit par la
 * forme, jamais par une seconde couleur :
 *
 * | Forme                | Sens                                              |
 * |----------------------|---------------------------------------------------|
 * | bandeau rouge        | l'action est refusée, ou il y a quelque chose à faire |
 * | ⚠ rouge sur une valeur | hors repère : un seuil dépassé, un prix trop vieux |
 * | bandeau sable        | c'est fait, et ce que ça implique                 |
 *
 * Les tons `refus` et `vigilance` rendent le MÊME bandeau : ils restent
 * distincts dans le code parce que le message n'est pas le même, et parce
 * qu'un `role="alert"` ne convient qu'au refus. Pas de vert, pas d'orange,
 * pas de charbon-⚠ : treize rendus d'« attention » sont devenus trois.
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
 * un chiffre qui manque : ⚠ rouge devant, en gras. Le mot qui explique va à
 * côté ; la couleur seule ne dit rien.
 */
export declare const CLASSE_HORS_REPERE = "font-bold text-red-700 before:content-['\u26A0_']";
/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export declare function Vide({ children, className }: {
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
