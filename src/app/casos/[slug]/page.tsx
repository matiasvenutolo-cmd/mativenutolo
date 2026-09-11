import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASOS, getCaso } from '@/content/casos'
import { FUENTES } from '@/content/fuentes'
import { Evidencia, Evidencias } from '@/components/Evidencia'
import { Encabezado } from '@/components/Encabezado'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return CASOS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) return {}
  return {
    title: caso.titulo,
    description: caso.bajada,
    alternates: { canonical: `/casos/${caso.slug}` },
    openGraph: {
      type: 'article',
      title: `${caso.titulo} — ${SITE.nombre}`,
      description: caso.bajada,
      url: `${SITE.url}/casos/${caso.slug}`,
    },
  }
}

export default async function CasoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caso = getCaso(slug)
  if (!caso) notFound()

  return (
    <>
      <Encabezado />
      <main id="inicio" className="interior">
        <article className="contenedor">
          <header className="interior__cabecera">
            <p className="etiqueta">{caso.rotulo}</p>
            <h1 className="display-1 interior__titulo">{caso.titulo}</h1>
            <p className="interior__bajada">{caso.bajada}</p>
            <dl className="ficha">
              <div>
                <dt>Período</dt>
                <dd>{caso.periodo}</dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd>{caso.rol}</dd>
              </div>
              <div>
                <dt>Evidencia</dt>
                <dd>
                  <Evidencias ids={caso.fuentes} />
                </dd>
              </div>
            </dl>
          </header>

          <div className="interior__cuerpo">
            {caso.bloques.map((b, i) => {
              if (b.tipo === 'subtitulo') {
                return (
                  <h2 key={i} className="interior__subtitulo">
                    {b.texto}
                  </h2>
                )
              }
              if (b.tipo === 'cita') {
                const f = FUENTES[b.fuente]
                return (
                  <figure key={i} className="cita">
                    <blockquote cite={f.url}>
                      <p>«{b.texto}»</p>
                    </blockquote>
                    <figcaption>
                      {b.quien} <Evidencia id={b.fuente} />
                    </figcaption>
                  </figure>
                )
              }
              if (b.tipo === 'dato') {
                return (
                  <div key={i} className="dato">
                    <span className="dato__valor">{b.valor}</span>
                    <span className="dato__rotulo">
                      {b.rotulo}
                      {b.nota ? <em> {b.nota}</em> : null}
                    </span>
                    <Evidencia id={b.fuente} />
                  </div>
                )
              }
              if (b.tipo === 'nota') {
                return (
                  <aside key={i} className="aclaracion">
                    <p>{b.texto}</p>
                  </aside>
                )
              }
              return (
                <p key={i} className="interior__parrafo">
                  {b.texto}
                </p>
              )
            })}
          </div>

          <nav className="otros-casos" aria-label="Otros casos">
            <p className="etiqueta">Seguir leyendo</p>
            <div className="indice">
              {CASOS.filter((c) => c.slug !== caso.slug).map((c) => (
                <a key={c.slug} className="indice__fila" href={`/casos/${c.slug}`}>
                  <h3 className="indice__titulo">{c.titulo}</h3>
                  <p className="indice__linea">{c.bajada}</p>
                  <span className="indice__meta">{c.periodo}</span>
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
            '@type': 'CreativeWork',
            name: caso.titulo,
            headline: `${caso.titulo} — ${caso.rotulo}`,
            description: caso.bajada,
            url: `${SITE.url}/casos/${caso.slug}`,
            inLanguage: 'es-AR',
            author: { '@id': `${SITE.url}/#persona` },
            about: caso.rotulo,
            citation: caso.fuentes.map((id) => ({
              '@type': 'CreativeWork',
              name: FUENTES[id].titulo,
              url: FUENTES[id].url,
              publisher: {
                '@type': 'Organization',
                name: FUENTES[id].organizacion,
              },
            })),
          }),
        }}
      />
    </>
  )
}
