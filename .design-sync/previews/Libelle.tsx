/*
 * Les cellules de cet aperçu :
 *
 * - `UneRangeeDeChamps` — l'intitulé va AU-DESSUS du champ, jamais à côté :
 *   une rangée de champs garde alors la même hauteur quelle que soit la
 *   longueur des mots.
 * - `IntituleDeBloc` — l'autre intitulé, `CLASSE_INTITULE` : petites
 *   capitales estompées, au-dessus d'un chiffre ou d'une ligne d'ajout.
 *   Onze gabarits de champ et quatre définitions de `Libelle` dans Hora
 *   avant le 04/09/2026 — d'où ce composant.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_CHAMP, CLASSE_INTITULE, Libelle, SousSection } from 'marsclub-interface'

export const UneRangeeDeChamps = () => (
  <div className="max-w-xl">
    <SousSection titre="Nouveau shift">
      <div className="flex flex-wrap gap-3">
        <div>
          <Libelle>Personne</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="Franck" />
        </div>
        <div>
          <Libelle>Début</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="18:30" />
        </div>
        <div>
          <Libelle>Fin</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="00:30" />
        </div>
        <div>
          <Libelle>Taux horaire</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="14,20 €" />
        </div>
      </div>
    </SousSection>
  </div>
)

export const IntituleDeBloc = () => (
  <div className="flex max-w-md flex-col gap-3">
    <div>
      <div className={CLASSE_INTITULE}>Heures soirée</div>
      <p className="font-display text-xl font-semibold">146 h 30</p>
    </div>
    <div>
      <div className={CLASSE_INTITULE}>Repas décomptés</div>
      <p className="font-display text-xl font-semibold">214</p>
    </div>
  </div>
)
