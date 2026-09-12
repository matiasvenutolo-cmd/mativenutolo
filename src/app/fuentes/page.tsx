import type { Metadata } from 'next'
import { listaFuentes, type EstadoFuente } from '@/content/fuentes'
import { Nav } from '@/components/Nav'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Fuentes',
  description:
    'Todas las fuentes públicas que respaldan lo que dice este sitio, con su estado de verificación.',
  alternates: { canonical: '/fuentes' },
}

const ETIQUETA_ESTADO: Record<EstadoFuente, string> = {
  verificado: 'Verificado',
  autodeclarado: 'Autodeclarado',
  institucional: 'Institucional',
  proyeccion: 'Proyección',
}

export default function FuentesPage() {
  return (
    <>
      <Nav />
      <main id="inicio" className="interior">
        <div className="contenedor">
          <header className="interior__cabecera">
            <p className="rotulo">Transparencia</p>
            <h1 className="d1 interior__titulo">Fuentes</h1>
            <p className="interior__bajada">
              Todo lo que este sitio afirma sale de alguno de estos lugares. Lo
              que no tiene fuente pública no está publicado como hecho.
            </p>
          </header>

          <dl className="leyenda">
            <div>
              <dt>Verificado</dt>
              <dd>Una fuente pública independiente lo dice.</dd>
            </div>
            <div>
              <dt>Institucional</dt>
              <dd>
                Es real, pero corresponde al Banco Ciudad o a un socio
                tecnológico, no a una persona.
              </dd>
            </div>
            <div>
              <dt>Autodeclarado</dt>
              <dd>Lo publicó Matias con su nombre y se cita como tal.</dd>
            </div>
          </dl>

          <ol className="fuentes">
            {listaFuentes.map((f, i) => (
              <li key={f.id} className="fuente">
                <span className="fuente__n">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="fuente__cuerpo">
                  <h2 className="fuente__titulo">
                    <a href={f.url} target="_blank" rel="noopener noreferrer">
                      {f.titulo} <span aria-hidden="true">↗</span>
                    </a>
                  </h2>
                  <p className="fuente__meta">
                    {f.organizacion} · {f.fecha} ·{' '}
                    <b data-estado={f.estado}>{ETIQUETA_ESTADO[f.estado]}</b>
                    {f.loNombra ? ' · Lo nombra' : ' · No lo nombra'}
                  </p>
                  <p className="fuente__prueba">{f.prueba}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="aclaracion" style={{ marginTop: 40 }}>
            <p>
              Hay datos de este sitio que son autodeclarados y no tienen fuente
              pública: la formación de grado, el posgrado y las etapas de
              carrera anteriores a 2022. Están contados en primera persona y
              señalados por la ausencia de referencia, que es la manera honesta
              de distinguirlos.
            </p>
          </aside>
        </div>
      </main>
      <PieInterior />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Fuentes',
            url: `${SITE.url}/fuentes`,
            inLanguage: 'es-AR',
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
