export const locales = ["ja", "en", "zh-hant"] as const;
// Default language is Japanese
// English and Traditional Chinese are also supported

export const defaultLocale = "ja" as const;

export type AppLocale = (typeof locales)[number];
