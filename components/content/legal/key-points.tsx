import { RevealGroup } from "@/components/ui/reveal-group"
import type { GlanceItem } from "@/lib/legal"
import { NamedIcon } from "./named-icon"

/**
 * Plain-language summary of the document — one tile per point, each a link
 * into the section that states the same thing in full.
 *
 * Making them links rather than static tiles is the point: the summary is a
 * way *into* the document, not a replacement for it, and nothing here is
 * relied on as the operative wording.
 *
 * Server Component; entrance motion is CSS (globals.css `.lgl-glance`) and
 * runs off `RevealGroup`, so it plays when the row is scrolled to rather than
 * finishing unseen during page load.
 */
export function KeyPoints({
  heading,
  items,
}: {
  heading: string
  items: GlanceItem[]
}) {
  return (
    <section aria-labelledby="at-a-glance-heading" className="mt-16 scroll-mt-24">
      <h2
        id="at-a-glance-heading"
        className="text-2xl font-bold tracking-tight text-foreground"
      >
        {heading}
      </h2>
      <span aria-hidden className="mt-3 block h-0.5 w-12 bg-brand" />

      <RevealGroup className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, index) => (
            <a
              key={item.text}
              href={`#${item.sectionId}`}
              className="lgl-glance group/tile relative flex flex-col items-center gap-3 bg-background px-3 py-6 text-center transition-colors duration-300 outline-none hover:bg-[#F7FAF8] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
              style={{ ["--lgl-i" as string]: index }}
            >
              <span
                aria-hidden
                className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 transition-transform duration-300 ease-out group-hover/tile:scale-110"
              >
                {/* Halo that rings outward on hover — see `.lgl-halo`. */}
                <span className="lgl-halo absolute inset-0 rounded-full border border-brand/40 opacity-0" />
                <NamedIcon
                  name={item.icon}
                  className="relative size-5 text-brand"
                />
              </span>

              <span className="text-xs leading-relaxed text-foreground/70 transition-colors duration-300 group-hover/tile:text-foreground">
                {item.text}
              </span>

              {/* Underline that wipes in from the left on hover/focus. */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover/tile:scale-x-100 group-focus-visible/tile:scale-x-100"
              />
            </a>
        ))}
      </RevealGroup>
    </section>
  )
}
