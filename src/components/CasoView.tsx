import { CASOS } from '@/content/casos'
import { CASOS_EN } from '@/content/casos.en'
import { FUENTES } from '@/content/fuentes'
import { Evidencia, Evidencias } from '@/components/Evidencia'
import { Nav } from '@/components/Nav'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'
import { t, type Lang } from '@/lib/i18n'
import type { Caso } from '@/content/casos'

export function CasoView({ lang, caso }: { lang: Lang; caso: Caso }) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'
  const casos = lang === 'es' ? CASOS : CASOS_EN

  return (
    <>
      <Nav lang={lang} />
      <main id="inicio" className="interior">
        <article className="contenedor">
          <header className="interior__cabecera">
            <p className="rotulo">{caso.rotulo}</p>
            <h1 className="d1 interior__titulo">{caso.titulo}</h1>
            <p className="interior__bajada">{caso.bajada}</p>
            <dl className="ficha">
              <div>
                <dt>{d.caso.periodo}</dt>
                <dd>{caso.periodo}</dd>
              </div>
              <div>
                <dt>{d.caso.rol}</dt>
                <dd>{caso.rol}</dd>
              </div>
              <div>
                <dt>{d.caso.evidencia}</dt>
                <dd>
                  <Evidencias ids={caso.fuentes} lang={lang} />
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
                      {b.quien} <Evidencia id={b.fuente} lang={lang} />
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
                    <Evidencia id={b.fuente} lang={lang} />
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

          <nav className="otros-casos" aria-label={d.caso.seguirLeyendo}>
            <p className="rotulo">{d.caso.seguirLeyendo}</p>
            <div className="indice">
              {casos
                .filter((c) => c.slug !== caso.slug)
                .map((c) => (
                  <a key={c.slug} className="indice__fila" href={`${base}/casos/${c.slug}`}>
                    <h3 className="indice__titulo">{c.titulo}</h3>
                    <p className="indice__linea">{c.bajada}</p>
                    <span className="indice__meta">{c.periodo}</span>
                  </a>
                ))}
            </div>
          </nav>
        </article>
      </main>
      <PieInterior lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: caso.titulo,
            headline: `${caso.titulo} — ${caso.rotulo}`,
            description: caso.bajada,
            url: `${SITE.url}${base}/casos/${caso.slug}`,
            inLanguage: lang === 'es' ? 'es-AR' : 'en',
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
