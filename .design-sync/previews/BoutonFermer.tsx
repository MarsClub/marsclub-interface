/*
 * Les cellules de cet aperçu :
 *
 * - `DansUnPanneau` — sa place, et elle ne bouge pas : « Fermer » en HAUT À
 *   DROITE, les gestes qui changent quelque chose en BAS À DROITE. Hora les
 *   avait des deux façons ; on fermait au milieu de deux boutons qui, eux,
 *   engagent.
 * - `Seul` — le bouton nu : bordé, il dit « Fermer », et le survol le
 *   remplit de charbon comme tout bouton d'action.
 *
 * ⚠️ `Lien` est injectable : le paquet ne dépend PAS de Next, sans quoi il
 * l'imposerait à tout outil futur. Une application Next passe son `Link`
 * (`<BoutonFermer href="/planning" Lien={Link} />`) ; les autres laissent le
 * `<a>` par défaut, comme ici.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BarreActions, BoutonFermer, CLASSE_BOUTON, CLASSE_CHAMP, Libelle, SousSection } from 'marsclub-interface'

export const DansUnPanneau = () => (
  <div className="max-w-lg">
    <SousSection>
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">Shift de Franck — mardi 9 septembre</h3>
        <BoutonFermer href="#planning" />
      </div>
      <div className="flex gap-3">
        <div>
          <Libelle>Début</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="18:30" />
        </div>
        <div>
          <Libelle>Fin</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="00:30" />
        </div>
      </div>
      <BarreActions gauche={<button className={CLASSE_BOUTON}>Supprimer</button>}>
        <button className={CLASSE_BOUTON}>Enregistrer ✓</button>
      </BarreActions>
    </SousSection>
  </div>
)

export const Seul = () => (
  <div className="w-fit">
    <BoutonFermer href="#planning" />
  </div>
)
