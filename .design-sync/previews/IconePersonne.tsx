/*
 * Les cellules de cet aperçu :
 *
 * - `ALaTailleDuTexte` — ce qu'elle fait de particulier : elle est dessinée
 *   en `1em`, donc elle suit la taille du texte qui la porte, à toutes les
 *   échelles. C'est pour ça qu'elle n'a pas de prop de taille.
 * - `DansUneLigne` — son usage réel : devant un prénom, dans une ligne de
 *   liste ou un intitulé.
 *
 * ⚠️ C'est l'icône « personne » d'Octicons (GitHub). Elle prend la couleur
 * du texte (`currentColor`) et porte `aria-hidden` : le sens est dans le
 * mot à côté, jamais dans le dessin.
 *
 * ⚠️ Aucun commentaire entre deux exports (il fuirait dans le bloc précédent
 * des exemples de `.prompt.md`).
 */
import { CLASSE_CARTE, CLASSE_INTITULE, IconePersonne } from 'marsclub-interface'

export const ALaTailleDuTexte = () => (
  <div className="flex flex-col gap-2">
    <p className="flex items-center gap-1 text-xs"><IconePersonne /> texte xs</p>
    <p className="flex items-center gap-1 text-sm"><IconePersonne /> texte sm</p>
    <p className="flex items-center gap-1 text-base"><IconePersonne /> texte base</p>
    <p className="flex items-center gap-1 text-xl"><IconePersonne /> texte xl</p>
    <p className="flex items-center gap-1 font-display text-3xl"><IconePersonne /> texte 3xl</p>
  </div>
)

export const DansUneLigne = () => (
  <div className={`max-w-sm ${CLASSE_CARTE}`}>
    <div className={`border-b border-sable px-3 py-2 ${CLASSE_INTITULE}`}>Équipe de soirée</div>
    <p className="flex items-center gap-1.5 border-b border-sable px-3 py-1.5 text-sm">
      <IconePersonne className="opacity-60" /> <span className="font-semibold">Franck</span>
      <span className="ml-auto tabular-nums text-charbon/60">6 h 00</span>
    </p>
    <p className="flex items-center gap-1.5 border-b border-sable px-3 py-1.5 text-sm">
      <IconePersonne className="opacity-60" /> <span className="font-semibold">Camille</span>
      <span className="ml-auto tabular-nums text-charbon/60">5 h 30</span>
    </p>
    <p className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
      <IconePersonne className="opacity-60" /> <span className="font-semibold">Inès</span>
      <span className="ml-auto tabular-nums text-charbon/60">6 h 00</span>
    </p>
  </div>
)
