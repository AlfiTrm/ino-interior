import './globals.css'
import 'lenis/dist/lenis.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: {
    default: 'INO Interior | Ruang yang terasa tepat',
    template: '%s | INO Interior',
  },
  description: 'Studio interior untuk ruang komersial, hospitality, dan residensial.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'INO Interior',
    title: 'INO Interior, ruang yang terasa tepat',
    description: 'Konsep interior untuk ruang kerja, hospitality, hunian, dan penutup jendela.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [{ url: new URL('/assets/portfolio/paviliun-senja.png', process.env.NEXT_PUBLIC_SITE_URL).toString(), alt: 'Konsep lobi dengan bukaan lebar dan tempat duduk hangat.' }] : undefined,
  },
  robots: { index: Boolean(process.env.NEXT_PUBLIC_SITE_URL), follow: Boolean(process.env.NEXT_PUBLIC_SITE_URL) },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={manrope.variable}>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-[var(--ink)]">
          Langsung ke konten
        </a>
        {children}
      </body>
    </html>
  )
}
