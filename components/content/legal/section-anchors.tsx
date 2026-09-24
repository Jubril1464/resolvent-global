"use client"

import { useEffect } from "react"

/**
 * Makes every `#section-*` link on the page open the section it points at.
 *
 * The document body is a list of native `<details>` elements, so a bare anchor
 * would scroll to a *collapsed* row and leave the reader to open it. Rather
 * than converting the side nav, the summary tiles and the in-copy references
 * into interactive components, this mounts a single delegated listener on the
 * document: the links themselves stay plain server-rendered `<a>` elements
 * that still work with JS off, middle-click and "open in new tab".
 *
 * It also handles a hash present on first load or arriving via back/forward,
 * which is how a shared deep link to a section behaves.
 */
export function SectionAnchors() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    /** Opens the `<details>` for `id` and brings it to the top of the view. */
    function reveal(id: string, scroll: boolean) {
      const target = document.getElementById(id)
      if (!(target instanceof HTMLDetailsElement)) return false

      target.open = true
      if (scroll) {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        })
      }
      return true
    }

    function onClick(event: MouseEvent) {
      // Leave modified clicks to the browser — they mean "new tab/window".
      if (event.defaultPrevented) return
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey)
        return

      const link = (event.target as Element | null)?.closest?.("a")
      if (!(link instanceof HTMLAnchorElement) || link.target === "_blank") return

      const hash = link.getAttribute("href")
      if (!hash?.startsWith("#section-")) return

      const id = hash.slice(1)
      if (!reveal(id, true)) return

      event.preventDefault()
      // Keep the URL shareable without adding a history entry per jump —
      // the back button should leave the page, not undo a scroll.
      history.replaceState(null, "", hash)
    }

    function onHashChange() {
      if (location.hash.startsWith("#section-")) {
        reveal(location.hash.slice(1), true)
      }
    }

    // A deep link that landed here directly: the browser has already tried
    // (and failed) to scroll to a collapsed row, so open it and re-scroll.
    onHashChange()

    document.addEventListener("click", onClick)
    window.addEventListener("hashchange", onHashChange)
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])

  return null
}
