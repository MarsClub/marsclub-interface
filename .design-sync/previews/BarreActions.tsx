/*
 * Les cellules de cet aperçu :
 *
 * - `DestructifIsole` — la règle entière : trait sable au-dessus, le
 *   destructif (ou « Dupliquer ») isolé à GAUCHE, le reste à DROITE, le
 *   geste qui engage en dernier. L'écart physique protège du faux clic.
 * - `DeuxGestes` — sans destructif : tout à droite, l'engageant en dernier
 *   et seul à porter une icône.
 * - `UnSeulGeste` — le cas le plus courant en bas de fiche.
 *
 * ⚠️ La hiérarchie se dit par la PLACE, l'ICÔNE et la TAILLE — jamais par la
 * couleur. Tous ces boutons sont le même bouton : charbon sur blanc, et le
 * survol le remplit.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BarreActions, CLASSE_BOUTON, CLASSE_CHAMP, Libelle, SousSection } from 'marsclub-interface'

export const DestructifIsole = () => (
  <div className="max-w-xl">
    <SousSection titre="Shift-type">
      <div className="flex flex-wrap gap-3">
        <div>
          <Libelle>Début</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="11:30" />
        </div>
        <div>
          <Libelle>Fin</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="15:30" />
        </div>
      </div>
      <BarreActions gauche={<button className={CLASSE_BOUTON}>Supprimer</button>}>
        <button className={CLASSE_BOUTON}>Annuler</button>
        <button className={CLASSE_BOUTON}>Enregistrer ✓</button>
      </BarreActions>
    </SousSection>
  </div>
)

export const DeuxGestes = () => (
  <div className="max-w-xl">
    <BarreActions>
      <button className={CLASSE_BOUTON}>Exporter en CSV</button>
      <button className={CLASSE_BOUTON}>Publier ✓</button>
    </BarreActions>
  </div>
)

export const UnSeulGeste = () => (
  <div className="max-w-xl">
    <BarreActions>
      <button className={CLASSE_BOUTON}>Enregistrer ✓</button>
    </BarreActions>
  </div>
)
