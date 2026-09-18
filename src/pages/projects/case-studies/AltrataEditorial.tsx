import type { ComponentType, ReactNode } from 'react'
import source from './altrata-content.json'
import AltrataExistingScreen from './AltrataExistingScreen'
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

function Method({ people, task, design }: { people: string; task: string; design: string }) {
  return <dl className="ae-method"><div><dt>Participants</dt><dd>{people}</dd></div><div><dt>Task</dt><dd>{task}</dd></div><div><dt>Study design</dt><dd>{design}</dd></div></dl>
}

function Schematic({ kind }: { kind: 'logic' | 'summary' | 'exclude' | 'discovery' }) {
  return <figure className="ae-schematic"><figcaption>Interaction principle · illustrative diagram</figcaption>
    {kind === 'logic' && <><div className="ae-query-row"><span>Role title</span><b>CEO</b><em>OR</em><b>CTO</b></div><div className="ae-connector">AND</div><div className="ae-query-row"><span>Location</span><b>New York</b><em>OR</em><b>Washington</b></div><p>Alternatives stay inside a clear criterion. The complete relationship is reviewed in the summary.</p></>}
    {kind === 'summary' && <><div className="ae-query-row"><span>Explore</span><b>Role</b><b>Location</b><b>Experience</b></div><div className="ae-connector">↓</div><div className="ae-query-sentence">Find <strong>CEO or CTO</strong>, based in <strong>New York or Washington</strong>, excluding <strong>existing clients</strong>.</div><div className="ae-capabilities"><span>Review criteria</span><span>Edit values</span><span>Change operators</span><span>Add filter</span></div></>}
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
      content = <><Copy from={106} to={107} /><div className="ae-concept-comparison"><article><PrototypeVideo concept="Concept A" src="/case-studies/altrata/concept-a-prototype.mp4" poster="/case-studies/altrata/concept-a-poster.jpg" /><section className="ae-concept-copy"><Label>Concept A</Label><h3>A dedicated logic builder</h3><p>Users moved from the filter panel into a structured builder, with explicit conditions, connectors and exclusions.</p><p>The strategic advantage was <strong>explicit control and visibility</strong>, allowing power users to inspect relationships between conditions and directly manipulate the query they were creating.</p><p className="ae-concept-tradeoff">The trade-off: <strong>Introducing a second search model</strong></p><p>The hypothesis behind Concept A was:</p><p className="ae-concept-hypothesis"><strong>If users could explicitly see and control the query structure, they would have greater confidence when building complex searches.</strong></p></section></article><article><PrototypeVideo concept="Concept B" src="/case-studies/altrata/concept-b-prototype.mp4" poster="/case-studies/altrata/concept-b-poster.jpg" /><section className="ae-concept-copy"><Label>Concept B · Inline Boolean controls</Label><h3>Extend the model users already know.</h3><p>Inside the existing Advanced Search structure, AND / OR sat beside modules, filters and multiple values; NOT appeared at value level after selection. <strong>Proximity</strong> and <strong>chunking</strong> kept logic close to its subject.</p><p>The strategic advantage was <strong>continuity</strong>. Boolean logic became an extension of Advanced Search and stayed connected to the objects users were already familiar with.</p><p className="ae-concept-tradeoff">The trade-off: <strong>query visibility at scale</strong></p><p>The hypothesis behind Concept B was:</p><p className="ae-concept-hypothesis"><strong>If Boolean logic was embedded into the existing workflow, users could gain more expressive search capability.</strong></p></section></article></div><DecisionCriteria /><h3>I prototyped behaviour, not just screens</h3><p>I built both as high-fidelity interactive prototypes in <strong>Claude Design</strong>, closely reproducing Altrata’s design system and live search behaviour. The sessions could focus on creating, understanding, modifying and recovering a query, rather than prototype limitations.</p><Copy from={139} /><blockquote>{source[142]}</blockquote></>
      break
    case 'round-1':
      content = <><p>I started internally to identify <strong>structural, technical and usability risks</strong> while they were inexpensive to change. This round was not intended to validate the final direction with clients.</p><Method people="9 · Engineering, Data, Product and experienced colleagues" task="Realistic search scenarios supplied to everyone" design="Both concepts per participant; counterbalanced order" /><div className="ae-score-grid"><div><Label>Ease of completion · SEQ</Label><strong>5.1 <small>/ 7 · A</small></strong><strong>5.2 <small>/ 7 · B</small></strong></div><div><Label>Overall preference</Label><strong>4 <small>for A</small></strong><strong>5 <small>for B</small></strong></div><p>The scores were close and directional. <strong>The friction was more informative than preference.</strong> We also assessed confidence that the query matched the intended criteria.</p></div><h3>What the two models revealed</h3><Table headings={['Finding', 'Why it mattered', 'Next iteration']} rows={[
        ['B · Too many connectors', 'Users could not tell which conditions a module-level connector controlled', 'Show operators only when relevant criteria are active'],
        ['B · Hard to verify the whole query', 'Users had to scroll back and mentally reconstruct the logic', 'Introduce a readable search summary'],
        ['A · Rigid condition structure', 'Related values such as CEO OR CFO were expected to form one group', 'Group related values within the same field'],
        ['A · Exclusion too broad', 'Negating an entire condition made mixed inclusion and exclusion difficult', 'Move exclusion to individual values'],
        ['A · Technical operators', 'Labels such as is not and range conditions were less intuitive', 'Use clearer, more natural language'],
      ]} /><h3>Less noise, the same expressive power</h3><Schematic kind="logic" /><p>In this iteration, module and filter connectors appeared <strong>only when both sides contained active criteria</strong>. Value-level operators appeared after multiple values were selected.</p><ImageSpace after={171} /><div className="ae-split"><section><Label>Question kept open</Label><h3>Was cross-module OR useful?</h3><p>Internal participants saw limited value, but the builder made its scope clearer. I kept it in Concept A for the next round rather than turning an internal observation into a product rule.</p></section><section><Label>Research adjustment</Label><h3>Measure confidence, not broad usefulness.</h3><p>A concept could feel powerful yet remain difficult to operate. From the next round, we focused on ease of building and <strong>confidence that the resulting query represented the intended logic</strong>.</p></section></div><Takeaway>{source[179]}</Takeaway></>
      break
    case 'round-2':
      content = <><p>Round one tested whether the concepts were coherent. Round two tested whether they matched <strong>the searches clients actually needed to perform</strong>. I sampled across verticals and technical confidence, asking colleagues to bring complex real client requests.</p><Method people="8 · Commercial, Account Management and Client Success" task="A complex client search each participant brought" design="Both concepts per participant; counterbalanced order" /><div className="ae-round-map"><span>01 Simplify relationships</span><span>02 Make queries readable</span><span>03 Improve discovery</span><span>04 Validate the domain model</span></div><h3>01 · Move relationships to where they can be understood</h3><p>OR within a criterion was easy to explain: CEO OR CTO, New York OR Washington. <strong>OR between unrelated modules was harder</strong>: participants struggled to offer convincing client scenarios or identify the connector’s scope.</p><Table headings={['Evidence', 'Design response', 'Reasoning']} rows={[
        ['P2 questioned why Location and Role needed OR; they were normally parts of one requirement', 'Remove module-level connectors from Concept B’s panel', 'Their cognitive cost exceeded demonstrated value'],
        ['P4 preferred reading relationships left-to-right', 'Move higher-level AND / OR into the summary', 'Users can read and change the relationship in context'],
        ['Concept A made condition boundaries explicit', 'Keep cross-condition AND / OR in the builder for client testing', 'Validate the capability where its scope was clearer'],
      ]} /><Takeaway>{source[229]}</Takeaway><h3>02 · Turn the summary into a place to verify and edit</h3><p>P5 valued editing without repeatedly scrolling through the panel. P2 used the written query to read back her criteria and identify mistakes. <strong>Recognition replaced recall.</strong></p><Schematic kind="summary" /><p>The summary evolved beyond confirmation text: users could <strong>edit values, switch inclusion and exclusion, remove criteria, change operators and add filters</strong>.</p><ImageSpace after={241} /><div className="ae-research-note"><Label>Keeping the comparison fair</Label><h4>Both concepts needed the same verification layer.</h4><p>Only B initially had the summary. A preference for B could therefore reflect the summary rather than the inline model. I added it to A before client testing to <strong>remove that confounding variable</strong>.</p></div><div className="ae-split"><section><Label>Collaboration opportunity</Label><h3>Let the criteria travel with the list.</h3><p>A prospect developer might export results for a gift officer without an Altrata seat. We explored <strong>including the summary in exports</strong>, and <strong>sharing the query state</strong> so another researcher could inspect, modify and continue the work.</p></section><section><Label>Commercial opportunity</Label><h3>Explain the value of saved effort.</h3><p>Maggie described using saved prospecting time in renewal conversations. Her illustrative model compared an $11k subscription against approximately $25k of saved effort: a $14k net value story.</p><p className="ae-caption">A commercial value model, <strong>not a measured product outcome</strong>.</p></section></div><h3>03 · Meet users at the moment of intent</h3><div className="ae-decision-pair"><div><h4>Find values without knowing the filter architecture.</h4><p>P7 looked for keyword search immediately. Others searched for donations, roles and locations rather than knowing which filter contained them.</p><p>Full natural-language search was outside scope. We extended filter search to names, categories <strong>and values</strong>: CEO could surface Role title → Chief Executive Officer; United States could surface location or nationality filters.</p></div><Schematic kind="discovery" /></div><ImageSpace after={266} /><div className="ae-decision-pair"><div><h4>Expose exclusion before selection.</h4><p>P1 quickly understood the selected value’s is / not toggle. But users intending to exclude something had no indication that NOT existed before making a selection.</p><p>I added <strong>Include / Exclude inside the dropdown</strong>, keeping the compact control afterwards. In A, exclusion also became value-specific, allowing CEO OR CTO, but NOT CFO within one group.</p></div><Schematic kind="exclude" /></div><ImageSpace after={273} /><h3>04 · Test the model against professional experience</h3><div className="ae-dependency"><Label>Role status · Engineering dependency</Label><h4>Past CFO experience + current board membership</h4><p>Monika described current-or-prior CFO experience plus board experience as a common search. We added current/past status to the model, then checked it with Engineering. The API might require greater granularity, so the intended interaction and <strong>backend dependency</strong> were documented for scope or roadmap prioritisation.</p></div><Takeaway>Different verticals used different filters, but repeatedly needed the same logic. One reusable model avoided another cycle of design, engineering and a new usability pattern for every module.</Takeaway></>
      break
    case 'round-3':
      content = <><p>Client recruitment took more coordination, but we reached six clients across verticals with broadly moderate technical confidence. This time, <strong>each person tested only one concept</strong> to avoid prior exposure influencing the comparison.</p><Method people="6 clients · 3 per concept" task="The same benchmark search" design="Between-subject study" /><div className="ae-split"><section><Label>Benchmark · Senior technology and finance executives</Label><ul>{source.slice(305,311).map(t=><li key={t}>{t.replace(/^•\s*/, '')}</li>)}</ul></section><section><Label>Behavioural signals</Label><h4>Task success</h4><p>Did the final query represent the intended criteria?</p><h4>Time to complete</h4><p>How efficiently could clients construct the same query?</p><h4>Recovery and confidence</h4><p>Could they recognise and correct mistakes, then understand the result?</p></section></div><div className="ae-benchmark"><div><Label>Concept A · Task success</Label><strong>1 / 3</strong><div className="ae-people" aria-label="One of three succeeded"><i /><i className="empty" /><i className="empty" /></div></div><div><Label>Concept B · Task success</Label><strong>3 / 3</strong><div className="ae-people" aria-label="Three of three succeeded"><i /><i /><i /></div></div><div><Label>Benchmark completion</Label><strong>~44%</strong><p>faster with Concept B</p></div></div><p className="ae-caption"><strong>Small sample: directional results</strong>, consistent with behaviours observed in earlier rounds.</p><h3>The difference was how clients formed their search</h3><Table headings={['Behaviour', 'Concept A', 'Concept B']} rows={[
        ['Starting the search', 'Stronger fit for translating a predefined query', 'Visible filters helped clients discover and refine criteria'],
        ['Constructing the benchmark', 'More effort interpreting and arranging condition structure', 'More direct translation from intent into familiar filters'],
        ['Recovering from mistakes', 'Possible, but required deliberate reasoning through structure', 'Clients traced errors back to familiar filters and values'],
      ]} /><Copy from={330} /><div className="ae-research-note"><Label>The value of the research sequence</Label><p>Customer-facing teams anticipated the need for a familiar panel, unambiguous connectors and a readable query. They did not replace client research; <strong>they removed predictable problems</strong> before limited client access was used to validate the direction. Remaining issues were mostly minor usability or prototype-fidelity problems.</p></div></>
      break
    case 'direction':
      content = <><p>Task completion, benchmark speed, confidence and exploratory search behaviour <strong>all pointed to Concept B</strong>.</p><div className="ae-convergence"><section><Label>From Concept B</Label><h3>Familiarity + discovery</h3><p>Keep the panel, support browsing and let users shape their search progressively.</p></section><span aria-hidden="true">+</span><section><Label>Learned from Concept A</Label><h3>Visibility + control</h3><p>Make query relationships <strong>readable, verifiable and directly editable</strong>.</p></section></div><Takeaway>{source[352]}</Takeaway><Copy from={353} /></>
      break
    case 'impact':
      content = <><div className="ae-split"><section><Label>Before · Fragmented workflow</Label><div className="ae-flow"><span>CEO search → Export</span><span>CTO search → Export</span><span>CDO search → Export</span><b>↓</b><span>Merge + exclude manually</span><b>↓</b><span>Final prospect list</span></div></section><section><Label>After · One verified query</Label><div className="ae-flow"><span>(CEO OR CTO OR CDO)</span><span>AND (US OR Canada NOT CA/TX)</span><span>AND (Technology OR Financial Services NOT Consulting)</span><b>↓</b><span>Review the query summary</span><b>↓</b><span>One verified prospect list</span></div></section></div><div className="ae-impact-number"><strong>~60–70%</strong><p>reduction in time to create an actionable prospect list</p></div><Copy from={375} to={377} /><Cards items={[
        ['↗', 'For the business', 'Different verticals gained the same expressive capability across their relevant filters, reducing the likelihood of repeated design, validation, engineering and rollout.'],
        ['≡', 'For Product & Engineering', 'Shared rules for relationships, inclusion, exclusion, progressive controls and query editing gave the team a foundation to extend.'],
        ['⌁', 'For delivery planning', 'Dependencies such as role status and saved-query persistence were surfaced early, separating intended behaviour from immediate API capability.'],
      ]} /><Copy from={398} /></>
      break
    case 'measurement':
      content = <><Copy from={401} /><div className="ae-decision-pair"><div><h3>Measure the query, not a feature entry.</h3><p>Working with Engineering, we captured Advanced Search events in Amplitude. A query counted as Boolean when it used an explicit <strong>OR or exclusion</strong>; existing default AND behaviour did not count.</p><p>We also tracked export, save, add to list and share as <strong>meaningful downstream actions</strong>.</p></div><div className="ae-event"><Label>Query properties</Label><code>has_boolean = true</code><code>operators_used = OR / NOT</code><code>boolean_modules = Role / Location / Experience</code></div></div><div className="ae-split ae-kpis"><section><Label>45-day result · Adoption</Label><strong className="ae-kpi-number">42%</strong><h3>Are users using the capability?</h3><p>Of users creating multi-filter Advanced Searches used Boolean logic in <strong>the first 45 days</strong>.</p><h4>Measurement framework</h4><p>Unique users running at least one Boolean query ÷ Advanced Search users. Review by vertical, module, operator and account type.</p><p>Cross-module usage mattered because it tested the decision to build beyond Location.</p></section><section><Label>45-day result · Actionable searches</Label><strong className="ae-kpi-number">72%</strong><h3>Does usage lead to meaningful work?</h3><p>Of Boolean queries resulted in export, save, add to list or share.</p><h4>Measurement framework</h4><p>Boolean query executed → meaningful downstream action.</p><p><strong>Adoption alone does not show value</strong>. This measure connected search construction with completed prospecting workflows.</p></section></div><p className="ae-caption">The reported adoption result uses the multi-filter search cohort; the broader measurement framework covers Advanced Search users.</p><Copy from={440} /></>
      break
    case 'learning':
      content = <><Cards items={[
        ['01', 'The need extended beyond Location', 'Boolean usage across modules reinforced the decision to define one model for different customer workflows.'],
        ['02', 'Visibility created value beyond complexity', 'The readable query helped users verify and communicate the reasoning behind prospect lists.'],
        ['03', 'Keep measuring the workflow', 'Track repeat usage, adoption by vertical and module, saved and shared searches, exports, manual work and support requests.'],
      ]} /></>
      break
    case 'reflection':
      content = <><div className="ae-reflections">{[
        ['01', 'Make research measurable from the start', 'The qualitative evidence was strong, but a consistent framework across all three rounds would make the progression easier to compare.', 'Define task success, time to build, confidence and recovery before round one.'],
        ['02', 'Separate exploratory and criteria-ready searches earlier', 'A key client finding arrived late: some people arrive with exact criteria; others need to browse to discover them.', 'Frame concept hypotheses around these two search behaviours from discovery.'],
        ['03', 'Treat query visibility as a shared principle', 'Creating a query and understanding it proved to be different problems. The summary became central to verification and communication.', 'Give both concepts a verification layer from the beginning, so the comparison focuses on construction.'],
      ].map(([n,title,learning,next])=><section key={n}><span>{n}</span><div><h3>{title}</h3><p>{emphasizeAltrata(learning)}</p><p><strong>Next time:</strong> {next}</p></div></section>)}</div><blockquote>{source[472]}</blockquote></>
      break
    default:
      return <>{children}</>
  }
  return <div className="ae-editorial">{content}</div>
}
