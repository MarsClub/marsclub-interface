'use client'
import { useEffect, useId, useRef, useState } from 'react'

/**
 * Une explication invariable, rangée derrière un « ? » (Roch, 03/09/2026) :
 * « les infos et explications qui sont invariables peuvent passer sur un
 * tooltip pour alléger la page — on aura vite compris quel indicateur
 * fonctionne comment. » Née dans le Pilotage d'Hora, montée ici le
 * 04/09/2026 : Victus s'en servait déjà onze fois.
 *
 * Au survol, l'infobulle native (`title`) suffit ; au doigt — l'iPad n'a pas
 * de survol — le bouton ouvre la même phrase en carte, et un second geste
 * la ferme. Ce qui VARIE (une valeur, un seuil, un état du jour) reste
 * écrit sur la page : seule la pédagogie se replie. ⚠️ Un `title=` seul ne
 * suffit jamais : invisible au doigt.
 *
 * ⚠️ **La carte est en `fixed`, positionnée à la main** (3.5.0, Roch,
 * 08/09/2026 : « il faut empêcher les fenêtres des tooltips de déborder des
 * écrans mobiles »). Deux raisons, et la seconde est la plus vicieuse :
 *
 * 1. En `absolute left-0`, une carte de 288 px ouverte depuis un « ? » posé
 *    à droite d'un écran de 375 px sortait de l'écran par la droite. On
 *    mesure donc le bouton à l'ouverture et on RAMÈNE la carte dans la
 *    fenêtre, à 8 px des bords.
 * 2. `CarteSection` porte `overflow-hidden` : une carte en `absolute` posée
 *    dans sa bande de titre — le « ? » en haut à droite, la place normale —
 *    serait tout simplement COUPÉE. `fixed` échappe au découpage.
 *
 * Conséquence assumée : une carte en `fixed` ne suit pas le défilement. Elle
 * se ferme donc au moindre `scroll` ou `resize`, plutôt que de flotter
 * détachée de son bouton.
 */
export function Aide({ texte, className = '' }: { texte: string; className?: string }) {
  const [ouvert, setOuvert] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const bouton = useRef<HTMLButtonElement>(null)
  const id = useId()

  // La largeur de la carte, en px : 18rem au plus, et jamais plus que la
  // fenêtre moins ses marges. La même valeur qu'en CSS ci-dessous — le
  // calcul en a besoin pour savoir jusqu'où décaler.
  const largeurCarte = (fenetre: number) => Math.min(288, fenetre - 16)

  const basculer = () => {
    if (!ouvert && bouton.current) {
      const r = bouton.current.getBoundingClientRect()
      const largeur = largeurCarte(window.innerWidth)
      setPos({
        top: r.bottom + 6,
        // Alignée sur le bouton, puis ramenée dans la fenêtre : jamais à
        // moins de 8 px d'un bord, ni à gauche ni à droite.
        left: Math.max(8, Math.min(r.left, window.innerWidth - 8 - largeur)),
      })
    }
    setOuvert((o) => !o)
  }

  useEffect(() => {
    if (!ouvert) return
    const fermer = () => setOuvert(false)
    window.addEventListener('scroll', fermer, true)
    window.addEventListener('resize', fermer)
    return () => {
      window.removeEventListener('scroll', fermer, true)
      window.removeEventListener('resize', fermer)
    }
  }, [ouvert])

  return (
    <span className={`relative inline-block align-middle ${className}`}>
      <button
        ref={bouton}
        type="button"
        aria-label="Explication"
        aria-expanded={ouvert}
        aria-controls={id}
        title={texte}
        onClick={basculer}
        onBlur={() => setOuvert(false)}
        className={`inline-flex h-4 w-4 items-center justify-center rounded-full border text-[10px] font-bold leading-none ${
          ouvert ? 'border-charbon text-charbon' : 'border-charbon/30 text-charbon/55 hover:border-charbon hover:text-charbon'
        }`}
      >
        ?
      </button>
      {ouvert && pos && (
        <span
          id={id}
          role="tooltip"
          style={{ top: pos.top, left: pos.left }}
          className="fixed z-50 w-[min(18rem,calc(100vw-1rem))] rounded-lg border-2 border-sable bg-creme px-3 py-2 text-left text-xs font-normal normal-case tracking-normal text-charbon shadow-lg"
        >
          {texte}
        </span>
      )}
    </span>
  )
}
