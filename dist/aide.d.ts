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
export declare function Aide({ texte, className }: {
    texte: string;
    className?: string;
}): import("react").JSX.Element;
