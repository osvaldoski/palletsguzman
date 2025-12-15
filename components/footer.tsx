"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="h-8 w-8 rounded bg-accent flex items-center justify-center font-bold">PG</div>
              <span>Pallets Guzmán</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Soluciones sustentables en pallets para tu industria. Calidad y compromiso en cada producto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("inicio")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("nosotros")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("servicios")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("productos")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Productos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Venta de Pallets</li>
              <li>Compra de Pallets</li>
              <li>Reparación</li>
              <li>Reciclaje</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Campo Lindo, Parcela 8</li>
              <li>Curacaví, Chile</li>
              <li>
                <a href="tel:+56982162155" className="hover:text-accent transition-colors">
                  +569 8216 2155
                </a>
              </li>
              <li>
                <a href="mailto:palletsguzman@hotmail.com" className="hover:text-accent transition-colors">
                  palletsguzman@hotmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Pallets Guzmán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
