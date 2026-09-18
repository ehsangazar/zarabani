// Editorially selected phrases: preserve the copy and avoid blanket keyword bolding.
const phrases = [
  'Lead Product Designer',
  'platform-wide search capability',
  'feasibility discussions with Engineering',
  'two opposing interaction models',
  'three rounds of validation',
  'prioritise findings into implementation scope',
  'migration parity ticket',
  'lack of Boolean logic within the Location filter',
  'Boolean logic existed in Location, but stopped there',
  'carried the same limitation into Altrata',
  'multiple searches, exports and manual filtering outside Altrata',
  'people closest to client behaviour',
  'directional evidence rather than a substitute for client research',
  'progressively refined the list',
  'the same need to surface elsewhere',
  'one logic model for Advanced Search',
  'reduced future redesign and rebuild work',
  'extending its logic, not redesigning the product',
  'separate interface limitations from platform limitations',
  'harder for users to interpret, validate and recover from',
  'reveal Boolean controls progressively',
  'different hypotheses',
  'greater confidence when building complex searches',
  'without needing to learn a different way of searching',
  'rapid iteration between research rounds',
  'discovery behaviour already embedded in Advanced Search',
  'familiarity and efficiency of the inline model',
  'reconstruct the intended logic outside the product',
  'without moving repeatedly between Altrata, spreadsheets and manual cleanup',
  'preserved the context behind a prospect list',
  'without reopening the core interaction model',
  'query-level analytics',
  'design, validation and engineering work again',
  'behave differently from the rest of Advanced Search',
  'changing the Boolean interaction clients had only just learned',
  'reducing the likelihood of repeated design, validation, engineering and rollout',
  'a foundation to extend',
  'were surfaced early',
  'one model for different customer workflows',
  'verify and communicate the reasoning',
  'repeat usage',
  'a consistent framework across all three rounds',
  'some people arrive with exact criteria; others need to browse',
  'Creating a query and understanding it',
]

export function emphasizeAltrata(text: string) {
  const selected = phrases
    .flatMap(phrase => {
      const start = text.indexOf(phrase)
      return start < 0 ? [] : [{ start, phrase }]
    })
    .sort((a, b) => a.start - b.start)
    .slice(0, 2)
  let cursor = 0
  const result = []
  for (const { start, phrase } of selected) {
    if (start < cursor) continue
    result.push(text.slice(cursor, start))
    result.push(<strong key={start}>{phrase}</strong>)
    cursor = start + phrase.length
  }
  result.push(text.slice(cursor))
  return result
}
