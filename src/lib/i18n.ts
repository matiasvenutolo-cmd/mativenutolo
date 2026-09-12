export type Lang = 'es' | 'en'

/** Textos de interfaz que no vienen de content/*.ts (esos ya están
 *  bilingües como arrays *_EN separados). Todo lo que es "chrome" del
 *  sitio —labels, aria, botones— vive acá para no repetirlo componente
 *  por componente. */
export const DICCIONARIO = {
  es: {
    nav: {
      charlas: 'Charlas',
      queConstruyo: 'Qué construyo',
      casos: 'Casos',
      comoPienso: 'Cómo pienso',
      contacto: 'Contacto',
    },
    saltar: 'Saltar al contenido',
    escenario: {
      titulo: 'Charlas y eventos.',
      verCharla: 'Ver la charla',
      abreNueva: '(abre en una pestaña nueva)',
    },
    carrusel: {
      rotulo: 'Charlas grabadas',
      anterior: 'Ver charla anterior',
      siguiente: 'Ver charla siguiente',
    },
    capacidades: {
      rotulo: 'Qué construyo',
      titulo: 'Tres formas de conectar negocio con IA.',
    },
    bit: {
      que: 'El canal conversacional del Banco Ciudad',
      desde: 'Product Owner desde 2022',
    },
    whatsapp: {
      rotulo: 'Así conversa bit · ejemplo ilustrativo',
      enLinea: 'en línea',
      escribiendo: 'escribiendo…',
    },
    casosGrilla: {
      aria: 'Otros casos',
    },
    ideas: {
      rotulo: 'Cómo pienso',
      titulo: 'Seis convicciones que uso para decidir.',
      bajada:
        'No son un método cerrado, son el criterio con el que priorizo cuando negocio, tecnología y personas empujan para lados distintos.',
      conviccion: 'Convicción',
      leerNota: 'Leer nota',
    },
    trayecto: {
      hoy: 'hoy',
      desplaza: 'Desplazá →',
    },
    cierre: {
      titulo: 'El próximo paso es hacer esto a mayor escala.',
    },
    footer: {
      volver: 'Volver al inicio',
      fuentes: 'Fuentes',
      todasLasFuentes: 'Todas las fuentes',
    },
    evidencia: {
      institucional: 'reconocimiento o caso atribuido a la institución',
      autodeclarado: 'publicación propia',
      abreNueva: '(abre en una pestaña nueva)',
    },
    idea: {
      rotulo: 'Cómo pienso',
      aviso: 'Esto es una opinión formada trabajando, no un hecho verificable. Los casos que la sostienen están en',
      avisoLink: 'la sección de casos',
      otras: 'Otras ideas',
      leer: 'Leer',
    },
    caso: {
      seguirLeyendo: 'Seguir leyendo',
      periodo: 'Período',
      rol: 'Rol',
      evidencia: 'Evidencia',
    },
    fuentes: {
      rotulo: 'Transparencia',
      titulo: 'Fuentes',
      bajada:
        'Todo lo que este sitio afirma sale de alguno de estos lugares. Lo que no tiene fuente pública no está publicado como hecho.',
    },
    idiomaToggle: { es: 'ES', en: 'EN' },
  },
  en: {
    nav: {
      charlas: 'Talks',
      queConstruyo: 'What I build',
      casos: 'Case studies',
      comoPienso: 'How I think',
      contacto: 'Contact',
    },
    saltar: 'Skip to content',
    escenario: {
      titulo: 'Talks and events.',
      verCharla: 'Watch the talk',
      abreNueva: '(opens in a new tab)',
    },
    carrusel: {
      rotulo: 'Recorded talks',
      anterior: 'Previous talk',
      siguiente: 'Next talk',
    },
    capacidades: {
      rotulo: 'What I build',
      titulo: 'Three ways to connect business with AI.',
    },
    bit: {
      que: "Banco Ciudad's conversational channel",
      desde: 'Product Owner since 2022',
    },
    whatsapp: {
      rotulo: 'How bit talks · illustrative example',
      enLinea: 'online',
      escribiendo: 'typing…',
    },
    casosGrilla: {
      aria: 'Other case studies',
    },
    ideas: {
      rotulo: 'How I think',
      titulo: 'Six convictions I use to decide.',
      bajada:
        "They're not a closed method — they're the criteria I prioritize when business, technology, and people pull in different directions.",
      conviccion: 'Conviction',
      leerNota: 'Read the note',
    },
    trayecto: {
      hoy: 'today',
      desplaza: 'Scroll →',
    },
    cierre: {
      titulo: 'The next step is doing this at a larger scale.',
    },
    footer: {
      volver: 'Back to home',
      fuentes: 'Sources',
      todasLasFuentes: 'All sources',
    },
    evidencia: {
      institucional: 'recognition or case attributed to the institution',
      autodeclarado: 'self-published',
      abreNueva: '(opens in a new tab)',
    },
    idea: {
      rotulo: 'How I think',
      aviso: "This is an opinion formed on the job, not a verifiable fact. The cases behind it are in",
      avisoLink: 'the case studies section',
      otras: 'Other ideas',
      leer: 'Read',
    },
    caso: {
      seguirLeyendo: 'Keep reading',
      periodo: 'Period',
      rol: 'Role',
      evidencia: 'Evidence',
    },
    fuentes: {
      rotulo: 'Transparency',
      titulo: 'Sources',
      bajada:
        "Everything this site claims comes from one of these places. What has no public source is not published as fact.",
    },
    idiomaToggle: { es: 'ES', en: 'EN' },
  },
} as const

export function t(lang: Lang) {
  return DICCIONARIO[lang]
}
