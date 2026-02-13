#!/usr/bin/env bash
set -euo pipefail

echo "==> [1/7] Detect Next.js app directory"
APP_DIR=""
if [ -d "src/app" ]; then
  APP_DIR="src/app"
elif [ -d "app" ]; then
  APP_DIR="app"
else
  echo "❌ Cannot find app router directory (src/app or app)."
  echo "   If you are using Pages Router, tell me and I will provide pages/ version."
  exit 1
fi
echo "✅ Using app directory: $APP_DIR"

echo "==> [2/7] Install next-intl"
npm i next-intl

echo "==> [3/7] Create i18n routing config"
mkdir -p src/i18n src/messages src/components

cat > src/i18n/routing.ts <<'EOF'
export const locales = ["ja", "en", "zh-hant"] as const;
// If you must keep Simplified Chinese (existing content/index), enable it:
// export const locales = ["ja", "en", "zh-hant", "zh-hans"] as const;

export const defaultLocale = "ja" as const;

export type AppLocale = (typeof locales)[number];
EOF

echo "==> [4/7] Add middleware (safe mode: localeDetection=false)"
cat > src/middleware.ts <<'EOF'
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
EOF

echo "==> [5/7] Add locale layout with NextIntlClientProvider"
mkdir -p "$APP_DIR/[locale]"
cat > "$APP_DIR/[locale]/layout.tsx" <<'EOF'
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {locales} from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
EOF

echo "==> [6/7] Create messages (starter)"
cat > src/messages/ja.json <<'EOF'
{
  "common": {
    "lang": { "ja": "日本語", "en": "English", "zhHant": "繁體中文" }
  }
}
EOF

cat > src/messages/en.json <<'EOF'
{
  "common": {
    "lang": { "ja": "日本語", "en": "English", "zhHant": "繁體中文" }
  }
}
EOF

cat > src/messages/zh-hant.json <<'EOF'
{
  "common": {
    "lang": { "ja": "日本語", "en": "English", "zhHant": "繁體中文" }
  }
}
EOF

echo "==> [6.5/7] Add LanguageSwitcher component"
cat > src/components/LanguageSwitcher.tsx <<'EOF'
"use client";

import {usePathname, useRouter} from "next/navigation";
import {locales} from "@/i18n/routing";

const LABEL: Record<string, string> = { ja: "JP", en: "EN", "zh-hant": "繁" };

export function LanguageSwitcher({currentLocale}:{currentLocale:string}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(nextLocale: string) {
    const parts = pathname.split("/");
    const hasLocale = parts[1] && locales.includes(parts[1] as any);
    const rest = hasLocale ? parts.slice(2).join("/") : parts.slice(1).join("/");
    router.push((`/${nextLocale}/${rest}`).replace(/\/$/, "") || `/${nextLocale}`);
  }

  return (
    <div className="flex items-center gap-2 text-xs">
      {locales.map(l => (
        <button
          key={l}
          onClick={()=>switchTo(l)}
          className={`px-2 py-1 border rounded ${l===currentLocale ? "bg-black text-white" : "bg-white"}`}
          type="button"
        >
          {LABEL[l] ?? l}
        </button>
      ))}
    </div>
  );
}
EOF

echo "==> [7/7] Migrate App Router routes to /[locale]/... and redirect old paths to /ja/..."
# Strategy:
# - For every page.tsx under app (excluding [locale], api), move it to $APP_DIR/_root/<same path>/page.tsx
# - Create a localized wrapper at $APP_DIR/[locale]/<same path>/page.tsx that re-exports the moved page
# - Replace original page.tsx with redirect to /ja/<same path> (so old URLs keep working with 308)

mkdir -p "$APP_DIR/_root"

# Find page.tsx files
mapfile -t PAGES < <(find "$APP_DIR" -type f -name "page.tsx" \
  ! -path "$APP_DIR/[locale]/*" \
  ! -path "$APP_DIR/_root/*" \
  ! -path "$APP_DIR/api/*")

if [ ${#PAGES[@]} -eq 0 ]; then
  echo "⚠️ No page.tsx files found to migrate. (Maybe your routes are not page.tsx?)"
else
  echo "Found ${#PAGES[@]} pages to migrate."
fi

for p in "${PAGES[@]}"; do
  # p like: src/app/products/page.tsx
  rel="${p#"$APP_DIR"/}"           # products/page.tsx  OR page.tsx
  dir_rel="$(dirname "$rel")"      # products OR .
  base_rel="$dir_rel"              # keep folder path

  # Move destination
  dest_dir="$APP_DIR/_root/$base_rel"
  mkdir -p "$dest_dir"
  mv "$p" "$dest_dir/page.tsx"

  # Localized wrapper destination
  loc_dir="$APP_DIR/[locale]/$base_rel"
  mkdir -p "$loc_dir"

  # Determine import path from wrapper to moved file
  # wrapper: $APP_DIR/[locale]/$base_rel/page.tsx
  # moved:   $APP_DIR/_root/$base_rel/page.tsx
  # relative import: from wrapper to _root requires "../../_root/..." depending on depth
  depth=0
  if [ "$base_rel" != "." ]; then
    # count slashes
    depth=$(awk -F'/' '{print NF}' <<<"$base_rel")
  fi

  # wrapper is one segment deeper ([locale]) + base_rel
  # to reach app root from wrapper: "../" (from page.tsx) then repeat for base_rel, plus one for [locale]
  # easiest: use absolute alias with "@/app" if src alias exists. But alias may be "@/*" already.
  # We'll use relative for safety:
  up="../"  # from /[locale]/.../page.tsx to /[locale]/.../
  # create prefix to go from wrapper dir to app dir
  # Example:
  # wrapper dir: app/[locale]/products -> to app: ../../
  # moved dir: app/_root/products
  # So import: ../../_root/products/page
  prefix="../" # from page.tsx to its dir
  # Build goUp segments to reach app root from wrapper dir
  goUp="../"  # from wrapper dir to [locale]
  if [ "$base_rel" = "." ]; then
    goUp="../"  # from app/[locale] to app
    importPath="${goUp}_root/page"
    target="/ja"
  else
    # from app/[locale]/a/b to app: ../../..
    # segments = 1 ([locale]) + depth (a/b)
    segments=$((1 + depth))
    goUp=""
    for ((i=0;i<segments;i++)); do goUp+="../"; done
    importPath="${goUp}_root/${base_rel}/page"
    target="/ja/${base_rel}"
  fi

  cat > "$loc_dir/page.tsx" <<EOF
export { default } from "${importPath}";
EOF

  # Replace original with redirect (old path -> /ja/...)
  mkdir -p "$(dirname "$p")"
  cat > "$p" <<EOF
import { redirect } from "next/navigation";

export default function Page() {
  redirect("${target}");
}
EOF
done

echo "✅ Done."
echo ""
echo "NEXT:"
echo "1) Run: npm run dev"
echo "2) Check: /ja , /en , /zh-hant"
echo "3) Old URLs like /products will redirect to /ja/products"
