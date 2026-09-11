'use client'

import { useEffect, useState } from 'react'
import { ETAPAS } from '@/content/trayectoria'
import { Evidencias } from '@/components/Evidencia'

const TONOS = [
  'var(--n1)',
  'var(--n2)',
  'var(--n3)',
  'var(--n4)',
  'var(--n5)',
  'var(--n6)',
  'var(--n7)',
]

const ANCHO = '(min-width: 900px)'

/**
 * La línea.
 *
 * Mobile: columna vertical con todas las etapas abiertas. No hace falta
 * interactuar con nada para leer la trayectoria completa, así que los años
 * no son controles: son encabezados.
 *
 * Desktop: fila horizontal de siete nodos y una sola etapa desplegada debajo,
 * a lo ancho. Arranca en la última, que es el presente. Ahí sí cada año es un
 * control, y recién entonces se anuncia como tal.
 *
 * El mismo DOM sirve para las dos. Nada depende de hover.
 */
export function Linea() {
  const [abierta, setAbierta] = useState(ETAPAS.length - 1)
  const [esAncho, setEsAncho] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(ANCHO)
    const sincronizar = () => setEsAncho(mq.matches)
    sincronizar()
    mq.addEventListener('change', sincronizar)
    return () => mq.removeEventListener('change', sincronizar)
  }, [])

  return (
    <div className="linea">
      {ETAPAS.map((etapa, i) => {
        const estaAbierta = i === abierta
        const tono = TONOS[i] ?? TONOS[TONOS.length - 1]
        const idDetalle = `etapa-${etapa.anio}`
        const rotulo = (
          <>
            <span className="etapa__anio">{etapa.anio}</span>
            <span className="etapa__etiqueta">{etapa.etiqueta}</span>
          </>
        )
        return (
          <div
            key={etapa.anio}
            className="etapa"
            data-abierta={estaAbierta}
            style={{ ['--tono' as string]: tono }}
          >
            <span className="etapa__punto" aria-hidden="true" />
            {esAncho ? (
              <button
                type="button"
                className="etapa__boton"
                aria-expanded={estaAbierta}
                aria-controls={idDetalle}
                onClick={() => setAbierta(i)}
              >
                {rotulo}
              </button>
            ) : (
              <p className="etapa__boton">{rotulo}</p>
            )}
            <div className="etapa__detalle" id={idDetalle}>
              <h3 className="etapa__titulo">{etapa.titulo}</h3>
              <div>
                <p className="etapa__texto">{etapa.texto}</p>
                {etapa.fuentes ? (
                  <Evidencias ids={etapa.fuentes} className="etapa__fuentes" />
                ) : null}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
