#!/usr/bin/env bash
set -e

# === 可調整：你的 Header 檔案路徑 ===
HEADER_PATH="src/components/Header.tsx"

if [ ! -f "$HEADER_PATH" ]; then
  echo "❌ 找不到 $HEADER_PATH"
  echo "請修改腳本內 HEADER_PATH 為實際檔案路徑"
  exit 1
fi

echo "==> 1) 備份原 Header"
cp "$HEADER_PATH" "${HEADER_PATH}.backup"

echo "==> 2) 替換 Header 為多語版本"

cat > "$HEADER_PATH" <<'EOF'
"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const params = useParams();
  const locale = params?.locale as string;

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          FVNIX
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`/${locale}/products`} className="hover:opacity-70">
            {t("products")}
          </Link>
          <Link href={`/${locale}/about`} className="hover:opacity-70">
            {t("about")}
          </Link>
          <Link href={`/${locale}/journal`} className="hover:opacity-70">
            {t("journal")}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:opacity-70">
            {t("contact")}
          </Link>
        </nav>

        {/* Language Switch */}
        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
EOF

echo "==> 3) 更新 messages"

cat > src/messages/ja.json <<'EOF'
{
  "nav": {
    "products": "製品",
    "about": "ブランド",
    "journal": "コラム",
    "contact": "お問い合わせ"
  }
}
EOF

cat > src/messages/en.json <<'EOF'
{
  "nav": {
    "products": "Products",
    "about": "About",
    "journal": "Journal",
    "contact": "Contact"
  }
}
EOF

cat > src/messages/zh-hant.json <<'EOF'
{
  "nav": {
    "products": "產品",
    "about": "品牌",
    "journal": "專欄",
    "contact": "聯絡我們"
  }
}
EOF

echo ""
echo "✅ Phase 2 Header i18n 完成"
echo "請執行： npm run dev"
echo "測試： /ja /en /zh-hant"
