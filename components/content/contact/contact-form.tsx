"use client"

import { useState, type ReactNode } from "react"
import { Send, Shield } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import type { ContactPage } from "@/payload-types"
import { InquiryTypeSelector, type InquiryType } from "./inquiry-type-selector"

const inputClass =
  "w-full border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-brand placeholder:text-foreground/40"

function FormSectionHeader({ letter, title }: { letter: string; title: string }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="flex size-6 items-center justify-center bg-[#0C203A] text-xs font-bold text-white">
          {letter}
        </span>
        <h2 className="text-xs font-bold tracking-wide text-foreground uppercase">
          {title}
        </h2>
      </div>
      <div className="mt-4 border-t border-border" />
    </div>
  )
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string
  required?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  )
}


export function ContactForm({
  expectSteps,
  serviceOptions,
  industryOptions,
}: {
  expectSteps: ContactPage["expectSteps"]
  serviceOptions: string[]
  industryOptions: string[]
}) {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-[#F4F6F9] py-24">
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8"
      >
        <div>
          <div>
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-4 w-1 bg-brand" />
              <h2 className="text-xs font-bold tracking-wide text-foreground uppercase">
                What are you looking for?
              </h2>
            </div>
            <div className="mt-4 border-t border-border" />
            <div className="mt-6">
              <InquiryTypeSelector value={inquiryType} onChange={setInquiryType} />
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-4 w-1 bg-[#D9A441]" />
              <h2 className="text-xs font-bold tracking-wide text-foreground uppercase">
                What to expect
              </h2>
            </div>
            <div className="mt-4 border-t border-border" />

            <ol className="mt-6 space-y-6">
              {expectSteps.map(({ step, title, description }) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden
                    className="flex size-8 shrink-0 items-center justify-center bg-[#0C203A] text-xs font-bold text-white"
                  >
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-sm text-foreground/60">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex gap-3 border border-blue-100 bg-blue-50/60 p-5">
            <Shield aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
            <p className="text-sm text-foreground/70">
              Your information is kept strictly confidential and used only to
              respond to your inquiry. Resolvent Global Energy Process &amp;
              Carbon Ltd
            </p>
          </div>
        </div>

        <div>
          <FormSectionHeader letter="A" title="Your Details" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name" required>
              <input
                required
                type="text"
                name="fullName"
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>
            <Field label="Organisation">
              <input
                type="text"
                name="organisation"
                placeholder="Company or organisation"
                className={inputClass}
              />
            </Field>
            <Field label="Email Address" required>
              <input
                required
                type="email"
                name="email"
                placeholder="your@email.com"
                className={inputClass}
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input
                type="tel"
                name="phone"
                placeholder="+234 ..."
                className={inputClass}
              />
            </Field>
            <Field label="Country / City">
              <input
                type="text"
                name="location"
                placeholder="e.g. Lagos, Nigeria"
                className={inputClass}
              />
            </Field>
            <Field label="Preferred Contact Method">
              <input type="text" name="preferredContact" className={inputClass} />
            </Field>
          </div>

          <div className="mt-10">
            <FormSectionHeader letter="B" title="Project Context" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Service of Interest">
              <select name="service" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </Field>
            <Field label="Industry / Sector">
              <select name="industry" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select a sector
                </option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </Field>
            <Field label="Project Description" required className="sm:col-span-2">
              <textarea
                required
                name="description"
                rows={4}
                placeholder="Briefly describe your project, challenge or inquiry..."
                className={cn(inputClass, "resize-y")}
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
            <p className="max-w-sm text-xs text-foreground/50">
              Submitting this form confirms your consent for Resolvent Global
              to contact you regarding your inquiry. No spam &mdash; ever.
            </p>
            <button
              type="submit"
              className={cn(
                buttonVariants({ variant: "brand" }),
                "h-12 gap-2 px-6 text-base font-semibold"
              )}
            >
              <Send aria-hidden className="size-4" />
              Send Inquiry
            </button>
          </div>

          {submitted ? (
            <p role="status" className="mt-4 text-sm font-medium text-brand">
              Thanks &mdash; your inquiry has been captured. We&apos;ll be in
              touch within 24&ndash;48 business hours.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  )
}
