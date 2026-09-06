/**
 * Les deux maisons, en un seul endroit (04/09/2026).
 *
 * Le libellé et l'aplat étaient recopiés six fois dans Hora — dont une avec
 * les hexadécimaux en dur dans un `style=`. Le couple libellé + couleur ne
 * vit plus qu'ici : jaune BāM et vert OLLā **en aplat de fond uniquement**,
 * texte charbon dessus, jamais de couleur de marque en texte (lisibilité
 * plein soleil, et les PDF s'impriment).
 */
export type Lieu = 'bam' | 'olla';
/**
 * Les deux maisons, ou le périmètre entier (Roch, 04/09/2026) : « puisque
 * l'aplat est au BāM et à OLLā, il faut aussi que Mārs Clūb ait son aplat
 * avec sa couleur, sinon ça tranche trop dans les menus ». La couleur de
 * la maison entière est le **sable** — la troisième couleur de l'identité,
 * celle des états acquis et des pastilles ; le charbon est le texte et
 * l'action, le crème est le fond.
 */
export type Maison = Lieu | 'mc';
export declare const LIBELLE_LIEU: Record<Lieu, string>;
/** Le libellé d'un périmètre, entier compris — l'abréviation interne « 🏡 MC ». */
export declare const LIBELLE_MAISON: Record<Maison, string>;
/**
 * Les hexadécimaux, pour les seuls endroits qui ne savent pas lire une
 * classe : un `style=`, un PDF, un email. Partout ailleurs, la classe.
 */
export declare const COULEUR_LIEU: Record<Lieu, string>;
/** La classe d'aplat d'une maison. */
export declare const classeAplatLieu: (lieu: Maison) => "bg-jaune-bam" | "bg-vert-olla" | "bg-sable";
/**
 * La pastille « BāM » / « OLLā ». Deux variantes, décidées par Roch le
 * 04/09/2026, toutes deux permises selon le contexte et la surface :
 *
 * - **aplat** (défaut des OUTILS INTERNES) : le nom en charbon sur sa
 *   couleur — le repère le plus rapide d'un écran de travail ;
 * - **neutre** (défaut des DISPOSITIFS PUBLICS : site, imprimés) : le nom
 *   en charbon sur fond blanc, la couleur en liseré à gauche — la règle de
 *   marque, « un nom ne se pose jamais sur sa propre couleur en aplat ».
 *
 * Ce sont des défauts, pas des interdits : ils se renversent au cas par cas.
 */
export declare function PastilleLieu({ lieu, variante, className, }: {
    /** Une maison, ou `mc` : le périmètre entier, en sable (04/09/2026). */
    lieu: Maison;
    variante?: 'aplat' | 'neutre';
    className?: string;
}): import("react").JSX.Element;
/**
 * La zone d'un shift : cuisine, salle, ou management (hors service, §13 de
 * la spec de Hora). Jamais un shift-type nommé — le libellé se dérive de
 * l'équipe et, pour la salle seule, de la période (05/09/2026, « on ne doit
 * pas répéter » : Roch a retoqué le `libelle` composé à la main, « BāM 🧑🏻‍🍳 »,
 * qui mélangeait lieu et zone dans une seule chaîne, recopiée ligne à ligne).
 */
export type Zone = 'salle' | 'cuisine' | 'management';
/**
 * Le libellé d'une zone (05/09/2026, revu le même jour : « supprime les
 * emoji de salle et cuisine ») — un mot, jamais une icône. Une seule fois
 * par rangée ou par sous-groupe, jamais répété colonne par colonne.
 */
export declare function libelleZone(equipe: Zone): string;
/** La mise en avant d'un en-tête de zone — nettement plus visible qu'un intitulé courant (05/09/2026). */
export declare const CLASSE_ZONE = "text-sm font-bold uppercase tracking-wide text-charbon";
/**
 * Le nom d'un shift-type, dérivé du lieu et de la zone (05/09/2026) — plus
 * de saisie manuelle. Jusqu'ici composé à la main dans le formulaire de
 * réglages (« BāM 👩🏻‍🍳 »), il finissait par diverger des mots employés
 * partout ailleurs — le cas qui a fait tomber le badge d'un des deux shifts
 * de Franck le même jour, la fusion des jours consécutifs comparant des
 * `shiftTypeId`, jamais ce texte, mais le texte affiché, lui, ne
 * correspondait déjà plus à ce que la grille disait par ailleurs. Mêmes
 * mots que `PastilleLieu` et `libelleZone`, jamais recomposés : « BāM
 * Cuisine », « OLLā Salle », « BāM Management ».
 */
export declare function libelleShift(lieu: Lieu, equipe: Zone): string;
export declare function couleurShift(lieu: Lieu, equipe: Zone): string;
/**
 * Un shift dans une LISTE (Roch, 07/09/2026) — Mes shifts, Pointeuse : « ce
 * design [la cellule de la grille] vit dans un contexte de vue globale et
 * pas du tout de liste ». Une ligne, jamais colorée : la pastille de la
 * maison (son nom, en aplat comme partout dans les outils — pas une couleur
 * de shift), l'horaire, la durée, puis les icônes (repas, pause) après le
 * décompte, l'état à droite (« planifié », « réalisé », « en cours »).
 * La zone ne se dit pas : les gens savent où ils travaillent.
 */
export declare function LigneShift({ lieu, debut, fin, duree, icones, etat, droite, className, }: {
    lieu: Lieu;
    debut: string;
    fin: string;
    /** Déjà formatée (« 6h30 ») — la ligne ne calcule rien. */
    duree?: string;
    /** Après la durée : « ⏸️ 🍴 », ce que ce service compte. */
    icones?: React.ReactNode;
    etat?: React.ReactNode;
    /** Tout à droite, après l'état : un bouton compact, une mention. */
    droite?: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/**
 * Une journée dans une liste de shifts (Roch, 07/09/2026 : « regrouper les
 * shifts par jour, même si deux lieux ») : son nom en titre, son total à
 * droite en petit, ses lignes dessous. Un trait sable entre deux jours.
 */
export declare function Journee({ titre, droite, children, className, }: {
    titre: React.ReactNode;
    droite?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}): import("react").JSX.Element;
/**
 * La cellule de lieu fusionnée (05/09/2026) : le même aplat que
 * `PastilleLieu`, pensée pour couvrir plusieurs rangées de zone d'un seul
 * tenant — la matrice du planning, un bloc de revue groupé. Le nom de la
 * maison s'y lit une fois par bloc, jamais ligne à ligne.
 *
 * ⚠️ **Toujours à l'horizontale** (Roch, 05/09/2026 : « écriture verticale
 * interdite ») — même fusionnée sur plusieurs rangées, dans une colonne
 * étroite. La colonne qui la porte doit être assez large pour « BāM »/« OLLā »
 * en toutes lettres ; ce n'est plus à cette cellule de s'y adapter en pivotant.
 */
export declare function BlocLieu({ lieu, className, style, }: {
    lieu: Lieu;
    className?: string;
    style?: React.CSSProperties;
}): import("react").JSX.Element;
/**
 * Le liseré bicolore fin entre deux blocs de lieu (05/09/2026) : une bande
 * jaune en haut, une bande verte en dessous — deux aplats solides empilés,
 * jamais un dégradé. Pensé pour occuper toute la largeur d'une matrice, entre
 * le bloc BāM et le bloc OLLā.
 */
export declare function LisereLieux({ className }: {
    className?: string;
}): import("react").JSX.Element;
