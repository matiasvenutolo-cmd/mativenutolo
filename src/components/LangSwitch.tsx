'use client'

import { usePathname } from 'next/navigation'
import type { Lang } from '@/lib/i18n'

/** Cambia de idioma preservando la página: /casos/bit ↔ /en/casos/bit. */
export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname()

  const destino =
    lang === 'es'
      ? '/en' + (pathname === '/' ? '' : pathname)
      : pathname.replace(/^\/en/, '') || '/'

  return (
    <a className="nav__idioma" href={destino} aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}>
      {lang === 'es' ? 'EN' : 'ES'}
    </a>
  )
}
