import { describe, expect, it } from 'vitest'
import { alphabetDePalette, modulo, paletteEnRoute } from './index.js'

describe('une palette ne roule que dans son alphabet', () => {
  it('un chiffre ne fait défiler que des chiffres, une lettre que des lettres', () => {
    // Les vraies palettes brassent tout ; ici la valeur reste plausible à
    // chaque instant — on ne lit jamais « 1A00 » une demi-seconde.
    expect(alphabetDePalette('7')).toBe('0123456789')
    expect(alphabetDePalette('b')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  })

  it('un symbole ou un espace ne roule pas', () => {
    expect(alphabetDePalette('€')).toBe('€')
    expect(alphabetDePalette(' ')).toBe(' ')
    expect(paletteEnRoute('€', 5)).toBe('€')
  })

  it('à zéro cran de la cible, la palette montre la cible', () => {
    expect(paletteEnRoute('4', 0)).toBe('4')
    expect(paletteEnRoute('M', 0)).toBe('M')
  })

  it('recule d’autant de crans, en bouclant sur l’alphabet', () => {
    expect(paletteEnRoute('4', 1)).toBe('3')
    expect(paletteEnRoute('0', 1)).toBe('9')
    expect(paletteEnRoute('A', 2)).toBe('Y')
  })
})

describe('modulo reste positif', () => {
  it('là où « % » de JavaScript ne l’est pas', () => {
    expect(-1 % 10).toBe(-1)
    expect(modulo(-1, 10)).toBe(9)
    expect(modulo(13, 10)).toBe(3)
  })
})
