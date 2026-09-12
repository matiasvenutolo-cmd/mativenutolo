import type { Metadata } from 'next'
import { FuentesView } from '@/components/FuentesView'

export const metadata: Metadata = {
  title: 'Fuentes',
  description:
    'Todas las fuentes públicas que respaldan lo que dice este sitio, con su estado de verificación.',
  alternates: {
    canonical: '/fuentes',
    languages: {
      'es-AR': '/fuentes',
      en: '/en/fuentes',
      'x-default': '/fuentes',
    },
  },
  openGraph: {
    title: 'Fuentes — Matias Venutolo',
    description:
      'Todas las fuentes públicas que respaldan lo que dice este sitio, con su estado de verificación.',
    url: '/fuentes',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function FuentesPage() {
  return <FuentesView lang="es" />
}
