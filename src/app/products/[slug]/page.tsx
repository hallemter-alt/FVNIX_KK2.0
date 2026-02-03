import { getProductBySlug, getLotsByProductSlug } from "@/lib/dataService";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const p = getProductBySlug(params.slug);
  if (!p) return <main className="p-6">Not Found</main>;

  const lots = getLotsByProductSlug(p.slug);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-semibold">{p.name.en || p.name.zh}</h1>
      <div className="mt-1 text-sm opacity-80">{p.latinName}</div>
      <div className="mt-2 text-sm opacity-70">{p.origin} · {p.altitude} · {p.extraction}</div>

      <div className="mt-6 flex gap-3">
        <a className="rounded-xl bg-black px-4 py-2 text-white" href={`/request?type=sample&product=${p.slug}`}>
          Request Sample
        </a>
        <a className="rounded-xl border px-4 py-2" href={`/request?type=quote&product=${p.slug}`}>
          Request Quote
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Documents by Lot</h2>
        <div className="mt-4 space-y-4">
          {lots.map((lot: any) => (
            <div key={lot.lotNo} className="rounded-2xl border p-4">
              <div className="flex justify-between gap-2">
                <div className="font-medium">LOT: {lot.lotNo}</div>
                <div className="text-sm opacity-70">{lot.productionDate}</div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lot.docs?.map((d: any) => (
                  <a key={d.id} className="rounded-xl border px-3 py-2 hover:shadow" href={d.url} target="_blank" rel="noreferrer">
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
