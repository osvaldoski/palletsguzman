/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Con dominio personalizado en GitHub Pages no se usa basePath/assetPrefix
  basePath: "",
  assetPrefix: "",
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig