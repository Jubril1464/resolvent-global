"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Visibility-only counterpart to `Reveal`: sets `data-revealed="true"` when
 * the block scrolls into view but applies no animation of its own, so
 * descendants can run their own staggered entrance without a competing
 * block-level fade.
 *
 * Needed because plain CSS animations fire on page load and would be over
 * before a below-the-fold grid is ever seen.
 */
export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Honour reduced motion by revealing immediately — the CSS also guards
    // itself, but this avoids leaving the attribute unset.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} data-revealed={revealed ? "true" : undefined} className={cn(className)}>
      {children}
    </div>
  )
}
