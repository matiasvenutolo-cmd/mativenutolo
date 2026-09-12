import { SITE } from '@/lib/site'
import { HeroParallax } from '@/components/HeroParallax'

const CHIPS = ['AI First', 'Agentes', 'Automatización', 'Cliente', 'Producto']

/**
 * A diferencia de la composición anterior, esta foto no trae texto
 * incrustado: el nombre, el posicionamiento y los chips son HTML real
 * superpuesto, así se pueden editar sin volver a generar la imagen.
 */
export function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="portada__marco">
        <HeroParallax>
          <img
            className="portada__medio"
            src="/fotos/hero-collage.jpg"
            alt="Matias Venutolo presentando frente a una pantalla azul, con capturas de una reunión de equipo reflejadas alrededor y el skyline de una ciudad de fondo"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </HeroParallax>
        <div className="portada__velo" aria-hidden="true" />

        <div className="portada__copy">
          <p className="portada__eyebrow">Director · IA y Automatización</p>
          <h1 className="portada__nombre">{SITE.nombre}</h1>
          <p className="portada__manifiesto">{SITE.posicionamiento}</p>
          <p className="portada__rol">
            Transformación organizacional, productos conversacionales y
            capacidades de IA aplicadas a negocio real.
          </p>
          <ul className="portada__chips">
            {CHIPS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
