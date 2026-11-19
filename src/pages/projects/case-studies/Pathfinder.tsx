import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './pathfinder-case-study.css'

const assets = '/case-studies/pathfinder/'
const chapters = [
  ['context', 'The brief'], ['diagnosis', 'Finding the problem'], ['design', 'The redesign'],
  ['current-overlap', 'Current overlap'], ['validation', 'Validation'], ['collaboration', 'Delivery'],
  ['outcome', 'Outcome'], ['measurement', 'Measuring success'],
]

function Chapter({ id, number, label, title, children }: { id: string; number: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} className="pf-chapter">
    <header className="pf-chapter-heading"><span className="pf-chapter-number" aria-hidden="true">{number}</span><div><p className="pf-label">{label}</p><h2>{title}</h2></div></header>
    <div className="pf-chapter-body">{children}</div>
  </section>
}

function Figure({ src, alt, caption, crop = false, eager = false }: { src: string; alt: string; caption: ReactNode; crop?: boolean; eager?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null)
  return <figure className={`pf-figure${crop ? ' pf-figure-crop' : ''}`}>
    <button type="button" className="pf-image-button" onClick={() => dialog.current?.showModal()} aria-label={`Enlarge: ${alt}`}>
      <img src={assets + src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      <span className="pf-enlarge" aria-hidden="true">View full screen ↗</span>
    </button>
    <figcaption>{caption}</figcaption>
    <dialog ref={dialog} className="pf-lightbox" aria-label={alt} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
      <button type="button" className="pf-lightbox-close" onClick={() => dialog.current?.close()} aria-label="Close enlarged image">Close ×</button>
      <img src={assets + src} alt={alt} />
    </dialog>
  </figure>
}

function Decision({ children }: { children: ReactNode }) {
  return <aside className="pf-decision"><p className="pf-label">The design decision</p><p>{children}</p></aside>
}

function RouteDiagram() {
  return <figure className="pf-route-figure"><svg className="pf-route-diagram" viewBox="0 0 1000 300" role="img" aria-labelledby="pf-route-title pf-route-desc">
    <title id="pf-route-title">Choosing between relationship paths</title><desc id="pf-route-desc">A starting network reaches a target through three possible connectors. The middle path has a stronger relationship signal.</desc>
    <g fill="none" stroke="#bfc1d0" strokeWidth="2"><path d="M130 150H240V60H400M130 150H400M130 150H240V240H400M580 60H740V150H870M580 240H740V150" /></g>
    <path d="M130 150H870" stroke="#513deb" strokeWidth="7" fill="none" />
    <g fill="#fff" stroke="#dcdce6"><rect x="0" y="115" width="180" height="70" rx="8" /><rect x="820" y="115" width="180" height="70" rx="8" /><rect x="390" y="30" width="220" height="60" rx="8" /><rect x="390" y="120" width="220" height="60" rx="8" /><rect x="390" y="210" width="220" height="60" rx="8" /></g>
    <g fill="#242431" fontSize="17" textAnchor="middle"><text x="90" y="157">Your network</text><text x="910" y="157">Your target</text><text x="500" y="67">Possible connector</text><text x="500" y="157">Stronger relationship</text><text x="500" y="247">Possible connector</text></g>
  </svg><figcaption>A simplified model of the decision: which relationship is worth following up?</figcaption></figure>
}

function Prototype() {
  const [open, setOpen] = useState(false)
  return <section className="pf-prototype" aria-label="Interactive Pathfinder prototype">
    <header><div><p className="pf-label">Explore the interaction</p><h3>See what stays in view as you scroll</h3></div><button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="pf-demo">{open ? 'Close prototype −' : 'Open prototype ↗'}</button></header>
    {open && <div id="pf-demo"><p className="pf-prototype-hint">Scroll inside the prototype, expand a connection group, and open a relationship’s detail.</p><iframe title="Pathfinder redesign: interactive scrolling and grouped connections" src={assets + 'prototype.html'} sandbox="allow-scripts" loading="lazy" /><a href={assets + 'prototype.html'} target="_blank" rel="noreferrer">Open the prototype in a separate tab ↗</a></div>}
  </section>
}

function ResearchOrder() {
  return <div className="pf-order" role="region" aria-label="Counterbalanced order of the overlap indicators" tabIndex={0}>
    <table><caption>Six internal participants · both treatments in the design</caption><thead><tr><th scope="col">Participants</th><th scope="col">First position</th><th scope="col">Later position</th></tr></thead><tbody>
      <tr><th scope="row">People 1–3</th><td><span className="pf-dot" aria-hidden="true" /> Green dot</td><td><span className="pf-ring" aria-hidden="true" /> Green ring</td></tr>
      <tr><th scope="row">People 4–6</th><td><span className="pf-ring" aria-hidden="true" /> Green ring</td><td><span className="pf-dot" aria-hidden="true" /> Green dot</td></tr>
    </tbody></table>
  </div>
}

export default function Pathfinder() {
  const [active, setActive] = useState('context')
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
    }, { rootMargin: '-15% 0px -65% 0px' })
    document.querySelectorAll('.pf-chapter').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <article className="pf-study">
    <header className="pf-opening">
      <p className="pf-intro">I inherited a relationship chart that became harder to use as the network grew. I reframed the work around <strong>keeping context while scrolling</strong>, then owned the redesign from diagnosis and prototyping through validation and implementation review.</p>
      <dl className="pf-meta"><div><dt>My role</dt><dd>Product Designer<br />Design owner</dd></div><div><dt>Team</dt><dd>Product · Design<br />Engineering · Commercial</dd></div><div><dt>Timeline</dt><dd>May–August 2026</dd></div><div><dt>Product</dt><dd>Altrata · Enterprise SaaS<br />Relationship intelligence</dd></div></dl>
      <Figure src="redesign-overview.png" alt="Pathfinder redesign showing pinned organisations and grouped relationship paths" eager caption="The redesigned relationship view. The work centred on persistent context, a clearer strength hierarchy and grouped paths." />
    </header>

    <nav className="pf-nav" aria-label="Pathfinder case study sections">{chapters.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>

    <Chapter id="context" number="01" label="Context & responsibility" title="An existing product, a growing dataset and an unowned problem">
      <p>Altrata helps fundraisers, wealth managers and investment bankers find routes to people they do not yet know. Pathfinder visualises those routes through an organisation’s relationships, helping users decide who might make an introduction.</p>
      <RouteDiagram />
      <p>Altrata was consolidating acquired products into one platform. Pathfinder carried an earlier design into a larger dataset, and dense searches exposed assumptions that were less visible with a handful of results.</p>
      <div className="pf-two-column"><section><p className="pf-label">The brief I inherited</p><h3>Reduce visual fatigue</h3><p>Explore connection lines that became too long as users loaded more paths. A previous attempt had already widened the chart, but the usability problem remained.</p></section><section><p className="pf-label">What I owned</p><h3>Diagnosis through delivery</h3><p>I investigated the failure, developed the interaction and visual rules, built prototypes, designed the study and reviewed implementation. Product, design and engineering partners contributed throughout.</p></section></div>
      <Figure src="original-overview.png" alt="The earlier Pathfinder interface with long relationship lines and centrally positioned organisation nodes" caption="The inherited interface. Increasing the canvas width did not resolve the behaviour I found when navigating longer groups of paths." />
    </Chapter>

    <Chapter id="diagnosis" number="02" label="Reframing the problem" title="The paths were visible. What they pointed to was not.">
      <p>I examined larger searches, using Alphabet → Apple as a stress case. The issue became clearer when I followed a group through the scroll: <strong>several paths could converge on one person, then scrolling moved that person out of view.</strong> The lines remained, but their shared reference disappeared.</p>
      <p>The From and To fields were already available at the top. They identified the overall search, but did not tell users which intermediate person a particular bundle of paths led to.</p>
      <Figure src="original-audit.jpg" alt="My original audit annotation circling paths whose shared destination is outside the viewport" caption={<><b>From my original audit.</b> The annotation captures the specific question the chart could not answer at this scroll position: who do these paths connect to?</>} />
      <div className="pf-reframe" aria-label="How the problem definition changed"><div><span>Starting frame</span><p>Long lines and a crowded layout</p></div><span className="pf-flow-arrow" aria-hidden="true">→</span><div><span>My diagnosis</span><p>Lost reference points during scroll</p></div><span className="pf-flow-arrow" aria-hidden="true">→</span><div><span>Design response</span><p>Persistent anchors and clear groups</p></div></div>
      <Decision>Design for realistic data volumes and the whole interaction, rather than judging the chart only at the top of the page.</Decision>
      <p>The timing mattered: engineering was already building infinite scroll. I discussed the diagnosis with the principal PM so that the anchoring behaviour could be considered alongside the new scroll behaviour.</p>
    </Chapter>

    <Chapter id="design" number="03" label="Interaction & visual design" title="A few connected rules, rather than a bigger canvas">
      <p>I organised the redesign around three behaviours: keep reference points available, make strength easier to compare, and let people reveal detail selectively. The relationship pattern also appeared in profile modules, so the solution needed to hold in narrower containers.</p>

      <section className="pf-design-move"><div className="pf-move-heading"><span>01</span><div><h3>Anchor the relationship, not just the search</h3><p>Organisations stay available at the sides. Within a group, the shared person stays in view while the related paths scroll, then releases as that group ends.</p></div></div><Figure src="redesign-overview.png" alt="Redesigned Pathfinder with organisations separated from the scrolling connection paths" caption="Pinned organisations establish the overall context; the shared-person behaviour preserves the meaning of each group." /><p>I reused a sticky treatment already familiar from the platform’s network tables. I also checked the implementation cost with engineering before sprint commitment, because the behaviour affected more than one view.</p></section>

      <section className="pf-design-move"><div className="pf-move-heading"><span>02</span><div><h3>Make colour and thickness tell the same story</h3><p>The old chart asked users to decode separate colour and thickness signals. I aligned them: stronger relationships became darker and thicker; weaker ones became lighter and thinner.</p></div></div><div className="pf-strength" aria-label="Relationship strength encoded by both line darkness and thickness"><div><i className="pf-strength-strong" /><b>Strong</b><span>Dark + thick</span></div><div><i className="pf-strength-medium" /><b>Moderate</b><span>Mid-tone + medium</span></div><div><i className="pf-strength-weak" /><b>Weak</b><span>Light + thin</span></div></div><Figure src="strength-system.png" alt="The actual prototype showing strong dark connectors and weaker pale connectors in a grouped relationship view" caption="The strength treatment in the actual design. The simplified legend above explains the rule; it is not a separate product screen." /><p>This also freed colour for another useful signal: whether an overlap was current.</p></section>

      <section className="pf-design-move"><div className="pf-move-heading"><span>03</span><div><h3>Group paths around a shared person</h3><p>I explored zones, a zone with a shared-person indicator, and dividing lines. Group boundaries needed to stay recognisable without adding a heavy header or more visual competition.</p></div></div><div className="pf-scroll-comparison"><Figure src="grouping.png" alt="Prototype grouping multiple relationship paths into a shared visual zone" caption="Shared zones make related paths read as a group." /><Figure src="group-expanded.png" alt="Prototype showing an expanded group of connection paths" caption="Progressive disclosure lets users inspect more paths when the group is relevant." /></div><Decision>Keep the shared structure visible; reveal additional connections when the user chooses to inspect them.</Decision></section>
      <Prototype />
    </Chapter>

    <Chapter id="current-overlap" number="04" label="An opportunity I identified" title="Make a current overlap visible before the click">
      <p>While reviewing the chart, I noticed that users had to open a connection’s detail to discover whether the overlap was current or historical. I proposed bringing that distinction into the chart.</p>
      <p>I kept the addition small: a visual treatment on the connection itself, using green to match the platform’s existing convention for current roles. A historical connection could still matter, so I did not give its absence the same visual emphasis.</p>
      <div className="pf-scroll-comparison"><Figure src="current-dot.png" alt="Actual current-overlap exploration with a green dot on the relationship connector" caption={<><b>Option A · Green dot.</b> A small signal on the connector.</>} /><Figure src="current-ring.png" alt="Actual current-overlap exploration with a green ring around the relationship connector" caption={<><b>Option B · Green ring.</b> A treatment surrounding the expand control.</>} /></div>
      <p>I had a visual preference, but needed evidence about noticeability and meaning. Both treatments went into the prototype.</p>
      <a className="pf-inline-link" href={assets + 'indicator-prototype.html'} target="_blank" rel="noreferrer">Explore the indicator prototype ↗</a>
    </Chapter>

    <Chapter id="validation" number="05" label="Testing & iteration" title="Could people read the design without being taught it?">
      <p>I prepared realistic tasks, an interactive prototype and a moderation plan. The tasks examined strength comprehension, orientation after scrolling and spontaneous discovery of the current-overlap indicator.</p>
      <div className="pf-research-method"><section><span className="pf-label">Internal evaluation</span><h3>Six participants</h3><p>Both dot and ring were present in the design. I swapped their positions for half the participants to counterbalance which treatment they encountered first.</p></section><section><span className="pf-label">Client evaluation</span><h3>Moderated sessions</h3><p>Client feedback tested the design against fundraising and financial-services workflows. Design colleagues shared facilitation; commercial partners enabled access.</p></section></div>
      <ResearchOrder />
      <p className="pf-small">Counterbalancing reduced a systematic order bias. This was a small qualitative comparison; spontaneous noticing and prompted preference were different observations.</p>
      <h3 className="pf-subheading">What the feedback meant for the design</h3>
      <div className="pf-findings"><section><div><span className="pf-label">Observed</span><h3>Strength read without explanation</h3><p>Clients used darker, thicker lines to identify stronger connections.</p></div><div><span className="pf-label">Response</span><p>Retain the aligned visual hierarchy. Correct interpretation was encouraging, but did not make a legend unnecessary.</p></div></section><section><div><span className="pf-label">Observed</span><h3>The ring drew attention</h3><p>Client feedback favoured the ring as more noticeable, and described the overlap period as useful for deciding which paths to follow.</p></div><div><span className="pf-label">Response</span><p>Carry the connection-level ring forward. Its meaning and usefulness still needed checking in real use.</p></div></section><section><div><span className="pf-label">Observed</span><h3>Users needed control over the results</h3><p>Filtering, ordering and editable exports mattered to clients who shared a shortlist with colleagues.</p></div><div><span className="pf-label">Response</span><p>Use the findings to prioritise the next layer of controls and output with Product, while preserving the legibility work.</p></div></section></div>
      <blockquote>Readable paths were the foundation. Filtering and export connected that foundation to the user’s wider workflow.</blockquote>
      <p className="pf-small">The prototype used demo data. The sample was small, and qualitative findings did not establish launch impact or statistically prove one indicator superior.</p>
    </Chapter>

    <Chapter id="collaboration" number="06" label="Product collaboration & execution" title="Keep ownership clear and make the trade-offs shared">
      <p>I brought the diagnosis and proposed design rules; the team helped challenge, refine and deliver them. That collaboration changed specific parts of the work.</p>
      <ol className="pf-delivery"><li><span>01</span><div><h3>Agree the problem and delivery window</h3><p>With the principal PM, I established why realistic data volume and scrolling had to shape the design. The overlap indicator, sticky behaviour and strength changes were bundled with the infinite-scroll work.</p></div></li><li><span>02</span><div><h3>Resolve the interaction detail with engineering</h3><p>A review exposed a disconnect between frozen and scrolling content. Comparing the design and prototype helped identify inconsistent line lengths and connector sizing, turning a broad concern into concrete adjustments.</p></div></li><li><span>03</span><div><h3>Turn client needs into product decisions</h3><p>Current-overlap and connection-type filters were placed in the main filter bar. Export behaviour was refined, and the team revisited assumptions about how different relationship types should be prioritised.</p></div></li><li><span>04</span><div><h3>Inspect the build, not only the handoff</h3><p>At UAT I found connection scenarios where the implementation differed from the intended design. I raised these with Product so the team could distinguish design assumptions from implementation differences.</p></div></li></ol>
      <Decision>Own the design recommendation, make the reasoning inspectable and stay involved when it becomes a working product.</Decision>
    </Chapter>

    <Chapter id="outcome" number="07" label="Outcome & limits" title="A shipped redesign, with qualitative evidence and a measurement gap">
      <p>The redesign shipped with the infinite-scroll release. The work introduced sticky reference points, strength colour changes and the current-overlap indicator, alongside subsequent filter and export refinements.</p>
      <div className="pf-two-column"><section><p className="pf-label">What I can evidence</p><h3>Design and delivery progress</h3><ul><li>A specific diagnosis of the scrolling failure.</li><li>A working interaction model and visual hierarchy.</li><li>Observed comprehension and client feedback.</li><li>Product and engineering decisions carried into delivery.</li></ul></section><section><p className="pf-label">What I cannot claim</p><h3>A quantified business improvement</h3><p>Post-launch adoption, task-time and retention changes were not tracked for this work. I cannot attribute a percentage improvement to the redesign.</p></section></div>
    </Chapter>

    <Chapter id="measurement" number="08" label="How I would measure success" title="Did a clearer chart help people choose a useful route?">
      <p>My proposed primary measure is the share of Pathfinder searches followed by a meaningful next step, such as inspecting a relevant profile or exporting a shortlist. I would pair that behaviour with task feedback: a click alone does not prove that someone found a useful relationship.</p>
      <div className="pf-measures"><section><span>Orientation</span><h3>Less work to recover context</h3><p>Time to first meaningful action, unnecessary scroll-backs and follow-up tasks on clients’ own networks.</p></section><section><span>Decision quality</span><h3>Confidence in the chosen route</h3><p>Ease-of-use feedback, understanding of the ring and reasons for selecting a particular path.</p></section><section><span>Product health</span><h3>Large searches still work well</h3><p>Load time, searches with no action and reasons for choosing table view.</p></section></div>
      <p className="pf-small">This is a proposed plan, not reported results. I would establish a baseline or compare flagged account groups, segment by search size and follow up with clients after real use.</p>
    </Chapter>

    <section className="pf-reflection"><p className="pf-label">What I would take into the next project</p><h2>Judge the whole interaction, then follow it through to the build.</h2><p>The most useful decision was to look beyond a static screen. Realistic data and scrolling exposed a failure that more space had not addressed. In future work I would bring representative connection scenarios into engineering reviews earlier, and agree the measurement baseline before launch.</p><Link to="/projects/altrata-boolean-search">Another Altrata case study · Boolean search ↗</Link></section>
  </article>
}
