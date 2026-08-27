/**
 * Project portfolio content, transcribed from
 * public/Resolvent_Global_Project_Portfolio_Web_Developer_Master.docx
 * (the authoritative content pack).
 *
 * GENERATED from that document — if the .docx is revised, re-derive this
 * file rather than hand-editing, so the two can't silently drift.
 *
 * Deviations from the source document, applied deliberately (keep these when
 * re-deriving):
 *   - catalyst-lifecycle-advisory (P09): category changed Clean-Tech ->
 *     Advisory. The document files it under Clean-Tech, but it is advisory
 *     work and is now presented as such on the site.
 *
 * Note on Ongoing projects (O01-O03): per the document's confidentiality
 * rule they deliberately carry NO approach / pathway / deliverables /
 * target-sector content, and use "Development focus" + "Applications"
 * instead. Those fields are empty here by design, not by omission.
 */

export type ProjectSeed = {
  slug: string
  projectId: string
  order: number
  category: "Water & Effluent" | "Energy & Process" | "Clean-Tech" | "Advisory" | "Ongoing"
  title: string
  caption: string
  statusBadge: string
  description: string
  primaryCta: string
  detailCta: string
  challenge: string
  approach: string
  pathway: { stage: number; step: string; purpose: string }[]
  deliverables: string[]
  targetSectors: string[]
  disclosureNote: string
  developmentFocus: string
  applications: string
  applicationsTags: string[]
  valuePillars: { pillar: string; meaning: string }[]
  footerCtaHeading: string
  footerCtaSubtext: string
}

/** Filter order as specified in the content pack. */
export const PROJECT_CATEGORIES = [
  "Water & Effluent",
  "Energy & Process",
  "Clean-Tech",
  "Advisory",
  "Ongoing",
] as const

export const PROJECTS_DATA: ProjectSeed[] =
[
  {
    "slug": "textile-wastewater-treatment",
    "projectId": "P01",
    "order": 1,
    "category": "Water & Effluent",
    "title": "Textile Wastewater Treatment",
    "caption": "Cluster-level treatment for industrial wastewater from textile operations.",
    "statusBadge": "Validated research capability",
    "description": "Resolvent Global helps textile clusters and industrial operators assess practical treatment pathways for coloured wastewater, combining characterisation, adsorption testing and pilot-ready planning to support improved discharge quality and reuse-readiness.",
    "primaryCta": "Discuss Similar Challenge",
    "detailCta": "Request Technical Support",
    "challenge": "Textile operations and manufacturing clusters can generate coloured, chemically variable wastewater with high organic load and discharge challenges. Many operators need practical treatment options before discharge, reuse or further polishing.",
    "approach": "We connect validated research capability with practical treatment planning: wastewater characterisation, treatment screening, adsorption/jar testing, pilot-flow development, operating-envelope definition and implementation review.",
    "pathway": [
      {
        "stage": 1,
        "step": "Understand the wastewater",
        "purpose": "Review wastewater sources, treatment objectives and sampling requirements."
      },
      {
        "stage": 2,
        "step": "Characterise the baseline",
        "purpose": "Assess colour, COD and key pollutants to define the treatment challenge."
      },
      {
        "stage": 3,
        "step": "Screen treatment options",
        "purpose": "Compare adsorption, polishing and related treatment pathways."
      },
      {
        "stage": 4,
        "step": "Develop a pilot-ready pathway",
        "purpose": "Define flowsheet, operating envelope and practical implementation considerations."
      },
      {
        "stage": 5,
        "step": "Recommend next steps",
        "purpose": "Translate findings into a management-ready treatment pathway."
      }
    ],
    "deliverables": [
      "Wastewater characterisation plan",
      "Jar and adsorption testing matrix",
      "Treatment-media comparison",
      "Pilot flowsheet and process block diagram",
      "Operating envelope for selected pathway",
      "Preliminary CAPEX/OPEX screening",
      "Risk, limitation and scale-up register",
      "Management-ready technical summary"
    ],
    "targetSectors": [
      "Textile clusters",
      "Dyeing and finishing operations",
      "Printing operations",
      "Industrial estates",
      "Wastewater contractors",
      "Environmental service providers"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Better water quality",
        "meaning": "Improved discharge quality and pollutant reduction."
      },
      {
        "pillar": "Reuse readiness",
        "meaning": "Support for future reuse opportunities where feasible."
      },
      {
        "pillar": "Cluster-scale pathway",
        "meaning": "Applicable to shared manufacturing-cluster challenges."
      },
      {
        "pillar": "Practical implementation",
        "meaning": "Outputs should support realistic treatment decisions."
      }
    ],
    "footerCtaHeading": "Need to improve textile wastewater treatment performance?",
    "footerCtaSubtext": "Resolvent Global can help develop a practical treatment pathway tailored to your cluster or facility."
  },
  {
    "slug": "advanced-treatment-media-screening",
    "projectId": "P02",
    "order": 2,
    "category": "Water & Effluent",
    "title": "Advanced Treatment Media Screening",
    "caption": "Comparative screening of adsorbents and treatment media for industrial water and effluent applications.",
    "statusBadge": "Validated research capability",
    "description": "Resolvent Global helps clients evaluate adsorbents and treatment media for industrial water and effluent applications, combining materials expertise, performance screening and scale-up review to support evidence-based treatment decisions.",
    "primaryCta": "Assess Treatment Media Options",
    "detailCta": "Request Technical Support",
    "challenge": "Industrial water and effluent streams can contain contaminants that require targeted treatment beyond standard processes. Selecting treatment media without reliable performance data can lead to poor removal efficiency, high operating cost, frequent media replacement, weak regeneration potential or failed scale-up.",
    "approach": "We apply validated adsorption and materials capability to compare treatment media, assess contaminant-removal performance, review operating conditions and identify practical pathways for treatment application, regeneration and scale-up.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the treatment challenge",
        "purpose": "Review the water or effluent stream, target contaminants, treatment objectives and desired performance outcome."
      },
      {
        "stage": 2,
        "step": "Select candidate media",
        "purpose": "Shortlist adsorbents, layered materials, activated carbon, mineral media or engineered composites as appropriate."
      },
      {
        "stage": 3,
        "step": "Screen treatment performance",
        "purpose": "Compare removal efficiency, adsorption capacity, contact time, pH sensitivity and wastewater-matrix influence."
      },
      {
        "stage": 4,
        "step": "Review regeneration and media management",
        "purpose": "Assess reuse, exhaustion, safe disposal and practical media-management options."
      },
      {
        "stage": 5,
        "step": "Support scale-up decisions",
        "purpose": "Convert results into a recommendation with implementation limits, pilot needs and scale-up risks."
      }
    ],
    "deliverables": [
      "Contaminant and water-quality review",
      "Treatment-media screening plan",
      "Candidate media shortlist",
      "Adsorption testing matrix",
      "Removal-efficiency comparison",
      "Adsorption capacity assessment",
      "Kinetics and operating-condition review",
      "Regeneration and reuse assessment",
      "Scale-up and implementation review",
      "Management-ready technical summary"
    ],
    "targetSectors": [
      "Industrial water-treatment providers",
      "Mining support services",
      "Water utilities",
      "Laboratories",
      "Wastewater contractors",
      "Remediation firms",
      "Environmental consultants"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Evidence-based selection",
        "meaning": "Defensible data before treatment-media investment."
      },
      {
        "pillar": "Performance comparison",
        "meaning": "Removal efficiency, adsorption capacity and operating-condition review."
      },
      {
        "pillar": "Regeneration insight",
        "meaning": "Assessment of reuse, exhaustion and media-management options."
      },
      {
        "pillar": "Scale-up readiness",
        "meaning": "Practical recommendation for pilot or industrial application."
      }
    ],
    "footerCtaHeading": "Need to compare treatment media for an industrial water challenge?",
    "footerCtaSubtext": "Resolvent Global can help evaluate treatment-media options and develop an evidence-based pathway for practical application."
  },
  {
    "slug": "nanobubble-aeration-and-oxidation-upgrade",
    "projectId": "P03",
    "order": 3,
    "category": "Water & Effluent",
    "title": "Nanobubble Aeration and Oxidation Upgrade",
    "caption": "Engineering assessment for improving oxygen transfer, oxidation performance and treatment reliability.",
    "statusBadge": "Professional capability",
    "description": "Resolvent Global helps water, wastewater and process operators assess nanobubble-assisted aeration and oxidation pathways to improve oxygen transfer, treatment performance, energy use and operational reliability.",
    "primaryCta": "Assess Treatment Upgrade Options",
    "detailCta": "Request Technical Support",
    "challenge": "Water, wastewater and process systems often rely on aeration or oxidation, but many facilities experience high energy demand, poor oxygen transfer, unstable treatment performance or limited visibility into process efficiency. Without proper assessment, upgrade decisions may be based on equipment claims rather than site-specific data.",
    "approach": "We combine process engineering, nanobubble technology evaluation and operational monitoring experience to assess baseline performance, define trial conditions, model aeration capacity, track key treatment indicators and recommend practical upgrade pathways.",
    "pathway": [
      {
        "stage": 1,
        "step": "Establish baseline performance",
        "purpose": "Review the treatment system, operating conditions, aeration configuration and current performance indicators."
      },
      {
        "stage": 2,
        "step": "Define upgrade objectives",
        "purpose": "Clarify whether the goal is improved oxygen transfer, oxidation performance, energy reduction or treatment reliability."
      },
      {
        "stage": 3,
        "step": "Develop trial and monitoring framework",
        "purpose": "Prepare a nanobubble trial protocol, monitoring plan and KPI framework."
      },
      {
        "stage": 4,
        "step": "Assess performance impact",
        "purpose": "Evaluate oxygen-transfer behaviour, treatment response, energy implications and operational practicality."
      },
      {
        "stage": 5,
        "step": "Recommend upgrade pathway",
        "purpose": "Provide upgrade options, risks, limitations, implementation requirements and next steps."
      }
    ],
    "deliverables": [
      "Baseline process assessment",
      "Aeration and oxidation performance review",
      "Oxygen-transfer assessment",
      "Nanobubble trial protocol",
      "Treatment-performance monitoring plan",
      "Dashboard KPI framework",
      "Energy and operating-condition review",
      "Upgrade options assessment",
      "Implementation risk review",
      "Management-ready technical recommendation"
    ],
    "targetSectors": [
      "Water utilities",
      "Wastewater treatment plants",
      "Industrial wastewater facilities",
      "Food processors",
      "Aquaculture operations",
      "Process industries",
      "Environmental technology providers"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Better oxygen transfer",
        "meaning": "Assessment of aeration and oxygen-delivery performance."
      },
      {
        "pillar": "Treatment reliability",
        "meaning": "Improved visibility of process stability and treatment response."
      },
      {
        "pillar": "Energy awareness",
        "meaning": "Review of aeration demand and efficiency opportunities."
      },
      {
        "pillar": "Trial-to-scale confidence",
        "meaning": "Structured pathway from technology trial to practical upgrade decision."
      }
    ],
    "footerCtaHeading": "Need to improve aeration, oxidation or treatment reliability?",
    "footerCtaSubtext": "Resolvent Global can help assess practical upgrade pathways using process data, trial planning and nanobubble technology evaluation."
  },
  {
    "slug": "hybrid-energy-readiness-for-industrial-facilities",
    "projectId": "P04",
    "order": 4,
    "category": "Energy & Process",
    "title": "Hybrid Energy Readiness for Industrial Facilities",
    "caption": "Feasibility assessment for solar, battery, generator and grid hybrid energy options.",
    "statusBadge": "Market-ready service",
    "description": "Resolvent Global helps industrial facilities assess solar, battery, generator and grid hybrid options by reviewing load demand, operating constraints, energy costs, emissions impact and phased implementation pathways.",
    "primaryCta": "Assess Energy Readiness",
    "detailCta": "Request Technical Support",
    "challenge": "Industrial facilities often face high fuel costs, unreliable grid supply, rising energy demand and pressure to reduce emissions. However, solar, battery and generator-hybrid decisions are often made without proper load analysis, operational review or staged implementation planning.",
    "approach": "We assess facility load demand, operating patterns, grid and generator dependence, fuel and electricity costs, solar and battery opportunities, emissions impact and commercial constraints to identify practical hybrid energy pathways.",
    "pathway": [
      {
        "stage": 1,
        "step": "Understand the facility energy profile",
        "purpose": "Review energy use, operating hours, load behaviour, generator use, grid reliability and major energy-consuming equipment."
      },
      {
        "stage": 2,
        "step": "Establish the baseline",
        "purpose": "Develop a baseline view of fuel cost, electricity cost, operating constraints, emissions profile and current energy-risk exposure."
      },
      {
        "stage": 3,
        "step": "Screen hybrid energy options",
        "purpose": "Compare practical combinations of grid supply, generators, solar PV, battery storage and staged implementation options."
      },
      {
        "stage": 4,
        "step": "Assess feasibility and constraints",
        "purpose": "Review available space, load matching, battery-use cases, backup requirements, operational risks and implementation limitations."
      },
      {
        "stage": 5,
        "step": "Recommend a phased roadmap",
        "purpose": "Convert analysis into a management-ready roadmap for next steps and deeper assessment."
      }
    ],
    "deliverables": [
      "Facility energy-use review",
      "Load-profile assessment",
      "Grid and generator baseline review",
      "Fuel-cost and electricity-cost assessment",
      "Solar and battery opportunity screen",
      "Hybrid energy options comparison",
      "Emissions reduction estimate",
      "Operational constraints review",
      "Phased implementation roadmap",
      "Management-ready technical summary"
    ],
    "targetSectors": [
      "Manufacturing SMEs",
      "Industrial facilities",
      "Commercial buildings",
      "Cold rooms",
      "Healthcare facilities",
      "Food processors",
      "Warehouses",
      "Industrial estates"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Load-led planning",
        "meaning": "Hybrid options based on actual facility demand."
      },
      {
        "pillar": "Cost visibility",
        "meaning": "Review of fuel, electricity and operating-cost drivers."
      },
      {
        "pillar": "Emissions insight",
        "meaning": "Preliminary estimate of carbon-reduction opportunity."
      },
      {
        "pillar": "Phased implementation",
        "meaning": "Practical roadmap for staged energy transition."
      }
    ],
    "footerCtaHeading": "Need to assess solar, battery or generator hybrid options?",
    "footerCtaSubtext": "Resolvent Global can help develop a practical energy-readiness pathway based on load, cost, emissions and operational realities."
  },
  {
    "slug": "process-development-and-optimisation",
    "projectId": "P05",
    "order": 5,
    "category": "Energy & Process",
    "title": "Process Development & Optimisation",
    "caption": "Structured improvement support for industrial processes, operating reliability and performance losses.",
    "statusBadge": "Market-ready service",
    "description": "Resolvent Global helps industrial operators improve process performance by identifying bottlenecks, reducing losses, strengthening SOPs, reviewing operating controls and developing practical optimisation pathways.",
    "primaryCta": "Assess Process Improvement Options",
    "detailCta": "Request Technical Support",
    "challenge": "Industrial facilities often lose value through recurring process issues, quality variation, downtime, weak operating procedures and informal troubleshooting. Without a structured improvement pathway, these problems can continue unnoticed until they affect cost, safety, compliance, reliability or customer delivery.",
    "approach": "We combine process engineering, root-cause analysis, operational review, SOP development and practical improvement planning to identify performance gaps and convert them into clear technical actions.",
    "pathway": [
      {
        "stage": 1,
        "step": "Understand the process",
        "purpose": "Review process flow, equipment, production targets, quality expectations and recurring problems."
      },
      {
        "stage": 2,
        "step": "Map performance gaps",
        "purpose": "Identify bottlenecks, downtime causes, quality variation, operating constraints and loss points."
      },
      {
        "stage": 3,
        "step": "Analyse root causes",
        "purpose": "Distinguish symptoms from underlying process, equipment, procedural or operational issues."
      },
      {
        "stage": 4,
        "step": "Strengthen controls and procedures",
        "purpose": "Review SOPs, operating controls, risk points, handover practices and monitoring needs."
      },
      {
        "stage": 5,
        "step": "Build the optimisation roadmap",
        "purpose": "Convert findings into an opportunity register, implementation priorities and recommendations."
      }
    ],
    "deliverables": [
      "Process mapping",
      "Bottleneck assessment",
      "Root-cause analysis review",
      "Operating condition review",
      "Loss and downtime assessment",
      "SOP and control-plan improvement",
      "Risk and operational constraint review",
      "Process improvement opportunity register",
      "Implementation roadmap",
      "Management-ready technical summary"
    ],
    "targetSectors": [
      "Manufacturing facilities",
      "Water and wastewater plants",
      "Energy operators",
      "Processing facilities",
      "Industrial estates",
      "Food processors",
      "Chemical and process industries"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Reduced losses",
        "meaning": "Identify avoidable process, quality and downtime losses."
      },
      {
        "pillar": "Stronger controls",
        "meaning": "Improve SOPs, operating discipline and process visibility."
      },
      {
        "pillar": "Better reliability",
        "meaning": "Support consistent performance across equipment, shifts and conditions."
      },
      {
        "pillar": "Practical improvement",
        "meaning": "Convert findings into clear actions and implementation steps."
      }
    ],
    "footerCtaHeading": "Need to improve process performance or reduce recurring losses?",
    "footerCtaSubtext": "Resolvent Global can help identify bottlenecks, strengthen operating controls and develop a practical optimisation pathway."
  },
  {
    "slug": "green-hydrogen-and-water-energy-integration",
    "projectId": "P06",
    "order": 6,
    "category": "Clean-Tech",
    "title": "Green Hydrogen and Water-Energy Integration",
    "caption": "Support for green hydrogen integration to water and energy systems.",
    "statusBadge": "Research-derived capability",
    "description": "Resolvent Global supports green hydrogen concepts by reviewing water-source options, energy inputs, treatment needs, technical risks and early-stage sustainability considerations for practical water-energy integration.",
    "primaryCta": "Assess Hydrogen Integration Options",
    "detailCta": "Request Technical Support",
    "challenge": "Green hydrogen concepts require more than electrolyser selection. Project teams must understand water availability, water quality, treatment needs, energy supply, operating assumptions, cost drivers, sustainability boundaries and technical risks before progressing to deeper feasibility or investment.",
    "approach": "We connect water, wastewater, energy, process engineering and sustainability assessment to support early-stage green hydrogen integration concepts, clarify key assumptions and identify practical technical risks.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the concept",
        "purpose": "Clarify hydrogen application, site context, objectives, water sources, energy options and integration intent."
      },
      {
        "stage": 2,
        "step": "Review water options",
        "purpose": "Assess feedwater quality, availability, treatment needs and wastewater reuse opportunities."
      },
      {
        "stage": 3,
        "step": "Review energy systems",
        "purpose": "Screen renewable or hybrid energy options, operating profile, reliability and grid constraints."
      },
      {
        "stage": 4,
        "step": "Identify risks and sustainability factors",
        "purpose": "Evaluate technical risks, emissions boundaries, resource use, TEA/LCA assumptions and regulatory considerations."
      },
      {
        "stage": 5,
        "step": "Develop the integration pathway",
        "purpose": "Summarise findings, key assumptions and constraints into a practical integration pathway."
      }
    ],
    "deliverables": [
      "Hydrogen integration concept review",
      "Water-source options assessment",
      "Feedwater and water-quality review",
      "Water-treatment requirement screen",
      "Wastewater reuse opportunity review",
      "Energy-source options review",
      "Operating-assumption register",
      "Technical risk register",
      "Early-stage TEA/LCA boundary screen",
      "Integration constraints review",
      "Management or investor-ready technical memo"
    ],
    "targetSectors": [
      "Energy developers",
      "Industrial parks",
      "Water utilities",
      "Clean-tech startups",
      "Universities and R&D teams",
      "Government programmes",
      "Industrial facilities",
      "Renewable energy developers",
      "Investors and project partners"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Water-smart planning",
        "meaning": "Review water sources, quality and treatment requirements."
      },
      {
        "pillar": "Energy integration",
        "meaning": "Connect hydrogen concepts to practical energy-supply assumptions."
      },
      {
        "pillar": "Risk visibility",
        "meaning": "Identify technical, sustainability and implementation risks early."
      },
      {
        "pillar": "Decision support",
        "meaning": "Develop clearer evidence for partners, investors and project teams."
      }
    ],
    "footerCtaHeading": "Exploring green hydrogen linked to water or energy systems?",
    "footerCtaSubtext": "Resolvent Global can help review water-source options, energy assumptions and technical risks before deeper project development."
  },
  {
    "slug": "solid-oxide-cell-technology",
    "projectId": "P07",
    "order": 7,
    "category": "Clean-Tech",
    "title": "Solid Oxide Cell Technology",
    "caption": "Technical capability across SOEC/SOFC materials, degradation risks, performance review and scale-up pathways.",
    "statusBadge": "Research-derived capability",
    "description": "Resolvent Global supports solid oxide cell technology pathways by reviewing SOEC/SOFC concepts, materials performance, degradation risks, technology readiness and scale-up considerations for clean-tech and energy applications.",
    "primaryCta": "Assess Solid Oxide Cell Pathways",
    "detailCta": "Request Technical Support",
    "challenge": "Solid oxide electrochemical technologies can support clean hydrogen, power generation and industrial decarbonisation, but they involve complex materials, high-temperature operation, degradation risks and scale-up uncertainty. Project teams need clear technical evidence before advancing development, funding, partnership or deployment decisions.",
    "approach": "We connect solid oxide cell materials knowledge, degradation understanding, performance review, benchmark analysis and scale-up thinking to support clearer technical and commercial decision-making.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the technology pathway",
        "purpose": "Clarify SOEC, SOFC or related system, intended application, operating context and development objectives."
      },
      {
        "stage": 2,
        "step": "Review materials and operating assumptions",
        "purpose": "Assess materials basis, cell components, operating temperature, fuel/feed conditions and electrochemical assumptions."
      },
      {
        "stage": 3,
        "step": "Map degradation and performance risks",
        "purpose": "Review degradation mechanisms, performance-loss pathways, durability issues and evidence gaps."
      },
      {
        "stage": 4,
        "step": "Benchmark technology readiness",
        "purpose": "Compare the technology concept against benchmarks, readiness indicators and competing approaches."
      },
      {
        "stage": 5,
        "step": "Develop a deployment pathway",
        "purpose": "Generate risk register, scale-up considerations, commercialisation pathway and recommended next steps."
      }
    ],
    "deliverables": [
      "SOEC/SOFC concept review",
      "Materials and operating-condition assessment",
      "Performance and durability review",
      "Degradation-risk map",
      "Technology readiness review",
      "Benchmark comparison",
      "Scale-up and manufacturability considerations",
      "Deployment pathway review",
      "Technical risk register",
      "Commercialisation roadmap",
      "Management or investor-ready technical memo"
    ],
    "targetSectors": [
      "Clean-tech startups",
      "Investors",
      "R&D centres",
      "Energy companies",
      "Hydrogen developers",
      "Universities and research teams",
      "Public agencies",
      "Industrial decarbonisation teams"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Technology clarity",
        "meaning": "Clearer understanding of SOEC/SOFC concepts and readiness."
      },
      {
        "pillar": "Degradation insight",
        "meaning": "Review performance-loss pathways and durability risks."
      },
      {
        "pillar": "Scale-up visibility",
        "meaning": "Assess manufacturability, stack development and deployment constraints."
      },
      {
        "pillar": "Investment confidence",
        "meaning": "Technical evidence to support development, funding and partnerships."
      }
    ],
    "footerCtaHeading": "Developing or assessing solid oxide cell technology?",
    "footerCtaSubtext": "Resolvent Global can help review materials, degradation risks, technology readiness and scale-up pathways before deeper investment or development."
  },
  {
    "slug": "co2-and-methane-valorisation-technologies",
    "projectId": "P08",
    "order": 8,
    "category": "Clean-Tech",
    "title": "CO₂ and Methane Valorisation Technologies",
    "caption": "Technology support for converting CO₂ and methane streams into useful fuels, chemicals and clean-tech opportunities.",
    "statusBadge": "Research-derived capability",
    "description": "Resolvent Global supports CO₂ and methane valorisation concepts by reviewing feedstock fit, catalyst pathways, reaction options, technical risks and early-stage opportunities for fuels, chemicals and clean-tech applications.",
    "primaryCta": "Assess Valorisation Technologies",
    "detailCta": "Request Technical Support",
    "challenge": "Industrial emitters, gas-resource owners and clean-tech teams are under pressure to move beyond emissions reporting, flaring or simple carbon-management narratives. However, CO₂ and methane valorisation technologies require careful review of feedstock quality, reaction chemistry, catalyst suitability, energy demand, technical risk and commercial readiness.",
    "approach": "We connect catalysis, carbon utilisation, methane conversion and clean-tech translation capability to screen reaction pathways, assess catalyst risks, review feedstock fit and identify practical development or commercialisation routes.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the opportunity",
        "purpose": "Clarify CO₂ or methane source, intended product, site context, development stage and commercial objectives."
      },
      {
        "stage": 2,
        "step": "Review feedstock and process fit",
        "purpose": "Assess gas-stream composition, impurities, availability, operating constraints and compatibility with routes."
      },
      {
        "stage": 3,
        "step": "Screen reaction and catalyst pathways",
        "purpose": "Evaluate reaction routes, catalyst options, operating conditions, conversion potential and technical risks."
      },
      {
        "stage": 4,
        "step": "Assess readiness and sustainability risks",
        "purpose": "Review readiness, energy demand, emissions boundaries, scale-up risks and sustainability considerations."
      },
      {
        "stage": 5,
        "step": "Develop opportunity pathway",
        "purpose": "Deliver opportunity map, risk register, development roadmap and recommendations."
      }
    ],
    "deliverables": [
      "CO₂/methane valorisation concept review",
      "Feedstock and gas-stream fit assessment",
      "Reaction pathway screen",
      "Catalyst-risk assessment",
      "Technology readiness review",
      "Sustainability and emissions boundary review",
      "Energy-demand and operating-assumption review",
      "Scale-up and implementation considerations",
      "Early-stage opportunity map",
      "Commercialisation pathway summary",
      "Management or investor-ready technical memo"
    ],
    "targetSectors": [
      "Gas processors",
      "Oil and gas operators",
      "CCUS developers",
      "Clean-tech startups",
      "Universities and R&D teams",
      "Industrial emitters",
      "Energy companies",
      "Petrochemical operators",
      "Public agencies",
      "Industrial decarbonisation teams"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Carbon-to-value thinking",
        "meaning": "Reframe CO₂ and methane streams as potential feedstocks."
      },
      {
        "pillar": "Catalyst pathway insight",
        "meaning": "Review catalyst options, reaction routes and conversion risks."
      },
      {
        "pillar": "Readiness visibility",
        "meaning": "Clarify maturity, assumptions and scale-up limitations."
      },
      {
        "pillar": "Commercial direction",
        "meaning": "Support clearer decisions for partners, funders and clean-tech teams."
      }
    ],
    "footerCtaHeading": "Exploring CO₂ or methane valorisation opportunities?",
    "footerCtaSubtext": "Resolvent Global can help review feedstock fit, catalyst pathways, technical risks and early-stage clean-tech opportunities."
  },
  {
    "slug": "catalyst-lifecycle-advisory",
    "projectId": "P09",
    "order": 9,
    // Deliberate override of the source document — see the header note.
    "category": "Advisory",
    "title": "Catalyst Lifecycle Advisory",
    "caption": "Advisory support for catalyst selection, performance, degradation, regeneration and lifecycle-cost decisions.",
    "statusBadge": "Research-derived capability",
    "description": "Resolvent Global supports catalyst users and clean-tech teams by reviewing catalyst selection criteria, performance loss, degradation risks, regeneration options, replacement timing and lifecycle-cost considerations.",
    "primaryCta": "Assess Catalyst Lifecycle Options",
    "detailCta": "Request Technical Support",
    "challenge": "Catalyst selection and lifecycle decisions can affect process performance, conversion efficiency, product quality, operating cost and replacement timing. Catalyst systems may also lose activity, selectivity or stability over time due to deactivation, poisoning, fouling, sintering, thermal stress or changing operating conditions.",
    "approach": "We connect catalyst knowledge, materials degradation understanding, process review and lifecycle thinking to help clients assess catalyst selection, performance loss, likely failure modes, regeneration options and practical replacement or recovery decisions.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the catalyst decision",
        "purpose": "Clarify catalyst system, performance issues, objectives, operating history and commercial impact."
      },
      {
        "stage": 2,
        "step": "Review selection and operating criteria",
        "purpose": "Assess application, feed composition, operating conditions, activity, selectivity, stability and lifetime requirements."
      },
      {
        "stage": 3,
        "step": "Identify degradation and failure modes",
        "purpose": "Determine likely performance-loss causes including poisoning, fouling, coking, sintering, phase instability or support degradation."
      },
      {
        "stage": 4,
        "step": "Assess regeneration or replacement options",
        "purpose": "Evaluate regeneration, reactivation, partial replacement or full replacement from technical and commercial perspectives."
      },
      {
        "stage": 5,
        "step": "Develop lifecycle recommendation",
        "purpose": "Provide advisory summary covering options, replacement timing, risks and lifecycle-cost implications."
      }
    ],
    "deliverables": [
      "Catalyst selection criteria review",
      "Catalyst performance-loss review",
      "Failure-mode assessment",
      "Deactivation and degradation-risk map",
      "Sampling and characterisation plan",
      "Operating-condition review",
      "Regeneration options screen",
      "Replacement timing considerations",
      "Lifecycle-cost memo",
      "Technical risk register",
      "Management-ready advisory summary"
    ],
    "targetSectors": [
      "Petrochemical operators",
      "Hydrogen systems",
      "Emissions-control systems",
      "Industrial chemistry",
      "Clean-tech teams",
      "Energy companies",
      "Catalyst users and suppliers",
      "R&D centres",
      "Process technology teams",
      "Universities and research teams"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Selection clarity",
        "meaning": "Review catalyst suitability and operating fit."
      },
      {
        "pillar": "Performance insight",
        "meaning": "Understand catalyst performance loss and causes."
      },
      {
        "pillar": "Regeneration options",
        "meaning": "Assess whether recovery, reuse or replacement is practical."
      },
      {
        "pillar": "Lifecycle decisions",
        "meaning": "Support replacement timing and operational planning."
      }
    ],
    "footerCtaHeading": "Facing catalyst selection, performance loss or regeneration uncertainty?",
    "footerCtaSubtext": "Resolvent Global can help review catalyst suitability, degradation risks, regeneration options and lifecycle-cost decisions before costly action."
  },
  {
    "slug": "clean-tech-tea-lca-advisory",
    "projectId": "P10",
    "order": 10,
    "category": "Advisory",
    "title": "Clean-Tech TEA/LCA Advisory",
    "caption": "Independent technical advisory for clean-tech initiatives, TEA/LCA screening, investment and commercialisation support.",
    "statusBadge": "Market-ready service",
    "description": "Resolvent Global supports clean-tech teams, investors and project sponsors with TEA/LCA screening, assumptions review, CAPEX/OPEX assessment, technical risk visibility and commercialisation decision support.",
    "primaryCta": "Assess Clean-Tech Readiness",
    "detailCta": "Request Technical Support",
    "challenge": "Clean-tech initiatives often move toward grants, investment, partnerships or scale-up before the technical and commercial evidence is strong enough. Founders, funders and project sponsors need clear assumptions, realistic cost boundaries, sustainability framing, risk visibility and independent engineering review before committing resources.",
    "approach": "We combine process engineering, TEA/LCA thinking, clean-tech translation and technical due diligence to review assumptions, clarify risks, define assessment boundaries and support stronger investment, grant or commercialisation decisions.",
    "pathway": [
      {
        "stage": 1,
        "step": "Define the initiative",
        "purpose": "Clarify technology, intended application, development stage, value proposition, boundary and decision objective."
      },
      {
        "stage": 2,
        "step": "Review assumptions and evidence",
        "purpose": "Assess technical evidence, operating assumptions, data quality, performance claims and uncertainties."
      },
      {
        "stage": 3,
        "step": "Screen TEA and LCA boundaries",
        "purpose": "Review techno-economic assumptions, CAPEX/OPEX drivers, LCA boundary and sustainability considerations."
      },
      {
        "stage": 4,
        "step": "Identify risks and readiness gaps",
        "purpose": "Map technical, commercial, scale-up, implementation and market-readiness risks."
      },
      {
        "stage": 5,
        "step": "Develop advisory outputs",
        "purpose": "Convert findings into assumptions register, risk register, TEA/LCA screen and recommendations."
      }
    ],
    "deliverables": [
      "Clean-tech initiative review",
      "TEA screening",
      "LCA boundary review",
      "Assumptions register",
      "CAPEX/OPEX assessment",
      "Technical risk register",
      "Technology-readiness review",
      "Commercialisation pathway review",
      "Grant or investor technical brief",
      "Management-ready recommendation"
    ],
    "targetSectors": [
      "Clean-tech startups",
      "Investors and venture teams",
      "Public agencies",
      "NGOs",
      "Universities and R&D teams",
      "Grant applicants",
      "Project sponsors",
      "Commercialisation teams",
      "Industrial innovation teams",
      "Sustainability and decarbonisation programmes"
    ],
    "disclosureNote": "",
    "developmentFocus": "",
    "applications": "",
    "applicationsTags": [],
    "valuePillars": [
      {
        "pillar": "Stronger assumptions",
        "meaning": "Clarify technical, economic and sustainability assumptions."
      },
      {
        "pillar": "TEA/LCA visibility",
        "meaning": "Screen cost drivers, emissions boundaries and lifecycle implications."
      },
      {
        "pillar": "Risk clarity",
        "meaning": "Identify technical, commercial and scale-up risks."
      },
      {
        "pillar": "Investor readiness",
        "meaning": "Support clearer documentation for funders, partners and management."
      }
    ],
    "footerCtaHeading": "Need technical evidence before clean-tech investment, grant or scale-up?",
    "footerCtaSubtext": "Resolvent Global can help review TEA/LCA boundaries, assumptions, risks and commercialisation readiness before major decisions."
  },
  {
    "slug": "circular-materials-innovation",
    "projectId": "O01",
    "order": 11,
    "category": "Ongoing",
    "title": "Circular Materials Innovation",
    "caption": "Confidential development of circular material pathways for selected industrial and environmental applications.",
    "statusBadge": "Ongoing confidential development",
    "description": "Resolvent Global is advancing circular material pathways from selected agricultural residues for industrial and environmental applications, with technical details intentionally limited due to ongoing development and intellectual-property considerations.",
    "primaryCta": "Discuss Collaboration",
    "detailCta": "Request Technical Discussion",
    "challenge": "Agricultural residues and bio-based resources can hold value beyond disposal, low-value fuel use or unmanaged waste streams. However, converting these materials into credible industrial or environmental inputs requires careful evaluation, application screening, technical validation and commercial pathway development.",
    "approach": "",
    "pathway": [],
    "deliverables": [],
    "targetSectors": [],
    "disclosureNote": "This project is presented as a high-level development initiative. Detailed processing methods, material specifications, characterisation results, application targets and commercialisation strategy are intentionally reserved while the work remains under active development.",
    "developmentFocus": "This ongoing initiative focuses on the high-level development of circular material opportunities for selected industrial and environmental applications. Public disclosure is intentionally limited while technical evaluation, application screening and commercial positioning remain under development.",
    "applications": "This innovation initiative supports selected industrial and environmental applications through circular materials development, while detailed technical data, performance results and application-specific information remain confidential.",
    "applicationsTags": [
      "Circular materials",
      "Bio-based materials",
      "Industrial inputs",
      "Environmental applications",
      "Residue valorisation",
      "Applied materials development"
    ],
    "valuePillars": [
      {
        "pillar": "Circular materials",
        "meaning": "Developing higher-value pathways for agricultural and bio-based resources."
      },
      {
        "pillar": "Confidential development",
        "meaning": "Technical details remain protected while evaluation and commercial positioning continue."
      },
      {
        "pillar": "Industrial relevance",
        "meaning": "Focused on selected industrial use cases where circular materials can support value."
      },
      {
        "pillar": "Selected collaboration",
        "meaning": "Open to serious technical, laboratory and commercial discussions under appropriate conditions."
      }
    ],
    "footerCtaHeading": "Interested in circular materials innovation or selected collaboration?",
    "footerCtaSubtext": "Resolvent Global is open to selected technical, laboratory and commercial discussions while preserving confidential development details."
  },
  {
    "slug": "circular-materials-screening",
    "projectId": "O02",
    "order": 12,
    "category": "Ongoing",
    "title": "Circular Materials Screening",
    "caption": "Screening of circular material applications through controlled characterisation and evaluation.",
    "statusBadge": "Ongoing confidential development",
    "description": "Resolvent Global is advancing screening of circular material applications through controlled characterisation, evaluation and selected technical engagement, while detailed processing methods and application-specific findings remain reserved.",
    "primaryCta": "Discuss Collaboration",
    "detailCta": "Request Technical Discussion",
    "challenge": "Identifying the right applications for circular materials requires robust characterisation and evidence-led evaluation to determine where the material can deliver credible industrial or environmental value.",
    "approach": "",
    "pathway": [],
    "deliverables": [],
    "targetSectors": [],
    "disclosureNote": "Detailed sample preparation methods, characterisation outputs, application-screening results, processing assumptions and product-development pathways are intentionally reserved while the work remains under active evaluation.",
    "developmentFocus": "This ongoing initiative focuses on controlled characterisation and application screening for circular materials.",
    "applications": "This screening initiative supports selected industrial and environmental application areas by evaluating circular material suitability.",
    "applicationsTags": [
      "Circular materials",
      "Application screening",
      "Material characterisation",
      "Industrial inputs",
      "Environmental applications",
      "Product-pathway evaluation"
    ],
    "valuePillars": [
      {
        "pillar": "Characterisation-led",
        "meaning": "Structured evaluation of material attributes before public or commercial positioning."
      },
      {
        "pillar": "Application screening",
        "meaning": "Controlled review of selected industrial and environmental use cases."
      },
      {
        "pillar": "Responsible evaluation",
        "meaning": "Progress guided by technical integrity and commercial discipline."
      },
      {
        "pillar": "Partner readiness",
        "meaning": "High-level outputs enable meaningful technical and commercial discussions."
      }
    ],
    "footerCtaHeading": "Interested in collaboration?",
    "footerCtaSubtext": "Resolvent Global is open to selected technical, laboratory and commercial discussions."
  },
  {
    "slug": "circular-economy-pathway",
    "projectId": "O03",
    "order": 13,
    "category": "Ongoing",
    "title": "Circular Economy Pathway",
    "caption": "Development of circular economy pathways for transforming selected residues into value-added industrial inputs.",
    "statusBadge": "Ongoing confidential development",
    "description": "Resolvent Global is advancing circular economy pathways that support the transformation of selected residues into industrial assets.",
    "primaryCta": "Discuss Collaboration",
    "detailCta": "Request Technical Discussion",
    "challenge": "Many residue streams remain underutilised despite their potential contribution to circular materials, industrial inputs and sustainability outcomes. Turning these resources into credible value-added pathways requires technical evaluation, market understanding, application alignment and careful commercial development.",
    "approach": "",
    "pathway": [],
    "deliverables": [],
    "targetSectors": [],
    "disclosureNote": "Detailed technical processes, material specifications, application-development details and commercial pathway information are intentionally reserved.",
    "developmentFocus": "This ongoing initiative focuses on developing circular economy pathways for selected residue streams.",
    "applications": "This pathway supports selected industrial and environmental application areas where residue-derived inputs can contribute to sustainability objectives.",
    "applicationsTags": [
      "Selected residues",
      "Circular economy",
      "Industrial assets",
      "Sustainability objectives",
      "Industrial inputs",
      "Environmental applications"
    ],
    "valuePillars": [
      {
        "pillar": "Circular value",
        "meaning": "Transforming selected residues into higher-value industrial opportunities."
      },
      {
        "pillar": "Industrial relevance",
        "meaning": "Positioning residue-derived inputs for credible industrial application."
      },
      {
        "pillar": "Sustainability alignment",
        "meaning": "Supporting circular economy and resource-efficiency objectives."
      },
      {
        "pillar": "Protected development",
        "meaning": "Maintaining confidentiality around technical and commercial details."
      }
    ],
    "footerCtaHeading": "Interested in circular economy collaboration?",
    "footerCtaSubtext": "Resolvent Global is open to selected technical, laboratory and commercial discussions while preserving reserved development details."
  }
]
