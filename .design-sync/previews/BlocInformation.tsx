/*
 * Les cellules de cet aperçu :
 *
 * - `EnTeteDEcran` — les quatre écrans qui l'ont fait naître, à la file :
 *   Planning, Pointeuse, Propositions, Indisponibilités. Même bloc, même
 *   place, même hauteur, même largeur — c'est tout l'intérêt.
 * - `AvecSigneADroite` — le coin droit ne fixe ni taille ni graisse : un
 *   signe s'y passe en gras, une date en petit, et la rangée garde la
 *   hauteur de l'intitulé, jamais un pixel de plus.
 * - `AvecExplication` — l'explication invariable derrière le « ? ».
 *
 * ⚠️ DEUX LIGNES, jamais plus : l'intitulé en petites capitales, puis UNE
 * ligne de contenu qui ne se replie pas — elle défile si l'écran est trop
 * étroit.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { BlocInformation, PastilleLieu } from 'marsclub-interface'

export const EnTeteDEcran = () => (
  <div className="flex max-w-2xl flex-col gap-2">
    <BlocInformation titre="Prochain service">
      <PastilleLieu lieu="bam" />
      <span className="font-semibold">18:30 – 00:30</span>
      <span className="text-charbon/60">6 h 00</span>
      <span className="text-charbon/60">ouverture 🔑</span>
    </BlocInformation>
    <BlocInformation titre="Pointage">
      <span>Pas de pointage à effectuer.</span>
    </BlocInformation>
    <BlocInformation titre="Propositions en attente">
      <span className="font-semibold">3</span>
      <span className="text-charbon/60">la plus ancienne depuis 4 jours</span>
    </BlocInformation>
  </div>
)

export const AvecSigneADroite = () => (
  <div className="flex max-w-2xl flex-col gap-2">
    <BlocInformation titre="Prime Cost de la semaine" droite={<span className="font-bold">↘</span>}>
      <span className="font-semibold">57,9 %</span>
      <span className="text-charbon/60">seuil 60 %</span>
      <span className="text-charbon/60">S36 : 59,4 %</span>
    </BlocInformation>
    <BlocInformation titre="Prochaine période d'indisponibilité" droite={<span className="text-xs">du 22/09</span>}>
      <span>Camille — congés posés jusqu'au 29 septembre.</span>
    </BlocInformation>
  </div>
)

export const AvecExplication = () => (
  <div className="max-w-2xl">
    <BlocInformation
      titre="Heures réalisées"
      aide="Le réalisé validé, figé dans le snapshot mensuel archivé. C'est lui qui fait foi pour le décompte légal — jamais le planifié."
      droite={<span className="text-xs">au 10/09</span>}
    >
      <span className="font-semibold">486 h 00</span>
      <span className="text-charbon/60">journée</span>
      <span className="font-semibold">612 h 30</span>
      <span className="text-charbon/60">soirée</span>
    </BlocInformation>
  </div>
)
