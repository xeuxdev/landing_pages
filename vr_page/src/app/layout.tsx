import "./globals.css"
import type { Metadata } from "next"
import { IM_Fell_Great_Primer_SC, Inter, Orbitron } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const orbiron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orb",
  display: "swap",
})

const fell = IM_Fell_Great_Primer_SC({
  subsets: ["latin"],
  variable: "--font-fell",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Light VR",
  description: "Explore three dimensional visuals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbiron.variable} ${fell.variable} bg-background`}
      >
        {children}
      </body>
    </html>
  )
}
