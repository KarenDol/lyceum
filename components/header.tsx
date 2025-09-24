"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-3">
              <Image src="/Logo_Lyc.png" alt="Лицей Ақбөбек" fill className="object-contain" />
            </div>
            <div>
              <span className={`font-bold text-xl ${isScrolled ? "text-[#59007A]" : "text-white"}`}>Ақбөбек</span>
              <span className={`block text-xs ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>Лицей</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#about" label="Лицей туралы" isScrolled={isScrolled} />
            <NavLink href="#programs" label="Білім Беру" isScrolled={isScrolled} />
            <NavLink href="#teachers" label="Преподаватели" isScrolled={isScrolled} />
            <NavLink href="#admission" label="Поступление" isScrolled={isScrolled} />
            <NavLink href="#campus" label="Кампус" isScrolled={isScrolled} />
            <NavLink href="#gallery" label="Галерея" isScrolled={isScrolled} />
            <NavLink href="#contact" label="Контакты" isScrolled={isScrolled} />

            <Link
              href="#admission"
              className={`ml-2 px-4 py-2 rounded-md font-medium transition-colors ${
                isScrolled ? "bg-[#59007A] text-white hover:bg-[#FF9C2E]" : "bg-white text-[#59007A] hover:bg-gray-100"
              }`}
            >
              Поступить
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="#about" label="О Лицее" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#programs" label="Программы" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#teachers" label="Преподаватели" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#admission" label="Поступление" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#campus" label="Кампус" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#gallery" label="Галерея" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#contact" label="Контакты" onClick={() => setIsMenuOpen(false)} />

              <Link
                href="#admission"
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Поступить в Лицей
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md font-medium hover:bg-opacity-10 transition-colors ${
        isScrolled ? "text-gray-700 hover:bg-gray-200" : "text-white hover:bg-white"
      }`}
    >
      {label}
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium" onClick={onClick}>
      {label}
    </Link>
  )
}
