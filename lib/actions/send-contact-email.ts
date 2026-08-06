"use server"

import { Resend } from "resend"

const CONTACT_EMAIL = "info@resolventglobal.com"
// Falls back to Resend's shared test sender. Once resolventglobal.com is
// verified in Resend, set RESEND_FROM_EMAIL to an address on that domain —
// Resend refuses to deliver to a real inbox from an unverified domain.
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Resolvent Global Website <onboarding@resend.dev>"

const FIELD_ORDER: { key: string; label: string }[] = [
  { key: "fullName", label: "Full Name" },
  { key: "organisation", label: "Organisation" },
  { key: "email", label: "Email Address" },
  { key: "phone", label: "Phone / WhatsApp" },
  { key: "location", label: "Country / City" },
  { key: "preferredContact", label: "Preferred Contact Method" },
  { key: "service", label: "Service of Interest" },
  { key: "industry", label: "Industry / Sector" },
  { key: "description", label: "Project Description" },
  { key: "projectType", label: "Project Type" },
  { key: "problem", label: "Problem / Challenge" },
  { key: "desiredOutcome", label: "Desired Outcome" },
  { key: "timeline", label: "Preferred Timeline" },
  { key: "budget", label: "Budget Range" },
  { key: "notes", label: "Additional Notes" },
]

export type ContactSubmitResult = { success: true } | { success: false; error: string }

export async function sendContactEmail(formData: FormData): Promise<ContactSubmitResult> {
  const fullName = formData.get("fullName")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const inquiryType = formData.get("inquiryType")?.toString() === "proposal" ? "proposal" : "general"
  const requiredMessage =
    inquiryType === "proposal"
      ? formData.get("problem")?.toString().trim()
      : formData.get("description")?.toString().trim()

  if (!fullName || !email || !requiredMessage) {
    return { success: false, error: "Please fill in all required fields." }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact-form] RESEND_API_KEY is not set.")
    return {
      success: false,
      error: "Something went wrong sending your message. Please try again or email us directly.",
    }
  }

  const bodyLines = FIELD_ORDER.map(({ key, label }) => {
    const value = formData.get(key)?.toString().trim()
    return value ? `${label}: ${value}` : null
  }).filter((line): line is string => line !== null)

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New ${inquiryType === "proposal" ? "Proposal Request" : "General Inquiry"} — ${fullName}`,
      text: bodyLines.join("\n"),
    })

    if (error) {
      console.error("[contact-form] Resend send failed:", error)
      return {
        success: false,
        error: "Something went wrong sending your message. Please try again or email us directly.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("[contact-form] Resend send failed:", error)
    return {
      success: false,
      error: "Something went wrong sending your message. Please try again or email us directly.",
    }
  }
}
