"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import type { LegalSection } from "@/lib/legal"

/**
 * Sticky "on this page" index for a legal document, with a reading-progress
 * bar and a marker that tracks the section currently under the header.
 *
 * These documents run to twenty-odd sections, too many to read linearly, so
 * the index is the primary way in. The links are plain anchors —
 * `SectionAnchors` handles opening the collapsed section they point at, which
 * keeps this component responsible for highlighting only.
 *
 * Both effects bail out cleanly when the referenced nodes are missing, so the
 * component is safe to render on a page where the sections haven't mounted.
 */
export function SectionNav({
  title,
  sections,
  articleId,
}: {
  title: string
  sections: LegalSection[]
  articleId: string
}) {
  const [activeId, setActiveId] = useState(sections[0].id)
  const [progress, setProgress] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  // --- Which section is being read -----------------------------------------
  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)

    if (nodes.length === 0) return

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }

        // The observer band is the strip just below the site header, so more
        // than one collapsed row can sit in it — the topmost one wins. When
        // the band is empty (bottom of the page, or a long open section) the
        // previous choice stands rather than flickering back to section 1.
        const first = sections.find((section) => visible.has(section.id))
        if (first) setActiveId(first.id)
      },
      // Top of the viewport only, clear of the sticky site header.
      { rootMargin: "-88px 0px -65% 0px" }
    )

    for (const node of nodes) observer.observe(node)
    return () => observer.disconnect()
  }, [sections])

  // --- How far through the document the reader is --------------------------
  useEffect(() => {
    const article = document.getElementById(articleId)
    if (!article) return

    let frame = 0

    // Arrow consts rather than function declarations so `article` stays
    // narrowed to non-null by the guard above.
    const measure = () => {
      frame = 0
      // Re-read the rect inside the frame so it reflects the live layout.
      const rect = article.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) {
        setProgress(1)
        return
      }
      setProgress(Math.min(Math.max(-rect.top / scrollable, 0), 1))
    }

    // Coalesce to one measurement per frame — scroll fires far faster, and
    // `getBoundingClientRect` forces layout.
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (frame !== 0) cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [articleId])

  // --- Keep the active link inside the index's own scroll area -------------
  useEffect(() => {
    const list = listRef.current
    const link = list?.querySelector<HTMLElement>(`[data-nav-id="${activeId}"]`)
    if (!list || !link) return

    const offset = link.offsetTop - list.clientHeight / 2 + link.offsetHeight / 2
    // Scrolling the panel directly (rather than `scrollIntoView`) avoids
    // dragging the page along with it.
    list.scrollTo({ top: Math.max(offset, 0), behavior: "smooth" })
  }, [activeId])

  return (
    <nav aria-label={`${title} sections`} className="lgl-nav">
      <div className="border border-border bg-background">
        <div className="relative border-b border-border bg-[#F4F6F9] px-5 py-4">
          <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-brand" />
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-0.5 text-xs text-foreground/50">
            {sections.length} sections
          </p>

          {/* Reading progress. Announced as a progressbar so the state isn't
              purely visual. */}
          <div
            role="progressbar"
            aria-label="Reading progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            className="mt-3 h-0.5 w-full overflow-hidden bg-border"
          >
            <span
              className="block h-full origin-left bg-brand transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>

        <ul
          ref={listRef}
          className="max-h-[min(58vh,34rem)] overflow-y-auto overscroll-contain py-2"
        >
          {sections.map((section) => {
            const active = section.id === activeId

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  data-nav-id={section.id}
                  aria-current={active ? "location" : undefined}
                  className={cn(
                    "relative flex items-start gap-3 py-2 pr-4 pl-5 text-sm transition-colors duration-200",
                    "outline-none focus-visible:bg-brand/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand",
                    active
                      ? "bg-brand/[0.06] font-semibold text-brand-dark"
                      : "text-foreground/65 hover:bg-muted hover:text-foreground"
                  )}
                >
                  {/* Rail that grows in on the active row. */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-y-1 left-0 w-0.5 origin-center bg-brand transition-transform duration-300 ease-out",
                      active ? "scale-y-100" : "scale-y-0"
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "w-5 shrink-0 text-right text-xs tabular-nums transition-colors duration-200",
                      active ? "text-brand" : "text-foreground/35"
                    )}
                  >
                    {section.number}
                  </span>
                  {section.navLabel}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
