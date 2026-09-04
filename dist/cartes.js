import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Aide } from './aide.js';
/**
 * Les cartes de la charte (§6) : le cadre de tout contenu structuré.
 */
/** La carte : listes, tableaux, panneaux. */
export const CLASSE_CARTE = 'rounded-xl border-2 border-sable bg-white/50';
/**
 * Une carte de section, avec sa bande de titre sable : un titre en Atma, un
 * sous-titre estompé qui dit d'où viennent les chiffres. Huit copies dans
 * Hora avant le 04/09/2026. Un tableau à l'intérieur défile dans son propre
 * `overflow-x-auto` — la page ne défile jamais horizontalement.
 */
export function CarteSection({ titre, sous, droite, children, className = '', }) {
    return (_jsxs("section", { className: `overflow-hidden ${CLASSE_CARTE} ${className}`.trim(), children: [_jsxs("div", { className: "flex flex-wrap items-baseline gap-2 bg-sable/40 px-3 py-1.5", children: [_jsx("h2", { className: "font-display font-semibold", children: titre }), sous && _jsx("span", { className: "text-xs text-charbon/60", children: sous }), droite && _jsx("span", { className: "ml-auto", children: droite })] }), children] }));
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
    return (_jsxs("div", { className: `${CLASSE_CARTE} px-2 py-1.5 md:px-3 md:py-2 ${className}`.trim(), children: [_jsxs("div", { className: "flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-charbon/50 md:text-xs", children: [libelle, aide && _jsx(Aide, { texte: aide })] }), _jsx("div", { className: `font-display text-lg font-semibold md:text-xl ${alerte ? 'text-orange-700' : ''}`, children: valeur }), detail && _jsx("div", { className: "text-[10px] leading-tight tabular-nums text-charbon/50 md:text-xs", children: detail }), echo && _jsx("div", { className: "text-[10px] leading-tight tabular-nums text-charbon/45 md:text-xs", children: echo })] }));
}
