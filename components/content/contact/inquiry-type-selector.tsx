"use client"

import { cn } from "@/lib/utils"

export type InquiryType = "general" | "proposal"

const OPTIONS: { value: InquiryType; title: string; description: string }[] = [
  {
    value: "general",
    title: "General Inquiry",
    description: "Ask a question, explore options or introduce your organisation.",
  },
  {
    value: "proposal",
    title: "Request a Proposal",
    description:
      "Provide project details and receive a structured technical proposal.",
  },
]

export function InquiryTypeSelector({
  value,
  onChange,
}: {
  value: InquiryType
  onChange: (value: InquiryType) => void
}) {
  return (
    <div className="space-y-3">
      {OPTIONS.map((option) => {
        const selected = option.value === value

        return (
          <label
            key={option.value}
            className={cn(
              "flex cursor-pointer flex-col gap-1 border p-4 transition-colors",
              selected
                ? "border-brand bg-brand/5"
                : "border-border bg-background hover:bg-muted"
            )}
          >
            <span className="flex items-center gap-3">
              <input
                type="radio"
                name="inquiryType"
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={cn(
                  "grid size-4 shrink-0 place-items-center rounded-full border-2",
                  selected ? "border-brand" : "border-border"
                )}
              >
                {selected ? <span className="size-2 inline-block rounded-full bg-brand " /> : null}
              </span>
              <span className="font-semibold text-foreground">{option.title}</span>
            </span>
            <span className="ml-7 text-sm text-foreground/60">
              {option.description}
            </span>
          </label>
        )
      })}
    </div>
  )
}
