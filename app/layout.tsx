import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactInfo from '@/components/ContactInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modi & Company Advocates LLP - Leading Law Firm in Kenya',
  description: 'Modi & Company Advocates LLP is a premier law firm in Kenya with 24 years of experience. Specializing in Conveyancing, Commercial Law, Insurance Law, Labour Law, Civil Litigation, Trust & Estate Law, and ADR.',
  keywords: 'law firm, advocates, Kenya, conveyancing, commercial law, insurance law, labour law, civil litigation, arbitration, ADR',
  authors: [{ name: 'Modi & Company Advocates LLP' }],
  openGraph: {
    title: 'Modi & Company Advocates LLP',
    description: 'Leading law firm in Kenya with 24 years of experience and 90% success rate',
    url: 'https://modiadvocates.co.ke',
    siteName: 'Modi & Company Advocates LLP',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Modi & Company Advocates LLP',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modi & Company Advocates LLP',
    description: 'Leading law firm in Kenya with 24 years of experience',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactInfo />
        <Header />
        <div >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 