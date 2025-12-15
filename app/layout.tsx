import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://palletsguzman.com"),
  title: {
    default: "Pallets Guzmán | Venta y Reciclaje de Pallets en Curacaví, Chile",
    template: "%s | Pallets Guzmán",
  },
  description:
    "Empresa especializada en venta, compra y reciclaje de pallets de madera en Curacaví. Pallets tipo Euro, Yugo, Cajón y Túnel. Calidad garantizada para la industria.",
  keywords: [
    "pallets",
    "tarimas",
    "madera",
    "Curacaví",
    "Chile",
    "reciclaje pallets",
    "venta pallets",
    "pallets tipo euro",
    "pallets yugo",
    "pallets industriales",
    "pallets madera",
    "pallets nuevos",
    "pallets reciclados",
  ],
  authors: [{ name: "Pallets Guzmán" }],
  creator: "Pallets Guzmán",
  publisher: "Pallets Guzmán",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://palletsguzman.com",
    title: "Pallets Guzmán | Venta y Reciclaje de Pallets en Curacaví",
    description:
      "Empresa especializada en venta, compra y reciclaje de pallets de madera. Pallets tipo Euro, Yugo, Cajón y Túnel.",
    siteName: "Pallets Guzmán",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
