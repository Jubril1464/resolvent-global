import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

/**
 * Payload's Local API is an in-process call, not `fetch()`, so it isn't
 * automatically covered by Next's cache/tag system — wrapping it in
 * `unstable_cache` is what makes `revalidateTag("services")` (see the
 * Services collection's afterChange/afterDelete hooks) actually invalidate
 * these reads.
 */
export const getServices = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "services",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["services-all"],
  { tags: ["services"] }
)

export const getServiceBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "services",
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] ?? null
  },
  ["service-by-slug"],
  { tags: ["services"] }
)
