import { IDEAS } from '@/content/home'
import { IDEAS_EN } from '@/content/home.en'
import { Nav } from '@/components/Nav'
import { PieInterior } from '@/components/PieInterior'
import { SITE } from '@/lib/site'
import { t, type Lang } from '@/lib/i18n'
import type { Idea } from '@/content/home'

export function IdeaView({ lang, idea }: { lang: Lang; idea: Idea }) {
  const d = t(lang)
  const base = lang === 'es' ? '' : '/en'
  const ideas = lang === 'es' ? IDEAS : IDEAS_EN
  const otras = ideas.filter((i) => i.slug !== idea.slug)

  return (
    <>
      <Nav lang={lang} />
      <main id="inicio" className="interior">
        <article className="contenedor idea">
          <p className="rotulo">{d.idea.rotulo}</p>
          <h1 className="idea__titulo">{idea.titulo}</h1>
          <p className="idea__bajada">{idea.bajada}</p>
          <div className="idea__cuerpo">
            {idea.cuerpo.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="idea__aviso">
            {d.idea.aviso}{' '}
            <a href={`${base}/#casos`}>{d.idea.avisoLink}</a>.
          </p>

          <nav className="otros-casos" aria-label={d.idea.otras}>
            <p className="rotulo">{d.idea.otras}</p>
            <div className="indice">
              {otras.map((o) => (
                <a key={o.slug} className="indice__fila" href={`${base}/ideas/${o.slug}`}>
                  <h2 className="indice__titulo">{o.titulo}</h2>
                  <p className="indice__linea">{o.bajada}</p>
                  <span className="indice__meta">{d.idea.leer}</span>
                </a>
              ))}
            </div>
          </nav>
        </article>
      </main>
      <PieInterior lang={lang} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: idea.titulo,
            description: idea.bajada,
            url: `${SITE.url}${base}/ideas/${idea.slug}`,
            inLanguage: lang === 'es' ? 'es-AR' : 'en',
            author: { '@id': `${SITE.url}/#persona` },
            publisher: { '@id': `${SITE.url}/#persona` },
          }),
        }}
      />
    </>
  )
}
