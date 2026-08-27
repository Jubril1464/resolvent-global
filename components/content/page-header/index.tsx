import { cn } from "@/lib/utils"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

/**
 * Dark-surface title band for inner pages (About, Services, Industries,
 * Contact, ...). A flat navy field — the grid-line texture it used to carry
 * was removed sitewide, so the heading and description sit on plain colour.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden bg-[#0C203A] text-white">
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-wide text-[#D9A441] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={cn(
            "text-4xl font-bold tracking-tight sm:text-5xl",
            eyebrow && "mt-3"
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
