/**
 * Les onglets d'une même page (charte §4) : Atma soulignés, l'actif en
 * charbon, le reste estompé. Un onglet déplace le regard, il ne déclenche
 * rien. Six copies identiques dans Hora avant le 04/09/2026.
 *
 * La rangée ne s'affiche qu'à partir de deux onglets : un onglet seul serait
 * un titre de page déguisé, et la charte n'en veut pas.
 */
export const classeOnglet = (actif: boolean) =>
  `border-b-2 pb-0.5 font-display text-lg font-semibold ${
    actif ? 'border-charbon text-charbon' : 'border-transparent text-charbon/35 hover:text-charbon'
  }`

export function Onglets({
  onglets,
  Lien = 'a',
  className = '',
}: {
  onglets: { href: string; libelle: string; actif: boolean }[]
  Lien?: React.ElementType
  className?: string
}) {
  if (onglets.length < 2) return null
  return (
    <div className={`mb-5 flex flex-wrap gap-4 ${className}`.trim()}>
      {onglets.map((o) => (
        <Lien key={o.href} href={o.href} className={classeOnglet(o.actif)}>
          {o.libelle}
        </Lien>
      ))}
    </div>
  )
}
