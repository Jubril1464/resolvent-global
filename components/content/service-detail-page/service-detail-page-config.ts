export type ScopeItem = {
  title: string;
  description: string;
};

export type ServiceDetailPageData = {
  slug: string;
  scope: ScopeItem[];
  deliverables: string;
  outcomes: string;
  whoWeWorkWith: string;
};

export const SERVICE_DETAIL_PAGES: ServiceDetailPageData[] = [
  {
    slug: "operations",
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
];
