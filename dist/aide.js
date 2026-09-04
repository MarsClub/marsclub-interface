'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, useState } from 'react';
/**
 * Une explication invariable, rangée derrière un « ? » (Roch, 03/09/2026) :
 * « les infos et explications qui sont invariables peuvent passer sur un
 * tooltip pour alléger la page — on aura vite compris quel indicateur
 * fonctionne comment. » Née dans le Pilotage d'Hora, montée ici le
 * 04/09/2026 : Victus s'en servait déjà onze fois.
 *
 * Au survol, l'infobulle native (`title`) suffit ; au doigt — l'iPad n'a pas
 * de survol — le bouton ouvre la même phrase en carte, et un second geste
 * la ferme. Ce qui VARIE (une valeur, un seuil, un état du jour) reste
 * écrit sur la page : seule la pédagogie se replie. ⚠️ Un `title=` seul ne
 * suffit jamais : invisible au doigt.
 */
export function Aide({ texte, className = '' }) {
    const [ouvert, setOuvert] = useState(false);
    const id = useId();
    return (_jsxs("span", { className: `relative inline-block align-middle ${className}`, children: [_jsx("button", { type: "button", "aria-label": "Explication", "aria-expanded": ouvert, "aria-controls": id, title: texte, onClick: () => setOuvert((o) => !o), onBlur: () => setOuvert(false), className: `inline-flex h-4 w-4 items-center justify-center rounded-full border text-[10px] font-bold leading-none ${ouvert ? 'border-charbon text-charbon' : 'border-charbon/30 text-charbon/55 hover:border-charbon hover:text-charbon'}`, children: "?" }), ouvert && (_jsx("span", { id: id, role: "tooltip", className: "absolute left-0 top-5 z-20 w-72 rounded-lg border-2 border-sable bg-creme px-3 py-2 text-left text-xs font-normal normal-case tracking-normal text-charbon shadow-lg", children: texte }))] }));
}
