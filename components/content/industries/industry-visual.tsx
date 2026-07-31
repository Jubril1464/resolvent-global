import Image from "next/image"

import type { Media } from "@/payload-types"

export function IndustryVisual({ image }: { image: Media }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0C203A]">
      {image.url ? (
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
      ) : null}
    </div>
  )
}
