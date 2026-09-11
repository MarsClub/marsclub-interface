/*
 * Les cellules de cet aperçu :
 *
 * - `BandeDeSemaine` — le cas d'origine (Roch, 06/09/2026) : le numéro de
 *   semaine à gauche, les dates au centre, les flèches à droite. Avec
 *   `centre`, la bande ne se replie pas — elle se partage.
 * - `AvecSousTitre` — le sous-titre dit d'où viennent les chiffres, jamais
 *   de la pédagogie.
 * - `Estompee` — une semaine derrière soi, déjà pointée : le voile crème
 *   couvre le CONTENU, la bande de titre et son statut restent nets, et ce
 *   qui doit rester lisible se lève avec `CLASSE_TENU`.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import {
  CarteSection,
  CLASSE_ACQUIS_PETIT,
  CLASSE_EN_COURS_PETIT,
  CLASSE_NAV,
  CLASSE_TENU,
  PastilleLieu,
} from 'marsclub-interface'

export const BandeDeSemaine = () => (
  <CarteSection
    titre="S37"
    centre="8 – 14 septembre"
    droite={
      <span className="flex items-center gap-1">
        <span className={CLASSE_EN_COURS_PETIT}>en cours</span>
        <a href="#" className={CLASSE_NAV}>‹</a>
        <a href="#" className={CLASSE_NAV}>›</a>
      </span>
    }
  >
    <table className="w-full text-sm tabular-nums">
      <tbody>
        <tr className="border-b border-sable">
          <td className="px-3 py-1.5"><PastilleLieu lieu="bam" /></td>
          <td className="px-3 py-1.5 font-semibold">Cuisine</td>
          <td className="px-3 py-1.5 text-right">62 h 00</td>
        </tr>
        <tr className="border-b border-sable">
          <td className="px-3 py-1.5"><PastilleLieu lieu="olla" /></td>
          <td className="px-3 py-1.5 font-semibold">Salle</td>
          <td className="px-3 py-1.5 text-right">78 h 30</td>
        </tr>
        <tr>
          <td className="px-3 py-1.5"><PastilleLieu lieu="mc" /></td>
          <td className="px-3 py-1.5 font-semibold">Total</td>
          <td className="px-3 py-1.5 text-right font-bold">140 h 30</td>
        </tr>
      </tbody>
    </table>
  </CarteSection>
)

export const AvecSousTitre = () => (
  <CarteSection
    titre="Clôture d'août"
    sous="d'après les shifts validés au 31/08"
    droite={<span className={CLASSE_ACQUIS_PETIT}>clôturé</span>}
  >
    <div className="px-3 py-2 text-sm tabular-nums">
      <p className="flex justify-between border-b border-sable py-1"><span>Repas</span><span className="font-semibold">214</span></p>
      <p className="flex justify-between border-b border-sable py-1"><span>Heures journée</span><span className="font-semibold">486 h 00</span></p>
      <p className="flex justify-between py-1"><span>Heures soirée</span><span className="font-semibold">612 h 30</span></p>
    </div>
  </CarteSection>
)

export const Estompee = () => (
  <CarteSection titre="S36" centre="1 – 7 septembre" droite={<span className={CLASSE_ACQUIS_PETIT}>pointée</span>} estompee>
    <div className="px-3 py-2 text-sm tabular-nums">
      <p className="flex items-center justify-between border-b border-sable py-1">
        <span>lundi 1 septembre</span>
        <span>14 h 00</span>
      </p>
      <p className="flex items-center justify-between border-b border-sable py-1">
        <span>mardi 2 septembre</span>
        <span>16 h 30</span>
      </p>
      <p className="flex items-center justify-between py-1">
        <span>mercredi 3 septembre</span>
        <span className={CLASSE_TENU}>
          <span className="rounded-md border border-charbon/30 bg-white px-2 py-0.5 text-xs font-semibold">Modifier</span>
        </span>
      </p>
    </div>
  </CarteSection>
)
