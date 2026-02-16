import CloudHero from "@/components/hero/CloudHero";

export default function Home() {
  return (
    <main className="relative w-screen overflow-hidden -mt-16">
      {/* Hero Section */}
      <div className="relative h-screen bg-natural-light texture-linen">
        <CloudHero />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-3xl rounded-2xl bg-warm-white/95 texture-ceramic p-10 backdrop-blur-md shadow-2xl border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
            <div className="text-center">
              <h1 className="text-5xl font-display font-bold" style={{color: 'var(--color-text-primary)'}}>
                FVNIX
              </h1>
              <p className="mt-2 text-2xl font-body font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                Premium Natural Ingredients
              </p>
              <p className="mt-4 text-lg font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                Elevated Goodness from Yunnan · 云南鲜品 带给您的生活
              </p>
              <p className="mt-3 text-sm font-body max-w-2xl mx-auto" style={{color: 'var(--color-text-muted)'}}>
                We bring natural fragrances and botanical essences from the mysterious highland "Shangri-La" 
                to the Japanese market with pure quality.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a className="rounded-xl font-body px-6 py-3 font-semibold transition-all shadow-lg hover:shadow-xl" style={{backgroundColor: 'var(--color-sage)', color: 'var(--color-text-light)'}} href="/products">
                Browse Essential Oils
              </a>
              <a className="rounded-xl border-2 font-body px-6 py-3 font-semibold transition-all hover:shadow-md" style={{borderColor: 'var(--color-sage)', color: 'var(--color-sage)'}} href="/documents">
                Technical Documents
              </a>
              <a className="rounded-xl border-2 font-body px-6 py-3 font-semibold transition-all hover:shadow-md" style={{borderColor: 'var(--color-olive)', color: 'var(--color-olive)'}} href="/about">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <section className="py-20 px-6 bg-natural-warm texture-woven">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4" style={{color: 'var(--color-text-primary)'}}>
              Pure & Natural from Yunnan
            </h2>
            <p className="text-xl font-body max-w-3xl mx-auto" style={{color: 'var(--color-text-secondary)'}}>
              A Gift of Life from the "Roof of the World"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>High Altitude Excellence</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                From Yunnan's Shangri-La plateau (2800-3400m), where diverse ecosystems 
                create the "Kingdom of Plants" with unique natural power.
              </p>
            </div>

            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>Premium Quality</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                ISO 9001, HACCP, cGMP certified. High-quality agricultural products 
                with complete traceability and international standards.
              </p>
            </div>

            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>Sustainable Sourcing</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                "Company + Farm + Farmers" model ensures ecological protection 
                and rural revitalization through traceable supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FVNIX Section */}
      <section className="py-20 px-6 bg-natural-medium texture-stone">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4" style={{color: 'var(--color-text-primary)'}}>
              Why Choose FVNIX
            </h2>
            <p className="text-xl font-body" style={{color: 'var(--color-text-secondary)'}}>
              Connecting Yunnan's Natural Treasures with Global Markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-sage)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                🏆 Global Market Leader
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                <strong>Global No.1</strong> in Eucalyptus Oil (40%+ market share)<br/>
                <strong>Global Top 3</strong> in Cinnamon Oil (30%)<br/>
                <strong>Global Top 2</strong> in Tea Tree Oil (30%)
              </p>
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-olive)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                🤝 Trusted by Industry Giants
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                Long-term supplier to Givaudan, DSM-Firmenich, IFF, Mane, Robertet 
                and 100+ global partners with 25+ years of experience.
              </p>
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-warm-copper)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                📊 Complete Traceability
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                From seed cultivation to extraction and packaging - full supply chain 
                management with visible producers and transparent quality control.
              </p>
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-terracotta)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                🔬 Advanced Technology
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                GMP-compliant continuous automated extraction facilities with 10,000+ mu 
                (670+ hectares) of self-managed cultivation bases in Yunnan highlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
            Ready to Experience Premium Natural Ingredients?
          </h2>
          <p className="text-xl font-body mb-8" style={{color: 'var(--color-text-secondary)'}}>
            Contact our Tokyo office team for free samples, quotations, and product specifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/request" 
              className="rounded-xl font-body px-8 py-4 font-bold text-lg transition-all shadow-lg hover:shadow-xl border-2" style={{backgroundColor: 'var(--color-warm-white)', color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}
            >
              Request Free Samples
            </a>
            <a 
              href="mailto:info@fvnix.com" 
              className="rounded-xl border-2 font-body px-8 py-4 font-bold text-lg transition-all hover:shadow-md" style={{borderColor: 'var(--color-text-primary)', color: 'var(--color-text-primary)'}}
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 text-sm font-body" style={{color: 'var(--color-text-muted)'}}>
            <p>📞 TEL: +81-3-6914-3633 | 📱 Mobile: +81-80-4363-2780</p>
            <p className="mt-1">📧 info@fvnix.com | 🌐 www.fvnix.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
