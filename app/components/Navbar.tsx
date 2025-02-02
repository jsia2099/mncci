'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#aboutus" },
  { name: "Mission", href: "#mission" },
  { name: "Our Leadership Team", href: "#officers-and-directors" },
  { name: "Board of Advisors", href: "#board-of-advisors" },
  { name: "Contact Us", href: "#contact-section" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/LOGO.jpg"
              alt="MNCCI Logo"
              width={80}
              height={80}
              className="w-10 h-10 md:w-20 md:h-20 mr-2"
            />
            <span className={`lg:text-xl sm:text-lg font-bold text-gray-800`}>
              <Link href="/">Metro Naga Chamber Of Commerce and Industry</Link>
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isScrolled ? "text-gray-600 hover:text-blue-600" : "text-black hover:text-blue-200"} transition duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-md ${isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-black hover:bg-white/10"}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

