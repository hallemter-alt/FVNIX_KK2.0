"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Option = { label: string; value: string };

function setOrDelete(sp: URLSearchParams, key: string, value: string) {
  if (!value) sp.delete(key);
  else sp.set(key, value);
}

function buildOptions(values: string[]): Option[] {
  const uniq = Array.from(new Set(values.filter(Boolean)));
  uniq.sort((a, b) => a.localeCompare(b));
  return [{ label: "All", value: "" }, ...uniq.map((v) => ({ label: v, value: v }))];
}

export default function Filters({
  seriesValues,
  originValues,
  extractionValues,
  tagValues,
}: {
  seriesValues: string[];
  originValues: string[];
  extractionValues: string[];
  tagValues: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = {
    q: searchParams.get("q") || "",
    series: searchParams.get("series") || "",
    origin: searchParams.get("origin") || "",
    extraction: searchParams.get("extraction") || "",
    tags: (searchParams.get("tag") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
  };

  const seriesOptions = useMemo(() => buildOptions(seriesValues), [seriesValues]);
  const originOptions = useMemo(() => buildOptions(originValues), [originValues]);
  const extractionOptions = useMemo(() => buildOptions(extractionValues), [extractionValues]);
  
  // Tag options: only unique tags (no "All" option for multi-select)
  const tagOptions = useMemo(() => {
    const uniq = Array.from(new Set(tagValues.filter(Boolean)));
    uniq.sort((a, b) => a.localeCompare(b));
    return uniq;
  }, [tagValues]);

  function updateQuery(next: Partial<typeof current>) {
    const sp = new URLSearchParams(searchParams.toString());

    // 任何筛选改变时，建议把分页（若未来加）重置，这里预留
    // sp.delete("page");

    if (next.q !== undefined) setOrDelete(sp, "q", next.q);
    if (next.series !== undefined) setOrDelete(sp, "series", next.series);
    if (next.origin !== undefined) setOrDelete(sp, "origin", next.origin);
    if (next.extraction !== undefined) setOrDelete(sp, "extraction", next.extraction);
    
    // ✅ tags write back as tag=relax,fresh
    if (next.tags !== undefined) {
      const v = next.tags.join(",");
      setOrDelete(sp, "tag", v);
    }

    const qs = sp.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }
  
  function toggleTag(t: string) {
    const set = new Set(current.tags);
    if (set.has(t)) set.delete(t);
    else set.add(t);
    updateQuery({ tags: Array.from(set).sort((a, b) => a.localeCompare(b)) });
  }

  function clearAll() {
    router.push(pathname);
  }

  return (
    <div className="rounded-2xl border-2 p-4" style={{borderColor: 'var(--color-warm-gray)', backgroundColor: 'var(--color-warm-white)'}}>
      <div className="flex flex-col gap-4">
        {/* Search input */}
        <div className="flex-1">
          <label className="text-xs font-body" style={{color: '#758886'}}>Search</label>
          <input
            className="mt-1 w-full rounded-xl border-2 p-3 font-body" style={{borderColor: 'var(--color-warm-gray)', color: '#758886', backgroundColor: 'var(--color-warm-white)'}}
            placeholder="Name / Latin / notes / tags..."
            value={current.q}
            onChange={(e) => updateQuery({ q: e.target.value })}
          />
        </div>

        {/* Series, Origin, Extraction filters */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div>
            <label className="text-xs font-body" style={{color: '#758886'}}>Series</label>
            <select
              className="mt-1 w-full rounded-xl border-2 p-3 font-body" style={{borderColor: 'var(--color-warm-gray)', color: '#758886', backgroundColor: 'var(--color-warm-white)'}}
              value={current.series}
              onChange={(e) => updateQuery({ series: e.target.value })}
            >
              {seriesOptions.map((o) => (
                <option key={o.value || "all"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-body" style={{color: '#758886'}}>Origin</label>
            <select
              className="mt-1 w-full rounded-xl border-2 p-3 font-body" style={{borderColor: 'var(--color-warm-gray)', color: '#758886', backgroundColor: 'var(--color-warm-white)'}}
              value={current.origin}
              onChange={(e) => updateQuery({ origin: e.target.value })}
            >
              {originOptions.map((o) => (
                <option key={o.value || "all"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-body" style={{color: '#758886'}}>Extraction</label>
            <select
              className="mt-1 w-full rounded-xl border-2 p-3 font-body" style={{borderColor: 'var(--color-warm-gray)', color: '#758886', backgroundColor: 'var(--color-warm-white)'}}
              value={current.extraction}
              onChange={(e) => updateQuery({ extraction: e.target.value })}
            >
              {extractionOptions.map((o) => (
                <option key={o.value || "all"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tags multi-select section */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-xs font-body" style={{color: '#758886'}}>Tags (multi-select)</label>

            {current.tags.length > 0 ? (
              <button
                type="button"
                className="text-xs font-body underline hover:opacity-80 transition-opacity"
                style={{color: '#758886'}}
                onClick={() => updateQuery({ tags: [] })}
              >
                Clear tags
              </button>
            ) : null}
          </div>

          {/* Selected tags displayed as chips */}
          {current.tags.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {current.tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTag(t)}
                  className="rounded-full border-2 px-3 py-1 text-xs font-body hover:shadow transition-all"
                  style={{borderColor: '#758886', color: '#758886', backgroundColor: 'var(--color-warm-white)'}}
                  title="Click to remove"
                >
                  {t} ✕
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-2 text-xs font-body" style={{color: '#758886', opacity: 0.6}}>No tags selected</div>
          )}

          {/* Available tags: checkbox grid */}
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {tagOptions.map((t) => {
              const checked = current.tags.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleTag(t)}
                  className={`rounded-xl border-2 px-3 py-2 text-left text-xs font-body hover:shadow transition-all ${
                    checked ? "" : ""
                  }`}
                  style={{
                    borderColor: checked ? '#758886' : 'var(--color-warm-gray)',
                    backgroundColor: checked ? '#758886' : 'var(--color-warm-white)',
                    color: checked ? '#FFFFFF' : '#758886'
                  }}
                  aria-pressed={checked}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clear all button */}
        <div className="flex justify-end">
          <button className="rounded-xl border-2 px-6 py-2 font-body hover:shadow transition-all" style={{borderColor: '#758886', color: '#758886', backgroundColor: 'var(--color-warm-white)'}} onClick={clearAll}>
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
}
