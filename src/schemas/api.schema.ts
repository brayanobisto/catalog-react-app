import { z } from "zod/v4";

export const userSchema = z.object({
  id: z.number(),
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  imageUrl: z.url(),
  isEmailVerified: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const authResponseSchema = z.object({
  user: userSchema,
  message: z.string(),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;

export const authStatusResponseSchema = z.object({
  isAuthenticated: z.boolean(),
  user: userSchema.optional(),
});

export type AuthStatusResponse = z.infer<typeof authStatusResponseSchema>;
