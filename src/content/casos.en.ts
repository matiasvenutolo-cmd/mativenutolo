import type { Caso } from './casos'

export const CASOS_EN: Caso[] = [
  {
    slug: 'bit',
    titulo: 'bit',
    rotulo: "Conversational channel · Banco Ciudad",
    bajada:
      'A channel born with an owner in 2022 that today resolves more than sixty transactions, generating the data used to redesign processes.',
    periodo: '2022 → today',
    rol: 'Product Owner since the product’s origin',
    fuentes: ['iprofesional', 'pamoic', 'meta', 'chattigo'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          "In 2022 I took over bit, Banco Ciudad's conversational channel, as Product Owner. From day one I chose not to look at how many inquiries it answered: I chose to look at what full transaction it could resolve without the customer having to call, go to a branch, or wait.",
      },
      { tipo: 'subtitulo', texto: 'Follow the process, not just the conversation' },
      {
        tipo: 'parrafo',
        texto:
          "This is what I mean when I talk about starting with the customer and following the process. The conversation is the surface. Underneath there's a workflow that sometimes exists for a reason that no longer applies, and nobody reviewed it because there was never a reason to.",
      },
      { tipo: 'subtitulo', texto: 'Go where the customer is' },
      {
        tipo: 'parrafo',
        texto:
          "In 2023 bit reached WhatsApp. It wasn't a channel decision: it was accepting that the customer won't open a separate app to do something they can already do in the one they use every day. That same year, the case received two PAMOIC recognitions.",
      },
      {
        tipo: 'nota',
        texto:
          'The two 2023 PAMOIC recognitions were awarded to Banco de la Ciudad de Buenos Aires for the bit case: Silver in Best Citizen Sector Operations Strategy and Bronze in Best Customer Experience Strategy. These are awards to the institution and the team, not to one person.',
      },
      { tipo: 'subtitulo', texto: 'What changed, measured' },
      {
        tipo: 'dato',
        valor: '+51%',
        rotulo: 'WhatsApp interactions',
        fuente: 'meta',
        nota: 'Measured between January 1 and June 8, 2025.',
      },
      {
        tipo: 'dato',
        valor: '−15 pts',
        rotulo: 'Handoffs to a human agent',
        fuente: 'meta',
      },
      {
        tipo: 'dato',
        valor: '+18 pts',
        rotulo: 'Customer satisfaction',
        fuente: 'meta',
      },
      {
        tipo: 'dato',
        valor: '60+',
        rotulo: 'Transactions the channel resolves',
        fuente: 'meta',
      },
      {
        tipo: 'parrafo',
        texto:
          "Of those four figures, the second matters to me the most. Fewer handoffs to a person doesn't mean less attention: it means the channel stopped being a waiting room. The person is left for what actually needs judgment, which is where they add value.",
      },
      { tipo: 'subtitulo', texto: 'The channel starts returning data' },
      {
        tipo: 'parrafo',
        texto:
          "Every conversation says what someone needs and exactly where it breaks down. Aggregated, that's a friction map of the entire bank, built by the customers themselves without anyone surveying them. That data is what later comes back to the organization as automation and as agents, inside and outside bit.",
      },
      {
        tipo: 'parrafo',
        texto:
          "That's where this case stops being a product case. A channel that also generates the input to redesign processes is something else: it's a capability.",
      },
    ],
  },

  {
    slug: 'centro-de-excelencia',
    titulo: 'AI Center of Excellence',
    rotulo: 'Organizational capability · Banco Ciudad',
    bajada:
      'How an AI capability gets built inside a bank, with a roadmap, agents in production, and a return conversation.',
    periodo: '2024 → today',
    rol: 'Led it as Head of the AI Center of Excellence',
    fuentes: ['microsoftEs', 'microsoftEn', 'agentsOfChange'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          "A center of excellence isn't a team that knows a technology. It's the place where you decide where to apply it, what criteria to use to prioritize, and how what's an experiment today becomes something the rest of the company can use tomorrow without asking permission.",
      },
      {
        tipo: 'cita',
        texto:
          'We defined a clear strategy with Microsoft 365 Copilot to make productivity more efficient, we also brought in Copilot Studio to develop specific agents, and we scaled with solutions on Microsoft Azure. This structure let us roll out an organized, effective roadmap to integrate AI at every level of the bank.',
        quien: 'Matias Venutolo (translated from Spanish)',
        fuente: 'microsoftEs',
      },
      { tipo: 'subtitulo', texto: 'Architecture first, then the use cases' },
      {
        tipo: 'parrafo',
        texto:
          "The core decision was defining three layers before building: productivity for everyone, specific agents for concrete processes, and a platform for whatever needs to scale. Without that definition, each area solves it on its own, and six months later there are ten solutions that don't fit together. The cost of that missing definition isn't visible at first: it's paid later, when everything has to be integrated.",
      },
      { tipo: 'subtitulo', texto: 'What came out of it' },
      {
        tipo: 'dato',
        valor: '10+',
        rotulo: 'Agents developed in six months',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: '2,400',
        rotulo: 'Annual hours redirected to higher-value work',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: 'USD 14,500',
        rotulo: 'Monthly savings from sentiment analysis in the call center',
        fuente: 'microsoftEs',
      },
      {
        tipo: 'dato',
        valor: '70,000',
        rotulo: 'Customer interactions analyzed per month',
        fuente: 'microsoftEn',
      },
      {
        tipo: 'dato',
        valor: '90%',
        rotulo: 'Internal approval rate for card and loan agents',
        fuente: 'microsoftEn',
      },
      {
        tipo: 'dato',
        valor: 'USD 75,000',
        rotulo: 'Total estimated monthly impact',
        fuente: 'microsoftEn',
        nota: 'A projection published in the case study, not a result already achieved.',
      },
      { tipo: 'subtitulo', texto: 'The conversation you have to be able to have' },
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
          "That sentence is the whole point. An AI initiative that can't be explained in terms of cost, return, and scale doesn't reach the board, and what doesn't reach the board doesn't get funded past the first burst of enthusiasm. Translating the technology into that language isn't internal marketing: it's the condition for the transformation to outlast one budget cycle.",
      },
      {
        tipo: 'parrafo',
        texto:
          "It also doesn't hold up without support from leadership. A new capability cuts across areas that don't report to the same person, and without someone above holding the priority, every intersection turns into a negotiation.",
      },
      { tipo: 'subtitulo', texto: 'External recognition' },
      {
        tipo: 'parrafo',
        texto:
          "In 2025 the bank was recognized as an Agent of Change for its innovative use of artificial intelligence. The value of a recognition like that isn't the award itself: it's that someone outside, looking at many organizations at once, reached the same conclusion we did about what was happening inside.",
      },
    ],
  },

  {
    slug: 'crac',
    titulo: 'CRAC',
    rotulo: 'Employee experience · Banco Ciudad',
    bajada:
      'An internal assistant with generative AI over WhatsApp. Artificial intelligence, automation, and a person supervising where judgment is needed.',
    periodo: '2024 → today',
    rol: 'Part of the AI Center of Excellence scope',
    fuentes: ['cronista', 'iproup'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          "Most AI transformations are designed looking at the customer. CRAC looks inward: it answers administrative, legal, and benefits questions from the bank's own employees, on WhatsApp, any day, any time.",
      },
      {
        tipo: 'parrafo',
        texto:
          "Before, resolving something as simple as how many vacation days were left could mean a call, an email, and a form. What changed isn't the answer: it's that the answer now arrives when the person needs it, not when the office opens.",
      },
      { tipo: 'subtitulo', texto: "The human doesn't disappear, they move" },
      {
        tipo: 'parrafo',
        texto:
          "The assistant generates the answer and people shift to supervising and improving it. When a query goes beyond what it can resolve, it hands off to someone. That combination of automatic generation, integration with the systems, and human judgment where it's needed is, to me, the right way to apply this technology to an internal process.",
      },
      { tipo: 'subtitulo', texto: 'Why this case matters more than it looks' },
      {
        tipo: 'dato',
        valor: '80%+',
        rotulo: 'of bank employees use it',
        fuente: 'iproup',
      },
      {
        tipo: 'parrafo',
        texto:
          "An internal tool adopted by the vast majority of people without anyone forcing it proves something no presentation can prove: that the technology solved a problem people actually had. That result is what led the bank to institutionalize the approach instead of treating it as an isolated experiment.",
      },
      {
        tipo: 'parrafo',
        texto:
          "That's how adoption gets built. Not with a central mandate, but with a case the person next to you saw work.",
      },
    ],
  },

  {
    slug: 'ai-first',
    titulo: 'AI First',
    rotulo: 'Culture and capability · Banco Ciudad',
    bajada:
      "Getting the entire organization to look at its own work and find a different way to solve it.",
    periodo: '2024 → today',
    rol: 'Part of the AI Center of Excellence scope',
    fuentes: ['academia', 'iproup', 'microsoftEs'],
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          "AI First isn't handing out licenses. It's building a shared capability so that anyone, in any area, can look at a task they've repeated for years and ask whether there's a different way to solve it. The question is the product.",
      },
      {
        tipo: 'parrafo',
        texto:
          "When the capability really exists, artificial intelligence stops being a technical-department topic and shows up wherever it's needed: in training, in operations, in human resources, in technology. Not because a plan says so, but because the people working there already know how to recognize when it's useful.",
      },
      { tipo: 'subtitulo', texto: 'Adoption spreads through people' },
      {
        tipo: 'parrafo',
        texto:
          "Visible examples do more than announcements. When someone outside the technical area builds their own solution and it solves a concrete problem for them, they become a reference for their team without anyone naming them, and the transformation stops needing to be pushed from the center.",
      },
      { tipo: 'subtitulo', texto: 'The AI Academy' },
      {
        tipo: 'parrafo',
        texto:
          "The capability doesn't get installed with an announcement. It gets installed by teaching. The bank's AI Academy is the program where teams learn to use this technology with their own problems on the table, and it doesn't end with a certificate: it ends with every participant having built something.",
      },
      {
        tipo: 'dato',
        valor: '500+',
        rotulo: 'Employees who went through the Academy, each with their own AI agent',
        fuente: 'academia',
      },
      {
        tipo: 'parrafo',
        texto:
          "The part that matters most to me is how it's taught. Making the technology approachable, even fun, taking the intimidating edge off it, is what lets someone outside the technical area give it a try. And that person is the one who later looks at their own work differently.",
      },
      { tipo: 'subtitulo', texto: 'Prove it before over-engineering it' },
      {
        tipo: 'parrafo',
        texto:
          "The method I use is always the same: understand, simplify, prototype, show it works, learn, scale, industrialize. First prove that something can be done; then build everything needed to make it real and secure.",
      },
      {
        tipo: 'parrafo',
        texto:
          "It's not about rushing. It's about lowering the cost of being wrong before asking an entire organization to change how it works.",
      },
    ],
  },
]

export function getCasoEn(slug: string) {
  return CASOS_EN.find((c) => c.slug === slug)
}
