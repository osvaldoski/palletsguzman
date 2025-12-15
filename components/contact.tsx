"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:palletsguzman@hotmail.com?subject=Consulta desde la web&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.phone}%0D%0AMensaje: ${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 uppercase tracking-wide">
            Contacto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Cotizá tu Pedido</h2>
          <p className="text-lg text-muted-foreground">Envianos tu consulta y te respondemos a la brevedad</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Teléfono</h3>
                  <a href="tel:+56982162155" className="text-muted-foreground hover:text-accent transition-colors">
                    +569 8216 2155
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:palletsguzman@hotmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    palletsguzman@hotmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">Campo Lindo, Parcela 8</p>
                  <p className="text-muted-foreground">Curacaví, Chile</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Horarios</h3>
                  <p className="text-muted-foreground text-sm">Lun - Vie: 8:00 - 18:00</p>
                  <p className="text-muted-foreground text-sm">Sáb: 8:00 - 13:00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Contanos qué necesitás..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map below form in same column */}
            <Card className="overflow-hidden border-border">
              <CardContent className="p-0">
                <div className="w-full h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.9019991394744!2d-71.1019587!3d-33.4102852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662db5ba69773a7%3A0xa94c4ced95f91de3!2sPallets%20Guzman!5e1!3m2!1ses!2scl!4v1765572836244!5m2!1ses!2scl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Pallets Guzmán"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
