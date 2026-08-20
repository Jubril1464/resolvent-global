import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getProjects = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "projects",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["projects-all"],
  { tags: ["projects"] }
)

export const getProjectBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "projects",
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] ?? null
  },
  ["project-by-slug"],
  { tags: ["projects"] }
)
