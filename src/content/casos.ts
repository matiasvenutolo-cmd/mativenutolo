import type { FuenteId } from './fuentes'

export type Bloque =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'subtitulo'; texto: string }
  | { tipo: 'cita'; texto: string; quien: string; fuente: FuenteId }
  | { tipo: 'dato'; valor: string; rotulo: string; fuente: FuenteId; nota?: string }
  | { tipo: 'nota'; texto: string }

export type Caso = {
  slug: string
  titulo: string
  rotulo: string
  bajada: string
  periodo: string
  rol: string
  fuentes: FuenteId[]
  bloques: Bloque[]
}

export const CASOS: Caso[] = [
  {
    slug: 'bit',
    titulo: 'BIT',
    rotulo: 'Canal conversacional · Banco Ciudad',
    bajada:
      'De un bot de preguntas frecuentes a un canal que resuelve más de sesenta trámites y genera el dato con el que se diseñan los procesos.',
    periodo: '2017 → hoy',
    rol: 'Product Owner desde 2022',
    fuentes: ['itsitio', 'iprofesional', 'pamoic', 'meta', 'chattigo'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'En 2017 el banco puso en línea un asistente capaz de responder consultas frecuentes sobre préstamos, cuentas y trámites, construido sobre servicios cognitivos y una base de conocimiento. Funcionaba: contestaba. Pero contestar y resolver no son lo mismo, y la diferencia entre las dos cosas es todo este caso.',
      },
      { tipo: 'subtitulo', texto: 'La pregunta cambia' },
      {
        tipo: 'parrafo',
        texto:
          'Cuando tomé el producto en 2022, la métrica que se miraba era cuántas consultas contestaba el bot. La cambiamos por otra: qué trámite completo podría resolver sin que el cliente tenga que llamar, ir a una sucursal o esperar. Esa pregunta obliga a salir del canal y a meterse en el proceso de atrás, que es donde vive el problema real.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Esto es lo que quiero decir cuando hablo de empezar por el cliente y seguir el proceso. La conversación es la superficie. Abajo hay un circuito que a veces existe por una razón que ya no se cumple, y que nadie revisó porque nunca hubo un motivo para hacerlo.',
      },
      { tipo: 'subtitulo', texto: 'Ir adonde está el cliente' },
      {
        tipo: 'parrafo',
        texto:
          'En 2023 BIT dejó el sitio del banco y se mudó a WhatsApp. No fue una decisión de canal: fue aceptar que el cliente no va a entrar a un sitio para hacer algo que puede hacer en la aplicación donde ya está. Ese mismo año el caso recibió dos reconocimientos PAMOIC.',
      },
      {
        tipo: 'nota',
        texto:
          'Los dos reconocimientos PAMOIC 2023 fueron otorgados al Banco de la Ciudad de Buenos Aires por el caso BIT: Plata en Mejor Estrategia de Operación Sector Ciudadano y Bronce en Mejor Estrategia en Customer Experience. Son premios a la institución y al equipo, no a una persona.',
      },
      { tipo: 'subtitulo', texto: 'Lo que cambió, medido' },
      {
        tipo: 'dato',
        valor: '+51 %',
        rotulo: 'Interacciones por WhatsApp',
        fuente: 'meta',
        nota: 'Medido entre el 1 de enero y el 8 de junio de 2025.',
      },
      {
        tipo: 'dato',
        valor: '−15 pts',
        rotulo: 'Derivaciones a un agente humano',
        fuente: 'meta',
      },
      {
        tipo: 'dato',
        valor: '+18 pts',
        rotulo: 'Satisfacción del cliente',
        fuente: 'meta',
      },
      {
        tipo: 'dato',
        valor: '60+',
        rotulo: 'Trámites que resuelve el canal',
        fuente: 'meta',
      },
      {
        tipo: 'parrafo',
        texto:
          'La cifra que más me importa de esas cuatro es la segunda. Menos derivaciones a una persona no significa menos atención: significa que el canal dejó de ser una sala de espera. La persona queda para lo que necesita criterio, que es donde suma.',
      },
      { tipo: 'subtitulo', texto: 'El canal empieza a devolver datos' },
      {
        tipo: 'parrafo',
        texto:
          'Cada conversación dice qué necesita alguien y en qué punto exacto se traba. Acumulado, eso es un mapa de fricción del banco entero, construido por los propios clientes sin que nadie los encueste. Ese dato es el que después vuelve a la organización como automatización y como agentes, dentro y fuera de BIT.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Ahí es donde este caso deja de ser un caso de producto. Un canal que además genera el insumo para rediseñar procesos es otra cosa: es una capacidad.',
      },
    ],
  },

  {
    slug: 'centro-de-excelencia',
    titulo: 'Centro de Excelencia en IA',
    rotulo: 'Capacidad organizacional · Banco Ciudad',
    bajada:
      'Cómo se construye una capacidad de inteligencia artificial dentro de un banco, con hoja de ruta, agentes en producción y una conversación de retorno.',
    periodo: '2024 → hoy',
    rol: 'Lo lideré como Líder del Centro de Excelencia en IA',
    fuentes: ['microsoftEs', 'microsoftEn', 'agentsOfChange'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Un centro de excelencia no es un equipo que sabe de una tecnología. Es el lugar donde se decide dónde aplicarla, con qué criterio se prioriza y cómo lo que hoy es un experimento se convierte mañana en algo que el resto de la empresa puede usar sin pedir permiso.',
      },
      {
        tipo: 'cita',
        texto:
          'Definimos una estrategia clara con Microsoft 365 Copilot para eficientizar la productividad, también incorporamos Copilot Studio para el desarrollo de agentes específicos y escalamos con soluciones en Microsoft Azure. Esta estructura nos permitió desplegar una hoja de ruta ordenada y efectiva para integrar IA en todos los niveles del banco.',
        quien: 'Matias Venutolo',
        fuente: 'microsoftEs',
      },
      { tipo: 'subtitulo', texto: 'Primero la arquitectura, después los casos' },
      {
        tipo: 'parrafo',
        texto:
          'La decisión de fondo fue definir las tres capas antes de construir: productividad para todos, agentes específicos para procesos concretos y plataforma para lo que necesita escalar. Sin esa definición, cada área resuelve por su cuenta y a los seis meses hay diez soluciones que no encajan entre sí. El costo de esa falta de definición no se ve al principio: se paga después, cuando hay que integrarlas.',
      },
      { tipo: 'subtitulo', texto: 'Lo que salió' },
      {
        tipo: 'dato',
        valor: '10+',
        rotulo: 'Agentes desarrollados en seis meses',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: '2.400',
        rotulo: 'Horas anuales redirigidas a tareas de más valor',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: 'USD 14.500',
        rotulo: 'Ahorro mensual por análisis de sentimiento en el call center',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: '70.000',
        rotulo: 'Interacciones con clientes analizadas por mes',
        fuente: 'microsoftEn',
      },
      {
        tipo: 'dato',
        valor: '90 %',
        rotulo: 'Aprobación interna de los agentes en tarjetas y préstamos',
        fuente: 'microsoftEn',
      },
      {
        tipo: 'dato',
        valor: 'USD 75.000',
        rotulo: 'Impacto mensual total estimado',
        fuente: 'microsoftEn',
        nota: 'Es una proyección publicada en el caso, no un resultado alcanzado.',
      },
      { tipo: 'subtitulo', texto: 'La conversación que hay que poder tener' },
      {
        tipo: 'cita',
        texto:
          'Today, with the same team and more solutions, we’re generating a return seven times greater than the cost.',
        quien: 'Matias Venutolo',
        fuente: 'microsoftEn',
      },
      {
        tipo: 'parrafo',
        texto:
          'Esa frase es el punto. Una iniciativa de inteligencia artificial que no puede explicarse en términos de costo, retorno y escala no llega al directorio, y lo que no llega al directorio no se financia más allá del primer entusiasmo. Traducir la tecnología a ese idioma no es marketing interno: es la condición para que la transformación dure más de un ciclo presupuestario.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Tampoco se sostiene sin respaldo de la conducción. Una capacidad nueva atraviesa áreas que no dependen de la misma persona, y sin alguien arriba que sostenga la prioridad, cada cruce se convierte en una negociación.',
      },
      { tipo: 'subtitulo', texto: 'Reconocimiento externo' },
      {
        tipo: 'parrafo',
        texto:
          'En 2025 el banco fue reconocido como Agente de Cambio por su uso innovador de inteligencia artificial. El valor de un reconocimiento así no es el premio: es que alguien de afuera, mirando muchas organizaciones a la vez, llegó a la misma conclusión que nosotros sobre lo que estaba pasando adentro.',
      },
    ],
  },

  {
    slug: 'crac',
    titulo: 'CRAC',
    rotulo: 'Experiencia del empleado · Banco Ciudad',
    bajada:
      'Un asistente interno con IA generativa sobre WhatsApp. Inteligencia artificial, automatización y una persona supervisando donde hace falta criterio.',
    periodo: '2024 → hoy',
    rol: 'Parte del alcance del Centro de Excelencia en IA',
    fuentes: ['cronista', 'iproup'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La mayoría de las transformaciones con inteligencia artificial se piensan mirando al cliente. CRAC mira hacia adentro: responde consultas administrativas, legales y de beneficios de los propios empleados del banco, en WhatsApp, cualquier día y a cualquier hora.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Antes, resolver algo tan simple como cuántos días de licencia quedaban disponibles podía implicar un llamado, un correo y un formulario. Lo que cambió no es la respuesta: es que ahora la respuesta llega cuando la persona la necesita y no cuando la oficina abre.',
      },
      { tipo: 'subtitulo', texto: 'El humano no desaparece, cambia de lugar' },
      {
        tipo: 'parrafo',
        texto:
          'El asistente genera la respuesta y las personas pasan a supervisar y mejorar. Cuando la consulta excede lo que puede resolver, deriva a alguien. Esa combinación de generación automática, integración con los sistemas y criterio humano donde hace falta es, para mí, la forma correcta de aplicar esta tecnología a un proceso interno.',
      },
      { tipo: 'subtitulo', texto: 'Por qué este caso importa más de lo que parece' },
      {
        tipo: 'dato',
        valor: '80 %+',
        rotulo: 'De los empleados del banco lo usan',
        fuente: 'iproup',
      },
      {
        tipo: 'parrafo',
        texto:
          'Una herramienta interna que adopta la enorme mayoría de la gente sin que nadie la obligue prueba algo que ninguna presentación prueba: que la tecnología resolvió un problema que la gente efectivamente tenía. Ese resultado fue lo que llevó al banco a institucionalizar el enfoque en lugar de tratarlo como un experimento aislado.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Así se construye adopción. No con un mandato central, sino con un caso que el de al lado vio funcionar.',
      },
    ],
  },

  {
    slug: 'ai-first',
    titulo: 'AI First',
    rotulo: 'Cultura y capacidad · Banco Ciudad',
    bajada:
      'Que la organización entera aprenda a mirar su propio trabajo y encontrar una forma distinta de resolverlo.',
    periodo: '2024 → hoy',
    rol: 'Parte del alcance del Centro de Excelencia en IA',
    fuentes: ['academia', 'iproup', 'microsoftEs'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'AI First no es repartir licencias. Es construir una capacidad común para que cualquier persona, en cualquier área, pueda mirar una tarea que repite desde hace años y preguntarse si hay una forma distinta de resolverla. La pregunta es el producto.',
      },
      {
        tipo: 'parrafo',
        texto:
          'Cuando la capacidad existe de verdad, la inteligencia artificial deja de ser un tema del área técnica y aparece donde se necesita: en capacitación, en operaciones, en recursos humanos, en tecnología. No porque haya un plan que lo indique, sino porque la gente que trabaja ahí ya sabe reconocer cuándo sirve.',
      },
      { tipo: 'subtitulo', texto: 'La adopción se expande por personas' },
      {
        tipo: 'parrafo',
        texto:
          'Los ejemplos visibles hacen más que los comunicados. Cuando alguien que no es del área técnica arma su propia solución y le resuelve un problema concreto, se convierte en referente de su equipo sin que nadie lo nombre, y la transformación deja de necesitar que la empujen desde el centro.',
      },
      { tipo: 'subtitulo', texto: 'La Academia de IA' },
      {
        tipo: 'parrafo',
        texto:
          'La capacidad no se instala con un comunicado. Se instala enseñando. La Academia de IA del banco es el programa donde los equipos aprenden a usar esta tecnología con sus propios problemas sobre la mesa, y no termina con una certificación: termina con cada participante habiendo construido algo.',
      },
      {
        tipo: 'dato',
        valor: '500+',
        rotulo: 'Colaboradores que pasaron por la Academia, cada uno con su propio agente de IA',
        fuente: 'academia',
      },
      {
        tipo: 'parrafo',
        texto:
          'La parte que más me importa es cómo se enseña. Acercar la tecnología de forma amigable y hasta divertida, sacándole el costado intimidante, es lo que hace que alguien que no es del área técnica se anime. Y esa persona, después, es la que mira su propio trabajo distinto.',
      },
      { tipo: 'subtitulo', texto: 'Probar antes de sobre-construir' },
      {
        tipo: 'parrafo',
        texto:
          'El método que uso es siempre el mismo: entender, simplificar, prototipar, mostrar que funciona, aprender, escalar, industrializar. Primero demostrar que algo se puede hacer; después construir todo lo necesario para que sea real y seguro.',
      },
      {
        tipo: 'parrafo',
        texto:
          'No es hacer las cosas apuradas. Es bajar el costo de equivocarse antes de pedirle a una organización entera que cambie cómo trabaja.',
      },
    ],
  },
]

export function getCaso(slug: string) {
  return CASOS.find((c) => c.slug === slug)
}
