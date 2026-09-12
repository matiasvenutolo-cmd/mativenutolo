import { Nav } from '@/components/Nav'
import { Portada } from '@/components/Portada'
import { Trayecto } from '@/components/Trayecto'
import { Capacidades } from '@/components/Capacidades'
import { CasoBit } from '@/components/CasoBit'
import { Escenario } from '@/components/Escenario'
import { Carrusel } from '@/components/Carrusel'
import { Evidencias } from '@/components/Evidencia'
import { ETAPAS } from '@/content/trayectoria'
import { IDEAS, OTROS_CASOS } from '@/content/home'
import { FUENTES } from '@/content/fuentes'
import { SITE } from '@/lib/site'

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Portada />

        <Escenario />

        <Carrusel />

        <Capacidades />

        <Trayecto />

        <CasoBit />

        <section className="casos" aria-label="Otros casos">
          <div className="contenedor">
            <div className="casos__grilla">
              {OTROS_CASOS.map((c) => (
                <article key={c.slug} className="caso-c">
                  <h2 className="caso-c__t">
                    <a href={`/casos/${c.slug}`}>{c.titulo}</a>
                  </h2>
                  <p className="caso-c__l">{c.linea}</p>
                  <Evidencias
                    ids={c.fuentes.slice(0, 1)}
                    className="caso-c__ev"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ideas" id="ideas" aria-label="Ideas">
          <div className="contenedor">
            <div className="ideas__lista">
              {IDEAS.map((idea) => (
                <a
                  key={idea.slug}
                  className="idea-b"
                  href={`/ideas/${idea.slug}`}
                >
                  <h2 className="idea-b__t">{idea.titulo}</h2>
                  <p className="idea-b__b">{idea.bajada}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="cierre" id="contacto">
          <div className="contenedor">
            <div className="cierre__grid">
              <h2 className="cierre__t">
                El próximo paso es hacer esto a mayor escala.
              </h2>
              <div>
                <p className="cierre__p">
                  Negocio, tecnología, producto, cliente, dato, inteligencia
                  artificial. En ese orden y por ese motivo.
                </p>
                <p className="cierre__p">
                  El mismo criterio sirve en cualquier organización grande:
                  entender el proceso completo antes de tocar la herramienta,
                  y no soltarlo hasta que el cliente lo note.
                </p>
              </div>
            </div>

            <div className="contacto">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              {SITE.email ? (
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor">
          <div className="pie__fila">
            <span>
              {SITE.nombre} · {SITE.cargo} · {SITE.organizacion}
            </span>
            <span>
              <a href="/fuentes">Fuentes</a> · Septiembre 2026
            </span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datosEstructurados()),
        }}
      />
    </>
  )
}

function datosEstructurados() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE.url}/#profilepage`,
    url: SITE.url,
    inLanguage: 'es-AR',
    dateModified: '2026-09-12',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE.url}/#persona`,
      name: SITE.nombre,
      alternateName: 'Mati Venutolo',
      jobTitle: SITE.cargo,
      description: SITE.descripcion,
      image: `${SITE.url}/fotos/retrato.jpg`,
      email: SITE.email || undefined,
      knowsLanguage: ['es', 'en'],
      nationality: { '@type': 'Country', name: 'Argentina' },
      worksFor: {
        '@type': 'Organization',
        name: SITE.organizacion,
        url: SITE.organizacionUrl,
      },
      knowsAbout: [
        'Inteligencia artificial aplicada a negocios',
        'Transformación organizacional',
        'Agentes de IA',
        'Automatización de procesos',
        'Canales conversacionales',
        'Experiencia del cliente',
      ],
      sameAs: [SITE.linkedin, FUENTES.podcast.url],
      subjectOf: [
        {
          '@type': 'Article',
          name: FUENTES.microsoftEs.titulo,
          url: FUENTES.microsoftEs.url,
          publisher: { '@type': 'Organization', name: 'Microsoft' },
          datePublished: FUENTES.microsoftEs.iso,
        },
        {
          '@type': 'PodcastEpisode',
          name: FUENTES.podcast.titulo,
          url: FUENTES.podcast.url,
          datePublished: FUENTES.podcast.iso,
        },
      ],
    },
    about: ETAPAS.map((e) => e.etiqueta),
  }
}
