import type { Metadata } from 'next'
import { Fraunces, Archivo, IBM_Plex_Mono } from 'next/font/google'
import { SITE } from '@/lib/site'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
})

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.nombre} — ${SITE.posicionamiento}`,
    template: `%s — ${SITE.nombre}`,
  },
  description: SITE.descripcion,
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.nombre,
    title: `${SITE.nombre} — ${SITE.posicionamiento}`,
    description: SITE.descripcion,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.nombre} — ${SITE.posicionamiento}`,
    description: SITE.descripcion,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        <a className="saltar" href="#inicio">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
