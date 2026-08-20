import { jsx as _jsx } from "react/jsx-runtime";
/** Le signal d'état, commun à tous les filtres. */
export const cadreFiltre = (actif) => actif ? 'border-2 border-charbon' : 'border-2 border-charbon/15 hover:border-charbon/40';
/** Un filtre ordinaire : Salle, Cuisine, Personne, Mārs Clūb… */
export const classeFiltre = (actif) => `rounded-lg bg-white px-2.5 py-1 font-semibold ${cadreFiltre(actif)}`;
/** Un filtre d'enseigne, qui porte sa couleur. */
export const classeFiltreLieu = (lieu, actif) => `rounded-lg px-2.5 py-1 font-bold ${lieu === 'bam' ? 'bg-jaune-bam' : 'bg-vert-olla'} ${cadreFiltre(actif)}`;
/** Une action DANS la barre de filtres — retirer les filtres, par exemple. */
export const classeActionFiltre = 'rounded-lg border-2 border-charbon/15 bg-white px-2 py-1 font-semibold hover:border-charbon';
/** La zone qui les contient. */
export function ZoneFiltres({ children }) {
    return (_jsx("div", { className: "flex flex-wrap items-center gap-1.5 rounded-xl border-2 border-sable bg-white/50 px-2 py-1 text-sm", children: children }));
}
