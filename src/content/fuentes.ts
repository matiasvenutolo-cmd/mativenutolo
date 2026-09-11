/**
 * Registro de fuentes. Toda afirmación del sitio referencia una de estas entradas.
 * `estado` sigue el mapa de evidencia de la Fase 2:
 *   verificado   — fuente pública independiente
 *   autodeclarado— publicado por él con su nombre, citado como tal
 *   institucional— real, pero pertenece al Banco Ciudad o a un partner
 *   proyeccion   — cifra declarada como potencial, nunca como logro
 */

export type EstadoFuente =
  | 'verificado'
  | 'autodeclarado'
  | 'institucional'
  | 'proyeccion'

export type Fuente = {
  id: string
  /** Etiqueta corta que se muestra en la marca de evidencia */
  etiqueta: string
  organizacion: string
  titulo: string
  url: string
  /** Texto de fecha tal como se muestra */
  fecha: string
  /** ISO para datos estructurados, cuando se conoce con precisión */
  iso?: string
  estado: EstadoFuente
  /** Qué prueba exactamente esta fuente */
  prueba: string
  /** Si la fuente nombra a Matías directamente */
  loNombra: boolean
}

export const FUENTES = {
  microsoftEs: {
    id: 'microsoftEs',
    etiqueta: 'Microsoft',
    organizacion: 'Microsoft',
    titulo:
      'Banco Ciudad reduce su time to market e impulsa la innovación con IA gracias a Copilot, Copilot Studio y Azure',
    url: 'https://www.microsoft.com/es/customers/story/24151-banco-de-la-ciudad-de-buenos-aires-microsoft-365-copilot',
    fecha: 'mayo 2025',
    iso: '2025-05-26',
    estado: 'verificado',
    prueba:
      'Cargo, citas textuales y cifras del Centro de Excelencia en IA del Banco Ciudad.',
    loNombra: true,
  },
  microsoftEn: {
    id: 'microsoftEn',
    etiqueta: 'Microsoft',
    organizacion: 'Microsoft',
    titulo:
      'Banco Ciudad accelerates innovation and reduces time to market with AI',
    url: 'https://www.microsoft.com/en/customers/story/24281-banco-de-la-ciudad-de-buenos-aires-microsoft-365-copilot',
    fecha: 'mayo 2025 · EN',
    iso: '2025-05-30',
    estado: 'verificado',
    prueba:
      'Versión en inglés del caso, con las cifras ampliadas y la declaración de retorno.',
    loNombra: true,
  },
  pamoic: {
    id: 'pamoic',
    etiqueta: 'PAMOIC',
    organizacion: 'PAMOIC',
    titulo: 'Resultados edición 2023',
    url: 'https://www.pamoic.com.ar/resultados_23.html',
    fecha: '2023',
    iso: '2023',
    estado: 'institucional',
    prueba:
      'Plata en Mejor Estrategia de Operación Sector Ciudadano y Bronce en Mejor Estrategia en Customer Experience, ambos al Banco de la Ciudad de Buenos Aires por el caso BIT.',
    loNombra: false,
  },
  meta: {
    id: 'meta',
    etiqueta: 'WhatsApp Business',
    organizacion: 'Meta',
    titulo: 'Banco Ciudad — Success story',
    url: 'https://whatsappbusiness.com/es-la/resources/success-stories/banco-ciudad/',
    fecha: '2025',
    iso: '2025',
    estado: 'institucional',
    prueba:
      'Métricas de BIT medidas entre el 1 de enero y el 8 de junio de 2025, y el alcance de más de sesenta trámites.',
    loNombra: false,
  },
  podcast: {
    id: 'podcast',
    etiqueta: 'The Fintech Podcast',
    organizacion: 'The Fintech Podcast',
    titulo:
      'La IA en Banco Ciudad, agentes conversacionales y la clave del dato transaccional',
    url: 'https://podcasts.apple.com/hn/podcast/the-fintech-podcast-el-podcast-para-los-amantes/id1617627333',
    fecha: '26 de agosto de 2026',
    iso: '2026-08-26',
    estado: 'verificado',
    prueba:
      'Cargo público más reciente y conversación sobre centro de excelencia, agentes conversacionales y dato transaccional.',
    loNombra: true,
  },
  aiTour: {
    id: 'aiTour',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Presentación del caso Banco Ciudad en el Microsoft AI Tour, Santiago de Chile',
    url: 'https://es.linkedin.com/posts/mativenutolo_hoy-presentamos-el-caso-de-%C3%A9xito-de-banco-activity-7384700475096604672-j0VK',
    fecha: '2025',
    iso: '2025',
    estado: 'autodeclarado',
    prueba:
      'Publicación propia donde relata haber presentado el caso del banco ante líderes financieros y tecnológicos de la región.',
    loNombra: true,
  },
  cronista: {
    id: 'cronista',
    etiqueta: 'El Cronista',
    organizacion: 'El Cronista · Infotechnology',
    titulo: 'Datos e IA, el combo que transforma las áreas de RR.HH. en las empresas',
    url: 'https://www.cronista.com/infotechnology/innovacion-it/datos-e-ia-el-combo-que-transforma-las-areas-de-rrhh-en-las-empresas/',
    fecha: 'abril 2025',
    iso: '2025-04-29',
    estado: 'verificado',
    prueba:
      'Confirma el cargo y describe CRAC, el asistente interno con IA generativa sobre WhatsApp.',
    loNombra: true,
  },
  iproup: {
    id: 'iproup',
    etiqueta: 'iProUP',
    organizacion: 'iProUP',
    titulo: 'Inteligencia artificial en acción: el caso de Banco Ciudad que miran otras instituciones',
    url: 'https://www.iproup.com/innovacion/55999-inteligencia-artificial-en-accion-el-caso-de-banco-ciudad-que-miran-otras-instituciones',
    fecha: '2025',
    iso: '2025',
    estado: 'verificado',
    prueba:
      'Alcance interno de CRAC y decisión del banco de institucionalizar el enfoque a partir de su resultado.',
    loNombra: true,
  },
  itsitio: {
    id: 'itsitio',
    etiqueta: 'ITSitio',
    organizacion: 'ITSitio',
    titulo: 'Un chatbot inteligente para Banco Ciudad',
    url: 'https://www.itsitio.com/casos-de-estudio/chatbot-inteligente-banco-ciudad/',
    fecha: '2017',
    iso: '2017',
    estado: 'institucional',
    prueba:
      'El punto de partida: un bot de preguntas frecuentes sobre Cognitive Services, Bot Framework y Dynamics 365.',
    loNombra: false,
  },
  iprofesional: {
    id: 'iprofesional',
    etiqueta: 'iProfesional',
    organizacion: 'iProfesional',
    titulo: 'BIT, el asistente virtual del Banco Ciudad, llegó a WhatsApp',
    url: 'https://www.iprofesional.com/actualidad/382998-bit-el-asistente-virtual-del-banco-ciudad-llego-a-whatsapp',
    fecha: 'junio 2023',
    iso: '2023-06',
    estado: 'verificado',
    prueba: 'Cobertura independiente del salto de BIT a WhatsApp.',
    loNombra: false,
  },
  chattigo: {
    id: 'chattigo',
    etiqueta: 'Chattigo',
    organizacion: 'Chattigo',
    titulo: 'Caso de éxito: BIT, el chat del Banco Ciudad',
    url: 'https://m.facebook.com/chattigoLatam/videos/caso-de-%C3%A9xito-mati-venutolo-de-bit-el-chatbot-del-bancociudad-afirma-lo-que-m%C3%A1s-/490554590151881/',
    fecha: 's/f',
    estado: 'institucional',
    prueba:
      'Video del partner tecnológico donde aparece hablando de BIT como referente del caso.',
    loNombra: true,
  },
  linkedin: {
    id: 'linkedin',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Perfil profesional',
    url: 'https://www.linkedin.com/in/matiasvenutolo/',
    fecha: 'vigente',
    estado: 'autodeclarado',
    prueba: 'Perfil profesional público.',
    loNombra: true,
  },
} as const satisfies Record<string, Fuente>

export type FuenteId = keyof typeof FUENTES

export const listaFuentes: Fuente[] = Object.values(FUENTES)
