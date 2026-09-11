/*
 * Les cellules de cet aperçu :
 *
 * - `PanneauMural` — sa raison d'être : l'iPad mural, un chiffre qu'on veut
 *   voir de loin. Panneau charbon, palettes creusées, l'unité en clair à
 *   côté — elle ne roule pas, on la lit d'un coup.
 * - `AvecIntitule` — l'intitulé au-dessus, quand l'unité ne suffit pas à
 *   dire ce que le nombre veut dire.
 * - `Compact` — pour un coin d'écran plutôt qu'un panneau : marges serrées,
 *   palettes plus petites, l'unité passe SOUS le chiffre.
 *
 * ⚠️ Le rendu du serveur porte DÉJÀ la valeur finale : sans JavaScript, ou
 * dans un lecteur d'écran, on lit le bon nombre. Le roulage n'est qu'un
 * habillage ajouté après l'hydratation, et `prefers-reduced-motion` le coupe
 * net. Un chiffre ne fait défiler que des chiffres, une lettre que des
 * lettres — la valeur reste toujours plausible en route.
 *
 * ⚠️ Le claquement (`.solari-palette`) vit dans `theme.css` : sans lui les
 * palettes changent sans claquer.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CompteurSolari } from 'marsclub-interface'

export const PanneauMural = () => (
  <div className="max-w-xl">
    <CompteurSolari valeur="612" unite="couverts cette semaine" />
  </div>
)

export const AvecIntitule = () => (
  <div className="max-w-xl">
    <CompteurSolari intitule="Avis Google" valeur="12" unite="cette semaine · 1 pour 53 couverts" />
  </div>
)

export const Compact = () => (
  <div className="w-56">
    <CompteurSolari compact valeur="57,9" unite="% de Prime Cost, seuil 60" />
  </div>
)
