import { SITE } from '@/lib/site'

export function PieInterior() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie__fila">
          <span>
            <a href="/">Volver al inicio</a>
          </span>
          <span>
            {SITE.nombre} · {SITE.cargo} · {SITE.organizacion}
          </span>
          <span>
            <a href="/fuentes">Todas las fuentes</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
