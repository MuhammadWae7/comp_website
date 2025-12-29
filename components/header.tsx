"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-shrink-0">
          <img src="/images/logo.jpeg" alt="شركة السويدي للنقل البري" className="w-16 h-16 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="text-base font-medium text-gray-700 hover:text-yellow-600 transition-colors"
          >
            الخدمات
          </Link>
          <Link href="#fleet" className="text-base font-medium text-gray-700 hover:text-yellow-600 transition-colors">
            أسطولنا
          </Link>
          <Link href="#contact" className="text-base font-medium text-gray-700 hover:text-yellow-600 transition-colors">
            تواصل معنا
          </Link>
        </div>

        <div className="hidden md:block" />

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link href="#services" className="block text-base font-medium text-gray-700 hover:text-yellow-600">
              الخدمات
            </Link>
            <Link href="#fleet" className="block text-base font-medium text-gray-700 hover:text-yellow-600">
              أسطولنا
            </Link>
            <Link href="#contact" className="block text-base font-medium text-gray-700 hover:text-yellow-600">
              تواصل معنا
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
