import { CheckCircle } from "lucide-react"

export function About() {
  const features = [
    "Más de 20 años de experiencia",
    "Stock permanente disponible",
    "Retiro de pallets en desuso",
    "Servicio personalizado",
  ]

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/wooden-pallets-warehouse-stacked-organized.jpg"
              alt="Almacén de pallets Guzman"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Nuestra Empresa
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Líderes en Reciclaje de Pallets</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos una empresa dedicada al reciclaje de pallets de madera. Contamos con un vasto stock de todo tipo de
              pallets. Los cuales tenemos seleccionados según las necesidades actuales del mercado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compramos pallets en cualquier estado y ofrecemos soluciones integrales para empresas que necesitan
              gestionar sus tarimas de manera eficiente y sustentable.
            </p>
            <ul className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
