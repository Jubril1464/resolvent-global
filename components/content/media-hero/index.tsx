import Image from "next/image"

/**
 * Shared media hero for inner pages (About, Services, Training, Industries,
 * Projects). Accepts either a looping video or a still image as its backdrop;
 * both get the same clip-path wipe, ken-burns drift and staggered copy.
 *
 * Kept separate from the plain `PageHeader`, which the coming-soon pages
 * still use — folding media into that shared component would force a video
 * onto placeholder pages that have no business carrying one.
 *
 * Motion lives in globals.css (`.vhero-*`) and is disabled under
 * prefers-reduced-motion, where the hero renders in its final shape with no
 * movement.
 */
export function MediaHero({
  eyebrow,
  title,
  description,
  videoSrc,
  imageSrc,
  imageAlt = "",
  poster = "/images/hero-image.png",
  chips,
  chipsLabel,
  decoration,
}: {
  /** Omit to render no kicker above the headline. */
  eyebrow?: string
  title: string
  description: string
  videoSrc?: string
  imageSrc?: string
  imageAlt?: string
  poster?: string
  /** Optional pills beneath the copy — e.g. the service platform names. */
  chips?: string[]
  chipsLabel?: string
  /**
   * Optional decorative layer painted over the media but under the copy.
   * Opt-in so it stays on the one page that wants it rather than every
   * page sharing this hero.
   */
  decoration?: React.ReactNode
}) {
  // Copy animates in document order, so indices shift when the eyebrow is
  // absent rather than leaving a gap in the stagger.
  let i = 0
  const eyebrowIndex = eyebrow ? i++ : -1
  const titleIndex = i++
  const descriptionIndex = i++
  const chipsLabelIndex = i++

  return (
    <section className="vhero-shape relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-[#0C203A] text-white lg:min-h-[640px]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="vhero-media -z-10 object-cover"
        />
      ) : videoSrc ? (
        /* `poster` gives an instant first paint while the file loads, so the
           hero is never an empty navy box. */
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
          className="vhero-media absolute inset-0 -z-10 size-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}

      {/* Legibility scrim — stronger on the left where the copy sits. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,32,58,0.94) 0%, rgba(12,32,58,0.86) 45%, rgba(12,32,58,0.55) 100%)",
        }}
      />

      {decoration ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {decoration}
        </div>
      ) : null}

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-28 lg:px-8 lg:pb-36">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p
              className="vhero-item text-sm font-semibold tracking-wide text-[#D9A441] uppercase"
              style={{ ["--vhero-i" as string]: eyebrowIndex }}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            className="vhero-item text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ["--vhero-i" as string]: titleIndex }}
          >
            {title}
          </h1>

          <span aria-hidden className="vhero-rule mt-6 block h-1 w-20 bg-[#D9A441]" />

          <p
            className="vhero-item mt-6 max-w-2xl text-lg leading-relaxed text-white/85"
            style={{ ["--vhero-i" as string]: descriptionIndex }}
          >
            {description}
          </p>

          {chips && chips.length > 0 ? (
            <div className="mt-10">
              {chipsLabel ? (
                <p
                  className="vhero-item text-xs font-bold tracking-wide text-white/40 uppercase"
                  style={{ ["--vhero-i" as string]: chipsLabelIndex }}
                >
                  {chipsLabel}
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-3">
                {chips.map((chip, index) => (
                  <li
                    key={chip}
                    className="vhero-chip border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-[#D9A441]/60 hover:bg-white/10"
                    style={{ ["--vhero-i" as string]: index }}
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
