"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Clock } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { label: "Años de experiencia", value: "20+" },
    { label: "Disponibilidad", value: "24/7" },
    { label: "Clientes satisfechos", value: "500+" },
  ]

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-[#4A3728] via-[#5C4A3A] to-[#6B5647] pt-16"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="h-4 w-4 text-[#E67E22]" />
              <span className="text-sm font-medium">Servicio 24/7</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              ¿Necesitas pallets de calidad?
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Somos especialistas en venta, compra y reciclaje de pallets de madera. Con más de 20 años de experiencia,
              ofrecemos soluciones profesionales para la industria.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-lg text-white/80">
                Contamos con stock permanente de todo tipo de pallets, seleccionados según las necesidades del mercado.
                Compramos pallets en cualquier estado y fabricamos a medida.
              </p>
              <p className="text-lg font-semibold text-[#E67E22]">Atención profesional, segura y al mejor precio.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+56982162155"
                className="inline-flex items-center justify-center gap-3 bg-[#E67E22] hover:bg-[#D35400] text-white text-xl font-bold px-8 py-5 rounded-lg shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-6 w-6" />
                +569 8216 2155
              </a>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-5 h-auto"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-[#E67E22]">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/wooden-pallets-stacked-warehouse-industrial.jpg"
                alt="Pallets de madera apilados en almacén"
                className="w-full h-[500px] md:h-[700px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-[#E67E22] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Llámanos ahora</div>
                    <div className="text-xl font-bold text-[#4A3728]">+569 8216 2155</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
