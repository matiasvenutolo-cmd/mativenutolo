'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

const FOTOS = [
  {
    src: '/fotos/microsoft-argentina.jpg',
    alt: 'Matías Venutolo presentando la transformación AI First del Banco Ciudad en las oficinas de Microsoft',
    credito: 'Oficinas de Microsoft, Buenos Aires',
  },
  {
    src: '/fotos/adrha.jpg',
    alt: 'Matías Venutolo hablando con micrófono durante un panel en ADRHA',
    credito: 'Congreso ADRHA',
  },
  {
    src: '/fotos/academia-ia.jpg',
    alt: 'Matías Venutolo dando una clase de la Academia de IA del Banco Ciudad',
    credito: 'Academia de IA, Banco Ciudad',
  },
  {
    src: '/fotos/adrha-escenario.jpg',
    alt: 'Matías Venutolo en el escenario de ADRHA junto a otro orador',
    credito: 'Congreso ADRHA',
  },
  {
    src: '/fotos/retrato.jpg',
    alt: 'Retrato de Matías Venutolo',
    credito: 'Buenos Aires',
  },
]

const INTERVALO = 5200

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
      <div className="portada__marco" aria-hidden="true">
        {FOTOS.map((f, i) => (
          <img
            key={f.src}
            className="portada__foto"
            src={f.src}
            alt=""
            data-activa={i === activa}
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="portada__velo" />
      </div>

      <div className="portada__cuerpo contenedor">
        <p className="portada__eyebrow">Negocio × Tecnología × IA</p>
        <h1 className="portada__nombre">
          <span>Matías</span>
          <span>Venutolo</span>
        </h1>
        <p className="portada__rol">
          <span>
            <b>{SITE.cargo}</b>
          </span>
          <span>{SITE.organizacion}</span>
          <span>Buenos Aires</span>
        </p>
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

      {/* el texto alternativo de las fotos vive acá para lectores de pantalla */}
      <p className="sr-only">
        {FOTOS.map((f) => f.alt).join('. ')}
      </p>
    </section>
  )
}
