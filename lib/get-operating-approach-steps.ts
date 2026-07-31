import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getOperatingApproachSteps = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "operating-approach-steps",
      sort: "step",
      limit: 100,
    })
    return result.docs
  },
  ["operating-approach-steps-all"],
  { tags: ["operating-approach-steps"] }
)
