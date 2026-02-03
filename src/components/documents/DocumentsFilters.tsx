"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Opt = { label: string; value: string };

function parseList(v: string | null) {
  return (v || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function setOrDelete(sp: URLSearchParams, key: string, value: string) {
  if (!value) sp.delete(key);
  else sp.set(key, value);
}

function uniqSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function toggle(list: string[], value: string) {
  const set = new Set(list);
  if (set.has(value)) set.delete(value);
  else set.add(value);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function Chip({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1 text-xs hover:shadow"
      title="Click to remove"
    >
      {text} ✕
    </button>
  );
}

function MultiPick({
  label,
  options,
  selected,
  onToggle,
  onClear,
}: {
  label: string;
  options: Opt[];
  selected: string[];
  onToggle: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs opacity-70">{label}</div>
        {selected.length ? (
          <button type="button" className="text-xs underline opacity-70 hover:opacity-100" onClick={onClear}>
            Clear
          </button>
        ) : null}
      </div>

      {selected.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {selected.map((v) => (
            <Chip key={v} text={v} onClick={() => onToggle(v)} />
          ))}
        </div>
      ) : (
        <div className="mt-2 text-xs opacity-60">No selection</div>
      )}

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((o) => {
          const checked = selected.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onToggle(o.value)}
              className={`rounded-xl border px-3 py-2 text-left text-xs hover:shadow ${
                checked ? "bg-black text-white" : ""
              }`}
              aria-pressed={checked}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DocumentsFilters({
  typeValues,
  productValues,
  lotValues,
}: {
  typeValues: string[];
  productValues: { slug: string; label: string }[];
  lotValues: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const current = {
    q: sp.get("q") || "",
    types: parseList(sp.get("type")),
    products: parseList(sp.get("product")),
    lots: parseList(sp.get("lot")),
  };

  const typeOptions = useMemo(
    () => uniqSorted(typeValues).map((v) => ({ label: v, value: v })),
    [typeValues]
  );

  const productOptions = useMemo(
    () => productValues.map((p) => ({ label: p.label, value: p.slug })),
    [productValues]
  );

  const lotOptions = useMemo(
    () => uniqSorted(lotValues).map((v) => ({ label: v, value: v })),
    [lotValues]
  );

  function push(next: Partial<typeof current>) {
    const nextSp = new URLSearchParams(sp.toString());

    if (next.q !== undefined) setOrDelete(nextSp, "q", next.q);

    if (next.types !== undefined) setOrDelete(nextSp, "type", next.types.join(","));
    if (next.products !== undefined) setOrDelete(nextSp, "product", next.products.join(","));
    if (next.lots !== undefined) setOrDelete(nextSp, "lot", next.lots.join(","));

    const qs = nextSp.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  function clearAll() {
    router.push(pathname);
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1">
            <label className="text-xs opacity-70">Search</label>
            <input
              className="mt-1 w-full rounded-xl border p-3"
              placeholder="Title / type / product / lot..."
              value={current.q}
              onChange={(e) => push({ q: e.target.value })}
            />
          </div>

          <button className="rounded-xl border px-4 py-3 hover:shadow" onClick={clearAll} type="button">
            Clear all
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <MultiPick
          label="Type (multi)"
          options={typeOptions}
          selected={current.types}
          onToggle={(v) => push({ types: toggle(current.types, v) })}
          onClear={() => push({ types: [] })}
        />

        <MultiPick
          label="Product (multi)"
          options={productOptions}
          selected={current.products}
          onToggle={(v) => push({ products: toggle(current.products, v) })}
          onClear={() => push({ products: [] })}
        />

        <MultiPick
          label="Lot (multi)"
          options={lotOptions}
          selected={current.lots}
          onToggle={(v) => push({ lots: toggle(current.lots, v) })}
          onClear={() => push({ lots: [] })}
        />
      </div>
    </div>
  );
}
