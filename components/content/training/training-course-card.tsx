import Link from "next/link"
import { ArrowRight, Clock, Layers } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CATEGORY_ACCENT,
  MAX_CARD_KEY_AREAS,
  courseNoun,
  isProgram,
} from "@/lib/training"
import type { TrainingCourse } from "@/payload-types"

/**
 * Landing-page card. Deliberately limited to category badge, title,
 * duration, module count, one value statement, up to five key areas and
 * the explore CTA — the handover keeps learning outcomes, prerequisites
 * and module detail on the course page only.
 */
export function TrainingCourseCard({ course }: { course: TrainingCourse }) {
  const accent = CATEGORY_ACCENT[course.category]
  const program = isProgram(course.category)
  const keyAreas = course.keyAreas.slice(0, MAX_CARD_KEY_AREAS)

  return (
    <article
      className={cn(
        "group flex flex-col border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-sm",
        // Integrated Programs carry greater visual weight.
        program && "border-[#D9A441]/40 bg-[#FDFBF6]"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={cn(
            "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            accent.badge
          )}
        >
          {course.category}
        </span>
        <span className="text-xs font-semibold text-foreground/40">
          {String(course.courseNumber).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-foreground">{course.title}</h3>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/60">
        <span className="inline-flex items-center gap-1.5">
          <Clock aria-hidden className="size-4" />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Layers aria-hidden className="size-4" />
          {course.moduleCount} Modules
        </span>
      </div>

      <p className="mt-5 flex-1 text-foreground/70">{course.summary}</p>

      <div className="mt-6">
        <p className="text-xs font-bold tracking-wide text-foreground uppercase">
          Key areas
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {keyAreas.map((area) => (
            <span
              key={area.id ?? area.value}
              className="border border-border bg-[#F4F6F9] px-3 py-1 text-sm text-foreground/70"
            >
              {area.value}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/training/${course.slug}`}
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Explore {courseNoun(course.category)}
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </article>
  )
}
