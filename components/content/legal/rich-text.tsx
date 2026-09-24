import Link from "next/link"

/**
 * Renders the one piece of inline markup legal body copy supports:
 * `[label](/href)`.
 *
 * A full rich-text pipeline would be overkill — across both documents the
 * only inline markup needed is a handful of cross-links (the Terms source
 * document requires section 13 to link to the Privacy Notice). Anything that
 * isn't a match is emitted as plain text, so a stray bracket in the legal
 * copy renders literally rather than disappearing.
 */
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let cursor = 0

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [full, label, href] = match
    const start = match.index

    if (start > cursor) parts.push(text.slice(cursor, start))

    parts.push(
      <Link
        key={`${href}-${start}`}
        href={href}
        className="font-medium text-brand-dark underline underline-offset-4 transition-colors hover:text-brand"
      >
        {label}
      </Link>
    )

    cursor = start + full.length
  }

  if (cursor < text.length) parts.push(text.slice(cursor))

  return <>{parts}</>
}
