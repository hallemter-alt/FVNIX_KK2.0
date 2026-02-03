"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              FVNIX
            </span>
            <span className="text-sm text-gray-600 hidden sm:inline">
              Premium Natural Ingredients
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/documents" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Documents
            </Link>
            <Link href="/certifications" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Certifications
            </Link>
            <Link href="/market-position" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Market Position
            </Link>
            <Link 
              href="/request" 
              className="rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-4 py-2 text-white font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md"
            >
              Contact Us
            </Link>
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
                href="/" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/documents" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Documents
              </Link>
              <Link 
                href="/certifications" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                href="/market-position" 
                className="text-gray-700 hover:text-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Position
              </Link>
              <Link 
                href="/request" 
                className="rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-4 py-3 text-white font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
