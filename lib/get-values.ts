import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getValues = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "values",
      sort: "order",
      limit: 100,
    })
    return result.docs
  },
  ["values-all"],
  { tags: ["values"] }
)
