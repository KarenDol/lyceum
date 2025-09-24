import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: 'Aqbobek Lyceum',
  description:
    'Лицей "Ақбөбек" предлагает углубленное обучение математике, английскому языку и информатике в формате проектного обучения для учеников 7-11 классов.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
