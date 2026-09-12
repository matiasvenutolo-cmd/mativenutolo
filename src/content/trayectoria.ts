import type { FuenteId } from './fuentes'

export type Etapa = {
  /** Año de inicio, tal como se muestra */
  anio: string
  /** Etiqueta corta sobre la línea */
  etiqueta: string
  /** Titular de la etapa cuando se expande */
  titulo: string
  /** Una línea. Lo que se lee sin entrar a ningún lado. */
  sintesis: string
  /** Dos o tres frases. Nada más: el detalle largo vive en /trayectoria */
  texto: string
  /** Posición 0–1 sobre la rampa cromática */
  paso: number
  fuentes?: FuenteId[]
}

export const ETAPAS: Etapa[] = [
  {
    anio: '2013',
    sintesis: 'Administración y sistemas, en el ITBA.',
    etiqueta: 'Negocio + Tecnología',
    titulo: 'Elegí el puente antes de que fuera un puesto',
    texto:
      'Estudié una carrera que unía administración y sistemas, cuando la inteligencia artificial todavía no formaba parte de ninguna conversación de negocio. La idea de fondo era la misma que sigo usando: entender cómo funciona una empresa y entender cómo funciona la tecnología no son dos trabajos distintos.',
    paso: 0,
  },
  {
    anio: '2014',
    sintesis: 'Entra al banco por testing. Cuatro años adentro de los sistemas.',
    etiqueta: 'Sistemas bancarios',
    titulo: 'Cuatro años mirando un banco por dentro',
    texto:
      'Entré a un banco por testing. Aprendí cómo funciona de verdad una organización financiera: los sistemas heredados, la infraestructura interna, las razones históricas detrás de cada proceso raro. Es conocimiento que no se adquiere desde afuera y que después explica por qué algunas transformaciones funcionan y otras no.',
    paso: 0.16,
  },
  {
    anio: '2019',
    sintesis: 'Canales digitales. Incidentes, causa raíz y una migración de core.',
    etiqueta: 'Canales digitales',
    titulo: 'De apagar incendios a preguntar por qué se prenden',
    texto:
      'Pasé a canales digitales, alrededor del home banking. Me metí de lleno en la gestión de incidentes: trabajar con los desarrolladores, encontrar la causa raíz y devolver el problema a producto o a ingeniería para que se resolviera en el origen en lugar de parchearse otra vez. También participé de una migración de core bancario y del apagado de sistemas heredados.',
    paso: 0.34,
  },
  {
    anio: '2021',
    sintesis: 'Conduce un equipo de desarrollo con especialistas de décadas.',
    etiqueta: 'Liderazgo de equipos',
    titulo: 'Liderar gente que sabe más que uno',
    texto:
      'Tomé un equipo de desarrollo con especialistas que acumulaban décadas en su tema. Ahí aprendí que conducir no es ser el que más sabe de cada cosa, y que el contexto que le das a un equipo pesa más que el detalle técnico que podés aportarle.',
    paso: 0.5,
  },
  {
    anio: '2022',
    sintesis: 'Product Owner de bit.',
    etiqueta: 'Producto y cliente',
    titulo: 'Product Owner de bit',
    texto:
      'Me postulé y quedé como Product Owner del canal conversacional del banco. Fue el punto de inflexión: por primera vez negocio, cliente, producto, dato y tecnología estaban sobre la misma mesa y eran mi responsabilidad al mismo tiempo.',
    paso: 0.66,
    fuentes: ['chattigo'],
  },
  {
    anio: '2023',
    sintesis: 'bit llega a WhatsApp. Dos reconocimientos PAMOIC.',
    etiqueta: 'Dato e IA',
    titulo: 'El canal se vuelve una plataforma',
    texto:
      'bit llegó a WhatsApp y dejó de ser un bot de consultas para resolver trámites completos. Cada conversación empezó a generar datos sobre qué necesitaban los clientes, y esos datos abrieron la puerta a la automatización y a los primeros agentes. Ese mismo año el caso recibió dos reconocimientos PAMOIC.',
    paso: 0.82,
    fuentes: ['iprofesional', 'pamoic'],
  },
  {
    anio: '2025',
    sintesis: 'Centro de Excelencia en IA. Diez agentes en producción y un retorno medido en dólares.',
    etiqueta: 'Transformación organizacional',
    titulo: 'De un producto a una capacidad de toda la empresa',
    texto:
      'El trabajo dejó de ser un canal y pasó a ser una capacidad instalada: un centro de excelencia, una hoja de ruta, agentes en producción y un retorno que se puede explicar en una reunión de directorio. Hoy dirijo inteligencia artificial y automatización.',
    paso: 1,
    fuentes: ['microsoftEs', 'podcast'],
  },
]
