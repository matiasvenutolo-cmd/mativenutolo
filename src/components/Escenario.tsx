import { APARICIONES } from '@/content/home'
import { APARICIONES_EN } from '@/content/home.en'
import { Evidencia } from '@/components/Evidencia'
import { t, type Lang } from '@/lib/i18n'

/* El escenario solo acepta fotografías reales de evento. Las portadas de
   video, que traen texto quemado, viven abajo en su propia rejilla. */
const ES_FOTO_REAL = (src: string) => !src.includes('/yt-')

/**
 * Una grilla de charlas, cada una con su foto real. Nada de scroll
 * secuestrado ni de secciones del alto de la pantalla multiplicadas por
 * la cantidad de fotos: eso rompía el scroll normal de la página. Es una
 * grilla, y el navegador la scrollea solo.
 */
export function Escenario({ lang = 'es' }: { lang?: Lang }) {
  const d = t(lang)
  const apariciones = lang === 'es' ? APARICIONES : APARICIONES_EN
  const conFoto = apariciones.filter((a) => a.foto && ES_FOTO_REAL(a.foto.src))

  return (
    <section className="escenario" id="charlas">
      <div className="contenedor">
        <h2 className="d2 escenario__titulo reveal">{d.escenario.titulo}</h2>

        <div className="escenario__grilla reveal">
          {conFoto.map((a) => (
            <article key={a.titulo} className="escena">
              <img
                className="escena__foto"
                src={a.foto!.src}
                alt={a.foto!.alt}
                width={a.foto!.ancho}
                height={a.foto!.alto}
                loading="lazy"
                decoding="async"
              />
              <div className="escena__cuerpo">
                <p className="escena__meta">
                  {a.lugar} · {a.formato} · {a.fecha}
                </p>
                <h3 className="escena__t">{a.titulo}</h3>
                <p className="escena__texto">{a.texto}</p>
                <div className="escena__acciones">
                  {a.video ? (
                    <a
                      className="evidencia"
                      href={a.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{d.escenario.verCharla}</span>
                      <span className="evidencia__flecha" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ) : null}
                  <Evidencia id={a.fuentes[0]} lang={lang} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
