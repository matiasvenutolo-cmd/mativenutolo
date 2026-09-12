'use client'

import { useEffect, useRef, useState } from 'react'

type Mensaje = { de: 'cliente' | 'bit'; texto: string; hora: string }

/** Ejemplo ilustrativo, no una captura real de una conversación. Se arma
 *  con capacidades ya citadas con fuente en la sección de bit (activación
 *  de tarjetas, turnos, saldo). */
const MENSAJES: Mensaje[] = [
  { de: 'cliente', texto: 'Necesito activar mi tarjeta nueva', hora: '10:41' },
  { de: 'bit', texto: 'Dale, pasame los últimos 4 números', hora: '10:41' },
  { de: 'cliente', texto: '8842', hora: '10:42' },
  { de: 'bit', texto: 'Lista ✓ Ya la podés usar', hora: '10:42' },
]

const ESCRIBIENDO_MS = 1100
const PAUSA_MS = 1500
const PAUSA_FINAL_MS = 2400
const PAUSA_INICIAL_MS = 500

/**
 * Simula una conversación real de WhatsApp dentro de un marco de iPhone:
 * status bar, header con el contacto, indicador de "escribiendo…" antes de
 * cada respuesta de bit y check de leído. No es una captura de pantalla
 * real (todavía no hay una autorizada): por eso queda rotulado como
 * ejemplo debajo del teléfono.
 */
export function WhatsAppMock() {
  const [visibles, setVisibles] = useState(0)
  const [escribiendo, setEscribiendo] = useState(false)
  const montado = useRef(true)

  useEffect(() => {
    montado.current = true
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (quieto.matches) {
      setVisibles(MENSAJES.length)
      return () => {
        montado.current = false
      }
    }

    const timeouts: number[] = []
    const espera = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = window.setTimeout(resolve, ms)
        timeouts.push(t)
      })

    async function correr() {
      while (montado.current) {
        setVisibles(0)
        setEscribiendo(false)
        await espera(PAUSA_INICIAL_MS)

        for (let i = 0; i < MENSAJES.length; i++) {
          if (!montado.current) return
          if (MENSAJES[i].de === 'bit') {
            setEscribiendo(true)
            await espera(ESCRIBIENDO_MS)
            if (!montado.current) return
            setEscribiendo(false)
          }
          setVisibles(i + 1)
          await espera(PAUSA_MS)
        }

        await espera(PAUSA_FINAL_MS)
      }
    }

    correr()
    return () => {
      montado.current = false
      timeouts.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return (
    <div className="whatsapp-mock">
      <div className="whatsapp-mock__telefono">
        <div className="whatsapp-mock__pantalla">
          <div className="whatsapp-mock__isla" aria-hidden="true" />

          <div className="whatsapp-mock__barra" aria-hidden="true">
            <span>9:41</span>
            <span className="whatsapp-mock__iconos">
              <svg viewBox="0 0 18 12" width="16" height="11" fill="currentColor">
                <rect x="0" y="7" width="3" height="5" rx="0.5" />
                <rect x="5" y="5" width="3" height="7" rx="0.5" />
                <rect x="10" y="3" width="3" height="9" rx="0.5" />
                <rect x="15" y="0" width="3" height="12" rx="0.5" />
              </svg>
              <svg viewBox="0 0 16 12" width="15" height="11" fill="none">
                <path
                  d="M1 4.5C4.5 1.2 11.5 1.2 15 4.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M4 7.3C6.3 5.2 9.7 5.2 12 7.3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="10.2" r="1.2" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 25 12" width="22" height="11" fill="none">
                <rect
                  x="0.75"
                  y="0.75"
                  width="20.5"
                  height="10.5"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect x="2.5" y="2.5" width="15" height="7" rx="1.2" fill="currentColor" />
                <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor" />
              </svg>
            </span>
          </div>

          <div className="whatsapp-mock__header">
            <span className="whatsapp-mock__avatar" aria-hidden="true">
              b
            </span>
            <span className="whatsapp-mock__contacto">
              <b>bit</b>
              <i>{escribiendo ? 'escribiendo…' : 'en línea'}</i>
            </span>
          </div>

          <div className="whatsapp-mock__chat">
            {MENSAJES.slice(0, visibles).map((m, i) => (
              <p key={i} className="whatsapp-mock__burbuja" data-de={m.de}>
                {m.texto}
                <span className="whatsapp-mock__meta">
                  {m.hora}
                  {m.de === 'cliente' && (
                    <span className="whatsapp-mock__check" aria-hidden="true">
                      ✓✓
                    </span>
                  )}
                </span>
              </p>
            ))}

            {escribiendo && (
              <p className="whatsapp-mock__burbuja whatsapp-mock__burbuja--typing" data-de="bit">
                <span />
                <span />
                <span />
              </p>
            )}
          </div>
        </div>
      </div>

      <p className="whatsapp-mock__rotulo">Así conversa bit · ejemplo ilustrativo</p>
    </div>
  )
}
