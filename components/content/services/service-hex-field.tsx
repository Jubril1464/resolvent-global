/**
 * Honeycomb accent for the home page service cards. Cells light up in
 * diagonal order (delay derived from column + row), giving the corner a slow
 * travelling shimmer.
 *
 * Hexagons are a shape family not used elsewhere on the site, which keeps
 * this section visually distinct from the dot-matrix and line-drawing
 * animations on other pages. Purely decorative.
 */

const R = 13
const COLS = 5
const ROWS = 4

/** Flat-top hexagon path centred on (cx, cy). */
function hexPath(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`
  }).join(" ") + " Z"
}

export function ServiceHexField({ className }: { className?: string }) {
  const cells: { d: string; c: number }[] = []

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // Offset every other row by half a step to interlock the cells.
      const cx = 16 + col * R * 1.5
      const cy = 16 + row * R * Math.sqrt(3) + (col % 2 ? (R * Math.sqrt(3)) / 2 : 0)
      cells.push({ d: hexPath(cx, cy, R - 1.5), c: col + row })
    }
  }

  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {cells.map((cell, i) => (
        <path
          key={i}
          className="sc-cell"
          d={cell.d}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.06"
          style={{ ["--sc-c" as string]: cell.c }}
        />
      ))}
    </svg>
  )
}
