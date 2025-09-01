import type React from "react"
import { Cairo } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}

export const metadata = {
  title: "Ex.Media",
  description: "Creative Impact, Real Reach - Helping your brand shine and connect with the right audience everywhere",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  }
}
