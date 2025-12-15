"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <button
          onClick={() => scrollToSection("inicio")}
          className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-accent transition-colors"
        >
          <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            PG
          </div>
          <span className="hidden sm:inline">Pallets Guzman</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("nosotros")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("productos")}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Productos
          </button>
          <a
            href="tel:+56982162155"
            className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-5 py-2.5 rounded-lg font-semibold transition-all"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">+569 8216 2155</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Productos
            </button>
            <a
              href="tel:+56982162155"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 w-full py-3 rounded-lg font-bold text-lg"
            >
              <Phone className="h-5 w-5" />
              +569 8216 2155
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
