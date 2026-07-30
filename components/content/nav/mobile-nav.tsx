"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Navigation } from "@/payload-types"
import { isActivePath } from "./nav-config"

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
              "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 transition-[transform,opacity] duration-300 ease-in-out",
              open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            )}
          >
            {links.map(({ href, label }) => {
              const active = isActivePath(pathname, href)

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium transition-colors outline-none",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                    active
                      ? "bg-brand/5 text-foreground"
                      : "border-transparent text-foreground/70 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {label}
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
