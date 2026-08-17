import { ArrowRight, CircleCheck, FileText, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { courseNoun, isProgram } from "@/lib/training"
import type { TrainingCourse, TrainingPage } from "@/payload-types"
import { CourseHero } from "./course-hero"
import { CurriculumAccordion } from "./curriculum-accordion"

function Section({
  id,
  eyebrow,
  title,
  tone = "light",
  className,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  /**
   * "dark" is for sections on the navy surface (the Integrated Program
   * capstone). The heading and eyebrow need explicit light colours — a
   * `text-white` on the <section> alone is overridden by the heading's own
   * colour utility, which left the title black-on-navy.
   */
  tone?: "light" | "dark"
  className?: string
  children: React.ReactNode
}) {
  const dark = tone === "dark"

  return (
    <section id={id} className={cn("scroll-mt-24 py-20", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {eyebrow ? (
          <p
            className={cn(
              "text-sm font-semibold tracking-wide uppercase",
              dark ? "text-[#D9A441]" : "text-brand"
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-foreground",
            eyebrow && "mt-3"
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

function CheckList({ items }: { items: { id?: string | null; value: string }[] }) {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-2">
      {items.map((item) => (
        <li key={item.id ?? item.value} className="flex items-start gap-3">
          <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
          <span className="text-foreground/70">{item.value}</span>
        </li>
      ))}
    </ul>
  )
}

export function TrainingCourseDetail({
  course,
  deliveryOptions,
  totalCourses,
}: {
  course: TrainingCourse
  deliveryOptions: TrainingPage["deliveryOptions"]
  totalCourses: number
}) {
  const noun = courseNoun(course.category)
  const program = isProgram(course.category)

  return (
    <main className="flex-1">
      <CourseHero course={course} totalCourses={totalCourses} />

      <Section eyebrow="Overview" title={`About the ${noun}`} className="bg-background">
        <div className="mt-8 max-w-4xl space-y-5">
          {course.about.map((paragraph) => (
            <p
              key={paragraph.id ?? paragraph.value}
              className="text-lg leading-relaxed text-foreground/70"
            >
              {paragraph.value}
            </p>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Learning Outcomes"
        title="What You Will Learn"
        className="bg-[#F4F6F9]"
      >
        <CheckList items={course.learn} />
      </Section>

      <Section
        id="curriculum"
        eyebrow="Curriculum"
        title={`${noun} Curriculum`}
        className="bg-background"
      >
        <p className="mt-4 text-foreground/60">
          {`${course.moduleCount} modules · ${course.duration} indicative total`}
        </p>
        <CurriculumAccordion modules={course.curriculum} />
      </Section>

      <Section eyebrow="Audience" title="Who Should Attend" className="bg-[#F4F6F9]">
        <div className="mt-8 flex flex-wrap gap-2">
          {course.audience.map((role) => (
            <span
              key={role.id ?? role.value}
              className="border border-border bg-background px-4 py-2 text-sm text-foreground/70"
            >
              {role.value}
            </span>
          ))}
        </div>

        <div className="mt-12 border border-border bg-background p-8">
          <h3 className="text-xs font-bold tracking-wide text-foreground uppercase">
            Prerequisites
          </h3>
          <ul className="mt-5 space-y-3">
            {course.prerequisites.map((item) => (
              <li key={item.id ?? item.value} className="flex items-start gap-3">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-brand" />
                <span className="text-foreground/70">{item.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-5 text-sm font-medium text-brand">
            {course.prereqNote}
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Applied Learning"
        title="Practical Learning"
        className="bg-background"
      >
        <p className="mt-4 max-w-3xl text-foreground/70">{course.practicalIntro}</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.practicalItems.map((item) => (
            <article
              key={item.id ?? item.title}
              className="border border-border bg-[#F4F6F9] p-6"
            >
              <span className="flex size-10 items-center justify-center bg-[#132438]">
                <Sparkles aria-hidden className="size-4 text-emerald-200" />
              </span>
              <h3 className="mt-5 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Integrated Programs get the heavier treatment their capstone warrants. */}
      <Section
        eyebrow={program ? "Capstone" : "Case Study"}
        title={program ? "Integrated Capstone Project" : "Applied Case Study"}
        tone={program ? "dark" : "light"}
        className={program ? "bg-[#0C203A]" : "bg-[#F4F6F9]"}
      >
        {program && course.capstoneTitle ? (
          <p className="mt-6 text-xl font-semibold text-[#D9A441]">
            {course.capstoneTitle}
          </p>
        ) : null}

        <div className="mt-6 max-w-4xl space-y-5">
          {course.caseParagraphs.map((paragraph) => (
            <p
              key={paragraph.id ?? paragraph.value}
              className={cn(
                "text-lg leading-relaxed",
                program ? "text-white/80" : "text-foreground/70"
              )}
            >
              {paragraph.value}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <p
            className={cn(
              "text-xs font-bold tracking-wide uppercase",
              program ? "text-white/50" : "text-foreground"
            )}
          >
            Applied workflow
          </p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
            {course.workflow.map((step, index) => (
              <li key={step.id ?? step.value} className="flex items-center gap-3">
                <span
                  className={cn(
                    "border px-3 py-1.5 text-sm",
                    program
                      ? "border-white/15 bg-white/5 text-white/80"
                      : "border-border bg-background text-foreground/70"
                  )}
                >
                  {step.value}
                </span>
                {index < course.workflow.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    className={cn(
                      "size-4 shrink-0",
                      program ? "text-white/30" : "text-foreground/30"
                    )}
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        {course.finalDeliverables && course.finalDeliverables.length > 0 ? (
          <div
            className={cn(
              "mt-12 border p-8",
              program ? "border-white/10 bg-white/5" : "border-border bg-background"
            )}
          >
            <h3
              className={cn(
                "text-xs font-bold tracking-wide uppercase",
                program ? "text-white/50" : "text-foreground"
              )}
            >
              Final deliverable includes
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {course.finalDeliverables.map((item) => (
                <li key={item.id ?? item.value} className="flex items-start gap-2">
                  <CircleCheck
                    aria-hidden
                    className={cn(
                      "mt-0.5 size-4 shrink-0",
                      program ? "text-[#D9A441]" : "text-brand"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      program ? "text-white/80" : "text-foreground/70"
                    )}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      <Section eyebrow="Toolkit" title="Resources Included" className="bg-background">
        <p className="mt-4 max-w-3xl text-sm text-foreground/60">
          {course.resourcesNote}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.resources.map((resource) => (
            <div
              key={resource.id ?? resource.value}
              className="flex items-start gap-3 border border-border bg-[#F4F6F9] p-5"
            >
              <FileText
                aria-hidden
                className="mt-0.5 size-5 shrink-0 text-brand"
                strokeWidth={1.75}
              />
              <span className="text-sm text-foreground/70">{resource.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="What You Will Gain" className="bg-[#F4F6F9]">
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/70">
          {course.gainIntro}
        </p>
        <CheckList items={course.gains} />
      </Section>

      <Section
        eyebrow="Areas of Application"
        title="Industry Applications"
        className="bg-background"
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {course.industries.map((industry) => (
            <span
              key={industry.id ?? industry.value}
              className="border border-border bg-[#F4F6F9] px-4 py-2 text-sm text-foreground/70"
            >
              {industry.value}
            </span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Delivery" title="Delivery Options" className="bg-[#F4F6F9]">
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {deliveryOptions.map((option) => (
            <article
              key={option.id ?? option.title}
              className="border border-border bg-background p-6"
            >
              <h3 className="font-semibold text-foreground">{option.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{option.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
