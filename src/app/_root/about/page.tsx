export default function AboutPage() {
  return (
    <main className="min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-natural-taupe texture-wood text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About FVNIX</h1>
          <p className="text-2xl mb-4 opacity-90">
            凤凰有限公司 · Fvnix LLC.
          </p>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Premium Natural Ingredients - Elevated Goodness from Yunnan
          </p>
        </div>
      </section>

      {/* Our Message */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Message</h2>
            <p className="text-2xl text-gray-700 font-semibold mb-4">
              A Gift of Life from the "Roof of the World"
            </p>
          </div>
          
          <div className="bg-natural-medium texture-ceramic rounded-2xl shadow-xl p-10 max-w-4xl mx-auto border border-stone-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yunnan Province — once called "Shangri-La," a pristine highland plateau. 
              With its vast altitude variations, it has nurtured a unique "Kingdom of Plants."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We bring the natural power cultivated in this mystical land to Japan with pure quality. 
              Through high-quality agricultural products and their deep-processed products, 
              we support the healthy and beautiful lives of Japanese consumers with safety, 
              security, and high added value.
            </p>
            <p className="text-lg text-gray-800 font-semibold">
              This is the mission of Fvnix LLC.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border border-stone-200">
              <div className="text-4xl mb-3">🏔️</div>
              <h3 className="text-xl font-bold text-green-900">Pure & Natural</h3>
              <p className="text-green-800 mt-2">From Yunnan High Plateau</p>
            </div>
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border border-stone-200">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-blue-900">High Quality</h3>
              <p className="text-blue-800 mt-2">International Standards</p>
            </div>
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border border-stone-200">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-purple-900">Sustainable</h3>
              <p className="text-purple-800 mt-2">Traceable Supply Chain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Establishment Background */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Establishment Background</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-natural-light texture-linen rounded-xl shadow-lg p-8 border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">👤</div>
                <h3 className="text-2xl font-bold text-gray-900">25+ Years Experience</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The founder of Fvnix LLC has over 25 years of industry experience, 
                having deeply explored production areas such as mountains and farmlands 
                across China, researching diverse aromatic plants.
              </p>
            </div>

            <div className="bg-natural-light texture-linen rounded-xl shadow-lg p-8 border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900">Tokyo Base</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Supported by our parent company "Yunnan Summit Biotech Co., Ltd.", 
                we established our Tokyo office with the mission of stable supply 
                to the Japanese market, directly connecting local production power 
                with Japanese market demand to create new value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
          
          <div className="bg-natural-taupe texture-ceramic rounded-2xl shadow-2xl p-10 text-gray-900 border border-stone-300">
            <h3 className="text-3xl font-bold mb-6 text-center">
              "Abundant Natural Resources" × "Modern Processing Technology"
            </h3>
            <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
              Delivering Yunnan's gifts to Japanese consumers as they are. 
              We maximize the potential of locally abundant primary products and 
              provide safe, secure, and high-quality products across various categories 
              including food, cosmetics, and health supplements.
            </p>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Strengths</h2>
          
          <div className="space-y-8">
            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-stone-200">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Direct Production Base Supply Chain
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    By directly connecting with local production bases, we eliminate intermediaries, 
                    achieving cost competitiveness and rapid response to market needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-stone-200">
              <div className="flex items-start">
                <div className="text-4xl mr-4">✅</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    High Traceability & Quality Control
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Integrated management from raw material cultivation, extraction, refining 
                    to shipping. We guarantee safe and secure products with visible producers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-stone-200">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    25+ Years of International Trading Performance
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    With annual transactions with approximately 100 overseas customers, 
                    we have established professionalism and reliability that meets global 
                    quality standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Pillars */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Two Pillars of Our Business
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Original Brand */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-xl p-10 border border-stone-200">
              <h3 className="text-3xl font-bold text-green-900 mb-6">
                🏔️ Original Brand
              </h3>
              <h4 className="text-2xl font-bold text-green-800 mb-4">
                「云南鲜品」 (Elevated Goodness)
              </h4>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Premium Line:</strong> Embodies the mystical and fresh image of Yunnan plateau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Complete Traceability:</strong> Visible producer transparency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>High Value-Added Products:</strong> Story-driven premium goods</span>
                </li>
              </ul>
            </div>

            {/* B2B Solution */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-xl p-10 border border-stone-200">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                🤝 B2B Solution
              </h3>
              <h4 className="text-2xl font-bold text-blue-800 mb-4">
                OEM/ODM Supply
              </h4>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Rich Raw Materials:</strong> Eucalyptus, Cinnamon, Tea Tree from Yunnan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Japanese Quality Standards:</strong> Product development meeting strict requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Competitive Pricing:</strong> Stable supply with market advantage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Product Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3 text-center">🌺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Essential Oils</h3>
              <p className="text-sm text-gray-600 text-center mb-3">
                Eucalyptus, Rose, Osmanthus ABS
              </p>
              <div className="text-xs text-gray-500 text-center">
                Diverse materials · High purity
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3 text-center">🥜</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Health & Beauty Foods</h3>
              <p className="text-sm text-gray-600 text-center mb-3">
                Walnut Oil & Snacks
              </p>
              <div className="text-xs text-gray-500 text-center">
                Rich in Omega-3 · Natural
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3 text-center">☕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Specialty Coffee</h3>
              <p className="text-sm text-gray-600 text-center mb-3">
                Highland Arabica Coffee
              </p>
              <div className="text-xs text-gray-500 text-center">
                High altitude · Fruity
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3 text-center">🌸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Premium Flowers</h3>
              <p className="text-sm text-gray-600 text-center mb-3">
                Fresh Cut Flowers
              </p>
              <div className="text-xs text-gray-500 text-center">
                Freshness · High value
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's sample requests, OEM/ODM consultations, or detailed product specifications, 
            feel free to contact us anytime.
          </p>
          
          <div className="bg-natural-light/90 backdrop-blur rounded-xl p-8 mb-8 border border-stone-300">
            <h3 className="text-2xl font-bold mb-4">FVNIX LLC · 凤凰有限公司</h3>
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Contact:</strong> Ye Weizhou (叶 维舟)
              </p>
              <p className="text-lg">
                📞 <strong>TEL:</strong> +81-3-6914-3633
              </p>
              <p className="text-lg">
                📱 <strong>Mobile:</strong> +81-80-4363-2780
              </p>
              <p className="text-lg">
                📧 <strong>Email:</strong> info@fvnix.com
              </p>
              <p className="text-lg">
                🌐 <strong>Website:</strong> www.fvnix.com
              </p>
            </div>
          </div>

          <div className="text-sm opacity-75 mb-4">
            <p><strong>Address:</strong></p>
            <p>〒171-0033 Tokyo, Toshima-ku, Takada 3-16-4 Golje Bldg. 6F</p>
            <p>东京都豊島区高田 3-16-4 Golje 大楼 6F</p>
          </div>

          <a 
            href="/request" 
            className="inline-block rounded-xl bg-natural-light text-gray-900 px-8 py-4 font-bold text-lg hover:bg-natural-warm transition-all shadow-lg mt-6 border border-stone-300"
          >
            Request Samples or Quote
          </a>
        </div>
      </section>
    </main>
  );
}
