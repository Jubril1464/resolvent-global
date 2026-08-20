import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CATEGORY_ACCENT,
  MAX_CARD_KEY_AREAS,
  courseNoun,
  isProgram,
} from "@/lib/training"
import type { TrainingCourse } from "@/payload-types"

/** Largest module count in the portfolio — the ring is scaled against it. */
const MAX_MODULES = 12
const RADIUS = 22
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/**
 * Landing-page card. Deliberately limited to category badge, title,
 * duration, module count, one value statement, up to five key areas and
 * the explore CTA — the handover keeps learning outcomes, prerequisites
 * and module detail on the course page only.
 *
 * The module count is drawn as an SVG ring scaled against the portfolio's
 * largest course, so relative depth (short vs integrated) reads instantly.
 * Animation is gated on the RevealGroup wrapper; see globals.css `.tc-*`.
 */
export function TrainingCourseCard({
  course,
  index = 0,
}: {
  course: TrainingCourse
  index?: number
}) {
  const accent = CATEGORY_ACCENT[course.category]
  const program = isProgram(course.category)
  const keyAreas = course.keyAreas.slice(0, MAX_CARD_KEY_AREAS)

  const filled = Math.min(course.moduleCount / MAX_MODULES, 1)
  const dashOffset = CIRCUMFERENCE * (1 - filled)
  const ringColor = program ? "#D9A441" : "var(--brand)"

  return (
    <article
      className={cn(
        "tc-card group/card relative flex flex-col overflow-hidden border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-sm",
        // Integrated Programs carry greater visual weight.
        program && "border-[#D9A441]/40 bg-[#FDFBF6]"
      )}
      style={{ ["--tc-i" as string]: index }}
    >
      {/* Decorative corner flourish — concentric arcs that rotate slowly and
          speed up on hover. */}
      <svg
        aria-hidden
        viewBox="0 0 120 120"
        className="pointer-events-none absolute -top-10 -right-10 size-40 text-foreground/[0.06] transition-colors duration-500 group-hover/card:text-brand/15"
      >
        <g className="tc-orbit" style={{ transformOrigin: "60px 60px" }}>
          <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
          <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" />
          <circle cx="60" cy="60" r="24" fill="none" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={cn(
            "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            accent.badge
          )}
        >
          {course.category}
        </span>

        {/* Module ring — arc length encodes module count. */}
        <span className="relative shrink-0">
          <svg viewBox="0 0 52 52" className="size-14 -rotate-90">
            <circle
              cx="26"
              cy="26"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-foreground/10"
            />
            <circle
              cx="26"
              cy="26"
              r={RADIUS}
              fill="none"
              stroke={ringColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              className="tc-ring"
              style={{
                ["--tc-dash" as string]: CIRCUMFERENCE,
                ["--tc-offset" as string]: dashOffset,
              }}
            />
          </svg>
          <span className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm leading-none font-bold text-foreground">
              {course.moduleCount}
            </span>
            <span className="text-[9px] leading-tight font-semibold tracking-wide text-foreground/40 uppercase">
              mod
            </span>
          </span>
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-semibold text-foreground">
        {course.title}
      </h3>

      <div className="relative mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/60">
        <span className="inline-flex items-center gap-1.5">
          <Clock aria-hidden className="size-4" />
          {course.duration}
        </span>
        <span className="text-xs font-semibold text-foreground/35">
          {String(course.courseNumber).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-5 flex-1 text-foreground/70">{course.summary}</p>

      <div className="relative mt-6">
        <p className="text-xs font-bold tracking-wide text-foreground uppercase">
          Key areas
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {keyAreas.map((area, j) => (
            <span
              key={area.id ?? area.value}
              className="tc-chip border border-border bg-[#F4F6F9] px-3 py-1 text-sm text-foreground/70 transition-colors duration-300 group-hover/card:border-brand/25"
              style={{ ["--tc-j" as string]: j }}
            >
              {area.value}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={`/training/${course.slug}`}
        className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Explore {courseNoun(course.category)}
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover/card:translate-x-1"
        />
      </Link>
    </article>
  )
}
