import type { MetadataRoute } from 'next'
import { CASOS } from '@/content/casos'
import { IDEAS } from '@/content/home'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date()

  const alt = (esPath: string, enPath: string) => ({
    languages: {
      'es-AR': `${SITE.url}${esPath}`,
      en: `${SITE.url}${enPath}`,
    },
  })

  return [
    {
      url: SITE.url,
      lastModified: ahora,
      priority: 1,
      changeFrequency: 'monthly',
      alternates: alt('/', '/en'),
    },
    {
      url: `${SITE.url}/en`,
      lastModified: ahora,
      priority: 1,
      changeFrequency: 'monthly',
      alternates: alt('/', '/en'),
    },
    {
      url: `${SITE.url}/fuentes`,
      lastModified: ahora,
      priority: 0.5,
      alternates: alt('/fuentes', '/en/fuentes'),
    },
    {
      url: `${SITE.url}/en/fuentes`,
      lastModified: ahora,
      priority: 0.5,
      alternates: alt('/fuentes', '/en/fuentes'),
    },
    ...CASOS.flatMap((c) => [
      {
        url: `${SITE.url}/casos/${c.slug}`,
        lastModified: ahora,
        priority: 0.8,
        alternates: alt(`/casos/${c.slug}`, `/en/casos/${c.slug}`),
      },
      {
        url: `${SITE.url}/en/casos/${c.slug}`,
        lastModified: ahora,
        priority: 0.8,
        alternates: alt(`/casos/${c.slug}`, `/en/casos/${c.slug}`),
      },
    ]),
    ...IDEAS.flatMap((i) => [
      {
        url: `${SITE.url}/ideas/${i.slug}`,
        lastModified: ahora,
        priority: 0.6,
        alternates: alt(`/ideas/${i.slug}`, `/en/ideas/${i.slug}`),
      },
      {
        url: `${SITE.url}/en/ideas/${i.slug}`,
        lastModified: ahora,
        priority: 0.6,
        alternates: alt(`/ideas/${i.slug}`, `/en/ideas/${i.slug}`),
      },
    ]),
  ]
}
