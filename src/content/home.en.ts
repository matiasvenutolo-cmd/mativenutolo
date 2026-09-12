import type { Capacidad, FaseBit, CasoBreve, Idea, Aparicion } from './home'

/* ---------- What I build ---------- */

export const CAPACIDADES_EN: Capacidad[] = [
  {
    clave: 'ai-first',
    titulo: 'AI First culture',
    resumen:
      'Getting the whole organization to ask whether something could be done differently. It is not about giving access to tools: it is about installing a way of looking at problems.',
    prueba:
      'CRAC, the internal assistant, is used by more than eight out of ten bank employees. That result is what led to institutionalizing the approach.',
    fuentes: ['iproup', 'cronista'],
    href: '/en/casos/ai-first',
    foto: {
      src: '/fotos/academia-ia.jpg',
      alt: 'Matias Venutolo teaching a class at Banco Ciudad’s AI Academy',
    },
  },
  {
    clave: 'cliente-proceso',
    titulo: 'Customer → process → AI',
    resumen:
      'Start from the need, follow the process end to end, and only then decide where automation fits. The human stays where their judgment adds something.',
    prueba:
      'bit went from answering questions to resolving more than sixty transactions, with fewer handoffs to a human agent and higher satisfaction.',
    fuentes: ['meta'],
    href: '/en/casos/bit',
    foto: {
      src: '/fotos/adrha.jpg',
      alt: 'Matias Venutolo speaking with a microphone during a panel at ADRHA',
    },
  },
  {
    clave: 'estrategia',
    titulo: 'AI strategy',
    resumen:
      'Deciding where to apply it, how to organize the capability, in what order to prioritize, and how to turn scattered experiments into a roadmap that holds.',
    prueba:
      'More than ten agents in production in six months, built on an architecture defined from the start instead of assembled by accumulation.',
    fuentes: ['microsoftEs'],
    href: '/en/casos/centro-de-excelencia',
    foto: {
      src: '/fotos/microsoft-argentina.jpg',
      alt: "Matias Venutolo presenting Banco Ciudad's AI First transformation at Microsoft's offices",
    },
  },
]

/* ---------- bit, phase by phase ---------- */

export const BIT_FASES_EN: FaseBit[] = [
  {
    clave: 'canal',
    fase: 'Channel',
    anio: '2022',
    titulo: 'Born with an owner and a roadmap',
    linea:
      "bit starts as the bank's conversational channel, with a Product Owner from day one. The question that defines it: what transaction can it resolve completely without the customer having to call.",
    fuentes: ['chattigo'],
  },
  {
    clave: 'producto',
    fase: 'Product',
    anio: '2023',
    titulo: 'Moves to WhatsApp',
    linea:
      "It goes where the customer already is. The case receives two PAMOIC awards: Silver in Citizen Sector and Bronze in Customer Experience.",
    cifras: [{ valor: '2', rotulo: 'PAMOIC awards' }],
    fuentes: ['iprofesional', 'pamoic'],
  },
  {
    clave: 'plataforma',
    fase: 'Platform',
    anio: '2025',
    titulo: 'More than sixty transactions',
    linea:
      'Appointments, card activation, delivery tracking, balances, transactions, complaints.',
    cifras: [
      { valor: '+51%', rotulo: 'interactions' },
      { valor: '−15 pts', rotulo: 'handoffs to a human' },
      { valor: '+18 pts', rotulo: 'satisfaction' },
      { valor: '60+', rotulo: 'transaction types' },
    ],
    fuentes: ['meta'],
  },
  {
    clave: 'ia',
    fase: 'AI',
    anio: '2026',
    titulo: 'The data comes back as agents',
    linea:
      "Every conversation says what a customer needs and where a process breaks down. That data feeds automation inside and outside the channel.",
    fuentes: ['podcast'],
  },
]

/* ---------- Other cases ---------- */

export const OTROS_CASOS_EN: CasoBreve[] = [
  {
    slug: 'centro-de-excelencia',
    titulo: 'AI Center of Excellence',
    linea:
      'How an AI capability gets built inside a bank, with a roadmap, agents in production, and a return that can be measured in dollars.',
    fuentes: ['microsoftEs', 'microsoftEn'],
    disponible: true,
  },
  {
    slug: 'crac',
    titulo: 'CRAC',
    linea:
      'An internal assistant with generative AI over WhatsApp. AI, automation, and a person supervising where judgment is needed.',
    fuentes: ['cronista', 'iproup'],
    disponible: true,
  },
  {
    slug: 'ai-first',
    titulo: 'AI First',
    linea:
      'Organizational capability: training, technology, human resources, and operations, all pointing at the same place.',
    fuentes: ['iproup'],
    disponible: true,
  },
]

/* ---------- How I think ---------- */

export const IDEAS_EN: Idea[] = [
  {
    slug: 'una-metrica-no-es-la-mision',
    titulo: "A metric is not the mission",
    bajada: 'When the indicator becomes the goal, the system adapts to the indicator.',
    cuerpo: [
      "A metric exists to tell you whether things are going well. The moment it becomes the goal, it stops measuring and starts distorting: teams optimize for what gets measured and drop what matters, because what matters was never on the spreadsheet.",
      "The most uncomfortable case is an organization full of excellent teams that fails anyway. Each one is genuinely improving something, with effort and judgment, but what one team improves complicates the next team's work. No one is individually wrong, and the whole loses.",
      "That's why, before defining the indicator, you need to define the context: what are we actually trying to achieve as a company, and what behavior do we want this number to produce. If the number can be hit by doing something we don't want, the number was chosen badly.",
    ],
  },
  {
    slug: 'la-ia-no-es-del-area-de-tecnologia',
    titulo: "AI doesn't belong to the technology department",
    bajada: 'The best opportunities show up where someone understands business and technology at the same time.',
    cuerpo: [
      "When artificial intelligence is managed as a systems project, it ends up solving systems problems. What comes out is correct but doesn't change much, because whoever understands the customer's pain wasn't in the room when it was decided what to build.",
      "You don't fix this by having business hand over requirements. It gets fixed when someone can hold both conversations at once: understanding why a process exists and understanding what's technically possible today. That bridge isn't a coordination role — it's a capability.",
      "Technology isn't separate from people or processes either. An automation nobody adopts isn't an automation: it's a cost.",
    ],
  },
  {
    slug: 'probar-antes-de-sobre-construir',
    titulo: 'Prove it before over-engineering it',
    bajada: 'A prototype opens conversations a presentation never does.',
    cuerpo: [
      "First show that something can be done. Then build everything needed to make it real. In that order, because the reverse order commits months of work to an idea nobody has seen working yet.",
      "This isn't about rushing or skipping engineering. It's about lowering the cost of being wrong before asking an entire organization to change how it works. Once the idea holds up, the specialized teams make it robust, secure, and scalable — which is exactly their job.",
      "A long project that only shows results at the end isn't more rigorous. It's just a project that learns late.",
    ],
  },
  {
    slug: 'empeza-por-el-cliente',
    titulo: 'Start with the customer and follow the whole process',
    bajada: 'The agent is not the starting point.',
    cuerpo: [
      "The sequence that works is: customer need, experience, business process, automation, a person where judgment is needed, result. When you start from the end, you get an agent that serves a process that shouldn't exist that way in the first place.",
      "Following the process end to end is usually the uncomfortable part, because it cuts across areas that don't report to the same person. That's where you find out whether the transformation is real or just a coat of varnish over the same old thing.",
      "Automating for its own sake isn't the goal. The goal is for the customer to get what they came for.",
    ],
  },
  {
    slug: 'ai-first-empieza-por-las-personas',
    titulo: 'AI First starts with people',
    bajada: 'Technology alone doesn’t generate adoption.',
    cuerpo: [
      "AI First isn't handing everyone a license and waiting. It's building a shared capability so people start looking at the work they've done the same way for years and ask whether there's another way to solve it.",
      "Adoption spreads through visible examples, speed, and insiders who become references. A centralized mandate gets compliance; a case the person next to you saw actually work gets interest, which is a different thing.",
      "When someone outside the technical area builds their own agent and it solves a real problem for them, the transformation stops needing to be pushed.",
    ],
  },
  {
    slug: 'definiciones-compartidas',
    titulo: 'Without shared definitions, teams collide',
    bajada: 'Missing foundational definitions get paid for in contradictory solutions.',
    cuerpo: [
      "In a large organization, when a basic definition is missing, each team resolves it on its own. No one is individually wrong, but they end up building things that don't fit together, and the cost shows up months later, when everything has to be integrated.",
      "The definitions that are missing most often aren't technical. They're agreements about what counts as a customer, what counts as resolved, which data is the right one when two systems say different things.",
      "Defining that is slow and unglamorous, and it's what separates a transformation that scales from a collection of initiatives competing with each other.",
    ],
  },
]

/* ---------- In public ---------- */

export const APARICIONES_EN: Aparicion[] = [
  {
    fecha: 'August 2026',
    lugar: 'The Fintech Podcast',
    formato: 'Podcast',
    titulo: 'AI at Banco Ciudad, conversational agents, and transactional data',
    texto:
      "How the center of excellence was built, how the conversational agents evolved, and why transaction data, translated into plain language, changes the relationship with the customer.",
    fuentes: ['podcast'],
    video: 'https://www.youtube.com/watch?v=ZntRu7K3T_8',
    foto: {
      src: '/fotos/yt-ZntRu7K3T_8.jpg',
      alt: 'Cover image of the podcast episode about AI at Banco Ciudad',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: '2026',
    lugar: "Microsoft's offices, Buenos Aires",
    formato: 'Talk',
    titulo: 'Building an AI First organization',
    texto:
      "The bank's path with artificial intelligence told through three pillars: getting closer to the customer, making processes more efficient, and giving teams new tools. Also the challenges of scaling AI use responsibly.",
    fuentes: ['microsoftArg'],
    foto: {
      src: '/fotos/microsoft-argentina.jpg',
      alt: 'Matias Venutolo presenting in front of a screen reading AI First Transformation at Banco Ciudad',
      ancho: 1152,
      alto: 1536,
    },
  },
  {
    fecha: 'October 2025',
    lugar: 'Revolucia',
    formato: 'Conference',
    titulo: 'Why Banco Ciudad started using AI',
    texto:
      "How to implement artificial intelligence in a bank: which processes it changes, what improves in the customer experience, and where the real efficiency shows up. The full talk is published.",
    fuentes: ['revolucia', 'revoluciaVideo'],
    video: 'https://www.youtube.com/watch?v=RiX0te7gQOU',
    foto: {
      src: '/fotos/revolucia.jpg',
      alt: "Promotional piece for the Revolucia event announcing Matias Venutolo's talk on the Banco Ciudad case",
      ancho: 1080,
      alto: 1440,
    },
  },
  {
    fecha: '2025',
    lugar: 'Santiago, Chile',
    formato: 'Microsoft AI Tour',
    titulo: "Banco Ciudad's case in front of the region's financial and technology leaders",
    texto:
      "A presentation of a strategy that had started less than a year earlier and was already drawing interest as a regional reference.",
    fuentes: ['aiTour'],
    foto: {
      src: '/fotos/ai-tour-santiago.jpg',
      alt: 'Room at the Microsoft AI Tour in Santiago, Chile during the presentation of the case',
      ancho: 960,
      alto: 960,
    },
  },
  {
    fecha: 'November 2025',
    lugar: 'LinkUs Human Technology',
    formato: 'Meetup',
    titulo: 'Copilot GPS, session 2: the Banco Ciudad case',
    texto:
      'A session on Copilot adoption in a large organization, with the bank’s journey used as the reference case.',
    fuentes: ['linkus'],
    video: 'https://www.youtube.com/watch?v=xF2Y7v4HHCE',
    foto: {
      src: '/fotos/yt-xF2Y7v4HHCE.jpg',
      alt: 'Cover image for the Copilot GPS meetup featuring the Banco Ciudad case',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: '2025',
    lugar: 'ADRHA, Buenos Aires',
    formato: 'Panel',
    titulo: "Transforming people's day-to-day work with AI",
    texto:
      "In front of a human-resources audience, the internal impact of artificial intelligence: how it changes people's work before it changes the org chart.",
    fuentes: ['adrha', 'cronista'],
    foto: {
      src: '/fotos/adrha.jpg',
      alt: 'Matias Venutolo speaking with a microphone during a panel at ADRHA',
      ancho: 800,
      alto: 533,
    },
  },
  {
    fecha: 'December 2024',
    lugar: 'Chattigo',
    formato: 'Success story',
    titulo: 'Banco Ciudad',
    texto:
      "The channel's technology partner publishes the full case, telling bit's journey starting from the implementation.",
    fuentes: ['chattigo2024'],
    video: 'https://www.youtube.com/watch?v=6vxeeb9SiYQ',
    foto: {
      src: '/fotos/yt-6vxeeb9SiYQ.jpg',
      alt: "Cover image for Chattigo's Banco Ciudad success story",
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: 'August 2024',
    lugar: 'CFP Connections',
    formato: 'Presentation',
    titulo: "The bit case, Banco Ciudad's chatbot",
    texto:
      'The case presented to an external professional audience, with the channel already resolving full transactions rather than just answering questions.',
    fuentes: ['cfp2024'],
    video: 'https://www.youtube.com/watch?v=r7YVbo4ZjZQ',
    foto: {
      src: '/fotos/yt-r7YVbo4ZjZQ.jpg',
      alt: 'Cover image for the presentation of the bit case at CFP Connections',
      ancho: 1280,
      alto: 720,
    },
  },
  {
    fecha: 'October 2023',
    lugar: 'Chattigo',
    formato: 'Talk',
    titulo: 'bit, transforming an organization through a chatbot',
    texto:
      "The case's first public appearance, a year after taking over the product. The title already said what would happen next: the chatbot as an excuse to change the organization.",
    fuentes: ['chattigo2023'],
    video: 'https://www.youtube.com/watch?v=XdqDZ8s6EYI',
    foto: {
      src: '/fotos/yt-XdqDZ8s6EYI.jpg',
      alt: 'Cover image for the talk on bit transforming an organization',
      ancho: 1280,
      alto: 720,
    },
  },
]
