import {
  ClipboardCheck,
  Droplets,
  Gauge,
  Leaf,
  RefreshCw,
  type LucideIcon,
} from "lucide-react"

import type { ProjectCategory } from "@/lib/projects"

const VIEW = 260
const CENTRE = VIEW / 2
/** Radius the category nodes sit on. */
const R = 92
const RING_CIRC = 2 * Math.PI * R
/** Length of the pulse that travels the ring. */
const PULSE = 54

/** Outer dashed ring, rotating independently of the connector. */
const R_OUTER = 116
const R_INNER = 62

const round = (n: number) => Math.round(n * 100) / 100

const CATEGORY_ICON: Record<ProjectCategory, LucideIcon> = {
  "Water & Effluent": Droplets,
  "Energy & Process": Gauge,
  "Clean-Tech": Leaf,
  Advisory: ClipboardCheck,
  Ongoing: RefreshCw,
}

/**
 * Hero decoration for the project portfolio: every category sits on one
 * closed ring, so the portfolio reads as a single connected body of work
 * rather than five separate lists. A pulse runs the ring continuously and
 * lights each node as it passes, which is where the "these connect" idea
 * actually lands.
 *
 * Nodes are placed from the real category list, so a category with no work
 * behind it never appears. Icons come from the same lucide set as the rest of
 * the site, nested as child `<svg>` elements so they inherit the ring's
 * colour and scale with its coordinate system.
 *
 * Motion lives in globals.css (`.pring-*`) behind a reduced-motion guard,
 * where this renders as a static ring diagram.
 */
export function ProjectsHeroDecoration({
  categories,
}: {
  categories: ProjectCategory[]
}) {
  const nodes = categories.map((category, index) => {
    // Start at the top and run clockwise, so the first category reads first.
    const angle = (index / categories.length) * 2 * Math.PI - Math.PI / 2
    return {
      category,
      Icon: CATEGORY_ICON[category],
      // Rounded so the markup doesn't carry 15 decimal places per node.
      x: round(CENTRE + R * Math.cos(angle)),
      y: round(CENTRE + R * Math.sin(angle)),
      // Fraction of the way round the ring, so each node's halo can fire as
      // the pulse actually reaches it rather than on a guessed stagger.
      offset: index / categories.length,
    }
  })

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      className="absolute top-1/2 right-[-4%] hidden h-[min(80vh,560px)] -translate-y-1/2 text-white lg:block"
    >
      {/* Slow-rotating outer ring — motion that reads even before the pulse
          comes round. */}
      <circle
        className="pring-spin"
        cx={CENTRE}
        cy={CENTRE}
        r={R_OUTER}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 10"
        opacity="0.28"
      />
      <circle
        className="pring-spin-reverse"
        cx={CENTRE}
        cy={CENTRE}
        r={R_INNER}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 7"
        opacity="0.2"
      />

      {/* The connector itself: faint full ring, then the travelling pulse. */}
      <circle
        className="pring-track"
        cx={CENTRE}
        cy={CENTRE}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.22"
        strokeDasharray={RING_CIRC}
        style={{ ["--pring-circ" as string]: RING_CIRC }}
      />
      <circle
        className="pring-pulse"
        cx={CENTRE}
        cy={CENTRE}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${PULSE} ${RING_CIRC - PULSE}`}
        transform={`rotate(-90 ${CENTRE} ${CENTRE})`}
        style={{ ["--pring-circ" as string]: RING_CIRC }}
      />

      {/* Spokes into a small hub, so the ring reads as one system rather than
          a decorative circle. */}
      {nodes.map((node) => (
        <line
          key={`spoke-${node.category}`}
          className="pring-spoke"
          x1={CENTRE}
          y1={CENTRE}
          x2={node.x}
          y2={node.y}
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.14"
          strokeDasharray="3 5"
        />
      ))}

      <circle
        className="pring-hub"
        cx={CENTRE}
        cy={CENTRE}
        r="5"
        fill="currentColor"
        opacity="0.5"
      />

      {nodes.map((node, index) => (
        <g
          key={node.category}
          className="pring-node"
          style={{
            ["--pring-i" as string]: index,
            ["--pring-offset" as string]: node.offset,
          }}
        >
          {/* Halo that expands as the pulse passes this node. */}
          <circle
            className="pring-halo"
            cx={node.x}
            cy={node.y}
            r="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="21"
            fill="#0C203A"
            fillOpacity="0.55"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
          <node.Icon
            x={node.x - 11}
            y={node.y - 11}
            width={22}
            height={22}
            strokeWidth={1.6}
            opacity={0.85}
          />
        </g>
      ))}
    </svg>
  )
}
