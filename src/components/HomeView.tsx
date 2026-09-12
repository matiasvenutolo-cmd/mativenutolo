import { Nav } from '@/components/Nav'
import { Portada } from '@/components/Portada'
import { Trayecto } from '@/components/Trayecto'
import { Capacidades } from '@/components/Capacidades'
import { CasoBit } from '@/components/CasoBit'
import { Escenario } from '@/components/Escenario'
import { Carrusel } from '@/components/Carrusel'
import { Ideas } from '@/components/Ideas'
import { Evidencias } from '@/components/Evidencia'
import { ETAPAS } from '@/content/trayectoria'
import { ETAPAS_EN } from '@/content/trayectoria.en'
import { OTROS_CASOS } from '@/content/home'
import { OTROS_CASOS_EN } from '@/content/home.en'
import { FUENTES } from '@/content/fuentes'
import { SITE } from '@/lib/site'
import { t, type Lang } from '@/lib/i18n'

export function HomeView({ lang = 'es' }: { lang?: Lang }) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'
  const otrosCasos = lang === 'es' ? OTROS_CASOS : OTROS_CASOS_EN

  return (
    <>
      <Nav lang={lang} />

      <main>
        <Portada lang={lang} />

        <Escenario lang={lang} />

        <Carrusel lang={lang} />

        <Capacidades lang={lang} />

        <CasoBit lang={lang} />

        <section className="casos" aria-label={d.casosGrilla.aria}>
          <div className="contenedor">
            <div className="casos__grilla reveal">
              {otrosCasos.map((c) => (
                <article key={c.slug} className="caso-c">
                  <h2 className="caso-c__t">
                    <a href={`${base}/casos/${c.slug}`}>{c.titulo}</a>
                  </h2>
                  <p className="caso-c__l">{c.linea}</p>
                  <Evidencias
                    ids={c.fuentes.slice(0, 1)}
                    className="caso-c__ev"
                    lang={lang}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <Ideas lang={lang} />

        <Trayecto lang={lang} />

        <section className="cierre reveal" id="contacto">
          <div className="contenedor">
            <h2 className="cierre__t">{d.cierre.titulo}</h2>

            <div className="contacto">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <div className="contenedor">
          <div className="pie__fila">
            <span>
              {SITE.nombre} · {lang === 'es' ? SITE.cargo : SITE.cargoEn} ·{' '}
              {SITE.organizacion}
            </span>
            <span>
              <a href={`${base}/fuentes`}>{d.footer.fuentes}</a> ·{' '}
              {lang === 'es' ? 'Septiembre 2026' : 'September 2026'}
            </span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datosEstructurados(lang)),
        }}
      />
    </>
  )
}

function datosEstructurados(lang: Lang) {
  const etapas = lang === 'es' ? ETAPAS : ETAPAS_EN
  const base = lang === 'es' ? SITE.url : `${SITE.url}/en`

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${base}/#profilepage`,
    url: base,
    inLanguage: lang === 'es' ? 'es-AR' : 'en',
    dateModified: '2026-09-12',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE.url}/#persona`,
      name: SITE.nombre,
      alternateName: 'Mati Venutolo',
      jobTitle: lang === 'es' ? SITE.cargo : SITE.cargoEn,
      description: lang === 'es' ? SITE.descripcion : SITE.descripcionEn,
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
    about: etapas.map((e) => e.etiqueta),
  }
}
