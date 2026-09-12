'use client'

import { useEffect } from 'react'

/**
 * Motor único de scroll-reveal para todo el sitio: cualquier elemento con
 * className="reveal" aparece con un fade + desplazamiento la primera vez
 * que entra en pantalla. Un solo IntersectionObserver para toda la página
 * en vez de uno por sección.
 */
export function ScrollReveal() {
  useEffect(() => {
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elementos = document.querySelectorAll('.reveal')

    if (quieto.matches) {
      elementos.forEach((el) => el.classList.add('reveal--visible'))
      return
    }

    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('reveal--visible')
            io.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elementos.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
