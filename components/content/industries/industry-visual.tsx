import type { LucideIcon } from "lucide-react"

const GRID_SIZE = 48

/**
 * On-brand placeholder for the industry photo: a gradient + grid texture
 * (matching the hero treatment) with the industry's icon watermarked in the
 * center. Swap for a `next/image` photo per industry once real photography
 * is available — everything else in the explorer already expects a fixed
 * aspect-video box, so that's a drop-in replacement here.
 */
export function IndustryVisual({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#0C203A] to-[#0B7A53]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Icon aria-hidden className="size-24 text-white/25" strokeWidth={1} />
      </div>
    </div>
  )
}
