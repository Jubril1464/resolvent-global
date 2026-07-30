import Link from "next/link"

export function FooterLinkColumn({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-white/70 hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
