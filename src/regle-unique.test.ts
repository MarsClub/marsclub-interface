import { describe, expect, it } from 'vitest'
import {
  CLASSE_ACQUIS,
  CLASSE_BOUTON,
  CLASSE_BOUTON_COMPACT,
  CLASSE_BOUTON_TELEPHONE,
  CLASSE_EN_COURS,
  CLASSE_FERMER,
  CLASSE_HORS_REPERE,
  CLASSE_NAV,
  CLASSE_PRINCIPAL,
  CLASSE_TERTIAIRE,
  cadreFiltre,
  classeBandeau,
  classeBascule,
  classeFiltre,
} from './index.js'

/** « Une couleur, un sens » (Roch, 04/09/2026) — les sept points, fixés. */

describe('1 · un bouton est charbon sur blanc, et le survol le remplit', () => {
  it('aucun bouton n’est plein au repos', () => {
    for (const c of [CLASSE_BOUTON, CLASSE_BOUTON_COMPACT, CLASSE_BOUTON_TELEPHONE, CLASSE_NAV, CLASSE_FERMER]) {
      expect(c).toMatch(/(^|\s)bg-white(\s|$)/)
      expect(c).not.toMatch(/(^|\s)bg-charbon(\s|$)/)
      expect(c).toContain('hover:bg-charbon')
      expect(c).toContain('focus-visible:bg-charbon')
    }
  })

  it('« principal » et « tertiaire » sont le même bouton — la hiérarchie n’est plus une couleur', () => {
    expect(CLASSE_PRINCIPAL).toBe(CLASSE_BOUTON)
    expect(CLASSE_TERTIAIRE).toBe(CLASSE_BOUTON)
    expect(CLASSE_FERMER).toBe(CLASSE_BOUTON)
  })
})

describe('2 · la sélection est un cadre épais, jamais un aplat', () => {
  it('3 px dans les deux états, charbon quand c’est choisi', () => {
    expect(cadreFiltre(true)).toContain('border-[3px] border-charbon')
    expect(cadreFiltre(false)).toContain('border-[3px]')
    expect(classeFiltre(true)).not.toContain('bg-charbon')
  })

  it('une bascule à choix est un filtre', () => {
    expect(classeBascule(true)).toBe(classeFiltre(true))
    expect(classeBascule(false)).toBe(classeFiltre(false))
  })
})

describe('3 · le sable est l’aplat de fond', () => {
  it('l’état acquis est sable et ne se survole pas ; l’en-cours est un cadre sable', () => {
    expect(CLASSE_ACQUIS).toContain('bg-sable')
    expect(CLASSE_ACQUIS).not.toContain('hover:')
    expect(CLASSE_EN_COURS).toContain('border-sable')
    expect(CLASSE_EN_COURS).not.toContain('bg-sable')
  })
})

describe('4 · le rouge veut dire attention', () => {
  it('refus et vigilance sont le même bandeau rouge ; la valeur hors repère est rouge avec ⚠', () => {
    expect(classeBandeau('refus')).toBe(classeBandeau('vigilance'))
    expect(classeBandeau('refus')).toContain('border-red-600')
    expect(classeBandeau('ok')).toContain('border-sable')
    expect(CLASSE_HORS_REPERE).toContain('text-red-700')
    expect(CLASSE_HORS_REPERE).toContain('⚠')
    for (const c of [classeBandeau('refus'), CLASSE_HORS_REPERE]) expect(c).not.toMatch(/orange/)
  })
})
