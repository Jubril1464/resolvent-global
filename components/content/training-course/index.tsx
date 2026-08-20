import { ArrowRight, CircleCheck, FileText, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import { courseNoun, isProgram } from "@/lib/training"
import type { TrainingCourse, TrainingPage } from "@/payload-types"
import { RevealGroup } from "@/components/ui/reveal-group"
import { CourseBlueprint } from "./course-blueprint"
import { PracticalBackdrop } from "./practical-backdrop"
import { CourseHero } from "./course-hero"
import { CurriculumAccordion } from "./curriculum-accordion"

function Section({
  id,
  title,
  tone = "light",
  className,
  backdrop,
  children,
}: {
  id?: string
  title: string
  /**
   * "dark" is for sections on the navy surface (the Integrated Program
   * capstone). The heading needs an explicit light colour — a `text-white`
   * on the <section> alone is overridden by the heading own colour utility.
   */
  tone?: "light" | "dark"
  className?: string
  /** Full-bleed decorative layer painted behind the section content. */
  backdrop?: React.ReactNode
  children: React.ReactNode
}) {
  const dark = tone === "dark"

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20",
        backdrop && "relative isolate overflow-hidden",
        className
      )}
    >
      {backdrop ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {backdrop}
        </div>
      ) : null}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-foreground"
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
    <RevealGroup>
      <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-2">
        {items.map((item, i) => (
          <li
            key={item.id ?? item.value}
            className="td-tick flex items-start gap-3"
            style={{ ["--td-i" as string]: i }}
          >
            {/* Ring and tick draw themselves in sequence rather than fading in.
                Dash arrays are the paths own lengths (2πr ≈ 63, tick ≈ 16). */}
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="mt-0.5 size-5 shrink-0 text-brand"
              style={{ ["--td-i" as string]: i }}
            >
              <circle
                className="ck-ring"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="63"
                transform="rotate(-90 12 12)"
                style={{ ["--td-i" as string]: i }}
              />
              <path
                className="ck-tick"
                d="M7.5 12.5 L10.5 15.5 L16.5 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="16"
                style={{ ["--td-i" as string]: i }}
              />
            </svg>
            <span className="text-foreground/70">{item.value}</span>
          </li>
        ))}
      </ul>
    </RevealGroup>
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

      <Section title={`About the ${noun}`} className="bg-background">
        <RevealGroup className="relative">
          <CourseBlueprint className="pointer-events-none absolute -top-6 right-0 hidden h-[280px] w-[340px] text-foreground/[0.13] lg:block" />
        <div className="relative mt-8 max-w-4xl space-y-5 lg:max-w-[58%]">
          {course.about.map((paragraph) => (
            <p
              key={paragraph.id ?? paragraph.value}
              className="text-lg leading-relaxed text-foreground/70"
            >
              {paragraph.value}
            </p>
          ))}
        </div>
        </RevealGroup>
      </Section>

      <Section
        title="What You Will Learn"
        className="bg-[#F4F6F9]"
      >
        <CheckList items={course.learn} />
      </Section>

      <Section
        id="curriculum"
        title={`${noun} Curriculum`}
        className="bg-background"
      >
        <p className="mt-4 text-foreground/60">
          {`${course.moduleCount} modules · ${course.duration} indicative total`}
        </p>
        <CurriculumAccordion modules={course.curriculum} />
      </Section>

      <Section title="Who Should Attend" className="bg-[#F4F6F9]">
        <RevealGroup className="mt-8 flex flex-wrap gap-2">
          {course.audience.map((role, i) => (
            <span
              key={role.id ?? role.value}
              className="td-item border border-border bg-background px-4 py-2 text-sm text-foreground/70 transition-colors duration-300 hover:border-brand/40 hover:text-foreground"
              style={{ ["--td-i" as string]: i }}
            >
              {role.value}
            </span>
          ))}
        </RevealGroup>

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
        title="Practical Learning"
        className="bg-background"
        backdrop={
          <PracticalBackdrop className="size-full text-brand" />
        }
      >
        <p className="mt-4 max-w-3xl text-foreground/70">{course.practicalIntro}</p>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {course.practicalItems.map((item, i) => (
            <article
              key={item.id ?? item.title}
              className="td-item group/ex border border-border bg-[#F4F6F9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-background hover:shadow-sm"
              style={{ ["--td-i" as string]: i }}
            >
              <span className="flex size-10 items-center justify-center bg-[#132438] transition-transform duration-300 group-hover/ex:scale-110 group-hover/ex:rotate-6">
                <Sparkles aria-hidden className="size-4 text-emerald-200" />
              </span>
              <h3 className="mt-5 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{item.description}</p>
            </article>
          ))}
        </RevealGroup>
      </Section>

      {/* Integrated Programs get the heavier treatment their capstone warrants. */}
      <Section
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
          <RevealGroup>
          <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
            {course.workflow.map((step, index) => (
              <li
                key={step.id ?? step.value}
                className="flex items-center gap-3"
                style={{ ["--td-i" as string]: index }}
              >
                <span
                  className={cn(
                    "td-step border px-3 py-1.5 text-sm",
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
                      "td-arrow size-4 shrink-0",
                      program ? "text-white/30" : "text-foreground/30"
                    )}
                  />
                ) : null}
              </li>
            ))}
          </ol>
          </RevealGroup>
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
            <RevealGroup className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {course.finalDeliverables.map((item, i) => (
                <li
                  key={item.id ?? item.value}
                  className="td-tick flex items-start gap-2"
                  style={{ ["--td-i" as string]: i }}
                >
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
            </RevealGroup>
          </div>
        ) : null}
      </Section>

      <Section title="Resources Included" className="bg-background">
        <p className="mt-4 max-w-3xl text-sm text-foreground/60">
          {course.resourcesNote}
        </p>
        <RevealGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.resources.map((resource, i) => (
            <div
              key={resource.id ?? resource.value}
              className="td-item flex items-start gap-3 border border-border bg-[#F4F6F9] p-5 transition-colors duration-300 hover:border-brand/40 hover:bg-background"
              style={{ ["--td-i" as string]: i }}
            >
              <FileText
                aria-hidden
                className="mt-0.5 size-5 shrink-0 text-brand"
                strokeWidth={1.75}
              />
              <span className="text-sm text-foreground/70">{resource.value}</span>
            </div>
          ))}
        </RevealGroup>
      </Section>

      <Section title="What You Will Gain" className="bg-[#F4F6F9]">
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/70">
          {course.gainIntro}
        </p>
        <CheckList items={course.gains} />
      </Section>

      <Section
        title="Industry Applications"
        className="bg-background"
      >
        <RevealGroup className="mt-8 flex flex-wrap gap-2">
          {course.industries.map((industry, i) => (
            <span
              key={industry.id ?? industry.value}
              className="td-item border border-border bg-[#F4F6F9] px-4 py-2 text-sm text-foreground/70 transition-colors duration-300 hover:border-brand/40 hover:text-foreground"
              style={{ ["--td-i" as string]: i }}
            >
              {industry.value}
            </span>
          ))}
        </RevealGroup>
      </Section>

      <Section title="Delivery Options" className="bg-[#F4F6F9]">
        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {deliveryOptions.map((option, i) => (
            <article
              key={option.id ?? option.title}
              className="td-item border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-sm"
              style={{ ["--td-i" as string]: i }}
            >
              <h3 className="font-semibold text-foreground">{option.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{option.description}</p>
            </article>
          ))}
        </RevealGroup>
      </Section>
    </main>
  )
}
