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
