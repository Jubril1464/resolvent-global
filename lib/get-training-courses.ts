import { unstable_cache } from "next/cache"
import { getPayload } from "payload"

import config from "@/payload.config"

export const getTrainingCourses = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "training-courses",
      sort: "courseNumber",
      limit: 100,
    })
    return result.docs
  },
  ["training-courses-all"],
  { tags: ["training-courses"] }
)

export const getTrainingCourseBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "training-courses",
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] ?? null
  },
  ["training-course-by-slug"],
  { tags: ["training-courses"] }
)
