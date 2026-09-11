import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IDEAS } from '@/content/home'
import { Encabezado } from '@/components/Encabezado'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return IDEAS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const idea = IDEAS.find((i) => i.slug === slug)
  if (!idea) return {}
  return {
    title: idea.titulo,
    description: idea.bajada,
    alternates: { canonical: `/ideas/${idea.slug}` },
    openGraph: {
      type: 'article',
      title: `${idea.titulo} — ${SITE.nombre}`,
      description: idea.bajada,
      url: `${SITE.url}/ideas/${idea.slug}`,
    },
  }
}

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const idea = IDEAS.find((i) => i.slug === slug)
  if (!idea) notFound()
  const otras = IDEAS.filter((i) => i.slug !== idea.slug)

  return (
    <>
      <Encabezado />
      <main id="inicio" className="interior">
        <article className="contenedor idea">
          <p className="etiqueta">Cómo pienso</p>
          <h1 className="idea__titulo">{idea.titulo}</h1>
          <p className="idea__bajada">{idea.bajada}</p>
          <div className="idea__cuerpo">
            {idea.cuerpo.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="idea__aviso">
            Esto es una opinión formada trabajando, no un hecho verificable. Los
            casos que la sostienen están en{' '}
            <a href="/#casos">la sección de casos</a>.
          </p>

          <nav className="otros-casos" aria-label="Otras ideas">
            <p className="etiqueta">Otras ideas</p>
            <div className="indice">
              {otras.map((o) => (
                <a key={o.slug} className="indice__fila" href={`/ideas/${o.slug}`}>
                  <h2 className="indice__titulo">{o.titulo}</h2>
                  <p className="indice__linea">{o.bajada}</p>
                  <span className="indice__meta">Leer</span>
                </a>
              ))}
            </div>
          </nav>
        </article>
      </main>
      <PieInterior />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: idea.titulo,
            description: idea.bajada,
            url: `${SITE.url}/ideas/${idea.slug}`,
            inLanguage: 'es-AR',
            author: { '@id': `${SITE.url}/#persona` },
            publisher: { '@id': `${SITE.url}/#persona` },
          }),
        }}
      />
    </>
  )
}
