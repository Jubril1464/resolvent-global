/**
 * One-time seed: migrates the 3 static service config files
 * (services-config.ts, service-detail-config.ts,
 * service-detail-page-config.ts) into the `services` Payload collection.
 *
 * Run with: npm run seed:services
 *
 * Idempotent — skips any slug that already exists, so it's safe to re-run.
 *
 * Note: services-config.ts's SERVICES[].href for 2 of the 3 services
 * (/services/carbon-energy-investment, /services/capability-products)
 * didn't match the real slugs used by service-detail-config.ts and
 * app/services/[slug]/page.tsx — those "Learn more" links have been 404ing.
 * This seed intentionally drops `href` entirely and uses each service's
 * correct `slug` as the single source of truth; the frontend now computes
 * the href from `slug` instead of storing a second, driftable value.
 */
import { getPayload } from "payload"

import config from "../payload.config"
import type { IconName } from "../lib/icon-map"

type SeedService = {
  slug: string
  order: number
  icon: IconName
  title: string
  bullets: string[]
  accentColor: string
  tagline: string
  fullTitle: string
  intro: string
  checklist: string[]
  scope: { title: string; description: string }[]
  deliverables: string
  outcomes: string
  whoWeWorkWith: string
}

const SERVICES_DATA: SeedService[] = [
  {
    slug: "operations",
    order: 1,
    icon: "Factory",
    title: "Operations",
    bullets: [
      "Process optimization audits",
      "Energy-efficiency / utility audits",
      "Water & wastewater treatment advisory",
      "Environmental compliance gap assessment",
      "Project Management / PMO support",
      "Research and development",
    ],
    accentColor: "#0B7A53",
    tagline: "Operate better",
    fullTitle: "Operations, Process & Environmental Performance",
    intro:
      "We help industrial and infrastructure clients improve the way their operations perform by combining process engineering, utilities and energy analysis, water and wastewater expertise, environmental thinking, project support and data-driven decision-making.",
    checklist: [
      "Process optimization audits",
      "Energy-efficiency / utility audits",
      "Water & wastewater treatment advisory",
      "Environmental compliance gap assessment",
      "Project Management / PMO support",
      "Research and development",
    ],
    scope: [
      {
        title: "Process performance and optimisation",
        description:
          "Process audits, operating-envelop reviews, bottleneck analysis, parameter optimization, process modelling support, and improvement recommendations.",
      },
      {
        title: "Utilities and resource efficiency",
        description:
          "Assessment of energy systems and infrastructures to identify losses, drive resource efficiency and cost-effective operations.",
      },
      {
        title: "Water and wastewater systems",
        description:
          "Treatment-process selection, performance review, troubleshooting, optimisation, reuse opportunities, pilot-study planning, advanced treatment assessment and remediation concepts.",
      },
      {
        title: "Environmental performance and compliance review",
        description:
          "Structured reviews of waste, wastewater, emissions, resource use and operating practices to support compliance-aware environmental management.",
      },
      {
        title: "Operational reliability and resilience",
        description:
          "SOP development and review, commissioning support, start-up and shutdown planning, risk-review and improvement protocols.",
      },
      {
        title: "Project and PMO support",
        description:
          "Technical scoping, work-package definition, schedule and deliverable tracking, engineering coordination, vendor-interface and project support.",
      },
      {
        title: "Applied research and technology evaluation",
        description:
          "Pilot design, test-plan development, technology benchmarking, scale-up considerations, and translation of research/emerging technology into industrial recommendations.",
      },
      {
        title: "Digital operations support",
        description:
          "Operational dashboards, KPI frameworks, statistical analysis, predictive insights and strategic-support reporting.",
      },
    ],
    deliverables:
      "Evidence-based package combining operational assessments, performance analysis, improvement planning, technical procedures and decision-support documentation",
    outcomes:
      "Better performance, reliability and efficiency, with reduced waste, stronger compliance and clearer engineering-based priorities.",
    whoWeWorkWith:
      "Oil and gas, energy, mining, minerals, manufacturing, FMCG, water utilities and industrial facilities. Plant managers, operations teams, project developers, engineering teams, environmental managers and asset owners. Rapid diagnostic reviews, defined optimisation projects, pilot and technology assessments, commissioning support or ongoing technical advisory retainers.",
  },
  {
    slug: "carbon-energy-investment-advisory",
    order: 2,
    icon: "Gauge",
    title: "Carbon, energy & investment",
    bullets: [
      "TEA/LCA for clean-tech projects",
      "Carbon footprint & GHG inventory support",
      "Carbon credit readiness & MRV design",
      "CCUS / utilization concept scoping",
      "Renewable energy + battery feasibility",
    ],
    accentColor: "#1B3A5C",
    tagline: "Invest smarter",
    fullTitle: "Carbon, Energy & Investment Advisory",
    intro:
      "We support organisations, project developers and investors in making technically credible energy, carbon and clean-technology decisions. Our work connects engineering performance with commercial, environmental and implementation considerations.",
    checklist: [
      "Energy efficiency assessments",
      "Carbon opportunity screening",
      "Emissions reduction concept development",
      "Decarbonisation roadmap support",
      "Carbon reporting preparation",
      "Process energy flow review",
      "Sustainability-oriented advisory",
      "Resource efficiency analysis",
    ],
    scope: [
      {
        title: "Energy efficiency and decarbonisation reviews",
        description:
          "Evaluation of process energy flows, energy intensity, utility consumption and emissions-reduction opportunities, followed by prioritised technical recommendations and implementation pathways.",
      },
      {
        title: "Carbon footprint and GHG inventory support",
        description:
          "Development support for organisational, facility or project-level emissions inventories, source mapping, data-quality review, boundary definition and management-ready reporting.",
      },
      {
        title: "Carbon opportunity screening and roadmaps",
        description:
          "Identification and preliminary assessment of reduction, avoidance, substitution, efficiency and removal opportunities, including sequencing of near-, medium- and longer-term actions.",
      },
      {
        title: "MRV and carbon-credit readiness",
        description:
          "Support for measurement, reporting and verification frameworks, data architecture, baseline definition, evidence requirements, monitoring plans and early-stage readiness for credible carbon-market participation.",
      },
      {
        title: "Techno-economic assessment (TEA)",
        description:
          "Structured assessment of technical configuration, capital and operating assumptions, production economics, sensitivities, risks and decision criteria for clean-tech, industrial and environmental projects.",
      },
      {
        title: "Life-cycle assessment (LCA) support",
        description:
          "Goal and scope definition, system-boundary development, inventory-data planning, hotspot analysis and interpretation support for environmental performance comparisons.",
      },
      {
        title: "CCUS and carbon-utilisation concept scoping",
        description:
          "Early-stage evaluation of capture sources, separation or utilisation pathways, integration considerations, infrastructure needs, technology options, constraints and next-stage study requirements.",
      },
      {
        title: "Renewable energy and battery feasibility",
        description:
          "Pre-feasibility and options assessment for solar, storage, hybrid systems and industrial energy applications, including load context, technology fit, operating logic, risks and implementation considerations.",
      },
      {
        title: "Technical due diligence for investors",
        description:
          "Independent review of technical claims, process maturity, scale-up assumptions, technology readiness, project risks, operating requirements, vendor information and evidence supporting investment decisions.",
      },
      {
        title: "Investment and project documentation",
        description:
          "Technical inputs for business cases, concept notes, investor materials, grant submissions, proposals, tender responses and decision-gate documentation.",
      },
    ],
    deliverables:
      "A tailored package of energy, carbon and decarbonisation assessments, supported by technical modelling, feasibility studies, due diligence and investment-focused documentation.",
    outcomes:
      "Evidence-based decisions, stronger reporting foundations, improved investor confidence and practical pathways for prioritising and advancing viable projects.",
    whoWeWorkWith:
      "Industrial companies, project developers, clean-tech ventures, asset owners, public agencies, development organisations and diaspora investors. Energy managers, sustainability teams, founders, investment committees, lenders, grant applicants and project sponsors. Opportunity screening, pre-feasibility studies, decision support, technical due diligence, carbon-readiness projects or advisory retainers.",
  },
  {
    slug: "capability-digital-technical-products",
    order: 3,
    icon: "Dna",
    title: "Capability products",
    bullets: [
      "Industrial training workshops",
      "Technical due diligence for investors",
      "Grant/tender/proposal writing",
      "SOPs, risk assessments & WHS systems",
      "Digital dashboards / data analytics for operations",
    ],
    accentColor: "#0C203A",
    tagline: "Build capability",
    fullTitle: "Capability, Digital & Technical Products",
    intro:
      "We help organisations build the systems, skills, documentation and analytical tools needed to sustain performance and execute technical projects with greater confidence.",
    checklist: [
      "Water/wastewater treatment process selection",
      "Treatment performance review",
      "Adsorption & remediation concepts",
      "Pilot-study design & planning",
      "Advanced treatment technology assessment",
      "Environmental performance improvement",
      "Process optimisation for treatment systems",
      "Technical feasibility support",
    ],
    scope: [
      {
        title: "Industrial and professional training",
        description:
          "Customised workshops for engineers, operators, managers, SMEs, project teams and public-sector personnel covering process engineering, optimisation, water and wastewater, energy, carbon, and sustainability.",
      },
      {
        title: "Operator and team capability development",
        description:
          "Development of organisational, facility and project-level emissions inventories, supported by source mapping, boundary definition, data-quality assurance, and decision-ready management reporting.",
      },
      {
        title: "SOPs and operating documentation",
        description:
          "Development and improvement of standard operating procedures, work instructions, checklists, operating guides, handover packs and technical templates.",
      },
      {
        title: "Risk, HSE and WHS support",
        description:
          "Development of risk registers, HSE management plans, WHS compliance checklists, incident-reporting templates and safety-critical operating procedures to support a strong safety culture.",
      },
      {
        title: "Digital dashboards and operational analytics",
        description:
          "KPI architecture, visual dashboards, trend analysis, performance scorecards, management and analytical tools.",
      },
      {
        title: "Technical review for investor",
        description:
          "Project definition, system development, inventory planning, hotspot analysis and performance benchmark.",
      },
      {
        title: "Grant, tender and proposal development",
        description:
          "Technical writing and evidence structuring for grants, tenders, capability statements, concept notes and project proposals.",
      },
      {
        title: "Research and development",
        description:
          "Feasibility assessment for energy systems including load context, technology fit, operating logic, risks and implementation considerations.",
      },
      {
        title: "Institutional and startup capability systems",
        description:
          "Frameworks for technical governance, project documentation, service delivery, quality records, and data management.",
      },
    ],
    deliverables:
      "Tailored, practical tools, documentation and implementation support aligned with your operational and project needs.",
    outcomes:
      "Stronger internal capability, more consistent performance, clearer decision-making and scalable systems for sustainable growth.",
    whoWeWorkWith:
      "Industrial teams, SMEs, startups, universities, research institutions, public agencies, NGOs, development partners and investor groups. Organisations requiring practical documentation, data tools, staff capability, proposal support or independent technical review. One-off deliverables, customised training, documentation programmes, startup support packages or ongoing capability-building retainers.",
  },
]

// Top-level await, deliberately not wrapped in an async function called
// fire-and-forget: `payload run`'s plain "run" subcommand does `await
// import(scriptPath)`, and it only actually waits for this script's work
// if that work is part of the module's own top-level await chain. Wrapping
// this in `async function run() { ... } run().catch(...)` would let
// `import()` resolve the instant `run()` is *called* (not when it
// *finishes*), so the CLI process exits before any of this runs.
const payload = await getPayload({ config })

for (const service of SERVICES_DATA) {
  const existing = await payload.find({
    collection: "services",
    where: { slug: { equals: service.slug } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`Skipping "${service.slug}" — already exists.`)
    continue
  }

  await payload.create({
    collection: "services",
    data: {
      ...service,
      bullets: service.bullets.map((value) => ({ value })),
      checklist: service.checklist.map((value) => ({ value })),
    },
  })
  console.log(`Created "${service.slug}".`)
}

process.exit(0)
