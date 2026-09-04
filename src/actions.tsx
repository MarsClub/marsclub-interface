import { CLASSE_FERMER } from './boutons.js'

/**
 * Un seul bouton d'action (Roch, 04/09/2026 — « une couleur, un sens »).
 *
 * Avant, la charte avait quatre poids et faisait porter la hiérarchie par la
 * couleur : dès qu'un écran avait deux actions il fallait choisir laquelle
 * était « principale », et chaque écran choisissait autrement — 53 aplats
 * charbon pour des boutons, 22 écrans mélangeant plein et bordé.
 *
 * Désormais : **texte charbon sur fond blanc, cadre charbon/30 ; au survol,
 * au doigt posé ou au clavier, le bouton se remplit de charbon** — c'est la
 * sélection qui vient. L'aplat charbon n'existe plus au repos. La hiérarchie
 * se dit par la PLACE (le geste qui engage est le dernier à droite), par
 * l'ICÔNE (seul le geste qui engage en porte une : commit, push, coche,
 * cadenas) et par la TAILLE (trois seulement : standard, compacte dans une
 * ligne, pleine largeur sur téléphone) — jamais par la couleur.
 */
const SURVOL = 'hover:border-charbon hover:bg-charbon hover:text-creme focus-visible:border-charbon focus-visible:bg-charbon focus-visible:text-creme focus-visible:outline-none transition-colors'

export const CLASSE_BOUTON = `rounded-lg border border-charbon/30 bg-white px-3 py-1.5 text-sm font-semibold text-charbon ${SURVOL}`
/** Dans une ligne de tableau ou de liste : plus petit, même règle. */
export const CLASSE_BOUTON_COMPACT = `rounded-md border border-charbon/30 bg-white px-2 py-0.5 text-xs font-semibold text-charbon ${SURVOL}`
/** Sur téléphone, pleine largeur et 44 px de haut. */
export const CLASSE_BOUTON_TELEPHONE = `w-full rounded-lg border border-charbon/30 bg-white px-4 py-3 text-base font-semibold text-charbon ${SURVOL}`

/** Alias gardés pour les écrans écrits avant le 04/09/2026 : tous rendent le même bouton. */
export const CLASSE_PRINCIPAL = CLASSE_BOUTON
export const CLASSE_TERTIAIRE = CLASSE_BOUTON
export const CLASSE_PRINCIPAL_TELEPHONE = CLASSE_BOUTON_TELEPHONE

/**
 * Un état acquis, NON cliquable : « publié ✓ », « mois clôturé le… ». Aplat
 * sable, la couleur de fond de la charte (§3). Un lien ou un bouton ne
 * prend jamais cette classe : ce qui se clique est un bouton.
 */
export const CLASSE_ACQUIS = 'rounded-lg bg-sable px-3 py-1.5 text-sm font-semibold text-charbon'
/** Un état en cours, pas encore acquis : le cadre sable sans fond. */
export const CLASSE_EN_COURS = 'rounded-lg border-2 border-sable bg-transparent px-3 py-1.5 text-sm font-semibold text-charbon'
export const CLASSE_VIDE =
  'rounded-lg border border-dashed border-charbon/40 bg-white px-3 py-1.5 text-sm font-semibold text-charbon/70'

/** Les chevrons ‹ › et le retour au présent d'un en-tête daté : des boutons. */
export const CLASSE_NAV = `rounded-lg border border-charbon/30 bg-white px-2.5 py-1 font-semibold text-charbon ${SURVOL}`

/**
 * La barre d'actions d'un formulaire : trait sable au-dessus, le destructif
 * (ou « Dupliquer ») isolé à GAUCHE, le reste à DROITE, le geste qui engage
 * en dernier. L'écart physique protège du faux clic.
 */
export function BarreActions({ gauche, children }: { gauche?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 border-t-2 border-sable pt-3">
      {gauche}
      <div className="grow" />
      {children}
    </div>
  )
}
