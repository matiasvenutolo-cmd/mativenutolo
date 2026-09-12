'use client'

import { useEffect, useRef, useState } from 'react'
import { APARICIONES } from '@/content/home'

const VIDEOS = APARICIONES.filter((a) => a.video)

/**
 * Carrusel horizontal con las charlas grabadas. Scroll-snap nativo por
 * debajo, así que funciona arrastrando con el dedo o el mouse aunque
 * falle el JavaScript; las flechas solo desplazan ese mismo scroll un
 * tramo, no reimplementan la navegación.
 */
export function Carrusel() {
  const pista = useRef<HTMLDivElement>(null)
  /** Posición de reposo del primer tramo: el padding del carril hace que
   *  el snap "inicio" no sea 0, así que se mide en lugar de asumirla. */
  const inicio = useRef(0)
  const [enInicio, setEnInicio] = useState(true)
  const [enFin, setEnFin] = useState(false)

  useEffect(() => {
    const el = pista.current
    if (!el) return
    inicio.current = el.scrollLeft
    const medir = () => {
      setEnInicio(el.scrollLeft <= inicio.current + 4)
      setEnFin(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
    }
    medir()
    el.addEventListener('scroll', medir, { passive: true })
    window.addEventListener('resize', medir)
    return () => {
      el.removeEventListener('scroll', medir)
      window.removeEventListener('resize', medir)
    }
  }, [])

  const desplazar = (signo: 1 | -1) => {
    const el = pista.current
    if (!el) return
    const tarjeta = el.querySelector<HTMLElement>('.video-c')
    const paso = tarjeta ? tarjeta.getBoundingClientRect().width + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: signo * paso, behavior: 'smooth' })
  }

  return (
    <section className="carrusel" aria-label="Charlas grabadas">
      <div className="contenedor carrusel__cabeza">
        <p className="carrusel__rotulo">Charlas grabadas</p>
        <div className="carrusel__nav">
          <button
            type="button"
            className="carrusel__flecha"
            onClick={() => desplazar(-1)}
            disabled={enInicio}
            aria-label="Ver charla anterior"
          >
            ←
          </button>
          <button
            type="button"
            className="carrusel__flecha"
            onClick={() => desplazar(1)}
            disabled={enFin}
            aria-label="Ver charla siguiente"
          >
            →
          </button>
        </div>
      </div>

      <div className="carrusel__pista" ref={pista}>
        <div className="carrusel__riel">
          {VIDEOS.map((v) => (
            <a
              key={v.video}
              className="video-c"
              href={v.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="video-c__marco">
                {v.foto ? (
                  <img
                    src={v.foto.src}
                    alt=""
                    width={v.foto.ancho}
                    height={v.foto.alto}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <span className="video-c__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              <span className="video-c__meta">
                {v.lugar} · {v.fecha}
              </span>
              <span className="video-c__t">{v.titulo}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
