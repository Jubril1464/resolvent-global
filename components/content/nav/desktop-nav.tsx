"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Navigation } from "@/payload-types"
import {
  isActivePath,
  isItemActive,
  navChildren,
  type NavItem,
} from "./nav-config"

export function DesktopNav({
  links,
  className,
}: {
  links: Navigation["navLinks"]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main"
      className={cn("hidden items-center gap-7 lg:flex", className)}
    >
      {links.map((item) => {
        const children = navChildren(item)

        return children.length > 0 ? (
          <NavDropdown key={item.label} item={item} pathname={pathname} />
        ) : (
          <NavLink
            key={item.href ?? item.label}
            href={item.href ?? "#"}
            label={item.label}
            active={isItemActive(pathname, item)}
          />
        )
      })}
    </nav>
  )
}

/** Shared trigger/link styling so a group heading matches a plain link. */
const TRIGGER_CLASS =
  "group relative flex items-center gap-1 rounded-xs py-1 text-[15px] font-medium transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"

function NavLink({
  href,
  label,
  active,
}: {
  href: string
  label: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        TRIGGER_CLASS,
        active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
      )}
    >
      {label}
      <Underline active={active} />
    </Link>
  )
}

function Underline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand transition-opacity",
        active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
      )}
    />
  )
}

/**
 * One dropdown group.
 *
 * Opens on pointer hover and on keyboard focus, so it works without a click
 * for mouse users but is still reachable by tab. The panel is rendered at all
 * times and hidden with `inert` + opacity rather than unmounted, which keeps
 * the open/close transition smooth and keeps its links out of the tab order
 * while closed.
 */
function NavDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const children = navChildren(item)
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const groupActive = isItemActive(pathname, item)

  // Close on route change — the panel would otherwise stay open behind the
  // page that was just navigated to.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      setOpen(false)
      triggerRef.current?.focus()
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        // Only close once focus has actually left the group, otherwise moving
        // between the trigger and its own links would shut the panel.
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false)
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          TRIGGER_CLASS,
          groupActive
            ? "text-foreground"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        {item.label}
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          strokeWidth={2}
        />
        <Underline active={groupActive} />
      </button>

      <div
        id={panelId}
        inert={!open}
        // pt-3 keeps the panel touching the trigger, so there's no gap for the
        // pointer to cross and accidentally close the menu.
        className={cn(
          "absolute top-full left-0 z-50 pt-3 transition-[opacity,transform] duration-200 ease-out",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="min-w-60 border border-border bg-background p-2 shadow-lg">
          {children.map((child) => {
            const active = isActivePath(pathname, child.href)

            return (
              <Link
                key={child.href}
                href={child.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-xs px-3 py-2.5 transition-colors outline-none",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                  active
                    ? "bg-brand/5 text-foreground"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="block text-[15px] font-medium">{child.label}</span>
                {child.description ? (
                  <span className="mt-0.5 block text-xs text-foreground/50">
                    {child.description}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
