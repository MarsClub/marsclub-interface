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
  LIBELLE_MAISON,
  MAISON_FILTRE,
  classeFiltreLieu,
  libelleZone,
  couleurShift,
} from './index.js'

describe('les trois tons de message', () => {
  it('un seul gabarit, trois bordures — et jamais de vert', () => {
    for (const ton of ['refus', 'vigilance', 'ok'] as const) {
      expect(classeBandeau(ton)).toContain('rounded-lg border-2 px-3 py-2 text-sm font-semibold')
      expect(classeBandeau(ton)).not.toMatch(/green|vert/)
    }
    expect(classeBandeau('refus')).toContain('border-red-600')
    expect(classeBandeau('vigilance')).toContain('border-red-600')
    expect(classeBandeau('ok')).toContain('border-sable')
  })

  it('une valeur hors repère se dit en charbon gras avec ⚠ — l’orange n’est pas dans la palette', () => {
    expect(CLASSE_HORS_REPERE).toContain('⚠')
    expect(CLASSE_HORS_REPERE).not.toMatch(/orange/)
    expect(classeBandeau('vigilance')).not.toMatch(/orange/)
  })
})

describe('les poids d’action', () => {
  it('principal, tertiaire et Fermer sont le même bouton (2.0) : blanc au repos, charbon au survol', () => {
    expect(CLASSE_PRINCIPAL).toBe(CLASSE_TERTIAIRE)
    expect(CLASSE_PRINCIPAL).toContain('hover:bg-charbon')
    expect(CLASSE_TERTIAIRE).toBe(CLASSE_FERMER)
    expect(CLASSE_TERTIAIRE).toContain('border-charbon/30')
    expect(CLASSE_TERTIAIRE).not.toMatch(/(^|\s)bg-charbon(\s|$)/)
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

describe('la pastille de lieu a deux variantes, toutes deux permises', () => {
  it('le nom reste charbon dans les deux — jamais une couleur de marque en texte', () => {
    // La variante se voit au rendu ; ici on fixe ce qui ne bouge pas : le
    // texte charbon, et les deux couleurs réservées au fond ou au liseré.
    expect(classeAplatLieu('bam')).not.toContain('text-')
  })
})

describe('le périmètre entier', () => {
  it('a son aplat aussi : le sable, jamais le charbon (04/09/2026)', () => {
    expect(classeAplatLieu('mc')).toBe('bg-sable')
    expect(classeFiltreLieu('mc', true)).toContain('bg-sable')
    expect(classeFiltreLieu('mc', true)).not.toContain('bg-charbon')
    expect(LIBELLE_MAISON.mc).toBe(MAISON_FILTRE)
  })
})

describe('la zone se dérive de l’équipe, jamais d’un shift-type nommé (05/09/2026, sans emoji depuis le même jour)', () => {
  it('un mot, jamais une icône', () => {
    expect(libelleZone('cuisine')).toBe('Cuisine')
    expect(libelleZone('salle')).toBe('Salle')
    expect(libelleZone('management')).toBe('Management')
  })
})

describe('la couleur d’un shift se dérive du lieu et de la zone (05/09/2026)', () => {
  it('la cuisine porte l’aplat plein du lieu', () => {
    expect(couleurShift('bam', 'cuisine')).toBe(COULEUR_LIEU.bam)
    expect(couleurShift('olla', 'cuisine')).toBe(COULEUR_LIEU.olla)
  })

  it('la salle porte une teinte plus claire du MÊME lieu — jamais un ton étranger', () => {
    expect(couleurShift('bam', 'salle')).not.toBe(COULEUR_LIEU.bam)
    expect(couleurShift('bam', 'salle')).not.toBe(couleurShift('olla', 'salle'))
  })

  it('le management reste neutre, sable, quel que soit le lieu', () => {
    expect(couleurShift('bam', 'management')).toBe(couleurShift('olla', 'management'))
    expect(couleurShift('bam', 'management')).toBe('#d6cdaa')
  })
})
