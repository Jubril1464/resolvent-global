"use client"

import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import {
  ALL_PROJECTS_FILTER,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/lib/projects"
import type { Project } from "@/payload-types"
import { ProjectCard } from "./project-card"

type Filter = typeof ALL_PROJECTS_FILTER | ProjectCategory

/**
 * Category filters from the content pack (All Projects + the five
 * categories). Client-side so filtering is instant; the full portfolio is
 * server-rendered into the page first, so every project is present in the
 * initial HTML for crawlers regardless of the active filter.
 */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>(ALL_PROJECTS_FILTER)

  // Only offer filters that actually have projects behind them.
  const filters = useMemo<Filter[]>(
    () => [
      ALL_PROJECTS_FILTER,
      ...PROJECT_CATEGORIES.filter((category) =>
        projects.some((project) => project.category === category)
      ),
    ],
    [projects]
  )

  const visible =
    active === ALL_PROJECTS_FILTER
      ? projects
      : projects.filter((project) => project.category === active)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => {
          const selected = filter === active
          const count =
            filter === ALL_PROJECTS_FILTER
              ? projects.length
              : projects.filter((p) => p.category === filter).length

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter)}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors outline-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                selected
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-background text-foreground/70 hover:bg-muted hover:text-foreground"
              )}
            >
              {filter}
              <span
                className={cn(
                  "text-xs",
                  selected ? "text-brand-foreground/70" : "text-foreground/40"
                )}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-foreground/50">
        {`Showing ${visible.length} of ${projects.length} projects`}
      </p>

      {/* Keyed by the active filter so switching category remounts the cards
          and replays their entrance animation. */}
      <div
        key={active}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
