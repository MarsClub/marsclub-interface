import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Qui est identifié, affiché en permanence (22/08/2026).
 *
 * **Pourquoi c'est permanent et pas dans un menu.** Nos outils s'ouvrent par
 * un lien personnel, jamais par un mot de passe : on suit le lien d'un
 * collègue sans s'en apercevoir, et on agit sous son nom. Roch l'a vécu — il
 * a suivi le lien de Franck et est resté identifié comme lui. Un écran qui ne
 * dit pas au nom de qui il agit laisse cette faute invisible.
 *
 * Il ne se clique pas et n'ouvre rien : ce n'est pas une commande, c'est un
 * état. Changer de porteur se fait en suivant son propre lien — il n'y a pas
 * d'autre geste à proposer.
 */
/** L'icône « personne » d'Octicons (GitHub), à la taille du texte. */
export function IconePersonne({ className = '' }) {
    return (_jsx("svg", { viewBox: "0 0 16 16", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", className: className, children: _jsx("path", { d: "M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.005 6.005 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" }) }));
}
/**
 * Le porteur du jeton en cours.
 *
 * Le prénom suffit : c'est ainsi qu'on se nomme en salle, et un rail étroit ne
 * tient pas un nom complet. `title` porte la phrase entière pour qui survole —
 * utile quand deux prénoms se ressemblent.
 *
 * **Deux allures, un seul composant** (23/08/2026). Hora avait fini par en
 * réécrire l'affichage à la main à deux endroits — barre du haut sur
 * téléphone, pied du menu — parce que la version du rail portait ses bordures
 * en dur. Trois rendus pour une seule information, c'est exactement ce que ce
 * paquet existe pour empêcher : la variante remplace la recopie.
 *
 * - `rail` : bloc encadré et centré, pour une colonne étroite ;
 * - `ligne` : inline et sans bordure, pour une barre ou un pied de panneau.
 */
export function PorteurJeton({ prenom, variante = 'rail', className = '', }) {
    const allure = variante === 'rail'
        ? 'mb-4 justify-center border-y border-sable py-1.5 text-charbon/70'
        : 'text-charbon/70';
    return (_jsxs("p", { title: `Vous êtes identifié·e comme ${prenom}.`, className: `flex items-center gap-1 text-sm ${allure} ${className}`.trim(), children: [_jsx(IconePersonne, { className: "shrink-0 opacity-60" }), _jsx("span", { className: "truncate font-semibold", children: prenom })] }));
}
