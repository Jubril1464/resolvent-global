/**
 * Drawn wireframe globe used as a hero backdrop where no photograph in the
 * library carries the right meaning.
 *
 * Inline SVG rather than an image: it's a few hundred bytes, scales
 * perfectly, picks up the brand colours from CSS, and costs no network round
 * trip on a page users reach from the footer.
 *
 * Purely presentational, so it's hidden from assistive technology. Motion is
 * CSS (globals.css `.lgl-globe-*`) and stops under prefers-reduced-motion,
 * where the globe still renders fully drawn.
 */
export function GlobeMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 -right-24 -z-10 hidden size-[34rem] sm:block lg:-top-32 lg:right-0 lg:size-[40rem]"
    >
      <svg viewBox="0 0 400 400" className="size-full">
        <defs>
          {/* Soft inner light so the sphere reads as a body, not a ring. */}
          <radialGradient id="lgl-globe-fill" cx="38%" cy="32%">
            <stop offset="0%" stopColor="#1C6B52" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#0C203A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0C203A" stopOpacity="0" />
          </radialGradient>
          {/* Clips the meridians to the sphere. */}
          <clipPath id="lgl-globe-clip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
        </defs>

        <circle cx="200" cy="200" r="150" fill="url(#lgl-globe-fill)" />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand/35"
        />

        {/* Latitudes stay put; the meridians narrow and widen in turn, which
            reads as the sphere turning without redrawing any geometry. */}
        <g clipPath="url(#lgl-globe-clip)" className="text-brand/20">
          {[-100, -50, 0, 50, 100].map((dy) => (
            <ellipse
              key={dy}
              cx="200"
              cy={200 + dy}
              rx={Math.sqrt(Math.max(150 * 150 - dy * dy, 0))}
              ry={Math.abs(dy) * 0.22 + 10}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            />
          ))}

          {/* The `rx` attributes are the resting shape — the animation
              overrides them, so reduced motion still gets a drawn globe
              rather than four stacked circles. */}
          {[150, 104, 50, 104].map((rx, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx={rx}
              ry="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="lgl-globe-meridian"
              style={{ ["--lgl-i" as string]: i }}
            />
          ))}
        </g>

        {/* Dashed orbit — data moving to and from the site. */}
        <ellipse
          cx="200"
          cy="200"
          rx="186"
          ry="72"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 9"
          className="lgl-globe-orbit text-brand/45"
        />

        {/* Connection points on the sphere. */}
        {[
          [148, 152],
          [252, 176],
          [196, 246],
          [122, 232],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            className="lgl-globe-node fill-brand"
            style={{ ["--lgl-i" as string]: i }}
          />
        ))}
      </svg>
    </div>
  )
}
