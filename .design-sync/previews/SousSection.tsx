/*
 * Les cellules de cet aperçu :
 *
 * - `AvecTitre` — une sous-section dans un panneau de fiche : un titre en
 *   Atma, un contenu.
 * - `SansTitre` — le même cadre sable, sans titre : pour grouper sans
 *   annoncer.
 * - `DeuxCote` — deux sous-sections côte à côte, comme dans une fiche de
 *   réglages.
 *
 * ⚠️ `SousSection` est le cadre d'un contenu DANS un panneau ; `CarteSection`
 * est le cadre d'une section de page, avec sa bande de titre sable.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_CHAMP, Libelle, SousSection } from 'marsclub-interface'

export const AvecTitre = () => (
  <div className="max-w-lg">
    <SousSection titre="Pause et repas">
      <p className="text-sm text-charbon/75">
        Le seuil de pause est de 4 h 30, inclusif : un shift de 4 h 30 pile déclenche le décompte de 30 minutes.
        Rien ne se saisit — les cases de la clôture sont des dérogations, jamais la saisie normale.
      </p>
    </SousSection>
  </div>
)

export const SansTitre = () => (
  <div className="max-w-lg">
    <SousSection>
      <div className="flex flex-wrap gap-3">
        <div>
          <Libelle>Seuil de pause</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="4 h 30" />
        </div>
        <div>
          <Libelle>Durée de pause</Libelle>
          <input className={CLASSE_CHAMP} defaultValue="30 min" />
        </div>
      </div>
    </SousSection>
  </div>
)

export const DeuxCote = () => (
  <div className="grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-2">
    <SousSection titre="Journée">
      <p className="text-sm tabular-nums text-charbon/75">
        Commence avant 15 h 30, ou finit avant 18 h 30. Qui finit à 15 h 30 mange après son shift.
      </p>
    </SousSection>
    <SousSection titre="Soirée">
      <p className="text-sm tabular-nums text-charbon/75">
        Commence après 15 h 30 ET finit après 18 h 30 — fins mesurées en absolu, minuit compris.
      </p>
    </SousSection>
  </div>
)
