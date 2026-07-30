import { revalidateTag } from "next/cache"

/**
 * `revalidateTag` requires an active Next.js request context. Standalone
 * `payload run` scripts (the seed scripts) create/update documents outside
 * that context, so swallow the failure there rather than crashing the
 * script. `{ expire: 0 }` gives immediate invalidation rather than the
 * "max" stale-while-revalidate profile — an admin editor saving a change
 * expects the very next page load to reflect it, not one visit later.
 */
export function makeRevalidateHook(tag: string) {
  return function revalidate() {
    try {
      revalidateTag(tag, { expire: 0 })
    } catch {
      // Not running inside a Next.js request context — nothing to revalidate.
    }
  }
}
