import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getProprietaryTechnologies = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "proprietary-technologies",
      sort: "order",
      limit: 100,
      depth: 1,
    })
    return result.docs
  },
  ["proprietary-technologies-all"],
  { tags: ["proprietary-technologies"] }
)

export const getProprietaryTechnologiesPage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.findGlobal({ slug: "proprietary-technologies-page" })
  },
  ["proprietary-technologies-page"],
  { tags: ["proprietary-technologies-page"] }
)
