import { FUENTES, type FuenteId } from '@/content/fuentes'
import { t, type Lang } from '@/lib/i18n'

/**
 * Marca de evidencia. Va al final de la afirmación que sostiene, en la misma
 * línea de texto. No es una nota al pie: es parte de la frase.
 */
export function Evidencia({
  id,
  claim,
  lang = 'es',
}: {
  id: FuenteId
  /** Afirmación que la fuente sostiene. Cuando existe, la marca la muestra
   *  primero y la fuente queda como respaldo. */
  claim?: string
  lang?: Lang
}) {
  const f = FUENTES[id]
  const d = t(lang)
  const detalle =
    f.estado === 'institucional'
      ? `${f.organizacion} · ${f.titulo} · ${d.evidencia.institucional}`
      : f.estado === 'autodeclarado'
        ? `${f.organizacion} · ${f.titulo} · ${d.evidencia.autodeclarado}`
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
          {f.etiqueta} · {lang === 'es' ? f.fecha : f.fechaEn}
        </span>
      )}
      <span className="evidencia__flecha" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only"> {d.evidencia.abreNueva}</span>
    </a>
  )
}

export function Evidencias({
  ids,
  className,
  lang = 'es',
}: {
  ids: readonly FuenteId[]
  className?: string
  lang?: Lang
}) {
  if (!ids.length) return null
  return (
    <ul className={className ? `evidencias ${className}` : 'evidencias'}>
      {ids.map((id) => (
        <li key={id}>
          <Evidencia id={id} lang={lang} />
        </li>
      ))}
    </ul>
  )
}
