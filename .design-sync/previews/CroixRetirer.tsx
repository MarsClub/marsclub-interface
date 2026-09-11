/*
 * Les cellules de cet aperçu :
 *
 * - `DansUneListe` — sa place réelle : au bout d'une ligne qu'on peut
 *   retirer. Discrète au repos, elle remonte au survol, et son intitulé
 *   (`titre`) dit CE QU'ELLE RETIRE — le geste est petit, sa conséquence ne
 *   l'est pas forcément.
 * - `SurDesFiltres` — retirer un filtre posé, au bout de sa pastille.
 *
 * ⚠️ Retirer est TOUJOURS une croix discrète, fermer est TOUJOURS un bouton
 * bordé qui dit « Fermer ». Les deux se ressemblaient assez pour hésiter,
 * or l'un est sans conséquence et l'autre non : c'est pour ça qu'ils ont
 * deux formes.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { Cartouche, CroixRetirer, CLASSE_CARTE, classeFiltre, PastilleLieu } from 'marsclub-interface'

export const DansUneListe = () => (
  <div className={`max-w-md ${CLASSE_CARTE}`}>
    <p className="flex items-center gap-2 border-b border-sable px-3 py-2 text-sm">
      <PastilleLieu lieu="bam" />
      <span className="font-semibold tabular-nums">18:30 – 00:30</span>
      <span className="text-charbon/60">Franck</span>
      <span className="ml-auto"><CroixRetirer titre="Retirer ce shift du planning" /></span>
    </p>
    <p className="flex items-center gap-2 border-b border-sable px-3 py-2 text-sm">
      <PastilleLieu lieu="olla" />
      <span className="font-semibold tabular-nums">11:30 – 15:30</span>
      <span className="text-charbon/60">Inès</span>
      <span className="ml-auto"><CroixRetirer titre="Retirer ce shift du planning" /></span>
    </p>
    <p className="flex items-center gap-2 px-3 py-2 text-sm">
      <PastilleLieu lieu="bam" />
      <span className="font-semibold tabular-nums">11:30 – 15:30</span>
      <span className="text-charbon/60">Camille</span>
      <span className="ml-auto"><CroixRetirer titre="Retirer ce shift du planning" /></span>
    </p>
  </div>
)

export const SurDesFiltres = () => (
  <Cartouche>
    <span className={`${classeFiltre(true)} inline-flex items-center gap-1.5`}>
      Franck <CroixRetirer titre="Ne plus filtrer sur Franck" />
    </span>
    <span className={`${classeFiltre(true)} inline-flex items-center gap-1.5`}>
      Soirée <CroixRetirer titre="Ne plus filtrer sur la soirée" />
    </span>
  </Cartouche>
)
