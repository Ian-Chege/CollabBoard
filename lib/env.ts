import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_JWT_ISSUER_DOMAIN: z.string().url(),
    LIVEBLOCKS_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CONVEX_URL: z.string().url(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_JWT_ISSUER_DOMAIN: process.env.CLERK_JWT_ISSUER_DOMAIN,
    LIVEBLOCKS_SECRET_KEY: process.env.LIVEBLOCKS_SECRET_KEY,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY:
      process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_API_KEY,
  },
})
