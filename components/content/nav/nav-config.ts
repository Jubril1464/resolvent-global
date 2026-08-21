import type { Navigation } from "@/payload-types"

export type NavItem = Navigation["navLinks"][number]
export type NavChild = NonNullable<NavItem["children"]>[number]

export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

/**
 * A top-level item is a dropdown when it has children. The schema allows an
 * href *or* children, so this is the single place that decides which shape a
 * given item is — the desktop nav, mobile nav and footer must all agree.
 */
export function navChildren(item: NavItem): NavChild[] {
  return item.children?.length ? item.children : []
}

/** A group highlights when the current route sits under any of its children. */
export function isItemActive(pathname: string, item: NavItem) {
  const children = navChildren(item)
  if (children.length > 0) {
    return children.some((child) => isActivePath(pathname, child.href))
  }
  return item.href ? isActivePath(pathname, item.href) : false
}

/**
 * Every reachable link, groups flattened away. The footer's link column is a
 * flat list, so it renders this rather than trying to nest.
 */
export function flattenNavLinks(navLinks: Navigation["navLinks"]) {
  return navLinks.flatMap((item) => {
    const children = navChildren(item)
    if (children.length > 0) {
      return children.map(({ href, label }) => ({ href, label }))
    }
    return item.href ? [{ href: item.href, label: item.label }] : []
  })
}
