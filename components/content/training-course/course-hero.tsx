import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Layers, Tag } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { courseNoun, enquiryHref } from "@/lib/training"
import type { TrainingCourse } from "@/payload-types"

const GRID_SIZE = 80

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-5 py-4">
      <Icon aria-hidden className="size-5 shrink-0 text-emerald-200" strokeWidth={1.75} />
      <div>
        <p className="text-xs font-semibold tracking-wide text-white/50 uppercase">
          {label}
        </p>
        <p className="font-semibold text-white">{value}</p>
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

        <p className="mt-6 text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
          {`${noun} ${course.courseNumber} of ${totalCourses}`}
          <span aria-hidden className="mx-2 text-white/30">
            |
          </span>
          {course.category}
        </p>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {course.title}
        </h1>

        <p className="mt-6 max-w-3xl text-white/80">{course.summary}</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:max-w-3xl">
          <Stat icon={Tag} label="Category" value={course.category} />
          <Stat icon={Clock} label="Duration" value={course.duration} />
          <Stat icon={Layers} label="Modules" value={String(course.moduleCount)} />
        </div>

        <div className="mt-8">
          <p className="text-xs font-bold tracking-wide text-white/50 uppercase">
            Key areas
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {course.keyAreas.map((area) => (
              <span
                key={area.id ?? area.value}
                className="border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
              >
                {area.value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
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
    </section>
  )
}
