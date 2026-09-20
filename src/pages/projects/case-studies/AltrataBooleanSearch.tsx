import { Fragment } from 'react'
import source from './altrata-content.json'
import './altrata-case-study.css'
import AltrataEditorial from './AltrataEditorial'
import AltrataFinalScreen from './AltrataFinalScreen'
import { emphasizeAltrata } from './altrataEmphasis'

type Chapter = { start: number; end: number; id: string; title?: boolean }

const chapters: Chapter[] = [
  { start: 25, end: 39, id: 'problem', title: true },
  { start: 40, end: 52, id: 'discovery', title: true },
  { start: 53, end: 67, id: 'workflow', title: true },
  { start: 68, end: 82, id: 'scope', title: true },
  { start: 83, end: 100, id: 'constraints', title: true },
  { start: 101, end: 142, id: 'concepts', title: true },
  { start: 143, end: 205, id: 'round-1', title: true },
  { start: 206, end: 298, id: 'round-2', title: true },
  { start: 299, end: 343, id: 'round-3', title: true },
  { start: 344, end: 353, id: 'direction', title: true },
  { start: 354, end: 398, id: 'impact', title: true },
  { start: 399, end: 440, id: 'measurement', title: true },
  { start: 441, end: 451, id: 'future-ai', title: true },
  { start: 452, end: 472, id: 'reflection' },
]

// These indices describe presentation only. The document wording lives intact in source.
const subheadings = new Set([
  9, 16, 21, 23, 59, 61, 63, 113, 121, 136, 159, 172, 180, 190, 197,
  216, 231, 242, 250, 254, 267, 269, 274, 280, 286, 314, 321, 332,
  338, 356, 360, 368, 379, 388, 413, 431, 453, 461, 468,
])
const statements = new Set([
  30, 39, 51, 79, 82, 100, 104, 120, 132, 135, 142, 179, 196, 201,
  229, 241, 246, 298, 330, 352, 382, 464, 466, 472,
])
const examples = new Set([
  33, 35, 155, 157, 163, 165, 183, 186, 220, 221, 222, 260, 263, 278,
  293, 313, 320, 324, 359, 369, 370, 371, 385, 403, 404, 405, 416, 435,
])
const metrics = new Set([3, 6, 378, 424, 438])
const panels = new Set([45, 46, 47, 48, 49, 73, 74, 75, 87, 89, 90, 92, 97, 456, 457, 458, 459])

const imageSpaces: Record<number, { title: string; notes: string[] }> = {
  135: {
    title: 'Concept A and Concept B — equivalent search',
    notes: ['Concept A: the dedicated builder and explicit query structure.', 'Concept B: Boolean controls within the existing Advanced Search panel.'],
  },
  171: {
    title: 'Concept B — progressive Boolean controls',
    notes: ['Active criteria reveal the relevant operators.', 'Controls remain close to the filters and values they affect.'],
  },
  266: {
    title: 'Concept B — searching for a filter value',
    notes: ['An entered value such as CEO surfaces the relevant filter and matching value.'],
  },
  273: {
    title: 'Concept B — Include / Exclude at selection',
    notes: ['Include / Exclude is visible in the dropdown.', 'The selected value retains its compact is / not control.'],
  },
}

function ImageSpace({ after }: { after: number }) {
  if (after === 241) {
    return (
      <figure className="al-figure al-source-image al-round-prototype">
        <video controls playsInline preload="metadata" poster="/case-studies/altrata/round-two-concept-a-poster.jpg" aria-label="Concept A interactive prototype with an editable search summary">
          <source src="/case-studies/altrata/round-two-concept-a-prototype.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <figcaption>Concept A · Editable search-summary prototype</figcaption>
      </figure>
    )
  }
  const space = imageSpaces[after]
  if (!space) return null
  return (
    <figure className="al-figure al-source-image">
      <div className="al-screen-space">
        <span className="al-eyebrow">Reserved for interface annotation</span>
        <div className="al-screen-outline" aria-hidden="true"><div /><div /><div /></div>
        <strong>{space.title}</strong>
        <span>Interface image to be added</span>
      </div>
      <figcaption className="al-annotations">
        {space.notes.map((note, index) => (
          <div key={note}><span className="al-number">{index + 1}</span><p>{note}</p></div>
        ))}
      </figcaption>
    </figure>
  )
}

function TextBlock({ index }: { index: number }) {
  const text = index === 6
    ? '3× fewer search cycles'
    : index === 24
      ? source[index].replace('July – September 2026', 'June – August 2026')
      : source[index]
  const attrs = { 'data-source-index': index }
  if (subheadings.has(index)) return <h3 {...attrs} className="al-source-subheading">{text}</h3>
  if (statements.has(index)) return <blockquote {...attrs} className="al-source-statement">{text}</blockquote>
  if (metrics.has(index)) return <p {...attrs} className="al-source-metric">{text}</p>
  if (examples.has(index)) return <p {...attrs} className="al-source-example">{text}</p>
  if (panels.has(index)) return <p {...attrs} className="al-source-panel">{text}</p>
  return <p {...attrs}>{emphasizeAltrata(text)}</p>
}

type Group = { end: number; className: string; ranges: [number, number][] }
const groups: Record<number, Group> = {
  3: { end: 8, className: 'al-source-metrics', ranges: [[3, 4], [6, 7]] },
  9: { end: 24, className: 'al-source-context', ranges: [[9, 15], [16, 24]] },
  45: { end: 49, className: 'al-source-verticals', ranges: [[45, 45], [46, 46], [47, 47], [48, 48], [49, 49]] },
  59: { end: 64, className: 'al-source-three', ranges: [[59, 60], [61, 62], [63, 64]] },
  73: { end: 75, className: 'al-source-three', ranges: [[73, 73], [74, 74], [75, 75]] },
  113: { end: 135, className: 'al-source-concepts', ranges: [[113, 120], [121, 135]] },
  360: { end: 373, className: 'al-source-workflow', ranges: [[360, 367], [368, 373]] },
  403: { end: 405, className: 'al-source-code', ranges: [[403, 403], [404, 404], [405, 405]] },
  456: { end: 459, className: 'al-source-measures', ranges: [[456, 456], [457, 457], [458, 458], [459, 459]] },
}

function Blocks({ start, end, grouped = true }: { start: number; end: number; grouped?: boolean }) {
  const nodes = []
  for (let index = start; index <= end; index++) {
    const group = grouped ? groups[index] : undefined
    if (group && group.end <= end) {
      nodes.push(
        <Fragment key={index}>
          <div className={group.className}>
            {index === 3 && <h3 className="al-impact-label">Impact</h3>}
            {group.ranges.map(([from, to]) => <div key={from}><Blocks start={from} end={to} grouped={false} /></div>)}
          </div>
          {group.end === 135 && <ImageSpace after={135} />}
        </Fragment>,
      )
      index = group.end
    } else if (source[index].startsWith('•')) {
      const items = []
      const first = index
      while (index <= end && source[index].startsWith('•')) {
        items.push(<li key={index} data-source-index={index}>{emphasizeAltrata(source[index].replace(/^•\s*/, ''))}</li>)
        index++
      }
      index--
      nodes.push(<ul key={first} className="al-source-list">{items}</ul>)
    } else {
      nodes.push(
        <Fragment key={index}>
          <TextBlock index={index} />
          {index !== 135 && <ImageSpace after={index} />}
        </Fragment>,
      )
    }
  }
  return <>{nodes}</>
}

const AltrataBooleanSearch = () => (
  <article className="al-study al-full">
    <header className="al-source-intro">
      <h2 className="al-eyebrow">Context</h2>
      <p className="al-lead" data-source-index={2}>
        {source[2].split(/(B2B data intelligence platform|6\.1 million people, 3\.1 million organisations|Advanced Search|actionable prospect lists)/g).map((part, index) =>
          index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
        )}
      </p>
      <Blocks start={3} end={24} />
      <AltrataFinalScreen />
    </header>
    <nav className="al-nav" aria-label="Case study sections">
      {[
        ['problem', 'The problem'], ['scope', 'Widening the scope'], ['concepts', 'Two concepts'],
        ['round-1', 'Round 1'], ['round-2', 'Round 2'], ['round-3', 'Round 3'],
        ['impact', 'Impact'], ['measurement', 'Post-launch'], ['reflection', 'Reflection'],
      ].map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
    </nav>
    {chapters.map((chapter, index) => (
      <section key={chapter.id} id={chapter.id} className="al-source-chapter">
        <div className="al-source-chapter-inner">
          <div className="al-source-heading">
            <span className="al-source-chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            {chapter.id === 'future-ai' ? (
              <div className="al-discovery-heading">
                <p className="al-eyebrow">Future direction</p>
                <h2>AI-assisted search</h2>
                <p className="al-chapter-subtitle">Use natural language to build a visible, editable query.</p>
              </div>
            ) : chapter.id === 'measurement' ? (
              <div className="al-discovery-heading">
                <p className="al-eyebrow" data-source-index={chapter.start}>Post-launch</p>
                <h2>Measuring whether it actually worked</h2>
                <p className="al-chapter-subtitle" data-source-index={chapter.start + 1}>{source[chapter.start + 1]}</p>
              </div>
            ) : chapter.id === 'round-3' ? (
              <div className="al-discovery-heading">
                <p className="al-eyebrow" data-source-index={chapter.start}>Round 3</p>
                <h2>Validating the direction with clients</h2>
                <p className="al-chapter-subtitle" data-source-index={chapter.start + 1}>{source[chapter.start + 1]}</p>
              </div>
            ) : ['discovery', 'workflow'].includes(chapter.id) ? (
              <div className="al-discovery-heading">
                <h2 data-source-index={chapter.start}>{source[chapter.start]}</h2>
                <p className="al-chapter-subtitle" data-source-index={chapter.start + 1}>{source[chapter.start + 1]}</p>
              </div>
            ) : chapter.title ? (
              <div>
                <p className="al-eyebrow" data-source-index={chapter.start}>{source[chapter.start]}</p>
                <h2 data-source-index={chapter.start + 1}>{source[chapter.start + 1]}</h2>
              </div>
            ) : <h2 data-source-index={chapter.start}>{source[chapter.start]}</h2>}
          </div>
          <div className="al-source-body"><AltrataEditorial id={chapter.id} ImageSpace={ImageSpace}><Blocks start={chapter.start + (chapter.title ? 2 : 1)} end={chapter.end} /></AltrataEditorial></div>
        </div>
      </section>
    ))}
  </article>
)

export default AltrataBooleanSearch
