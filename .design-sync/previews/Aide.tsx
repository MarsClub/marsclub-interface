/*
 * Les cellules de cet aperçu :
 *
 * - `SurDesChiffres` — sa place réelle : accolée à l'intitulé d'un `Kpi`.
 *   Ce qui VARIE (le seuil, la valeur du jour) reste écrit sur la page ;
 *   seule la pédagogie se replie.
 * - `SurUnBlocInformation` — l'autre porteur habituel, en tête d'écran.
 * - `Nue` — le bouton seul, à côté d'un intitulé quelconque.
 *
 * ⚠️ **L'aperçu statique ne montre que le « ? »** : la carte s'ouvre au clic
 * (et se ferme au moindre défilement, parce qu'elle est en `fixed`). Au
 * survol, l'infobulle native `title` suffit ; au doigt — l'iPad n'a pas de
 * survol — le bouton ouvre la même phrase en carte. Un `title=` seul ne
 * suffit JAMAIS : invisible au doigt.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { Aide, BlocInformation, CLASSE_INTITULE, Kpi } from 'marsclub-interface'

export const SurDesChiffres = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
    <Kpi
      libelle="Ratio personnel"
      valeur="28,4 %"
      detail="seuil 30 %"
      aide="Le coût du personnel rapporté aux ventes du périmètre. L'équipe étant commune aux deux maisons, le ratio de lieu est un indicateur d'arbitrage, pas la vérité économique."
    />
    <Kpi
      libelle="Matière théorique"
      valeur="29,5 %"
      detail="seuil 30 %"
      aide="Ce que les fiches recettes disent que le vendu a coûté. Jamais extrapolé : on lit le chiffre que les fiches portent."
    />
    <Kpi
      libelle="Prime Cost"
      valeur="57,9 %"
      detail="seuil 60 %"
      aide="Personnel plus matière théorique. Les deux moitiés du coût qu'une maison maîtrise vraiment."
    />
  </div>
)

export const SurUnBlocInformation = () => (
  <div className="max-w-2xl">
    <BlocInformation
      titre="Valorisation gérance"
      aide="Les gérants en service sont comptés dans les ratios à leur taux standard de poste, jamais dans l'export Payfit. Ce n'est pas un décaissement : sans cette mention, l'écart avec le coût réel passerait pour une erreur de rapprochement."
    >
      <span className="font-semibold">840 €</span>
      <span className="text-charbon/60">sur 5 174 € de coût projeté</span>
    </BlocInformation>
  </div>
)

export const Nue = () => (
  <div className="flex items-center gap-1.5">
    <span className={CLASSE_INTITULE}>Seuil de pause</span>
    <Aide texte="4 h 30, et le seuil est inclusif : 4 h 30 pile déclenche le décompte. Il traduit la fin du service déjeuner à 15 h 30 — qui finit à 15 h 30 mange après son shift, qui finit à 16 h a mangé pendant." />
  </div>
)
