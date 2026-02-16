export default function CertificationsPage() {
  return (
    <main className="min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>Quality Assurance & Sustainability</h1>
          <p className="text-2xl font-body" style={{color: 'var(--color-text-secondary)'}}>
            International Certifications & Sustainable Practices
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            International Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* KOSHER */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">✡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">KOSHER</h3>
              <p className="text-sm text-gray-600">Kosher Food Certification</p>
            </div>

            {/* REACH */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">REACH</h3>
              <p className="text-sm text-gray-600">EU Chemical Substance Registration</p>
            </div>

            {/* HACCP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HACCP</h3>
              <p className="text-sm text-gray-600">Food Safety Management System</p>
            </div>

            {/* cGMP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">cGMP</h3>
              <p className="text-sm text-gray-600">Pharmaceutical Good Manufacturing Practice</p>
            </div>

            {/* ISO 9001 */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>

            {/* Food Production License */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Food License</h3>
              <p className="text-sm text-gray-600">Food Production Permit</p>
            </div>

            {/* Medicinal Eucalyptus GMP */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medicinal GMP</h3>
              <p className="text-sm text-gray-600">Eucalyptus Oil Pharmaceutical Standard</p>
            </div>

            {/* Biopesticide License */}
            <div className="bg-natural-medium texture-woven rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center border border-stone-200">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Biopesticide</h3>
              <p className="text-sm text-gray-600">Biological Pesticide License</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Quality Management System
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900">Complete Traceability</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From seed to finished product, achieving highly transparent management. 
                All production processes are fully traceable, ensuring peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🌍</div>
                <h3 className="text-2xl font-bold text-gray-900">International Standards</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Strictly comply with quality standards recognized by global markets, 
                providing customers with safe and high-quality products.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-900">Full Supply Chain</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                From cultivation, extraction, refining to shipping - integrated management 
                within the group ensures continuous stable high quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Sustainability Commitment
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-green-900 mb-6">
                "Company + Farm + Farmers" Model
              </h3>
              <p className="text-gray-800 leading-relaxed mb-6">
                A win-win model where the company provides technology and seedlings, 
                and farmers are responsible for cultivation. This achieves harmonious 
                coexistence between ecological protection and rural revitalization.
              </p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Technology Transfer:</strong> Providing advanced cultivation techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Fair Trade:</strong> Ensuring fair compensation for farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Ecological Balance:</strong> Protecting natural ecosystems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Self-Managed Cultivation Bases
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-blue-800 mb-2">
                    10,000+ Mu (670+ Hectares)
                  </h4>
                  <p className="text-gray-800">
                    Tea Tree cultivation scale in Yunnan highlands
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-800 mb-2">
                    Advanced Facilities
                  </h4>
                  <p className="text-gray-800">
                    Continuous automated extraction equipment compliant with GMP standards 
                    ensures high quality
                  </p>
                </div>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Green · Natural · Sustainable</strong><br/>
                    Our commitment to environmental stewardship and long-term sustainability
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
          <h2 className="text-4xl font-bold mb-6">ESG Commitment</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            We align with global ESG (Environmental, Social, Governance) standards, 
            creating value for all stakeholders while protecting our planet for future generations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-2">Environmental</h3>
              <p className="text-sm opacity-90">
                Sustainable farming, biodiversity protection, carbon footprint reduction
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-2">Social</h3>
              <p className="text-sm opacity-90">
                Fair trade, community development, farmer welfare
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold mb-2">Governance</h3>
              <p className="text-sm opacity-90">
                Transparency, ethical practices, regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Backed by international certifications and sustainable practices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/products" 
              className="rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-white font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
            >
              View Our Products
            </a>
            <a 
              href="/documents" 
              className="rounded-xl border-2 border-green-600 px-8 py-4 font-bold text-lg text-green-700 hover:bg-green-50 transition-all"
            >
              Download Certificates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
