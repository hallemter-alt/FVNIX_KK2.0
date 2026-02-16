"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DocumentsFilters from "@/components/documents/DocumentsFilters";
import { getAllProducts, getDocumentOptions, getDocuments } from "@/lib/dataService";
import type { DocType } from "@/lib/types";

// Force dynamic rendering - disable static optimization
export const dynamic = 'force-dynamic';

function parseList(v: string | null) {
  if (!v) return [];
  return v.split(",").map((s) => s.trim()).filter(Boolean);
}

function DocumentsContent() {
  const searchParams = useSearchParams();
  const allProducts = getAllProducts();
  const { types, productSlugs, lotNos } = getDocumentOptions();

  // product options: only show products that appear in documents, label uses name.en/zh
  const productValues = allProducts
    .filter((p) => productSlugs.includes(p.slug))
    .map((p) => ({
      slug: p.slug,
      label: p.name.en || p.name.zh || p.slug,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const q = searchParams.get("q") || "";
  const selectedTypes = parseList(searchParams.get("type")) as DocType[];
  const selectedProducts = parseList(searchParams.get("product"));
  const selectedLots = parseList(searchParams.get("lot"));

  const docs = getDocuments({
    types: selectedTypes,
    productSlugs: selectedProducts,
    lotNos: selectedLots,
    q,
  });

  return (
    <main className="mx-auto max-w-6xl p-6 min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      <div className="bg-warm-white/95 texture-ceramic rounded-xl p-8 mb-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
        <h1 className="text-3xl font-display font-semibold" style={{color: 'var(--color-text-primary)'}}>Document Center</h1>
        <p className="mt-2 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
          Multi-select filters: type / product / lot. Shareable URLs.
        </p>
      </div>

      <div className="mt-6">
        <DocumentsFilters typeValues={types} productValues={productValues} lotValues={lotNos} />
      </div>

      <div className="mt-6 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
        Results: <span className="font-medium">{docs.length}</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <a
            key={d.id}
            href={d.url}
            className="rounded-2xl bg-warm-white texture-woven border-2 p-4 hover:shadow-lg transition-shadow" style={{borderColor: 'var(--color-warm-gray)'}}
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-sm font-body font-medium" style={{color: 'var(--color-text-primary)'}}>
              {d.type} · {d.lang.toUpperCase()}
            </div>
            <div className="mt-1 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>{d.title}</div>
            <div className="mt-2 text-xs font-body" style={{color: 'var(--color-text-muted)'}}>
              {d.productSlug ? `product: ${d.productSlug}` : "product: —"}
              {d.lotNo ? ` · LOT ${d.lotNo}` : ""}
            </div>
          </a>
        ))}
      </div>

      {docs.length === 0 && (
        <div className="mt-10 rounded-2xl bg-warm-white texture-stone border-2 p-6 text-sm font-body" style={{borderColor: 'var(--color-warm-gray)', color: 'var(--color-text-secondary)'}}>
          No results. Try clearing filters or changing keywords.
        </div>
      )}
    </main>
  );
}

// Loading fallback component
function DocumentsLoading() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold">Document Center</h1>
      <p className="mt-2 text-sm opacity-80">Loading...</p>
    </main>
  );
}

// Main page component with Suspense boundary
export default function DocumentsPage() {
  return (
    <Suspense fallback={<DocumentsLoading />}>
      <DocumentsContent />
    </Suspense>
  );
}
