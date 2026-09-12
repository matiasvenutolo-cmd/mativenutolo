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
  /** Misma fecha, en inglés, para la versión /en */
  fechaEn: string
  /** ISO para datos estructurados, cuando se conoce con precisión */
  iso?: string
  estado: EstadoFuente
  /** Qué prueba exactamente esta fuente */
  prueba: string
  /** Misma prueba, en inglés, para la versión /en del sitio */
  pruebaEn: string
  /** Si la fuente nombra a Matias directamente */
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
    fechaEn: 'May 2025',
    iso: '2025-05-26',
    estado: 'verificado',
    prueba:
      'Cargo, citas textuales y cifras del Centro de Excelencia en IA del Banco Ciudad.',
    pruebaEn:
      "Title, direct quotes, and figures from Banco Ciudad's AI Center of Excellence.",
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
    fechaEn: 'May 2025 · EN',
    iso: '2025-05-30',
    estado: 'verificado',
    prueba:
      'Versión en inglés del caso, con las cifras ampliadas y la declaración de retorno.',
    pruebaEn:
      'English-language version of the case study, with expanded figures and the return statement.',
    loNombra: true,
  },
  pamoic: {
    id: 'pamoic',
    etiqueta: 'PAMOIC',
    organizacion: 'PAMOIC',
    titulo: 'Resultados edición 2023',
    url: 'https://www.pamoic.com.ar/resultados_23.html',
    fecha: '2023',
    fechaEn: '2023',
    iso: '2023',
    estado: 'institucional',
    prueba:
      'Plata en Mejor Estrategia de Operación Sector Ciudadano y Bronce en Mejor Estrategia en Customer Experience, ambos al Banco de la Ciudad de Buenos Aires por el caso bit.',
    pruebaEn:
      'Silver in Best Citizen Sector Operations Strategy and Bronze in Best Customer Experience Strategy, both awarded to Banco de la Ciudad de Buenos Aires for the bit case.',
    loNombra: false,
  },
  meta: {
    id: 'meta',
    etiqueta: 'WhatsApp Business',
    organizacion: 'Meta',
    titulo: 'Banco Ciudad — Success story',
    url: 'https://whatsappbusiness.com/es-la/resources/success-stories/banco-ciudad/',
    fecha: '2025',
    fechaEn: '2025',
    iso: '2025',
    estado: 'institucional',
    prueba:
      'Métricas de bit medidas entre el 1 de enero y el 8 de junio de 2025, y el alcance de más de sesenta trámites.',
    pruebaEn:
      'bit metrics measured between January 1 and June 8, 2025, and its reach of more than sixty transaction types.',
    loNombra: false,
  },
  podcast: {
    id: 'podcast',
    etiqueta: 'The Fintech Podcast',
    organizacion: 'The Fintech Podcast · Coinscrap Finance',
    titulo:
      'Cómo Banco Ciudad aplicó IA para transformar la experiencia del cliente',
    url: 'https://www.youtube.com/watch?v=ZntRu7K3T_8',
    fecha: '26 de agosto de 2026',
    fechaEn: 'August 26, 2026',
    iso: '2026-08-26',
    estado: 'verificado',
    prueba:
      'Cargo público más reciente y conversación sobre centro de excelencia, agentes conversacionales y dato transaccional.',
    pruebaEn:
      'Most recent public statement of his role, and a conversation about the center of excellence, conversational agents, and transactional data.',
    loNombra: true,
  },
  aiTour: {
    id: 'aiTour',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Presentación del caso Banco Ciudad en el Microsoft AI Tour, Santiago de Chile',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_hoy-presentamos-el-caso-de-%C3%A9xito-de-banco-activity-7384700475096604672-TB4S',
    fecha: '2025',
    fechaEn: '2025',
    iso: '2025',
    estado: 'autodeclarado',
    prueba:
      'Publicación propia donde relata haber presentado el caso del banco ante líderes financieros y tecnológicos de la región.',
    pruebaEn:
      "Self-published post describing having presented the bank's case to financial and technology leaders in the region.",
    loNombra: true,
  },
  cronista: {
    id: 'cronista',
    etiqueta: 'El Cronista',
    organizacion: 'El Cronista · Infotechnology',
    titulo: 'Datos e IA, el combo que transforma las áreas de RR.HH. en las empresas',
    url: 'https://www.cronista.com/infotechnology/innovacion-it/datos-e-ia-el-combo-que-transforma-las-areas-de-rrhh-en-las-empresas/',
    fecha: 'abril 2025',
    fechaEn: 'April 2025',
    iso: '2025-04-29',
    estado: 'verificado',
    prueba:
      'Confirma el cargo y describe CRAC, el asistente interno con IA generativa sobre WhatsApp.',
    pruebaEn:
      'Confirms the role and describes CRAC, the internal assistant with generative AI over WhatsApp.',
    loNombra: true,
  },
  iproup: {
    id: 'iproup',
    etiqueta: 'iProUP',
    organizacion: 'iProUP',
    titulo: 'Inteligencia artificial en acción: el caso de Banco Ciudad que miran otras instituciones',
    url: 'https://www.iproup.com/innovacion/55999-inteligencia-artificial-en-accion-el-caso-de-banco-ciudad-que-miran-otras-instituciones',
    fecha: '2025',
    fechaEn: '2025',
    iso: '2025',
    estado: 'verificado',
    prueba:
      'Alcance interno de CRAC y decisión del banco de institucionalizar el enfoque a partir de su resultado.',
    pruebaEn:
      "Internal reach of CRAC and the bank's decision to institutionalize the approach based on its results.",
    loNombra: true,
  },
  iprofesional: {
    id: 'iprofesional',
    etiqueta: 'iProfesional',
    organizacion: 'iProfesional',
    titulo: 'BIT, el asistente virtual del Banco Ciudad, llegó a WhatsApp',
    url: 'https://www.iprofesional.com/actualidad/382998-bit-el-asistente-virtual-del-banco-ciudad-llego-a-whatsapp',
    fecha: 'junio 2023',
    fechaEn: 'June 2023',
    iso: '2023-06',
    estado: 'verificado',
    prueba: 'Cobertura independiente del salto de bit a WhatsApp.',
    pruebaEn:
      "Independent coverage of bit's move to WhatsApp.",
    loNombra: false,
  },
  chattigo: {
    id: 'chattigo',
    etiqueta: 'Chattigo',
    organizacion: 'Chattigo',
    titulo: 'Caso de éxito: BIT, el chat del Banco Ciudad',
    url: 'https://m.facebook.com/chattigoLatam/videos/caso-de-%C3%A9xito-mati-venutolo-de-bit-el-chatbot-del-bancociudad-afirma-lo-que-m%C3%A1s-/490554590151881/',
    fecha: 's/f',
    fechaEn: 'n.d.',
    estado: 'institucional',
    prueba:
      'Video del partner tecnológico donde aparece hablando de bit como referente del caso.',
    pruebaEn:
      "Video from the technology partner featuring him speaking about bit as the case's reference.",
    loNombra: true,
  },
  academia: {
    id: 'academia',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Cierre de una nueva edición de la Academia de IA del Banco Ciudad',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_cerramos-una-nueva-edici%C3%B3n-de-la-academia-activity-7473474114972864513-iLem',
    fecha: '2026',
    fechaEn: '2026',
    iso: '2026',
    estado: 'autodeclarado',
    prueba:
      'Más de 500 colaboradores pasaron por la Academia de IA y cada uno terminó creando su propio agente.',
    pruebaEn:
      'More than 500 employees went through the AI Academy, each ending up building their own agent.',
    loNombra: true,
  },
  microsoftArg: {
    id: 'microsoftArg',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Charla sobre la transformación AI First del Banco Ciudad en las oficinas de Microsoft',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_hoy-compartimos-una-charla-en-las-oficinas-activity-7437892615020265472-0D_8',
    fecha: '2026',
    fechaEn: '2026',
    iso: '2026',
    estado: 'autodeclarado',
    prueba:
      'Los tres pilares de la estrategia AI First y los desafíos planteados para 2026.',
    pruebaEn:
      'The three pillars of the AI First strategy and the challenges set out for 2026.',
    loNombra: true,
  },
  adrha: {
    id: 'adrha',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Panel en ADRHA sobre transformar el día a día de las personas con IA',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_el-viernes-pasado-tuvimos-la-posibilidad-activity-7396298287332524033-zqWR',
    fecha: '2025',
    fechaEn: '2025',
    iso: '2025',
    estado: 'autodeclarado',
    prueba:
      'Participación en el congreso de la asociación de recursos humanos, sobre el impacto interno de la IA.',
    pruebaEn:
      "Participation in the human-resources association's conference, on the internal impact of AI.",
    loNombra: true,
  },
  revolucia: {
    id: 'revolucia',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Caso de éxito Banco Ciudad en la segunda edición de Revolucia',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_el-pr%C3%B3ximo-jueves-0910-voy-a-estar-presentando-activity-7378479682700066816-XkYb',
    fecha: '9 de octubre de 2025',
    fechaEn: 'October 9, 2025',
    iso: '2025-10-09',
    estado: 'autodeclarado',
    prueba:
      'Presentación sobre cómo implementar IA en un banco, dentro de una conferencia abierta en español.',
    pruebaEn:
      'A presentation on how to implement AI in a bank, part of an open conference in Spanish.',
    loNombra: true,
  },
  agentsOfChange: {
    id: 'agentsOfChange',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Banco Ciudad reconocido como Agente de Cambio por su uso de IA',
    url: 'https://www.linkedin.com/posts/matiasvenutolo_agents-of-change-activity-7343725096399790080-BUJW',
    fecha: '2025',
    fechaEn: '2025',
    iso: '2025',
    estado: 'autodeclarado',
    prueba:
      'Reconocimiento a Banco Ciudad dentro del programa Agents of Change de Microsoft.',
    pruebaEn:
      "Recognition given to Banco Ciudad within Microsoft's Agents of Change program.",
    loNombra: false,
  },
  revoluciaVideo: {
    id: 'revoluciaVideo',
    etiqueta: 'Revolucia',
    organizacion: 'Revolucia',
    titulo: 'Caso real: por qué el Banco Ciudad empezó a usar IA',
    url: 'https://www.youtube.com/watch?v=RiX0te7gQOU',
    fecha: 'diciembre 2025',
    fechaEn: 'December 2025',
    iso: '2025-12-18',
    estado: 'verificado',
    prueba:
      'Charla completa publicada por la organización del evento, con su nombre en el título.',
    pruebaEn:
      "Full talk published by the event's organizers, with his name in the title.",
    loNombra: true,
  },
  linkus: {
    id: 'linkus',
    etiqueta: 'LinkUs',
    organizacion: 'LinkUs Human Technology',
    titulo: 'Copilot GPS, encuentro 2: caso Banco Ciudad',
    url: 'https://www.youtube.com/watch?v=xF2Y7v4HHCE',
    fecha: 'noviembre 2025',
    fechaEn: 'November 2025',
    iso: '2025-11-04',
    estado: 'verificado',
    prueba: 'Encuentro sobre adopción de Copilot con el caso del banco.',
    pruebaEn:
      "A meetup on Copilot adoption featuring the bank's case.",
    loNombra: false,
  },
  chattigo2024: {
    id: 'chattigo2024',
    etiqueta: 'Chattigo',
    organizacion: 'Chattigo',
    titulo: 'Caso de éxito: Banco Ciudad',
    url: 'https://www.youtube.com/watch?v=6vxeeb9SiYQ',
    fecha: 'diciembre 2024',
    fechaEn: 'December 2024',
    iso: '2024-12-05',
    estado: 'institucional',
    prueba: 'Caso publicado por el socio tecnológico del canal.',
    pruebaEn:
      "Case study published by the channel's technology partner.",
    loNombra: false,
  },
  cfp2024: {
    id: 'cfp2024',
    etiqueta: 'CFP Connections',
    organizacion: 'CFP Connections',
    titulo: 'El caso BIT, chatbot del Banco Ciudad de Buenos Aires',
    url: 'https://www.youtube.com/watch?v=r7YVbo4ZjZQ',
    fecha: 'agosto 2024',
    fechaEn: 'August 2024',
    iso: '2024-08-02',
    estado: 'verificado',
    prueba: 'Presentación del caso bit ante una audiencia profesional externa.',
    pruebaEn:
      'Presentation of the bit case to an external professional audience.',
    loNombra: false,
  },
  chattigo2023: {
    id: 'chattigo2023',
    etiqueta: 'Chattigo',
    organizacion: 'Chattigo',
    titulo: 'BIT, transformando una organización a través de un chatbot',
    url: 'https://www.youtube.com/watch?v=XdqDZ8s6EYI',
    fecha: 'octubre 2023',
    fechaEn: 'October 2023',
    iso: '2023-10-27',
    estado: 'institucional',
    prueba:
      'Charla sobre bit publicada por el socio tecnológico, un año después del inicio de su gestión del producto.',
    pruebaEn:
      'Talk about bit published by the technology partner, a year after he took over the product.',
    loNombra: true,
  },
  linkedin: {
    id: 'linkedin',
    etiqueta: 'LinkedIn',
    organizacion: 'LinkedIn',
    titulo: 'Perfil profesional',
    url: 'https://www.linkedin.com/in/matiasvenutolo/',
    fecha: 'vigente',
    fechaEn: 'current',
    estado: 'autodeclarado',
    prueba: 'Perfil profesional público.',
    pruebaEn:
      'Public professional profile.',
    loNombra: true,
  },
} as const satisfies Record<string, Fuente>

export type FuenteId = keyof typeof FUENTES

export const listaFuentes: Fuente[] = Object.values(FUENTES)
