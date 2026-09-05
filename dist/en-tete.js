import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CLASSE_NAV } from './actions.js';
/**
 * L'en-tête de contexte daté (charte §2), le même ordre partout :
 * `[badge période] [libellé] [‹ ›] [retour au présent] [cartouche]`.
 *
 * **Pas de titre de page** : le rail dit où l'on est. Le libellé est le
 * contexte — une plage de dates, un mois —, pas le nom de l'écran ; il se
 * rend en Atma mais n'est pas un `<h1>`. Le badge est en SABLE (04/09/2026) :
 * l'aplat charbon est le survol d'un bouton, jamais un repère de période. Neuf copies dans Hora avant le
 * 04/09/2026, dont trois sans badge et deux avec un glyphe à la place du mot.
 *
 * `Lien` est injectable, comme pour `BoutonFermer`.
 */
export function EnTete({ badge, libelle, precedent, suivant, present, children, Lien = 'a', compact = false, }) {
    return (_jsxs("div", { className: `flex items-center ${compact ? 'flex-nowrap gap-2' : 'flex-wrap gap-3'}`, children: [badge && (_jsx("span", { className: `shrink-0 rounded-lg bg-sable px-2.5 py-1 font-display font-semibold text-charbon ${compact ? 'text-sm' : 'text-lg'}`, children: badge })), _jsx("div", { className: `min-w-0 truncate font-display font-semibold ${compact ? 'text-base' : 'text-2xl'}`, children: libelle }), (precedent || suivant || present) && (_jsxs("div", { className: "flex shrink-0 items-center gap-1", children: [precedent && (_jsx(Lien, { href: precedent, className: CLASSE_NAV, children: "\u2039" })), suivant && (_jsx(Lien, { href: suivant, className: CLASSE_NAV, children: "\u203A" })), present && (_jsx(Lien, { href: present.href, className: `ml-1 ${CLASSE_NAV} text-sm`, children: present.libelle }))] })), children] }));
}
