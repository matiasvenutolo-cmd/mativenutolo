import type { MetadataRoute } from 'next'
import { CASOS } from '@/content/casos'
import { IDEAS } from '@/content/home'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date()
  return [
    { url: SITE.url, lastModified: ahora, priority: 1, changeFrequency: 'monthly' },
    { url: `${SITE.url}/fuentes`, lastModified: ahora, priority: 0.5 },
    ...CASOS.map((c) => ({
      url: `${SITE.url}/casos/${c.slug}`,
      lastModified: ahora,
      priority: 0.8,
    })),
    ...IDEAS.map((i) => ({
      url: `${SITE.url}/ideas/${i.slug}`,
      lastModified: ahora,
      priority: 0.6,
    })),
  ]
}
