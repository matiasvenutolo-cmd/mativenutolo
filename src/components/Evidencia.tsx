import { FUENTES, type FuenteId } from '@/content/fuentes'

/**
 * Marca de evidencia. Va al final de la afirmación que sostiene, en la misma
 * línea de texto. No es una nota al pie: es parte de la frase.
 */
export function Evidencia({
  id,
  claim,
}: {
  id: FuenteId
  /** Afirmación que la fuente sostiene. Cuando existe, la marca la muestra
   *  primero y la fuente queda como respaldo. */
  claim?: string
}) {
  const f = FUENTES[id]
  const detalle =
    f.estado === 'institucional'
      ? `${f.organizacion} · ${f.titulo} · reconocimiento o caso atribuido a la institución`
      : f.estado === 'autodeclarado'
        ? `${f.organizacion} · ${f.titulo} · publicación propia`
        : `${f.organizacion} · ${f.titulo}`

  return (
    <a
      className="evidencia"
      href={f.url}
      target="_blank"
      rel="noopener noreferrer"
      title={detalle}
    >
      {claim ? (
        <span>
          <b className="evidencia__claim">{claim}</b> · {f.etiqueta}
        </span>
      ) : (
        <span>
          {f.etiqueta} · {f.fecha}
        </span>
      )}
      <span className="evidencia__flecha" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only"> (abre en una pestaña nueva)</span>
    </a>
  )
}

export function Evidencias({
  ids,
  className,
}: {
  ids: readonly FuenteId[]
  className?: string
}) {
  if (!ids.length) return null
  return (
    <ul className={className ? `evidencias ${className}` : 'evidencias'}>
      {ids.map((id) => (
        <li key={id}>
          <Evidencia id={id} />
        </li>
      ))}
    </ul>
  )
}
