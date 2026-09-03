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
export declare function IconePersonne({ className }: {
    className?: string;
}): import("react").JSX.Element;
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
export declare function PorteurJeton({ prenom, variante, className, }: {
    prenom: string;
    variante?: 'rail' | 'ligne';
    className?: string;
}): import("react").JSX.Element;
