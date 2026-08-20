import { cn } from "@/lib/utils"
import type { TrainingCourse } from "@/payload-types"

/**
 * Expandable curriculum, per the handover's "present modules as expandable
 * accordions to keep pages readable".
 *
 * Built on native <details>/<summary> rather than a JS disclosure: keyboard
 * and screen-reader support come for free, it works before (and without)
 * hydration, and this stays a Server Component. The first module is open so
 * the section doesn't read as empty.
 *
 * The open/close height animation lives in globals.css (`.accordion-item`),
 * since it needs the `::details-content` pseudo-element that utility classes
 * can't reach. Row-level motion is in `.acc-*`.
 */
export function CurriculumAccordion({
  modules,
}: {
  modules: TrainingCourse["curriculum"]
}) {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {modules.map((module, index) => (
        <details
          key={module.id ?? module.number}
          open={index === 0}
          className="accordion-item group/module relative overflow-hidden border border-border bg-background transition-colors duration-300 open:border-brand/40 open:bg-[#FCFDFC] hover:border-brand/30"
          style={{ ["--acc-i" as string]: index }}
        >
          {/* Left accent rail — grows to full height when the row opens. */}
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-brand transition-transform duration-500 ease-out group-open/module:scale-y-100"
          />

          {/* Periodic highlight, paused while the row is open. */}
          <span
            aria-hidden
            className="acc-sheen pointer-events-none absolute inset-y-0 -left-1/4 w-1/4 bg-gradient-to-r from-transparent via-brand/[0.07] to-transparent"
            style={{ ["--acc-i" as string]: index }}
          />

          <summary className="relative flex cursor-pointer list-none items-center gap-5 p-5 pl-6 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:gap-6 sm:p-6 sm:pl-7">
            {/* Large ghost numeral that fills with brand colour when open. */}
            <span
              aria-hidden
              className={cn(
                "shrink-0 text-4xl leading-none font-bold tabular-nums transition-all duration-500 sm:text-5xl",
                "text-foreground/12 group-open/module:text-brand group-hover/module:text-foreground/25 group-open/module:group-hover/module:text-brand"
              )}
            >
              {String(module.number).padStart(2, "0")}
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-foreground transition-colors duration-300 group-open/module:text-brand-dark">
                {module.title}
              </span>
              <span className="mt-1 block text-sm text-foreground/50">
                {module.duration}
                <span aria-hidden className="mx-2 text-foreground/20">
                  ·
                </span>
                {`${module.topics.length} topics`}
              </span>
            </span>

            {/* Plus that becomes a minus — the vertical stroke collapses. */}
            <span
              aria-hidden
              className="relative size-4 shrink-0 text-foreground/40 transition-colors duration-300 group-open/module:text-brand"
            >
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
              <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-out group-open/module:scale-y-0" />
            </span>
          </summary>

          <div className="relative border-t border-border/70 bg-[#F4F6F9] px-6 py-5 sm:pl-24">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {module.topics.map((topic, j) => (
                <li
                  key={topic.id ?? topic.value}
                  className="acc-topic flex items-start gap-2.5 text-sm text-foreground/70"
                  style={{ ["--acc-j" as string]: j }}
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-brand"
                  />
                  {topic.value}
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  )
}
