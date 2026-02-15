"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Filters from "@/components/products/Filters";
import { getAllProducts } from "@/lib/dataService";

// Force dynamic rendering - disable static optimization
export const dynamic = 'force-dynamic';

function normalize(s: string) {
  return (s || "").trim().toLowerCase();
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const all = getAllProducts();

  // Generate filter options from existing data
  const seriesValues = all.map((p) => p.series || "");
  const originValues = all.map((p) => p.origin || "");
  const extractionValues = all.map((p) => p.extraction || "");
  const tagValues = all.flatMap((p) => p.tags || []);

  // Read URL query params
  const q = searchParams.get("q") || "";
  const series = searchParams.get("series") || "";
  const origin = searchParams.get("origin") || "";
  const extraction = searchParams.get("extraction") || "";
  
  // tag=relax,fresh - support multi-select tags
  const tagParam = searchParams.get("tag") || "";
  const selectedTags = tagParam
    ? tagParam.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const nq = normalize(q);
  const filtered = all.filter((p) => {
    if (series && p.series !== series) return false;
    if (origin && p.origin !== origin) return false;
    if (extraction && p.extraction !== extraction) return false;
    
    // ✅ Multi-select tags (OR logic)
    if (selectedTags.length) {
      const tags = p.tags || [];
      const hit = selectedTags.some((t) => tags.includes(t));
      if (!hit) return false;
    }

    if (nq) {
      const haystack = normalize(
        [
          p.name.en,
          p.name.zh,
          p.name.ja,
          p.latinName,
          p.notes,
          p.series,
          p.origin,
          p.extraction,
          ...(p.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
      );
      if (!haystack.includes(nq)) return false;
    }

    return true;
  });

  return (
    <main className="mx-auto max-w-6xl p-6 min-h-screen bg-natural-light texture-linen">
      <div className="bg-natural-medium/80 texture-ceramic rounded-xl p-8 mb-8 border border-stone-200">
        <h1 className="text-3xl font-semibold text-gray-900">Essential Oils</h1>
        <p className="mt-2 text-sm text-gray-700 opacity-90">
          Filter by series / origin / extraction / tags (multi-select). Shareable URLs.
        </p>
      </div>

      <div className="mt-6">
        <Filters
          seriesValues={seriesValues}
          originValues={originValues}
          extractionValues={extractionValues}
          tagValues={tagValues}
        />
      </div>

      <div className="mt-6 text-sm opacity-70">
        Results: <span className="font-medium">{filtered.length}</span> / {all.length}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl bg-natural-medium texture-woven border border-stone-200 p-4 hover:shadow-lg transition-shadow">
            <div className="text-xs text-gray-600">{p.series || "—"}</div>
            <div className="mt-1 text-lg font-medium text-gray-900">{p.name.en || p.name.zh}</div>
            <div className="text-sm text-gray-600">{p.latinName}</div>
            <div className="mt-3 text-xs text-gray-600">{p.origin} · {p.altitude} · {p.extraction}</div>

            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-natural-light border border-stone-300 px-2 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl bg-natural-warm texture-stone border border-stone-200 p-6 text-sm text-gray-700">
          No results. Try clearing filters or changing keywords.
        </div>
      )}
    </main>
  );
}

// Loading fallback component
function ProductsLoading() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold">Essential Oils</h1>
      <p className="mt-2 text-sm opacity-80">Loading...</p>
    </main>
  );
}

// Main page component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
