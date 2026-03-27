import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: 'BannedBooks',
    template: '%s | BannedBooks',
  },
  description:
    'A reading-freedom tracker. Explore challenged and banned books, see where they were targeted, and find where to read them.',
  metadataBase: new URL('https://bannedbooks.app'),
  openGraph: {
    title: 'BannedBooks.app — Discover the Books People Tried to Erase',
    description:
      'A reading-freedom tracker. Explore challenged and banned books, see where they were targeted, and find where to read them.',
    siteName: 'BannedBooks.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BannedBooks.app',
    description: 'Discover the books people tried to erase.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
