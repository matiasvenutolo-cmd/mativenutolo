# matiasvenutolo.com

Sitio personal de Matías Venutolo. Sistema **Archivo Vivo**, dirección **B — Narrativa**:
la trayectoria es una línea continua que atraviesa el sitio y toma color a medida que avanza.

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
    globals.css           Todo el sistema visual
  components/
    Encabezado.tsx        Navegación + la línea contraída como progreso
    Linea.tsx             La trayectoria
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

- **Retrato.** Vertical, buena luz, mirada a cámara, mínimo 2000 px de alto. Va en
  `public/` y reemplaza el bloque `.retrato-pendiente` de `app/page.tsx`.
- **Foto del Microsoft AI Tour de Santiago.** Sostiene el capítulo Público.
- **Dominio definitivo.** Completar `SITE.url`: afecta canónicas, sitemap y datos
  estructurados.
- **URL directa del episodio del podcast.** Hoy se enlaza el programa, no el episodio.
- **Academia de IA.** Si aparece una fuente pública con su alcance, se agrega a
  `fuentes.ts` y se completa el caso `ai-first`.

## Lo que falta construir

- Espejo completo en inglés bajo `/en`, con `hreflang` recíproco. Los `alternates` del
  layout ya lo declaran.
- Imagen de OpenGraph propia.
