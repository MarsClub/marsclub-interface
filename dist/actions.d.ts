export declare const CLASSE_BOUTON = "rounded-lg border border-charbon/30 bg-white px-3 py-1.5 text-sm font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
/** Dans une ligne de tableau ou de liste : plus petit, même règle. */
export declare const CLASSE_BOUTON_COMPACT = "rounded-md border border-charbon/30 bg-white px-2 py-0.5 text-xs font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
/** Sur téléphone, pleine largeur et 44 px de haut. */
export declare const CLASSE_BOUTON_TELEPHONE = "w-full rounded-lg border border-charbon/30 bg-white px-4 py-3 text-base font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
/** Alias gardés pour les écrans écrits avant le 04/09/2026 : tous rendent le même bouton. */
export declare const CLASSE_PRINCIPAL = "rounded-lg border border-charbon/30 bg-white px-3 py-1.5 text-sm font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
export declare const CLASSE_TERTIAIRE = "rounded-lg border border-charbon/30 bg-white px-3 py-1.5 text-sm font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
export declare const CLASSE_PRINCIPAL_TELEPHONE = "w-full rounded-lg border border-charbon/30 bg-white px-4 py-3 text-base font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
/**
 * Un état acquis, NON cliquable : « publié ✓ », « mois clôturé le… ». Aplat
 * sable, la couleur de fond de la charte (§3). Un lien ou un bouton ne
 * prend jamais cette classe : ce qui se clique est un bouton.
 */
export declare const CLASSE_ACQUIS = "rounded-lg bg-sable px-3 py-1.5 text-sm font-semibold text-charbon";
/** Un état en cours, pas encore acquis : le cadre sable sans fond. */
export declare const CLASSE_EN_COURS = "rounded-lg border-2 border-sable bg-transparent px-3 py-1.5 text-sm font-semibold text-charbon";
export declare const CLASSE_VIDE = "rounded-lg border border-dashed border-charbon/40 bg-white px-3 py-1.5 text-sm font-semibold text-charbon/70";
/** Les chevrons ‹ › et le retour au présent d'un en-tête daté : des boutons. */
export declare const CLASSE_NAV = "rounded-lg border border-charbon/30 bg-white px-2.5 py-1 font-semibold text-charbon hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors";
/**
 * La barre d'actions d'un formulaire : trait sable au-dessus, le destructif
 * (ou « Dupliquer ») isolé à GAUCHE, le reste à DROITE, le geste qui engage
 * en dernier. L'écart physique protège du faux clic.
 */
export declare function BarreActions({ gauche, children }: {
    gauche?: React.ReactNode;
    children: React.ReactNode;
}): import("react").JSX.Element;
