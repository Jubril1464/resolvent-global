"use client"

import { useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { resolveIcon } from "@/lib/icon-map"
import type { Industry } from "@/payload-types"
import { IndustryVisual } from "./industry-visual"

export function IndustriesExplorer({ industries }: { industries: Industry[] }) {
  const [activeId, setActiveId] = useState(industries[0].tabId)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const activeIndex = industries.findIndex((industry) => industry.tabId === activeId)
  const active = industries[activeIndex]

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return
    event.preventDefault()

    const next =
      event.key === "ArrowDown"
        ? (index + 1) % industries.length
        : (index - 1 + industries.length) % industries.length

    setActiveId(industries[next].tabId)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
      <div role="tablist" aria-orientation="vertical" aria-label="Industries served" className="flex flex-col gap-1">
        {industries.map((industry, index) => {
          const selected = industry.tabId === activeId
          const Icon = resolveIcon(industry.icon)

          return (
            <button
              key={industry.tabId}
              ref={(el) => {
                tabRefs.current[index] = el
              }}
              type="button"
              role="tab"
              id={`industry-tab-${industry.tabId}`}
              aria-selected={selected}
              aria-controls={`industry-panel-${industry.tabId}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(industry.tabId)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={cn(
                "flex items-center gap-4 border border-border px-5 py-4 text-left text-base font-medium transition-colors outline-none",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                selected
                  ? "border-brand bg-brand text-brand-foreground"
                  : "bg-[#F4F6F9] text-foreground hover:bg-muted"
              )}
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  selected ? "bg-white/15" : "bg-[#0C203A]"
                )}
              >
                <Icon aria-hidden className="size-4 text-white" strokeWidth={1.75} />
              </span>
              {industry.label}
            </button>
          )
        })}
      </div>

      <div
        key={active.tabId}
        role="tabpanel"
        id={`industry-panel-${active.tabId}`}
        aria-labelledby={`industry-tab-${active.tabId}`}
        tabIndex={0}
        className="animate-in fade-in flex flex-col border border-border duration-300"
      >
        {typeof active.image === "object" && active.image ? (
          <IndustryVisual image={active.image} />
        ) : null}
        <p className="bg-[#F4F6F9] p-6 text-foreground/70">{active.description}</p>
      </div>
    </div>
  )
}
