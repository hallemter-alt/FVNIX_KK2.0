import { getProductBySlug, getLotsByProductSlug } from "@/lib/dataService";
import { getTranslations } from "next-intl/server";

export default async function ProductDetail({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const { slug, locale } = await params;
  const t = await getTranslations("productDetail");
  const p = getProductBySlug(slug);
  
  if (!p) {
    return (
      <main className="p-6 min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
        <div className="bg-warm-white rounded-xl p-8 text-center border-2 font-body" style={{borderColor: 'var(--color-warm-gray)', color: 'var(--color-text-primary)'}}>
          {t("notFound")}
        </div>
      </main>
    );
  }

  const lots = getLotsByProductSlug(p.slug);
  
  // Select product name based on locale
  const productName = locale === 'ja' 
    ? (p.name.ja || p.name.en) 
    : locale === 'zh-hant' 
      ? (p.name.zh || p.name.en) 
      : p.name.en;

  return (
    <main className="mx-auto max-w-5xl p-6 min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      <div className="bg-warm-white texture-ceramic rounded-xl p-8 mb-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
        <h1 className="text-3xl font-display font-semibold" style={{color: 'var(--color-text-primary)'}}>
          {productName}
        </h1>
        <div className="mt-1 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
          {p.latinName}
        </div>
        <div className="mt-2 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>
          {p.origin} · {p.altitude} · {p.extraction}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a 
          className="rounded-xl font-body px-4 py-2 font-semibold transition-all border-2 hover:shadow-lg" 
          style={{backgroundColor: 'var(--color-sage)', color: 'var(--color-text-light)', borderColor: 'var(--color-sage)'}} 
          href={`/${locale}/request?type=sample&product=${p.slug}`}
        >
          {t("requestSample")}
        </a>
        <a 
          className="rounded-xl font-body border-2 px-4 py-2 font-semibold transition-all hover:shadow-md" 
          style={{borderColor: 'var(--color-sage)', color: 'var(--color-sage)', backgroundColor: 'var(--color-warm-white)'}} 
          href={`/${locale}/request?type=quote&product=${p.slug}`}
        >
          {t("requestQuote")}
        </a>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-body font-semibold" style={{color: 'var(--color-text-primary)'}}>
          {t("documentsTitle")}
        </h2>
        <div className="mt-4 space-y-4">
          {lots.map((lot: any) => (
            <div key={lot.lotNo} className="rounded-2xl bg-warm-white texture-woven border-2 p-4" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex justify-between gap-2 font-body">
                <div className="font-medium" style={{color: 'var(--color-text-primary)'}}>
                  {t("lot")}: {lot.lotNo}
                </div>
                <div className="text-sm" style={{color: 'var(--color-text-secondary)'}}>
                  {lot.productionDate}
                </div>
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lot.docs?.map((d: any) => (
                  <a 
                    key={d.id} 
                    className="rounded-xl bg-warm-white border-2 px-3 py-2 hover:shadow-lg transition-shadow font-body" 
                    style={{borderColor: 'var(--color-warm-gray)'}} 
                    href={d.url} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <div className="text-sm font-medium" style={{color: 'var(--color-text-primary)'}}>
                      {d.type} · {d.lang.toUpperCase()}
                    </div>
                    <div className="text-xs" style={{color: 'var(--color-text-secondary)'}}>
                      {d.title}
                    </div>
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
