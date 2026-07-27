export type NavLink = {
  href: string
  label: string
}

/**
 * Single source of truth for the site navigation. Add a route here and it
 * shows up in both the desktop bar and the mobile menu.
 */
export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export const NAV_CTA: NavLink = {
  href: "/request-proposal",
  label: "Request Proposal",
}

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}
