"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Products() {
  const products = [
    {
      name: "Pallet Tipo Euro",
      dimensions: "80 x 120 cm",
      image: "/images/image.png",
      description: "Pallet tipo europeo de alta calidad",
    },
    {
      name: "Pallet Tipo Yugo",
      dimensions: "100 x 120 cm",
      image: "/images/image.png",
      description: "Resistente y duradero para cargas pesadas",
    },
    {
      name: "Pallet Tipo Cajón",
      dimensions: "Varias medidas",
      image: "/images/image.png",
      description: "Diseño sólido para máxima estabilidad",
    },
    {
      name: "Pallet Túnel",
      dimensions: "A medida",
      image: "/images/image.png",
      description: "Fabricación personalizada según necesidad",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="productos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Productos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Pallets</h2>
          <p className="text-lg text-muted-foreground">
            Amplia variedad de pallets de madera para diferentes necesidades industriales
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-card-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <p className="text-accent font-semibold text-base">{product.dimensions}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>
    </section>
  )
}
