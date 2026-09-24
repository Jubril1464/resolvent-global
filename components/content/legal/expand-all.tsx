"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react"

/** Never changes, so the button's mounted state settles in one render. */
const subscribeToNothing = () => () => {}

/**
 * Opens or closes every section at once — the control a reader wants when
 * they're scanning the whole document, printing it, or searching it in a
 * browser that doesn't expand `<details>` for find-in-page.
 *
 * It drives the sections through the DOM rather than lifting their open state
 * into React: the rows are server-rendered native `<details>`, and keeping
 * them that way means the document still reads and expands with JavaScript off.
 * Since a reader can also toggle rows individually, the label is derived from
 * a `toggle` listener rather than assumed from the last button press.
 */
export function ExpandAll() {
  const [allOpen, setAllOpen] = useState(false)
  // Not rendered until mounted: with no JS this button would do nothing, and
  // the sections open perfectly well one at a time.
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  )

  useEffect(() => {
    function sections() {
      return document.querySelectorAll<HTMLDetailsElement>("[data-legal-section]")
    }

    function sync() {
      const all = sections()
      setAllOpen(all.length > 0 && Array.from(all).every((node) => node.open))
    }

    sync()
    // `toggle` doesn't bubble, so listen in the capture phase at the document
    // rather than binding to every row.
    document.addEventListener("toggle", sync, true)
    return () => document.removeEventListener("toggle", sync, true)
  }, [])

  function toggleAll() {
    const next = !allOpen
    for (const node of document.querySelectorAll<HTMLDetailsElement>(
      "[data-legal-section]"
    )) {
      node.open = next
    }
    setAllOpen(next)
  }

  if (!mounted) return null

  const Icon = allOpen ? ChevronsDownUp : ChevronsUpDown

  return (
    <button
      type="button"
      onClick={toggleAll}
      aria-expanded={allOpen}
      className="group/expand inline-flex items-center gap-2 border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground/70 transition-colors duration-200 outline-none hover:border-brand/40 hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Icon
        aria-hidden
        className="size-3.5 text-brand transition-transform duration-300 ease-out group-hover/expand:scale-110"
        strokeWidth={2}
      />
      {allOpen ? "Collapse all" : "Expand all"}
    </button>
  )
}
