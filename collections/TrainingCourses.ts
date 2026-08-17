import type { CollectionConfig } from "payload"

import { makeRevalidateHook } from "@/lib/revalidate-hook"

const textList = (name: string, description?: string) =>
  ({
    name,
    type: "array" as const,
    required: true,
    fields: [{ name: "value", type: "text" as const, required: true }],
    ...(description ? { admin: { description } } : {}),
  })

/**
 * The 8-course training portfolio. Terminology per the content handover:
 * "Course" for Short/Applied offerings, "Program" for Integrated ones —
 * derived from `category` rather than stored twice, so the two can't drift.
 *
 * Delivery options are deliberately NOT here: they're identical across all
 * 8 offerings, so they live once on the `training-page` global instead.
 */
export const TrainingCourses: CollectionConfig = {
  slug: "training-courses",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["courseNumber", "title", "category", "duration"],
  },
  defaultSort: "courseNumber",
  hooks: {
    afterChange: [makeRevalidateHook("training-courses")],
    afterDelete: [makeRevalidateHook("training-courses")],
  },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Used to build the URL (/training/{slug})." },
    },
    {
      name: "courseNumber",
      type: "number",
      required: true,
      unique: true,
      admin: {
        description:
          'Position in the portfolio — drives ordering and the "Course N of 8" hero label.',
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Card",
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "category",
              type: "select",
              required: true,
              options: ["Short Course", "Applied Course", "Integrated Program"],
              admin: {
                description:
                  'Integrated Program offerings use "Program" wording and heavier visual weight throughout.',
              },
            },
            {
              name: "duration",
              type: "text",
              required: true,
              admin: { description: 'Indicative total hours, e.g. "~15 h".' },
            },
            { name: "moduleCount", type: "number", required: true },
            {
              name: "summary",
              type: "textarea",
              required: true,
              admin: { description: "One concise value statement for the landing-page card." },
            },
            textList("keyAreas", "Only the first five are shown on the landing-page card."),
          ],
        },
        {
          label: "Overview",
          fields: [
            textList("about", "One entry per paragraph."),
            textList("learn", 'The "What You Will Learn" outcomes.'),
          ],
        },
        {
          label: "Curriculum",
          fields: [
            {
              name: "curriculum",
              type: "array",
              required: true,
              labels: { singular: "Module", plural: "Modules" },
              fields: [
                { name: "number", type: "number", required: true },
                { name: "title", type: "text", required: true },
                {
                  name: "duration",
                  type: "text",
                  required: true,
                  admin: { description: 'Indicative module time, e.g. "~2.5 h".' },
                },
                {
                  name: "topics",
                  type: "array",
                  required: true,
                  fields: [{ name: "value", type: "text", required: true }],
                },
              ],
            },
          ],
        },
        {
          label: "Audience",
          fields: [
            textList("audience", 'The "Who Should Attend" roles.'),
            textList("prerequisites"),
            {
              name: "prereqNote",
              type: "text",
              required: true,
              admin: { description: 'e.g. "No prior formal training ... is required."' },
            },
          ],
        },
        {
          label: "Applied Learning",
          fields: [
            { name: "practicalIntro", type: "textarea", required: true },
            {
              name: "practicalItems",
              type: "array",
              required: true,
              labels: { singular: "Exercise", plural: "Exercises" },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
            {
              name: "capstoneTitle",
              type: "text",
              admin: {
                description:
                  "Integrated Programs only — the named capstone deliverable. Leave blank for Courses.",
              },
            },
            textList("caseParagraphs", "The applied case study / capstone scenario."),
            textList("workflow", "Ordered steps of the applied workflow."),
            {
              name: "finalDeliverables",
              type: "array",
              fields: [{ name: "value", type: "text", required: true }],
              admin: {
                description: 'Contents of the final deliverable. Leave empty where not applicable.',
              },
            },
          ],
        },
        {
          label: "Outcomes",
          fields: [
            { name: "resourcesNote", type: "textarea", required: true },
            textList("resources"),
            { name: "gainIntro", type: "textarea", required: true },
            textList("gains"),
            textList("industries", "Areas of application — not specialisation claims."),
          ],
        },
        {
          label: "Final CTA",
          fields: [
            { name: "finalCtaTitle", type: "text", required: true },
            { name: "finalCtaDescription", type: "textarea", required: true },
          ],
        },
      ],
    },
  ],
}
