import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Aide } from './aide.js';
import { CLASSE_INTITULE } from './formulaires.js';
/**
 * Les cartes de la charte (§6) : le cadre de tout contenu structuré.
 */
/** La carte : listes, tableaux, panneaux. */
export const CLASSE_CARTE = 'rounded-xl border-2 border-sable bg-white/50';
/** Le voile d'une carte estompée : crème translucide par-dessus tout, sans capter le doigt. */
const CLASSE_ESTOMPEE = 'relative after:pointer-events-none after:absolute after:inset-0 after:bg-creme/50';
/**
 * Ce qui reste net dans une carte estompée (Roch, 07/09/2026 : « on a des
 * actions et un statut ») — un bouton, un badge : posé au-dessus du voile.
 */
export const CLASSE_TENU = 'relative z-10';
/**
 * Le jour qu'on corrige reste net (Roch, 07/09/2026 : « si clic sur
 * Modifier, dégriser le bloc jour ») — pour l'élément qui CONTIENT le
 * dépliant : dès qu'un `<details>` s'y ouvre, il se lève au-dessus du voile.
 */
export const CLASSE_TENU_SI_OUVERT = '[&:has(details[open])]:relative [&:has(details[open])]:z-10';
/**
 * Une carte de section, avec sa bande de titre sable : un titre en Atma, un
 * sous-titre estompé qui dit d'où viennent les chiffres. Huit copies dans
 * Hora avant le 04/09/2026. Un tableau à l'intérieur défile dans son propre
 * `overflow-x-auto` — la page ne défile jamais horizontalement.
 */
export function CarteSection({ titre, sous, centre, droite, estompee = false, children, className = '', }) {
    return (_jsxs("section", { className: `overflow-hidden ${CLASSE_CARTE} ${estompee ? CLASSE_ESTOMPEE : ''} ${className}`.trim(), children: [_jsxs("div", { className: `flex items-baseline gap-2 bg-sable/40 px-3 py-1.5 ${centre ? 'flex-nowrap' : 'flex-wrap'}`, children: [_jsx("h2", { className: "shrink-0 font-display font-semibold", children: titre }), sous && _jsx("span", { className: "text-xs text-charbon/60", children: sous }), centre && _jsx("span", { className: "min-w-0 flex-1 truncate text-center font-display font-semibold", children: centre }), droite && _jsx("span", { className: "ml-auto shrink-0", children: droite })] }), children] }));
}
/** Une sous-section dans un panneau de fiche : un titre, un contenu. */
export function SousSection({ titre, children, className = '' }) {
    return (_jsxs("div", { className: `rounded-xl border-2 border-sable bg-white/60 p-3 ${className}`.trim(), children: [titre && _jsx("h3", { className: "mb-2 font-display text-lg font-semibold", children: titre }), children] }));
}
/**
 * Le bloc de chiffre : l'intitulé en petit, le chiffre en Atma — la fonte
 * de l'identité sur ce qu'on vient lire —, le détail et l'écho en appui.
 * Six implémentations dans Hora avant le 04/09/2026.
 *
 * ⚠️ Atma n'a pas de chiffres à chasse fixe : `tabular-nums` n'y peut rien.
 * C'est assumé — un bloc porte un chiffre, pas une colonne à aligner.
 */
export function Kpi({ libelle, valeur, detail, echo, alerte = false, aide, className = '', }) {
    return (_jsxs("div", { className: `${CLASSE_CARTE} px-2 py-1.5 md:px-3 md:py-2 ${className}`.trim(), children: [_jsxs("div", { className: "flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-charbon/50 md:text-xs", children: [libelle, aide && _jsx(Aide, { texte: aide })] }), _jsx("div", { className: `font-display text-lg font-semibold md:text-xl ${alerte ? "text-red-700 before:content-['⚠_']" : ''}`, children: valeur }), detail && _jsx("div", { className: "text-[10px] leading-tight tabular-nums text-charbon/50 md:text-xs", children: detail }), echo && _jsx("div", { className: "text-[10px] leading-tight tabular-nums text-charbon/45 md:text-xs", children: echo })] }));
}
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
export function BlocInformation({ titre, aide, droite, children, className = '', }) {
    return (_jsxs("section", { className: `px-3 py-2 ${CLASSE_CARTE} ${className}`.trim(), children: [_jsxs("div", { className: `mb-1 flex items-center gap-1.5 ${CLASSE_INTITULE}`, children: [titre, aide && _jsx(Aide, { texte: aide }), droite && _jsx("span", { className: "ml-auto flex items-center leading-none normal-case tracking-normal text-charbon", children: droite })] }), _jsx("p", { className: "flex flex-nowrap items-baseline gap-x-3 overflow-x-auto whitespace-nowrap text-sm text-charbon tabular-nums", children: children })] }));
}
