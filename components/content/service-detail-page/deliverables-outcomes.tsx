import { CircleCheck } from "lucide-react"

export function DeliverablesOutcomes({
  deliverables,
  outcomes,
}: {
  deliverables: string[]
  outcomes: string[]
}) {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            Typical Deliverables
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            What You Receive
          </h2>
          <ul className="mt-6 space-y-3">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-2 text-foreground/70">
                <span aria-hidden className="text-foreground/40">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Client Value and Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            What You Gain
          </h2>
          <ul className="mt-6 space-y-3">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CircleCheck
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-brand"
                />
                <span className="text-foreground/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
