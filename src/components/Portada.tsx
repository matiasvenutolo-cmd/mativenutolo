import { SITE } from '@/lib/site'

/**
 * El hero es esta composición completa: el nombre, el posicionamiento y
 * los rótulos ya están dentro de la imagen, no son HTML superpuesto. Por
 * eso no hay un bloque de texto acá arriba compitiendo con lo que la
 * imagen ya dice — se duplicaría.
 *
 * El <h1> real sigue existiendo (abajo, oculto visualmente) para que un
 * lector de pantalla o un buscador tengan el nombre como texto, no solo
 * como píxeles dentro de un PNG.
 */
export function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="portada__marco">
        <img
          className="portada__medio"
          src="/fotos/hero-collage.jpg"
          alt="Composición con Matias Venutolo presentando la transformación AI First del Banco Ciudad, rodeado de fotos de equipos trabajando y un skyline urbano, con el texto Matias Venutolo, IA por Negocio por Tecnología"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>

      <h1 className="sr-only">
        {SITE.nombre} — {SITE.posicionamiento}
      </h1>
      <p className="sr-only">
        {SITE.cargo} · {SITE.organizacion} · Buenos Aires
      </p>
    </section>
  )
}
