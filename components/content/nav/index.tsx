import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DesktopNav } from "./desktop-nav"
import { MobileNav } from "./mobile-nav"
import { NAV_CTA } from "./nav-config"

/**
 * Site-wide header. Rendered once from the root layout so every route gets it.
 */
export function SiteNav({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-black/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-white/10",
        className
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Resolvent Global — home"
          className="shrink-0 rounded-xs outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Image
            src="/images/resolvent-logo.svg"
            alt="Resolvent Global — Energy, Process, Carbon"
            width={135}
            height={50}
            loading="eager"
            fetchPriority="high"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <Link
            href={NAV_CTA.href}
            className={cn(
              buttonVariants({ variant: "brand" }),
              "hidden h-11 px-7 text-[15px] font-semibold lg:inline-flex"
            )}
          >
            {NAV_CTA.label}
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export { NAV_CTA, NAV_LINKS, isActivePath } from "./nav-config"
export type { NavLink } from "./nav-config"
