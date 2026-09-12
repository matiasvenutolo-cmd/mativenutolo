'use client'

import { useEffect } from 'react'

/** Intensifica el fondo del nav flotante después de un scroll leve. */
export function NavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.nav')
    if (!nav) return

    const onScroll = () => {
      nav.setAttribute('data-scrolled', String(window.scrollY > 24))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
