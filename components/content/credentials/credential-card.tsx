import { resolveIcon } from "@/lib/icon-map"
import type { Credential } from "@/payload-types"

export function CredentialCard({ credential }: { credential: Credential }) {
  const Icon = resolveIcon(credential.icon)

  return (
    <article className="border border-border bg-background p-6">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand/10 border border-[#0B7A5326]">
        <Icon aria-hidden className="size-5 text-brand" strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">{credential.title}</h3>
      <p className="mt-1.5 text-sm text-foreground/60">{credential.subtitle}</p>
    </article>
  )
}
