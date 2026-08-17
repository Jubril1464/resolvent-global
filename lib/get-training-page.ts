import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getTrainingPage = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    return payload.findGlobal({ slug: "training-page" })
  },
  ["training-page"],
  { tags: ["training-page"] }
)
