/*
 * Les cellules de cet aperçu :
 *
 * - `TroisOnglets` — la rangée ordinaire d'un outil : l'actif en charbon
 *   souligné, les autres estompés.
 * - `DeuxOnglets` — le minimum. En dessous, la rangée ne s'affiche PAS :
 *   un onglet seul serait un titre de page déguisé, et la charte n'en veut pas.
 * - `SousUnEnTete` — à sa place réelle, juste sous le contexte daté.
 *
 * ⚠️ Un onglet déplace le regard, il ne déclenche rien.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { EnTete, Onglets } from 'marsclub-interface'

export const TroisOnglets = () => (
  <Onglets
    onglets={[
      { href: '#semaine', libelle: 'Semaine', actif: true },
      { href: '#mois', libelle: 'Mois', actif: false },
      { href: '#cloture', libelle: 'Clôture', actif: false },
    ]}
  />
)

export const DeuxOnglets = () => (
  <Onglets
    onglets={[
      { href: '#planning', libelle: 'Planning', actif: false },
      { href: '#pointeuse', libelle: 'Pointeuse', actif: true },
    ]}
  />
)

export const SousUnEnTete = () => (
  <div>
    <div className="mb-4">
      <EnTete badge="S37" libelle="8 – 14 septembre 2026" precedent="#s36" suivant="#s38" present={null} />
    </div>
    <Onglets
      onglets={[
        { href: '#planning', libelle: 'Planning', actif: true },
        { href: '#propositions', libelle: 'Propositions', actif: false },
        { href: '#indisponibilites', libelle: 'Indisponibilités', actif: false },
      ]}
    />
  </div>
)
