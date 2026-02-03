import { products } from "@/data/products";
import { documentAssets } from "@/data/documents";
import { lots } from "@/data/lots";
import { DocType, Product } from "./types";

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}

export function getLotsByProductSlug(productSlug: string) {
  return lots
    .filter((l) => l.productSlug === productSlug)
    .map((l) => ({
      ...l,
      docs: l.documentIds.map((id) => documentAssets.find((d) => d.id === id)).filter(Boolean),
    }));
}

export function getDocumentOptions() {
  const types = Array.from(new Set(documentAssets.map((d) => d.type))).sort();
  const productSlugs = Array.from(new Set(documentAssets.map((d) => d.productSlug).filter(Boolean))).sort() as string[];
  const lotNos = Array.from(new Set(documentAssets.map((d) => d.lotNo).filter(Boolean))).sort() as string[];
  return { types, productSlugs, lotNos };
}

export function getDocuments(filters?: { 
  types?: DocType[]; 
  productSlugs?: string[]; 
  lotNos?: string[];
  q?: string;
}) {
  return documentAssets.filter((d) => {
    // Multi-select OR logic for types
    if (filters?.types && filters.types.length > 0) {
      if (!filters.types.includes(d.type)) return false;
    }
    
    // Multi-select OR logic for productSlugs
    if (filters?.productSlugs && filters.productSlugs.length > 0) {
      if (!d.productSlug || !filters.productSlugs.includes(d.productSlug)) return false;
    }
    
    // Multi-select OR logic for lotNos
    if (filters?.lotNos && filters.lotNos.length > 0) {
      if (!d.lotNo || !filters.lotNos.includes(d.lotNo)) return false;
    }
    
    // Full-text search across multiple fields
    if (filters?.q) {
      const needle = filters.q.toLowerCase();
      const hay = [
        d.title || '',
        d.type || '',
        d.lang || '',
        d.productSlug || '',
        d.lotNo || ''
      ].join(' ').toLowerCase();
      if (!hay.includes(needle)) return false;
    }
    
    return true;
  });
}

export function groupProductsBySeries(list: Product[]) {
  const m = new Map<string, Product[]>();
  for (const p of list) {
    const key = p.series || "Other";
    m.set(key, [...(m.get(key) || []), p]);
  }
  return Array.from(m.entries()).sort(([a], [b]) => a.localeCompare(b));
}

// Export for backwards compatibility
export const getAllDocuments = () => documentAssets;
export const getAllLots = () => lots;
