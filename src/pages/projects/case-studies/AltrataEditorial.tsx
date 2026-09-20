import { useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import source from './altrata-content.json'
import AltrataExistingScreen from './AltrataExistingScreen'
import AltrataQualitativeFindings, { AnnotatedScreen } from './AltrataQualitativeFindings'
import { emphasizeAltrata } from './altrataEmphasis'
import './altrata-editorial.css'

function Copy({ from, to = from }: { from: number; to?: number }) {
  return <>{source.slice(from, to + 1).map((text, i) => <p key={from + i}>{emphasizeAltrata(text)}</p>)}</>
}

function Label({ children }: { children: ReactNode }) {
  return <span className="ae-label">{children}</span>
}

function Cards({ items }: { items: [string, string, string][] }) {
  return <div className="ae-cards">{items.map(([symbol, title, text]) => <section key={title}><span className="ae-symbol" aria-hidden="true">{symbol}</span><h3>{title}</h3><p>{emphasizeAltrata(text)}</p></section>)}</div>
}

function SegmentIcon({ segment }: { segment: string }) {
  const shapes: Record<string, ReactNode> = {
    'Nonprofit & education': <><path d="m2 9 10-5 10 5-10 5Z" /><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" /></>,
    'Wealth & financial services': <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M7 6V4h10v2M16 15h2" /></>,
    'Investment banking': <><path d="m3 8 9-5 9 5ZM5 11v7m7-7v7m7-7v7M3 21h18" /></>,
    'Executive search': <><circle cx="9" cy="7" r="3" /><path d="M3 20v-2a6 6 0 0 1 9-5" /><circle cx="17" cy="16" r="4" /><path d="m20 19 2 3" /></>,
    'Healthcare': <><path d="M12 21S3 15 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 13-9 13Z" /><path d="M9 11h6m-3-3v6" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[segment]}</svg>
}

function Table({ headings, rows, segments = false }: { headings: string[]; rows: string[][]; segments?: boolean }) {
  return <div className={`ae-table${segments ? ' ae-segment-table' : ''}`} tabIndex={0} role="region" aria-label={headings.join(', ')}><table><thead><tr>{headings.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th scope="row" key={j}>{segments ? <span className="ae-segment-label"><SegmentIcon segment={cell} /><span>{cell}</span></span> : cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table></div>
}

function BoundaryTable() {
  const rows = [
    { icon: '✓', status: 'Supported', tone: 'supported', boundary: 'Search engine', finding: 'AND, OR and NOT already supported', implication: 'Represent existing power in an approachable interface' },
    { icon: '↔', status: 'Possible', tone: 'possible', boundary: 'Cross-module logic', finding: 'Not technically limited to Location', implication: 'Keep relationships across Role, Location and Experience open' },
    { icon: '!', status: 'Out of scope', tone: 'limited', boundary: 'Nesting', finding: 'Unlimited nesting required backend changes outside the delivery window', implication: 'Keep the logic shallow and understandable' },
    { icon: '◇', status: 'Protect', tone: 'protect', boundary: 'Everyday searches', finding: 'Existing behaviour had to remain intact', implication: 'Reveal expressive controls when they are needed' },
    { icon: '◷', status: 'Deferred', tone: 'deferred', boundary: 'Saved searches', finding: 'The schema stored a flat set of filters', implication: 'Capture persistence as a later dependency; prioritise creation, editing and execution' },
  ]
  return <div className="ae-table ae-boundary-table" tabIndex={0} role="region" aria-label="Technical boundaries and design implications"><table>
    <thead><tr><th scope="col">Boundary</th><th scope="col">What we established</th><th scope="col">Design implication</th></tr></thead>
    <tbody>{rows.map(row => <tr key={row.boundary} className={`ae-boundary-${row.tone}`}>
      <th scope="row"><span className="ae-boundary-title"><span className="ae-boundary-icon" aria-hidden="true">{row.icon}</span><span>{row.boundary}<small>{row.status}</small></span></span></th>
      <td>{row.finding}</td><td>{row.implication}</td>
    </tr>)}</tbody>
  </table></div>
}

function PrototypeVideo({ concept, src, poster }: { concept: string; src: string; poster: string }) {
  return <figure className="ae-prototype-video">
    <video controls playsInline preload="metadata" poster={poster} aria-label={`${concept} interactive prototype demonstration`}>
      <source src={src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    <figcaption>{concept} · Interactive prototype</figcaption>
  </figure>
}

function Takeaway({ children }: { children: ReactNode }) {
  return <aside className="ae-takeaway"><Label>What changed</Label><p>{children}</p></aside>
}

function Workarounds() {
  const routes = [
    { title: 59, description: 60 },
    { title: 61, description: 62 },
    { title: 63, description: 64 },
  ]
  return <ol className="ae-workarounds" aria-label="The connected workaround">{routes.map((route, index) => <li key={route.title}>
    <span className="ae-workaround-step" aria-hidden="true">0{index + 1}</span>
    <div><h3>{source[route.title]}</h3><p>{emphasizeAltrata(source[route.description])}</p></div>
  </li>)}</ol>
}

function DecisionCriteria() {
  const criteria = [
    ['01', 'Familiarity', 'Could users build on the search behaviour they already understood?'],
    ['02', 'Logic verification', 'Could they review the query and confirm that it matched their intent?'],
    ['03', 'Complexity at scale', 'Would the interaction remain understandable as criteria and relationships grew?'],
    ['04', 'Confidence in results', 'Could users trust that the resulting list reflected the search they meant to build?'],
  ]
  return <section className="ae-decision-criteria">
    <header><Label>Decision criteria</Label><h3>Four things would decide the direction</h3></header>
    <ol>{criteria.map(([number, title, description]) => <li key={number}><span aria-hidden="true">{number}</span><div><h4>{title}</h4><p>{description}</p></div></li>)}</ol>
  </section>
}

function ClaudeIcon() {
  return <span className="ae-claude-icon" aria-hidden="true"><img src="/case-studies/altrata/claude-icon.webp" alt="" /></span>
}

function Method({ people, task, design }: { people: string; task: string; design: string }) {
  return <dl className="ae-method"><div><dt><span className="ae-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4.6V20" /></svg></span>Participants</dt><dd>{people}</dd></div><div><dt><span className="ae-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5M8 17h3" /></svg></span>Task</dt><dd>{task}</dd></div><div><dt><span className="ae-method-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3" /></svg></span>Study design</dt><dd>{design}</dd></div></dl>
}

function Measures() {
  return <section className="ae-measures"><Label>We measured</Label><ul><li>Ease of completing the search <strong>(SEQ)</strong></li><li>Confidence that the query represented the intended criteria</li><li>Overall preference</li></ul></section>
}

function RoundOneSnapshot() {
  return <><section className="ae-study-snapshot"><header><Label>Research design</Label><h3>How we compared the concepts</h3></header>
    <Method people="9 · Engineering, Data, Product and experienced colleagues" task="Realistic search scenarios supplied to everyone" design="Both concepts per participant; counterbalanced order" /><Measures />
  </section><section className="ae-round-findings"><header><Label>Findings</Label><h3>Quantitative signals</h3></header><div className="ae-score-grid">
      <section><Label>Ease of completion · SEQ</Label><div className="ae-score-row"><span className="ae-concept-badge ae-concept-a">Concept A</span><strong>5.1 <small>/ 7</small></strong></div><div className="ae-score-row"><span className="ae-concept-badge ae-concept-b">Concept B</span><strong>5.2 <small>/ 7</small></strong></div></section>
      <section><Label>Overall preference</Label><div className="ae-score-row"><span className="ae-concept-badge ae-concept-a">Concept A</span><strong>4 <small>votes</small></strong></div><div className="ae-score-row"><span className="ae-concept-badge ae-concept-b">Concept B</span><strong>5 <small>votes</small></strong></div></section>
      <aside><Label>What it told us</Label><p>The scores were close and directional. <strong>The friction was more informative than preference.</strong> We also assessed confidence that the query matched the intended criteria.</p></aside>
    </div></section></>
}

function CollaborationOpportunity() {
  return <section className="ae-collaboration-opportunity">
    <header><Label>Collaboration opportunity</Label><h3>Include the search criteria in export file</h3><p>Several participants described workflows where the search criteria needed to travel with the results, whether the recipient worked inside or outside Altrata.</p></header>
    <AnnotatedScreen src="/case-studies/altrata/round-two-export-summary.png" alt="Export menu offering results with the search summary or data only" callouts={[
      { x: 97, y: 42, title: 'For people without an Altrata seat', text: <>We explored <strong>including the search summary in exports</strong> for people without an Altrata seat, such as gift officers, CEOs and other decision-makers.</> },
    ]} />
    <AnnotatedScreen src="/case-studies/altrata/round-two-share-query.png" alt="Share query dialog for sending an editable query to Altrata colleagues" callouts={[
      { x: 30.5, y: 29, title: 'For colleagues working in Altrata', text: <>We explored the possibility of <strong>sharing the query state</strong> so another researcher or colleague with an Altrata seat could inspect, modify and continue the same work.</> },
    ]} />
  </section>
}

function BooleanScopeFinding() {
  return <section className="ae-boolean-scope-finding">
    <p className="ae-boolean-intro">The research revealed a clear boundary: OR was easy to understand when it grouped alternatives within one criterion, but harder to justify and interpret when it connected separate modules.</p>
    <div className="ae-boolean-overview">
      <section className="ae-boolean-worked"><Label>What worked</Label><h4>OR within one criterion was easy to explain</h4><div className="ae-boolean-examples"><span>CEO OR CTO</span><span>New York OR Washington</span><span>Healthcare OR Financial Services</span></div></section>
      <section className="ae-boolean-problems"><Label>What broke across modules</Label><div><article><b>01</b><h4>No convincing client scenario</h4><p>When OR sat between separate modules—for example, Location and Role—participants struggled to explain when a client would need it.</p></article><article><b>02</b><h4>Unclear connector scope</h4><p>In Concept B, participants could not easily tell which section the connector belonged to or what it controlled.</p></article></div></section>
      <aside className="ae-boolean-conclusion"><Label>Conclusion</Label><p>The capability was adding <strong>more cognitive cost than demonstrated value.</strong></p></aside>
      <section className="ae-boolean-decisions"><Label>Design decision</Label><div><article><span>Concept B</span><h4>Remove it from the filter panel</h4><p>We removed module-level AND / OR and moved the relationship into the search summary, where it could be read in context.</p></article><article><span>Concept A</span><h4>Keep it for client validation</h4><p>Cross-module AND / OR remained in the builder for another round, where its scope was more explicit.</p></article></div></section>
    </div>
    <ValueConnectorComparison />
  </section>
}

function ValueConnectorComparison() {
  const figure = useRef<HTMLElement>(null)
  const [line, setLine] = useState({ width: 1, height: 1, path: '', startX: 0, startY: 0, endX: 0, endY: 0 })

  useEffect(() => {
    const root = figure.current
    if (!root) return
    const images = [...root.querySelectorAll('img')]
    const update = () => {
      const bounds = root.getBoundingClientRect()
      const before = images[0].getBoundingClientRect()
      const after = images[1].getBoundingClientRect()
      const startX = before.left - bounds.left + before.width * .60
      const startY = before.top - bounds.top + before.height * .405
      const endX = after.left - bounds.left + after.width * .09
      const endY = after.top - bounds.top + after.height * .61
      const elbow = (before.right + after.left) / 2 - bounds.left
      setLine({ width: bounds.width, height: bounds.height, startX, startY, endX, endY, path: `M ${startX} ${startY} H ${elbow} V ${endY} H ${endX}` })
    }
    const observer = new ResizeObserver(update)
    observer.observe(root)
    images.forEach(image => { observer.observe(image); image.addEventListener('load', update) })
    update()
    return () => { observer.disconnect(); images.forEach(image => image.removeEventListener('load', update)) }
  }, [])

  return <figure ref={figure} className="ae-value-connector-comparison">
    <figcaption><strong>Clarifying the value-level connector</strong><p>There was also confusion about the AND / OR control at value level. We moved it from above the filter input to directly above the selected values, making it clear which values the relationship applied to.</p></figcaption>
    <div className="ae-value-connector-images">
      <div><span>Before · detached from the values</span><img src="/case-studies/altrata/round-two-value-connector-before.png" alt="Before refinement: the AND OR control sits above the role-category input" /></div>
      <div><span>After · placed with the values</span><img src="/case-studies/altrata/round-two-value-connector-after.png" alt="After refinement: the AND OR control sits directly above the selected role values" /></div>
    </div>
    <svg className="ae-value-move-line" viewBox={`0 0 ${line.width} ${line.height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id="ae-value-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" /></marker></defs>
      <path d={line.path} markerEnd="url(#ae-value-arrow)" />
    </svg>
  </figure>
}

function ExclusionFinding() {
  return <section className="ae-exclusion-finding">
    <header><h3>Make exclusion discoverable before selection</h3><p>Participants quickly understood the is / not toggle on a selected value. But users intending to exclude something had no indication that NOT existed before making a selection. <strong>The interaction had a discoverability problem.</strong></p><p>I added <strong>Include / Exclude inside the dropdown</strong> in Concept B, keeping the is / not toggle treatment after selection.</p></header>
    <div className="ae-exclusion-annotations">
      <AnnotatedScreen portrait src="/case-studies/altrata/round-two-exclusion-before-selection.png" alt="Organization type dropdown with Include and Exclude controls visible before selecting a value" callouts={[
        { x: 62, y: 54.5, marker: 'none', title: 'Before selection', text: <>Include / Exclude makes the choice visible <strong>before</strong> a value is selected.</> },
      ]} />
      <AnnotatedScreen portrait src="/case-studies/altrata/round-two-exclusion-after-selection.png" alt="Selected organization types with individual is and not controls" callouts={[
        { x: 59, y: 74, marker: 'none', title: 'After selection', text: <>The compact is / not treatment remains attached to each selected value.</> },
      ]} />
    </div>
  </section>
}

function ValueSpecificExclusion() {
  return <section className="ae-value-specific-exclusion">
    <header><h3>Make inclusion and exclusion value-specific in Concept A</h3><p>The builder’s earlier model could apply exclusion too broadly when multiple values belonged to one field.</p><p>I separated exclusion so an individual value could be negated without forcing the entire condition into an <strong>“is not”</strong> state.</p></header>
    <ValueSpecificExclusionAnnotation />
  </section>
}

function ValueSpecificExclusionAnnotation() {
  const figure = useRef<HTMLElement>(null)
  const [line, setLine] = useState({ width: 1, height: 1, path: '' })

  useEffect(() => {
    const root = figure.current
    if (!root) return
    const images = [...root.querySelectorAll('img')]
    const note = root.querySelector<HTMLElement>('.ae-value-specific-note')!
    const update = () => {
      const bounds = root.getBoundingClientRect()
      const first = images[0].getBoundingClientRect()
      const second = images[1].getBoundingClientRect()
      const noteBox = note.getBoundingClientRect()
      const firstX = first.left - bounds.left + first.width * .385
      const firstY = first.top - bounds.top + first.height * .72
      const secondX = second.left - bounds.left + second.width * .305
      const secondY = second.top - bounds.top + second.height * .79
      const noteX = noteBox.right - bounds.left + 8
      const noteY = noteBox.top - bounds.top + 14
      const trunkX = (noteBox.right + first.left) / 2 - bounds.left
      setLine({ width: bounds.width, height: bounds.height, path: `M ${firstX} ${firstY} H ${trunkX} M ${secondX} ${secondY} H ${trunkX} M ${trunkX} ${noteY} V ${secondY} M ${trunkX} ${noteY} H ${noteX}` })
    }
    const observer = new ResizeObserver(update)
    observer.observe(root)
    observer.observe(note)
    images.forEach(image => { observer.observe(image); image.addEventListener('load', update) })
    update()
    return () => { observer.disconnect(); images.forEach(image => image.removeEventListener('load', update)) }
  }, [])

  return <figure ref={figure} className="ae-value-specific-exclusion-annotations">
    <figcaption className="ae-value-specific-note"><strong>Value-specific exclusion</strong><p>Use <strong>not</strong> on a selected value—or <strong>+ exclude</strong> to add one—without negating the entire condition.</p></figcaption>
    <div className="ae-value-specific-images">
      <a href="/case-studies/altrata/round-two-concept-a-value-exclusion.png" target="_blank" rel="noopener noreferrer"><img src="/case-studies/altrata/round-two-concept-a-value-exclusion.png" alt="Concept A organization-type condition with Public included and Charity excluded independently" /></a>
      <a href="/case-studies/altrata/round-two-concept-a-add-exclusion.png" target="_blank" rel="noopener noreferrer"><img src="/case-studies/altrata/round-two-concept-a-add-exclusion.png" alt="Concept A Wealth Tier condition with an option to add an excluded value" /></a>
    </div>
    <svg className="ae-value-specific-lines" viewBox={`0 0 ${line.width} ${line.height}`} preserveAspectRatio="none" aria-hidden="true"><path d={line.path} /></svg>
  </figure>
}

function RoundTwoWrapUp() {
  return <section className="ae-round-two-wrap-up">
    <Label>Round 2 takeaway</Label>
    <h3>Different verticals validated the decision to solve Boolean once, across Advanced Search</h3>
    <div className="ae-wrap-up-grid"><article><span>What varied</span><p>Each vertical relied on different filters—from donations and wealth to roles, experience, assets and geography.</p></article><article><span>What stayed constant</span><p>Users repeatedly needed to <strong>include alternatives, combine criteria and exclude exceptions</strong>.</p></article></div>
    <p className="ae-wrap-up-conclusion">A Location-only fix would have repeated the same product problem module by module. A shared logic model reduced future <strong>product and engineering rework</strong> while avoiding <strong>experience debt</strong>.</p>
  </section>
}

function RoundTwoPrototypes() {
  return <section className="ae-round-two-prototypes">
    <Label>Round 2 prototypes</Label>
    <h3>How the two concepts looked after the second round</h3>
    <p>These prototypes capture the changes made after the second round of validation, before the concepts moved into client testing.</p>
    <div className="ae-round-two-prototype-grid">
      <PrototypeVideo concept="Concept A · Revised builder" src="/case-studies/altrata/round-two-concept-a-final.mp4" poster="/case-studies/altrata/round-two-concept-a-final-poster.jpg" />
      <PrototypeVideo concept="Concept B · Revised inline model" src="/case-studies/altrata/round-two-concept-b-final.mp4" poster="/case-studies/altrata/round-two-concept-b-final-poster.jpg" />
    </div>
  </section>
}

function RoundThreeFindings() {
  const findings = [
    {
      number: '01',
      behaviour: 'Starting the search',
      a: 'Stronger when clients arrived with a predefined query to translate.',
      b: 'Visible filters helped clients discover and progressively refine their criteria.',
    },
    {
      number: '02',
      behaviour: 'Constructing the benchmark',
      a: 'Clients spent more effort interpreting and arranging the condition structure.',
      b: 'Intent translated more directly into familiar filters and values.',
    },
    {
      number: '03',
      behaviour: 'Recovering from mistakes',
      a: 'Recovery was possible, but required deliberate reasoning through the structure.',
      b: 'Clients traced errors back to familiar filters and values, then corrected them in context.',
    },
  ]

  return <section className="ae-round-three-findings">
    <header>
      <Label>Round 3 · Key findings</Label>
      <h3>The difference was how clients formed their search</h3>
      <p>Both concepts could represent complex criteria. The important difference was the path clients had to take: <strong>Concept A worked best when the query was already formed</strong>, while <strong>Concept B supported discovery, construction and recovery as part of the same workflow.</strong></p>
    </header>
    <div className="ae-round-three-findings-grid" role="list" aria-label="Round three behavioural findings">
      {findings.map(finding => <article key={finding.number} role="listitem">
        <div className="ae-round-three-behaviour"><span aria-hidden="true">{finding.number}</span><h4>{finding.behaviour}</h4></div>
        <section className="ae-round-three-concept-a"><span>Concept A</span><p>{finding.a}</p></section>
        <section className="ae-round-three-concept-b"><span>Concept B</span><p>{finding.b}</p></section>
      </article>)}
    </div>
    <aside className="ae-round-three-pattern"><Label>The pattern across all three behaviours</Label><p><strong>Concept A asked clients to translate their intent into a system structure.</strong> Concept B let them work through familiar filters and understand the structure in context.</p></aside>
  </section>
}

function WorkflowImpactComparison() {
  const searches = ['CEO', 'CTO', 'CDO']
  return <section className="ae-workflow-comparison" aria-label="Workflow before and after Boolean search">
    <article className="ae-workflow-before">
      <header><div><Label>Before · Fragmented workflow</Label><h3>Repeat the search, then assemble it manually</h3></div><span className="ae-workflow-count"><strong>9</strong><small>steps</small></span></header>
      <div className="ae-workflow-scope"><span>Role titles only</span><small>Each alternative required its own search and export</small></div>
      <div className="ae-repeated-searches">{searches.map((title, index) => <div key={title}><span><b>{index * 2 + 1}</b>Search {title}</span><i aria-hidden="true">→</i><span className="ae-export-step"><b>{index * 2 + 2}</b>Export results</span></div>)}</div>
      <ol className="ae-workflow-final-steps" start={7}><li><span>07</span>Merge three exports</li><li><span>08</span>Exclude exceptions manually</li><li className="ae-workflow-result"><span>09</span>Final prospect list</li></ol>
    </article>
    <article className="ae-workflow-after">
      <header><div><Label>After · One verified query</Label><h3>Express more criteria in one search</h3></div><span className="ae-workflow-count"><strong>3</strong><small>steps</small></span></header>
      <div className="ae-workflow-scope"><span>Roles</span><span>Geography</span><span>Industry</span><span>Exclusions</span></div>
      <ol className="ae-workflow-after-steps"><li><span>01</span><div><strong>Build one Boolean query</strong><p>(CEO OR CTO OR CDO)</p><p>AND (US OR Canada NOT CA/TX)</p><p>AND (Technology OR Financial Services NOT Consulting)</p></div></li><li><span>02</span><div><strong>Review the query summary</strong><p>Verify every relationship in context.</p></div></li><li className="ae-workflow-result"><span>03</span><div><strong>One verified prospect list</strong><p>No export-and-merge workaround.</p></div></li></ol>
    </article>
    <aside><strong>More capability, fewer steps</strong><span>Roles, locations, industries and exclusions handled in <b>one search</b>—without repeated exports or manual merging.</span></aside>
  </section>
}

function Schematic({ kind }: { kind: 'logic' | 'summary' | 'exclude' | 'discovery' }) {
  if (kind === 'summary') {
    return <figure className="ae-summary-screenshot"><img src="/case-studies/altrata/round-two-search-summary.png" alt="Search results summary showing the selected criteria and Boolean relationships in a readable sentence" /></figure>
  }
  return <figure className="ae-schematic"><figcaption>Interaction principle · illustrative diagram</figcaption>
    {kind === 'logic' && <><div className="ae-query-row"><span>Role title</span><b>CEO</b><em>OR</em><b>CTO</b></div><div className="ae-connector">AND</div><div className="ae-query-row"><span>Location</span><b>New York</b><em>OR</em><b>Washington</b></div><p>Alternatives stay inside a clear criterion. The complete relationship is reviewed in the summary.</p></>}
    {kind === 'exclude' && <><div className="ae-query-row"><span>At selection</span><b>Include</b><b className="ae-exclude">Exclude</b></div><div className="ae-connector">↓</div><div className="ae-query-row"><span>After selection</span><b className="ae-exclude">NOT · Canada</b></div><p>Exclusion is discoverable before selection and editable afterwards.</p></>}
    {kind === 'discovery' && <><div className="ae-search"><span aria-hidden="true">⌕</span> CEO</div><div className="ae-connector">↓</div><div className="ae-query-row"><span>Role title</span><b>Chief Executive Officer</b></div><p>Start with a value the user knows, then reveal where it belongs.</p></>}
  </figure>
}

export default function AltrataEditorial({ id, children, ImageSpace }: { id: string; children: ReactNode; ImageSpace: ComponentType<{ after: number }> }) {
  let content: ReactNode
  switch (id) {
    case 'problem':
      content = <><Copy from={27} to={29} /><AltrataExistingScreen /><div className="ae-split"><section><Label>The existing model</Label><h3>One flat query</h3><p>Location, Role, Experience and Education were implicitly combined with <strong>AND</strong>. That relationship was neither visible nor editable.</p><div className="ae-query-sentence">CEO <strong>AND</strong> London <strong>AND</strong> Financial Services</div></section><section><Label>Could not be expressed</Label><h3>Alternatives + exclusions</h3><p>Clients needed to express equivalent titles, several geographies and exceptions within the same search.</p><div className="ae-query-sentence">CEO <strong>OR</strong> CTO · Washington <strong>OR</strong> New York · New York-based company · <strong>NOT</strong> existing clients</div></section></div><Copy from={36} /><blockquote>{source[39]}</blockquote></>
      break
    case 'discovery':
      content = <><Copy from={42} to={43} /><Table segments headings={['Customer group', 'Search criteria', 'Exceptions to handle']} rows={[
        ['Nonprofit & education', 'Affinity, giving history and wealth', 'Prospects already assigned elsewhere'],
        ['Wealth & financial services', 'Multiple geographies and wealth bands', 'Existing clients'],
        ['Investment banking', 'Equivalent decision-maker titles, sectors and organisations', '—'],
        ['Executive search', 'Titles, industries and experience', 'Adjacent but irrelevant profiles'],
        ['Healthcare', 'Geography, affinity and capacity', 'Restricted or previously contacted people'],
      ]} /><p>Different users were applying different filters, but they were repeatedly trying to do the same three things:</p><Cards items={[
        ['OR', 'Combine alternatives', 'Include more than one acceptable title, geography or other value.'],
        ['AND', 'Intersect criteria', 'Find people who meet several parts of the same requirement.'],
        ['NOT', 'Exclude exceptions', 'Remove the people or characteristics that should not be in the list.'],
      ]} /><Takeaway>{source[52]}</Takeaway></>
      break
    case 'workflow':
      content = <><Copy from={56} /><div className="ae-process"><div><span>01</span><h3>Start broad</h3><p>Inspect results and progressively refine the target.</p></div><div><span>02</span><h3>Hit the logic limit</h3><p>Alternatives and exclusions cannot be expressed in one query.</p></div><div className="ae-process-alert"><span>03</span><h3>Leave the product</h3><p>Export, merge and finish the filtering elsewhere.</p></div></div><p>The flat search model supported part of that process, but not all of it. When the logic became more complex, teams were compensating manually.</p><Workarounds /><Takeaway>{source[66]}</Takeaway><Copy from={67} /></>
      break
    case 'scope':
      content = <><p>The original request was still the fastest option: add AND / OR to Location and close the migration gap. But by this point, we had enough evidence to expect <strong>the same need to surface elsewhere.</strong></p><p>Solving it only in Location would create three costs:</p><Cards items={[
        ['↻', 'Repeated delivery cost', 'A one-off Location interaction would need design, validation and engineering work again when another module needed the same capability.'],
        ['≠', 'Inconsistent behaviour', 'One filter would behave differently from the rest of Advanced Search, making the experience harder to understand and scale.'],
        ['↗', 'A mental model to relearn', 'Expanding later could mean changing the Boolean interaction clients had only just learned.'],
      ]} /><Copy from={76} /><Table headings={['Decision', 'Immediate effect', 'Longer-term implication']} rows={[
        ['Location-only parity fix', 'The fastest route to closing the migration gap', 'Repeat the solution as requests emerge in other filters'],
        ['Reusable search model', 'More upfront definition and alignment', 'Consistent rules that accommodate the next request'],
      ]} /><Copy from={77} /><Takeaway>{source[82]}</Takeaway><Copy from={80} /></>
      break
    case 'constraints':
      content = <><Copy from={85} /><BoundaryTable /><Copy from={91} /><Takeaway>Boolean logic across modules was technically viable with clear edges, the next question was: <strong>How visible and structured should that logic be?</strong></Takeaway></>
      break
    case 'concepts':
      content = <><Copy from={106} to={107} /><div className="ae-concept-comparison"><article><PrototypeVideo concept="Concept A" src="/case-studies/altrata/concept-a-prototype.mp4" poster="/case-studies/altrata/concept-a-poster.jpg" /><section className="ae-concept-copy"><Label>Concept A</Label><h3>A dedicated logic builder</h3><p>Users moved from the filter panel into a structured builder, with explicit conditions, connectors and exclusions.</p><p>The strategic advantage was <strong>explicit control and visibility</strong>, allowing power users to inspect relationships between conditions and directly manipulate the query they were creating.</p><p className="ae-concept-tradeoff">The trade-off: <strong>Introducing a second search model</strong></p><p>The hypothesis behind Concept A was:</p><p className="ae-concept-hypothesis"><strong>If users could explicitly see and control the query structure, they would have greater confidence when building complex searches.</strong></p></section></article><article><PrototypeVideo concept="Concept B" src="/case-studies/altrata/concept-b-prototype.mp4" poster="/case-studies/altrata/concept-b-poster.jpg" /><section className="ae-concept-copy"><Label>Concept B · Inline Boolean controls</Label><h3>Extend the model users already know.</h3><p>Inside the existing Advanced Search structure, AND / OR sat beside modules, filters and multiple values; NOT appeared at value level after selection. <strong>Proximity</strong> and <strong>chunking</strong> kept logic close to its subject.</p><p>The strategic advantage was <strong>continuity</strong>. Boolean logic became an extension of Advanced Search and stayed connected to the objects users were already familiar with.</p><p className="ae-concept-tradeoff">The trade-off: <strong>query visibility at scale</strong></p><p>The hypothesis behind Concept B was:</p><p className="ae-concept-hypothesis"><strong>If Boolean logic was embedded into the existing workflow, users could gain more expressive search capability.</strong></p></section></article></div><DecisionCriteria /><section className="ae-claude-note"><header><ClaudeIcon /><div><Label>Prototype tooling</Label><h3>I prototyped behaviour, not just screens</h3></div></header><p>I built both concepts as high-fidelity interactive prototypes in <strong>Claude Design</strong>. This allowed me to closely reproduce Altrata's design system and the behaviour of the live Advanced Search experience, making the concepts feel like realistic product extensions rather than standalone prototypes.</p><p>The sessions could focus on <strong>creating, understanding, modifying and recovering from a mistake</strong>, rather than prototype limitations.</p><p>Claude Design also enabled <strong>rapid iteration between research rounds</strong>, allowing concepts to evolve based on feedback without waiting for engineering implementation.</p></section></>
      break
    case 'round-1':
      content = <><p>I started internally to identify <strong>structural, technical and usability risks</strong> while they were inexpensive to change. This round was not intended to validate the final direction with clients.</p><RoundOneSnapshot /><h3>Qualitative findings</h3><AltrataQualitativeFindings /><div className="ae-research-note"><Label>Research adjustment</Label><h3>Distinguishing between <strong>capability and usability</strong></h3><p>A concept could feel powerful yet remain difficult to operate. From the next round, we focused on ease of building and <strong>confidence that the resulting query represented the intended logic</strong>.</p></div></>
      break
    case 'round-2':
      content = <><p>Round one tested whether the concepts were coherent. Round two tested whether they matched <strong>the searches clients actually needed to perform</strong>. I sampled across verticals and technical confidence, asking colleagues to bring complex real client requests.</p><Method people="8 · Commercial, Account Management and Client Success" task="A complex client search each participant brought" design="Both concepts per participant; counterbalanced order" /><h3>The search summary became the answer to a query visibility problem</h3><p>Participants constantly used the search summary to <strong>check their own work</strong> and valued editing without repeatedly scrolling through the panel. They used the written query to read back their criteria and identify mistakes. <strong>Recognition replaced recall.</strong></p><Schematic kind="summary" /><p>The summary evolved beyond confirmation text: users could <strong>edit values, switch inclusion and exclusion, remove criteria, change operators and add filters</strong>.</p><ImageSpace after={241} /><div className="ae-research-note"><Label>Keeping the comparison fair</Label><h4>Both concepts needed the same verification layer.</h4><p>Only B initially had the summary. A preference for B could therefore reflect the summary rather than the inline model. I added it to A before client testing to <strong>remove that confounding variable</strong>.</p></div><CollaborationOpportunity /><section className="ae-commercial-opportunity"><Label>Commercial opportunity</Label><h3>Demonstrate the value of saved effort to clients — Renewal conversation</h3><p>Participants described how <strong>reducing manual prospecting time</strong> could become part of a renewal conversation. One illustrative model compared an $XXk subscription against approximately $XXk of saved effort: a $XXk net value story.</p><p>It showed how <strong>workflow improvements</strong> could be translated into a renewal conversation.</p><p className="ae-caption">A commercial value model, <strong>not a measured product outcome</strong>.</p></section><h3>Cross-module Boolean was technically possible, but the user value was unclear</h3><BooleanScopeFinding /><section className="ae-natural-language-finding"><AnnotatedScreen src="/case-studies/altrata/round-two-filter-value-search.png" alt="Advanced Search filter picker with a search field that accepts filter names or values" intro={<><h3 className="ae-natural-language-title">Users kept trying to search in natural language</h3><p>Before navigating through the filter architecture, participants instinctively looked for somewhere to <strong>type what they wanted</strong> and used keyword search immediately. Others searched for donation, role and location values rather than knowing which filter contained them.</p><p>Full <strong>natural-language search</strong> was <strong>outside scope</strong>. We extended filter search so users could search not only by <strong>filter name or category</strong>, but also by a <strong>value</strong>: CEO could surface Role title; United States could surface location or nationality filters.</p><p>This reduced the amount of <strong>recall</strong> required in both concepts.</p></>} callouts={[{ x: 6.5, y: 50.5, marker: 'none', title: 'Search by filter or value', text: <>Users can begin with familiar language such as “CEO” or “United States,” then discover the relevant filter without first knowing the information architecture.</> }]} /></section><ExclusionFinding /><ValueSpecificExclusion /><h3>Test the model against professional experience</h3><div className="ae-dependency"><Label>Role status · Engineering dependency</Label><h4>The sessions also surfaced a more domain-specific requirement: <strong>current versus past roles</strong>.</h4><p>For executive-search scenarios, participants surfaced a common search: find someone with <strong>past CFO experience</strong> who <strong>currently sits on a board</strong>. This required Current and Past capability in the role filter.</p><p>A check with Engineering exposed a backend constraint: the existing API might not support the required granularity. The intended interaction and <strong>backend dependency</strong> were therefore documented for scope or roadmap prioritisation.</p></div><RoundTwoWrapUp /><RoundTwoPrototypes /></>
      break
    case 'round-3':
      content = <><p>Client recruitment took more coordination, but we reached six clients across verticals with broadly moderate technical confidence. This time, <strong>each person tested only one concept</strong> to avoid prior exposure influencing the comparison.</p><Method people="6 clients · 3 per concept" task="The same benchmark search" design="Between-subject study" /><div className="ae-split"><section><Label>Benchmark · Senior technology and finance executives</Label><ul>{source.slice(305,311).map(t=><li key={t}>{t.replace(/^•\s*/, '')}</li>)}</ul></section><section><Label>Behavioural signals</Label><h4>Task success</h4><p>Did the final query represent the intended criteria?</p><h4>Time to complete</h4><p>How efficiently could clients construct the same query?</p><h4>Recovery and confidence</h4><p>Could they recognise and correct mistakes, then understand the result?</p></section></div><div className="ae-benchmark"><div><Label>Concept A · Task success</Label><strong>1 / 3</strong><div className="ae-people" aria-label="One of three succeeded"><i /><i className="empty" /><i className="empty" /></div></div><div><Label>Concept B · Task success</Label><strong>3 / 3</strong><div className="ae-people" aria-label="Three of three succeeded"><i /><i /><i /></div></div><div><Label>Benchmark completion</Label><strong>~44%</strong><p>faster with Concept B</p></div></div><p className="ae-caption"><strong>Small sample: directional results</strong>, consistent with behaviours observed in earlier rounds.</p><RoundThreeFindings /><Copy from={330} /><div className="ae-research-note"><Label>The value of the research sequence</Label><p>Customer-facing teams anticipated the need for a familiar panel, unambiguous connectors and a readable query. They did not replace client research; <strong>they removed predictable problems</strong> before limited client access was used to validate the direction. Remaining issues were mostly minor usability or prototype-fidelity problems.</p></div></>
      break
    case 'direction':
      content = <><p>Task completion, benchmark speed, confidence and exploratory search behaviour <strong>all pointed to Concept B</strong>.</p><div className="ae-convergence">
        <section className="ae-convergence-foundation"><header><span className="ae-convergence-number" aria-hidden="true">01</span><div><Label>From Concept B</Label><small>Foundation</small></div></header><h3>Familiarity + discovery</h3><p>Keep the panel, support browsing and let users shape their search progressively.</p></section>
        <div className="ae-convergence-join" aria-hidden="true"><span>+</span><small>Combine strengths</small></div>
        <section className="ae-convergence-strength"><header><span className="ae-convergence-number" aria-hidden="true">02</span><div><Label>Learned from Concept A</Label><small>Added strength</small></div></header><h3>Visibility + control</h3><p>Make query relationships <strong>readable, verifiable and directly editable</strong>.</p></section>
      </div><Takeaway>{source[352]}</Takeaway><Copy from={353} /></>
      break
    case 'impact':
      content = <><WorkflowImpactComparison /><div className="ae-impact-number"><strong><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6l6 6 4-4 6 6" /><path d="M15 14h5V9" /></svg><span>~65%</span></strong><p>reduction in time to create an actionable prospect list</p></div><Copy from={375} to={376} /><div className="ae-impact-cards"><Cards items={[
        ['↗', 'For the business', 'A consistent capability across verticals reduced the cost of rework and created a more coherent customer experience, supporting satisfaction and retention.'],
        ['≡', 'For Product & Engineering', 'A shared model reduced the likelihood of repeated design, validation, engineering and rollout as the same need emerged in other modules.'],
        ['⌁', 'For delivery planning', 'Dependencies such as role status and saved-query persistence were surfaced early, separating intended behaviour from immediate API capability.'],
      ]} /></div></>
      break
    case 'measurement':
      content = <><Copy from={401} /><div className="ae-decision-pair"><div><h3>Measure the query, not a feature entry.</h3><p>Working with Engineering, we captured Advanced Search events in Amplitude. A query counted as Boolean when it used an explicit <strong>OR or exclusion</strong>; existing default AND behaviour did not count.</p><p>We also tracked export, save, add to list and share as <strong>meaningful downstream actions</strong>.</p></div><div className="ae-event"><Label>Query properties</Label><code>has_boolean = true</code><code>operators_used = OR / NOT</code><code>boolean_modules = Role / Location / Experience</code></div></div><div className="ae-split ae-kpis"><section><Label>45-day result</Label><div className="ae-kpi-heading"><strong className="ae-kpi-number">42%</strong><span>Adoption</span></div><h3>Are users using the capability?</h3><p>Of users creating multi-filter Advanced Searches used Boolean logic in <strong>the first 45 days</strong>.</p><h4>Measurement framework</h4><p>Unique users running at least one Boolean query ÷ Advanced Search users. Review by vertical, module, operator and account type.</p><p>Cross-module usage mattered because it tested the decision to build beyond Location.</p></section><section><Label>45-day result</Label><div className="ae-kpi-heading"><strong className="ae-kpi-number">72%</strong><span>Actionable searches</span></div><h3>Does usage lead to meaningful work?</h3><p>Of Boolean queries resulted in export, save, add to list or share.</p><h4>Measurement framework</h4><p>Boolean query executed → meaningful downstream action.</p><p><strong>Adoption alone does not show value</strong>. This measure connected search construction with completed prospecting workflows.</p></section></div><p className="ae-caption">The reported adoption result uses the multi-filter search cohort; the broader measurement framework covers Advanced Search users.</p><Copy from={440} /></>
      break
    case 'future-ai':
      content = <><div className="ae-ai-direction"><section><Label>Already in development</Label><h3>AI assistant for niche searches</h3><p>An in-platform assistant could search, recommend and export results, but presented them <strong>ten at a time in chat</strong>. It was best suited to narrow, recommendation-led searches rather than large or exploratory result sets.</p></section><section><Label>Roadmap opportunity</Label><h3>Natural language inside Advanced Search</h3><p>A user could write a short request and AI would translate it into the existing filters, values and <strong>editable search summary</strong>—bringing AI support to bulk and exploratory searches without hiding the query logic.</p></section></div><p className="ae-caption">This was outside the delivery scope, but captured as a future AI-assisted search direction.</p></>
      break
    case 'reflection':
      content = <><div className="ae-reflections">{[
        ['01', 'Make research measurable from the start', 'The qualitative evidence was strong, but a consistent framework across all three rounds would make the progression easier to compare.', 'Define task success, time to build, confidence and recovery before round one.'],
        ['02', 'Separate exploratory and criteria-ready searches earlier', 'A key client finding arrived late: some people arrive with exact criteria; others need to browse to discover them.', 'Frame concept hypotheses around these two search behaviours from discovery.'],
        ['03', 'Treat query visibility as a shared principle', 'Creating a query and understanding it proved to be different problems. The summary became central to verification and communication.', 'Give both concepts a verification layer from the beginning, so the comparison focuses on construction.'],
      ].map(([n,title,learning,next])=><section key={n}><span>{n}</span><div><h3>{title}</h3><p>{emphasizeAltrata(learning)}</p><p><strong>Next time:</strong> {next}</p></div></section>)}</div></>
      break
    default:
      return <>{children}</>
  }
  return <div className="ae-editorial">{content}</div>
}
