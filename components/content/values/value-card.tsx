import { resolveIcon } from "@/lib/icon-map"
import type { Value } from "@/payload-types"

/**
 * Values card. Entrance stagger and the periodic sheen are driven by
 * `--val-i` and gated on the Reveal wrapper's `data-revealed`; hover
 * states match the lift treatment used by cards elsewhere on the site.
 * See globals.css `.val-*`.
 */
export function ValueCard({ value, index }: { value: Value; index: number }) {
  const Icon = resolveIcon(value.icon)

  return (
    <article
      className="val-card group relative overflow-hidden border border-border bg-[#F4F6F9] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-background hover:shadow-sm"
      style={{ ["--val-i" as string]: index }}
    >
      {/* Periodic light sweep. */}
      <span
        aria-hidden
        className="val-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      {/* Large faint index watermark. */}
      <span
        aria-hidden
        className="absolute top-4 right-5 text-5xl font-bold text-foreground/[0.045] transition-colors duration-300 group-hover:text-brand/10"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex size-11 items-center justify-center">
        <span aria-hidden className="val-ring absolute size-11 rounded-sm bg-brand/30" />
        <span className="relative flex size-11 items-center justify-center rounded-sm bg-[#132438] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon aria-hidden className="size-4 text-emerald-200" />
        </span>
      </div>

      <h3 className="relative mt-8 text-xl font-semibold text-foreground">
        {value.title}
      </h3>

      {/* Gold rule that grows on hover. */}
      <span
        aria-hidden
        className="relative mt-3 block h-0.5 w-8 bg-[#D9A441] transition-all duration-300 group-hover:w-16"
      />

      <p className="relative mt-3 text-foreground/60">{value.description}</p>
    </article>
  )
}
