/**
 * Background field for the Practical Learning section: a dot matrix with a
 * pulse travelling diagonally across it.
 *
 * Deliberately different in kind from the other motion on this page (which
 * is all line-drawing or dash-flow) so the sections stay distinguishable.
 *
 * Delay is driven by `column + row`, which is what produces the diagonal
 * sweep rather than a random shimmer. Purely decorative.
 */

const COLS = 14
const ROWS = 6
const GAP = 26
const OFFSET = 16

export function PracticalBackdrop({ className }: { className?: string }) {
  const dots: { x: number; y: number; i: number }[] = []

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      dots.push({
        x: OFFSET + col * GAP,
        y: OFFSET + row * GAP,
        i: col + row,
      })
    }
  }

  const width = OFFSET * 2 + (COLS - 1) * GAP
  const height = OFFSET * 2 + (ROWS - 1) * GAP

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {dots.map((dot) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          className="dm-dot"
          cx={dot.x}
          cy={dot.y}
          r="2.5"
          fill="currentColor"
          opacity="0.1"
          style={{ ["--dm-i" as string]: dot.i }}
        />
      ))}
    </svg>
  )
}
