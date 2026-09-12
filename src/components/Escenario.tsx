import { APARICIONES } from '@/content/home'
import { Evidencia } from '@/components/Evidencia'

/* El escenario solo acepta fotografías reales de evento. Las portadas de
   video, que traen texto quemado, viven abajo en su propia rejilla. */
const ES_FOTO_REAL = (src: string) => !src.includes('/yt-')
const CON_FOTO = APARICIONES.filter((a) => a.foto && ES_FOTO_REAL(a.foto.src))

/**
 * Una grilla de charlas, cada una con su foto real. Nada de scroll
 * secuestrado ni de secciones del alto de la pantalla multiplicadas por
 * la cantidad de fotos: eso rompía el scroll normal de la página. Es una
 * grilla, y el navegador la scrollea solo.
 */
export function Escenario() {
  return (
    <section className="escenario" id="charlas">
      <div className="contenedor">
        <h2 className="d2 escenario__titulo">Charlas y eventos.</h2>

        <div className="escenario__grilla">
          {CON_FOTO.map((a) => (
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
                      <span>Ver la charla</span>
                      <span className="evidencia__flecha" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ) : null}
                  <Evidencia id={a.fuentes[0]} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
