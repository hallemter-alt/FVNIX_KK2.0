import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function MarketPositionPage() {
  const t = await getTranslations("marketPosition");
  
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

      {/* Global Market Share */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("marketShare.title")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eucalyptus Oil */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform border border-stone-200">
              <div className="text-6xl mb-4">🥇</div>
              <h3 className="text-3xl font-bold text-yellow-900 mb-3">
                {t("marketShare.eucalyptus.rank")}
              </h3>
              <h4 className="text-2xl font-bold text-yellow-800 mb-4">
                {t("marketShare.eucalyptus.name")}
              </h4>
              <div className="text-5xl font-bold text-yellow-900 mb-2">
                {t("marketShare.eucalyptus.share")}
              </div>
              <p className="text-yellow-800 font-semibold">{t("marketShare.eucalyptus.shareLabel")}</p>
            </div>

            {/* Cinnamon Oil */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🥉</div>
              <h3 className="text-3xl font-bold text-orange-900 mb-3">
                {t("marketShare.cinnamon.rank")}
              </h3>
              <h4 className="text-2xl font-bold text-orange-800 mb-4">
                {t("marketShare.cinnamon.name")}
              </h4>
              <div className="text-5xl font-bold text-orange-900 mb-2">
                {t("marketShare.cinnamon.share")}
              </div>
              <p className="text-orange-800 font-semibold">{t("marketShare.cinnamon.shareLabel")}</p>
            </div>

            {/* Tea Tree Oil */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🥈</div>
              <h3 className="text-3xl font-bold text-green-900 mb-3">
                {t("marketShare.teaTree.rank")}
              </h3>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                {t("marketShare.teaTree.name")}
              </h4>
              <div className="text-5xl font-bold text-green-900 mb-2">
                {t("marketShare.teaTree.share")}
              </div>
              <p className="text-green-800 font-semibold">{t("marketShare.teaTree.shareLabel")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Performance */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {t("performance.title")}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">100+</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {t("performance.customers")}
              </h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-purple-900 mb-2">¥514M</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                {t("performance.revenue")}
              </h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-green-900 mb-2">25+</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                {t("performance.experience")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            {t("clients.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Givaudan 🇨🇭</h3>
              <p className="text-sm text-gray-600">{t("clients.givaudan")}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">DSM-Firmenich 🇨🇭</h3>
              <p className="text-sm text-gray-600">{t("clients.dsm")}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">IFF 🇺🇸</h3>
              <p className="text-sm text-gray-600">{t("clients.iff")}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mane 🇫🇷</h3>
              <p className="text-sm text-gray-600">{t("clients.mane")}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Robertet 🇫🇷</h3>
              <p className="text-sm text-gray-600">{t("clients.robertet")}</p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+ 🌍</h3>
              <p className="text-sm text-gray-600">{t("clients.others")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/request" 
              className="rounded-xl bg-white text-purple-700 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              {t("cta.partnership")}
            </a>
            <a 
              href="/products" 
              className="rounded-xl border-2 border-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-all"
            >
              {t("cta.catalog")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
