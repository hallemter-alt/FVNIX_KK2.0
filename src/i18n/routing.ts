export const locales = ["ja", "en", "zh-hant"] as const;
// If you must keep Simplified Chinese (existing content/index), enable it:
// export const locales = ["ja", "en", "zh-hant", "zh-hans"] as const;

export const defaultLocale = "ja" as const;

export type AppLocale = (typeof locales)[number];
