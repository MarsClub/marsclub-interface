import { jsx as _jsx } from "react/jsx-runtime";
const BORDURE = {
    refus: 'border-red-600 bg-white',
    vigilance: 'border-orange-400 bg-white',
    ok: 'border-sable bg-sable/40',
};
export const classeBandeau = (ton) => `rounded-lg border-2 px-3 py-2 text-sm font-semibold ${BORDURE[ton]}`;
export function Bandeau({ ton, children, className = '' }) {
    return (_jsx("div", { role: ton === 'refus' ? 'alert' : 'status', className: `${classeBandeau(ton)} ${className}`.trim(), children: children }));
}
/**
 * Une valeur hors repère — un ratio au-dessus du seuil, un prix trop vieux,
 * un chiffre qui manque : UNE seule nuance d'orange, en texte, jamais en
 * aplat. Le mot qui explique va à côté ; la couleur seule ne dit rien.
 */
export const CLASSE_HORS_REPERE = 'font-semibold text-orange-700';
/** Un état vide qui parle : une phrase centrée, qui dit quoi faire ou pourquoi c'est vide. */
export function Vide({ children, className = '' }) {
    return _jsx("p", { className: `px-3 py-6 text-center text-sm text-charbon/60 ${className}`.trim(), children: children });
}
