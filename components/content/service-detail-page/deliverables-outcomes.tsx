export function DeliverablesOutcomes({
  deliverables,
  outcomes,
}: {
  deliverables: string
  outcomes: string
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
          <p className="mt-6 text-foreground/70">{deliverables}</p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            Client Value and Outcomes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
            What You Gain
          </h2>
          <p className="mt-6 text-foreground/70">{outcomes}</p>
        </div>
      </div>
    </section>
  )
}
