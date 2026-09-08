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
 *
 * ⚠️ **La carte est en `fixed`, positionnée à la main** (3.5.0, Roch,
 * 08/09/2026 : « il faut empêcher les fenêtres des tooltips de déborder des
 * écrans mobiles »). Deux raisons, et la seconde est la plus vicieuse :
 *
 * 1. En `absolute left-0`, une carte de 288 px ouverte depuis un « ? » posé
 *    à droite d'un écran de 375 px sortait de l'écran par la droite. On
 *    mesure donc le bouton à l'ouverture et on RAMÈNE la carte dans la
 *    fenêtre, à 8 px des bords.
 * 2. `CarteSection` porte `overflow-hidden` : une carte en `absolute` posée
 *    dans sa bande de titre — le « ? » en haut à droite, la place normale —
 *    serait tout simplement COUPÉE. `fixed` échappe au découpage.
 *
 * Conséquence assumée : une carte en `fixed` ne suit pas le défilement. Elle
 * se ferme donc au moindre `scroll` ou `resize`, plutôt que de flotter
 * détachée de son bouton.
 */
export declare function Aide({ texte, className }: {
    texte: string;
    className?: string;
}): import("react").JSX.Element;
