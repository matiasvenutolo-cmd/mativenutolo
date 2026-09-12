import type { ReactNode } from 'react'
import { IDEAS } from '@/content/home'

const ICONOS: Record<string, ReactNode> = {
  'una-metrica-no-es-la-mision': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  'la-ia-no-es-del-area-de-tecnologia': (
    <>
      <circle cx="6" cy="7" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M8.6 8.9 15.4 15.1" />
    </>
  ),
  'probar-antes-de-sobre-construir': (
    <>
      <path d="M10 3h4" />
      <path d="M10.5 3v6.2L5.8 18a1.8 1.8 0 0 0 1.6 2.6h9.2a1.8 1.8 0 0 0 1.6-2.6l-4.7-8.8V3" />
      <path d="M8.3 15h7.4" />
    </>
  ),
  'empeza-por-el-cliente': (
    <>
      <circle cx="5.5" cy="6" r="2.2" />
      <path d="M5.5 8.2v4.3c0 2.6 1.8 4.7 6.5 5.8" />
      <circle cx="18.5" cy="18" r="2.2" />
      <path d="m15.6 15.4 2.2 1.8" />
    </>
  ),
  'ai-first-empieza-por-las-personas': (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.8 20c.2-2.7 1.9-4.6 4.2-4.6" />
    </>
  ),
  'definiciones-compartidas': (
    <>
      <path d="M9 4.5h3.2a1.3 1.3 0 0 1 1.3 1.3V8h1.9a1.6 1.6 0 0 1 0 3.2H13.5v2.6h2.2a1.6 1.6 0 1 1 0 3.2H13.5V19a1.3 1.3 0 0 1-1.3 1.3H9v-2.2a1.6 1.6 0 1 0 0-3.2v-2.6a1.6 1.6 0 1 0 0-3.2Z" />
    </>
  ),
}

export function Ideas() {
  return (
    <section className="ideas" id="ideas" aria-label="Ideas">
      <div className="contenedor">
        <div className="ideas__cabeza">
          <p className="ideas__rotulo">Cómo pienso</p>
          <h2 className="ideas__t">Seis convicciones que uso para decidir.</h2>
          <p className="ideas__bajada">
            No son un método cerrado, son el criterio con el que priorizo
            cuando negocio, tecnología y personas empujan para lados
            distintos.
          </p>
        </div>

        <div className="ideas__lista">
          {IDEAS.map((idea, i) => (
            <article key={idea.slug} className="idea-c">
              <div className="idea-c__icono">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONOS[idea.slug]}
                </svg>
                <span className="idea-c__num">{i + 1}</span>
              </div>
              <h3 className="idea-c__t">
                <a href={`/ideas/${idea.slug}`}>{idea.titulo}</a>
              </h3>
              <p className="idea-c__b">{idea.bajada}</p>
              <p className="idea-c__pie">
                Leer nota <span aria-hidden="true">→</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
