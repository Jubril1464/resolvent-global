/**
 * Seeds the training portfolio: the `training-courses` collection (8
 * offerings) and the `training-page` global (landing copy + the delivery
 * options shared by every offering).
 *
 * Run with: npm run seed:training
 *
 * Idempotent — skips any course slug that already exists, and skips the
 * global if it already has content, so it's safe to re-run without
 * clobbering a real admin edit.
 */
import { getPayload } from "payload"

import config from "../payload.config"
import { SHARED_DELIVERY_OPTIONS, TRAINING_COURSES_DATA } from "./training-courses-data"

const payload = await getPayload({ config })

const list = (values: string[]) => values.map((value) => ({ value }))

for (const course of TRAINING_COURSES_DATA) {
  const existing = await payload.find({
    collection: "training-courses",
    where: { slug: { equals: course.slug } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`Skipping "${course.slug}" — already exists.`)
    continue
  }

  await payload.create({
    collection: "training-courses",
    data: {
      slug: course.slug,
      courseNumber: course.courseNumber,
      title: course.title,
      category: course.category,
      duration: course.duration,
      moduleCount: course.moduleCount,
      summary: course.summary,
      keyAreas: list(course.keyAreas),
      about: list(course.about),
      learn: list(course.learn),
      curriculum: course.curriculum.map((module) => ({
        number: module.number,
        title: module.title,
        duration: module.duration,
        topics: list(module.topics),
      })),
      audience: list(course.audience),
      prerequisites: list(course.prerequisites),
      prereqNote: course.prereqNote,
      practicalIntro: course.practicalIntro,
      practicalItems: course.practicalItems,
      capstoneTitle: course.capstoneTitle,
      caseParagraphs: list(course.caseParagraphs),
      workflow: list(course.workflow),
      finalDeliverables: list(course.finalDeliverables),
      resourcesNote: course.resourcesNote,
      resources: list(course.resources),
      gainIntro: course.gainIntro,
      gains: list(course.gains),
      industries: list(course.industries),
      finalCtaTitle: course.finalCtaTitle,
      finalCtaDescription: course.finalCtaDescription,
    },
  })
  console.log(`Created "${course.slug}".`)
}

const trainingPage = await payload.findGlobal({ slug: "training-page" })
if (trainingPage.categories && trainingPage.categories.length > 0) {
  console.log("Skipping training-page — already seeded.")
} else {
  await payload.updateGlobal({
    slug: "training-page",
    data: {
      heroTitle: "Applied Training for Industry, Sustainability and Technology",
      heroDescription:
        "Practical, globally relevant programs designed to strengthen technical capability, improve operational performance and support better decision-making across industry and emerging technology.",
      positioning: list([
        "Resolvent Global training combines technical knowledge with practical application. Participants work with structured methodologies, applied exercises, realistic case studies and reusable tools designed to support workplace implementation.",
      ]),
      categories: [
        {
          category: "Short Course",
          label: "Short Courses",
          caption: "Focused learning for immediate practical application",
        },
        {
          category: "Applied Course",
          label: "Applied Courses",
          caption: "In-depth training for technical and professional capability",
        },
        {
          category: "Integrated Program",
          label: "Integrated Programs",
          caption:
            "Advanced, multidisciplinary programs for complex organisational challenges",
        },
      ],
      deliveryOptions: SHARED_DELIVERY_OPTIONS,
      corporateTitle: "Build Capability Around Your Organisation’s Priorities",
      corporateDescription:
        "Resolvent Global training can also be delivered to organisational cohorts through instructor-led virtual, classroom and blended formats. Where appropriate, examples, exercises and applied case activities can be aligned with the organisation’s operating environment and capability-development priorities.",
      finalCtaTitle: "Build Capability. Strengthen Performance. Apply Knowledge.",
      finalCtaDescription:
        "Explore practical training designed to help professionals and organisations address real technical, operational and sustainability challenges.",
    },
  })
  console.log("Seeded training-page.")
}

process.exit(0)
