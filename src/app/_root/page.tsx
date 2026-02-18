import CloudHero from "@/components/hero/CloudHero";
import { getTranslations } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations("home");
  return (
    <main className="relative w-screen overflow-hidden -mt-16" style={{backgroundColor: '#C8BBA6'}}>
      {/* Hero Section */}
      <div className="relative h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
        <CloudHero />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-3xl rounded-2xl bg-warm-white/95 texture-ceramic p-10 backdrop-blur-md shadow-2xl border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
            <div className="text-center">
              <h1 className="text-5xl font-display font-bold" style={{color: 'var(--color-text-primary)'}}>
                {t("hero.title")}
              </h1>
              <p className="mt-2 text-2xl font-body font-semibold" style={{color: 'var(--color-text-secondary)'}}>
                {t("hero.subtitle")}
              </p>
              <p className="mt-4 text-lg font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("hero.tagline")}
              </p>
              <p className="mt-3 text-sm font-body max-w-2xl mx-auto" style={{color: 'var(--color-text-muted)'}}>
                {t("hero.description")}
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a className="rounded-xl font-body px-6 py-3 font-semibold transition-all shadow-lg hover:shadow-xl" style={{backgroundColor: 'var(--color-sage)', color: 'var(--color-text-light)'}} href={`/${locale}/products`}>
                {t("hero.cta.products")}
              </a>
              <a className="rounded-xl border-2 font-body px-6 py-3 font-semibold transition-all hover:shadow-md" style={{borderColor: 'var(--color-sage)', color: 'var(--color-sage)'}} href={`/${locale}/documents`}>
                {t("hero.cta.documents")}
              </a>
              <a className="rounded-xl border-2 font-body px-6 py-3 font-semibold transition-all hover:shadow-md" style={{borderColor: 'var(--color-olive)', color: 'var(--color-olive)'}} href={`/${locale}/about`}>
                {t("hero.cta.about")}
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
              {t("values.title")}
            </h2>
            <p className="text-xl font-body max-w-3xl mx-auto" style={{color: 'var(--color-text-secondary)'}}>
              {t("values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>{t("values.cards.altitude.title")}</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("values.cards.altitude.description")}
              </p>
            </div>

            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>{t("values.cards.quality.title")}</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("values.cards.quality.description")}
              </p>
            </div>

            <div className="bg-warm-white texture-linen rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-body font-bold mb-3" style={{color: 'var(--color-text-primary)'}}>{t("values.cards.sustainability.title")}</h3>
              <p className="font-body leading-relaxed" style={{color: 'var(--color-text-secondary)'}}>
                {t("values.cards.sustainability.description")}
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
              {t("why.title")}
            </h2>
            <p className="text-xl font-body" style={{color: 'var(--color-text-secondary)'}}>
              {t("why.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-sage)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                {t("why.features.leader.title")}
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}} dangerouslySetInnerHTML={{__html: `<strong>${t("why.features.leader.items.eucalyptus").split(":")[0]}:</strong> ${t("why.features.leader.items.eucalyptus").split(":")[1]}<br/><strong>${t("why.features.leader.items.cinnamon").split(":")[0]}:</strong> ${t("why.features.leader.items.cinnamon").split(":")[1]}<br/><strong>${t("why.features.leader.items.teatree").split(":")[0]}:</strong> ${t("why.features.leader.items.teatree").split(":")[1]}`}} />
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-olive)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                {t("why.features.trusted.title")}
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                {t("why.features.trusted.description")}
              </p>
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-warm-copper)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                {t("why.features.traceability.title")}
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                {t("why.features.traceability.description")}
              </p>
            </div>

            <div className="border-l-4 pl-6 py-4" style={{borderColor: 'var(--color-terracotta)'}}>
              <h3 className="text-xl font-body font-bold mb-2" style={{color: 'var(--color-text-primary)'}}>
                {t("why.features.technology.title")}
              </h3>
              <p className="font-body" style={{color: 'var(--color-text-secondary)'}}>
                {t("why.features.technology.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-natural-taupe texture-wood">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6" style={{color: 'var(--color-text-primary)'}}>
            {t("cta.title")}
          </h2>
          <p className="text-xl font-body mb-8" style={{color: 'var(--color-text-secondary)'}}>
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href={`/${locale}/request`}
              className="rounded-xl font-body px-8 py-4 font-bold text-lg transition-all shadow-lg hover:shadow-xl border-2" style={{backgroundColor: 'var(--color-warm-white)', color: 'var(--color-text-primary)', borderColor: 'var(--color-warm-gray)'}}
            >
              {t("cta.buttons.sample")}
            </a>
            <a 
              href="mailto:info@fvnix.com" 
              className="rounded-xl border-2 font-body px-8 py-4 font-bold text-lg transition-all hover:shadow-md" style={{borderColor: 'var(--color-text-primary)', color: 'var(--color-text-primary)'}}
            >
              {t("cta.buttons.contact")}
            </a>
          </div>
          <div className="mt-8 text-sm font-body" style={{color: 'var(--color-text-muted)'}}>
            <p>{t("cta.contact.phone")} | {t("cta.contact.mobile")}</p>
            <p className="mt-1">{t("cta.contact.email")} | {t("cta.contact.website")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
