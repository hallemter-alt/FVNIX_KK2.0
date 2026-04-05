import { getProductBySlug } from "@/lib/dataService";
import { documentAssets } from "@/data/documents";
import { getTranslations } from "next-intl/server";
import { getLocalizedString, Language } from "@/lib/types";

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

  const lang = locale as Language;

  // Select product name based on locale
  const productName = getLocalizedString(p.name, lang);

  // Helper for mixed types (string | LangString)
  const getMixedString = (field: any) => {
    if (!field) return "-";
    if (typeof field === "string") return field;
    return getLocalizedString(field, lang);
  };

  const productDocs = documentAssets.filter(d => d.productSlug === slug);
  const generalDocs = productDocs.filter(d => !d.lotNo);
  const lotDocsMap = productDocs.filter(d => !!d.lotNo).reduce((acc, d) => {
    if (!acc[d.lotNo!]) acc[d.lotNo!] = [];
    acc[d.lotNo!].push(d);
    return acc;
  }, {} as Record<string, typeof documentAssets>);

  return (
    <main className="mx-auto min-h-screen font-body texture-linen" style={{backgroundColor: '#faf9f6'}}>
      {/* Header section mimicking THREE detail page style */}
      <div className="pt-16 pb-12 px-6 bg-white shadow-sm border-b" style={{borderColor: 'var(--color-warm-gray)'}}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6" style={{color: 'var(--color-text-primary)', letterSpacing: '0.05em'}}>
            {productName}
          </h1>

          <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed" style={{color: 'var(--color-text-primary)'}}>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-3 font-medium w-32">{t("scientificName")}</th>
                  <td className="py-3 italic">{p.latinName || "-"}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-3 font-medium">{t("family")}</th>
                  <td className="py-3">{getMixedString(p.family)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-3 font-medium">{t("origin")}</th>
                  <td className="py-3">{getMixedString(p.origin)}</td>
                </tr>
              </tbody>
            </table>
            
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-gray-100">
                  <th className="py-3 font-medium w-32">{t("partUsed")}</th>
                  <td className="py-3">{getMixedString(p.partUsed)}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <th className="py-3 font-medium">{t("extraction")}</th>
                  <td className="py-3">{getMixedString(p.extraction)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex gap-4">
            <a 
              className="px-6 py-3 rounded-sm font-medium transition-all text-sm tracking-wide text-white hover:opacity-90 shadow-sm" 
              style={{backgroundColor: '#3b4d44'}} 
              href={`/${locale}/request?type=sample&product=${p.slug}`}
            >
              {t("requestSample")}
            </a>
            <a 
              className="px-6 py-3 rounded-sm font-medium transition-all text-sm tracking-wide hover:opacity-90 border shadow-sm" 
              style={{borderColor: '#3b4d44', color: '#3b4d44', backgroundColor: 'white'}} 
              href={`/${locale}/request?type=quote&product=${p.slug}`}
            >
              {t("requestQuote")}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Characteristics Section */}
        {p.characteristics && (
          <section>
            <h2 className="text-2xl font-display mb-4 pb-2 border-b" style={{color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}>
              {t("characteristics")}
            </h2>
            <div className="leading-loose text-base" style={{color: 'var(--color-text-secondary)'}}>
              {getMixedString(p.characteristics)}
            </div>
          </section>
        )}

        {/* History Section */}
        {p.history && (
          <section>
            <h2 className="text-2xl font-display mb-4 pb-2 border-b" style={{color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}>
              {t("history")}
            </h2>
            <div className="leading-loose text-base" style={{color: 'var(--color-text-secondary)'}}>
              {getMixedString(p.history)}
            </div>
          </section>
        )}

        {/* Components Section */}
        {p.components && p.components.length > 0 && (
          <section>
            <h2 className="text-2xl font-display mb-6 pb-2 border-b" style={{color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}>
              {t("components")}
            </h2>
            <div className="space-y-6">
              {p.components.map((comp: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2" style={{color: '#3b4d44'}}>{getLocalizedString(comp.name, lang)}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                    {getLocalizedString(comp.desc, lang)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Documents Section */}
        <section>
          <h2 className="text-2xl font-display mb-6 pb-2 border-b" style={{color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}>
            {t("docsAndCerts")}
          </h2>

          {productDocs.length === 0 ? (
            <p className="text-sm italic" style={{color: 'var(--color-text-muted)'}}>No documents available at this time.</p>
          ) : (
            <div className="space-y-8">
              
              {/* General Docs */}
              {generalDocs.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3" style={{color: 'var(--color-text-primary)'}}>General Documents</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {generalDocs.map((d: any) => (
                      <a 
                        key={d.id} 
                        className="group flex flex-col justify-center bg-white border px-4 py-3 hover:shadow-md transition-all rounded-sm" 
                        style={{borderColor: 'var(--color-warm-gray)'}} 
                        href={d.url} 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <div className="text-xs font-bold mb-1" style={{color: '#3b4d44'}}>
                          {d.type} · {d.lang.toUpperCase()}
                        </div>
                        <div className="text-sm group-hover:underline" style={{color: 'var(--color-text-primary)'}}>
                          {d.title}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Lot Docs */}
              {Object.keys(lotDocsMap).length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3" style={{color: 'var(--color-text-primary)'}}>{t("documentsTitle")}</h3>
                  <div className="space-y-4">
                    {Object.entries(lotDocsMap).map(([lotNo, docs]) => (
                      <div key={lotNo} className="bg-white border rounded-sm p-4 shadow-sm" style={{borderColor: 'var(--color-warm-gray)'}}>
                        <div className="font-medium text-sm mb-3 border-b pb-2" style={{color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}>
                          {t("lot")}: {lotNo}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {docs.map((d: any) => (
                            <a 
                              key={d.id} 
                              className="group flex flex-col justify-center bg-gray-50 border px-3 py-2 hover:shadow-md transition-all rounded-sm" 
                              style={{borderColor: '#e5e5e5'}} 
                              href={d.url} 
                              target="_blank" 
                              rel="noreferrer"
                            >
                              <div className="text-xs font-bold mb-1" style={{color: '#3b4d44'}}>
                                {d.type} · {d.lang.toUpperCase()}
                              </div>
                              <div className="text-xs group-hover:underline" style={{color: 'var(--color-text-primary)'}}>
                                {d.title}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </section>

      </div>
    </main>
  );
}
