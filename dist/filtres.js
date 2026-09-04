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
/**
 * Un groupe encadré de petites commandes.
 *
 * Renommée depuis `ZoneFiltres` le 23/08/2026 : le cadre ne dit pas
 * « filtres », il dit « ces boutons vont ensemble ». Hora s'en sert pour les
 * filtres, pour les deux façons de créer, et pour les deux publications —
 * trois groupes qu'on lit d'un coup au lieu d'une file de boutons dont on ne
 * sait plus lequel appartient à quoi.
 */
export function Cartouche({ children }) {
    return (_jsx("div", { className: "flex flex-wrap items-center gap-1.5 rounded-xl border-2 border-sable bg-white/50 px-2 py-1 text-sm", children: children }));
}
/**
 * Le périmètre entier — les deux maisons — dans un filtre s'écrit « 🏡 MC »,
 * jamais « Mārs Clūb » (règle Roch, 04/09/2026, née dans Fama le 29/08 :
 * le nom entier faisait passer la barre de filtres à deux lignes sur
 * téléphone, six boutons dont un trois fois plus large que les autres).
 *
 * ⚠️ L'abréviation est INTERNE, réservée aux filtres et aux lignes de total
 * qui leur répondent. Partout où quelqu'un d'autre lit — un email, un PDF,
 * une page publique — la marque s'écrit « Mārs Clūb », avec ses deux macrons.
 */
export const MAISON_FILTRE = '🏡 MC';
