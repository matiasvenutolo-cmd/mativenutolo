import { SITE } from '@/lib/site'

const ENLACES = [
  { href: '/#trayectoria', etiqueta: 'Trayectoria' },
  { href: '/#bit', etiqueta: 'Casos' },
  { href: '/#charlas', etiqueta: 'Charlas' },
  { href: '/#contacto', etiqueta: 'Contacto' },
]

/**
 * Cuatro entradas y el nombre. La mezcla por diferencia la vuelve blanca
 * sobre las bandas oscuras y negra sobre las claras, sin duplicar estilos
 * ni medir el fondo con JavaScript.
 */
export function Nav() {
  return (
    <div className="nav">
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
