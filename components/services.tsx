import { Card, CardContent } from "@/components/ui/card"
import { Package, Wrench, Recycle, ShoppingCart } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Venta de Pallets",
      description: "Pallets nuevos y reacondicionados de alta calidad. Stock permanente de diferentes medidas y tipos.",
    },
    {
      icon: Package,
      title: "Compra de Pallets",
      description: "Compramos pallets usados en cualquier estado. Retiramos de tu empresa sin costo adicional.",
    },
    {
      icon: Wrench,
      title: "Reparación",
      description: "Servicio de reparación y reacondicionamiento de pallets. Extendemos la vida útil de tus tarimas.",
    },
    {
      icon: Recycle,
      title: "Reciclaje",
      description: "Fabricación de pallets nuevos y reciclados con medidas especiales según tu necesidad.",
    },
  ]

  return (
    <section id="servicios" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Soluciones Integrales en Pallets</h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos servicios completos para cubrir todas las necesidades de tu empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
