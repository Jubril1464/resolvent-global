/**
 * Training portfolio content, transcribed from
 * public/Resolvent_Global_Training_Web_Developer_Master_FINAL.docx
 * (the authoritative content handover).
 *
 * GENERATED from that document — if the .docx is revised, re-derive this
 * file rather than hand-editing, so the two can't silently drift.
 *
 * Delivery options are identical across all 8 offerings, so they live once
 * on the `training-page` global (see SHARED_DELIVERY_OPTIONS).
 */

export type TrainingCourseSeed = {
  slug: string
  courseNumber: number
  title: string
  category: "Short Course" | "Applied Course" | "Integrated Program"
  duration: string
  moduleCount: number
  summary: string
  keyAreas: string[]
  about: string[]
  learn: string[]
  curriculum: { number: number; title: string; duration: string; topics: string[] }[]
  audience: string[]
  prerequisites: string[]
  prereqNote: string
  practicalIntro: string
  practicalItems: { title: string; description: string }[]
  capstoneTitle: string
  caseParagraphs: string[]
  workflow: string[]
  finalDeliverables: string[]
  resourcesNote: string
  resources: string[]
  gainIntro: string
  gains: string[]
  industries: string[]
  finalCtaTitle: string
  finalCtaDescription: string
}

export const SHARED_DELIVERY_OPTIONS: { title: string; description: string }[] =
[
  {
    "title": "Live Virtual Training",
    "description": "Interactive instructor-led delivery incorporating exercises, analysis and discussion."
  },
  {
    "title": "Instructor-Led Classroom Training",
    "description": "Face-to-face delivery with practical activities, case work and direct instructor interaction."
  },
  {
    "title": "Corporate Cohorts",
    "description": "Organisation-specific delivery with examples and scenarios adapted to relevant operational or technical contexts where appropriate."
  },
  {
    "title": "Blended Delivery",
    "description": "A combination of instructor-led sessions and structured independent activities or applied project work."
  }
]

export const TRAINING_COURSES_DATA: TrainingCourseSeed[] =
[
  {
    "slug": "process-optimisation-fundamentals",
    "courseNumber": 1,
    "title": "Process Optimisation Fundamentals",
    "category": "Short Course",
    "duration": "~15 h",
    "moduleCount": 5,
    "summary": "Build practical capability to assess process performance, identify bottlenecks and inefficiencies, investigate root causes and develop structured optimisation actions.",
    "keyAreas": [
      "Process performance",
      "KPIs",
      "Bottlenecks",
      "Root-cause analysis",
      "Continuous improvement"
    ],
    "about": [
      "Process Optimisation Fundamentals provides a practical introduction to the principles and methods used to improve process performance, efficiency and operational effectiveness.",
      "Participants learn how to assess current performance, identify bottlenecks and inefficiencies, interpret operational data, investigate root causes, evaluate improvement opportunities and develop structured optimisation actions.",
      "The course emphasises practical application, data-informed decision-making and continuous improvement across process-based environments."
    ],
    "learn": [
      "Explain the fundamental principles of process optimisation and performance improvement.",
      "Identify and interpret key process-performance indicators.",
      "Map processes and establish appropriate performance baselines.",
      "Analyse operational data to identify variability and performance gaps.",
      "Apply structured root-cause analysis techniques.",
      "Identify bottlenecks, constraints and improvement opportunities.",
      "Evaluate optimisation opportunities based on impact, feasibility, cost and risk.",
      "Prioritise improvement actions using structured decision-making tools.",
      "Develop a practical process-optimisation action plan.",
      "Establish appropriate KPIs and monitoring approaches to sustain improvements."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Process Performance Fundamentals",
        "duration": "~2.5 h",
        "topics": [
          "Process optimisation principles",
          "Productivity and efficiency",
          "Throughput and yield",
          "Capacity utilisation",
          "Quality performance",
          "Resource intensity",
          "Process baselines",
          "KPI selection"
        ]
      },
      {
        "number": 2,
        "title": "Process Mapping and Performance Analysis",
        "duration": "~3 h",
        "topics": [
          "Process boundaries",
          "Inputs and outputs",
          "Process mapping",
          "Critical process variables",
          "Operational data sources",
          "Baseline development",
          "Trend interpretation",
          "Performance-gap identification"
        ]
      },
      {
        "number": 3,
        "title": "Bottlenecks, Variability and Root-Cause Analysis",
        "duration": "~3 h",
        "topics": [
          "Bottleneck identification",
          "Capacity constraints",
          "Process variability",
          "Utility and equipment limitations",
          "5 Whys",
          "Cause-and-effect analysis",
          "Pareto analysis",
          "Root-cause verification"
        ]
      },
      {
        "number": 4,
        "title": "Optimisation Opportunity Development",
        "duration": "~3 h",
        "topics": [
          "Improvement opportunity generation",
          "Operating-parameter optimisation",
          "Yield improvement",
          "Loss reduction",
          "Utility reduction",
          "Technical feasibility",
          "Operational impact",
          "Cost and risk",
          "Opportunity prioritisation"
        ]
      },
      {
        "number": 5,
        "title": "Implementation and Continuous Improvement",
        "duration": "~3.5 h",
        "topics": [
          "Action planning",
          "Performance targets",
          "KPI monitoring",
          "Implementation responsibilities",
          "Performance dashboards",
          "Standardisation",
          "Continuous-improvement cycles",
          "Preventing performance regression"
        ]
      }
    ],
    "audience": [
      "Process engineers",
      "Chemical engineers",
      "Production and manufacturing engineers",
      "Operations engineers",
      "Plant and facility engineers",
      "Maintenance and reliability professionals",
      "Continuous-improvement and operational-excellence personnel",
      "Technical supervisors and team leaders",
      "Graduate engineers entering process-based industries",
      "Technical professionals responsible for efficiency, productivity or process performance"
    ],
    "prerequisites": [
      "Basic familiarity with engineering, manufacturing, production or process-based operations",
      "General familiarity with operational data or performance indicators",
      "Basic numerical and problem-solving skills"
    ],
    "prereqNote": "No prior formal training in process optimisation is required.",
    "practicalIntro": "Participants apply the concepts through structured exercises rather than relying on lectures alone.",
    "practicalItems": [
      {
        "title": "Process Performance Review",
        "description": "Identify appropriate KPIs for a simplified process."
      },
      {
        "title": "Process Mapping Exercise",
        "description": "Map inputs, outputs, critical variables and potential losses."
      },
      {
        "title": "Operational Data Interpretation",
        "description": "Review process trends and identify abnormal performance."
      },
      {
        "title": "Root-Cause Analysis Exercise",
        "description": "Apply 5 Whys, cause-and-effect analysis and prioritisation tools."
      },
      {
        "title": "Optimisation Prioritisation Exercise",
        "description": "Rank improvement opportunities according to impact, feasibility, cost and risk."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with an integrated process-improvement scenario involving reduced throughput, increased resource or utility consumption, declining yield, recurring downtime, process variability or quality losses."
    ],
    "workflow": [
      "Performance diagnosis",
      "Root-cause assessment",
      "Optimisation proposal",
      "KPI monitoring plan"
    ],
    "finalDeliverables": [],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "Process Performance Assessment Template",
      "Process Mapping Worksheet",
      "KPI Selection Guide",
      "Root-Cause Analysis Worksheet",
      "Optimisation Opportunity Register",
      "Improvement Prioritisation Matrix"
    ],
    "gainIntro": "Develop a structured and practical approach to analysing process performance, diagnosing inefficiencies and translating findings into evidence-based optimisation actions.",
    "gains": [
      "Stronger process-performance assessment capability",
      "Practical root-cause analysis skills",
      "Improved ability to identify bottlenecks and constraints",
      "Framework for evaluating improvement opportunities",
      "Practical tools for prioritising actions",
      "Structured approach to monitoring and sustaining improvements"
    ],
    "industries": [
      "Manufacturing",
      "Chemicals",
      "Food and beverage",
      "Water and wastewater",
      "Mining and mineral processing",
      "Energy",
      "Oil and gas",
      "Utilities",
      "Pharmaceuticals",
      "Materials processing"
    ],
    "finalCtaTitle": "Ready to Strengthen Process Performance?",
    "finalCtaDescription": "Build practical capability in process analysis, optimisation and continuous improvement."
  },
  {
    "slug": "energy-efficiency-and-utility-audit-fundamentals",
    "courseNumber": 2,
    "title": "Energy Efficiency and Utility Audit Fundamentals",
    "category": "Short Course",
    "duration": "~16 h",
    "moduleCount": 5,
    "summary": "Develop practical capability to assess energy performance, understand major utility systems, identify energy losses and prioritise realistic efficiency improvements.",
    "keyAreas": [
      "Energy performance",
      "Utility systems",
      "Energy auditing",
      "Baselines",
      "Savings assessment",
      "Performance monitoring"
    ],
    "about": [
      "Energy Efficiency and Utility Audit Fundamentals provides a practical introduction to assessing energy performance and identifying opportunities to reduce unnecessary energy use across facilities and process environments.",
      "Participants learn how energy is consumed, how major utility systems influence overall demand, how to interpret energy-use data, and how to conduct a structured utility assessment.",
      "The course emphasises practical energy assessment, opportunity identification, basic savings evaluation and implementation planning rather than energy-management theory alone."
    ],
    "learn": [
      "Explain the fundamentals of energy efficiency and utility performance.",
      "Identify major energy users and utility systems.",
      "Interpret basic energy-use data, utility bills and load profiles.",
      "Establish simple energy baselines and performance indicators.",
      "Identify common sources of energy loss and inefficient operation.",
      "Conduct a structured walkthrough utility assessment.",
      "Identify practical energy-saving opportunities.",
      "Estimate basic energy and cost savings.",
      "Prioritise energy-efficiency opportunities according to impact, feasibility and cost.",
      "Develop a practical energy-efficiency improvement and monitoring plan."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Energy Performance Fundamentals",
        "duration": "~3 h",
        "topics": [
          "Energy and power fundamentals",
          "Energy demand and consumption",
          "Energy intensity",
          "Load profiles",
          "Peak demand",
          "Energy baselines",
          "Energy-performance indicators",
          "Utility cost drivers",
          "Common energy losses",
          "Performance benchmarking"
        ]
      },
      {
        "number": 2,
        "title": "Utility Systems and Major Energy Users",
        "duration": "~3 h",
        "topics": [
          "Boilers and steam systems",
          "Compressed air",
          "Pumps",
          "Motors and drives",
          "HVAC",
          "Refrigeration",
          "Process heating",
          "Lighting",
          "Utility distribution losses",
          "Equipment loading and operating efficiency"
        ]
      },
      {
        "number": 3,
        "title": "Energy Data, Baselines and Performance Assessment",
        "duration": "~3 h",
        "topics": [
          "Utility bills",
          "Metering and sub-metering",
          "Equipment-level measurements",
          "Operational records",
          "Energy baselines",
          "Normalisation",
          "Energy intensity",
          "Production-adjusted consumption",
          "Trend analysis",
          "Data quality",
          "Abnormal-consumption identification"
        ]
      },
      {
        "number": 4,
        "title": "Utility Audit Methods and Opportunity Identification",
        "duration": "~3.5 h",
        "topics": [
          "Audit objectives and scope",
          "Audit preparation",
          "Facility boundaries",
          "Historical energy data",
          "Walkthrough inspections",
          "Equipment observations",
          "Energy-loss identification",
          "No-cost and low-cost opportunities",
          "Capital improvement options",
          "Basic savings calculations",
          "Audit documentation"
        ]
      },
      {
        "number": 5,
        "title": "Prioritisation, Implementation and Monitoring",
        "duration": "~3.5 h",
        "topics": [
          "Energy-saving potential",
          "Cost-saving potential",
          "Technical feasibility",
          "Operational impact",
          "Simple payback",
          "Implementation complexity",
          "Risk and operational constraints",
          "Performance targets",
          "Measurement and verification fundamentals",
          "Monitoring improvements",
          "Continuous energy-management practices"
        ]
      }
    ],
    "audience": [
      "Energy engineers and practitioners",
      "Process and chemical engineers",
      "Mechanical and electrical engineers",
      "Facilities engineers",
      "Plant and operations personnel",
      "Maintenance and reliability professionals",
      "Sustainability and environmental professionals",
      "Utility coordinators",
      "Technical supervisors and managers",
      "Graduate engineers working in energy-intensive environments",
      "Professionals responsible for facility energy performance"
    ],
    "prerequisites": [
      "Basic familiarity with engineering, facilities, utilities or process-based operations",
      "Basic numerical and problem-solving skills",
      "General familiarity with equipment operation or energy consumption"
    ],
    "prereqNote": "No prior formal training in energy auditing is required.",
    "practicalIntro": "Participants apply the course concepts through structured energy-assessment exercises.",
    "practicalItems": [
      {
        "title": "Energy Performance Review",
        "description": "Analyse a simplified facility energy profile and identify relevant performance indicators."
      },
      {
        "title": "Utility-System Assessment",
        "description": "Review major utility systems and identify probable sources of inefficiency."
      },
      {
        "title": "Energy Data Interpretation",
        "description": "Analyse utility and operational data to identify changes in energy intensity and abnormal consumption."
      },
      {
        "title": "Utility Audit Exercise",
        "description": "Complete a structured walkthrough-assessment scenario and develop an initial opportunity register."
      },
      {
        "title": "Opportunity Prioritisation",
        "description": "Compare energy-efficiency measures according to savings potential, cost, feasibility and implementation risk."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with a facility energy-performance scenario containing electricity-use data, fuel consumption, utility information, operating patterns, equipment observations and indicative energy costs."
    ],
    "workflow": [
      "Energy-performance assessment",
      "Energy-saving opportunity register",
      "Preliminary savings estimate",
      "Prioritisation",
      "Monitoring plan"
    ],
    "finalDeliverables": [],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "Energy Performance Assessment Template",
      "Utility Audit Checklist",
      "Energy Baseline Worksheet",
      "Major Energy User Register",
      "Energy-Saving Opportunity Register",
      "Basic Savings Calculation Worksheet"
    ],
    "gainIntro": "Develop a structured approach to understanding energy consumption, assessing utility performance and identifying practical opportunities to reduce energy use and operating costs.",
    "gains": [
      "Stronger understanding of facility energy performance",
      "Greater confidence interpreting energy data",
      "Ability to identify major energy users",
      "Practical utility-audit capability",
      "Basic energy and cost-saving calculation skills",
      "Framework for prioritising energy-efficiency opportunities",
      "Practical tools for implementation and performance monitoring"
    ],
    "industries": [
      "Manufacturing",
      "Chemicals",
      "Food and beverage",
      "Mining and mineral processing",
      "Water and wastewater",
      "Energy",
      "Utilities",
      "Oil and gas",
      "Pharmaceuticals",
      "Warehousing and logistics",
      "Commercial facilities"
    ],
    "finalCtaTitle": "Ready to Improve Energy Performance?",
    "finalCtaDescription": "Build practical capability to identify energy losses, assess utility performance and prioritise efficiency improvements."
  },
  {
    "slug": "carbon-accounting-scope-1-2-and-3",
    "courseNumber": 3,
    "title": "Carbon Accounting: Scope 1, 2, and 3",
    "category": "Short Course",
    "duration": "~18 h",
    "moduleCount": 5,
    "summary": "Develop practical capability to identify, calculate and organise greenhouse-gas emissions across direct operations, purchased energy and the wider value chain.",
    "keyAreas": [
      "Scope 1",
      "Scope 2",
      "Scope 3",
      "Activity data",
      "Emission factors",
      "Carbon inventories",
      "Data quality"
    ],
    "about": [
      "Carbon Accounting: Scope 1, 2, and 3 provides a practical introduction to organisational greenhouse-gas accounting and emissions inventory development.",
      "Participants learn how to define reporting boundaries, identify relevant emission sources, collect and assess activity data, apply emission factors, calculate Scope 1 and Scope 2 emissions, screen relevant Scope 3 categories, and consolidate results into a structured carbon inventory.",
      "The course emphasises practical carbon accounting, transparent assumptions and defensible data rather than climate terminology alone."
    ],
    "learn": [
      "Explain the purpose and core principles of organisational carbon accounting.",
      "Define appropriate organisational and operational boundaries.",
      "Distinguish between Scope 1, Scope 2 and Scope 3 emission sources.",
      "Identify appropriate activity data and emission factors.",
      "Calculate common Scope 1 emissions.",
      "Calculate Scope 2 emissions associated with purchased energy.",
      "Explain location-based and market-based Scope 2 approaches.",
      "Identify and screen relevant Scope 3 categories.",
      "Apply basic approaches to selected Scope 3 calculations.",
      "Evaluate common data-quality limitations and assumptions.",
      "Consolidate emissions into a structured organisational carbon inventory.",
      "Identify major emissions sources and preliminary reduction opportunities."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Fundamentals of Organisational Carbon Accounting",
        "duration": "~3 h",
        "topics": [
          "Purpose of carbon accounting",
          "Greenhouse gases and CO2-equivalent",
          "Organisational boundaries",
          "Operational boundaries",
          "Scope 1, 2 and 3 concepts",
          "Activity data",
          "Emission factors",
          "Base years and inventory periods",
          "Relevance, completeness, consistency, transparency and accuracy"
        ]
      },
      {
        "number": 2,
        "title": "Scope 1: Direct Emissions",
        "duration": "~3 h",
        "topics": [
          "Stationary combustion",
          "Mobile combustion",
          "Process emissions",
          "Fugitive emissions",
          "Refrigerants",
          "Fuel-consumption data",
          "Emission-factor selection",
          "Basic emissions calculations",
          "Data gaps and estimates",
          "Double-counting risks"
        ]
      },
      {
        "number": 3,
        "title": "Scope 2: Purchased Energy Emissions",
        "duration": "~3.5 h",
        "topics": [
          "Purchased electricity",
          "Purchased steam, heat and cooling",
          "Electricity activity data",
          "Grid emission factors",
          "Location-based accounting",
          "Market-based accounting",
          "Contractual instruments",
          "Renewable-electricity considerations",
          "Scope 2 data quality",
          "Common calculation errors"
        ]
      },
      {
        "number": 4,
        "title": "Scope 3: Value-Chain Emissions",
        "duration": "~4 h",
        "topics": [
          "Upstream and downstream emissions",
          "Scope 3 category structure",
          "Purchased goods and services",
          "Capital goods",
          "Transportation and distribution",
          "Waste",
          "Business travel",
          "Employee commuting",
          "Use of sold products",
          "End-of-life treatment",
          "Supplier data",
          "Spend-based and activity-based approaches",
          "Data uncertainty and estimation"
        ]
      },
      {
        "number": 5,
        "title": "Building, Reporting and Improving a Carbon Inventory",
        "duration": "~4.5 h",
        "topics": [
          "Inventory consolidation",
          "Data-quality checks",
          "Assumptions and documentation",
          "Emissions baselines",
          "Year-on-year comparison",
          "Uncertainty",
          "Internal review",
          "Reporting boundaries",
          "Preparing data for external reporting",
          "Emissions hotspot identification",
          "Linking inventories to reduction planning",
          "Maintaining an annual inventory process"
        ]
      }
    ],
    "audience": [
      "Sustainability and ESG professionals",
      "Environmental professionals",
      "Carbon and energy practitioners",
      "Process and chemical engineers",
      "Environmental engineers",
      "Operations and facilities professionals",
      "HSE professionals",
      "Corporate reporting and compliance personnel",
      "Consultants supporting carbon and sustainability projects",
      "Technical managers responsible for environmental performance",
      "Professionals beginning work in greenhouse-gas accounting"
    ],
    "prerequisites": [
      "Basic numerical and spreadsheet skills",
      "General familiarity with organisational operations, energy use or environmental data",
      "An interest in carbon accounting, sustainability or emissions management"
    ],
    "prereqNote": "No previous formal carbon-accounting experience is required.",
    "practicalIntro": "Participants work through classification, calculation and inventory-development exercises.",
    "practicalItems": [
      {
        "title": "Boundary and Scope Classification",
        "description": "Define an inventory boundary and classify emission sources into Scope 1, 2 and 3."
      },
      {
        "title": "Scope 1 Calculation Exercise",
        "description": "Calculate emissions from fuel use, vehicles and refrigerant losses."
      },
      {
        "title": "Scope 2 Calculation Exercise",
        "description": "Analyse purchased-energy data and calculate Scope 2 emissions."
      },
      {
        "title": "Scope 3 Screening Exercise",
        "description": "Identify relevant value-chain categories, data needs and preliminary calculation approaches."
      },
      {
        "title": "Carbon Inventory Consolidation",
        "description": "Bring multiple emissions sources together into a structured organisational inventory."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with an organisational carbon-accounting scenario containing fuel-consumption data, purchased electricity, vehicle activity, refrigerants, business travel, waste, purchased goods and selected value-chain activities."
    ],
    "workflow": [
      "Inventory boundary",
      "Emission-source register",
      "Scope classification",
      "Calculations",
      "Consolidated inventory",
      "Hotspot analysis",
      "Initial reduction priorities"
    ],
    "finalDeliverables": [],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "GHG Inventory Boundary Worksheet",
      "Emission Source Identification Register",
      "Scope 1, 2 and 3 Classification Guide",
      "Activity Data Collection Template",
      "Emission Factor Register",
      "Scope 1 Calculation Worksheet",
      "Scope 2 Calculation Worksheet",
      "Scope 3 Screening Matrix"
    ],
    "gainIntro": "Develop the practical skills required to identify, calculate and organise organisational greenhouse-gas emissions and build a structured carbon inventory that supports better reporting and emissions-management decisions.",
    "gains": [
      "Stronger understanding of organisational carbon accounting",
      "Ability to distinguish Scope 1, 2 and 3 emissions",
      "Practical emissions-calculation experience",
      "Improved confidence working with activity data and emission factors",
      "Structured approach to Scope 3 screening",
      "Better understanding of carbon data quality and uncertainty",
      "Practical tools for building and maintaining a carbon inventory"
    ],
    "industries": [
      "Manufacturing",
      "Energy",
      "Mining and resources",
      "Oil and gas",
      "Chemicals",
      "Water and wastewater",
      "Transport and logistics",
      "Construction",
      "Food and beverage",
      "Technology",
      "Professional services",
      "Public-sector organisations"
    ],
    "finalCtaTitle": "Ready to Build Practical Carbon Accounting Capability?",
    "finalCtaDescription": "Develop the skills to measure, organise and interpret Scope 1, Scope 2 and Scope 3 emissions with greater confidence."
  },
  {
    "slug": "applied-water-and-wastewater-treatment",
    "courseNumber": 4,
    "title": "Applied Water and Wastewater Treatment",
    "category": "Applied Course",
    "duration": "~36 h",
    "moduleCount": 8,
    "summary": "Build practical capability across water and wastewater treatment, from water-quality assessment and conventional processes to biological treatment, membranes, troubleshooting and reuse.",
    "keyAreas": [
      "Water quality",
      "Biological treatment",
      "Membranes",
      "Troubleshooting",
      "Water reuse"
    ],
    "about": [
      "Applied Water and Wastewater Treatment provides a practical and technically grounded understanding of the processes used to treat water and wastewater across industrial and utility environments.",
      "Participants explore the treatment chain from water and wastewater characterisation through physical, chemical and biological treatment, membrane processes, disinfection, advanced treatment, reuse and performance optimisation.",
      "The course places particular emphasis on treatment selection, operational performance, troubleshooting and fit-for-purpose reuse."
    ],
    "learn": [
      "Interpret key physical, chemical and biological water-quality parameters.",
      "Explain the operating principles of major treatment processes.",
      "Compare physical, chemical and biological treatment technologies.",
      "Assess coagulation, clarification and solids-separation approaches.",
      "Explain the fundamentals of biological wastewater treatment.",
      "Compare MF, UF, NF and RO membrane processes.",
      "Explain major disinfection and advanced-treatment approaches.",
      "Assess common industrial wastewater treatment challenges.",
      "Interpret treatment-process performance using relevant indicators.",
      "Identify common causes of treatment underperformance.",
      "Apply structured troubleshooting approaches.",
      "Evaluate opportunities for water reuse and recovery.",
      "Develop an appropriate treatment train for a defined scenario.",
      "Identify opportunities to improve chemical use, energy performance and overall treatment efficiency."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Water Quality and Treatment Fundamentals",
        "duration": "~4 h",
        "topics": [
          "Physical, chemical and biological characteristics",
          "Water-quality parameters",
          "Wastewater-quality parameters",
          "Treatment objectives",
          "Source-water variability",
          "Influent characterisation",
          "Treatment performance indicators",
          "Regulatory and operational considerations"
        ]
      },
      {
        "number": 2,
        "title": "Pre-Treatment and Primary Treatment Processes",
        "duration": "~4 h",
        "topics": [
          "Screening",
          "Equalisation",
          "Sedimentation",
          "Clarification",
          "Coagulation",
          "Flocculation",
          "pH adjustment",
          "Chemical dosing",
          "Solids separation",
          "Primary-treatment performance"
        ]
      },
      {
        "number": 3,
        "title": "Biological Wastewater Treatment",
        "duration": "~4.5 h",
        "topics": [
          "Biological-treatment principles",
          "Activated sludge",
          "Aeration",
          "Organic loading",
          "Microbial activity",
          "Sludge age",
          "Dissolved oxygen",
          "Nutrient removal",
          "Process-control variables",
          "Common biological-treatment problems"
        ]
      },
      {
        "number": 4,
        "title": "Filtration, Membranes and Advanced Separation",
        "duration": "~4.5 h",
        "topics": [
          "Media filtration",
          "Microfiltration",
          "Ultrafiltration",
          "Nanofiltration",
          "Reverse osmosis",
          "Membrane recovery",
          "Fouling",
          "Scaling",
          "Pretreatment requirements",
          "Membrane-performance monitoring"
        ]
      },
      {
        "number": 5,
        "title": "Disinfection and Advanced Treatment Technologies",
        "duration": "~4 h",
        "topics": [
          "Chlorination",
          "UV disinfection",
          "Ozone",
          "Advanced oxidation",
          "Adsorption",
          "Polishing processes",
          "Emerging treatment technologies",
          "Technology-selection considerations",
          "Treatment limitations",
          "Residual-risk management"
        ]
      },
      {
        "number": 6,
        "title": "Industrial Wastewater Treatment and Process Integration",
        "duration": "~4.5 h",
        "topics": [
          "High-strength wastewater",
          "Variable loads",
          "Oil and grease",
          "Metals",
          "Difficult contaminants",
          "Production-process interactions",
          "Treatment pretreatment",
          "Segregation opportunities",
          "Waste minimisation",
          "Process-water integration",
          "Reuse considerations"
        ]
      },
      {
        "number": 7,
        "title": "Treatment Performance, Troubleshooting and Optimisation",
        "duration": "~5 h",
        "topics": [
          "Process KPIs",
          "Flow and loading analysis",
          "Chemical-use performance",
          "Energy consumption",
          "Sludge production",
          "Treatment underperformance",
          "Root-cause analysis",
          "Process instability",
          "Operating adjustments",
          "Optimisation opportunities",
          "Performance monitoring"
        ]
      },
      {
        "number": 8,
        "title": "Water Reuse, Resource Recovery and Applied Treatment Design",
        "duration": "~5.5 h",
        "topics": [
          "Water-reuse objectives",
          "Fit-for-purpose treatment",
          "Water-recovery strategies",
          "Reuse-quality requirements",
          "Resource recovery",
          "Waste minimisation",
          "Treatment-train selection",
          "Process integration",
          "Implementation considerations",
          "Applied treatment design"
        ]
      }
    ],
    "audience": [
      "Water and wastewater engineers",
      "Process and chemical engineers",
      "Environmental engineers",
      "Plant and operations engineers",
      "Utility engineers",
      "Treatment-plant operators and technical supervisors",
      "Sustainability and environmental professionals",
      "Project engineers involved in water infrastructure",
      "Consultants working on water and wastewater projects",
      "Graduate engineers entering water-related roles",
      "Technical managers responsible for water, wastewater or reuse systems"
    ],
    "prerequisites": [
      "Basic familiarity with engineering, chemistry, environmental science or process operations",
      "Basic understanding of flow, concentration and process variables",
      "Basic numerical and problem-solving skills"
    ],
    "prereqNote": "Prior professional experience in water treatment is helpful but not required.",
    "practicalIntro": "Participants apply the course concepts through treatment-selection, process-analysis and troubleshooting exercises.",
    "practicalItems": [
      {
        "title": "Water Quality Interpretation",
        "description": "Review a sample analysis and identify the parameters that drive treatment decisions."
      },
      {
        "title": "Treatment Train Selection",
        "description": "Compare process options and develop an appropriate sequence for a defined water-quality problem."
      },
      {
        "title": "Biological Treatment Review",
        "description": "Assess operating data from a biological system and identify likely causes of poor performance."
      },
      {
        "title": "Membrane Process Assessment",
        "description": "Compare membrane technologies for different separation and water-quality objectives."
      },
      {
        "title": "Troubleshooting Exercise",
        "description": "Diagnose a declining treatment system using a structured root-cause approach."
      },
      {
        "title": "Water Reuse Assessment",
        "description": "Match treated-water quality to potential fit-for-purpose reuse applications."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with an integrated treatment scenario involving variable influent quality, elevated suspended solids, high organic loading, membrane fouling, excessive chemical consumption, inconsistent treated-water quality, increasing operating cost and pressure to increase water reuse."
    ],
    "workflow": [
      "Water characterisation",
      "Treatment objectives",
      "Treatment-train selection",
      "Performance assessment",
      "Troubleshooting",
      "Optimisation",
      "Reuse strategy"
    ],
    "finalDeliverables": [],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "Water Quality Assessment Worksheet",
      "Wastewater Characterisation Template",
      "Treatment Technology Selection Matrix",
      "Treatment Train Development Worksheet",
      "Biological Treatment Troubleshooting Checklist",
      "Membrane Performance Assessment Template",
      "Water Reuse Screening Matrix",
      "Treatment Optimisation Opportunity Register"
    ],
    "gainIntro": "Develop the practical knowledge required to understand, assess and improve water and wastewater treatment systems, with emphasis on treatment selection, process performance, troubleshooting and reuse opportunities.",
    "gains": [
      "Stronger understanding of treatment-system behaviour",
      "Greater confidence interpreting water-quality data",
      "Ability to compare major treatment technologies",
      "Practical understanding of biological and membrane systems",
      "Improved troubleshooting capability",
      "Framework for treatment-train selection",
      "Greater awareness of water-reuse and recovery opportunities",
      "Practical tools for treatment assessment and improvement planning"
    ],
    "industries": [
      "Water utilities",
      "Wastewater utilities",
      "Manufacturing",
      "Food and beverage",
      "Mining and mineral processing",
      "Chemicals",
      "Petrochemicals",
      "Pharmaceuticals",
      "Energy",
      "Oil and gas",
      "Environmental consulting",
      "Water reuse projects"
    ],
    "finalCtaTitle": "Ready to Strengthen Water and Wastewater Treatment Capability?",
    "finalCtaDescription": "Develop practical skills in treatment selection, process assessment, troubleshooting and water reuse."
  },
  {
    "slug": "techno-economic-analysis-and-life-cycle-assessment-for-clean-tech",
    "courseNumber": 5,
    "title": "Techno-Economic Analysis and Life Cycle Assessment for Clean-Tech",
    "category": "Applied Course",
    "duration": "~40 h",
    "moduleCount": 8,
    "summary": "Evaluate clean technologies using integrated technical, economic and environmental analysis to support better decisions around scale-up, investment, technology selection and long-term viability.",
    "keyAreas": [
      "Process basis",
      "CAPEX",
      "OPEX",
      "NPV",
      "IRR",
      "Sensitivity analysis",
      "Life cycle assessment",
      "Environmental impacts"
    ],
    "about": [
      "Techno-Economic Analysis and Life Cycle Assessment for Clean-Tech equips participants with a structured approach to evaluating whether clean technologies are both economically viable and environmentally credible.",
      "Participants learn how to establish a technical process basis, estimate capital and operating costs, evaluate project economics, conduct sensitivity and scenario analysis, define appropriate life cycle assessment boundaries, interpret environmental impacts and compare technology alternatives.",
      "The course emphasises integrated decision-making, helping participants connect technical performance, economic viability and environmental impact rather than assessing each dimension in isolation."
    ],
    "learn": [
      "Explain the roles of TEA and LCA in clean-tech project evaluation.",
      "Define appropriate project, process and system boundaries.",
      "Establish a consistent technical basis using material and energy data.",
      "Identify and structure relevant CAPEX and OPEX components.",
      "Develop basic cost and cash-flow models.",
      "Calculate and interpret key economic indicators.",
      "Apply sensitivity and scenario analysis to identify major project drivers.",
      "Define an appropriate LCA goal, scope and functional unit.",
      "Develop a basic life cycle inventory.",
      "Identify environmental hotspots and major impact contributors.",
      "Assess uncertainty and data-quality limitations.",
      "Compare technology alternatives using economic and environmental criteria.",
      "Identify trade-offs between cost and environmental performance.",
      "Develop a structured recommendation for a clean-tech project."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Clean-Tech Project Evaluation Fundamentals",
        "duration": "~4 h",
        "topics": [
          "Role of TEA and LCA",
          "Technology-development stages",
          "Project evaluation context",
          "Decision objectives",
          "System boundaries",
          "Functional units",
          "Assumptions",
          "Data requirements",
          "Technology comparison",
          "Evaluation limitations"
        ]
      },
      {
        "number": 2,
        "title": "Process Definition, Mass and Energy Basis",
        "duration": "~5 h",
        "topics": [
          "Process-flow representation",
          "Material balances",
          "Energy balances",
          "Production basis",
          "Feedstock requirements",
          "Product yields",
          "Utility requirements",
          "Scale assumptions",
          "Process boundaries",
          "Scenario definition",
          "Data consistency"
        ]
      },
      {
        "number": 3,
        "title": "Capital and Operating Cost Estimation",
        "duration": "~5 h",
        "topics": [
          "CAPEX structure",
          "Equipment costs",
          "Installation costs",
          "Supporting infrastructure",
          "Contingencies",
          "OPEX structure",
          "Raw materials",
          "Utilities",
          "Labour",
          "Maintenance",
          "Consumables",
          "Waste-management costs",
          "Cost-estimation approaches"
        ]
      },
      {
        "number": 4,
        "title": "Techno-Economic Performance Analysis",
        "duration": "~5 h",
        "topics": [
          "Revenue assumptions",
          "Unit production cost",
          "Cash-flow fundamentals",
          "Simple payback",
          "Net present value",
          "Internal rate of return",
          "Break-even analysis",
          "Economic-performance indicators",
          "Discounting concepts",
          "Interpretation of economic results"
        ]
      },
      {
        "number": 5,
        "title": "Uncertainty, Sensitivity and Scenario Analysis",
        "duration": "~4.5 h",
        "topics": [
          "Sources of uncertainty",
          "Key assumptions",
          "Sensitivity analysis",
          "Scenario analysis",
          "Feedstock-price variation",
          "Energy-price variation",
          "Product-value assumptions",
          "Capital-cost uncertainty",
          "Scale effects",
          "Risk exposure",
          "Decision robustness"
        ]
      },
      {
        "number": 6,
        "title": "Life Cycle Assessment Fundamentals",
        "duration": "~5 h",
        "topics": [
          "LCA purpose and principles",
          "Goal definition",
          "Scope definition",
          "Functional unit",
          "System boundaries",
          "Life cycle stages",
          "Life cycle inventory",
          "Data quality",
          "Allocation",
          "Cut-off criteria",
          "Assumptions and limitations"
        ]
      },
      {
        "number": 7,
        "title": "Life Cycle Impact and Environmental Interpretation",
        "duration": "~5 h",
        "topics": [
          "Emissions and resource flows",
          "Climate-change impacts",
          "Energy demand",
          "Water use",
          "Resource consumption",
          "Selected environmental impact categories",
          "Hotspot identification",
          "Trade-offs",
          "Interpretation",
          "Comparative assessment",
          "Environmental uncertainty"
        ]
      },
      {
        "number": 8,
        "title": "Integrated TEA-LCA Decision-Making",
        "duration": "~6.5 h",
        "topics": [
          "Integrating TEA and LCA results",
          "Technology comparison",
          "Economic-environmental trade-offs",
          "Scale-up implications",
          "Investment screening",
          "Scenario comparison",
          "Decision matrices",
          "Risk considerations",
          "Recommendation development",
          "Communicating results to stakeholders"
        ]
      }
    ],
    "audience": [
      "Process and chemical engineers",
      "Environmental engineers",
      "Clean-tech developers",
      "Sustainability professionals",
      "Project and development engineers",
      "R&D professionals",
      "Technical consultants",
      "Innovation and commercialisation teams",
      "Energy and decarbonisation professionals",
      "Investment and technical due-diligence teams",
      "Researchers working on technology scale-up",
      "Managers responsible for evaluating clean-tech and industrial projects"
    ],
    "prerequisites": [
      "Basic understanding of engineering or technical project evaluation",
      "Familiarity with material and energy balances",
      "Basic numerical and spreadsheet skills",
      "General familiarity with project costs or environmental performance is helpful"
    ],
    "prereqNote": "Prior formal experience in TEA or LCA is not required.",
    "practicalIntro": "Participants apply the course concepts through modelling, evaluation and comparison exercises.",
    "practicalItems": [
      {
        "title": "Process Basis Development",
        "description": "Define the technical basis, system boundaries and required data for a simplified clean-tech project."
      },
      {
        "title": "CAPEX and OPEX Structuring",
        "description": "Develop a preliminary project cost model."
      },
      {
        "title": "Economic Performance Analysis",
        "description": "Calculate and interpret unit cost, payback, NPV, IRR and break-even conditions."
      },
      {
        "title": "Sensitivity Analysis",
        "description": "Test the impact of changes in feedstock price, energy cost, product value, plant capacity and capital cost."
      },
      {
        "title": "LCA Goal and Scope Exercise",
        "description": "Define the functional unit, system boundary and life cycle stages for a selected technology."
      },
      {
        "title": "Technology Comparison Exercise",
        "description": "Compare two clean-tech alternatives using both economic and environmental indicators."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with an integrated clean-tech evaluation project. Potential scenarios include renewable-energy integration, waste-to-resource conversion, water-reuse technology, low-carbon manufacturing, circular-economy processes, bio-based technologies, advanced treatment systems or energy-storage technologies."
    ],
    "workflow": [
      "Process definition",
      "Technical basis",
      "CAPEX/OPEX",
      "Economic evaluation",
      "Sensitivity analysis",
      "LCA",
      "Environmental hotspots",
      "Integrated comparison",
      "Recommendation"
    ],
    "finalDeliverables": [
      "Project objectives and assumptions",
      "Technical process basis",
      "Key cost assumptions",
      "Economic indicators",
      "Sensitivity findings",
      "LCA goal and scope",
      "Major environmental impacts",
      "Technology trade-offs",
      "Overall recommendation"
    ],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "TEA Project Basis Template",
      "CAPEX Estimation Worksheet",
      "OPEX Estimation Worksheet",
      "Cash-Flow Model Template",
      "NPV and IRR Calculation Sheet",
      "Sensitivity Analysis Template",
      "LCA Goal and Scope Template",
      "Life Cycle Inventory Worksheet",
      "Integrated TEA-LCA Comparison Matrix"
    ],
    "gainIntro": "Develop the capability to evaluate clean technologies using an integrated framework that connects process performance, project economics, uncertainty and environmental impacts.",
    "gains": [
      "Stronger techno-economic modelling capability",
      "Practical understanding of CAPEX and OPEX estimation",
      "Confidence interpreting NPV, IRR and payback",
      "Practical sensitivity and scenario-analysis skills",
      "Working knowledge of life cycle assessment",
      "Improved ability to identify environmental hotspots",
      "Greater confidence comparing competing technologies",
      "Stronger basis for scale-up and investment decisions",
      "Reusable tools for clean-tech project evaluation"
    ],
    "industries": [
      "Clean technology",
      "Renewable energy",
      "Water and wastewater",
      "Waste valorisation",
      "Circular economy",
      "Advanced materials",
      "Low-carbon manufacturing",
      "Bio-based technologies",
      "Energy storage",
      "Industrial decarbonisation",
      "Technology commercialisation",
      "Technical due diligence"
    ],
    "finalCtaTitle": "Ready to Evaluate Clean Technologies with Greater Confidence?",
    "finalCtaDescription": "Build practical capability in techno-economic analysis, life cycle assessment and integrated clean-tech decision-making."
  },
  {
    "slug": "computer-aided-design-and-visualisation",
    "courseNumber": 6,
    "title": "Computer-Aided Design and Visualisation",
    "category": "Applied Course",
    "duration": "~40 h",
    "moduleCount": 8,
    "summary": "Develop practical capability in digital design, technical drafting and visual communication, progressing from CAD fundamentals and 2D drawing to material-informed design and an integrated applied project.",
    "keyAreas": [
      "CAD fundamentals",
      "2D drawing",
      "Technical drafting",
      "Dimensioning",
      "Drawing organisation",
      "Visualisation",
      "Materials",
      "Applied design"
    ],
    "about": [
      "Computer-Aided Design and Visualisation develops practical skills in digital design, technical drawing and visual communication using computer-aided design methods.",
      "Participants progress from fundamental CAD concepts and geometric construction through technical drafting, dimensions and annotations, drawing organisation, design visualisation, material considerations and basic design calculations.",
      "The course places strong emphasis on accuracy, design communication and practical application, culminating in an integrated CAD project that brings the major course elements together.",
      "Website note: keep the course software-neutral until the exact platform or platforms used for delivery are confirmed."
    ],
    "learn": [
      "Explain the fundamental concepts and workflow of computer-aided design.",
      "Set up and organise digital drawings appropriately.",
      "Create accurate 2D geometry using CAD tools.",
      "Apply common technical-drawing conventions.",
      "Develop dimensioned and annotated drawings.",
      "Apply appropriate scales, views and drawing layouts.",
      "Organise drawings using layers, reusable elements and templates.",
      "Review drawings for accuracy, consistency and completeness.",
      "Develop clear visual representations of design concepts.",
      "Consider material properties in basic design decisions.",
      "Apply fundamental calculations to support dimensional decisions.",
      "Translate a defined design brief into a structured CAD solution.",
      "Present completed technical and visual design outputs professionally."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Fundamentals of Computer-Aided Design",
        "duration": "~4 h",
        "topics": [
          "Role of CAD",
          "Digital design workflows",
          "CAD workspace and interface",
          "Coordinate systems",
          "Units and scales",
          "Drawing setup",
          "Basic geometric entities",
          "Selection and editing",
          "Drawing precision",
          "File organisation"
        ]
      },
      {
        "number": 2,
        "title": "2D Drawing and Geometric Construction",
        "duration": "~5 h",
        "topics": [
          "Lines, arcs and circles",
          "Polygons and geometric shapes",
          "Coordinate input",
          "Object snapping",
          "Offsets",
          "Trimming and extending",
          "Fillets and chamfers",
          "Arrays and repetition",
          "Construction geometry",
          "Precision drawing techniques"
        ]
      },
      {
        "number": 3,
        "title": "Technical Drafting and Drawing Communication",
        "duration": "~5 h",
        "topics": [
          "Technical-drawing principles",
          "Orthographic projection",
          "Plan and elevation views",
          "Sectional views",
          "Dimensions",
          "Annotations",
          "Line conventions",
          "Drawing scales",
          "Symbols and notes",
          "Title blocks",
          "Drawing readability"
        ]
      },
      {
        "number": 4,
        "title": "Layers, Blocks, Templates and Drawing Standards",
        "duration": "~4.5 h",
        "topics": [
          "Layer management",
          "Object properties",
          "Line weights",
          "Reusable drawing elements",
          "Blocks and symbols",
          "Templates",
          "Standardised layouts",
          "File naming",
          "Revision-control concepts",
          "Drawing-quality review"
        ]
      },
      {
        "number": 5,
        "title": "Design Visualisation and Rendering",
        "duration": "~5 h",
        "topics": [
          "Purpose of design visualisation",
          "View selection",
          "Perspective",
          "Surface representation",
          "Material appearance",
          "Lighting fundamentals",
          "Rendering principles",
          "Design alternatives",
          "Presentation views",
          "Technical versus non-technical communication"
        ]
      },
      {
        "number": 6,
        "title": "Materials and Design Considerations",
        "duration": "~4 h",
        "topics": [
          "Material-selection fundamentals",
          "Material properties",
          "Strength and durability considerations",
          "Environmental exposure",
          "Manufacturability",
          "Availability",
          "Cost",
          "Surface finish",
          "Sustainability considerations",
          "Using material data to support design decisions"
        ]
      },
      {
        "number": 7,
        "title": "Design Calculations and Dimensional Decision-Making",
        "duration": "~4 h",
        "topics": [
          "Units and dimensional consistency",
          "Basic geometric calculations",
          "Areas and volumes",
          "Material quantities",
          "Dimensional feasibility",
          "Selected sizing considerations",
          "Design assumptions",
          "Translating calculations into drawing decisions",
          "Documenting calculation inputs and outputs"
        ]
      },
      {
        "number": 8,
        "title": "Integrated CAD Design Project",
        "duration": "~8.5 h",
        "topics": [
          "Design brief",
          "Concept development",
          "Geometric construction",
          "Technical drawing",
          "Material considerations",
          "Dimensional checks",
          "Visualisation",
          "Final presentation"
        ]
      }
    ],
    "audience": [
      "Designers and drafters",
      "Engineering and technology students",
      "Technical professionals",
      "Manufacturing and fabrication personnel",
      "Product-development personnel",
      "Project and technical officers",
      "Construction and infrastructure personnel",
      "Technical entrepreneurs",
      "Professionals involved in technical documentation",
      "Individuals seeking practical CAD and digital-design capability"
    ],
    "prerequisites": [
      "Basic computer literacy",
      "Basic numerical and spatial-reasoning skills",
      "General familiarity with technical drawings or design concepts is helpful"
    ],
    "prereqNote": "No previous CAD experience is required.",
    "practicalIntro": "This course is strongly hands-on, with participants developing practical CAD and design capability throughout.",
    "practicalItems": [
      {
        "title": "CAD Setup Exercise",
        "description": "Create and organise a digital drawing environment."
      },
      {
        "title": "Geometric Construction Exercise",
        "description": "Produce accurate 2D geometry from defined dimensional information."
      },
      {
        "title": "Technical Drawing Exercise",
        "description": "Develop a complete technical drawing with dimensions, annotations and appropriate views."
      },
      {
        "title": "Drawing Organisation Exercise",
        "description": "Create structured layers, reusable elements and a standardised drawing template."
      },
      {
        "title": "Visualisation Exercise",
        "description": "Prepare visual representations of a design using appropriate views and rendering approaches."
      },
      {
        "title": "Material Selection Exercise",
        "description": "Compare candidate materials and justify a preferred design choice."
      },
      {
        "title": "Design Calculation Exercise",
        "description": "Apply selected calculations and incorporate the results into the drawing."
      }
    ],
    "capstoneTitle": "",
    "caseParagraphs": [
      "The course concludes with an integrated CAD design project."
    ],
    "workflow": [
      "Design brief",
      "Concept development",
      "Geometric construction",
      "Technical drawing",
      "Material considerations",
      "Dimensional checks",
      "Visualisation",
      "Final presentation"
    ],
    "finalDeliverables": [
      "Design brief",
      "Concept development",
      "Working drawings",
      "Final technical drawing",
      "Dimensions and annotations",
      "Material considerations",
      "Selected calculations",
      "Visualisation or rendering",
      "Final design presentation"
    ],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "CAD Drawing Setup Checklist",
      "Technical Drawing Standards Guide",
      "Layer and File Organisation Template",
      "Dimensioning and Annotation Checklist",
      "Material Selection Worksheet",
      "Design Calculation Worksheet",
      "Drawing Quality Review Checklist",
      "CAD Project Planning Template"
    ],
    "gainIntro": "Develop practical capability in computer-aided design, technical drafting and design visualisation while building a structured workflow that can be applied to future technical and commercial design projects.",
    "gains": [
      "Practical CAD drawing capability",
      "Stronger technical-drafting skills",
      "Greater confidence developing accurate digital drawings",
      "Improved drawing-organisation practices",
      "Stronger visual-communication capability",
      "Practical understanding of material-informed design",
      "Experience incorporating calculations into design decisions",
      "Completion of an integrated CAD project"
    ],
    "industries": [
      "Product design",
      "Manufacturing",
      "Fabrication",
      "Engineering services",
      "Construction",
      "Infrastructure",
      "Industrial design",
      "Technical documentation",
      "Equipment design",
      "Project development"
    ],
    "finalCtaTitle": "Ready to Build Practical CAD and Design Capability?",
    "finalCtaDescription": "Develop the skills to create accurate digital drawings, communicate design intent and produce professional technical and visual outputs."
  },
  {
    "slug": "advanced-carbon-and-energy-management",
    "courseNumber": 7,
    "title": "Advanced Carbon and Energy Management",
    "category": "Integrated Program",
    "duration": "~80 h",
    "moduleCount": 12,
    "summary": "Develop integrated capability across organisational energy performance and carbon management—from energy assessment and greenhouse-gas accounting through efficiency, low-carbon technologies, project economics, monitoring and implementation.",
    "keyAreas": [
      "Energy management",
      "Energy auditing",
      "Carbon accounting",
      "Scope 1, 2 and 3",
      "Energy efficiency",
      "Renewable energy",
      "Decarbonisation",
      "Project economics",
      "Performance monitoring",
      "Governance"
    ],
    "about": [
      "Advanced Carbon and Energy Management equips participants with the technical and strategic capability to evaluate, manage and improve organisational energy performance and greenhouse-gas emissions within a single integrated framework.",
      "The program connects energy assessment, carbon accounting, efficiency improvement, renewable and low-carbon technologies, project economics, performance monitoring and organisational implementation.",
      "Participants learn how to move from fragmented energy and emissions data toward structured decision-making, practical decarbonisation actions and sustained performance improvement.",
      "The emphasis is on applied carbon and energy management, not sustainability theory alone."
    ],
    "learn": [
      "Explain the relationship between energy performance, greenhouse-gas emissions and organisational strategy.",
      "Identify major energy users and establish appropriate energy-performance indicators.",
      "Develop organisational energy and emissions baselines.",
      "Apply structured energy-audit methods.",
      "Develop and interpret Scope 1, Scope 2 and relevant Scope 3 inventories.",
      "Evaluate data quality, assumptions and uncertainty.",
      "Identify energy-efficiency and demand-reduction opportunities.",
      "Evaluate renewable-energy, electrification and low-carbon energy options.",
      "Identify major emissions hotspots and decarbonisation levers.",
      "Develop structured carbon and energy reduction pathways.",
      "Evaluate improvement projects using technical and economic criteria.",
      "Apply CAPEX, OPEX, payback and NPV considerations.",
      "Establish appropriate carbon and energy KPIs.",
      "Develop monitoring and measurement approaches.",
      "Design governance and implementation structures.",
      "Prioritise competing improvement initiatives.",
      "Communicate carbon and energy performance effectively.",
      "Develop an integrated organisational carbon and energy management roadmap."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Energy and Carbon Management Fundamentals",
        "duration": "~6 h",
        "topics": [
          "Energy and emissions fundamentals",
          "Energy-carbon relationship",
          "Organisational boundaries",
          "Management objectives",
          "Operational performance",
          "Carbon intensity",
          "Energy intensity",
          "Baselines",
          "Performance indicators",
          "Strategic context"
        ]
      },
      {
        "number": 2,
        "title": "Energy Systems, Consumption and Performance",
        "duration": "~6 h",
        "topics": [
          "Energy flows",
          "Electricity and fuel consumption",
          "Major energy users",
          "Boilers and steam",
          "Motors and drives",
          "Pumps",
          "Compressed air",
          "HVAC and refrigeration",
          "Process heating",
          "Load profiles",
          "Energy intensity",
          "Performance benchmarking"
        ]
      },
      {
        "number": 3,
        "title": "Energy Auditing and Opportunity Assessment",
        "duration": "~6.5 h",
        "topics": [
          "Audit scope and objectives",
          "Historical energy data",
          "Facility walkthroughs",
          "Metering and measurements",
          "Utility-system review",
          "Energy-loss identification",
          "No-cost and low-cost measures",
          "Capital improvement measures",
          "Savings estimation",
          "Opportunity registers",
          "Audit reporting"
        ]
      },
      {
        "number": 4,
        "title": "Organisational Carbon Accounting",
        "duration": "~6.5 h",
        "topics": [
          "GHG accounting principles",
          "Organisational boundaries",
          "Operational boundaries",
          "Scope 1",
          "Scope 2",
          "Scope 3",
          "Activity data",
          "Emission factors",
          "Inventory periods",
          "Baseline years",
          "Inventory consolidation"
        ]
      },
      {
        "number": 5,
        "title": "Carbon Data, Emission Factors and Inventory Quality",
        "duration": "~6 h",
        "topics": [
          "Data-quality principles",
          "Source-data evaluation",
          "Emission-factor selection",
          "Assumptions",
          "Estimation methods",
          "Missing data",
          "Uncertainty",
          "Documentation",
          "Audit trails",
          "Internal controls",
          "Inventory review"
        ]
      },
      {
        "number": 6,
        "title": "Energy Efficiency and Demand Reduction",
        "duration": "~7 h",
        "topics": [
          "Process optimisation",
          "Utility efficiency",
          "Equipment loading",
          "Demand reduction",
          "Heat recovery",
          "Energy-loss reduction",
          "Operating discipline",
          "Maintenance impacts",
          "Controls and automation",
          "Low-cost versus capital measures",
          "Efficiency prioritisation"
        ]
      },
      {
        "number": 7,
        "title": "Renewable Energy and Low-Carbon Energy Systems",
        "duration": "~6.5 h",
        "topics": [
          "Renewable electricity",
          "Onsite generation",
          "Solar and wind considerations",
          "Electrification",
          "Energy storage",
          "Fuel switching",
          "Low-carbon fuels",
          "Grid interaction",
          "Technical constraints",
          "Operational integration",
          "Technology-selection considerations"
        ]
      },
      {
        "number": 8,
        "title": "Decarbonisation Strategy and Pathways",
        "duration": "~7 h",
        "topics": [
          "Emissions hotspots",
          "Reduction levers",
          "Target-setting principles",
          "Abatement pathways",
          "Sequencing initiatives",
          "Short-, medium- and long-term actions",
          "Operational constraints",
          "Technology readiness",
          "Scenario development",
          "Decarbonisation roadmap design"
        ]
      },
      {
        "number": 9,
        "title": "Techno-Economic Evaluation of Carbon and Energy Projects",
        "duration": "~7 h",
        "topics": [
          "CAPEX",
          "OPEX",
          "Energy savings",
          "Carbon savings",
          "Cost avoidance",
          "Simple payback",
          "NPV",
          "Lifecycle considerations",
          "Risk",
          "Sensitivity",
          "Project comparison",
          "Prioritisation"
        ]
      },
      {
        "number": 10,
        "title": "Carbon and Energy Performance Monitoring",
        "duration": "~6 h",
        "topics": [
          "Energy KPIs",
          "Carbon KPIs",
          "Metering",
          "Sub-metering",
          "Measurement and verification",
          "Dashboards",
          "Variance analysis",
          "Target tracking",
          "Corrective action",
          "Performance reporting",
          "Continuous improvement"
        ]
      },
      {
        "number": 11,
        "title": "Governance, Reporting and Organisational Implementation",
        "duration": "~6 h",
        "topics": [
          "Roles and responsibilities",
          "Management structures",
          "Policies",
          "Accountability",
          "Internal reporting",
          "Stakeholder communication",
          "Decision rights",
          "Governance processes",
          "Implementation planning",
          "Change management",
          "Embedding performance into operations"
        ]
      },
      {
        "number": 12,
        "title": "Integrated Carbon and Energy Management Capstone",
        "duration": "~9.5 h",
        "topics": [
          "Energy baseline",
          "Carbon inventory",
          "Hotspot analysis",
          "Energy-efficiency opportunities",
          "Low-carbon options",
          "Economic evaluation",
          "Prioritisation",
          "Implementation roadmap",
          "KPI framework"
        ]
      }
    ],
    "audience": [
      "Energy and carbon managers",
      "Sustainability and ESG professionals",
      "Process and chemical engineers",
      "Mechanical and electrical engineers",
      "Environmental engineers",
      "Operations and facilities managers",
      "Utility specialists",
      "Decarbonisation practitioners",
      "Project and development engineers",
      "Technical consultants",
      "HSE and environmental managers",
      "Corporate strategy and performance professionals",
      "Technical leaders responsible for energy, emissions or resource efficiency"
    ],
    "prerequisites": [
      "Basic familiarity with engineering, energy, operations, environmental management or sustainability",
      "Basic numerical and spreadsheet skills",
      "General understanding of organisational energy use or greenhouse-gas emissions"
    ],
    "prereqNote": "Prior exposure to energy auditing or carbon accounting is helpful but not mandatory. Participants should be comfortable working with technical data, calculations and applied case studies.",
    "practicalIntro": "Participants apply the program through substantial analytical and decision-making exercises.",
    "practicalItems": [
      {
        "title": "Energy Baseline Development",
        "description": "Build an organisational energy-performance baseline."
      },
      {
        "title": "Major Energy User Assessment",
        "description": "Identify significant energy users and priority performance gaps."
      },
      {
        "title": "Carbon Inventory Exercise",
        "description": "Develop Scope 1, Scope 2 and selected Scope 3 calculations."
      },
      {
        "title": "Energy Audit Exercise",
        "description": "Assess a simulated facility and identify efficiency opportunities."
      },
      {
        "title": "Decarbonisation Opportunity Assessment",
        "description": "Compare efficiency, electrification, renewable-energy and fuel-switching options."
      },
      {
        "title": "Project Economics Exercise",
        "description": "Evaluate CAPEX, OPEX, savings, payback and NPV."
      },
      {
        "title": "Scenario and Pathway Analysis",
        "description": "Compare alternative decarbonisation pathways."
      },
      {
        "title": "KPI Development Exercise",
        "description": "Design an integrated carbon and energy performance framework."
      }
    ],
    "capstoneTitle": "Integrated Carbon and Energy Management Plan",
    "caseParagraphs": [
      "The program concludes with a substantial organisational scenario containing energy-consumption data, fuel use, electricity use, production/activity data, utility-system information, Scope 1 and 2 emissions, selected Scope 3 activities, operational constraints, improvement opportunities and indicative project costs."
    ],
    "workflow": [
      "Energy baseline",
      "Carbon inventory",
      "Hotspot analysis",
      "Efficiency opportunities",
      "Low-carbon options",
      "Project economics",
      "Prioritisation",
      "Implementation roadmap",
      "KPI and monitoring",
      "Governance framework"
    ],
    "finalDeliverables": [
      "Energy baseline",
      "Greenhouse-gas inventory",
      "Major energy users",
      "Emissions hotspots",
      "Efficiency opportunities",
      "Low-carbon technology options",
      "Preliminary project economics",
      "Prioritisation framework",
      "Implementation phases",
      "Carbon and energy KPIs",
      "Monitoring approach",
      "Governance responsibilities",
      "Management roadmap"
    ],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "Energy Baseline Template",
      "Major Energy User Register",
      "Energy Audit Checklist",
      "GHG Inventory Workbook",
      "Scope 3 Screening Matrix",
      "Emission Factor Register",
      "Carbon Hotspot Assessment Template",
      "Decarbonisation Opportunity Matrix",
      "Project Economics Worksheet",
      "Scenario Analysis Template",
      "Carbon and Energy KPI Dashboard Template",
      "Implementation Roadmap Template"
    ],
    "gainIntro": "Develop the capability to integrate energy performance, greenhouse-gas accounting, efficiency improvement, low-carbon technologies and project evaluation into a practical organisational management framework.",
    "gains": [
      "Stronger energy-management capability",
      "Practical carbon-accounting experience",
      "Ability to identify efficiency and decarbonisation opportunities",
      "Improved understanding of renewable and low-carbon energy options",
      "Stronger project-economics capability",
      "Practical KPI and monitoring skills",
      "Structured implementation and governance methods",
      "Experience developing an integrated carbon and energy roadmap"
    ],
    "industries": [
      "Manufacturing",
      "Energy and utilities",
      "Mining and resources",
      "Chemicals and petrochemicals",
      "Oil and gas",
      "Water and wastewater",
      "Food and beverage",
      "Pharmaceuticals",
      "Infrastructure",
      "Transport and logistics",
      "Commercial facilities",
      "Public-sector organisations",
      "Multi-site operations"
    ],
    "finalCtaTitle": "Ready to Integrate Carbon and Energy Performance?",
    "finalCtaDescription": "Build the capability to connect energy efficiency, carbon accounting, decarbonisation and project economics into a structured management program."
  },
  {
    "slug": "advanced-process-optimisation-and-operational-performance",
    "courseNumber": 8,
    "title": "Advanced Process Optimisation and Operational Performance",
    "category": "Integrated Program",
    "duration": "~70 h",
    "moduleCount": 10,
    "summary": "Develop advanced capability to diagnose, improve and sustain operational performance by integrating process optimisation, reliability, quality, resource efficiency, improvement economics and structured implementation.",
    "keyAreas": [
      "Process performance",
      "Bottlenecks",
      "Root-cause analysis",
      "Reliability",
      "Quality",
      "Resource efficiency",
      "Improvement economics",
      "Continuous improvement",
      "Implementation"
    ],
    "about": [
      "Advanced Process Optimisation and Operational Performance develops a systems-level approach to improving performance across process-based operations.",
      "The program integrates process analysis, bottleneck identification, variability reduction, reliability, quality, yield improvement, resource efficiency, project economics and continuous improvement into one practical framework.",
      "Participants learn how to move from isolated performance problems toward a structured improvement system that connects technical analysis with operational priorities and business value.",
      "The emphasis is on measurable performance improvement and sustained implementation, rather than optimisation theory alone."
    ],
    "learn": [
      "Evaluate operational performance using technical, production, quality, reliability and resource indicators.",
      "Establish meaningful performance baselines and KPI frameworks.",
      "Map processes and identify major losses, constraints and inefficiencies.",
      "Diagnose bottlenecks and develop practical debottlenecking options.",
      "Analyse process variability and apply structured root-cause methods.",
      "Identify opportunities to improve yield and quality.",
      "Interpret reliability and downtime data in an operational-performance context.",
      "Evaluate energy, utility and resource performance alongside production objectives.",
      "Quantify the potential value of improvement opportunities.",
      "Apply basic project economics to optimisation initiatives.",
      "Prioritise competing opportunities using technical, economic and operational criteria.",
      "Develop structured implementation plans.",
      "Establish monitoring approaches to verify improvement.",
      "Build continuous-improvement systems that help sustain gains.",
      "Integrate multiple initiatives into an operational-performance roadmap."
    ],
    "curriculum": [
      {
        "number": 1,
        "title": "Integrated Process and Operational Performance",
        "duration": "~6 h",
        "topics": [
          "Operational-performance fundamentals",
          "Throughput",
          "Yield",
          "Quality",
          "Cost",
          "Resource intensity",
          "Capacity utilisation",
          "Reliability",
          "Availability",
          "Performance baselines",
          "KPI architecture",
          "Leading and lagging indicators",
          "Performance trade-offs"
        ]
      },
      {
        "number": 2,
        "title": "Process Mapping, Mass Balance and Performance Diagnosis",
        "duration": "~7 h",
        "topics": [
          "Process boundaries",
          "Process-flow mapping",
          "Inputs and outputs",
          "Material losses",
          "Mass-balance fundamentals",
          "Energy considerations",
          "Critical process variables",
          "Data sources",
          "Baselines",
          "Gap analysis",
          "Abnormal performance",
          "Translating data into operational insight"
        ]
      },
      {
        "number": 3,
        "title": "Bottlenecks, Constraints and Capacity Improvement",
        "duration": "~7 h",
        "topics": [
          "Bottleneck identification",
          "Capacity constraints",
          "Equipment limitations",
          "Process constraints",
          "Utility constraints",
          "Scheduling constraints",
          "Constraint interaction",
          "Debottlenecking",
          "Throughput improvement",
          "Capacity utilisation",
          "Capital expansion versus operational improvement",
          "Unintended consequences"
        ]
      },
      {
        "number": 4,
        "title": "Variability, Root Cause and Process Stability",
        "duration": "~7 h",
        "topics": [
          "Process variability",
          "Feed variability",
          "Equipment variability",
          "Human and procedural factors",
          "Process stability",
          "Trend analysis",
          "Basic statistical thinking",
          "Pareto analysis",
          "5 Whys",
          "Cause-and-effect analysis",
          "Root-cause verification",
          "Symptom versus cause"
        ]
      },
      {
        "number": 5,
        "title": "Quality, Yield and Loss Reduction",
        "duration": "~7 h",
        "topics": [
          "Quality-performance relationships",
          "Yield loss",
          "Rework",
          "Rejects",
          "Product giveaway",
          "Material losses",
          "Waste generation",
          "Quality variation",
          "Cost of poor quality",
          "Critical-to-quality variables",
          "Process capability concepts",
          "Loss-reduction opportunities"
        ]
      },
      {
        "number": 6,
        "title": "Reliability, Maintenance and Operational Availability",
        "duration": "~7 h",
        "topics": [
          "Reliability fundamentals",
          "Availability",
          "Downtime",
          "Planned and unplanned maintenance",
          "Failure patterns",
          "Equipment criticality",
          "MTBF",
          "MTTR",
          "Maintenance KPIs",
          "Reliability-centred thinking",
          "Operational discipline",
          "Reliability-performance improvement"
        ]
      },
      {
        "number": 7,
        "title": "Resource, Energy and Utility Performance",
        "duration": "~7 h",
        "topics": [
          "Energy intensity",
          "Water use",
          "Utility consumption",
          "Raw-material efficiency",
          "Waste streams",
          "Steam",
          "Compressed air",
          "Pumping",
          "Resource-performance indicators",
          "Utility losses",
          "Operational improvements",
          "Capital improvements",
          "Integrated resource optimisation"
        ]
      },
      {
        "number": 8,
        "title": "Process Improvement Economics and Prioritisation",
        "duration": "~7 h",
        "topics": [
          "CAPEX",
          "OPEX",
          "Cost savings",
          "Production-value gains",
          "Payback",
          "NPV fundamentals",
          "Risk and uncertainty",
          "Feasibility assessment",
          "Opportunity ranking",
          "Multi-criteria decision-making",
          "Improvement portfolio development",
          "High-impact project selection"
        ]
      },
      {
        "number": 9,
        "title": "Implementation and Continuous Improvement Systems",
        "duration": "~7 h",
        "topics": [
          "Improvement charters",
          "Action planning",
          "Roles and accountability",
          "Change management",
          "Standardised work",
          "SOP integration",
          "PDCA",
          "Performance reviews",
          "Escalation",
          "Governance",
          "Sustaining gains",
          "Preventing regression",
          "Improvement culture"
        ]
      },
      {
        "number": 10,
        "title": "Integrated Operational Performance Capstone",
        "duration": "~8 h",
        "topics": [
          "Baseline assessment",
          "Process mapping",
          "Bottleneck analysis",
          "Root-cause diagnosis",
          "Reliability review",
          "Quality and yield review",
          "Resource-efficiency analysis",
          "Improvement economics",
          "Prioritisation",
          "Implementation roadmap"
        ]
      }
    ],
    "audience": [
      "Process and chemical engineers",
      "Production and manufacturing engineers",
      "Operations engineers and managers",
      "Plant and facility engineers",
      "Continuous-improvement professionals",
      "Operational-excellence personnel",
      "Maintenance and reliability professionals",
      "Quality and performance specialists",
      "Technical supervisors and team leaders",
      "Project engineers",
      "Process-improvement consultants",
      "Technical managers responsible for productivity, efficiency or operational performance"
    ],
    "prerequisites": [
      "Basic familiarity with process-based operations",
      "General understanding of process variables, KPIs and operational data",
      "Basic numerical and spreadsheet skills",
      "Some exposure to production, engineering, maintenance or operations is helpful"
    ],
    "prereqNote": "Prior formal training in process optimisation is useful but not required.",
    "practicalIntro": "Participants apply the program through structured diagnostic, quantitative and decision-making exercises.",
    "practicalItems": [
      {
        "title": "Performance Framework Exercise",
        "description": "Develop a KPI framework for a simulated operation."
      },
      {
        "title": "Process Mapping Exercise",
        "description": "Map major flows, variables and performance losses."
      },
      {
        "title": "Bottleneck Analysis",
        "description": "Identify the controlling constraint and develop debottlenecking options."
      },
      {
        "title": "Root-Cause Investigation",
        "description": "Analyse recurring underperformance using structured diagnostic methods."
      },
      {
        "title": "Quality and Yield Assessment",
        "description": "Evaluate reject, loss and yield data."
      },
      {
        "title": "Reliability Assessment",
        "description": "Interpret downtime and equipment-performance data."
      },
      {
        "title": "Resource Efficiency Exercise",
        "description": "Identify high-value energy, utility and material-efficiency opportunities."
      },
      {
        "title": "Improvement Economics Exercise",
        "description": "Evaluate and rank competing optimisation projects."
      }
    ],
    "capstoneTitle": "Integrated Operational Performance Improvement Plan",
    "caseParagraphs": [
      "The program concludes with a substantial operating scenario containing process-flow information, production data, quality data, downtime records, utility consumption, material losses, cost information, operating constraints and recurring process issues."
    ],
    "workflow": [
      "Baseline assessment",
      "Process mapping",
      "Bottleneck analysis",
      "Root-cause diagnosis",
      "Reliability review",
      "Quality & yield review",
      "Resource efficiency",
      "Improvement economics",
      "Prioritisation",
      "Implementation roadmap"
    ],
    "finalDeliverables": [
      "Baseline performance assessment",
      "KPI framework",
      "Bottleneck analysis",
      "Verified root causes",
      "Quality and yield losses",
      "Reliability issues",
      "Resource-efficiency opportunities",
      "Improvement economics",
      "Prioritised initiative portfolio",
      "Implementation roadmap",
      "Monitoring approach",
      "Governance responsibilities"
    ],
    "resourcesNote": "Representative resources for the website (the full internal toolkit may be broader):",
    "resources": [
      "Operational Performance Baseline Template",
      "Process Mapping Worksheet",
      "KPI Framework Template",
      "Bottleneck Analysis Tool",
      "Root-Cause Analysis Worksheet",
      "Yield and Loss Assessment Template",
      "Reliability Performance Tracker",
      "Resource Efficiency Assessment Tool",
      "Improvement Economics Worksheet",
      "Opportunity Prioritisation Matrix",
      "Implementation Roadmap Template"
    ],
    "gainIntro": "Develop a systems-level approach to diagnosing and improving process and operational performance while connecting technical improvement opportunities with reliability, quality, resource use and business value.",
    "gains": [
      "Stronger process-performance analysis capability",
      "Practical bottleneck and root-cause skills",
      "Improved understanding of quality, yield and reliability",
      "Greater confidence interpreting operational data",
      "Ability to evaluate resource-efficiency opportunities",
      "Stronger improvement-economics capability",
      "Structured project-prioritisation methods",
      "Implementation and monitoring tools",
      "Experience developing an integrated operational-performance roadmap"
    ],
    "industries": [
      "Manufacturing",
      "Chemicals and petrochemicals",
      "Food and beverage",
      "Mining and mineral processing",
      "Water and wastewater",
      "Energy and utilities",
      "Oil and gas",
      "Pharmaceuticals",
      "Materials processing",
      "Other process-based operations"
    ],
    "finalCtaTitle": "Ready to Improve Process and Operational Performance?",
    "finalCtaDescription": "Build the capability to diagnose performance losses, prioritise high-value improvements and implement sustainable operational change."
  }
]
