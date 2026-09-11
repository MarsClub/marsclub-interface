/*
 * Les cellules de cet aperçu :
 *
 * - `RangeeDuPilotage` — le cas d'origine : quatre chiffres côte à côte,
 *   chacun avec son seuil en détail et la valeur de l'autre maison en écho.
 *   La marge vient avant le ratio, toujours.
 * - `HorsRepere` — le seuil est dépassé : le chiffre prend le ⚠ et passe en
 *   rouge, la seule couleur hors palette, et elle ne dit qu'une chose.
 * - `AvecExplication` — la pédagogie invariable se replie derrière le « ? » ;
 *   ce qui VARIE (le seuil, la valorisation du jour) reste sur la page.
 * - `ChiffreSeul` — le bloc nu, quand il n'y a qu'un chiffre à lire.
 *
 * ⚠️ Ne jamais glisser de commentaire ENTRE deux exports : l'extracteur
 * d'exemples de `.prompt.md` le rattacherait au bloc précédent.
 */
import { Kpi } from 'marsclub-interface'

export const RangeeDuPilotage = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
    <Kpi libelle="Marge contributive" valeur="12 840 €" detail="sur 18 210 € de ventes" echo="OLLā 9 470 €" />
    <Kpi libelle="Ratio personnel" valeur="28,4 %" detail="seuil 30 %" echo="OLLā 31,2 %" />
    <Kpi libelle="Matière théorique" valeur="29,5 %" detail="seuil 30 %" echo="OLLā 28,8 %" />
    <Kpi libelle="Prime Cost" valeur="57,9 %" detail="seuil 60 %" echo="OLLā 60,0 %" />
  </div>
)

export const HorsRepere = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
    <Kpi libelle="Ratio personnel" valeur="34,1 %" detail="seuil 30 %" alerte />
    <Kpi libelle="Prime Cost" valeur="64,7 %" detail="seuil 60 %" alerte echo="BāM 57,9 %" />
    <Kpi libelle="Couverts" valeur="612" detail="semaine S37" />
  </div>
)

export const AvecExplication = () => (
  <div className="grid grid-cols-2 gap-2">
    <Kpi
      libelle="Coût projeté"
      valeur="5 174 €"
      detail="dont 840 € de valorisation gérance"
      aide="Le coût du planning construit, au taux standard de chaque poste. La valorisation gérance n'est pas un décaissement : les gérants en service comptent dans les ratios, jamais dans l'export Payfit."
    />
    <Kpi
      libelle="Prime Cost"
      valeur="57,9 %"
      detail="seuil 60 %"
      aide="Personnel plus matière théorique, rapportés aux ventes. La matière se lit sur le chiffre que les fiches portent — jamais extrapolé."
    />
  </div>
)

export const ChiffreSeul = () => (
  <div className="w-fit">
    <Kpi libelle="Heures soirée" valeur="146 h 30" />
  </div>
)
