import { cn } from "@/lib/utils"

const GRID_SIZE = 80

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

/**
 * Dark-surface title band for inner pages (About, Services, Industries,
 * Contact, ...). Reuses the hero's grid-line texture, masked to a blank
 * band through the vertical center so the heading/description sit on a
 * clean background.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[480px] w-full items-center justify-center overflow-hidden bg-[#0C203A] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
          maskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 45%, transparent 55%, black 65%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 45%, transparent 55%, black 65%, black 100%)",
        }}
      />

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
