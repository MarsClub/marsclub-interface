/**
 * Un bouton qui demande confirmation avant de soumettre son formulaire
 * (20/08/2026).
 *
 * Il existe pour les gestes qui SORTENT de l'outil : publier envoie un email
 * à toute une équipe et fait courir le délai de prévenance, dépublier ne
 * rappelle rien de ce qui est déjà parti. Ces deux-là partaient au premier
 * clic, à côté de boutons sans conséquence et de la même taille — un doigt
 * qui glisse sur un iPad suffisait.
 *
 * La question est volontairement écrite en toutes lettres plutôt que
 * « Confirmer ? » : ce qu'il faut peser, c'est la conséquence, et personne ne
 * relit l'intitulé du bouton une fois la boîte ouverte.
 *
 * On s'appuie sur `confirm()` du navigateur, pas sur une fenêtre maison :
 * elle est native sur iPad, ne dépend d'aucun état, et ne peut pas laisser
 * l'écran à moitié bloqué si quelque chose échoue à côté.
 */
export declare function BoutonConfirme({ question, className, title, children, }: {
    /** La conséquence, en une phrase. C'est elle qu'on lit, pas le bouton. */
    question: string;
    className?: string;
    title?: string;
    children: React.ReactNode;
}): import("react").JSX.Element;
