import './globals.css'

import type { Metadata } from 'next'
import { Sen } from 'next/font/google'

const sen = Sen({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Foodie',
  description:
    'A aplicação de um restaurante no qual você pode realizar pedidos, visualizar cardápios, categorias e muito mais!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sen.className}>{children}</body>
    </html>
  )
}
