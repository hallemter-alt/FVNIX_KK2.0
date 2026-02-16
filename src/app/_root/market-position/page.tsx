export default function MarketPositionPage() {
  return (
    <main className="min-h-screen bg-natural-light texture-linen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>Market Position & Performance</h1>
          <p className="text-2xl font-body" style={{color: 'var(--color-text-secondary)'}}>
            Global Leadership in Natural Essential Oils
          </p>
        </div>
      </section>

      {/* Global Market Share */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Global Market Share (2024)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eucalyptus Oil */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform border border-stone-200">
              <div className="text-6xl mb-4">🥇</div>
              <h3 className="text-3xl font-bold text-yellow-900 mb-3">
                GLOBAL NO.1
              </h3>
              <h4 className="text-2xl font-bold text-yellow-800 mb-4">
                Eucalyptus Oil Series
              </h4>
              <div className="text-5xl font-bold text-yellow-900 mb-2">
                40%+
              </div>
              <p className="text-yellow-800 font-semibold">Market Share</p>
            </div>

            {/* Cinnamon Oil */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🥉</div>
              <h3 className="text-3xl font-bold text-orange-900 mb-3">
                GLOBAL TOP 3
              </h3>
              <h4 className="text-2xl font-bold text-orange-800 mb-4">
                Cinnamon Oil Series
              </h4>
              <div className="text-5xl font-bold text-orange-900 mb-2">
                ~30%
              </div>
              <p className="text-orange-800 font-semibold">Market Share</p>
            </div>

            {/* Tea Tree Oil */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🥈</div>
              <h3 className="text-3xl font-bold text-green-900 mb-3">
                GLOBAL TOP 2
              </h3>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                Tea Tree Oil Series
              </h4>
              <div className="text-5xl font-bold text-green-900 mb-2">
                ~30%
              </div>
              <p className="text-green-800 font-semibold">Market Share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Performance */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Corporate Performance Overview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">100+</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Annual Overseas Customers
              </h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-purple-900 mb-2">¥514M</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Consolidated Revenue (2024)
              </h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl font-bold text-green-900 mb-2">25+</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Years of Experience
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Trusted by Global Industry Leaders
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Givaudan 🇨🇭</h3>
              <p className="text-sm text-gray-600">World's leading F&F company</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">DSM-Firmenich 🇨🇭</h3>
              <p className="text-sm text-gray-600">Global nutrition & beauty leader</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">IFF 🇺🇸</h3>
              <p className="text-sm text-gray-600">International Flavors & Fragrances</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mane 🇫🇷</h3>
              <p className="text-sm text-gray-600">French fragrance house</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Robertet 🇫🇷</h3>
              <p className="text-sm text-gray-600">Natural ingredients producer</p>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+ 🌍</h3>
              <p className="text-sm text-gray-600">Other Global Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Global Network</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/request" 
              className="rounded-xl bg-white text-purple-700 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Request Partnership Info
            </a>
            <a 
              href="/products" 
              className="rounded-xl border-2 border-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-all"
            >
              Browse Product Catalog
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
