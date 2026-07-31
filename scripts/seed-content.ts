/**
 * One-time seed for the 6 remaining content collections, migrating their
 * static config files (industries-config.ts, industry-sectors-config.ts,
 * why-us-config.ts, values-config.ts, operating-approach-config.ts,
 * credentials-config.ts) into Payload.
 *
 * Run with: npm run seed:content
 *
 * Idempotent — skips any document that already exists, so it's safe to re-run.
 */
import { getPayload } from "payload"

import config from "../payload.config"
import type { IconName } from "../lib/icon-map"

const payload = await getPayload({ config })

// ---------------------------------------------------------------------------
// industries
// ---------------------------------------------------------------------------
const INDUSTRIES_DATA: {
  tabId: string
  order: number
  icon: IconName
  label: string
  description: string
}[] = [
  {
    tabId: "energy-oil-gas",
    order: 1,
    icon: "Flame",
    label: "Energy, Oil & Gas",
    description:
      "Process engineering and optimisation support for energy, oil and gas operations, including process and utility performance reviews, energy-efficiency studies, carbon and emissions-reduction opportunity screening, water and wastewater solutions, technical documentation, feasibility inputs, technology evaluation, commissioning readiness and HSE-conscious project support.",
  },
  {
    tabId: "water-wastewater",
    order: 2,
    icon: "Droplet",
    label: "Water and Wastewater",
    description:
      "Technical support for water and wastewater utilities and industrial users, including treatment-process audits, effluent and discharge-compliance reviews, water-reuse and recovery feasibility, energy-efficiency assessments for pumping and aeration systems, technology selection, and commissioning and operational-readiness support.",
  },
  {
    tabId: "manufacturing-fmcg",
    order: 3,
    icon: "Factory",
    label: "Manufacturing and FMCG",
    description:
      "Process and utility optimisation for manufacturing and fast-moving consumer goods operations, including production-line efficiency reviews, energy and utility audits, waste-reduction and resource-recovery opportunities, quality and compliance gap assessments, and technical support for plant upgrades and capacity expansion.",
  },
  {
    tabId: "mining-minerals-resources",
    order: 4,
    icon: "Mountain",
    label: "Mining, Minerals and Resources",
    description:
      "Engineering and advisory support across the minerals value chain, including process-plant performance reviews, energy and water-use optimisation, tailings and waste-management advisory, environmental and regulatory compliance support, and feasibility and technology evaluation for processing and beneficiation projects.",
  },
  {
    tabId: "public-agencies",
    order: 5,
    icon: "Landmark",
    label: "Public Agencies, NGOs and Educational Institutions",
    description:
      "Structured technical input for public-interest, development and institutional initiatives across water, sanitation, energy, environment and sustainability. Support includes feasibility studies, programme development, technical reviews, research, training and monitoring frameworks.",
  },
  {
    tabId: "research-innovation-technology",
    order: 6,
    icon: "Microscope",
    label: "Research, Innovation and Technology",
    description:
      "Applied research and technology-development support, including technology-readiness assessment, process and product scale-up support, pilot-plant design input, intellectual-property and commercialisation advisory, and technical due diligence for early-stage energy and industrial innovations.",
  },
  {
    tabId: "industrial-infastructure",
    order: 7,
    icon: "HardHat",
    label: "Industrial & Infrastructure Assessment",
    description:
      "Technical assessment of industrial assets and infrastructure across process, energy, carbon, water and environmental performance. Support includes identifying operational risks, performance gaps, compliance needs and opportunities for optimisation, rehabilitation and sustainable investment.",
  },
  {
    tabId: "investors-startup",
    order: 8,
    icon: "HardHat",
    label: "Investors and Startups",
    description:
      "Independent technical and project-development support for investors, founders and startups pursuing opportunities in energy, industrial processing, water, environment, carbon and sustainability. Support includes opportunity screening, feasibility studies, technology benchmarking, risk assessment, pilot planning and local implementation guidance.",
  },
]

// ---------------------------------------------------------------------------
// industry-sectors
// ---------------------------------------------------------------------------
const INDUSTRY_SECTORS_DATA: {
  order: number
  icon: IconName
  title: string
  description: string
  capabilities: string[]
}[] = [
  {
    order: 1,
    icon: "Zap",
    title: "Energy, Oil & Gas",
    description:
      "Engineering support to improve the efficiency, reliability and overall performance of energy, oil and gas operations through targeted process and utility-system reviews.",
    capabilities: [
      "Process performance reviews",
      "Energy-efficiency studies",
      "Emissions screening",
      "Feasibility inputs",
      "Technology evaluation",
      "Commissioning support",
    ],
  },
  {
    order: 2,
    icon: "Mountain",
    title: "Mining, Minerals and Resources",
    description:
      "Strategic technical support for mining and resource operations, enabling process improvement, responsible resource management, greater efficiency and stronger environmental performance.",
    capabilities: [
      "Process improvement",
      "Process & equipment design",
      "Remediation concepts",
      "Feasibility studies",
      "Carbon-opportunity screening",
    ],
  },
  {
    order: 3,
    icon: "ChartColumn",
    title: "Manufacturing and FMCG",
    description:
      "Process and utility optimization to maximise output, strengthen operational stability, ensure consistent product quality and reduce energy, water and material use.",
    capabilities: [
      "Bottleneck analysis",
      "System reviews",
      "SOP development",
      "Data-driven assessment",
      "Carbon-reduction screening",
    ],
  },
  {
    order: 4,
    icon: "Droplets",
    title: "Water and Wastewater",
    description:
      "Technical support for industrial, municipal and decentralised water and wastewater systems, from needs assessment and treatment-process selection to performance review, pilot-study design and optimisation.",
    capabilities: [
      "Treatment-process selection",
      "Pilot-study design",
      "Advanced treatment concepts",
      "Water-reuse opportunities",
      "Operator training",
    ],
  },
  {
    order: 5,
    icon: "Landmark",
    title: "Public Agencies, NGOs and Educational Institutions",
    description:
      "Structured technical input for public-interest, development, and institutional projects involving water, sanitation, environment, energy, sustainability, and industrial capability building.",
    capabilities: [
      "Feasibility studies",
      "Programme concept development",
      "Stakeholder documentation",
      "Grant/donor proposals",
      "Technical monitoring",
      "Technical reviews",
      "Research & education initiative",
      "Training",
    ],
  },
  {
    order: 6,
    icon: "FlaskConical",
    title: "Research, Innovation and Technology",
    description:
      "Support that translates research, innovation and emerging technologies into commercial solutions implementable in industrial environments.",
    capabilities: [
      "Applied-research translation",
      "Pilot design",
      "Technology validation",
      "Scale-up planning",
      "Techno-economic analysis",
      "Life cycle analysis",
      "Grant support",
    ],
  },
  {
    order: 7,
    icon: "Globe",
    title: "Diaspora Investors and Startups",
    description:
      "Technical and project support for investors, founders, and early-stage ventures assessing opportunities in energy, industrial processing, water, environment, carbon, and sustainability.",
    capabilities: [
      "Opportunity screening",
      "Technology due diligence",
      "Feasibility studies",
      "Pilot planning",
      "Investment support documentation",
    ],
  },
]

// ---------------------------------------------------------------------------
// why-us-points
// ---------------------------------------------------------------------------
const WHY_US_POINTS_DATA: {
  order: number
  icon: IconName
  title: string
  description: string
}[] = [
  {
    order: 1,
    icon: "FlaskConical",
    title: "Technical depth and quality",
    description:
      "Comprehensive review across process engineering, renewables, materials, catalysis, TEA/LCA and energy transition. Over 40 years of combined technical experience.",
  },
  {
    order: 2,
    icon: "ClipboardCheck",
    title: "Operational excellence",
    description:
      "PMP-based governance, milestones, stakeholder alignment, SOPs, risk assessments and CAPEX/CI support.",
  },
  {
    order: 3,
    icon: "Activity",
    title: "Integrated diagnostics",
    description:
      "Connecting plant data, process modelling, energy systems, carbon accounting and commercial feasibility.",
  },
  {
    order: 4,
    icon: "Globe",
    title: "Global standard with indigenous relevance",
    description:
      "Solutions aligned with international best practice and adapted to local industrial, regulatory and operational realities.",
  },
]

// ---------------------------------------------------------------------------
// values
// ---------------------------------------------------------------------------
const VALUES_DATA: {
  order: number
  icon: IconName
  title: string
  description: string
}[] = [
  {
    order: 1,
    icon: "ShieldCheck",
    title: "Integrity",
    description:
      "We operate with transparency, honesty and professional responsibility in all client engagements.",
  },
  {
    order: 2,
    icon: "Settings2",
    title: "Technical Excellence",
    description:
      "We bring rigorous engineering thinking, sound methodology and evidence-based recommendations to every project.",
  },
  {
    order: 3,
    icon: "Shield",
    title: "Safety & Responsibility",
    description:
      "HSE-conscious practice is embedded in how we approach process analysis, design and advisory work.",
  },
  {
    order: 4,
    icon: "Leaf",
    title: "Sustainability",
    description:
      "We actively consider environmental performance, carbon awareness and resource efficiency in all our technical solutions.",
  },
  {
    order: 5,
    icon: "Handshake",
    title: "Client Focus",
    description:
      "We listen carefully, communicate clearly and tailor our support to the specific needs and context of each client.",
  },
  {
    order: 6,
    icon: "Wrench",
    title: "Practical Execution",
    description: "We prioritise actionable and implementable recommendation",
  },
]

// ---------------------------------------------------------------------------
// operating-approach-steps
// ---------------------------------------------------------------------------
const OPERATING_APPROACH_STEPS_DATA: {
  step: number
  title: string
  description: string
}[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "Scoping call, data request, site/process context and success criteria.",
  },
  {
    step: 2,
    title: "Diagnose",
    description:
      "Technical review, operating data analysis, root-cause mapping and risk screening",
  },
  {
    step: 3,
    title: "Model",
    description:
      "Simulation, TEA/LCA, feasibility screening, sensitivity and improvement options.",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "Report, roadmap, SOPs, dashboards, business case and implementation plan",
  },
  {
    step: 5,
    title: "Support",
    description:
      "Retainer, training, vendor engagement, PMO support and continuous improvement.",
  },
]

// ---------------------------------------------------------------------------
// credentials
// ---------------------------------------------------------------------------
const CREDENTIALS_DATA: {
  order: number
  icon: IconName
  title: string
  subtitle: string
}[] = [
  {
    order: 1,
    icon: "FileText",
    title: "CAC-Registered Company",
    subtitle: "Corporate Affairs Commission, Nigeria",
  },
  {
    order: 2,
    icon: "FlaskConical",
    title: "Chemical & Process Engineering",
    subtitle: "Core technical foundation",
  },
  {
    order: 3,
    icon: "Cpu",
    title: "Data-Driven Approach",
    subtitle: "Technical publications & research background",
  },
  {
    order: 4,
    icon: "Shield",
    title: "HSE-Conscious Practice",
    subtitle: "Safety embedded in all engagements",
  },
]

async function seedByField(
  collection:
    | "industries"
    | "industry-sectors"
    | "why-us-points"
    | "values"
    | "operating-approach-steps"
    | "credentials",
  field: string,
  docs: Record<string, unknown>[]
) {
  for (const doc of docs) {
    const existing = await payload.find({
      collection,
      where: { [field]: { equals: doc[field] } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`Skipping ${collection}/${doc[field]} — already exists.`)
      continue
    }

    // The union of collection slugs makes per-collection data typing
    // impractical for a generic seed helper — this is a one-time migration
    // script, not app runtime code.
    await payload.create({ collection, data: doc } as Parameters<typeof payload.create>[0])
    console.log(`Created ${collection}/${doc[field]}.`)
  }
}

await seedByField("industries", "tabId", INDUSTRIES_DATA)
await seedByField(
  "industry-sectors",
  "title",
  INDUSTRY_SECTORS_DATA.map((sector) => ({
    ...sector,
    capabilities: sector.capabilities.map((value) => ({ value })),
  }))
)
await seedByField("why-us-points", "title", WHY_US_POINTS_DATA)
await seedByField("values", "title", VALUES_DATA)
await seedByField(
  "operating-approach-steps",
  "step",
  OPERATING_APPROACH_STEPS_DATA
)
await seedByField("credentials", "title", CREDENTIALS_DATA)

process.exit(0)
