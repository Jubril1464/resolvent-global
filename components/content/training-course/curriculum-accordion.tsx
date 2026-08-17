import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import type { TrainingCourse } from "@/payload-types"

/**
 * Expandable curriculum, per the handover's "present modules as expandable
 * accordions to keep pages readable".
 *
 * Built on native <details>/<summary> rather than a JS disclosure: it is
 * keyboard- and screen-reader-accessible for free, works before (and
 * without) hydration, and keeps this a Server Component. The first module
 * is open so the section doesn't read as empty.
 *
 * The open/close height animation lives in globals.css (`.accordion-item`),
 * since it needs the `::details-content` pseudo-element that utility
 * classes can't reach. The content fade below layers on top of it.
 */
export function CurriculumAccordion({
  modules,
}: {
  modules: TrainingCourse["curriculum"]
}) {
  return (
    <div className="mt-10 divide-y divide-border border border-border bg-background">
      {modules.map((module, index) => (
        <details
          key={module.id ?? module.number}
          open={index === 0}
          className="accordion-item group/module"
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 p-6 transition-colors hover:bg-[#F4F6F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            <span className="flex size-9 shrink-0 items-center justify-center bg-[#0C203A] text-sm font-bold text-white">
              {module.number}
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-foreground">{module.title}</span>
              <span className="mt-0.5 block text-sm text-foreground/50">
                {module.duration}
              </span>
            </span>

            <ChevronDown
              aria-hidden
              className="size-5 shrink-0 text-foreground/40 transition-transform duration-200 group-open/module:rotate-180"
            />
          </summary>

          <div className="border-t border-border bg-[#F4F6F9] px-6 py-5 sm:pl-19">
            <ul
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2",
                // Fades/slides the topics in as the panel expands. Also the
                // sole animation in browsers without ::details-content
                // support, so the toggle still reads as intentional there.
                "group-open/module:animate-in group-open/module:fade-in group-open/module:slide-in-from-top-1",
                "group-open/module:fill-mode-both group-open/module:duration-500 group-open/module:delay-75",
                "motion-reduce:animate-none"
              )}
            >
              {module.topics.map((topic) => (
                <li
                  key={topic.id ?? topic.value}
                  className="flex items-start gap-2 text-sm text-foreground/70"
                >
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 bg-brand" />
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
