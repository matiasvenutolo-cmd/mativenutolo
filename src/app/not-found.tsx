import { Encabezado } from '@/components/Encabezado'
import { PieInterior } from '@/components/PieInterior'

export default function NoEncontrado() {
  return (
    <>
      <Encabezado />
      <main id="inicio" className="interior">
        <div className="contenedor">
          <header className="interior__cabecera">
            <p className="rotulo">Error 404</p>
            <h1 className="d1 interior__titulo">Esa página no existe</h1>
            <p className="interior__bajada">
              Puede que el enlace haya cambiado. Desde el inicio se llega a
              todo.
            </p>
            <p style={{ marginTop: 24 }}>
              <a className="idea-fila__titulo" href="/">
                Volver al inicio
              </a>
            </p>
          </header>
        </div>
      </main>
      <PieInterior />
    </>
  )
}
