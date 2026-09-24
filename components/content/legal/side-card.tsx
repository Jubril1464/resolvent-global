import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import type { IconName } from "@/lib/icon-map"
import { cn } from "@/lib/utils"
import { RevealGroup } from "@/components/ui/reveal-group"
import { NamedIcon } from "./named-icon"
import { RichText } from "./rich-text"

/** Sidebar prompt beneath the section index. */
export function SideCard({
  icon,
  title,
  body,
  ctaLabel,
}: {
  icon: IconName
  title: string
  body: string
  ctaLabel: string
}) {
  return (
    <div className="mt-6 border border-border bg-background p-5">
      <span
        aria-hidden
        className="flex size-10 items-center justify-center rounded-full bg-brand/10"
      >
        <NamedIcon name={icon} className="size-4 text-brand" />
      </span>

      <p className="mt-4 text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{body}</p>

      <Link
        href="/contact"
        className={cn(
          buttonVariants({ variant: "brand" }),
          "mt-5 h-10 w-full px-5 text-sm font-semibold"
        )}
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

/** Closing reassurance band under the sections. */
export function Callout({
  icon,
  title,
  body,
}: {
  icon: IconName
  title: string
  body: string
}) {
  return (
    <RevealGroup className="mt-14">
      <div className="lgl-callout relative flex items-start gap-4 overflow-hidden border border-brand/25 bg-brand/[0.05] p-6">
        {/* Slow highlight sweeping across the band. */}
        <span
          aria-hidden
          className="lgl-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
        />

        <span
          aria-hidden
          className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/15"
        >
          <NamedIcon name={icon} className="size-4 text-brand-dark" />
        </span>

        <div className="relative">
          <p className="font-semibold text-brand-dark">{title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">
            <RichText text={body} />
          </p>
        </div>
      </div>
    </RevealGroup>
  )
}
