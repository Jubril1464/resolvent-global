import Image from "next/image"

export function IndustryVisual({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#0C203A]">
      <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
    </div>
  )
}
