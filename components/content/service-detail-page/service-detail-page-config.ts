export type ScopeItem = {
  title: string
  description: string
}

export type ServiceDetailPageData = {
  slug: string
  scope: ScopeItem[]
  deliverables: string[]
  outcomes: string[]
  whoWeWorkWith: string
}

export const SERVICE_DETAIL_PAGES: ServiceDetailPageData[] = [
  {
    slug: "operations",
    scope: [
      {
        title: "Process performance and optimisation",
        description:
          "Process audits, operating-envelope reviews, bottleneck analysis, root-cause investigation, mass and energy balance checks, parameter optimisation, process modelling support and practical improvement recommendations.",
      },
      {
        title: "Utilities and resource efficiency",
        description:
          "Assessment of energy, steam, compressed air, cooling, pumping, water and other utility systems to identify avoidable losses, improve resource productivity and reduce operating cost.",
      },
      {
        title: "Water and wastewater systems",
        description:
          "Treatment-process selection, performance review, troubleshooting, optimisation, reuse opportunities, pilot-study planning, advanced treatment assessment and remediation concepts.",
      },
      {
        title: "Environmental performance and compliance gaps",
        description:
          "Structured reviews of waste, wastewater, emissions, resource use and operating practices to support compliance-aware environmental management.",
      },
      {
        title: "Operational reliability and readiness",
        description:
          "SOP development and review, commissioning-readiness support, start-up and shutdown planning inputs, operating documentation, risk-review inputs and improvement action plans.",
      },
      {
        title: "Project and PMO support",
        description:
          "Technical scoping, work-package definition, schedule and deliverable tracking, engineering coordination, vendor-interface support, progress reporting and practical project-governance support.",
      },
      {
        title: "Applied research and technology evaluation",
        description:
          "Pilot design, test-plan development, data interpretation, technology comparison, scale-up considerations and translation of research or emerging technologies into industrially relevant recommendations.",
      },
      {
        title: "Digital operations support",
        description:
          "Operational dashboards, KPI frameworks, statistical analysis, trend identification, predictive insights and management-ready reporting using tools such as Excel, Python, MATLAB or Power BI where appropriate.",
      },
    ],
    deliverables: [
      "Operational or process performance audit report",
      "Process-flow, mass-balance or energy-balance review",
      "Root-cause analysis and prioritised improvement plan",
      "Water/wastewater process assessment or pilot plan",
      "Environmental gap assessment and action register",
      "SOPs, operating procedures and technical work instructions",
      "Commissioning-readiness or project-support documentation",
      "KPI dashboard, trend analysis or decision-support report",
    ],
    outcomes: [
      "Improved throughput, stability and operating reliability",
      "Reduced energy, water, material and utility intensity",
      "Lower waste generation and avoidable operating losses",
      "Clearer operating discipline and stronger documentation",
      "Better-informed capital and maintenance priorities",
      "Improved environmental performance and compliance readiness",
      "More structured project execution and technical governance",
      "Actionable recommendations grounded in engineering data",
    ],
    whoWeWorkWith:
      "Oil and gas, energy, mining, minerals, manufacturing, FMCG, water utilities and industrial facilities. Plant managers, operations teams, project developers, engineering teams, environmental managers and asset owners. Rapid diagnostic reviews, defined optimisation projects, pilot and technology assessments, commissioning support or ongoing technical advisory retainers.",
  },
  {
    slug: "carbon-energy-investment-advisory",
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
    deliverables: [
      "Energy and carbon opportunity assessment",
      "GHG source map, inventory workbook or reporting framework",
      "Decarbonisation opportunity register and roadmap",
      "MRV framework or carbon-readiness gap assessment",
      "TEA model, assumptions register and sensitivity analysis",
      "LCA scope, inventory plan or environmental hotspot review",
      "CCUS or utilisation concept-screening report",
      "Renewable energy and battery pre-feasibility study",
      "Independent technical due-diligence memorandum",
      "Investment, grant or tender technical documentation",
    ],
    outcomes: [
      "More defensible energy and carbon decisions",
      "Clear visibility of technical, commercial and implementation risks",
      "Prioritised opportunities based on impact and feasibility",
      "Stronger data foundations for reporting and MRV",
      "Improved investor confidence and decision quality",
      "Better comparison of technology and project alternatives",
      "Reduced risk of premature or poorly scoped investment",
      "Practical pathways from concept to feasibility and execution",
    ],
    whoWeWorkWith:
      "Industrial companies, project developers, clean-tech ventures, asset owners, public agencies, development organisations and diaspora investors. Energy managers, sustainability teams, founders, investment committees, lenders, grant applicants and project sponsors. Opportunity screening, pre-feasibility studies, decision support, technical due diligence, carbon-readiness projects or advisory retainers.",
  },
  {
    slug: "capability-digital-technical-products",
    scope: [
      {
        title: "Industrial and professional training",
        description:
          "Customised workshops for engineers, operators, managers, SMEs, project teams and public-sector personnel covering process engineering, optimisation, water and wastewater, energy, carbon, sustainability, technical reporting and data analysis.",
      },
      {
        title: "Operator and team capability development",
        description:
          "Structured on-the-job training, competency assessment, process-understanding coaching and troubleshooting skill-building to strengthen operator and technical-team capability over time.",
      },
      {
        title: "SOPs and operating documentation",
        description:
          "Development or improvement of standard operating procedures, work instructions, checklists, operating guides, handover packs and controlled technical templates.",
      },
      {
        title: "Risk, HSE and WHS support products",
        description:
          "Development of risk registers, HSE management plans, WHS compliance checklists, incident-reporting templates and safety-critical operating procedures to support a strong safety culture.",
      },
      {
        title: "Digital dashboards and operational analytics",
        description:
          "KPI architecture, data-cleaning frameworks, visual dashboards, trend analysis, performance scorecards, management reports and simple analytical tools for operational decision-making.",
      },
      {
        title: "Technical due diligence and investor support",
        description:
          "Independent technical review of process claims, technology readiness, operating assumptions and project risks to support investment decisions, partner discussions and stakeholder confidence.",
      },
      {
        title: "Grant, tender and proposal development",
        description:
          "Technical writing and evidence structuring for grants, expressions of interest, tenders, capability statements, project proposals, concept notes and partnership submissions.",
      },
      {
        title: "Research and innovation documentation",
        description:
          "Structured documentation of research methodology, experimental protocols, pilot findings and innovation roadmaps to support internal knowledge retention and external reporting.",
      },
      {
        title: "Institutional and startup capability systems",
        description:
          "Practical frameworks for technical governance, project documentation, service delivery, quality records, data management and repeatable execution as organisations grow.",
      },
      {
        title: "Investment and project documentation",
        description:
          "Technical inputs for business cases, concept notes, funding applications, capability statements and project-governance documentation supporting institutional growth.",
      },
    ],
    deliverables: [
      "Custom workshop, training deck and participant materials",
      "Competency-support workbook or operator guide",
      "SOP suite, checklists and controlled templates",
      "Risk-assessment, WHS or HSE documentation pack",
      "Operational dashboard or KPI reporting template",
      "Technical due-diligence or technology-readiness report",
      "Grant, tender, proposal or capability-statement package",
      "Pilot protocol, research report or innovation roadmap",
      "Technical governance and documentation framework",
    ],
    outcomes: [
      "Stronger internal technical competence",
      "More consistent and repeatable operating practices",
      "Improved knowledge transfer and reduced dependency on individuals",
      "Higher-quality technical and investment documentation",
      "Better visibility of operational performance",
      "Improved readiness for audits, projects and growth",
      "More persuasive grant, tender and partnership submissions",
      "Scalable systems for startups, institutions and technical teams",
    ],
    whoWeWorkWith:
      "Industrial teams, SMEs, startups, universities, research institutions, public agencies, NGOs, development partners and investor groups. Organisations requiring practical documentation, data tools, staff capability, proposal support or independent technical review. One-off deliverables, customised training, documentation programmes, startup support packages or ongoing capability-building retainers.",
  },
]
