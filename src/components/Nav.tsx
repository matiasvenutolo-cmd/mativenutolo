import { SITE } from '@/lib/site'
import { NavScroll } from '@/components/NavScroll'
import { LangSwitch } from '@/components/LangSwitch'
import { t, type Lang } from '@/lib/i18n'

function enlaces(lang: Lang) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'
  return [
    { href: `${base}/#charlas`, etiqueta: d.nav.charlas },
    { href: `${base}/#capacidades`, etiqueta: d.nav.queConstruyo },
    { href: `${base}/#bit`, etiqueta: d.nav.casos },
    { href: `${base}/#ideas`, etiqueta: d.nav.comoPienso },
    { href: `${base}/#contacto`, etiqueta: d.nav.contacto },
  ]
}

/**
 * Píldora flotante con blur, siempre visible. Tiene su propio fondo
 * oscuro translúcido, así que se lee igual arriba del hero, sobre una
 * foto o sobre una banda clara más abajo: no depende de mezclar colores
 * con lo que hay detrás.
 */
export function Nav({ lang = 'es' }: { lang?: Lang }) {
  return (
    <div className="nav">
      <div className="contenedor nav__fila">
        <a className="nav__marca" href={lang === 'es' ? '/' : '/en'}>
          {SITE.nombre}
        </a>
        <nav className="nav__enlaces" aria-label="Secciones">
          {enlaces(lang).map((e) => (
            <a key={e.href} href={e.href}>
              {e.etiqueta}
            </a>
          ))}
        </nav>
        <LangSwitch lang={lang} />
      </div>
      <NavScroll />
    </div>
  )
}
