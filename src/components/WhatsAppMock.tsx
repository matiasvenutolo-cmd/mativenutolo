'use client'

import { useEffect, useState } from 'react'

type Mensaje = { de: 'cliente' | 'bit'; texto: string }

/** Ejemplo ilustrativo, no una captura real de una conversación. Se arma
 *  con capacidades ya citadas con fuente en la sección de bit (activación
 *  de tarjetas, turnos, saldo). */
const MENSAJES: Mensaje[] = [
  { de: 'cliente', texto: 'Necesito activar mi tarjeta nueva' },
  { de: 'bit', texto: 'Dale, pasame los últimos 4 números' },
  { de: 'cliente', texto: '8842' },
  { de: 'bit', texto: 'Lista ✓ Ya la podés usar' },
]

const PASO_MS = 1400

/**
 * Una conversación de WhatsApp que se arma sola, en loop. No es una
 * captura de pantalla real (bit no tiene capturas autorizadas todavía):
 * por eso se aclara como ejemplo, con la misma tipografía del sitio en
 * vez de imitar la interfaz real de WhatsApp.
 */
export function WhatsAppMock() {
  const [visibles, setVisibles] = useState(0)

  useEffect(() => {
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (quieto.matches) {
      setVisibles(MENSAJES.length)
      return
    }

    let i = 0
    const avanzar = () => {
      i = i >= MENSAJES.length ? 1 : i + 1
      setVisibles(i)
    }
    avanzar()
    const t = window.setInterval(avanzar, PASO_MS)
    return () => window.clearInterval(t)
  }, [])

  return (
    <div className="whatsapp-mock">
      <p className="whatsapp-mock__rotulo">Así conversa bit · ejemplo</p>
      <div className="whatsapp-mock__chat">
        {MENSAJES.map((m, i) => (
          <p
            key={i}
            className="whatsapp-mock__burbuja"
            data-de={m.de}
            data-visible={i < visibles}
          >
            {m.texto}
          </p>
        ))}
      </div>
    </div>
  )
}
