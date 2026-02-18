import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function CertificationsPage() {
  const t = await getTranslations("certifications");
  
  return (
    <main className="min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
            {t("hero.title")}
          </h1>
          <p className="text-2xl font-body" style={{color: 'var(--color-text-secondary)'}}>
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("certifications.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* KOSHER */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">✡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.kosher.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.kosher.description")}</p>
            </div>

            {/* REACH */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.reach.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.reach.description")}</p>
            </div>

            {/* HACCP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.haccp.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.haccp.description")}</p>
            </div>

            {/* cGMP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.cgmp.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.cgmp.description")}</p>
            </div>

            {/* ISO 9001 */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.iso9001.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.iso9001.description")}</p>
            </div>

            {/* Food Production License */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.foodLicense.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.foodLicense.description")}</p>
            </div>

            {/* Medicinal Eucalyptus GMP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.medicinalGmp.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.medicinalGmp.description")}</p>
            </div>

            {/* Biopesticide License */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("certifications.items.biopesticide.name")}</h3>
              <p className="text-sm text-gray-600">{t("certifications.items.biopesticide.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("qualitySystem.title")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900">{t("qualitySystem.items.traceability.title")}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("qualitySystem.items.traceability.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900">{t("qualitySystem.items.standards.title")}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("qualitySystem.items.standards.description")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-900">{t("qualitySystem.items.supplyChain.title")}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("qualitySystem.items.supplyChain.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("sustainability.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-green-900 mb-6">
                {t("sustainability.farmModel.title")}
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                {t("sustainability.farmModel.description")}
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("sustainability.farmModel.benefits.tech")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("sustainability.farmModel.benefits.trade")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("sustainability.farmModel.benefits.ecology")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                {t("sustainability.bases.title")}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-blue-800 mb-2">
                    {t("sustainability.bases.scale")}
                  </h4>
                  <p className="text-gray-800">
                    {t("sustainability.bases.scaleDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-800 mb-2">
                    {t("sustainability.bases.facilities")}
                  </h4>
                  <p className="text-gray-800">
                    {t("sustainability.bases.facilitiesDescription")}
                  </p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>{t("sustainability.bases.commitment")}</strong><br/>
                    {t("sustainability.bases.commitmentDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Commitment */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("esg.title")}</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {t("esg.subtitle")}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2">{t("esg.environmental.title")}</h3>
              <p className="text-sm opacity-90">
                {t("esg.environmental.description")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">{t("esg.social.title")}</h3>
              <p className="text-sm opacity-90">
                {t("esg.social.description")}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold mb-2">{t("esg.governance.title")}</h3>
              <p className="text-sm opacity-90">
                {t("esg.governance.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/products" 
              className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-white font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
            >
              {t("cta.viewProducts")}
            </a>
            <a 
              href="/documents" 
              className="rounded-xl border-2 border-green-600 px-8 py-4 font-bold text-lg text-green-700 hover:bg-green-50 transition-all"
            >
              {t("cta.downloadCertificates")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
