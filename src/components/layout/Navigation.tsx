"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams();
  const locale = (params?.locale as string) || "ja";
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-natural-light/95 backdrop-blur-md shadow-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-moss to-eucalyptus-fog bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif JP', serif" }}>
              FVNIX
            </span>
            <span className="text-xs text-gray-600 hidden sm:inline tracking-wide uppercase" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif", letterSpacing: '0.1em' }}>
              {t("tagline")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("home")}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("about")}
            </Link>
            <Link href={`/${locale}/products`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("products")}
            </Link>
            <Link href={`/${locale}/documents`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("documents")}
            </Link>
            <Link href={`/${locale}/certifications`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("certifications")}
            </Link>
            <Link href={`/${locale}/market-position`} className="text-gray-700 hover:text-moss font-medium transition-colors text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}>
              {t("marketPosition")}
            </Link>
            <Link 
              href={`/${locale}/request`}
              className="rounded-lg bg-gradient-to-r from-moss to-eucalyptus-fog px-5 py-2 text-white font-semibold hover:shadow-lg transition-all text-sm tracking-wide" style={{ fontFamily: "'Montserrat', 'Noto Sans JP', sans-serif" }}
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href={`/${locale}`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link 
                href={`/${locale}/about`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link 
                href={`/${locale}/products`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("products")}
              </Link>
              <Link 
                href={`/${locale}/documents`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("documents")}
              </Link>
              <Link 
                href={`/${locale}/certifications`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("certifications")}
              </Link>
              <Link 
                href={`/${locale}/market-position`}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("marketPosition")}
              </Link>
              <Link 
                href={`/${locale}/request`}
                className="rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 text-white font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <div className="pt-3 border-t border-gray-200">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
