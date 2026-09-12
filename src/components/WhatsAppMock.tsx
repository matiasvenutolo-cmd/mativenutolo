'use client'

import { useEffect, useRef, useState } from 'react'

type Mensaje = {
  de: 'cliente' | 'bit'
  texto: string
  hora: string
  tipo?: 'aviso'
}

type Check = 'enviado' | 'entregado' | 'leido'

/** Ejemplo ilustrativo modelado sobre capturas reales del flujo de saldos
 *  de bit (el aviso de IA generativa, el menú numerado de cuentas y el
 *  cierre con "SALIR" son tal cual el bot real). Los números de cuenta y
 *  montos son genéricos, no datos de una persona real. */
const MENSAJES: Mensaje[] = [
  { de: 'cliente', texto: 'Quiero ver mis saldos', hora: '10:55' },
  {
    de: 'bit',
    texto:
      'Importante: a partir de este momento vas a interactuar con una herramienta de Inteligencia Artificial Generativa. Te brindará información sobre tu/s saldo/s de tu/s cuenta/s del Banco Ciudad.\nLas respuestas se generan automáticamente y pueden contener imprecisiones.',
    hora: '10:55',
    tipo: 'aviso',
  },
  {
    de: 'bit',
    texto:
      'Veo que tenés varias cuentas disponibles. Elegí una para consultar:\n\n1. Caja de Ahorro en USD N° ...0452\n2. Caja de Ahorro en Pesos N° ...5803\n\n¿Cuál te gustaría consultar?',
    hora: '10:55',
  },
  { de: 'cliente', texto: 'La que termina en 5803', hora: '10:56' },
  {
    de: 'bit',
    texto: 'Te paso el saldo de tu Caja de Ahorro en Pesos N° ...5803 😉\n\nSaldo disponible: $284.360,12',
    hora: '10:56',
  },
  { de: 'cliente', texto: 'Y algún ingreso tuve?', hora: '10:57' },
  {
    de: 'bit',
    texto:
      'No encontré ingresos recientes en la información disponible. Si querés, te muestro los últimos movimientos o preguntame otra cosa 😊',
    hora: '10:57',
  },
]

const VENTANA = 5
const ESCRIBIENDO_MS = 1000
const PAUSA_MS = 1300
const PAUSA_AVISO_MS = 2200
const PAUSA_FINAL_MS = 2800
const PAUSA_INICIAL_MS = 500

function Texto({ texto, destacarPrefijo }: { texto: string; destacarPrefijo?: string }) {
  const lineas = texto.split('\n')

  return (
    <>
      {lineas.map((linea, i, arr) => {
        const esPrimera = i === 0 && destacarPrefijo && linea.startsWith(destacarPrefijo)
        return (
          <span key={i}>
            {esPrimera ? (
              <>
                <strong>{destacarPrefijo}</strong>
                {linea.slice(destacarPrefijo.length)}
              </>
            ) : (
              linea
            )}
            {i < arr.length - 1 && <br />}
          </span>
        )
      })}
    </>
  )
}

/**
 * Simula el flujo real de consulta de saldos de bit dentro de un marco de
 * iPhone con la interfaz de WhatsApp: aviso de IA generativa, menú
 * numerado, indicador de "escribiendo…" y doble check que pasa de gris a
 * azul cuando bit "lee" el mensaje. No es una grabación real (todavía no
 * hay una autorizada): por eso queda rotulado como ejemplo debajo del
 * teléfono, aunque el guion sigue el de una conversación real.
 */
export function WhatsAppMock() {
  const [visibles, setVisibles] = useState(0)
  const [escribiendo, setEscribiendo] = useState(false)
  const [checks, setChecks] = useState<Record<number, Check>>({})
  const montado = useRef(true)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = chatRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [visibles, escribiendo])

  useEffect(() => {
    montado.current = true
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (quieto.matches) {
      setVisibles(MENSAJES.length)
      const finales: Record<number, Check> = {}
      MENSAJES.forEach((m, i) => {
        if (m.de === 'cliente') finales[i] = 'leido'
      })
      setChecks(finales)
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
        setChecks({})
        await espera(PAUSA_INICIAL_MS)

        for (let i = 0; i < MENSAJES.length; i++) {
          if (!montado.current) return
          const m = MENSAJES[i]

          if (m.de === 'bit') {
            setEscribiendo(true)
            await espera(ESCRIBIENDO_MS)
            if (!montado.current) return
            setEscribiendo(false)
          }

          setVisibles(i + 1)

          if (m.de === 'cliente') {
            setChecks((prev) => ({ ...prev, [i]: 'enviado' }))
            await espera(280)
            if (!montado.current) return
            setChecks((prev) => ({ ...prev, [i]: 'entregado' }))
            await espera(240)
            if (!montado.current) return
            setChecks((prev) => ({ ...prev, [i]: 'leido' }))
          }

          await espera(m.tipo === 'aviso' ? PAUSA_AVISO_MS : PAUSA_MS)
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

  const desde = Math.max(0, visibles - VENTANA)

  return (
    <div className="whatsapp-mock">
      <div className="whatsapp-mock__telefono">
        <div className="whatsapp-mock__pantalla">
          <div className="whatsapp-mock__isla" aria-hidden="true" />

          <div className="whatsapp-mock__barra" aria-hidden="true">
            <span>10:56</span>
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
              <span className="whatsapp-mock__bateria">
                75
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
                  <rect x="2.5" y="2.5" width="11" height="7" rx="1.2" fill="currentColor" />
                  <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor" />
                </svg>
              </span>
            </span>
          </div>

          <div className="whatsapp-mock__header">
            <svg
              className="whatsapp-mock__volver"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 5 8 12l7 7" />
            </svg>
            <span className="whatsapp-mock__avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <rect
                  x="5"
                  y="8"
                  width="14"
                  height="11"
                  rx="4"
                  fill="#fff"
                  fillOpacity="0.92"
                />
                <circle cx="9.5" cy="13.2" r="1.3" fill="#1b6ef3" />
                <circle cx="14.5" cy="13.2" r="1.3" fill="#1b6ef3" />
                <path d="M12 8V5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="4" r="1.2" fill="#fff" />
              </svg>
            </span>
            <span className="whatsapp-mock__contacto">
              <b>
                Banco Ciudad
                <svg
                  className="whatsapp-mock__verificado"
                  viewBox="0 0 20 20"
                  width="12"
                  height="12"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="10" fill="#06d755" />
                  <path
                    d="M5.8 10.2 8.6 13l5.6-6"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </b>
              <i>{escribiendo ? 'escribiendo…' : 'en línea'}</i>
            </span>
          </div>

          <div className="whatsapp-mock__chat" ref={chatRef}>
            {MENSAJES.slice(desde, visibles).map((m, idx) => {
              const i = desde + idx
              const check = checks[i]
              return (
                <p
                  key={i}
                  className="whatsapp-mock__burbuja"
                  data-de={m.de}
                  data-tipo={m.tipo}
                >
                  {m.tipo === 'aviso' && (
                    <span className="whatsapp-mock__aviso-icono" aria-hidden="true">
                      ⚠️
                    </span>
                  )}
                  <Texto
                    texto={m.texto}
                    destacarPrefijo={m.tipo === 'aviso' ? 'Importante:' : undefined}
                  />
                  <span className="whatsapp-mock__meta">
                    {m.hora}
                    {m.de === 'cliente' && check && (
                      <span
                        className="whatsapp-mock__check"
                        data-estado={check}
                        aria-hidden="true"
                      >
                        {check === 'enviado' ? '✓' : '✓✓'}
                      </span>
                    )}
                  </span>
                </p>
              )
            })}

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
