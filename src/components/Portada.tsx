import { SITE } from '@/lib/site'
import { HeroParallax } from '@/components/HeroParallax'
import type { Lang } from '@/lib/i18n'

const CHIPS = {
  es: ['AI First', 'Agentes', 'Automatización', 'Cliente', 'Producto'],
  en: ['AI First', 'Agents', 'Automation', 'Customer', 'Product'],
}

const COPIA = {
  es: {
    eyebrow: 'Director · IA y Automatización',
    rol: 'Transformación organizacional, productos conversacionales y capacidades de IA aplicadas a negocio real.',
    alt: 'Matias Venutolo presentando frente a una pantalla azul, con capturas de una reunión de equipo reflejadas alrededor y el skyline de una ciudad de fondo',
  },
  en: {
    eyebrow: 'Director · AI and Automation',
    rol: 'Organizational transformation, conversational products, and AI capabilities applied to real business.',
    alt: 'Matias Venutolo presenting in front of a blue screen, with reflections of a team meeting around him and a city skyline in the background',
  },
}

/**
 * A diferencia de la composición anterior, esta foto no trae texto
 * incrustado: el nombre, el posicionamiento y los chips son HTML real
 * superpuesto, así se pueden editar sin volver a generar la imagen.
 */
export function Portada({ lang = 'es' }: { lang?: Lang }) {
  const copia = COPIA[lang]
  const chips = CHIPS[lang]

  return (
    <section className="portada" id="inicio">
      <div className="portada__marco">
        <HeroParallax>
          <img
            className="portada__medio"
            src="/fotos/hero-collage.jpg"
            alt={copia.alt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </HeroParallax>
        <div className="portada__velo" aria-hidden="true" />

        <div className="portada__copy">
          <p className="portada__eyebrow">{copia.eyebrow}</p>
          <h1 className="portada__nombre">{SITE.nombre}</h1>
          <p className="portada__manifiesto">
            {lang === 'es' ? SITE.posicionamiento : SITE.posicionamientoEn}
          </p>
          <p className="portada__rol">{copia.rol}</p>
          <ul className="portada__chips">
            {chips.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
