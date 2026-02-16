export const locales = ["en", "ja", "zh-hant"] as const;
// Default language is English
// Japanese and Traditional Chinese are also supported

export const defaultLocale = "en" as const;

export type AppLocale = (typeof locales)[number];
