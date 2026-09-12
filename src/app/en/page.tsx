import type { Metadata } from 'next'
import { HomeView } from '@/components/HomeView'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: SITE.posicionamientoEn,
  description: SITE.descripcionEn,
  alternates: {
    canonical: '/en',
    languages: {
      'es-AR': '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: SITE.localeEn,
    url: `${SITE.url}/en`,
    siteName: SITE.nombre,
    title: `${SITE.nombre} — ${SITE.posicionamientoEn}`,
    description: SITE.descripcionEn,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.nombre} — ${SITE.posicionamientoEn}`,
    description: SITE.descripcionEn,
    images: ['/og-image.jpg'],
  },
}

export default function HomeEn() {
  return <HomeView lang="en" />
}
