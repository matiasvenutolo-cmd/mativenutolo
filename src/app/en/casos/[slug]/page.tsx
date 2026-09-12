import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASOS_EN, getCasoEn } from '@/content/casos.en'
import { CasoView } from '@/components/CasoView'

export function generateStaticParams() {
  return CASOS_EN.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caso = getCasoEn(slug)
  if (!caso) return {}
  return {
    title: caso.titulo,
    description: caso.bajada,
    alternates: {
      canonical: `/en/casos/${caso.slug}`,
      languages: {
        'es-AR': `/casos/${caso.slug}`,
        en: `/en/casos/${caso.slug}`,
        'x-default': `/casos/${caso.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${caso.titulo} — Matias Venutolo`,
      description: caso.bajada,
      url: `/en/casos/${caso.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function CasoPageEn({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = getCasoEn(slug)
  if (!caso) notFound()

  return <CasoView lang="en" caso={caso} />
}
