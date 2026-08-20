import Link from "next/link"
import {
  ArrowRight,
  CircleCheck,
  Compass,
  Factory,
  Leaf,
  Lock,
  ShieldAlert,
  Target,
  TriangleAlert,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { isOngoing, projectEnquiryHref } from "@/lib/projects"
import type { Project } from "@/payload-types"
import { FlowField } from "./flow-field"
import { ProjectHero } from "./project-hero"

function CardHeading({
  icon: Icon,
  title,
  tone = "brand",
}: {
  icon: typeof Target
  title: string
  tone?: "brand" | "navy" | "gold" | "alert"
}) {
  const tones = {
    brand: "bg-brand/10 text-brand",
    navy: "bg-[#0C203A]/10 text-[#0C203A]",
    gold: "bg-[#D9A441]/20 text-[#8A6420]",
    alert: "bg-destructive/10 text-destructive",
  }

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-md",
          tones[tone]
        )}
      >
        <Icon aria-hidden className="size-5" strokeWidth={1.75} />
      </span>
      <h2 className="text-xl font-bold text-[#0C203A]">{title}</h2>
    </div>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const ongoing = isOngoing(project.category)

  return (
    <main className="flex-1">
      <ProjectHero project={project} />

      {/* Mid-page description band */}
      <section className="bg-[#F4F6F9] py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-foreground/80">
            {project.description}
          </p>
        </div>
      </section>

      {ongoing ? (
        /* ---- Ongoing: confidential presentation ---------------------- */
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {project.disclosureNote ? (
              <div className="border-l-4 border-[#D9A441] bg-[#FDFBF6] p-6">
                <CardHeading icon={ShieldAlert} title="Disclosure note" tone="gold" />
                <p className="mt-4 leading-relaxed text-foreground/70">
                  {project.disclosureNote}
                </p>
              </div>
            ) : null}

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <article className="border border-border bg-background p-6">
                <CardHeading icon={TriangleAlert} title="Challenge" tone="alert" />
                <p className="mt-4 text-foreground/70">{project.challenge}</p>
              </article>

              {project.developmentFocus ? (
                <article className="border border-border bg-background p-6">
                  <CardHeading icon={Compass} title="Development focus" tone="navy" />
                  <p className="mt-4 text-foreground/70">{project.developmentFocus}</p>
                </article>
              ) : null}

              {project.applications ? (
                <article className="border border-border bg-background p-6">
                  <CardHeading icon={Leaf} title="Applications" tone="brand" />
                  <p className="mt-4 text-foreground/70">{project.applications}</p>
                </article>
              ) : null}
            </div>

            {project.applicationsTags && project.applicationsTags.length > 0 ? (
              <div className="mt-12">
                <p className="text-xs font-bold tracking-wide text-foreground uppercase">
                  Application areas
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.applicationsTags.map((tag) => (
                    <span
                      key={tag.id ?? tag.value}
                      className="border border-border bg-[#F4F6F9] px-4 py-2 text-sm text-foreground/70"
                    >
                      {tag.value}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : (
        /* ---- Delivered capability ------------------------------------ */
        <section className="bg-background py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <article className="border border-border bg-background p-6">
                <CardHeading icon={TriangleAlert} title="Challenge" tone="alert" />
                <p className="mt-4 leading-relaxed text-foreground/70">
                  {project.challenge}
                </p>
              </article>

              {project.deliverables && project.deliverables.length > 0 ? (
                <article className="mt-8 border border-border bg-[#F4F6F9] p-6">
                  <CardHeading icon={CircleCheck} title="We deliver" tone="brand" />
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {project.deliverables.map((item) => (
                      <li key={item.id ?? item.value} className="flex items-start gap-2">
                        <CircleCheck
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand"
                        />
                        <span className="text-sm text-foreground/70">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>

            <div>
              <article className="border border-border bg-background p-6">
                <CardHeading icon={Compass} title="Resolvent Global approach" tone="navy" />
                {project.approach ? (
                  <p className="mt-4 leading-relaxed text-foreground/70">
                    {project.approach}
                  </p>
                ) : null}

                {project.pathway && project.pathway.length > 0 ? (
                  <div className="relative">
                    {/* Moving SVG spine threading the stage numbers. Sits at
                        the horizontal centre of the 2rem number circles. */}
                    <svg
                      aria-hidden
                      className="pointer-events-none absolute top-8 left-4 h-[calc(100%-4rem)] w-px -translate-x-1/2 overflow-visible"
                      viewBox="0 0 2 100"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100"
                        stroke="var(--brand)"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        className="psvg-spine-flow"
                        vectorEffect="non-scaling-stroke"
                        opacity="0.45"
                      />
                    </svg>
                  <ol className="relative mt-6 divide-y divide-border border-t border-border">
                    {project.pathway.map((stage) => (
                      <li
                        key={stage.id ?? stage.stage}
                        className="grid grid-cols-[auto_1fr] gap-4 py-4 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.4fr)]"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0C203A] text-sm font-bold text-white">
                          {stage.stage}
                        </span>
                        <p className="self-center font-semibold text-foreground">
                          {stage.step}
                        </p>
                        <p className="col-span-2 text-sm text-foreground/60 sm:col-span-1 sm:self-center">
                          {stage.purpose}
                        </p>
                      </li>
                    ))}
                  </ol>
                  </div>
                ) : null}
              </article>
            </div>
          </div>
        </section>
      )}

      {!ongoing && project.targetSectors && project.targetSectors.length > 0 ? (
        <section className="bg-[#F4F6F9] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <CardHeading icon={Factory} title="Target sectors" tone="navy" />
            <div className="mt-8 flex flex-wrap gap-2">
              {project.targetSectors.map((sector) => (
                <span
                  key={sector.id ?? sector.value}
                  className="border border-border bg-background px-4 py-2 text-sm text-foreground/70"
                >
                  {sector.value}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Value pillars — "why it matters" */}
      <section className={cn("py-20", ongoing ? "bg-[#F4F6F9]" : "bg-background")}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CardHeading icon={Target} title="Why it matters" tone="brand" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {project.valuePillars.map((pillar) => (
              <article
                key={pillar.id ?? pillar.pillar}
                className={cn(
                  "border border-border p-6",
                  ongoing ? "bg-background" : "bg-[#F4F6F9]"
                )}
              >
                <p className="font-semibold text-[#0C203A]">{pillar.pillar}</p>
                <span aria-hidden className="mt-3 block h-0.5 w-8 bg-[#D9A441]" />
                <p className="mt-3 text-sm text-foreground/60">{pillar.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark footer CTA */}
      <section className="relative isolate overflow-hidden bg-[#0C203A] py-16 text-white">
        <FlowField className="pointer-events-none absolute inset-0 -z-10 size-full opacity-80" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-start gap-4">
            <span className="hidden size-12 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 sm:flex">
              {ongoing ? (
                <Lock aria-hidden className="size-5 text-[#D9A441]" />
              ) : (
                <Target aria-hidden className="size-5 text-[#D9A441]" />
              )}
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {project.footerCtaHeading}
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">{project.footerCtaSubtext}</p>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              href={projectEnquiryHref(project.title)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 gap-2 border-2 border-[#D9A441] bg-[#D9A441] px-7 text-base font-semibold text-[#0C203A] hover:bg-[#D9A441]/90 hover:text-[#0C203A]"
              )}
            >
              {project.detailCta}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 border-2 border-white/40 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              )}
            >
              All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
