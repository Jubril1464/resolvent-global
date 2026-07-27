const TECHNICAL_FOUNDATION_SKILLS = [
  "Research & development",
  "Advanced engineering materials",
  "Process engineering",
  "Water/wastewater treatment",
  "CAPEX / continuous improvement",
  "TEA/LCA",
  "Process simulation & optimization",
  "Automation & digital twins",
  "Industrial scale-up",
  "CCUS",
  "Energy storage & sustainability",
  "Renewables",
  "Waste valorization",
  "Critical materials and mining",
  "Industrial catalysis & reactors",
  "Process & equipment design",
  "Industrial scale-up & optimization",
  "Circular economy & sustainability",
]

/**
 * About page technical-foundation band: a flat, wrapping list of technical
 * competency tags. Order follows TECHNICAL_FOUNDATION_SKILLS; wrapping into
 * rows is left to the browser rather than hard-coded, since it varies by
 * viewport width.
 */
export function TechnicalFoundation() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Technical Foundation
        </h2>

        <ul className="mt-8 flex flex-wrap gap-3">
          {TECHNICAL_FOUNDATION_SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border px-5 py-3 text-foreground/70"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
