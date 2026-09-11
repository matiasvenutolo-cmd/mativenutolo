'use client'

import { useEffect, useRef, useState } from 'react'
import { NAV, SITE } from '@/lib/site'

/**
 * La línea, contraída. Es la misma pieza que la trayectoria: avanza con la
 * lectura y toma color a medida que avanza. Sin JavaScript queda en cero,
 * que es un estado válido y no rompe nada.
 */
export function Encabezado() {
  const [avance, setAvance] = useState(0)
  const [activo, setActivo] = useState(false)
  const cuadro = useRef<number | null>(null)

  useEffect(() => {
    const medir = () => {
      cuadro.current = null
      const alto = document.documentElement.scrollHeight - window.innerHeight
      const y = window.scrollY
      setAvance(alto > 0 ? Math.min(1, Math.max(0, y / alto)) : 0)
      setActivo(y > 80)
    }
    const alHacerScroll = () => {
      if (cuadro.current === null) {
        cuadro.current = window.requestAnimationFrame(medir)
      }
    }
    medir()
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    window.addEventListener('resize', alHacerScroll)
    return () => {
      window.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
      if (cuadro.current !== null) window.cancelAnimationFrame(cuadro.current)
    }
  }, [])

  return (
    <header className="encabezado" data-activo={activo}>
      <div className="contenedor">
        <div className="encabezado__fila">
          <a className="encabezado__marca" href="#inicio">
            {SITE.nombre}
          </a>
          <nav className="encabezado__nav" aria-label="Secciones">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.etiqueta}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="progreso" aria-hidden="true">
        <div
          className="progreso__avance"
          style={{ ['--avance' as string]: `${(avance * 100).toFixed(2)}%` }}
        />
      </div>
    </header>
  )
}
