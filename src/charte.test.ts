import { describe, expect, it } from 'vitest'
import {
  CLASSE_CHAMP,
  CLASSE_HORS_REPERE,
  CLASSE_NAV,
  CLASSE_PRINCIPAL,
  CLASSE_TERTIAIRE,
  CLASSE_FERMER,
  classeAplatLieu,
  classeBandeau,
  classeOnglet,
  COULEUR_LIEU,
  LIBELLE_LIEU,
} from './index.js'

describe('les trois tons de message', () => {
  it('un seul gabarit, trois bordures — et jamais de vert', () => {
    for (const ton of ['refus', 'vigilance', 'ok'] as const) {
      expect(classeBandeau(ton)).toContain('rounded-lg border-2 px-3 py-2 text-sm font-semibold')
      expect(classeBandeau(ton)).not.toMatch(/green|vert/)
    }
    expect(classeBandeau('refus')).toContain('border-red-600')
    expect(classeBandeau('vigilance')).toContain('border-charbon')
    expect(classeBandeau('vigilance')).toContain('⚠')
    expect(classeBandeau('ok')).toContain('border-sable')
  })

  it('une valeur hors repère se dit en charbon gras avec ⚠ — l’orange n’est pas dans la palette', () => {
    expect(CLASSE_HORS_REPERE).toContain('⚠')
    expect(CLASSE_HORS_REPERE).not.toMatch(/orange/)
    expect(classeBandeau('vigilance')).not.toMatch(/orange/)
  })
})

describe('les poids d’action', () => {
  it('le principal est un aplat charbon, le tertiaire un cadre — et Fermer EST un tertiaire', () => {
    expect(CLASSE_PRINCIPAL).toContain('bg-charbon')
    expect(CLASSE_PRINCIPAL).toContain('text-creme')
    expect(CLASSE_TERTIAIRE).toBe(CLASSE_FERMER)
    expect(CLASSE_TERTIAIRE).toContain('border-charbon/30')
    expect(CLASSE_TERTIAIRE).not.toContain('bg-charbon')
  })

  it('les chevrons sont des tertiaires, sans texte', () => {
    expect(CLASSE_NAV).toContain('border-charbon/30')
  })
})

describe('les maisons', () => {
  it('jaune et vert en aplat seulement, texte charbon', () => {
    expect(classeAplatLieu('bam')).toBe('bg-jaune-bam')
    expect(classeAplatLieu('olla')).toBe('bg-vert-olla')
    expect(COULEUR_LIEU.bam).toBe('#ffde59')
    expect(COULEUR_LIEU.olla).toBe('#78e762')
    expect(LIBELLE_LIEU.bam).toBe('BāM')
    expect(LIBELLE_LIEU.olla).toBe('OLLā')
  })
})

describe('onglets et champs', () => {
  it('un onglet se souligne, il ne se remplit pas', () => {
    expect(classeOnglet(true)).toContain('border-charbon')
    expect(classeOnglet(true)).not.toContain('bg-charbon')
    expect(classeOnglet(false)).toContain('text-charbon/35')
  })

  it('un champ a un fond blanc — sinon il prend celui du panneau', () => {
    expect(CLASSE_CHAMP).toContain('bg-white')
  })
})
