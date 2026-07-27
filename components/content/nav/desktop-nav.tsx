"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { NAV_LINKS, isActivePath } from "./nav-config"

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Main"
      className={cn("hidden items-center gap-8 lg:flex", className)}
    >
      {NAV_LINKS.map(({ href, label }) => {
        const active = isActivePath(pathname, href)

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative rounded-xs py-1 text-[15px] font-medium transition-colors outline-none",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
              active
                ? "text-foreground"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {label}
            <span
              aria-hidden
              className={cn(
                "absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand transition-opacity",
                active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              )}
            />
          </Link>
        )
      })}
    </nav>
  )
}
