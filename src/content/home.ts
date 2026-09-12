import type { FuenteId } from './fuentes'

/* ---------- Capacidades ---------- */

export type Capacidad = {
  clave: string
  titulo: string
  resumen: string
  prueba: string
  fuentes: FuenteId[]
  href?: string
}

export const CAPACIDADES: Capacidad[] = [
  {
    clave: 'ai-first',
    titulo: 'Cultura AI First',
    resumen:
      'Que la organización entera aprenda a preguntarse si algo podría hacerse de otra manera. No es dar acceso a herramientas: es instalar una forma de mirar los problemas.',
    prueba:
      'CRAC, el asistente interno, lo usan más de ocho de cada diez empleados del banco. Ese resultado fue lo que llevó a institucionalizar el enfoque.',
    fuentes: ['iproup', 'cronista'],
    href: '/casos/crac',
  },
  {
    clave: 'cliente-proceso',
    titulo: 'Cliente → proceso → IA',
    resumen:
      'Empezar por la necesidad, seguir el proceso de punta a punta y recién ahí decidir dónde entra la automatización. El humano se queda donde su criterio agrega algo.',
    prueba:
      'BIT pasó de responder preguntas a resolver más de sesenta trámites, con menos derivaciones a un agente humano y más satisfacción.',
    fuentes: ['meta'],
    href: '/casos/bit',
  },
  {
    clave: 'estrategia',
    titulo: 'Estrategia de IA',
    resumen:
      'Decidir dónde aplicarla, cómo organizar la capacidad, en qué orden priorizar y cómo convertir experimentos sueltos en una hoja de ruta que se sostenga.',
    prueba:
      'Más de diez agentes en producción en seis meses, sobre una arquitectura definida desde el principio en lugar de armada por acumulación.',
    fuentes: ['microsoftEs'],
    href: '/casos/centro-de-excelencia',
  },
  {
    clave: 'roi',
    titulo: 'IA → resultado',
    resumen:
      'Traducir la tecnología al idioma de la conducción: qué problema resuelve, cuánto cuesta, cuánto devuelve y cómo escala. La conversación tiene que poder llegar al directorio.',
    prueba:
      '2.400 horas anuales redirigidas a tareas de más valor y un retorno declarado de siete veces el costo.',
    fuentes: ['microsoftEs', 'microsoftEn'],
    href: '/casos/centro-de-excelencia',
  },
]

/* ---------- BIT ---------- */

export type HitoBit = {
  anio: string
  titulo: string
  texto: string
  fuentes?: FuenteId[]
}

export const BIT_HITOS: HitoBit[] = [
  {
    anio: '2017',
    titulo: 'Un bot de preguntas frecuentes',
    texto:
      'El banco pone en línea un asistente que responde consultas sobre préstamos, cuentas y trámites, construido sobre servicios cognitivos y una base de conocimiento. Atiende, pero no resuelve.',
    fuentes: ['itsitio'],
  },
  {
    anio: '2022',
    titulo: 'Un canal con dueño',
    texto:
      'BIT pasa a tener un Product Owner y una hoja de ruta. La pregunta deja de ser cuántas consultas contesta y pasa a ser qué trámite podría resolver entero sin que el cliente llame.',
    fuentes: ['chattigo'],
  },
  {
    anio: '2023',
    titulo: 'Llega a WhatsApp',
    texto:
      'El asistente deja el sitio del banco y se mueve adonde ya está el cliente. Ese mismo año el caso recibe dos reconocimientos PAMOIC: Plata en Mejor Estrategia de Operación Sector Ciudadano y Bronce en Mejor Estrategia en Customer Experience.',
    fuentes: ['iprofesional', 'pamoic'],
  },
  {
    anio: '2025',
    titulo: 'Más de sesenta trámites',
    texto:
      'Turnos, activación de tarjetas, seguimiento de entregas, saldos, movimientos, reclamos. Entre enero y junio las interacciones por WhatsApp crecen un 51 %, las derivaciones a un agente humano bajan quince puntos y la satisfacción sube dieciocho.',
    fuentes: ['meta'],
  },
  {
    anio: 'Hoy',
    titulo: 'Datos que alimentan agentes',
    texto:
      'Cada conversación dice qué necesita un cliente y dónde se traba un proceso. Ese dato es el que vuelve a la organización como automatización y como agentes, dentro y fuera del canal.',
    fuentes: ['podcast'],
  },
]


/* ---------- BIT, recorrido por fases ---------- */

export type FaseBit = {
  clave: string
  fase: string
  anio: string
  titulo: string
  linea: string
  cifras?: { valor: string; rotulo: string }[]
  fuentes: FuenteId[]
  foto?: string
}

export const BIT_FASES: FaseBit[] = [
  {
    clave: 'bot',
    fase: 'Bot',
    anio: '2017',
    titulo: 'Responde preguntas frecuentes',
    linea:
      'Servicios cognitivos y una base de conocimiento sobre el sitio del banco. Contesta consultas de préstamos, cuentas y trámites.',
    fuentes: ['itsitio'],
  },
  {
    clave: 'canal',
    fase: 'Canal',
    anio: '2022',
    titulo: 'Toma dueño y hoja de ruta',
    linea:
      'La pregunta deja de ser cuántas consultas contesta y pasa a ser qué trámite resuelve entero sin que el cliente llame.',
    fuentes: ['chattigo'],
  },
  {
    clave: 'producto',
    fase: 'Producto',
    anio: '2023',
    titulo: 'Se muda a WhatsApp',
    linea:
      'Va adonde ya está el cliente. El caso recibe dos reconocimientos PAMOIC: Plata en Sector Ciudadano y Bronce en Customer Experience.',
    cifras: [{ valor: '2', rotulo: 'reconocimientos PAMOIC' }],
    fuentes: ['iprofesional', 'pamoic'],
  },
  {
    clave: 'plataforma',
    fase: 'Plataforma',
    anio: '2025',
    titulo: 'Más de sesenta trámites',
    linea:
      'Turnos, activación de tarjetas, seguimiento de entregas, saldos, movimientos, reclamos.',
    cifras: [
      { valor: '+51 %', rotulo: 'interacciones' },
      { valor: '−15 pts', rotulo: 'derivación a un humano' },
      { valor: '+18 pts', rotulo: 'satisfacción' },
      { valor: '60+', rotulo: 'trámites' },
    ],
    fuentes: ['meta'],
  },
  {
    clave: 'ia',
    fase: 'IA',
    anio: '2026',
    titulo: 'El dato vuelve como agentes',
    linea:
      'Cada conversación dice qué necesita un cliente y dónde se traba un proceso. Ese dato alimenta la automatización dentro y fuera del canal.',
    fuentes: ['podcast'],
  },
]

/* ---------- Otros casos ---------- */

export type CasoBreve = {
  slug: string
  titulo: string
  linea: string
  fuentes: FuenteId[]
  disponible: boolean
}

export const OTROS_CASOS: CasoBreve[] = [
  {
    slug: 'centro-de-excelencia',
    titulo: 'Centro de Excelencia en IA',
    linea:
      'Cómo se construye una capacidad de inteligencia artificial dentro de un banco, con hoja de ruta, agentes en producción y una conversación de retorno.',
    fuentes: ['microsoftEs', 'microsoftEn'],
    disponible: true,
  },
  {
    slug: 'crac',
    titulo: 'CRAC',
    linea:
      'Un asistente interno con IA generativa sobre WhatsApp. IA, automatización y una persona supervisando donde hace falta criterio.',
    fuentes: ['cronista', 'iproup'],
    disponible: true,
  },
  {
    slug: 'ai-first',
    titulo: 'AI First',
    linea:
      'La capacidad organizacional: capacitación, tecnología, recursos humanos y operaciones mirando los mismos problemas de otra manera.',
    fuentes: ['iproup'],
    disponible: true,
  },
]

/* ---------- Cómo pienso ---------- */

export type Idea = {
  slug: string
  titulo: string
  bajada: string
  cuerpo: string[]
}

export const IDEAS: Idea[] = [
  {
    slug: 'una-metrica-no-es-la-mision',
    titulo: 'Una métrica no es la misión',
    bajada: 'Cuando el indicador se vuelve el objetivo, el sistema se acomoda al indicador.',
    cuerpo: [
      'Una métrica sirve para saber si vamos bien. En el momento en que se convierte en el objetivo, deja de medir y empieza a deformar: los equipos optimizan lo que se mide y sueltan lo que importa, porque lo que importa no estaba en la planilla.',
      'El caso más incómodo es el de una organización llena de equipos excelentes que fracasa igual. Cada uno está mejorando algo real, con esfuerzo y con criterio, pero lo que mejora uno le complica el trabajo al de al lado. Nadie se equivoca en particular y el conjunto pierde.',
      'Por eso antes de definir el indicador hay que definir el contexto: qué estamos tratando de lograr como empresa y qué comportamiento queremos que este número genere. Si el número puede cumplirse haciendo algo que no queremos, el número está mal elegido.',
    ],
  },
  {
    slug: 'la-ia-no-es-del-area-de-tecnologia',
    titulo: 'La IA no es del área de tecnología',
    bajada: 'Las mejores oportunidades aparecen donde alguien entiende el negocio y la tecnología al mismo tiempo.',
    cuerpo: [
      'Cuando la inteligencia artificial se gestiona como un proyecto de sistemas, termina resolviendo problemas de sistemas. Salen cosas correctas que no cambian gran cosa, porque quien conoce el dolor del cliente no estuvo en la conversación donde se decidió qué construir.',
      'No se arregla poniendo a negocio a dar requerimientos. Se arregla cuando alguien puede sostener las dos conversaciones: entender por qué un proceso existe y entender qué es hoy técnicamente posible. Ese puente no es un rol de coordinación, es una capacidad.',
      'La tecnología tampoco está separada de las personas ni de los procesos. Una automatización que nadie adopta no es una automatización: es un costo.',
    ],
  },
  {
    slug: 'probar-antes-de-sobre-construir',
    titulo: 'Probar antes de sobre-construir',
    bajada: 'Un prototipo abre conversaciones que una presentación no abre.',
    cuerpo: [
      'Primero demostrar que algo se puede hacer. Después construir todo lo necesario para que sea real. En ese orden, porque el orden inverso compromete meses de trabajo a una idea que todavía nadie vio funcionando.',
      'No se trata de hacer las cosas apuradas ni de saltear la ingeniería. Se trata de bajar el costo de equivocarse antes de pedirle a una organización entera que cambie cómo trabaja. Una vez que la idea se sostiene, los equipos especializados la hacen robusta, segura y escalable, que es exactamente su trabajo.',
      'Un proyecto largo que recién muestra resultados al final no es más riguroso. Es solo un proyecto que aprende tarde.',
    ],
  },
  {
    slug: 'empeza-por-el-cliente',
    titulo: 'Empezá por el cliente y seguí el proceso entero',
    bajada: 'El agente no es el punto de partida.',
    cuerpo: [
      'La secuencia que funciona es necesidad del cliente, experiencia, proceso de negocio, automatización, persona donde haga falta criterio, resultado. Cuando se empieza por el final, sale un agente que atiende mejor un proceso que no debería existir así.',
      'Seguir el proceso de punta a punta suele ser la parte incómoda, porque atraviesa áreas que no dependen de la misma persona. Ahí es donde se ve si la transformación es real o si es una capa de barniz sobre lo de siempre.',
      'Automatizar por automatizar no es el objetivo. El objetivo es que el cliente resuelva lo que vino a resolver.',
    ],
  },
  {
    slug: 'ai-first-empieza-por-las-personas',
    titulo: 'AI First empieza por las personas',
    bajada: 'La tecnología sola no genera adopción.',
    cuerpo: [
      'AI First no es darle a todo el mundo una licencia y esperar. Es construir una capacidad común para que la gente empiece a mirar su propio trabajo y se pregunte si eso que hace hace años podría hacerse de otra manera.',
      'La adopción se expande con ejemplos visibles, con velocidad y con personas de adentro que se vuelven referentes. Un mandato centralizado consigue cumplimiento; un caso que el de al lado vio funcionar consigue interés, que es otra cosa.',
      'Cuando alguien que no es del área técnica arma su propio agente y le resuelve un problema concreto, la transformación deja de necesitar que la empujen.',
    ],
  },
  {
    slug: 'definiciones-compartidas',
    titulo: 'Sin definiciones compartidas, los equipos chocan',
    bajada: 'Las definiciones troncales faltantes se pagan en soluciones contradictorias.',
    cuerpo: [
      'En una organización grande, cuando falta una definición de base, cada equipo la resuelve por su cuenta. Ninguno se equivoca, pero terminan construyendo cosas que no encajan y el costo aparece meses después, cuando hay que integrarlas.',
      'Las definiciones que más faltan no suelen ser técnicas. Son acuerdos sobre qué consideramos un cliente, qué consideramos resuelto, qué dato es el bueno cuando dos sistemas dicen cosas distintas.',
      'Definir eso es lento y poco vistoso, y es lo que diferencia una transformación que escala de una colección de iniciativas que compiten entre sí.',
    ],
  },
]

/* ---------- Público ---------- */

export type Aparicion = {
  fecha: string
  lugar: string
  formato: string
  titulo: string
  texto: string
  fuentes: FuenteId[]
  /** Imagen en public/fotos. Si falta, la entrada vive solo en texto. */
  foto?: { src: string; alt: string; ancho: number; alto: number }
  /** Enlace a la charla completa, cuando existe grabación pública */
  video?: string
}

export const APARICIONES: Aparicion[] = [
  {
    fecha: 'Agosto 2026',
    lugar: 'The Fintech Podcast',
    formato: 'Podcast',
    titulo: 'La IA en Banco Ciudad, agentes conversacionales y el dato transaccional',
    texto:
      'Cómo se armó el centro de excelencia, cómo evolucionaron los agentes conversacionales y por qué el dato de una transacción, traducido a lenguaje entendible, cambia la relación con el cliente.',
    fuentes: ['podcast'],
    video: 'https://www.youtube.com/watch?v=ZntRu7K3T_8',
    foto: {
      src: '/fotos/yt-ZntRu7K3T_8.jpg',
      alt: 'Portada del episodio del podcast sobre la IA en Banco Ciudad',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: '2026',
    lugar: 'Oficinas de Microsoft, Buenos Aires',
    formato: 'Charla',
    titulo: 'Construir una organización AI First',
    texto:
      'El camino del banco con inteligencia artificial contado en tres pilares: estar más cerca del cliente, hacer más eficientes los procesos y darle herramientas nuevas a los equipos. También los desafíos de escalar el uso de IA de forma responsable.',
    fuentes: ['microsoftArg'],
    foto: {
      src: '/fotos/microsoft-argentina.jpg',
      alt: 'Matías Venutolo presentando frente a una pantalla que dice Transformación AI First en Banco Ciudad',
      ancho: 1152,
      alto: 1536,
    },
  },
  {
    fecha: 'Octubre 2025',
    lugar: 'Revolucia',
    formato: 'Conferencia',
    titulo: 'Por qué el Banco Ciudad empezó a usar IA',
    texto:
      'Cómo implementar inteligencia artificial en un banco: qué procesos cambia, qué mejora en la experiencia del cliente y dónde aparece la eficiencia real. La charla completa está publicada.',
    fuentes: ['revolucia', 'revoluciaVideo'],
    video: 'https://www.youtube.com/watch?v=RiX0te7gQOU',
    foto: {
      src: '/fotos/revolucia.jpg',
      alt: 'Pieza del evento Revolucia anunciando la charla de Matías Venutolo sobre el caso Banco Ciudad',
      ancho: 1080,
      alto: 1440,
    },
  },
  {
    fecha: '2025',
    lugar: 'Santiago de Chile',
    formato: 'Microsoft AI Tour',
    titulo: 'El caso del Banco Ciudad ante líderes financieros y tecnológicos de la región',
    texto:
      'Presentación de una estrategia que había empezado menos de un año antes y que para entonces ya despertaba interés como referencia regional.',
    fuentes: ['aiTour'],
    foto: {
      src: '/fotos/ai-tour-santiago.jpg',
      alt: 'Sala del Microsoft AI Tour en Santiago de Chile durante la presentación del caso',
      ancho: 960,
      alto: 960,
    },
  },
  {
    fecha: 'Noviembre 2025',
    lugar: 'LinkUs Human Technology',
    formato: 'Encuentro',
    titulo: 'Copilot GPS, encuentro 2: caso Banco Ciudad',
    texto:
      'Sesión sobre adopción de Copilot en una organización grande, con el recorrido del banco como caso de referencia.',
    fuentes: ['linkus'],
    video: 'https://www.youtube.com/watch?v=xF2Y7v4HHCE',
    foto: {
      src: '/fotos/yt-xF2Y7v4HHCE.jpg',
      alt: 'Portada del encuentro Copilot GPS con el caso Banco Ciudad',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: '2025',
    lugar: 'ADRHA, Buenos Aires',
    formato: 'Panel',
    titulo: 'Transformar el día a día de las personas con IA',
    texto:
      'Ante un auditorio de recursos humanos, el impacto interno de la inteligencia artificial: cómo cambia el trabajo de la gente antes que el organigrama.',
    fuentes: ['adrha', 'cronista'],
    foto: {
      src: '/fotos/adrha.jpg',
      alt: 'Matías Venutolo hablando con micrófono durante un panel en ADRHA',
      ancho: 800,
      alto: 533,
    },
  },
  {
    fecha: 'Diciembre 2024',
    lugar: 'Chattigo',
    formato: 'Caso de éxito',
    titulo: 'Banco Ciudad',
    texto:
      'El socio tecnológico del canal publica el caso completo, con el recorrido de BIT contado desde la implementación.',
    fuentes: ['chattigo2024'],
    video: 'https://www.youtube.com/watch?v=6vxeeb9SiYQ',
    foto: {
      src: '/fotos/yt-6vxeeb9SiYQ.jpg',
      alt: 'Portada del caso de éxito de Banco Ciudad publicado por Chattigo',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: 'Agosto 2024',
    lugar: 'CFP Connections',
    formato: 'Presentación',
    titulo: 'El caso BIT, chatbot del Banco Ciudad',
    texto:
      'El caso presentado ante una audiencia profesional externa, cuando el canal ya había dejado de ser un bot de preguntas frecuentes.',
    fuentes: ['cfp2024'],
    video: 'https://www.youtube.com/watch?v=r7YVbo4ZjZQ',
    foto: {
      src: '/fotos/yt-r7YVbo4ZjZQ.jpg',
      alt: 'Portada de la presentación del caso BIT en CFP Connections',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: 'Octubre 2023',
    lugar: 'Chattigo',
    formato: 'Charla',
    titulo: 'BIT, transformando una organización a través de un chatbot',
    texto:
      'La primera aparición pública del caso, un año después de tomar el producto. El título ya decía lo que iba a pasar después: el chatbot como excusa para cambiar la organización.',
    fuentes: ['chattigo2023'],
    video: 'https://www.youtube.com/watch?v=XdqDZ8s6EYI',
    foto: {
      src: '/fotos/yt-XdqDZ8s6EYI.jpg',
      alt: 'Portada de la charla sobre BIT transformando una organización',
      ancho: 1280,
      alto: 720,
    },
  },
]
