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

const TONOS_BIT = ['var(--s3)', 'var(--s4)', 'var(--s5)', 'var(--s6)', 'var(--s7)']

function Rotulo({ n, t }: { n: string; t: string }) {
  return (
    <div className="rotulo-seccion">
      <span className="rotulo-seccion__n">{n}</span>
      <span className="rotulo-seccion__t">{t}</span>
    </div>
  )
}

export default function Home() {
  const ideaAbierta = IDEAS[0]
  const restoIdeas = IDEAS.slice(1)

  return (
    <>
      <Encabezado />

      <main id="inicio">
        {/* ---------------- 01 · Hero ---------------- */}
        <section className="hero">
          <div className="contenedor">
            <div className="hero__grid">
              <div>
                <h1 className="display-1 hero__nombre">Matías Venutolo</h1>
                <p className="hero__posicion">Negocio × Tecnología × IA</p>
                <p className="hero__frase">
                  Construyo organizaciones que funcionan de otra manera con
                  inteligencia artificial.
                </p>
                <p className="hero__cargo">
                  {SITE.cargo}
                  <span> · </span>
                  {SITE.organizacion}
                </p>
                <ul className="evidencias evidencias--hero">
                  <li>
                    <Evidencia id="microsoftEs" claim="10+ agentes en 6 meses" />
                  </li>
                  <li>
                    <Evidencia id="pamoic" claim="2 reconocimientos al caso BIT" />
                  </li>
                  <li>
                    <Evidencia id="aiTour" claim="Microsoft AI Tour, Santiago" />
                  </li>
                </ul>
              </div>

              <figure className="hero__retrato">
                <img
                  src="/fotos/microsoft-argentina.jpg"
                  alt="Matías Venutolo presentando la transformación AI First del Banco Ciudad"
                  width={1152}
                  height={1536}
                  fetchPriority="high"
                  decoding="async"
                />
                <figcaption>Oficinas de Microsoft, Buenos Aires</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------------- 02 · La línea ---------------- */}
        <section className="seccion seccion--sin-regla" id="trayectoria">
          <div className="contenedor">
            <Rotulo n="02" t="Trayectoria" />
            <div className="linea__intro">
              <h2 className="display-2">
                Una carrera es una línea, no una lista.
              </h2>
              <p className="linea__secuencia">
                Negocio + tecnología → sistemas bancarios → canales digitales →
                liderazgo → producto → cliente → dato → <b>IA</b> →{' '}
                <b>transformación organizacional</b>
              </p>
            </div>
            <Linea />
          </div>
        </section>

        {/* ---------------- 03 · Capacidades ---------------- */}
        <section className="seccion" id="capacidades">
          <div className="contenedor">
            <Rotulo n="03" t="Qué construyo" />
            <h2 className="display-2" style={{ marginBottom: 34, maxWidth: '20ch' }}>
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
          </div>
        </section>

        {/* ---------------- 04 · BIT ---------------- */}
        <section className="seccion" id="casos">
          <div className="contenedor">
            <Rotulo n="04" t="Caso principal" />
            <div className="bit__encabezado">
              <h2 className="display-2">
                BIT empezó respondiendo dónde estaba una tarjeta.
              </h2>
              <p className="lede">
                Hoy resuelve más de sesenta trámites y es el canal que los
                clientes eligen primero. El camino entre esas dos frases es el
                caso.
              </p>
            </div>

            <div className="bit__hitos">
              {BIT_HITOS.map((h, i) => (
                <article
                  key={h.anio}
                  className="hito"
                  style={{ ['--tono' as string]: TONOS_BIT[i] ?? 'var(--s7)' }}
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

            <h3
              className="etiqueta"
              style={{ marginTop: 56, marginBottom: 6 }}
            >
              Otros casos
            </h3>
            <div className="indice">
              {OTROS_CASOS.map((c) => (
                <a key={c.slug} className="indice__fila" href={`/casos/${c.slug}`}>
                  <h4 className="indice__titulo">{c.titulo}</h4>
                  <p className="indice__linea">{c.linea}</p>
                  <span className="indice__meta">
                    {FUENTES[c.fuentes[0]].organizacion}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 05 · Cómo pienso ---------------- */}
        <section className="seccion" id="pensamiento">
          <div className="contenedor">
            <Rotulo n="05" t="Cómo pienso" />
            <article className="idea-abierta">
              <h2 className="idea-abierta__titulo">{ideaAbierta.titulo}</h2>
              <div className="idea-abierta__cuerpo">
                {ideaAbierta.cuerpo.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
            <div className="indice" style={{ borderTop: 0 }}>
              {restoIdeas.map((idea) => (
                <a
                  key={idea.slug}
                  className="indice__fila"
                  href={`/ideas/${idea.slug}`}
                >
                  <h3 className="indice__titulo">{idea.titulo}</h3>
                  <p className="indice__linea">{idea.bajada}</p>
                  <span className="indice__meta">Leer</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 06 · Público ---------------- */}
        <section className="seccion" id="publico">
          <div className="contenedor">
            <Rotulo n="06" t="Público" />
            <h2 className="display-2" style={{ marginBottom: 30, maxWidth: '18ch' }}>
              Cosas que me invitaron a explicar.
            </h2>
            <div>
              {APARICIONES.map((a) => (
                <article
                  key={a.titulo}
                  className="aparicion"
                  data-con-foto={Boolean(a.foto)}
                >
                  <div className="aparicion__meta">
                    <b>{a.lugar}</b>
                    {a.formato}
                    <br />
                    {a.fecha}
                  </div>
                  <div>
                    <h3 className="aparicion__titulo">{a.titulo}</h3>
                    <p className="aparicion__texto">{a.texto}</p>
                    <ul className="evidencias aparicion__fuentes">
                      {a.fuentes.map((id) => (
                        <li key={id}>
                          <Evidencia id={id} />
                        </li>
                      ))}
                      {a.video ? (
                        <li>
                          <a
                            className="evidencia"
                            href={a.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Ver la charla</span>
                            <span className="evidencia__flecha" aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                  {a.foto ? (
                    <img
                      className="aparicion__foto"
                      src={a.foto.src}
                      alt={a.foto.alt}
                      width={a.foto.ancho}
                      height={a.foto.alto}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span aria-hidden="true" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- 07 · Qué sigue ---------------- */}
        <section className="seccion">
          <div className="contenedor">
            <Rotulo n="07" t="Qué sigue" />
            <div className="futuro">
              <h2 className="display-2">La línea sigue.</h2>
              <div>
                <p className="parrafo futuro__texto">
                  Lo que aprendí construyendo una capacidad de inteligencia
                  artificial dentro de un banco se aplica a cualquier
                  organización grande que tenga clientes, procesos y gente que
                  los sostiene.
                </p>
                <p className="parrafo futuro__texto">
                  Me interesa el problema completo: la relación con el cliente
                  entendida de punta a punta, con la inteligencia artificial
                  como una capa permanente sobre el negocio y no como un
                  proyecto con fecha de cierre.
                </p>
              </div>
            </div>
            <div className="futuro__cola" aria-hidden="true">
              <i style={{ background: 'var(--s7)' }} />
              <i />
            </div>
          </div>
        </section>

        {/* ---------------- 08 · Contacto ---------------- */}
        <section className="seccion" id="contacto">
          <div className="contenedor">
            <Rotulo n="08" t="Contacto" />
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
                ) : (
                  <span className="etiqueta">
                    Correo profesional pendiente de definir
                  </span>
                )}
              </div>
              <p className="etiqueta" style={{ maxWidth: '24ch', lineHeight: 1.9 }}>
                Buenos Aires
                <br />
                Argentina
              </p>
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
              <a href="/fuentes">Todas las fuentes</a> · Última revisión
              septiembre 2026
            </span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados()) }}
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
