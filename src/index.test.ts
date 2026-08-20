import { describe, expect, it } from 'vitest'
import { CLASSE_FERMER, cadreFiltre, classeFiltre, classeFiltreLieu } from './index.js'

describe('l’état d’un filtre se dit par le cadre, jamais par un aplat', () => {
  it('l’actif porte un cadre sombre et épais', () => {
    expect(cadreFiltre(true)).toContain('border-2')
    expect(cadreFiltre(true)).toContain('border-charbon')
  })

  it('l’actif n’a JAMAIS de fond plein', () => {
    // C'est la règle qui a motivé tout le module (Roch, 20/08/2026) : un aplat
    // sombre se lit comme un bouton d'action, or un filtre n'agit sur rien.
    // Si ce test tombe, quelqu'un a réintroduit `bg-charbon`.
    expect(classeFiltre(true)).not.toContain('bg-charbon')
    expect(classeFiltreLieu('bam', true)).not.toContain('bg-charbon')
  })

  it('les deux états ont la même épaisseur, pour que les hauteurs s’alignent', () => {
    expect(cadreFiltre(false)).toContain('border-2')
    // …mais ne se ressemblent pas : c'est le défaut qu'on corrigeait.
    expect(cadreFiltre(true)).not.toBe(cadreFiltre(false))
  })
})

describe('les enseignes gardent leur couleur', () => {
  it('chacune la sienne, active ou non', () => {
    expect(classeFiltreLieu('bam', true)).toContain('bg-jaune-bam')
    expect(classeFiltreLieu('bam', false)).toContain('bg-jaune-bam')
    expect(classeFiltreLieu('olla', true)).toContain('bg-vert-olla')
  })

  it('et jamais celle de l’autre', () => {
    expect(classeFiltreLieu('bam', true)).not.toContain('vert-olla')
    expect(classeFiltreLieu('olla', true)).not.toContain('jaune-bam')
  })
})

describe('fermer reste reconnaissable', () => {
  it('un bouton bordé, jamais une croix ni un aplat', () => {
    // Fermer est sans conséquence, supprimer non : les deux ne doivent pas
    // se ressembler.
    expect(CLASSE_FERMER).toContain('border')
    expect(CLASSE_FERMER).toContain('bg-white')
    expect(CLASSE_FERMER).not.toContain('bg-charbon')
  })
})
