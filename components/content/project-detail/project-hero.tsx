import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BadgeCheck, Lock } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CATEGORY_ACCENT, isOngoing, projectEnquiryHref } from "@/lib/projects"
import { ProcessDiagram } from "./process-diagram"
import type { Project } from "@/payload-types"

/**
 * Two-column hero following the P04 master pattern from the content pack:
 * project summary on the left, premium visual on the right.
 */
export function ProjectHero({ project }: { project: Project }) {
  const accent = CATEGORY_ACCENT[project.category]
  const ongoing = isOngoing(project.category)
  const image = typeof project.image === "object" ? project.image : null
  const stages = (project.diagramStages ?? []).map((s) => s.value)

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
        <div className="px-6 py-14 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-foreground/50">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <Link href="/projects" className="hover:text-foreground">
              Our Projects
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <span className="font-medium text-foreground">{project.projectId}</span>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="bg-brand px-3 py-1 text-xs font-bold tracking-wide text-brand-foreground">
              {project.projectId}
            </span>
            <span
              className={cn(
                "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                accent.badge
              )}
            >
              {project.category}
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#0C203A] sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <span aria-hidden className={cn("mt-6 block h-1 w-16", accent.rule)} />

          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            {project.caption}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 border border-border bg-[#F4F6F9] px-4 py-2.5">
            {ongoing ? (
              <Lock aria-hidden className="size-4 shrink-0 text-[#8A6420]" />
            ) : (
              <BadgeCheck aria-hidden className="size-4 shrink-0 text-brand" />
            )}
            <span className="text-xs font-semibold tracking-wide text-foreground/50 uppercase">
              Status
            </span>
            <span
              className={cn(
                "text-sm font-semibold",
                ongoing ? "text-[#8A6420]" : "text-brand"
              )}
            >
              {project.statusBadge}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={projectEnquiryHref(project.title)}
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-12 gap-2 px-7 text-base font-semibold"
              )}
            >
              {project.primaryCta}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
            <Link
              href={projectEnquiryHref(project.title)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 border-2 border-[#0C203A] px-7 text-base font-semibold text-[#0C203A] hover:bg-[#0C203A]/5"
              )}
            >
              {project.detailCta}
            </Link>
          </div>
        </div>

        <div className="pdiagram-panel relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#0C203A] via-[#0C203A] to-[#0B7A53] lg:min-h-full">
          {image?.url ? (
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="pj-hero-media object-cover"
              priority
            />
          ) : (
            <>
              <div
                aria-hidden
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute inset-0">
                <ProcessDiagram
                  stages={stages}
                  variant={ongoing ? "cycle" : "linear"}
                  centerLabel={project.diagramCenterLabel ?? undefined}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
