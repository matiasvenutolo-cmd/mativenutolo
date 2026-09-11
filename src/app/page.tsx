import { Encabezado } from '@/components/Encabezado'
import { Linea } from '@/components/Linea'
import { Evidencia, Evidencias } from '@/components/Evidencia'
import { ETAPAS } from '@/content/trayectoria'
import {
  APARICIONES,
  BIT_HITOS,
  CAPACIDADES,
  IDEAS,
  OTROS_CASOS,
} from '@/content/home'
import { FUENTES } from '@/content/fuentes'
import { SITE } from '@/lib/site'

const TONOS_BIT = [
  'var(--n3)',
  'var(--n4)',
  'var(--n5)',
  'var(--n6)',
  'var(--n7)',
]

/** Las cuatro cifras de BIT, en el orden en que cuentan la historia. */
const BIT_CIFRAS = [
  { valor: '+51 %', rotulo: 'Interacciones por WhatsApp' },
  { valor: '−15 pts', rotulo: 'Derivaciones a un agente humano' },
  { valor: '+18 pts', rotulo: 'Satisfacción del cliente' },
  { valor: '60+', rotulo: 'Trámites que resuelve el canal' },
] as const

export default function Home() {
  return (
    <>
      <Encabezado />

      <main id="inicio">
        {/* ============ apertura: hero + trayectoria, en negro ============ */}
        <div className="banda banda--noche">
          <section className="contenedor hero">
            <div className="hero__grid">
              <div>
                <p className="hero__nombre">
                  Matías Venutolo · Negocio × Tecnología × IA
                </p>
                <h1 className="hero__frase">
                  Construyo organizaciones que funcionan de otra manera con{' '}
                  <em>inteligencia artificial</em>.
                </h1>
                <p className="hero__cargo">
                  {SITE.cargo} · {SITE.organizacion}
                </p>
                <ul className="hero__kpis">
                  <li className="hero__kpi">
                    <b>10+</b>
                    <span className="hero__kpi__rotulo">
                      agentes de IA en seis meses
                    </span>
                    <Evidencia id="microsoftEs" />
                  </li>
                  <li className="hero__kpi">
                    <b>7×</b>
                    <span className="hero__kpi__rotulo">
                      retorno sobre el costo
                    </span>
                    <Evidencia id="microsoftEn" />
                  </li>
                  <li className="hero__kpi">
                    <b>2</b>
                    <span className="hero__kpi__rotulo">
                      reconocimientos al caso BIT
                    </span>
                    <Evidencia id="pamoic" />
                  </li>
                </ul>
              </div>

              <figure className="hero__retrato">
                <img
                  src="/fotos/retrato.jpg"
                  alt="Retrato de Matías Venutolo"
                  width={1200}
                  height={1600}
                  fetchPriority="high"
                  decoding="async"
                />
                <figcaption>Buenos Aires</figcaption>
              </figure>
            </div>
          </section>

          <section className="contenedor bloque" id="trayectoria">
            <div className="linea__intro">
              <h2 className="d2">Una carrera es una línea, no una lista.</h2>
              <p className="linea__secuencia">
                Negocio + tecnología → sistemas bancarios → canales digitales →
                liderazgo → producto → cliente → dato → <b>IA</b> →{' '}
                <b>transformación organizacional</b>
              </p>
            </div>
            <Linea />
          </section>
        </div>

        {/* ============ qué construyo ============ */}
        <div className="banda banda--claro">
          <section className="contenedor bloque" id="capacidades">
            <p className="rotulo">Qué construyo</p>
            <h2 className="d2" style={{ marginBottom: 40, maxWidth: '18ch' }}>
              Cuatro cosas que sé hacer, y el caso donde cada una se probó.
            </h2>
            <div className="capacidades">
              {CAPACIDADES.map((c) => (
                <article key={c.clave} className="capacidad">
                  <h3 className="capacidad__titulo">
                    <a href={c.href ?? '#casos'}>{c.titulo}</a>
                  </h3>
                  <p className="capacidad__resumen">{c.resumen}</p>
                  <div className="capacidad__prueba">
                    {c.prueba}
                    <Evidencias ids={c.fuentes} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* ============ BIT, en negro ============ */}
        <div className="banda banda--noche">
          <section className="contenedor bloque" id="casos">
            <p className="rotulo">Caso principal · BIT</p>
            <div className="bit__cabecera">
              <h2 className="d2">
                BIT empezó respondiendo dónde estaba una tarjeta.
              </h2>
              <p className="lede">
                Hoy resuelve más de sesenta trámites y es el canal que los
                clientes eligen primero. El camino entre esas dos frases es el
                caso.
              </p>
            </div>

            <div className="bit__cifras">
              {BIT_CIFRAS.map((c) => (
                <div key={c.rotulo} className="bit__cifra">
                  <b>{c.valor}</b>
                  <span>{c.rotulo}</span>
                </div>
              ))}
            </div>

            <div>
              {BIT_HITOS.map((h, i) => (
                <article
                  key={h.anio}
                  className="hito"
                  style={{ ['--tono' as string]: TONOS_BIT[i] ?? 'var(--n7)' }}
                >
                  <span className="hito__punto" aria-hidden="true" />
                  <div className="hito__anio">{h.anio}</div>
                  <div>
                    <h3 className="hito__titulo">{h.titulo}</h3>
                    <p className="hito__texto">{h.texto}</p>
                    {h.fuentes ? (
                      <Evidencias ids={h.fuentes} className="hito__fuentes" />
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <p className="rotulo" style={{ marginTop: 60, marginBottom: 10 }}>
              Otros casos
            </p>
            <div className="indice">
              {OTROS_CASOS.map((c) => (
                <a key={c.slug} className="indice__fila" href={`/casos/${c.slug}`}>
                  <h3 className="indice__titulo">{c.titulo}</h3>
                  <p className="indice__linea">{c.linea}</p>
                  <span className="indice__meta">
                    {FUENTES[c.fuentes[0]].organizacion}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* ============ cómo pienso + público, en claro ============ */}
        <div className="banda banda--claro">
          <section className="contenedor bloque" id="pensamiento">
            <p className="rotulo">Cómo pienso</p>
            <h2 className="d2" style={{ marginBottom: 40, maxWidth: '16ch' }}>
              Seis posiciones que uso para decidir.
            </h2>
            <div className="ideas">
              {IDEAS.map((idea) => (
                <a
                  key={idea.slug}
                  className="idea-fila"
                  href={`/ideas/${idea.slug}`}
                >
                  <h3 className="idea-fila__titulo">{idea.titulo}</h3>
                  <p className="idea-fila__bajada">{idea.bajada}</p>
                  <span className="idea-fila__mas">Leer ↗</span>
                </a>
              ))}
            </div>
          </section>

          <section
            className="contenedor bloque"
            id="publico"
            style={{ paddingTop: 0 }}
          >
            <p className="rotulo">Público</p>
            <h2 className="d2" style={{ marginBottom: 44, maxWidth: '16ch' }}>
              Cosas que me invitaron a explicar.
            </h2>
            <div className="publico">
              {APARICIONES.map((a, i) => (
                <article
                  key={a.titulo}
                  className={
                    i === 0 ? 'aparicion aparicion--destacada' : 'aparicion'
                  }
                >
                  {a.foto ? (
                    <img
                      className="aparicion__foto"
                      src={a.foto.src}
                      alt={a.foto.alt}
                      width={a.foto.ancho}
                      height={a.foto.alto}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  ) : null}
                  <div className="aparicion__cuerpo">
                    <p className="aparicion__meta">
                      <b>{a.lugar}</b> · {a.formato} · {a.fecha}
                    </p>
                    <h3 className="aparicion__titulo">{a.titulo}</h3>
                    <p className="aparicion__texto">{a.texto}</p>
                    <ul className="evidencias">
                      {a.video ? (
                        <li>
                          <a
                            className="evidencia"
                            href={a.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Ver la charla</span>
                            <span
                              className="evidencia__flecha"
                              aria-hidden="true"
                            >
                              ↗
                            </span>
                          </a>
                        </li>
                      ) : null}
                      {a.fuentes.slice(0, 1).map((id) => (
                        <li key={id}>
                          <Evidencia id={id} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* ============ cierre y contacto, en negro ============ */}
        <div className="banda banda--noche">
          <section className="contenedor bloque" id="contacto">
            <div className="cierre">
              <h2 className="d2">La línea sigue.</h2>
              <div>
                <p>
                  Lo que aprendí construyendo una capacidad de inteligencia
                  artificial dentro de un banco se aplica a cualquier
                  organización grande que tenga clientes, procesos y gente que
                  los sostiene.
                </p>
                <p>
                  Me interesa el problema completo: la relación con el cliente
                  entendida de punta a punta, con la inteligencia artificial
                  como una capa permanente sobre el negocio y no como un
                  proyecto con fecha de cierre.
                </p>
              </div>
            </div>
            <div className="cierre__cola" aria-hidden="true" />

            <div className="contacto">
              <div className="contacto__enlaces">
                <a
                  className="contacto__enlace"
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                {SITE.email ? (
                  <a className="contacto__enlace" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                ) : null}
              </div>
              <p className="contacto__lugar">
                Buenos Aires
                <br />
                Argentina
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="pie">
        <div className="contenedor">
          <div className="pie__fila">
            <span>
              {SITE.nombre} · {SITE.cargo} · {SITE.organizacion}
            </span>
            <span>
              <a href="/fuentes">Todas las fuentes</a> · Última revisión
              septiembre 2026
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
    dateModified: '2026-09-11',
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
