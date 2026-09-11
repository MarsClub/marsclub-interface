/*
 * Vérifie que `conventions.md` ne ment pas.
 *
 * Ce fichier est prépendu au README du bundle et inlin·é dans le prompt
 * système de l'agent de design de claude.ai. Il énumère des composants, des
 * constantes de classe et des familles d'utilitaires Tailwind. **Un nom qui
 * n'existe plus dans la construction est pire qu'absent** : l'agent lui fait
 * confiance, écrit du vocabulaire qui ne résout pas, et livre des écrans
 * silencieusement sans style.
 *
 * À rejouer après chaque construction :
 *   node .design-sync/verifier-conventions.mjs [dossier-de-sortie]
 *
 * Sort en 1 et nomme chaque manque.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RACINE = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SORTIE = resolve(process.argv[2] ?? join(RACINE, 'ds-bundle'))

const conv = readFileSync(join(RACINE, '.design-sync', 'conventions.md'), 'utf8')
const css = readFileSync(join(SORTIE, '_ds_bundle.css'), 'utf8')
const bundle = readFileSync(join(SORTIE, '_ds_bundle.js'), 'utf8')

const exportsBundle = new Set(
  [...bundle.matchAll(/^\s*([A-Za-z_][A-Za-z0-9_]*):\s*\(\)\s*=>/gm)].map((m) => m[1]),
)
const dossiers = new Set()
for (const g of readdirSync(join(SORTIE, 'components')))
  for (const n of readdirSync(join(SORTIE, 'components', g))) dossiers.add(n)

/** Une classe Tailwind, telle que le CSS compilé l'échappe. */
const aLaClasse = (c) => css.includes('.' + c.replace(/([:/[\]&*().,#!])/g, '\\$1'))

const manque = []
const verifie = (quoi, nom, ok) => { if (!ok) manque.push(`${quoi} : ${nom}`) }

// 1. Constantes et fonctions du paquet, citées entre `accents graves`.
const ident = new Set()
for (const m of conv.matchAll(/`([A-Za-z_][A-Za-z0-9_]*)`/g)) {
  const n = m[1]
  if (/^(CLASSE_[A-Z_]+|LIBELLE_[A-Z_]+|COULEUR_LIEU|MAISON_FILTRE)$/.test(n)) ident.add(n)
  else if (/^(classe|libelle|couleur)[A-Z]/.test(n)) ident.add(n)
}
for (const n of ident) verifie('export du paquet', n, exportsBundle.has(n))

// 2. Composants cités en `<Nom …>` ou déstructurés du global.
const comps = new Set()
for (const m of conv.matchAll(/<([A-Z][A-Za-z0-9]*)[\s/>]/g)) comps.add(m[1])
for (const m of conv.matchAll(/const \{([^}]+)\} = window\.MarsclubInterface/g))
  for (const n of m[1].split(',').map((s) => s.trim())) if (/^[A-Z]/.test(n)) comps.add(n)
comps.delete('Nom') // le gabarit `<Nom>.prompt.md`, pas un composant
for (const n of comps) verifie('composant', n, dossiers.has(n) || exportsBundle.has(n))

// 3. Jetons CSS.
for (const m of conv.matchAll(/`(--[a-z-]+)`/g)) verifie('jeton CSS', m[1], css.includes(m[1] + ':'))

// 4. Un représentant concret par famille d'utilitaires annoncée. Une plage
//    Tailwind peut s'étendre à moitié sans rien dire (`col-span-{1..6,full}`
//    n'avait produit que `col-span-full`) : les bornes sont sondées exprès.
const sondes = [
  'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'hidden', 'md:flex', 'md:hidden', 'sm:grid', 'lg:block',
  'flex-row', 'flex-col', 'flex-wrap', 'flex-1', 'flex-none', 'items-center', 'items-baseline', 'justify-between',
  'justify-evenly', 'self-start', 'content-center', 'grow', 'shrink-0',
  'grid-cols-1', 'grid-cols-6', 'md:grid-cols-4', 'grid-rows-2', 'col-span-1', 'col-span-2', 'col-span-6',
  'col-span-full', 'row-span-2', 'order-1',
  'gap-2', 'gap-x-3', 'gap-y-1', 'p-4', 'px-3', 'py-1.5', 'pt-3', 'pr-2', 'pb-2', 'pl-3', 'md:p-4',
  'm-0', 'mx-auto', 'ml-auto', 'space-y-2', 'w-full', 'w-fit', 'w-1/2', 'w-1/3', 'h-full',
  'max-w-sm', 'max-w-7xl', 'max-w-prose', 'min-w-0',
  'text-xs', 'text-5xl', 'md:text-xl', 'font-normal', 'font-medium', 'font-semibold', 'font-bold',
  'font-sans', 'font-display', 'text-left', 'text-center', 'text-right', 'leading-tight', 'tracking-wide',
  'uppercase', 'truncate', 'whitespace-nowrap', 'tabular-nums', 'sr-only', 'list-none', 'italic', 'underline',
  'bg-charbon', 'bg-sable', 'bg-creme', 'bg-jaune-bam', 'bg-vert-olla', 'bg-white', 'bg-transparent',
  'bg-charbon/10', 'bg-sable/25', 'bg-sable/40', 'bg-white/50', 'bg-creme/50',
  'text-charbon', 'text-creme', 'text-white', 'text-charbon/30', 'text-charbon/45', 'text-charbon/90',
  'border', 'border-2', 'border-4', 'border-t', 'border-b', 'border-charbon', 'border-sable',
  'border-charbon/30', 'border-sable/50', 'border-l-jaune-bam',
  'rounded', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-full',
  'relative', 'absolute', 'fixed', 'inset-0', 'z-0', 'z-50', 'overflow-hidden', 'overflow-x-auto',
  'shadow-sm', 'shadow-md', 'shadow-lg', 'opacity-40', 'transition-colors', 'cursor-pointer',
  'pointer-events-none', 'align-middle', 'divide-y', 'text-red-700', 'border-red-600',
]
for (const c of sondes) verifie('utilitaire', c, aLaClasse(c))

console.log(`exports du bundle : ${exportsBundle.size} · composants : ${dossiers.size}`)
console.log(`vérifiés — identifiants ${ident.size}, composants ${comps.size}, utilitaires ${sondes.length}`)
if (manque.length) {
  console.log(`\n✗ ${manque.length} nom(s) annoncé(s) mais absent(s) de la construction :`)
  for (const m of manque) console.log('   ' + m)
  process.exit(1)
}
console.log('\n✓ tous les noms annoncés par conventions.md existent dans la construction')
