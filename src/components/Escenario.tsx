'use client'

import { useEffect, useRef, useState } from 'react'
import { APARICIONES } from '@/content/home'
import { Evidencia } from '@/components/Evidencia'

/* El escenario solo acepta fotografías reales de evento. Las portadas de
   video, que traen texto quemado, viven abajo en su propia rejilla. */
const ES_FOTO_REAL = (src: string) => !src.includes('/yt-')
const CON_FOTO = APARICIONES.filter((a) => a.foto && ES_FOTO_REAL(a.foto.src))
const GRABACIONES = APARICIONES.filter((a) => a.video)

/**
 * Escenario fijo: la fotografía ocupa la pantalla y cambia al hacer scroll.
 * Cada aparición tiene una marca invisible del alto de la pantalla; cuando
 * una marca cruza el centro del viewport, su imagen pasa al frente.
 *
 * Sin JavaScript queda la primera imagen y las fichas se leen igual, porque
 * el texto de todas está en el HTML.
 */
export function Escenario() {
  const [activa, setActiva] = useState(0)
  const marcas = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let cuadro: number | null = null

    const medir = () => {
      cuadro = null
      const medio = window.innerHeight / 2
      let i = 0
      marcas.current.forEach((m, n) => {
        if (m && m.getBoundingClientRect().top <= medio) i = n
      })
      setActiva(i)
    }

    const alHacerScroll = () => {
      if (cuadro === null) cuadro = window.requestAnimationFrame(medir)
    }

    medir()
    window.addEventListener('scroll', alHacerScroll, { passive: true })
    window.addEventListener('resize', alHacerScroll)
    return () => {
      window.removeEventListener('scroll', alHacerScroll)
      window.removeEventListener('resize', alHacerScroll)
      if (cuadro !== null) window.cancelAnimationFrame(cuadro)
    }
  }, [])

  const a = CON_FOTO[activa]

  return (
    <section className="escenario" id="charlas">
      <div className="escenario__fijo">
        {CON_FOTO.map((ap, i) => (
          <img
            key={ap.titulo}
            className="escenario__foto"
            src={ap.foto!.src}
            alt=""
            data-activa={i === activa}
            width={ap.foto!.ancho}
            height={ap.foto!.alto}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
        <div className="escenario__velo" />

        <div className="escenario__texto">
          <div className="contenedor">
            <p className="escenario__rotulo">Me invitan a explicarlo</p>
            <div className="escenario__ficha">
              <h2 className="escenario__lugar">{a.lugar}</h2>
              <p className="escenario__meta">
                {a.formato} · {a.fecha}
              </p>
              <p className="escenario__que">{a.titulo}</p>
              <div className="escenario__acciones">
                {a.video ? (
                  <a
                    className="evidencia"
                    href={a.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Ver la charla</span>
                    <span className="evidencia__flecha" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : null}
                <Evidencia id={a.fuentes[0]} />
              </div>
            </div>
          </div>
        </div>

        <p className="escenario__cuenta" aria-hidden="true">
          <b>{String(activa + 1).padStart(2, '0')}</b> / {String(CON_FOTO.length).padStart(2, '0')}
        </p>
      </div>

      <div className="escenario__marcas" aria-hidden="true">
        {CON_FOTO.map((ap, i) => (
          <div
            key={ap.titulo}
            className="escenario__marca"
            data-indice={i}
            ref={(el) => {
              marcas.current[i] = el
            }}
          />
        ))}
      </div>

      {/* la lista completa, para lectores de pantalla y para quien no tenga JS */}
      <ul className="sr-only">
        {CON_FOTO.map((ap) => (
          <li key={ap.titulo}>
            {ap.lugar}. {ap.formato}, {ap.fecha}. {ap.titulo}. {ap.texto}
          </li>
        ))}
      </ul>

      <div className="grabaciones">
        <div className="contenedor">
          <p className="grabaciones__rotulo">Charlas grabadas</p>
          <div className="grabaciones__grilla">
            {GRABACIONES.map((g) => (
              <a
                key={g.video}
                className="grabacion"
                href={g.video}
                target="_blank"
                rel="noopener noreferrer"
              >
                {g.foto ? (
                  <img
                    src={g.foto.src}
                    alt=""
                    width={g.foto.ancho}
                    height={g.foto.alto}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <p className="grabacion__meta">
                  {g.lugar} · {g.fecha}
                </p>
                <p className="grabacion__t">{g.titulo}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
