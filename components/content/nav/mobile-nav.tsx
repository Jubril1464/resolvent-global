"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Navigation } from "@/payload-types"
import {
  isActivePath,
  isItemActive,
  navChildren,
  type NavItem,
} from "./nav-config"

export function MobileNav({
  links,
  ctaHref,
  ctaLabel,
}: {
  links: Navigation["navLinks"]
  ctaHref: string
  ctaLabel: string
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the menu whenever navigation lands on a new route.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-mr-2 inline-flex size-10 items-center justify-center text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
      >
        <span className="relative block h-4 w-6">
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out",
              open && "translate-y-1.75 rotate-45"
            )}
          />
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-1.75 h-0.5 w-6 bg-current transition-opacity duration-200 ease-in-out",
              open && "opacity-0"
            )}
          />
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-3.5 h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out",
              open && "-translate-y-1.75 -rotate-45"
            )}
          />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        inert={!open}
        className="absolute inset-x-0 top-full grid transition-[grid-template-rows] duration-300 ease-in-out lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden border-b border-black/5 bg-background shadow-lg">
          <nav
            aria-label="Main"
            className={cn(
              "mx-auto flex max-h-[70vh] max-w-7xl flex-col gap-1 overflow-y-auto px-6 py-4 transition-[transform,opacity] duration-300 ease-in-out",
              open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            )}
          >
            {links.map((item) => {
              const children = navChildren(item)

              return children.length > 0 ? (
                <MobileGroup
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  panelOpen={open}
                />
              ) : (
                <Link
                  key={item.href ?? item.label}
                  href={item.href ?? "#"}
                  aria-current={isItemActive(pathname, item) ? "page" : undefined}
                  className={cn(ROW_CLASS, rowTone(isItemActive(pathname, item)))}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              href={ctaHref}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "mt-3 h-12 w-full text-base font-semibold"
              )}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

const ROW_CLASS =
  "rounded-md px-3 py-2.5 text-base font-medium transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"

function rowTone(active: boolean) {
  return active
    ? "bg-brand/5 text-foreground"
    : "border-transparent text-foreground/70 hover:bg-muted hover:text-foreground"
}

/**
 * A group on mobile expands in place rather than opening a floating panel —
 * no hover to rely on, and a second overlay on a small screen would be worse
 * than a disclosure. Starts expanded when the current route is inside it, so
 * the menu always shows where you are.
 */
function MobileGroup({
  item,
  pathname,
  panelOpen,
}: {
  item: NavItem
  pathname: string
  panelOpen: boolean
}) {
  const children = navChildren(item)
  const groupActive = isItemActive(pathname, item)
  const [expanded, setExpanded] = useState(groupActive)

  // Re-collapse to the route-derived default each time the menu is reopened,
  // so a stale expansion from a previous visit isn't what greets you.
  useEffect(() => {
    if (!panelOpen) setExpanded(groupActive)
  }, [panelOpen, groupActive])

  const panelId = `mobile-nav-group-${item.label.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
        className={cn(ROW_CLASS, rowTone(groupActive), "flex w-full items-center justify-between")}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 shrink-0 transition-transform duration-300",
            expanded && "rotate-180"
          )}
          strokeWidth={2}
        />
      </button>

      <div
        id={panelId}
        inert={!expanded}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-border pl-3">
            {children.map((child) => {
              const active = isActivePath(pathname, child.href)

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(ROW_CLASS, rowTone(active), "text-[15px]")}
                >
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
