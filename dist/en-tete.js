import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CLASSE_NAV } from './actions.js';
/**
 * L'en-tête de contexte daté (charte §2), le même ordre partout :
 * `[badge période] [libellé] [‹ ›] [retour au présent] [cartouche]`.
 *
 * **Pas de titre de page** : le rail dit où l'on est. Le libellé est le
 * contexte — une plage de dates, un mois —, pas le nom de l'écran ; il se
 * rend en Atma mais n'est pas un `<h1>`. Neuf copies dans Hora avant le
 * 04/09/2026, dont trois sans badge et deux avec un glyphe à la place du mot.
 *
 * `Lien` est injectable, comme pour `BoutonFermer`.
 */
export function EnTete({ badge, libelle, precedent, suivant, present, children, Lien = 'a', }) {
    return (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [badge && (_jsx("span", { className: "rounded-lg bg-charbon px-2.5 py-1 font-display text-lg font-semibold text-creme", children: badge })), _jsx("div", { className: "font-display text-2xl font-semibold", children: libelle }), (precedent || suivant || present) && (_jsxs("div", { className: "flex items-center gap-1", children: [precedent && (_jsx(Lien, { href: precedent, className: CLASSE_NAV, children: "\u2039" })), suivant && (_jsx(Lien, { href: suivant, className: CLASSE_NAV, children: "\u203A" })), present && (_jsx(Lien, { href: present.href, className: `ml-1 ${CLASSE_NAV} text-sm`, children: present.libelle }))] })), children] }));
}
