import { getValues } from "@/lib/get-values"
import { ValueCard } from "./value-card"

/**
 * About page values band: six principle cards driven by the `values`
 * Payload collection, in a left-aligned header (unlike the centered headers
 * used elsewhere on the page) to match the source design.
 */
export async function Values() {
  const values = await getValues()

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Core Values
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
