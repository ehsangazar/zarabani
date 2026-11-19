type Source = { id: string; title: string; url: string }
type Topic = { match: RegExp; answer: string; detail: string; sources: Source[] }
const about = [{ id: 'about', title: 'Experience & approach', url: '/about' }]
const projects = [{ id: 'projects', title: 'Explore the projects', url: '/projects' }]
const topics = {
  contact: { match: /\b(contact|email|hire|hiring|available|availability|salary|rates|book|reach)\b/i,
    answer: 'You can reach Zara at me@zarabani.design. She’s based in London and welcomes conversations about full-time UX roles, freelance and contract projects, and consulting. For current availability or rates, get in touch with her directly.',
    detail: 'Tell Zara a little about your team, the problem you’re working on, and what you have in mind. This demo can help you explore her background, but it can’t send messages or book meetings.', sources: [{ id: 'contact', title: 'Get in touch', url: '/contact' }] },
  altrata: { match: /\b(altrata|boolean|prospect|edge|wealth-x|boardex|relsci)\b/i,
    answer: 'At Altrata, Zara designs for a unified data intelligence platform bringing RelSci, Wealth-X and BoardEx together. Her Boolean search work makes complex queries easier to build and control. The public project summary reports 64% less time to create an actionable prospect list and 42% Boolean adoption among multi-filter search users within 45 days.',
    detail: 'The public summary also reports that 72% of Boolean queries led to a meaningful downstream action. Her AI search work explores translating natural-language intent into structured filters that stay visible, editable and verifiable. That AI search case study is coming soon; the full Boolean case study requires access.', sources: projects },
  betterboard: { match: /\b(betterboard|immigration)\b/i,
    answer: 'At BetterBoard, Zara owned end-to-end design for an AI-powered practice-management platform for regulated Canadian immigration professionals. Her work supported practitioner review, visible reasoning and clear uncertainty. Her public experience summary reports 28% higher case-processing throughput and a 70% improvement in first-pass submission accuracy.',
    detail: 'The emphasis was on helping professionals review AI suggestions with confidence. The About page also reports a 30% reduction in workflow friction. For details beyond the public summary, contact Zara.', sources: about },
  library: { match: /\b(librar\w*|isbn|tarsim|book entry)\b/i,
    answer: 'Zara redesigned a B2B SaaS library management system around librarians’ daily work, rather than its database structure. The public project summary describes a platform used by 128 institutional libraries, with approximately 35% less time spent completing librarian tasks and a mobile ISBN-scanning companion.',
    detail: 'Her approach combined observational research, qualitative surveys and information architecture. Mobile ISBN scanning moved book entry from the desk to the shelf. This is distinct from her separate Library Platform Redesign for 14 libraries.', sources: projects },
  omaia: { match: /\b(omaia|postpartum|mother\w*)\b/i,
    answer: 'Omaia is a product supporting postpartum mothers. Zara led research through to MVP design, focusing on emotional support and engagement, and validated the approach through user testing.',
    detail: 'The public summary covers Zara’s research-to-MVP role and user testing. The full case study requires access, so this demo doesn’t include deeper research findings or clinical outcome claims.', sources: projects },
  learning: { match: /\b(learning|education|student\w*|edtech|lesson\w*)\b/i,
    answer: 'The focused learning hub brings one structured learning flow to 10,000+ students. Its public project summary reports a 35% reduction in lesson completion time and 81% adoption within the first three months.',
    detail: 'The project focuses on creating a clearer, more focused learning experience. Those outcomes come from the public project card; the full case study requires access.', sources: projects },
  ai: { match: /\b(ai|artificial intelligence|llm|claude|codex|prototype\w*|prototyping|tools|figma)\b/i,
    answer: 'Zara works on AI-enabled products with a focus on trust: making reasoning visible, showing uncertainty, and helping people verify and correct results. At Altrata she contributes to Edge, an assistant that turns natural-language intent into editable queries. At BetterBoard she designed workflows with practitioner review of AI suggestions.',
    detail: 'She also uses functional code prototypes and tools including Figma, Claude Code and Codex to explore interactions before engineering commits to a direction. Her public Altrata experience summary reports an 80% reduction in concept iteration time through AI-assisted prototyping.', sources: about },
  approach: { match: /\b(approach|process|research|problem|think\w*|collaborat\w*|accessibility|design system\w*)\b/i,
    answer: 'Zara starts with curiosity: understand the problem behind the request, who it affects, and why it matters. She then makes trade-offs explicit across user value, business impact and technical feasibility. From there, she prototypes, tests risky assumptions and uses feedback to guide what ships.',
    detail: 'She combines research, systems thinking and close collaboration with product and engineering. Rather than treating each feature in isolation, she looks for reusable patterns and scalable workflows. For AI products, verification, correction and recovery are central to that approach.', sources: about },
  experience: { match: /\b(experience|background|career|skills|team|fit|about|who|resume|résumé)\b/i,
    answer: 'Zara is a London-based Product Designer with 5+ years working on complex digital products across B2B SaaS, B2C and enterprise platforms. Her experience includes Altrata, BetterBoard, Tarsim and Noyan, spanning discovery and strategy through interaction design and delivery.',
    detail: 'Her strengths include user research, information architecture, design systems, accessibility and functional prototyping. She has led design across 10+ B2B, B2C and EdTech products, and holds an MSc in User Experience Design from Birmingham City University.', sources: about },
  projects: { match: /\b(project\w*|case stud\w*|portfolio|work|impact|results)\b/i,
    answer: 'A few places to start: Altrata’s Boolean search framework for complex enterprise queries; a focused learning hub serving 10,000+ students; a library management system built around librarians’ daily workflows; and Omaia, supporting postpartum mothers. Which would you like to explore?',
    detail: 'For enterprise complexity, ask about Altrata. For research-led operational workflows, try the library management project. For learning experiences, ask about the focused learning hub. For research through MVP design, ask about Omaia.', sources: projects },
} satisfies Record<string, Topic>

export type DemoTopic = keyof typeof topics

export function getDemoReply(question: string, previous?: DemoTopic): { answer: string; sources: Source[]; topic?: DemoTopic } {
  const text = question.trim()
  if (/^(hi|hello|hey|thanks|thank you)[!.\s]*$/i.test(text)) return { answer: 'Hi! Try asking about Zara’s AI experience, Altrata projects, or design approach. This is a demo with prepared portfolio answers.', sources: [], topic: previous }
  const explicit = (Object.keys(topics) as DemoTopic[]).find(key => topics[key].match.test(text))
  const followUp = /^(tell me more|more|go on|continue|why|how|what else|can you elaborate|elaborate|and the results|what was the impact|what about (that|the results))[?!.\s]*$/i.test(text)
  const topic = followUp && previous ? previous : explicit
  if (!topic) return { answer: 'This demo has prepared answers about Zara’s experience, Altrata, BetterBoard, library projects, Omaia, and design approach. Try one of those topics, or contact Zara for anything more specific.', sources: [{ id: 'contact', title: 'Contact Zara', url: '/contact' }] }
  return { answer: topic === previous ? topics[topic].detail : topics[topic].answer, sources: topics[topic].sources, topic }
}
