import { useEffect, useRef, useState } from 'react'
import './pathfinder-diagnosis.css'

const assets = '/case-studies/pathfinder/'

function OriginalScroll() {
  const viewport = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!playing) return
    const element = viewport.current
    if (!element) return
    let frame = 0
    let last = 0
    let direction = element.scrollTop >= element.scrollHeight - element.clientHeight - 2 ? -1 : 1
    const tick = (time: number) => {
      if (last) {
        element.scrollTop += direction * Math.min(time - last, 40) * .16
        if (element.scrollTop >= element.scrollHeight - element.clientHeight - 1) direction = -1
        if (element.scrollTop <= 0) direction = 1
      }
      last = time
      frame = requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) setPlaying(false) })
    observer.observe(element)
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  }, [playing])
  return <figure className="pf-diagnosis__scroll-figure">
    <div className="pf-diagnosis__scroll-toolbar"><span>Alphabet to Apple · Original full-page capture</span><button type="button" onClick={() => setPlaying(!playing)}>{playing ? 'Pause scrolling' : 'Play scrolling'}</button></div>
    <div ref={viewport} className="pf-diagnosis__scroll" tabIndex={0} role="region" aria-label="Scroll through the original Pathfinder screenshot" onWheel={() => setPlaying(false)} onTouchStart={() => setPlaying(false)} onKeyDown={() => setPlaying(false)}>
      <img src={assets + 'previous-full-page.png'} alt="Full original Pathfinder chart showing a long network of paths between Alphabet and Apple" loading="lazy" />
    </div>
    <figcaption>Scroll inside the image or play the preview to explore the full chart. This pans the original screenshot; the captured interface is not interactive.</figcaption>
  </figure>
}

function AnnotatedScreen({ kind }: { kind: 'strength' | 'context' }) {
  const strength = kind === 'strength'
  return <figure className="pf-diagnosis__annotation">
    <div className="pf-diagnosis__screen">
      <img src={assets + (strength ? 'previous-strength.png' : 'previous-lost-context.png')} alt={strength ? 'Original chart with navy lines of different weights and small pink, yellow and grey expand icons' : 'Original chart while scrolling: paths converge below the viewport, leaving their shared person out of sight'} loading="lazy" />
      {strength ? <>
        <span className="pf-diagnosis__highlight" style={{ left: '42%', top: '27%', width: '23%', height: '67%' }} aria-hidden="true"><b>A</b></span>
        <span className="pf-diagnosis__highlight pf-diagnosis__highlight--secondary" style={{ left: '13%', top: '27%', width: '8%', height: '68%' }} aria-hidden="true"><b>B</b></span>
      </> : <>
        <span className="pf-diagnosis__highlight" style={{ left: '60%', top: '39%', width: '13%', height: '60%' }} aria-hidden="true"><b>A</b></span>
        <span className="pf-diagnosis__highlight pf-diagnosis__highlight--secondary" style={{ left: '11%', top: '27%', width: '9%', height: '72%' }} aria-hidden="true"><b>B</b></span>
      </>}
    </div>
    <figcaption className="pf-diagnosis__annotation-key">
      <div><b>A</b><p>{strength ? 'Small coloured expand icons introduce a separate strength signal that is difficult to scan across many rows.' : 'Paths continue below the viewport. The shared person they lead to is no longer visible.'}</p></div>
      <div><b>B</b><p>{strength ? 'All paths use navy. In dense bundles, line-weight differences become harder to distinguish.' : 'The source node is also out of view, leaving long lines without their visual reference point.'}</p></div>
    </figcaption>
  </figure>
}

export default function PathfinderDiagnosis() {
  return <section className="pf-diagnosis" id="finding-the-problem" aria-labelledby="pf-diagnosis-title">
    <header><p className="pf-diagnosis__eyebrow">Discovery & prioritisation</p><h2 id="pf-diagnosis-title">Find the friction that mattered most after migration</h2><p className="pf-diagnosis__intro">With both customer jobs in mind, I investigated friction across Advanced Search and Pathfinder. The migration timeline was tight, and new direct customer research required coordination through Account Managers. I started with the colleagues already closest to those customers.</p></header>
    <div className="pf-diagnosis__discovery">
      <div className="pf-diagnosis__outreach"><strong>~30 colleagues</strong><span>Across Commercial, Account Management, Customer Success and Support</span></div>
      <div><h3>Collect recurring problems and their workflow impact</h3><p>I asked colleagues to share the issues customers had experienced since migration. I grouped the feedback into themes and examined the frequency and nature of the problems, rather than asking colleagues to prescribe design solutions.</p></div>
    </div>
    <div className="pf-diagnosis__feedback-flow">
      <div className="pf-diagnosis__capabilities">
        <p className="pf-diagnosis__eyebrow">From the collected feedback</p>
        <div className="pf-diagnosis__capability-muted">Advanced Search<span>Also included in the feedback review</span></div>
        <div className="pf-diagnosis__capability-selected">Pathfinder<span>Stood out for recurring complaints</span></div>
      </div>
      <svg className="pf-diagnosis__flow-arrow" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M1 12h44M36 3l9 9-9 9" /></svg>
      <div className="pf-diagnosis__theme-group">
        <h3>Recurring Pathfinder themes</h3>
        <div className="pf-diagnosis__themes"><span>Readability</span><span>Understanding connection strength</span><span>Navigating complex networks</span></div>
      </div>
    </div>
    <aside className="pf-diagnosis__decision"><p className="pf-diagnosis__eyebrow">Prioritisation with Product</p><p>Pathfinder stood out as a recurring source of friction.</p><p className="pf-diagnosis__priority-detail">It connected finding a prospect with identifying a useful introduction. I brought the feedback themes to Product and proposed investigating Pathfinder as a priority.</p></aside>
    <div className="pf-diagnosis__chapter"><p className="pf-diagnosis__eyebrow">Reviewing previous work</p><h3>More space hadn’t made the paths easier to follow</h3><p>I found that the previous design team had already tackled readability by expanding Pathfinder from around 80% of the page width to full width. The assumption was that a less condensed chart would be easier to follow, but the complaints had continued.</p></div>

    <div className="pf-diagnosis__comparison">
      <figure><div className="pf-diagnosis__figure-heading"><span>Original layout</span><h3>About 80% of the screen</h3></div><a href={assets + 'previous-80-percent.png'} target="_blank" rel="noreferrer" aria-label="Open original 80 percent width screenshot"><img src={assets + 'previous-80-percent.png'} alt="Original Pathfinder within a narrower layout, with wide navy margins" loading="lazy" /></a><figcaption>The initial assumption: the chart was too condensed.</figcaption></figure>
      <figure><div className="pf-diagnosis__figure-heading"><span>Previous team’s iteration</span><h3>Expanded to full width</h3></div><a href={assets + 'previous-full-width.png'} target="_blank" rel="noreferrer" aria-label="Open original full-width screenshot"><img src={assets + 'previous-full-width.png'} alt="Previous Pathfinder expanded across the available screen width" loading="lazy" /></a><figcaption>More horizontal space, but similar navigation feedback continued.</figcaption></figure>
    </div>
    <p>Existing Jira requests focused on adding explanations, labels, dates and relationship information. Before implementing them, I wanted to understand why the previous change had not resolved the problem.</p>
    <aside className="pf-diagnosis__decision"><p className="pf-diagnosis__eyebrow">My starting question</p><p>Why hadn’t the wider layout solved the problem?</p></aside>

    <div className="pf-diagnosis__chapter"><p className="pf-diagnosis__eyebrow">Investigation</p><h3>Test the experience beyond the best-case dataset</h3><p>Exploring different scenarios revealed that many existing designs relied on simple, best-case datasets. They worked with a few connections but did not account for denser networks. I asked engineering to identify complex examples: Alphabet to Apple returned over a hundred paths. Exploring that volume, particularly during scrolling, made the underlying problems clearer.</p></div>
    <OriginalScroll />

    <section className="pf-diagnosis__finding"><p className="pf-diagnosis__eyebrow">Finding · Visual hierarchy</p><h3>Strength signals were difficult to compare</h3><p>Line thickness communicated strength, while the expand icons used pink, yellow and grey. The signals did not reinforce each other clearly; in crowded results, both became difficult to distinguish.</p><AnnotatedScreen kind="strength" /></section>
    <section className="pf-diagnosis__finding"><p className="pf-diagnosis__eyebrow">Finding · Scrolling context</p><h3>The paths stayed visible. The people they led to didn’t.</h3><p>When several paths shared one person, scrolling could move that person out of view. Users were left looking at the middle of a chain without knowing who the paths belonged to or where they led.</p><AnnotatedScreen kind="context" /></section>

    <div className="pf-diagnosis__scale"><div><strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></svg>~6 million</strong><span>People in the platform</span></div><div><strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4M9 21v-3h2v3" /></svg>~3 million</strong><span>Organisations in the platform</span></div><p>Large networks were realistic scenarios the experience needed to support.</p></div>

    <aside className="pf-diagnosis__reframe"><p className="pf-diagnosis__eyebrow">Reframing the problem</p><h3>Preserve clarity and context as networks grow</h3><p>I proposed a broader redesign of how Pathfinder communicated strength, organised paths and maintained relationship context. Product aligned on that direction, while engineering helped assess feasibility and the implications for shared interaction patterns.</p><p>The goal was to help migrating customers confidently use a workflow they already relied on.</p></aside>
  </section>
}
