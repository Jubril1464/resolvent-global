import { ICON_MAP } from "./icon-map"

/**
 * Payload `select` field options for any icon field, sitewide. One shared
 * source (derived from ICON_MAP's keys) so every collection's icon dropdown
 * offers the exact same, complete set — add an icon once in icon-map.ts and
 * every collection picks it up.
 */
export const ICON_SELECT_OPTIONS = Object.keys(ICON_MAP)
  .sort()
  .map((name) => ({ label: name, value: name }))
