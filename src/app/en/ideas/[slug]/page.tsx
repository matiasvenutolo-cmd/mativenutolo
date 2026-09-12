import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IDEAS_EN } from '@/content/home.en'
import { IdeaView } from '@/components/IdeaView'

export function generateStaticParams() {
  return IDEAS_EN.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const idea = IDEAS_EN.find((i) => i.slug === slug)
  if (!idea) return {}
  return {
    title: idea.titulo,
    description: idea.bajada,
    alternates: {
      canonical: `/en/ideas/${idea.slug}`,
      languages: {
        'es-AR': `/ideas/${idea.slug}`,
        en: `/en/ideas/${idea.slug}`,
        'x-default': `/ideas/${idea.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: `${idea.titulo} — Matias Venutolo`,
      description: idea.bajada,
      url: `/en/ideas/${idea.slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function IdeaPageEn({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const idea = IDEAS_EN.find((i) => i.slug === slug)
  if (!idea) notFound()

  return <IdeaView lang="en" idea={idea} />
}
