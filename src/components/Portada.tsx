'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

const FOTOS = [
  {
    src: '/fotos/microsoft-argentina.jpg',
    alt: 'Matias Venutolo presentando la transformación AI First del Banco Ciudad en las oficinas de Microsoft',
    credito: 'Oficinas de Microsoft, Buenos Aires',
  },
  {
    src: '/fotos/adrha.jpg',
    alt: 'Matias Venutolo hablando con micrófono durante un panel en ADRHA',
    credito: 'Congreso ADRHA',
  },
  {
    src: '/fotos/academia-ia.jpg',
    alt: 'Matias Venutolo dando una clase de la Academia de IA del Banco Ciudad',
    credito: 'Academia de IA, Banco Ciudad',
  },
  {
    src: '/fotos/adrha-escenario.jpg',
    alt: 'Matias Venutolo en el escenario de ADRHA junto a otro orador',
    credito: 'Congreso ADRHA',
  },
  {
    src: '/fotos/retrato.jpg',
    alt: 'Retrato de Matias Venutolo',
    credito: 'Buenos Aires',
  },
]

const INTERVALO = 6000

/**
 * El hero no es una foto detrás de un título. Es un bloque de texto
 * compacto arriba y, debajo, un cuadro grande que sangra bajo el pliegue
 * con movimiento continuo: cada foto deriva lentamente en zoom mientras
 * está activa, así que nunca se ve como una diapositiva quieta.
 *
 * Si en algún momento hay un video propio (uno del que Matias tenga los
 * derechos, no una grabación de un tercero), este es el lugar donde
 * reemplazar el bloque de fotos por un <video autoPlay muted loop>: el
 * marcado y el velo de abajo ya están pensados para ese caso.
 */
export function Portada() {
  const [activa, setActiva] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (quieto.matches) return
    const t = window.setInterval(
      () => setActiva((i) => (i + 1) % FOTOS.length),
      INTERVALO,
    )
    return () => window.clearInterval(t)
  }, [auto])

  return (
    <section className="portada" id="inicio">
      <div className="contenedor portada__texto">
        <p className="portada__eyebrow">Negocio × Tecnología × IA</p>
        <h1 className="portada__nombre">{SITE.nombre}</h1>
        <p className="portada__rol">
          <b>{SITE.cargo}</b>
          <span>{SITE.organizacion}</span>
          <span>Buenos Aires</span>
        </p>
      </div>

      <div className="portada__visual">
        <div className="portada__marco" aria-hidden="true">
          {FOTOS.map((f, i) => (
            <img
              key={f.src}
              className="portada__foto"
              src={f.src}
              alt=""
              data-activa={i === activa}
              style={{ ['--fase' as string]: i % 2 === 0 ? '1' : '-1' }}
              fetchPriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          ))}
          <div className="portada__velo" />
        </div>

        <div className="portada__pie">
          <div className="contenedor portada__pie-fila">
            <p className="portada__creditos">{FOTOS[activa].credito}</p>
            <div className="portada__puntos">
              {FOTOS.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  className="portada__punto"
                  aria-current={i === activa}
                  aria-label={`Ver imagen ${i + 1} de ${FOTOS.length}: ${f.credito}`}
                  onClick={() => {
                    setActiva(i)
                    setAuto(false)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* el texto alternativo de las fotos vive acá para lectores de pantalla */}
      <p className="sr-only">{FOTOS.map((f) => f.alt).join('. ')}</p>
    </section>
  )
}
