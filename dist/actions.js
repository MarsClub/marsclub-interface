import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CLASSE_FERMER } from './boutons.js';
/**
 * Les poids d'action de la charte (§3), en classes — un écran se lit par ses
 * boutons, et quatre poids ne se mélangent pas. Hora en avait six gabarits
 * de « principal » et trois de « tertiaire » (revue du 04/09/2026).
 *
 * | Poids       | Usage                                           |
 * |-------------|-------------------------------------------------|
 * | principal   | fait avancer : créer, valider, publier, envoyer |
 * | acquis      | un état réversible : publié ✓, validé ✓          |
 * | tertiaire   | naviguer, fermer, modifier, exporter            |
 * | vide        | à pourvoir, non renseigné                       |
 *
 * **Un seul principal par zone.** Le destructif est un tertiaire isolé à
 * gauche de la barre — jamais un aplat rouge.
 */
export const CLASSE_PRINCIPAL = 'rounded-lg bg-charbon px-4 py-1.5 text-sm font-semibold text-creme';
export const CLASSE_ACQUIS = 'rounded-lg bg-sable px-4 py-1.5 text-sm font-semibold text-charbon';
/** Tertiaire = la forme de « Fermer » : naviguer, modifier, exporter. */
export const CLASSE_TERTIAIRE = CLASSE_FERMER;
/**
 * Le principal d'un écran de téléphone — la clôture de caisse, « J'accepte
 * cette mission » : pleine largeur, 44 px de haut. ⚠️ Une classe à part, et
 * non `CLASSE_PRINCIPAL` + `text-base` : Tailwind v4 émet `text-sm` après
 * `text-base`, la petite gagnerait.
 */
export const CLASSE_PRINCIPAL_TELEPHONE = 'w-full rounded-lg bg-charbon px-4 py-3 text-base font-semibold text-creme';
/**
 * Une bascule à choix (charte §4) : jours, personnes, variantes — l'état
 * sélectionné en charbon, l'autre en tertiaire. Ce n'est PAS un filtre (qui
 * se dit par le cadre) : une bascule engage ce qu'on va écrire.
 */
export const classeBascule = (selectionne) => selectionne ? 'rounded-lg border border-charbon bg-charbon px-3 py-1.5 text-sm font-semibold text-creme' : CLASSE_TERTIAIRE;
export const CLASSE_VIDE = 'rounded-lg border border-dashed border-charbon/40 bg-white px-3 py-1.5 text-sm font-semibold text-charbon/70';
/** Les chevrons ‹ › et le retour au présent d'un en-tête daté. */
export const CLASSE_NAV = 'rounded-lg border border-charbon/30 bg-white px-2.5 py-1 font-semibold hover:border-charbon';
/**
 * La barre d'actions d'un formulaire : trait sable au-dessus, le destructif
 * (ou « Dupliquer ») à GAUCHE, Fermer et l'action principale à DROITE.
 * `gauche` reste isolé par un espace : l'écart physique protège du faux clic.
 */
export function BarreActions({ gauche, children }) {
    return (_jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-2 border-t-2 border-sable pt-3", children: [gauche, _jsx("div", { className: "grow" }), children] }));
}
