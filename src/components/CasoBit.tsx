'use client'

import { useState } from 'react'
import { BIT_FASES } from '@/content/home'
import { Evidencias } from '@/components/Evidencia'

/** BIT recorrido por fases: bot, canal, producto, plataforma, IA. */
export function CasoBit() {
  const [activa, setActiva] = useState(BIT_FASES.length - 1)
  const fase = BIT_FASES[activa]

  return (
    <section className="bit" id="bit">
      <div className="contenedor">
        <div className="bit__cabeza">
          <h2 className="bit__nombre">BIT</h2>
          <p className="bit__que">
            El canal conversacional del Banco Ciudad · Product Owner desde 2022
          </p>
        </div>

        <div className="bit__fases" role="tablist" aria-label="Fases de BIT">
          {BIT_FASES.map((f, i) => (
            <button
              key={f.clave}
              type="button"
              role="tab"
              id={`bit-tab-${f.clave}`}
              aria-selected={i === activa}
              aria-controls="bit-panel"
              tabIndex={i === activa ? 0 : -1}
              className="bit__fase"
              onClick={() => setActiva(i)}
              onKeyDown={(ev) => {
                if (ev.key === 'ArrowRight') {
                  setActiva((n) => (n + 1) % BIT_FASES.length)
                }
                if (ev.key === 'ArrowLeft') {
                  setActiva((n) => (n - 1 + BIT_FASES.length) % BIT_FASES.length)
                }
              }}
            >
              <b>{f.fase}</b>
              <span>{f.anio}</span>
            </button>
          ))}
        </div>

        <div
          className="bit__panel"
          id="bit-panel"
          role="tabpanel"
          aria-labelledby={`bit-tab-${fase.clave}`}
        >
          <div>
            <h3 className="bit__titulo">{fase.titulo}</h3>
            <p className="bit__linea">{fase.linea}</p>
            <Evidencias ids={fase.fuentes} />
          </div>

          {fase.cifras ? (
            <div className="bit__cifras">
              {fase.cifras.map((c) => (
                <div key={c.rotulo} className="bit__cifra">
                  <b>{c.valor}</b>
                  <span>{c.rotulo}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
