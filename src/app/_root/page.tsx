import CloudHero from "@/components/hero/CloudHero";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden -mt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <CloudHero />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-3xl rounded-2xl bg-white/80 p-10 backdrop-blur-md shadow-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                FVNIX
              </h1>
              <p className="mt-2 text-2xl font-semibold text-gray-800">
                Premium Natural Ingredients
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Elevated Goodness from Yunnan · 云南鲜品 带给您的生活
              </p>
              <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
                We bring natural fragrances and botanical essences from the mysterious highland "Shangri-La" 
                to the Japanese market with pure quality.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-white font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg" href="/products">
                Browse Essential Oils
              </a>
              <a className="rounded-xl border-2 border-green-600 px-6 py-3 font-semibold text-green-700 hover:bg-green-50 transition-all" href="/documents">
                Technical Documents
              </a>
              <a className="rounded-xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-all" href="/about">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pure & Natural from Yunnan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Gift of Life from the "Roof of the World"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Altitude Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                From Yunnan's Shangri-La plateau (2800-3400m), where diverse ecosystems 
                create the "Kingdom of Plants" with unique natural power.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO 9001, HACCP, cGMP certified. High-quality agricultural products 
                with complete traceability and international standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Sourcing</h3>
              <p className="text-gray-600 leading-relaxed">
                "Company + Farm + Farmers" model ensures ecological protection 
                and rural revitalization through traceable supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FVNIX Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FVNIX
            </h2>
            <p className="text-xl text-gray-600">
              Connecting Yunnan's Natural Treasures with Global Markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🏆 Global Market Leader
              </h3>
              <p className="text-gray-600">
                <strong>Global No.1</strong> in Eucalyptus Oil (40%+ market share)<br/>
                <strong>Global Top 3</strong> in Cinnamon Oil (30%)<br/>
                <strong>Global Top 2</strong> in Tea Tree Oil (30%)
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🤝 Trusted by Industry Giants
              </h3>
              <p className="text-gray-600">
                Long-term supplier to Givaudan, DSM-Firmenich, IFF, Mane, Robertet 
                and 100+ global partners with 25+ years of experience.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                📊 Complete Traceability
              </h3>
              <p className="text-gray-600">
                From seed cultivation to extraction and packaging - full supply chain 
                management with visible producers and transparent quality control.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🔬 Advanced Technology
              </h3>
              <p className="text-gray-600">
                GMP-compliant continuous automated extraction facilities with 10,000+ mu 
                (670+ hectares) of self-managed cultivation bases in Yunnan highlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Premium Natural Ingredients?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our Tokyo office team for free samples, quotations, and product specifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/request" 
              className="rounded-xl bg-white text-green-700 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              Request Free Samples
            </a>
            <a 
              href="mailto:info@fvnix.com" 
              className="rounded-xl border-2 border-white px-8 py-4 font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📞 TEL: +81-3-6914-3633 | 📱 Mobile: +81-80-4363-2780</p>
            <p className="mt-1">📧 info@fvnix.com | 🌐 www.fvnix.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
