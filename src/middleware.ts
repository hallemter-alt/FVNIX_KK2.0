import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/routing";

export default createMiddleware({
  locales: [...locales],
  defaultLocale,
  localeDetection: false
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"]
};
