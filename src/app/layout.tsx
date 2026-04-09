import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Josh Moon — Product Designer',
    template: '%s — Josh Moon',
  },
  description:
    'Josh Moon is a product designer with 10 years of experience crafting intuitive digital products for Charles Schwab, PayPal, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Josh Moon — Product Designer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
