import type { TrainingCourse } from "@/payload-types"

export type TrainingCategory = TrainingCourse["category"]

/**
 * Per the content handover: "Course" for Short and Applied offerings,
 * "Program" for Integrated ones. Derived from `category` in one place so
 * the wording can never drift between the card, hero and CTAs.
 */
export function isProgram(category: TrainingCategory) {
  return category === "Integrated Program"
}

export function courseNoun(category: TrainingCategory) {
  return isProgram(category) ? "Program" : "Course"
}

/**
 * Restrained accent variations per category — drawn from the existing site
 * palette (brand green / navy / gold) rather than introducing unrelated
 * colours, as the handover requires.
 */
export const CATEGORY_ACCENT: Record<TrainingCategory, { badge: string; rule: string; text: string }> =
  {
    "Short Course": {
      badge: "bg-brand/10 text-brand ring-1 ring-brand/20",
      rule: "bg-brand",
      text: "text-brand",
    },
    "Applied Course": {
      badge: "bg-[#0C203A]/10 text-[#0C203A] ring-1 ring-[#0C203A]/20",
      rule: "bg-[#0C203A]",
      text: "text-[#0C203A]",
    },
    "Integrated Program": {
      badge: "bg-[#D9A441]/15 text-[#8A6420] ring-1 ring-[#D9A441]/40",
      rule: "bg-[#D9A441]",
      text: "text-[#8A6420]",
    },
  }

/** Landing-page cards show at most five key areas. */
export const MAX_CARD_KEY_AREAS = 5

/**
 * Training enquiries route to the contact form as general inquiries, with
 * the course carried in the query string so the form can show context.
 */
export function enquiryHref(title: string) {
  return `/contact?type=general&subject=${encodeURIComponent(title)}`
}

export const CORPORATE_TRAINING_HREF = "/contact?type=general&subject=Corporate%20Training"
