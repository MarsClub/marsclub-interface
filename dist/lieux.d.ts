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
/** La période d'un shift, dérivée de l'horaire — jamais stockée. */
export type PeriodeShift = 'journee' | 'soiree';
/**
 * Le libellé d'une zone, emoji compris : Cuisine 🧑🏻‍🍳, Salle ☀️ le jour /
 * 🌙 le soir, Management sans emoji (règle CLAUDE.md — le hors-service n'a
 * pas de repère visuel, c'est un mot). Une seule fois par rangée ou par
 * sous-groupe, jamais répété colonne par colonne.
 */
export declare function libelleZone(equipe: Zone, periode?: PeriodeShift): string;
/**
 * La cellule de lieu fusionnée (05/09/2026) : le même aplat que
 * `PastilleLieu`, pensée pour couvrir plusieurs rangées de zone d'un seul
 * tenant — la matrice du planning, un bloc de revue groupé. Le nom de la
 * maison s'y lit une fois par bloc, jamais ligne à ligne.
 *
 * `vertical` tourne le texte à 90° pour une colonne étroite fusionnée par
 * `grid-row: span N` : c'est l'appelant qui calcule N (le nombre de rangées
 * de zone du bloc) et le pose en `style` — cette cellule ne fait que l'aplat
 * et le texte.
 */
export declare function BlocLieu({ lieu, vertical, className, style, }: {
    lieu: Lieu;
    /** Texte vertical, pour une colonne étroite fusionnée sur plusieurs rangées. */
    vertical?: boolean;
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
