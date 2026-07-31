import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getIndustries = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "industries",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["industries-all"],
  { tags: ["industries"] }
)
