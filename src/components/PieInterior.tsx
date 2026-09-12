import { SITE } from '@/lib/site'
import { t, type Lang } from '@/lib/i18n'

export function PieInterior({ lang = 'es' }: { lang?: Lang }) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'
  const cargo = lang === 'es' ? SITE.cargo : SITE.cargoEn

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__fila">
          <span>
            <a href={base || '/'}>{d.footer.volver}</a>
          </span>
          <span>
            {SITE.nombre} · {cargo} · {SITE.organizacion}
          </span>
          <span>
            <a href={`${base}/fuentes`}>{d.footer.todasLasFuentes}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
