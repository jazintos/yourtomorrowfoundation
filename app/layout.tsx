import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Your Tomorrow Foundation',
    template: '%s | Your Tomorrow Foundation',
  },
  description:
    'Your Tomorrow Foundation unlocks human potential through education and nourishment while building sustainable communities across Nigeria.',
  openGraph: {
    type: 'website',
    url: 'https://yourtomorrowfoundation.org',
    siteName: 'Your Tomorrow Foundation',
    images: [{ url: '/images/YTM_MAIN_LOGO_FULL_COLOR.png' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} font-inter antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
