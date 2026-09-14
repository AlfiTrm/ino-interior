import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: {
    default: 'INO Interior — Ruang yang bekerja sebaik tampilnya',
    template: '%s — INO Interior',
  },
  description: 'Studio interior untuk ruang komersial, hospitality, dan residensial.',
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
