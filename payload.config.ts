import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"

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
import { Navigation } from "./globals/Navigation"
import { Footer } from "./globals/Footer"
import { ContactPage } from "./globals/ContactPage"
import { TrainingPage } from "./globals/TrainingPage"

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
  ],
  globals: [Navigation, Footer, ContactPage, TrainingPage],
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
