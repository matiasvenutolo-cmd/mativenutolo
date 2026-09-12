import { SITE } from '@/lib/site'

const ENLACES = [
  { href: '/#trayectoria', etiqueta: 'Trayectoria' },
  { href: '/#bit', etiqueta: 'Casos' },
  { href: '/#charlas', etiqueta: 'Charlas' },
  { href: '/#contacto', etiqueta: 'Contacto' },
]

/**
 * Cuatro entradas y el nombre, siempre visibles. Tiene su propio fondo
 * (una franja oscura translúcida), así que se lee igual arriba del hero,
 * sobre una foto o sobre una banda clara más abajo: no depende de mezclar
 * colores con lo que hay detrás.
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
