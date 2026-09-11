'use client'

import { useEffect, useRef, useState } from 'react'
import { NAV, SITE } from '@/lib/site'

/**
 * La línea, contraída.
 *
 * En pantallas anchas vive como un riel fijo en el borde izquierdo que se
 * llena con la lectura y va tomando color: es la misma pieza que la
 * trayectoria, recorriendo el sitio entero. En pantallas chicas, donde no
 * hay margen que ceder, se convierte en una barra bajo el encabezado.
 *
 * Sin JavaScript queda en cero, que es un estado válido y no rompe nada.
 */
export function Encabezado() {
  const [avance, setAvance] = useState(0)
  const cuadro = useRef<number | null>(null)

  useEffect(() => {
    const medir = () => {
      cuadro.current = null
      const alto = document.documentElement.scrollHeight - window.innerHeight
      setAvance(alto > 0 ? Math.min(1, Math.max(0, window.scrollY / alto)) : 0)
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

  const pct = { ['--avance' as string]: `${(avance * 100).toFixed(2)}%` }

  return (
    <>
      <div className="riel" aria-hidden="true">
        <div className="riel__avance" style={pct} />
      </div>
      <header className="encabezado">
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
          <div className="progreso__avance" style={pct} />
        </div>
      </header>
    </>
  )
}
