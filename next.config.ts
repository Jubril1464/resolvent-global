import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // sharp loads its native binding, which in turn dlopens libvips from a
  // sibling @img/sharp-libvips-* package. That indirection is invisible to
  // Next's file tracer, so on Vercel the linux .so was left out of the
  // function bundle and every route importing payload.config died at load
  // time with ERR_DLOPEN_FAILED — /admin, all of /api/*, and every on-demand
  // page. Trace the whole @img tree explicitly; on the Linux build machine
  // that resolves to just the linux binaries.
  //
  // payload.config.ts now imports sharp dynamically so a broken binding is
  // no longer fatal, which also means the tracer has nothing to follow — this
  // include is the only thing putting sharp in the bundle. Don't remove it.
  outputFileTracingIncludes: {
    "/**": ["./node_modules/@img/**/*", "./node_modules/sharp/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
