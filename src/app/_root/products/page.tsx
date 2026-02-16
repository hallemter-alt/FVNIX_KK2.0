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

// Get category-specific styling based on series
function getCategoryStyles(series: string) {
  const s = normalize(series);
  
  if (s.includes("floral") || s.includes("flower")) {
    return {
      badge: "product-badge product-badge-floral",
      card: "product-floral-card texture-ceramic",
      border: "border-2",
      textColor: "text-gray-900" // Dark text for light background
    };
  }
  
  if (s.includes("citrus")) {
    return {
      badge: "product-badge product-badge-citrus",
      card: "product-citrus-card texture-woven",
      border: "border-2",
      textColor: "text-gray-900"
    };
  }
  
  if (s.includes("herbal") || s.includes("herb")) {
    return {
      badge: "product-badge product-badge-herbal",
      card: "product-herbal-card texture-linen",
      border: "border-2",
      textColor: "text-gray-100" // Light text for dark background
    };
  }
  
  if (s.includes("woody") || s.includes("wood")) {
    return {
      badge: "product-badge product-badge-woody",
      card: "product-woody-card texture-wood",
      border: "border-2",
      textColor: "text-gray-100"
    };
  }
  
  if (s.includes("spicy") || s.includes("spice")) {
    return {
      badge: "product-badge product-badge-spicy",
      card: "product-spicy-card texture-stone",
      border: "border-2",
      textColor: "text-gray-900"
    };
  }
  
  if (s.includes("resinous") || s.includes("resin")) {
    return {
      badge: "product-badge product-badge-resinous",
      card: "product-resinous-card texture-woven",
      border: "border-2",
      textColor: "text-gray-100"
    };
  }
  
  // Default styling
  return {
    badge: "text-xs text-gray-600",
    card: "bg-natural-medium texture-woven",
    border: "border border-stone-200",
    textColor: "text-gray-900"
  };
}

// Map product series to category color classes
function getCategoryColorClass(series: string): string {
  const normalized = normalize(series);
  if (normalized.includes('floral') || normalized.includes('rose')) return 'category-floral';
  if (normalized.includes('citrus')) return 'category-citrus';
  if (normalized.includes('herbal') || normalized.includes('herb')) return 'category-herbal';
  if (normalized.includes('wood') || normalized.includes('cedar') || normalized.includes('sandalwood')) return 'category-woody';
  if (normalized.includes('spice') || normalized.includes('spicy') || normalized.includes('cinnamon')) return 'category-spicy';
  if (normalized.includes('resin')) return 'category-resinous';
  return 'bg-natural-warm'; // default fallback
}

function getCategoryTextClass(series: string): string {
  const normalized = normalize(series);
  if (normalized.includes('floral') || normalized.includes('rose')) return 'text-category-floral';
  if (normalized.includes('citrus')) return 'text-category-citrus';
  if (normalized.includes('herbal') || normalized.includes('herb')) return 'text-category-herbal';
  if (normalized.includes('wood') || normalized.includes('cedar') || normalized.includes('sandalwood')) return 'text-category-woody';
  if (normalized.includes('spice') || normalized.includes('spicy') || normalized.includes('cinnamon')) return 'text-category-spicy';
  if (normalized.includes('resin')) return 'text-category-resinous';
  return 'text-gray-700'; // default fallback
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
      <div className="bg-warm-white/95 texture-ceramic rounded-xl p-8 mb-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
        <h1 className="text-3xl font-display font-semibold" style={{color: 'var(--color-text-primary)'}}>Essential Oils</h1>
        <p className="mt-2 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
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

      <div className="mt-6 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
        Results: <span className="font-medium">{filtered.length}</span> / {all.length}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const categoryStyle = getCategoryStyles(p.series || "");
          
          return (
            <Link 
              key={p.slug} 
              href={`/products/${p.slug}`} 
              className={`rounded-2xl ${categoryStyle.card} ${categoryStyle.border} p-5 hover:shadow-lg transition-all product-card relative overflow-hidden`}
            >
              {/* Content wrapper with better contrast */}
              <div className="relative z-10">
                <div className={categoryStyle.badge}>
                  {p.series || "—"}
                </div>
                <div className={`mt-2 text-lg font-semibold ${categoryStyle.textColor}`}>
                  {p.name.en || p.name.zh}
                </div>
                <div className={`text-sm ${categoryStyle.textColor} opacity-80 italic`}>
                  {p.latinName}
                </div>
                <div className={`mt-3 text-xs ${categoryStyle.textColor} opacity-70`}>
                  {p.origin} · {p.altitude} · {p.extraction}
                </div>

                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span 
                        key={t} 
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          categoryStyle.textColor === "text-gray-100"
                            ? "bg-white/20 text-white border border-white/30"
                            : "bg-gray-900/10 text-gray-900 border border-gray-900/20"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
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
