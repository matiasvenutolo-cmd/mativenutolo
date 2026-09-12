'use client'

import { useEffect, useRef, useState } from 'react'
import { ETAPAS } from '@/content/trayectoria'
import { ETAPAS_EN } from '@/content/trayectoria.en'
import { Evidencias } from '@/components/Evidencia'
import { t, type Lang } from '@/lib/i18n'

/**
 * Recorrido horizontal. Se arrastra con el dedo, se desplaza con la rueda
 * lateral y se recorre con el teclado, porque cada hito es un elemento
 * enfocable dentro de una región desplazable. Sin control de scroll robado.
 *
 * La tarjeta más cerca del centro de la pista se agranda un poco: así el
 * recorrido se siente, no solo se lee. El resto queda en reposo.
 */
export function Trayecto({ lang = 'es' }: { lang?: Lang }) {
  const etapas = lang === 'es' ? ETAPAS : ETAPAS_EN
  const d = t(lang)
  const pista = useRef<HTMLDivElement>(null)
  const [centro, setCentro] = useState(etapas.length - 1)
  const anios = etapas.map((e) => e.anio)

  useEffect(() => {
    const el = pista.current
    if (!el) return
    let cuadro: number | null = null

    const medir = () => {
      cuadro = null
      const medio = el.scrollLeft + el.clientWidth / 2
      let mejor = 0
      let distanciaMin = Infinity
      el.querySelectorAll<HTMLElement>('.hito-t').forEach((tarjeta, i) => {
        const centroTarjeta = tarjeta.offsetLeft + tarjeta.offsetWidth / 2
        const distancia = Math.abs(centroTarjeta - medio)
        if (distancia < distanciaMin) {
          distanciaMin = distancia
          mejor = i
        }
      })
      setCentro(mejor)
    }

    const alHacerScroll = () => {
      if (cuadro === null) cuadro = window.requestAnimationFrame(medir)
    }

    medir()
    el.addEventListener('scroll', alHacerScroll, { passive: true })
    window.addEventListener('resize', alHacerScroll)
    return () => {
      el.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
      if (cuadro !== null) window.cancelAnimationFrame(cuadro)
    }
  }, [])

  return (
    <section className="trayecto" id="trayectoria">
      <div className="contenedor trayecto__cabeza reveal">
        <p className="trayecto__anios">
          {anios.map((a, i) => (
            <span key={a} data-activo={i === centro}>
              {a}
              {'  ·  '}
            </span>
          ))}
          <b data-activo={centro === etapas.length - 1}>{d.trayecto.hoy}</b>
        </p>
        <p className="trayecto__ayuda">{d.trayecto.desplaza}</p>
      </div>

      <div
        className="trayecto__pista"
        ref={pista}
        tabIndex={0}
        role="group"
        aria-label={
          lang === 'es'
            ? 'Trayectoria profesional, de 2013 a hoy'
            : 'Professional trajectory, from 2013 to today'
        }
      >
        {etapas.map((e, i) => (
          <article
            key={e.anio}
            className="hito-t"
            data-presente={i === etapas.length - 1}
            data-centro={i === centro}
          >
            <p className="hito-t__anio">{e.anio}</p>
            <p className="hito-t__etiqueta">{e.etiqueta}</p>
            <p className="hito-t__sintesis">{e.sintesis}</p>
            {e.fuentes ? (
              <Evidencias ids={e.fuentes} className="hito-t__fuentes" lang={lang} />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
