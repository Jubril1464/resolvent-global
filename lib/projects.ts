import type { Project } from "@/payload-types"

export type ProjectCategory = Project["category"]

/** Filter order as specified in the content pack. */
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Water & Effluent",
  "Energy & Process",
  "Clean-Tech",
  "Advisory",
  "Ongoing",
]

export const ALL_PROJECTS_FILTER = "All Projects"

/**
 * Ongoing work is presented under the content pack's confidentiality rule:
 * no approach pathway, deliverables or target sectors, since those can
 * disclose the IP pathway.
 */
export function isOngoing(category: ProjectCategory) {
  return category === "Ongoing"
}

/**
 * Restrained accent per category, drawn from the existing site palette
 * (brand green / navy / gold) rather than a new colour per category.
 */
export const CATEGORY_ACCENT: Record<
  ProjectCategory,
  { badge: string; rule: string }
> = {
  "Water & Effluent": {
    badge: "bg-brand/10 text-brand ring-1 ring-brand/20",
    rule: "bg-brand",
  },
  "Energy & Process": {
    badge: "bg-[#0C203A]/10 text-[#0C203A] ring-1 ring-[#0C203A]/20",
    rule: "bg-[#0C203A]",
  },
  "Clean-Tech": {
    badge: "bg-[#1B3A5C]/10 text-[#1B3A5C] ring-1 ring-[#1B3A5C]/20",
    rule: "bg-[#1B3A5C]",
  },
  Advisory: {
    badge: "bg-[#8A6420]/10 text-[#8A6420] ring-1 ring-[#8A6420]/20",
    rule: "bg-[#8A6420]",
  },
  Ongoing: {
    badge: "bg-[#D9A441]/15 text-[#8A6420] ring-1 ring-[#D9A441]/40",
    rule: "bg-[#D9A441]",
  },
}

/**
 * Project enquiries route to the contact form as general inquiries, with
 * the project carried in the query string for context.
 */
export function projectEnquiryHref(title: string) {
  return `/contact?type=general&subject=${encodeURIComponent(title)}`
}
