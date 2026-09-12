'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/** Desplaza la foto del hero un poco más lento que el scroll, para dar
 *  profundidad. La animación de entrada y el drift continuo siguen
 *  viviendo en la imagen misma (CSS); esto solo mueve la capa contenedora. */
export function HeroParallax({ children }: { children: ReactNode }) {
  const capaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const capa = capaRef.current
    if (!capa) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false

    const actualizar = () => {
      ticking = false
      const rect = capa.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      capa.style.transform = `translate3d(0, ${rect.top * -0.12}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(actualizar)
      }
    }

    actualizar()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="portada__parallax" ref={capaRef}>
      {children}
    </div>
  )
}
