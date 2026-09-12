import { ETAPAS } from '@/content/trayectoria'
import { Evidencias } from '@/components/Evidencia'

/**
 * Recorrido horizontal. Se arrastra con el dedo, se desplaza con la rueda
 * lateral y se recorre con el teclado, porque cada hito es un elemento
 * enfocable dentro de una región desplazable. Sin control de scroll robado.
 */
export function Trayecto() {
  const anios = ETAPAS.map((e) => e.anio)

  return (
    <section className="trayecto" id="trayectoria">
      <div className="contenedor trayecto__cabeza">
        <p className="trayecto__anios">
          {anios.map((a, i) => (
            <span key={a}>
              {i === anios.length - 1 ? <b>{a}</b> : a}
              {i < anios.length - 1 ? '  ·  ' : '  ·  '}
            </span>
          ))}
          <b>hoy</b>
        </p>
        <p className="trayecto__ayuda">Desplazá →</p>
      </div>

      <div
        className="trayecto__pista"
        tabIndex={0}
        role="group"
        aria-label="Trayectoria profesional, de 2013 a hoy"
      >
        {ETAPAS.map((e, i) => (
          <article
            key={e.anio}
            className="hito-t"
            data-presente={i === ETAPAS.length - 1}
          >
            <p className="hito-t__anio">{e.anio}</p>
            <p className="hito-t__etiqueta">{e.etiqueta}</p>
            <p className="hito-t__sintesis">{e.sintesis}</p>
            {e.fuentes ? (
              <Evidencias ids={e.fuentes} className="hito-t__fuentes" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
