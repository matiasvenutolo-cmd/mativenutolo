'use client'

import { useState } from 'react'
import { BIT_FASES } from '@/content/home'
import { BIT_FASES_EN } from '@/content/home.en'
import { Evidencias } from '@/components/Evidencia'
import { WhatsAppMock } from '@/components/WhatsAppMock'
import { t, type Lang } from '@/lib/i18n'

/** bit recorrido por fases: canal, producto, plataforma, IA. */
export function CasoBit({ lang = 'es' }: { lang?: Lang }) {
  const fases = lang === 'es' ? BIT_FASES : BIT_FASES_EN
  const [activa, setActiva] = useState(fases.length - 1)
  const fase = fases[activa]
  const d = t(lang)

  return (
    <section className="bit" id="bit">
      <div className="contenedor">
        <div className="bit__cabeza reveal">
          <h2 className="bit__nombre">bit</h2>
          <p className="bit__que">
            {d.bit.que}
            <br />
            {d.bit.desde}
          </p>
        </div>

        <div
          className="bit__fases"
          role="tablist"
          aria-label={lang === 'es' ? 'Fases de bit' : 'bit phases'}
        >
          {fases.map((f, i) => (
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
                  setActiva((n) => (n + 1) % fases.length)
                }
                if (ev.key === 'ArrowLeft') {
                  setActiva((n) => (n - 1 + fases.length) % fases.length)
                }
              }}
            >
              <b>{f.fase}</b>
              <span>{f.anio}</span>
            </button>
          ))}
        </div>

        <div
          className="bit__panel reveal"
          id="bit-panel"
          role="tabpanel"
          aria-labelledby={`bit-tab-${fase.clave}`}
        >
          <div className="bit__col">
            <h3 className="bit__titulo">{fase.titulo}</h3>
            <p className="bit__linea">{fase.linea}</p>
            <Evidencias ids={fase.fuentes} lang={lang} />

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

          <WhatsAppMock lang={lang} />
        </div>
      </div>
    </section>
  )
}
