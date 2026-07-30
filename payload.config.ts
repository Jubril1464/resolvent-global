import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { buildConfig } from "payload"
import { fileURLToPath } from "url"
import sharp from "sharp"

import { Users } from "./collections/Users"
import { Services } from "./collections/Services"
import { Industries } from "./collections/Industries"
import { IndustrySectors } from "./collections/IndustrySectors"
import { WhyUsPoints } from "./collections/WhyUsPoints"
import { Values } from "./collections/Values"
import { OperatingApproachSteps } from "./collections/OperatingApproachSteps"
import { Credentials } from "./collections/Credentials"
import { Navigation } from "./globals/Navigation"
import { Footer } from "./globals/Footer"
import { ContactPage } from "./globals/ContactPage"

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
    Services,
    Industries,
    IndustrySectors,
    WhyUsPoints,
    Values,
    OperatingApproachSteps,
    Credentials,
  ],
  globals: [Navigation, Footer, ContactPage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./payload.db",
    },
  }),
  sharp,
})
