"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

/**
 * Fades/slides a section in the first time it scrolls into view. Skips the
 * animation entirely for prefers-reduced-motion, and never re-hides once
 * shown (a one-time reveal, not a replay-on-every-scroll effect).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkipAnimation(true)
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={visible && !skipAnimation && delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        skipAnimation
          ? "opacity-100"
          : visible
            ? "animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 ease-out"
            : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
