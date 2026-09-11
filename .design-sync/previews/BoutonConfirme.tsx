/*
 * Les cellules de cet aperçu :
 *
 * - `Publier` — le cas d'origine : publier envoie un email à toute l'équipe
 *   et fait courir le délai de prévenance. La question nomme LA CONSÉQUENCE,
 *   pas « Confirmer ? » — personne ne relit l'intitulé du bouton une fois la
 *   boîte ouverte.
 * - `DansUneBarre` — à sa place : le geste qui engage en dernier à droite,
 *   le destructif isolé à gauche.
 *
 * ⚠️ Il s'appuie sur le `confirm()` du navigateur, pas sur une fenêtre
 * maison : natif sur iPad, sans état, et il ne peut pas laisser l'écran à
 * moitié bloqué si quelque chose échoue à côté. La boîte ne s'ouvre qu'au
 * clic — un aperçu statique montre donc le bouton, pas la question.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BarreActions, BoutonConfirme, CLASSE_BOUTON } from 'marsclub-interface'

export const Publier = () => (
  <div className="flex flex-wrap gap-2">
    <BoutonConfirme
      className={CLASSE_BOUTON}
      question="Publier la semaine S37 ? L'équipe reçoit le planning par email et le délai de prévenance commence à courir."
    >
      Publier ✓
    </BoutonConfirme>
    <BoutonConfirme
      className={CLASSE_BOUTON}
      question="Dépublier la semaine S37 ? Les emails déjà partis ne seront pas rappelés."
    >
      Dépublier
    </BoutonConfirme>
  </div>
)

export const DansUneBarre = () => (
  <div className="max-w-lg">
    <BarreActions gauche={<button className={CLASSE_BOUTON}>Dupliquer</button>}>
      <button className={CLASSE_BOUTON}>Enregistrer</button>
      <BoutonConfirme
        className={CLASSE_BOUTON}
        question="Clôturer le mois d'août ? Le décompte légal est figé et l'export Payfit devient définitif."
      >
        Clôturer 🔒
      </BoutonConfirme>
    </BarreActions>
  </div>
)
