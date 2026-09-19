import { useEffect, useRef, useState, type ReactNode } from 'react'

type Callout = { x: number; y: number; routeY?: number; marker?: 'dot' | 'ring' | 'none'; title: string; text: ReactNode }

export function AnnotatedScreen({ src, alt, callouts, portrait = false, intro, outro }: { src: string; alt: string; callouts: Callout[]; portrait?: boolean; intro?: ReactNode; outro?: ReactNode }) {
  const figure = useRef<HTMLElement>(null)
  const [lines, setLines] = useState<{ path: string; x: number; y: number; marker: 'dot' | 'ring' | 'none' }[]>([])
  const [canvas, setCanvas] = useState({ width: 1, height: 1 })
  useEffect(() => {
    const root = figure.current
    if (!root) return
    const img = root.querySelector('img')!
    const notes = [...root.querySelectorAll<HTMLElement>('.ae-margin-callout')]
    const update = () => {
      const bounds = root.getBoundingClientRect()
      const screen = img.getBoundingClientRect()
      setCanvas({ width: bounds.width, height: bounds.height })
      setLines(notes.map((note, i) => {
        const box = note.getBoundingClientRect()
        const x = screen.left - bounds.left + screen.width * callouts[i].x / 100
        const y = screen.top - bounds.top + screen.height * callouts[i].y / 100
        const notesLeft = box.right <= screen.left
        const endX = notesLeft ? box.right - bounds.left + 8 : box.left - bounds.left - 8
        const endY = box.top - bounds.top + 12
        const gap = notesLeft ? screen.left - box.right : box.left - screen.right
        const elbow = notesLeft
          ? screen.left - bounds.left - gap * (i === 0 ? .3 : .65)
          : screen.right - bounds.left + gap * (i === 0 ? .3 : .65)
        const routeY = screen.top - bounds.top + screen.height * (callouts[i].routeY ?? callouts[i].y) / 100
        const marker = callouts[i].marker ?? 'dot'
        const startX = marker === 'ring' ? x + (notesLeft ? -11 : 11) : x
        return { x, y, marker, path: `M ${startX} ${y} V ${routeY} H ${elbow} V ${endY} H ${endX}` }
      }))
    }
    const observer = new ResizeObserver(update)
    observer.observe(root)
    observer.observe(img)
    notes.forEach(note => observer.observe(note))
    img.addEventListener('load', update)
    update()
    return () => { observer.disconnect(); img.removeEventListener('load', update) }
  }, [callouts])
  return <figure ref={figure} className={`ae-margin-figure${portrait ? ' ae-margin-portrait' : ''}`}>
    <a className="ae-finding-screen" href={src} target="_blank" rel="noopener noreferrer" aria-label={`${alt} — open full image`}><img src={src} alt={alt} loading="lazy" /></a>
    <svg className="ae-leader-lines" viewBox={`0 0 ${canvas.width} ${canvas.height}`} preserveAspectRatio="none" aria-hidden="true">{lines.map((line, i) => <g key={i}><path d={line.path} />{line.marker !== 'none' && <circle className={line.marker === 'ring' ? 'ae-target-ring' : ''} cx={line.x} cy={line.y} r={line.marker === 'ring' ? 10 : 3} />}</g>)}</svg>
    <figcaption>{intro && <div className="ae-margin-intro">{intro}</div>}{callouts.map(callout => <div className="ae-margin-callout" key={callout.title}><strong>{callout.title}</strong><p>{callout.text}</p></div>)}{outro}</figcaption>
  </figure>
}

export default function AltrataQualitativeFindings() {
  return <div className="ae-qualitative-findings">
    <p>Overall, both concepts were viable. The feedback did not identify a fundamental issue with introducing Boolean logic into Advanced Search, but it highlighted two areas that needed further refinement:</p>
    <ol className="ae-refinement-areas"><li>Reducing ambiguity around Boolean relationships;</li><li>Improving visibility of the final query users had created.</li></ol>

    <section className="ae-finding-story">
      <span className="ae-label">01 · Query visibility</span>
      <h3>Hard to verify the whole query</h3>
      <p>This was particularly visible in <strong>Concept B</strong>. Once Boolean relationships were distributed across several modules, checking the search meant users had to scroll back and mentally reconstruct the logic.</p>
      <p><strong>The design change:</strong> Introduce an editable search summary in the right panel, where we had plenty of white space available.</p>
      <AnnotatedScreen src="/case-studies/altrata/round-one-summary.png" alt="Concept B with an editable search summary above the results" callouts={[
        { x: 94.5, y: 17, title: 'A visible query summary', text: 'Brings the selected criteria and Boolean relationships together above the results, reducing the need to reconstruct the search from the filter panel.' },
        { x: 35.4, y: 19, routeY: 22.5, marker: 'ring', title: 'An edit entry point', text: 'Lets users review and adjust the query from the summary. This addition was taken forward in Concept B for the next validation round.' },
      ]} />
      <aside className="ae-finding-principle"><span className="ae-label">The principle we carried forward</span><p><strong>A powerful query is only valuable if users can understand and trust the query they created.</strong></p></aside>
    </section>

    <section className="ae-finding-story">
      <span className="ae-label">02 · Boolean relationships</span>
      <h3>Too many connectors</h3>
      <p>Users could not tell which conditions a module-level connector controlled. Participants questioned:</p>
      <ul className="ae-participant-questions"><li>Which filters does this connector apply to?</li><li>Does it only affect the two adjacent filters?</li><li>Does it change the logic of previous selections?</li></ul>
      <AnnotatedScreen portrait src="/case-studies/altrata/round-one-connectors.png" alt="Concept B filter panel with active criteria and contextual module connectors" intro={<p><strong>The design change:</strong> Show operators only when relevant criteria are active, only for Concept B.</p>} outro={<aside className="ae-margin-open-question"><span className="ae-label">Question kept open</span><h4>Was cross-module Boolean useful?</h4><p>Internal participants saw limited value, but the builder made its scope clearer. I kept it in Concept A for the next round rather than turning an internal observation into a product rule.</p></aside>} callouts={[
        { x: 59, y: 49, title: 'Active criteria give the connector context', text: 'Wealth Tier and Place of residence are selected; the AND / OR control sits between their named modules.' },
        { x: 85, y: 74.5, title: 'Inactive modules stay quieter', text: 'Role and Experience show no connector between them in this view, supporting the decision to reveal operators only when relevant criteria are active.' },
      ]} />
    </section>
  </div>
}
