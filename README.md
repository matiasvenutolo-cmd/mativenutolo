# matiasvenutolo.com

Sitio personal de Matías Venutolo. Azules profundos, celeste eléctrico y blanco,
fotografía real en color y una composición distinta por sección: portada a pantalla
completa, trayectoria horizontal, cadena de capacidades, BIT por fases y un escenario
fijo para las charlas.

Next.js 16 (App Router, estático), TypeScript, CSS propio. Sin CMS, sin framework de
utilidades, sin librerías de animación.

```bash
npm run dev     # http://localhost:3100
npm run build
```

## Estructura

```
src/
  app/
    page.tsx              Home: los ocho capítulos
    casos/[slug]/         BIT, Centro de Excelencia, CRAC, AI First
    ideas/[slug]/         Las seis piezas de "Cómo pienso"
    fuentes/              El registro completo de evidencia
    globals.css           Todo el sistema visual: bandas, tipografía y la línea
  components/
    Nav.tsx               Cuatro entradas, mezcladas por diferencia
    Portada.tsx           Fotografía a pantalla completa que rota
    Trayecto.tsx          Recorrido horizontal de 2013 a hoy
    CasoBit.tsx           BIT por fases: bot, canal, producto, plataforma, IA
    Escenario.tsx         Charlas: imagen fija que cambia con el scroll
    Evidencia.tsx         La marca de evidencia
  content/
    fuentes.ts            Registro de fuentes. Nada se afirma sin pasar por acá
    trayectoria.ts        Las siete etapas
    casos.ts              Los cuatro casos
    home.ts               Capacidades, hitos de BIT, ideas, apariciones
```

## La regla del contenido

Toda afirmación referencia una entrada de `src/content/fuentes.ts`, y cada fuente declara
su estado:

| Estado | Significa |
|---|---|
| `verificado` | Una fuente pública independiente lo dice |
| `institucional` | Es real pero corresponde al banco o a un socio, no a una persona |
| `autodeclarado` | Lo publicó Matías con su nombre y se cita como tal |
| `proyeccion` | Cifra potencial, nunca presentada como logro |

Lo autodeclarado sin URL (formación, etapas anteriores a 2022) se cuenta en primera
persona y se distingue por la ausencia de marca de evidencia. **No agregar afirmaciones
sin fuente.**

## Pendientes de Matías

Están marcados en el propio sitio donde faltan.

- **Dominio definitivo.** Completar `SITE.url`: afecta canónicas, sitemap y datos
  estructurados.
- **URL directa del episodio del podcast.** Hoy se enlaza el programa, no el episodio.
- **Academia de IA.** La cifra publicada es "+500 colaboradores", que es lo que dice la
  fuente pública. Si el número actual es mayor, hace falta un post o material del banco
  que lo respalde antes de cambiarlo.
- **Derechos de las fotos.** Las de ADRHA parecen fotografía profesional del evento.
  Confirmar con la organización antes de publicarlas.

## Lo que falta construir

- Espejo completo en inglés bajo `/en`, con `hreflang` recíproco. Los `alternates` del
  layout ya lo declaran.
- Imagen de OpenGraph propia.
