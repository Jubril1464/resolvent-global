import { createElement } from "react"

import { resolveIcon, type IconName } from "@/lib/icon-map"

/**
 * Renders an ICON_MAP icon by the name stored against it in the CMS.
 *
 * `createElement` rather than assigning the resolved component to a local and
 * rendering `<Icon />`: that pattern reads to the React compiler as declaring
 * a component during render, which it warns about. Nothing is actually being
 * created here — `resolveIcon` returns a component that already exists — so
 * this keeps the lookup honest and the rule satisfied.
 *
 * Always decorative: every icon on the legal pages sits beside text that
 * already says the same thing.
 */
export function NamedIcon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  return createElement(resolveIcon(name), {
    className,
    strokeWidth: 1.75,
    "aria-hidden": true,
  })
}
