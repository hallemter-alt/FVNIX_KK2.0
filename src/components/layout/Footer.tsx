"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "ja";

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              FVNIX LLC
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Premium Natural Ingredients from Yunnan. Bringing elevated goodness 
              to the Japanese market with pure quality.
            </p>
            <p className="text-sm">
              凤凰有限公司<br/>
              云南鲜品 · Elevated Goodness
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-sm hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-sm hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/documents`} className="text-sm hover:text-green-400 transition-colors">
                  Documents
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/certifications`} className="text-sm hover:text-green-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/market-position`} className="text-sm hover:text-green-400 transition-colors">
                  Market Position
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/request`} className="text-sm hover:text-green-400 transition-colors">
                  Contact & Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>🌸 Floral Essential Oils</li>
              <li>🍋 Citrus Essential Oils</li>
              <li>🌿 Herbal Essential Oils</li>
              <li>🌲 Woody Essential Oils</li>
              <li>🌶️ Spicy Essential Oils</li>
              <li>🍯 Resinous Essential Oils</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Tokyo Office</p>
                <p className="leading-relaxed">
                  〒171-0033<br/>
                  Tokyo, Toshima-ku, Takada 3-16-4<br/>
                  Golje Bldg. 6F
                </p>
              </div>
              <div>
                <p className="mb-1">
                  <strong>Contact:</strong> Ye Weizhou
                </p>
                <p>📞 TEL: +81-3-6914-3633</p>
                <p>📱 Mobile: +81-80-4363-2780</p>
              </div>
              <div>
                <p>
                  📧 <a href="mailto:info@fvnix.com" className="hover:text-green-400 transition-colors">
                    info@fvnix.com
                  </a>
                </p>
                <p>
                  🌐 <a href="https://www.fvnix.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                    www.fvnix.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Group Company */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-2">Group Company</h4>
            <p className="text-sm mb-1">
              <strong>Yunnan Summit Biotech Co., Ltd.</strong> (云南森美达生物科技股份有限公司)
            </p>
            <p className="text-xs text-gray-400 max-w-2xl mx-auto">
              High-tech enterprise with 20+ years in natural fragrance raw materials. 
              Integrated R&D, cultivation, extraction, refining, and international trade. 
              Supplying high-quality raw materials to global top brands.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 FVNIX LLC (凤凰有限公司). All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🏔️ Pure & Natural</span>
              <span>✨ High Quality</span>
              <span>🌿 Sustainable</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
