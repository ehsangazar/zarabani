import { useState } from 'react'
import './pathfinder-decisions.css'

function StrengthComparison({ updated }: { updated: boolean }) {
  const strengths = ['Strong', 'Moderate', 'Weak']
  return <div className={'pf-decisions__encoding ' + (updated ? 'pf-decisions__encoding--after' : '')}>
    <p className="pf-decisions__eyebrow">{updated ? 'Redesigned encoding' : 'Original encoding'}</p>
    <h4>{updated ? 'One consistent strength signal' : 'Separate visual signals'}</h4>
    {strengths.map((label, index) => <div className="pf-decisions__strength-row" key={label}>
      <span>{label}</span>
      <svg viewBox="0 0 240 36" aria-hidden="true">
        <path d="M4 18H236" stroke={updated ? ['#001a3d', '#4c729b', '#a9bdd3'][index] : '#06193b'} strokeWidth={[8, 5, 1.5][index]} />
        <circle cx="120" cy="18" r="13" fill={updated ? ['#001a3d', '#4c729b', '#a9bdd3'][index] : '#fff'} stroke={updated ? ['#001a3d', '#4c729b', '#a9bdd3'][index] : ['#ff0079', '#e9bd54', '#b2b2b2'][index]} />
        <path d="m116 22 8-8m-4 0h4v4m-8 0v4h4" stroke={updated && index < 2 ? '#fff' : '#001a3d'} fill="none" strokeWidth="1.3" />
      </svg>
    </div>)}
    <p>{updated ? 'Weight, colour intensity and the expand icon reinforce the same meaning.' : 'Navy lines vary in weight; pink, yellow and grey icons add a separate colour system.'}</p>
  </div>
}

function DesignComparison({ grouping = false }: { grouping?: boolean }) {
  return <div className="pf-decisions__before-after">
    <figure className="pf-decisions__before">
      <p className="pf-decisions__eyebrow">Before</p>
      <a href="/case-studies/pathfinder/previous-lost-context.png" target="_blank" rel="noreferrer"><img src="/case-studies/pathfinder/previous-lost-context.png" alt="Previous Pathfinder during scrolling, with dense connection lines continuing beyond the viewport and the shared intermediary out of sight" loading="lazy" /></a>
      <figcaption>{grouping ? 'The intermediary is outside the viewport. Visible paths give no clear sense of their shared person or the size of the group.' : 'Repeated lines from the source create dense bundles; the organisation and shared-person nodes disappear as users scroll.'}</figcaption>
    </figure>
    <figure className="pf-decisions__after">
      <p className="pf-decisions__eyebrow">After · Redesigned structure</p>
      <div className="pf-decisions__annotated-image">
        <a href={'/case-studies/pathfinder/' + (grouping ? 'design-group-collapsed.png' : 'design-anchoring.png')} target="_blank" rel="noreferrer"><img src={'/case-studies/pathfinder/' + (grouping ? 'design-group-collapsed.png' : 'design-anchoring.png')} alt={grouping ? 'Redesigned group: five visible connections, Cameron Ng as the shared person, a 30 connections count and Show 25 more control' : 'Redesigned chart during scrolling, with Alphabet and Apple as fixed side references and Cameron Ng visible beside the related paths'} loading="lazy" /></a>
        {grouping && <>
          <span className="pf-decisions__callout" style={{ left: '58%', top: '33%', width: '20%', height: '7%' }} aria-hidden="true"><b>A</b></span>
          <span className="pf-decisions__callout" style={{ left: '22%', top: '90%', width: '15%', height: '8%' }} aria-hidden="true"><b>B</b></span>
        </>}
      </div>
      <figcaption>{grouping ? 'The shared person, group size and next action are visible together.' : 'Fixed organisation references reduce repetitive source lines. Sticky shared nodes preserve context while the related connections scroll.'}</figcaption>
      {grouping && <div className="pf-decisions__callout-key">
        <div><b>A</b><p><strong>Keep the scale visible.</strong> “30 connections” above the parent card communicates the full group size.</p></div>
        <div><b>B</b><p><strong>Reveal detail on demand.</strong> “Show 25 more” exposes the remaining paths without displaying the whole group at once.</p></div>
      </div>}
    </figure>
  </div>
}

export default function PathfinderDecisions() {
  const [prototypeOpen, setPrototypeOpen] = useState(false)
  return <section className="pf-decisions" id="design-decisions" aria-labelledby="pf-decisions-title">
    <header><p className="pf-decisions__eyebrow">Design decisions</p><h2 id="pf-decisions-title">Make relationships easier to read, follow and explore</h2><p>With the direction agreed, I focused on three connected decisions: how strength is communicated, how context stays visible, and how large groups reveal their connections.</p></header>

    <section className="pf-decisions__chapter"><p className="pf-decisions__eyebrow">Encoding</p><h3>Make every strength cue tell the same story</h3><p>I explored stroke weights and colour treatments, moving towards a monochromatic system. Stronger relationships became darker and thicker; moderate and weaker relationships became lighter and thinner, with matching expand icons.</p><figure><div className="pf-decisions__comparison"><StrengthComparison updated={false} /><StrengthComparison updated /></div><figcaption>Simplified comparison of the visual encoding: line weight, colour intensity and expand controls.</figcaption></figure></section>

    <section className="pf-decisions__chapter"><p className="pf-decisions__eyebrow">Anchoring</p><h3>Restructuring the connections and preserving context during scrolling</h3>
      <div className="pf-decisions__story"><p>Every path in the previous design started from the source organisations. As connections grew, repetitive lines tangled across the page. I rethought the structure, removing unnecessary source lines and turning the organisations into fixed reference points on either side.</p>
      <p>This reduced visual clutter, but shared intermediaries could still disappear during scrolling. I introduced sticky shared nodes so those people stayed visible while their related connections continued scrolling.</p></div>
      <DesignComparison />
      <div className="pf-decisions__notes"><div><h4>Validate fixed references with scrolling connections</h4><p>Combining these behaviours was technically challenging. Figma could not represent them accurately, so I built a coded prototype to explore and validate the interaction.</p></div><div><h4>Make the pattern work across the platform</h4><p>The same relationships appeared inside profile modules. I reviewed feasibility with Product and Engineering, and we identified an existing sticky pattern we could build on.</p></div></div>
      <p className="pf-decisions__structural-takeaway">Simplifying the underlying structure helped users follow complex relationships without losing context.</p>
    </section>

    <section className="pf-decisions__chapter"><p className="pf-decisions__eyebrow">Convergence</p><h3>Managing the density of the connections</h3><p>After exploring ways to group paths around a shared person, I combined visual grouping with progressive disclosure. The first few connections stay visible, while a count shows the full group size and a “Show more” control reveals the remaining paths.</p>
      <DesignComparison grouping />
    </section>

    <div className="pf-decisions__prototype"><div><p className="pf-decisions__eyebrow">Try the interaction</p><h3>Follow a shared connection as you scroll</h3><p>Select “See more connections”, expand a group with “Show more”, and scroll to see how the shared person stays in view.</p></div><button type="button" aria-expanded={prototypeOpen} aria-controls="pf-decisions-prototype" onClick={() => setPrototypeOpen(!prototypeOpen)}>{prototypeOpen ? 'Close prototype' : 'Open interactive prototype'}</button>
      {prototypeOpen && <div id="pf-decisions-prototype" className="pf-decisions__prototype-content"><a href="/case-studies/pathfinder/prototype.html" target="_blank" rel="noreferrer">Open full-size prototype in a new tab</a><div className="pf-decisions__prototype-viewport"><iframe src="/case-studies/pathfinder/prototype.html" title="Interactive Pathfinder prototype for strength, anchoring and grouped connections" sandbox="allow-scripts" /></div></div>}
    </div>
    <aside className="pf-decisions__takeaway"><p className="pf-decisions__eyebrow">Design principle</p><p>Preserve useful information while making complex relationships easier to follow, compare and interpret—even in large networks.</p></aside>
  </section>
}
