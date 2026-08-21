import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"

import { Users } from "./collections/Users"
import { Media } from "./collections/Media"
import { Services } from "./collections/Services"
import { Industries } from "./collections/Industries"
import { IndustrySectors } from "./collections/IndustrySectors"
import { WhyUsPoints } from "./collections/WhyUsPoints"
import { Values } from "./collections/Values"
import { OperatingApproachSteps } from "./collections/OperatingApproachSteps"
import { Credentials } from "./collections/Credentials"
import { TrainingCourses } from "./collections/TrainingCourses"
import { Projects } from "./collections/Projects"
import { ProprietaryTechnologies } from "./collections/ProprietaryTechnologies"
import { Navigation } from "./globals/Navigation"
import { Footer } from "./globals/Footer"
import { ContactPage } from "./globals/ContactPage"
import { TrainingPage } from "./globals/TrainingPage"
import { ProprietaryTechnologiesPage } from "./globals/ProprietaryTechnologiesPage"

/**
 * sharp is optional: Payload uses it for upload resizing and the admin crop
 * tool, neither of which the Media collection currently configures. Importing
 * it at module scope made a failed native binding fatal for every server
 * route on the site — which is exactly what happened when Vercel's file
 * tracer dropped libvips from the function bundle (ERR_DLOPEN_FAILED on
 * /admin, all of /api/*, and every on-demand page). Loading it defensively
 * degrades that to "no image resizing" instead of a sitewide 500.
 *
 * The tracer cannot follow a dynamic import, so next.config.ts pins sharp and
 * the @img native packages into the trace explicitly — that include is what
 * keeps this working, not static analysis.
 */
let sharp: typeof import("sharp").default | undefined

try {
  sharp = (await import("sharp")).default
} catch (error) {
  console.warn(
    "[payload] sharp could not be loaded — image resizing and cropping are disabled:",
    error
  )
}
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Services,
    Industries,
    IndustrySectors,
    WhyUsPoints,
    Values,
    OperatingApproachSteps,
    Credentials,
    TrainingCourses,
    Projects,
    ProprietaryTechnologies,
  ],
  globals: [
    Navigation,
    Footer,
    ContactPage,
    TrainingPage,
    ProprietaryTechnologiesPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  plugins: [
    vercelBlobStorage({
      // Media is fully public (access.read: () => true) — serve directly
      // from Blob's CDN instead of proxying every request through our own
      // /api/media/file/* route, which is Payload's default and is meant
      // for access-controlled files.
      collections: { media: { disablePayloadAccessControl: true } },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  sharp,
})
