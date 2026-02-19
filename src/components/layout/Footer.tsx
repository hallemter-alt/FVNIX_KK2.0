"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "ja";
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {t("company.title")}
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              {t("company.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("quickLinks.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.products")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/documents`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.documents")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/certifications`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.certifications")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/market-position`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.marketPosition")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/request`} className="text-sm hover:text-green-400 transition-colors">
                  {t("quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("categories.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/products?series=floral`} className="hover:text-green-400 transition-colors">
                  {t("categories.floral")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?series=citrus`} className="hover:text-green-400 transition-colors">
                  {t("categories.citrus")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?series=herbal`} className="hover:text-green-400 transition-colors">
                  {t("categories.herbal")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?series=woody`} className="hover:text-green-400 transition-colors">
                  {t("categories.woody")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?series=spicy`} className="hover:text-green-400 transition-colors">
                  {t("categories.spicy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products?series=resinous`} className="hover:text-green-400 transition-colors">
                  {t("categories.resinous")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("contact.title")}</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">{t("contact.office")}</p>
                <p className="leading-relaxed">
                  {t("contact.address")}
                </p>
              </div>
              <div>
                <p className="mb-1">{t("contact.representative")}</p>
                <p>{t("contact.phone")}</p>
                <p>{t("contact.fax")}</p>
                <p>{t("contact.mobile")}</p>
              </div>
              <div>
                <p>{t("contact.email")}</p>
                <p>{t("contact.website")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Group Company */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2">{t("group.title")}</h4>
            <p className="text-sm mb-1">
              <strong>{t("group.name")}</strong>
            </p>
            <p className="text-xs text-gray-400 max-w-2xl mx-auto">
              {t("group.description")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t("bottom.copyright")}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{t("bottom.pure")}</span>
              <span>{t("bottom.quality")}</span>
              <span>{t("bottom.sustainable")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
