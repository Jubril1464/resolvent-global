/**
 * Declarative source of truth for the main navigation.
 *
 *   Home | About | What We Do ▾ | Projects | Training |
 *   Proprietary Technologies | Contact
 *
 * Projects, Training and Proprietary Technologies are top-level by request,
 * and Contact stays the final item as the technologies handover requires.
 * `About` is a plain link rather than a dropdown — once Certifications was
 * removed it had only one child left, and a one-item dropdown is worse than
 * no dropdown.
 *
 * Run with: npm run nav:set
 *
 * Unlike a first-time seed this always applies NAV_LINKS, so re-running it
 * resets any drift. The drop-guard below is what makes that safe: any href
 * currently live that isn't in the new structure has to be listed in
 * REMOVED_HREFS as a deliberate removal, otherwise the script refuses to
 * write. Regrouping a nav is exactly where a page silently falls out of a
 * site, so losing a route should take an explicit edit here.
 */
import { getPayload } from "payload"

import config from "../payload.config"

const payload = await getPayload({ config })

type NavGroupChild = { href: string; label: string; description?: string }
type NavEntry = { label: string; href?: string; children?: NavGroupChild[] }

const NAV_LINKS: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "What We Do",
    children: [
      {
        href: "/services",
        label: "Services",
        description: "Core engineering service platforms",
      },
      {
        href: "/industries",
        label: "Sectors We Support",
        description: "Industries we deliver into",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Training", href: "/training" },
  { label: "Proprietary Technologies", href: "/proprietary-technologies" },
  { label: "Contact", href: "/contact" },
]

/** Routes deliberately dropped from the nav, newest first. */
const REMOVED_HREFS = [
  // The Certifications page was a coming-soon placeholder and has been deleted.
  "/certifications",
]

const navigation = await payload.findGlobal({ slug: "navigation" })
const current = navigation.navLinks ?? []

function hrefsOf(items: NavEntry[]) {
  return items.flatMap((item) =>
    item.children ? item.children.map((child) => child.href) : [item.href]
  )
}

const before = new Set(
  current.flatMap((item) =>
    item.children?.length
      ? item.children.map((child) => child.href)
      : item.href
        ? [item.href]
        : []
  )
)
const after = new Set(hrefsOf(NAV_LINKS))

const unexplained = [...before].filter(
  (href) => !after.has(href) && !REMOVED_HREFS.includes(href)
)

if (unexplained.length > 0) {
  console.error(
    `Refusing to continue — these links would be lost without being listed in REMOVED_HREFS: ${unexplained.join(", ")}`
  )
  process.exit(1)
}

await payload.updateGlobal({ slug: "navigation", data: { navLinks: NAV_LINKS } })

const dropped = [...before].filter((href) => !after.has(href))
console.log(`Navigation set: ${NAV_LINKS.length} top-level items.`)
console.log(
  NAV_LINKS.map((item) =>
    item.children
      ? `  ${item.label} ▾ (${item.children.length})`
      : `  ${item.label} -> ${item.href}`
  ).join("\n")
)
if (dropped.length > 0) {
  console.log(`Removed: ${dropped.join(", ")}`)
}
process.exit(0)
