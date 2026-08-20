import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Lock } from "lucide-react"

import { cn } from "@/lib/utils"
import { CATEGORY_ACCENT, isOngoing } from "@/lib/projects"
import type { Project } from "@/payload-types"

/**
 * Portfolio card. Entrance/reveal animation is keyed off `--pj-i` and
 * replays whenever the category filter changes, because ProjectsExplorer
 * keys the grid by the active filter. See globals.css `.pj-*`.
 */
export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  const accent = CATEGORY_ACCENT[project.category]
  const ongoing = isOngoing(project.category)
  const image = typeof project.image === "object" ? project.image : null

  return (
    <article
      className={cn(
        "pj-card group/pj flex flex-col overflow-hidden border border-border bg-background transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lg",
        ongoing && "border-[#D9A441]/40"
      )}
      style={{ ["--pj-i" as string]: index }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#0C203A]">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="pj-media object-cover transition-transform duration-[900ms] ease-out group-hover/pj:scale-[1.08]"
          />
        ) : (
          <div
            aria-hidden
            className="pj-media absolute inset-0 bg-gradient-to-br from-[#0C203A] to-[#0B7A53] opacity-90"
          />
        )}

        {/* Bottom scrim so the badges stay legible over any photo. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0C203A]/80 via-[#0C203A]/10 to-transparent transition-opacity duration-500 group-hover/pj:from-[#0C203A]/60"
        />

        <span className="absolute top-4 left-4 bg-[#0C203A]/90 px-2.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
          {project.projectId}
        </span>

        {ongoing ? (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 bg-[#D9A441] px-2.5 py-1 text-xs font-bold text-[#0C203A]">
            <Lock aria-hidden className="size-3" />
            Confidential
          </span>
        ) : null}

        {/* Status sits on the image, over the scrim. */}
        <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/90">
          {project.statusBadge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span
          className={cn(
            "pj-meta inline-flex w-fit items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            accent.badge
          )}
          style={{ ["--pj-j" as string]: 0 }}
        >
          {project.category}
        </span>

        <h3
          className="pj-meta mt-4 text-lg font-semibold text-foreground"
          style={{ ["--pj-j" as string]: 1 }}
        >
          {project.title}
        </h3>

        <p
          className="pj-meta mt-2 flex-1 text-sm text-foreground/70"
          style={{ ["--pj-j" as string]: 2 }}
        >
          {project.caption}
        </p>

        <span
          aria-hidden
          className={cn(
            "pj-meta mt-4 block h-0.5 w-8 transition-all duration-300 group-hover/pj:w-16",
            accent.rule
          )}
          style={{ ["--pj-j" as string]: 3 }}
        />

        <Link
          href={`/projects/${project.slug}`}
          className="pj-meta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          style={{ ["--pj-j" as string]: 4 }}
        >
          {project.primaryCta}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover/pj:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
