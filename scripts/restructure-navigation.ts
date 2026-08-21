/**
 * Regroups the main navigation into dropdowns.
 *
 * Nine flat top-level items had outgrown the header. This collapses the six
 * that group naturally into two dropdowns and leaves the four that need to
 * stay prominent as plain links:
 *
 *   Home | About ▾ | What We Do ▾ | Proprietary Technologies | Contact
 *
 * Proprietary Technologies stays top-level by request, and Contact stays the
 * final item as the technologies handover requires.
 *
 * Run with: npm run nav:restructure
 *
 * Idempotent — skips entirely if any item already has children, so it won't
 * flatten a grouping an editor has since adjusted in the admin UI.
 */
import { getPayload } from "payload"

import config from "../payload.config"

const payload = await getPayload({ config })

type NavGroupChild = { href: string; label: string; description?: string }
type NavEntry = { label: string; href?: string; children?: NavGroupChild[] }

const NAV_LINKS: NavEntry[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      {
        href: "/about",
        label: "About Us",
        description: "Who we are and how we work",
      },
      {
        href: "/certifications",
        label: "Certifications",
        description: "Accreditations and standards",
      },
    ],
  },
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
      {
        href: "/projects",
        label: "Projects",
        description: "Delivered and ongoing work",
      },
      {
        href: "/training",
        label: "Training",
        description: "Courses and integrated programs",
      },
    ],
  },
  { label: "Proprietary Technologies", href: "/proprietary-technologies" },
  { label: "Contact", href: "/contact" },
]

const navigation = await payload.findGlobal({ slug: "navigation" })
const current = navigation.navLinks ?? []

if (current.some((item) => item.children?.length)) {
  console.log("Skipping — navigation already uses dropdown groups.")
  process.exit(0)
}

/**
 * Guard against silently dropping a route: every href currently in the nav
 * must still be reachable afterwards, or the regrouping has lost a page.
 */
const before = new Set(current.map((item) => item.href).filter(Boolean))
const after = new Set(
  NAV_LINKS.flatMap((item) =>
    item.children ? item.children.map((child) => child.href) : [item.href]
  )
)
const dropped = [...before].filter((href) => href && !after.has(href))

if (dropped.length > 0) {
  console.error(`Refusing to continue — these links would be lost: ${dropped.join(", ")}`)
  process.exit(1)
}

await payload.updateGlobal({ slug: "navigation", data: { navLinks: NAV_LINKS } })

console.log(`Regrouped ${before.size} links into ${NAV_LINKS.length} top-level items.`)
console.log(
  NAV_LINKS.map((item) =>
    item.children
      ? `  ${item.label} ▾ (${item.children.length})`
      : `  ${item.label} -> ${item.href}`
  ).join("\n")
)
process.exit(0)
