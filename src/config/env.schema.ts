import { z } from "zod/v4";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  VITE_API_BASE_URL: z.url(),
});

export type Env = z.infer<typeof envSchema>;
