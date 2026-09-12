import { listaFuentes, type EstadoFuente } from '@/content/fuentes'
import { Nav } from '@/components/Nav'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'
import { t, type Lang } from '@/lib/i18n'

const ETIQUETA_ESTADO: Record<Lang, Record<EstadoFuente, string>> = {
  es: {
    verificado: 'Verificado',
    autodeclarado: 'Autodeclarado',
    institucional: 'Institucional',
    proyeccion: 'Proyección',
  },
  en: {
    verificado: 'Verified',
    autodeclarado: 'Self-declared',
    institucional: 'Institutional',
    proyeccion: 'Projection',
  },
}

export function FuentesView({ lang = 'es' }: { lang?: Lang }) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'

  return (
    <>
      <Nav lang={lang} />
      <main id="inicio" className="interior">
        <div className="contenedor">
          <header className="interior__cabecera">
            <p className="rotulo">{d.fuentes.rotulo}</p>
            <h1 className="d1 interior__titulo">{d.fuentes.titulo}</h1>
            <p className="interior__bajada">{d.fuentes.bajada}</p>
          </header>

          <dl className="leyenda">
            <div>
              <dt>{ETIQUETA_ESTADO[lang].verificado}</dt>
              <dd>
                {lang === 'es'
                  ? 'Una fuente pública independiente lo dice.'
                  : 'An independent public source says so.'}
              </dd>
            </div>
            <div>
              <dt>{ETIQUETA_ESTADO[lang].institucional}</dt>
              <dd>
                {lang === 'es'
                  ? 'Es real, pero corresponde al Banco Ciudad o a un socio tecnológico, no a una persona.'
                  : "It's real, but it belongs to Banco Ciudad or a technology partner, not to a person."}
              </dd>
            </div>
            <div>
              <dt>{ETIQUETA_ESTADO[lang].autodeclarado}</dt>
              <dd>
                {lang === 'es'
                  ? 'Lo publicó Matias con su nombre y se cita como tal.'
                  : 'Matias published it under his own name, and it is cited as such.'}
              </dd>
            </div>
          </dl>

          <ol className="fuentes">
            {listaFuentes.map((f, i) => (
              <li key={f.id} className="fuente">
                <span className="fuente__n">{String(i + 1).padStart(2, '0')}</span>
                <div className="fuente__cuerpo">
                  <h2 className="fuente__titulo">
                    <a href={f.url} target="_blank" rel="noopener noreferrer">
                      {f.titulo} <span aria-hidden="true">↗</span>
                    </a>
                  </h2>
                  <p className="fuente__meta">
                    {f.organizacion} · {lang === 'es' ? f.fecha : f.fechaEn} ·{' '}
                    <b data-estado={f.estado}>{ETIQUETA_ESTADO[lang][f.estado]}</b>
                    {lang === 'es'
                      ? f.loNombra
                        ? ' · Lo nombra'
                        : ' · No lo nombra'
                      : f.loNombra
                        ? ' · Names him'
                        : " · Doesn't name him"}
                  </p>
                  <p className="fuente__prueba">
                    {lang === 'es' ? f.prueba : f.pruebaEn}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="aclaracion" style={{ marginTop: 40 }}>
            <p>
              {lang === 'es'
                ? 'Hay datos de este sitio que son autodeclarados y no tienen fuente pública: la formación de grado, el posgrado y las etapas de carrera anteriores a 2022. Están contados en primera persona y señalados por la ausencia de referencia, que es la manera honesta de distinguirlos.'
                : "Some facts on this site are self-declared and have no public source: his undergraduate degree, his graduate studies, and career stages before 2022. They are told in the first person and marked by the absence of a citation, which is the honest way to set them apart."}
            </p>
          </aside>
        </div>
      </main>
      <PieInterior lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: d.fuentes.titulo,
            url: `${SITE.url}${base}/fuentes`,
            inLanguage: lang === 'es' ? 'es-AR' : 'en',
            about: { '@id': `${SITE.url}/#persona` },
            hasPart: listaFuentes.map((f) => ({
              '@type': 'CreativeWork',
              name: f.titulo,
              url: f.url,
              publisher: { '@type': 'Organization', name: f.organizacion },
            })),
          }),
        }}
      />
    </>
  )
}
