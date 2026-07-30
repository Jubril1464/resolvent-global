import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getIndustrySectors = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "industry-sectors",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["industry-sectors-all"],
  { tags: ["industry-sectors"] }
)
