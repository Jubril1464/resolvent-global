import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getWhyUsPoints = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "why-us-points",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["why-us-points-all"],
  { tags: ["why-us-points"] }
)
