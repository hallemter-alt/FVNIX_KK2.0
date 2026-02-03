import { z } from 'zod'

/**
 * Multi-language string support
 */
export type LangString = { 
  zh?: string
  en?: string
  ja?: string 
}

export const LangStringSchema = z.object({
  zh: z.string().optional(),
  en: z.string().optional(),
  ja: z.string().optional(),
})

/**
 * Product Types (Essential Oils / Aromatherapy)
 */
export type Product = {
  slug: string
  name: LangString
  latinName?: string
  series?: string      // e.g. Citrus / Woody / Floral
  origin?: string      // e.g. Yunnan / Shangri-La
  altitude?: string    // e.g. 2500–3500m
  extraction?: string  // Steam / Cold press
  notes?: string       // Aroma profile
  tags?: string[]
}

export const ProductSchema = z.object({
  slug: z.string(),
  name: LangStringSchema,
  latinName: z.string().optional(),
  series: z.string().optional(),
  origin: z.string().optional(),
  altitude: z.string().optional(),
  extraction: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

/**
 * Document Types
 */
export type DocType = "TDS" | "COA" | "SDS" | "GCMS"

export const DocTypeSchema = z.enum(["TDS", "COA", "SDS", "GCMS"])

/**
 * Document Asset
 */
export type DocumentAsset = {
  id: string
  type: DocType
  title: string
  lang: "zh" | "en" | "ja"
  url: string        // /public/docs/*.pdf or external URL
  productSlug?: string
  lotNo?: string
}

export const DocumentAssetSchema = z.object({
  id: z.string(),
  type: DocTypeSchema,
  title: z.string(),
  lang: z.enum(["zh", "en", "ja"]),
  url: z.string().url(),
  productSlug: z.string().optional(),
  lotNo: z.string().optional(),
})

/**
 * Lot/Batch Types
 */
export type Lot = {
  productSlug: string
  lotNo: string
  productionDate?: string // YYYY-MM-DD
  documentIds: string[]
}

export const LotSchema = z.object({
  productSlug: z.string(),
  lotNo: z.string(),
  productionDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  documentIds: z.array(z.string()),
})

/**
 * Request/Inquiry Types
 */
export const RequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  productSlug: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['quote', 'sample', 'support', 'general']),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
})

export type Request = z.infer<typeof RequestSchema>

/**
 * Filter Types
 */
export interface ProductFilters {
  series?: string
  search?: string
  tags?: string[]
  origin?: string
}

export interface DocumentFilters {
  type?: DocType
  search?: string
  productSlug?: string
  lang?: "zh" | "en" | "ja"
}

/**
 * Language Type
 */
export type Language = "zh" | "en" | "ja"

/**
 * Helper function to get localized string
 */
export function getLocalizedString(
  langString: LangString | undefined,
  lang: Language,
  fallback: string = ''
): string {
  if (!langString) return fallback
  return langString[lang] || langString.en || langString.zh || langString.ja || fallback
}

/**
 * Series/Category Types
 */
export type Series = 
  | "Citrus"
  | "Woody" 
  | "Floral"
  | "Herbal"
  | "Spicy"
  | "Resinous"

export const SeriesColors: Record<Series, string> = {
  Citrus: "bg-yellow-500",
  Woody: "bg-amber-700",
  Floral: "bg-pink-500",
  Herbal: "bg-green-500",
  Spicy: "bg-red-500",
  Resinous: "bg-purple-500",
}

export const SeriesIcons: Record<Series, string> = {
  Citrus: "🍋",
  Woody: "🌲",
  Floral: "🌸",
  Herbal: "🌿",
  Spicy: "🌶️",
  Resinous: "🍯",
}
