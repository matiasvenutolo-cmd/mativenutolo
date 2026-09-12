import type { Metadata } from 'next'
import { Geist, IBM_Plex_Mono } from 'next/font/google'
import { SITE } from '@/lib/site'
import { ScrollReveal } from '@/components/ScrollReveal'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.nombre} — ${SITE.posicionamiento}`,
    description: SITE.descripcion,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

/**
 * lang queda fijo en es-AR: leer el pathname acá (headers()) forzaría
 * renderizado dinámico en todo el sitio y perdería el prerender estático.
 * Las páginas /en compensan con su propio <html lang> vía metadata de
 * ruta no es posible en App Router, así que es la única limitación
 * conocida de este enfoque frente a mover todo a app/[lang].
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${geist.variable} ${plexMono.variable}`}>
      <body>
        <a className="saltar" href="#inicio">
          Saltar al contenido
        </a>
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}
