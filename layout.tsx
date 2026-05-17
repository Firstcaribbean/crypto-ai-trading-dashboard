import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CryptoAI Trading Dashboard - AI-Powered Crypto Trading',
  description: 'Revolutionary AI-powered cryptocurrency trading dashboard with premium design, real-time analytics, and automated bot management.',
  keywords: 'crypto, trading, AI, dashboard, Bitcoin, Ethereum, fintech',
  authors: [{ name: 'CryptoAI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cryptoai.app',
    title: 'CryptoAI Trading Dashboard',
    description: 'Premium AI-powered crypto trading platform',
    siteName: 'CryptoAI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
