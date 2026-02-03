import { z } from 'zod'

/**
 * User schema example with Zod validation
 */
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
  role: z.enum(['admin', 'user', 'guest']),
  createdAt: z.date().default(() => new Date()),
})

export type User = z.infer<typeof UserSchema>

/**
 * 3D Object schema for Three.js objects
 */
export const Object3DSchema = z.object({
  position: z.object({
    x: z.number(),
    y: z.number(),
    z: z.number(),
  }),
  rotation: z.object({
    x: z.number(),
    y: z.number(),
    z: z.number(),
  }),
  scale: z.object({
    x: z.number().positive(),
    y: z.number().positive(),
    z: z.number().positive(),
  }).default({ x: 1, y: 1, z: 1 }),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
})

export type Object3D = z.infer<typeof Object3DSchema>

/**
 * API Response schema
 */
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  error: z.string().optional(),
  timestamp: z.string().datetime(),
})

export type ApiResponse = z.infer<typeof ApiResponseSchema>

/**
 * Form validation example
 */
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
  subscribe: z.boolean().default(false),
})

export type ContactForm = z.infer<typeof ContactFormSchema>
