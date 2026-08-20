import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Layers, Tag } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { courseNoun, enquiryHref } from "@/lib/training"
import type { TrainingCourse } from "@/payload-types"
import { ModuleOrbit } from "./module-orbit"

const GRID_SIZE = 80

function Stat({
  icon: Icon,
  label,
  value,
  index,
}: {
  icon: typeof Clock
  label: string
  value: string
  index: number
}) {
  return (
    <div
      className="ch-stat group/stat relative overflow-hidden border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9A441]/40 hover:bg-white/10"
      style={{ ["--ch-s" as string]: index }}
    >
      {/* Accent bar that draws in on hover. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#D9A441] transition-transform duration-300 group-hover/stat:scale-x-100"
      />

      <div className="flex items-center gap-3">
        <span className="relative flex size-5 shrink-0 items-center justify-center">
          {/* Slow pulse so the row keeps a pulse even at rest. */}
          <span
            aria-hidden
            className="ch-stat-glow absolute size-5 rounded-full bg-emerald-300/40"
            style={{ ["--ch-s" as string]: index }}
          />
          <Icon
            aria-hidden
            className="relative size-5 text-emerald-200 transition-transform duration-300 group-hover/stat:scale-110"
            strokeWidth={1.75}
          />
        </span>
        <div>
          <p className="text-xs font-semibold tracking-wide text-white/50 uppercase">
            {label}
          </p>
          <p className="font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  )
}

export function CourseHero({
  course,
  totalCourses,
}: {
  course: TrainingCourse
  totalCourses: number
}) {
  const noun = courseNoun(course.category)

  return (
    <section className="relative overflow-hidden bg-[#0C203A] py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/training"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Back to Training
        </Link>

        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Copy column */}
          <div>
            <p
              className="ch-copy text-sm font-semibold tracking-wide text-[#D9A441] uppercase"
              style={{ ["--ch-c" as string]: 0 }}
            >
              {`${noun} ${course.courseNumber} of ${totalCourses}`}
              <span aria-hidden className="mx-2 text-white/30">
                |
              </span>
              {course.category}
            </p>

            <h1
              className="ch-copy mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              style={{ ["--ch-c" as string]: 1 }}
            >
              {course.title}
            </h1>

            <p
              className="ch-copy mt-6 text-white/80"
              style={{ ["--ch-c" as string]: 2 }}
            >
              {course.summary}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat icon={Tag} label="Category" value={course.category} index={0} />
              <Stat icon={Clock} label="Duration" value={course.duration} index={1} />
              <Stat
                icon={Layers}
                label="Modules"
                value={String(course.moduleCount)}
                index={2}
              />
            </div>

            <div className="ch-copy mt-8" style={{ ["--ch-c" as string]: 6 }}>
              <p className="text-xs font-bold tracking-wide text-white/50 uppercase">
                Key areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.keyAreas.map((area) => (
                  <span
                    key={area.id ?? area.value}
                    className="border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 transition-colors duration-300 hover:border-[#D9A441]/40 hover:bg-white/10"
                  >
                    {area.value}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="ch-copy mt-10 flex flex-wrap gap-4"
              style={{ ["--ch-c" as string]: 7 }}
            >
              <Link
                href={enquiryHref(course.title)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 gap-2 border-white bg-white px-8 text-base font-semibold text-[#0C203A] hover:bg-white/90 hover:text-[#0C203A]"
                )}
              >
                {`Enquire About This ${noun}`}
                <ArrowRight aria-hidden className="size-4" />
              </Link>
              <Link
                href="#curriculum"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                )}
              >
                {`View ${noun} Curriculum`}
              </Link>
            </div>
          </div>

          {/* Video with one orbiting SVG node per module. */}
          <div className="order-first lg:order-none">
            <ModuleOrbit
              modules={course.curriculum}
              videoSrc="/courses-vid.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
