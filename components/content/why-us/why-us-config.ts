import { Activity, ClipboardCheck, FlaskConical, Globe, type LucideIcon } from "lucide-react"

export type WhyUsPoint = {
  icon: LucideIcon
  title: string
  description: string
}

export const WHY_US_POINTS: WhyUsPoint[] = [
  {
    icon: FlaskConical,
    title: "Technical depth and quality",
    description:
      "Comprehensive review across process engineering, renewables, materials, catalysis, TEA/LCA and energy transition. Over 40 years of combined technical experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Operational excellence",
    description:
      "PMP-based governance, milestones, stakeholder alignment, SOPs, risk assessments and CAPEX/CI support.",
  },
  {
    icon: Activity,
    title: "Integrated diagnostics",
    description:
      "Connecting plant data, process modelling, energy systems, carbon accounting and commercial feasibility.",
  },
  {
    icon: Globe,
    title: "Global standard with indigenous relevance",
    description:
      "Solutions aligned with international best practice and adapted to local industrial, regulatory and operational realities.",
  },
]
