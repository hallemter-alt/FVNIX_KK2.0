import { getTranslations } from "next-intl/server";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("about");

  return (
    <main className="min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-natural-taupe texture-wood" style={{color: 'var(--color-text-primary)'}}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-2xl mb-4 opacity-90">
            FVNIX LLC
          </p>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Our Message */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>{t("message.title")}</h2>
            <p className="text-lg max-w-4xl mx-auto" style={{color: 'var(--color-text-secondary)'}}>
              {t("message.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>{t("message.features.direct.title")}</h3>
              <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{t("message.features.direct.description")}</p>
            </div>
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>{t("message.features.expertise.title")}</h3>
              <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{t("message.features.expertise.description")}</p>
            </div>
            <div className="bg-natural-warm texture-woven rounded-xl p-6 text-center border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>{t("message.features.quality.title")}</h3>
              <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{t("message.features.quality.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Establishment Background */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-text-primary)'}}>{t("background.title")}</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-natural-light texture-linen rounded-xl shadow-lg p-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">📅</div>
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-text-primary)'}}>{t("background.experience.title")}</h3>
              </div>
              <p className="leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("background.experience.description")}
              </p>
            </div>

            <div className="bg-natural-light texture-linen rounded-xl shadow-lg p-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🏢</div>
                <h3 className="text-2xl font-bold" style={{color: 'var(--color-text-primary)'}}>{t("background.tokyo.title")}</h3>
              </div>
              <p className="leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("background.tokyo.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{color: 'var(--color-text-primary)'}}>{t("mission.title")}</h2>
          
          <div className="bg-natural-taupe texture-ceramic rounded-2xl shadow-2xl p-10 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
            <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto" style={{color: 'var(--color-text-primary)'}}>
              {t("mission.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-text-primary)'}}>{t("strengths.title")}</h2>
          
          <div className="space-y-8">
            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex items-start">
                <div className="text-4xl mr-4">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>
                    {t("strengths.items.vertical.title")}
                  </h3>
                  <p className="leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                    {t("strengths.items.vertical.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex items-start">
                <div className="text-4xl mr-4">✅</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>
                    {t("strengths.items.certified.title")}
                  </h3>
                  <p className="leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                    {t("strengths.items.certified.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-natural-medium texture-linen rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="flex items-start">
                <div className="text-4xl mr-4">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>
                    {t("strengths.items.market.title")}
                  </h3>
                  <p className="leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                    {t("strengths.items.market.description")}
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
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-text-primary)'}}>
            {t("business.title")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Original Brand */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-xl p-10 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--color-sage)'}}>
                🏔️ {t("business.brand.title")}
              </h3>
              <ul className="space-y-3" style={{color: 'var(--color-text-secondary)'}}>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-sage)'}}>✓</span>
                  <span>{t("business.brand.items.oils")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-sage)'}}>✓</span>
                  <span>{t("business.brand.items.health")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-sage)'}}>✓</span>
                  <span>{t("business.brand.items.coffee")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-sage)'}}>✓</span>
                  <span>{t("business.brand.items.flowers")}</span>
                </li>
              </ul>
            </div>

            {/* B2B Solution */}
            <div className="bg-natural-warm texture-woven rounded-2xl shadow-xl p-10 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--color-olive)'}}>
                🤝 {t("business.b2b.title")}
              </h3>
              <ul className="space-y-3" style={{color: 'var(--color-text-secondary)'}}>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-olive)'}}>✓</span>
                  <span>{t("business.b2b.items.custom")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-olive)'}}>✓</span>
                  <span>{t("business.b2b.items.private")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-olive)'}}>✓</span>
                  <span>{t("business.b2b.items.bulk")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{color: 'var(--color-olive)'}}>✓</span>
                  <span>{t("business.b2b.items.consulting")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-6 bg-natural-warm texture-stone">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-text-primary)'}}>{t("categories.title")}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-warm-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3 text-center">🌺</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{color: 'var(--color-text-primary)'}}>{t("categories.oils.title")}</h3>
              <p className="text-sm text-center" style={{color: 'var(--color-text-muted)'}}>
                {t("categories.oils.description")}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3 text-center">💊</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{color: 'var(--color-text-primary)'}}>{t("categories.health.title")}</h3>
              <p className="text-sm text-center" style={{color: 'var(--color-text-muted)'}}>
                {t("categories.health.description")}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3 text-center">☕</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{color: 'var(--color-text-primary)'}}>{t("categories.coffee.title")}</h3>
              <p className="text-sm text-center" style={{color: 'var(--color-text-muted)'}}>
                {t("categories.coffee.description")}
              </p>
            </div>

            <div className="bg-warm-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-3 text-center">🌸</div>
              <h3 className="text-xl font-bold mb-2 text-center" style={{color: 'var(--color-text-primary)'}}>{t("categories.flowers.title")}</h3>
              <p className="text-sm text-center" style={{color: 'var(--color-text-muted)'}}>
                {t("categories.flowers.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>{t("cta.title")}</h2>
          <p className="text-xl mb-8" style={{color: 'var(--color-text-secondary)'}}>
            {t("cta.description")}
          </p>
          
          <div className="bg-warm-white/95 backdrop-blur rounded-xl p-8 mb-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--color-text-primary)'}}>{t("cta.office.title")}</h3>
            <div className="space-y-2" style={{color: 'var(--color-text-secondary)'}}>
              <p className="text-lg">{t("cta.office.address")}</p>
              <p className="text-lg">{t("cta.office.contact")}</p>
              <p className="text-lg">{t("cta.office.phone")}</p>
              <p className="text-lg">{t("cta.office.mobile")}</p>
              <p className="text-lg">{t("cta.office.email")}</p>
              <p className="text-lg">{t("cta.office.website")}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`/${locale}/products`}
              className="rounded-xl px-8 py-4 font-bold text-lg transition-all shadow-lg hover:shadow-xl border-2" style={{backgroundColor: 'var(--color-sage)', color: 'var(--color-text-light)', borderColor: 'var(--color-sage)'}}
            >
              {t("cta.buttons.products")}
            </a>
            <a 
              href={`/${locale}/request`}
              className="rounded-xl border-2 px-8 py-4 font-bold text-lg transition-all hover:shadow-md" style={{borderColor: 'var(--color-sage)', color: 'var(--color-sage)', backgroundColor: 'var(--color-warm-white)'}}
            >
              {t("cta.buttons.contact")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
