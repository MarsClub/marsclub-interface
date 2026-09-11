/*
 * Les cellules de cet aperçu :
 *
 * - `Aplat` — le défaut des OUTILS INTERNES : le nom en charbon sur sa
 *   couleur. C'est le repère le plus rapide d'un écran de travail.
 * - `Neutre` — le défaut des DISPOSITIFS PUBLICS (site, imprimés) : le nom
 *   en charbon sur fond blanc, la couleur en liseré à gauche. La règle de
 *   marque : un nom ne se pose jamais sur sa propre couleur en aplat.
 * - `LesDeuxAllures` — côte à côte, pour voir que ce sont deux défauts et
 *   non deux interdits : ils se renversent au cas par cas.
 * - `DansUneLigne` — sa place la plus fréquente : en tête d'une ligne de
 *   liste, une fois, jamais répétée colonne par colonne.
 *
 * ⚠️ Le périmètre entier — `mc` — porte le SABLE, et s'écrit « 🏡 MC » dans
 * un filtre. L'abréviation est interne : partout où quelqu'un d'autre lit,
 * la marque garde ses deux macrons, « Mārs Clūb ».
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_INTITULE, PastilleLieu } from 'marsclub-interface'

export const Aplat = () => (
  <div className="flex items-center gap-2">
    <PastilleLieu lieu="bam" />
    <PastilleLieu lieu="olla" />
    <PastilleLieu lieu="mc" />
  </div>
)

export const Neutre = () => (
  <div className="flex items-center gap-2">
    <PastilleLieu lieu="bam" variante="neutre" />
    <PastilleLieu lieu="olla" variante="neutre" />
    <PastilleLieu lieu="mc" variante="neutre" />
  </div>
)

export const LesDeuxAllures = () => (
  <div className="flex flex-col gap-3">
    <div>
      <div className={CLASSE_INTITULE}>Aplat — outils internes</div>
      <div className="mt-1 flex items-center gap-2">
        <PastilleLieu lieu="bam" />
        <PastilleLieu lieu="olla" />
        <PastilleLieu lieu="mc" />
      </div>
    </div>
    <div>
      <div className={CLASSE_INTITULE}>Neutre — site, imprimés, PDF</div>
      <div className="mt-1 flex items-center gap-2">
        <PastilleLieu lieu="bam" variante="neutre" />
        <PastilleLieu lieu="olla" variante="neutre" />
        <PastilleLieu lieu="mc" variante="neutre" />
      </div>
    </div>
  </div>
)

export const DansUneLigne = () => (
  <div className="flex max-w-md flex-col gap-1 text-sm tabular-nums">
    <p className="flex items-center gap-2">
      <PastilleLieu lieu="bam" />
      <span className="font-semibold">11:30 – 15:30</span>
      <span className="text-charbon/60">4 h 00</span>
    </p>
    <p className="flex items-center gap-2">
      <PastilleLieu lieu="olla" />
      <span className="font-semibold">18:30 – 00:30</span>
      <span className="text-charbon/60">6 h 00</span>
    </p>
  </div>
)
