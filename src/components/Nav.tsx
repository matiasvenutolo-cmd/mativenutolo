'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/lib/site'

const ENLACES = [
  { href: '/#trayectoria', etiqueta: 'Trayectoria' },
  { href: '/#bit', etiqueta: 'Casos' },
  { href: '/#charlas', etiqueta: 'Charlas' },
  { href: '/#contacto', etiqueta: 'Contacto' },
]

/**
 * Cuatro entradas y el nombre. La mezcla por diferencia la vuelve blanca
 * sobre las bandas oscuras y negra sobre las claras.
 *
 * El hero ya tiene sus propios rótulos dibujados arriba de todo, así que
 * la nav se mantiene afuera mientras se lo está viendo y aparece apenas
 * se empieza a scrollear. Visible por defecto: si el JS no corre, queda
 * a la vista en lugar de desaparecer para siempre.
 */
export function Nav() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const medir = () => setVisible(window.scrollY > window.innerHeight * 0.62)
    medir()
    window.addEventListener('scroll', medir, { passive: true })
    window.addEventListener('resize', medir)
    return () => {
      window.removeEventListener('scroll', medir)
      window.removeEventListener('resize', medir)
    }
  }, [])

  return (
    <div className="nav" data-visible={visible}>
      <div className="contenedor nav__fila">
        <a className="nav__marca" href="/">
          {SITE.nombre}
        </a>
        <nav className="nav__enlaces" aria-label="Secciones">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href}>
              {e.etiqueta}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
