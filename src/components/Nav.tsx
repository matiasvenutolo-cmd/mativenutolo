import { SITE } from '@/lib/site'
import { NavScroll } from '@/components/NavScroll'

const ENLACES = [
  { href: '/#charlas', etiqueta: 'Charlas' },
  { href: '/#capacidades', etiqueta: 'Qué construyo' },
  { href: '/#bit', etiqueta: 'Casos' },
  { href: '/#ideas', etiqueta: 'Cómo pienso' },
  { href: '/#contacto', etiqueta: 'Contacto' },
]

/**
 * Píldora flotante con blur, siempre visible. Tiene su propio fondo
 * oscuro translúcido, así que se lee igual arriba del hero, sobre una
 * foto o sobre una banda clara más abajo: no depende de mezclar colores
 * con lo que hay detrás.
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
      <NavScroll />
    </div>
  )
}
