import { getProductBySlug, getLotsByProductSlug } from "@/lib/dataService";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return <main className="p-6 min-h-screen bg-natural-light texture-linen"><div className="bg-natural-warm rounded-xl p-8 text-center">Not Found</div></main>;

  const lots = getLotsByProductSlug(p.slug);

  return (
    <main className="mx-auto max-w-5xl p-6 min-h-screen bg-natural-light texture-linen">
      <div className="bg-natural-medium texture-ceramic rounded-xl p-8 mb-8 border border-stone-200">
        <h1 className="text-3xl font-semibold text-gray-900">{p.name.en || p.name.zh}</h1>
        <div className="mt-1 text-sm text-gray-600">{p.latinName}</div>
        <div className="mt-2 text-sm text-gray-600">{p.origin} · {p.altitude} · {p.extraction}</div>
      </div>

      <div className="mt-6 flex gap-3">
        <a className="rounded-xl bg-natural-taupe hover:bg-natural-stone px-4 py-2 text-gray-900 font-semibold transition-colors border border-stone-300" href={`/request?type=sample&product=${p.slug}`}>
          Request Sample
        </a>
        <a className="rounded-xl bg-natural-light hover:bg-natural-warm border border-stone-300 px-4 py-2 text-gray-900 font-semibold transition-colors" href={`/request?type=quote&product=${p.slug}`}>
          Request Quote
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Documents by Lot</h2>
        <div className="mt-4 space-y-4">
          {lots.map((lot: any) => (
            <div key={lot.lotNo} className="rounded-2xl bg-natural-medium texture-woven border border-stone-200 p-4">
              <div className="flex justify-between gap-2">
                <div className="font-medium">LOT: {lot.lotNo}</div>
                <div className="text-sm opacity-70">{lot.productionDate}</div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lot.docs?.map((d: any) => (
                  <a key={d.id} className="rounded-xl bg-natural-light border border-stone-300 px-3 py-2 hover:shadow-lg transition-shadow" href={d.url} target="_blank" rel="noreferrer">
                    <div className="text-sm font-medium">{d.type} · {d.lang.toUpperCase()}</div>
                    <div className="text-xs opacity-70">{d.title}</div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
