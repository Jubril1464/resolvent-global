import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CATEGORY_ACCENT, CORPORATE_TRAINING_HREF } from "@/lib/training"
import { getTrainingCourses } from "@/lib/get-training-courses"
import { getTrainingPage } from "@/lib/get-training-page"
import { TrainingCourseCard } from "./training-course-card"

/**
 * /training landing page body: positioning, then the portfolio grouped
 * Short → Applied → Integrated (order driven by the training-page global),
 * then the corporate-training band. Kept visually lighter than the
 * individual course pages, per the content handover.
 */
export async function TrainingPortfolio() {
  const [page, courses] = await Promise.all([getTrainingPage(), getTrainingCourses()])

  return (
    <>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          {page.positioning.map((paragraph) => (
            <p
              key={paragraph.id ?? paragraph.value}
              className="text-lg leading-relaxed text-foreground/70"
            >
              {paragraph.value}
            </p>
          ))}
        </div>
      </section>

      {page.categories.map((group, index) => {
        const groupCourses = courses.filter((course) => course.category === group.category)
        if (groupCourses.length === 0) return null

        const accent = CATEGORY_ACCENT[group.category]

        return (
          <section
            key={group.category}
            // Anchor target for the landing page's "Explore Training" CTA.
            id={index === 0 ? "portfolio" : undefined}
            className="scroll-mt-24 border-t border-border bg-[#F4F6F9] py-20 first-of-type:border-t-0"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <span aria-hidden className={cn("h-5 w-1", accent.rule)} />
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {group.label}
                </h2>
              </div>
              <p className="mt-3 text-foreground/60">{group.caption}</p>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {groupCourses.map((course) => (
                  <TrainingCourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-[#0C203A] py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
              Corporate Training
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {page.corporateTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-white/70">{page.corporateDescription}</p>
          </div>

          <div className="border border-white/10 bg-white/5 p-8">
            <span className="flex size-12 items-center justify-center rounded-md bg-[#D9A441]">
              <Users aria-hidden className="size-6 text-[#0C203A]" strokeWidth={1.75} />
            </span>
            <p className="mt-6 text-white/80">
              Organisational cohorts can be delivered virtually, in the classroom or
              through a blended format.
            </p>
            <Link
              href={CORPORATE_TRAINING_HREF}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "mt-6 h-11 gap-2 px-6 text-sm font-semibold"
              )}
            >
              Discuss Corporate Training
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
