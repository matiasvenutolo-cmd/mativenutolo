'use client'

import { useState } from 'react'
import { CAPACIDADES } from '@/content/home'
import { Evidencias } from '@/components/Evidencia'

/**
 * Acordeón horizontal: cuatro paneles con foto de fondo, del mismo ancho
 * en reposo. El que tiene el foco o el mouse encima se expande y muestra
 * la prueba; los demás se comprimen a una franja con el título.
 *
 * El panel es un <article>, no un <a>: adentro hay dos enlaces propios
 * (el título, que lleva al caso, y la fuente dentro de la evidencia), y
 * un enlace no puede anidar otro sin romper el HTML.
 *
 * En pantallas angostas no hay hover, así que la media query de mobile
 * ignora el estado y muestra los cuatro paneles abiertos, apilados.
 */
export function Capacidades() {
  const [activo, setActivo] = useState(0)

  return (
    <section className="capacidades" id="capacidades">
      <div className="contenedor capacidades__cabeza">
        <p className="rotulo">Qué construyo</p>
        <h2 className="d2">Cuatro formas de conectar negocio con IA.</h2>
      </div>

      <div className="capacidades__fila" onMouseLeave={() => setActivo(0)}>
        {CAPACIDADES.map((c, i) => (
          <article
            key={c.clave}
            className="cap-panel"
            data-activo={i === activo}
            onMouseEnter={() => setActivo(i)}
            onFocus={() => setActivo(i)}
          >
            <img
              className="cap-panel__foto"
              src={c.foto.src}
              alt={c.foto.alt}
              loading="lazy"
              decoding="async"
            />
            <div className="cap-panel__velo" aria-hidden="true" />
            <span className="cap-panel__paso" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="cap-panel__cuerpo">
              <h3 className="cap-panel__t">
                <a href={c.href ?? '#bit'}>{c.titulo}</a>
              </h3>
              <div className="cap-panel__detalle">
                <p className="cap-panel__resumen">{c.resumen}</p>
                <p className="cap-panel__prueba">{c.prueba}</p>
                <Evidencias ids={c.fuentes.slice(0, 1)} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
