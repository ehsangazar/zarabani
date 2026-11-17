import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { staticPageMeta } from '../utils/routeMeta'
import ProjectGrid from '../components/ProjectGrid'
import WritingGrid from '../components/WritingGrid'
import MetricRow from '../components/MetricRow'
import { heroMetrics } from '../utils/heroMetrics'

const AGENT_STATUSES = [
  'Open to Senior and Product Designer roles',
  'Designing AI features people can trust',
  'London, UK · hybrid',
]

function AgentStatus() {
  const [i, setI] = useState(0)
  const [shown, setShown] = useState(AGENT_STATUSES[0])
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let cancelled = false
    let timer: number
    const typeNext = (next: number) => {
      const text = AGENT_STATUSES[next]
      let n = 0
      const step = () => {
        if (cancelled) return
        n += 1
        setShown(text.slice(0, n))
        if (n < text.length) timer = window.setTimeout(step, 28)
        else timer = window.setTimeout(() => { setI(next); typeNext((next + 1) % AGENT_STATUSES.length) }, 3200)
      }
      step()
    }
    timer = window.setTimeout(() => typeNext(1), 3200)
    return () => { cancelled = true; window.clearTimeout(timer) }
  }, [])
  return <>
    <span className="visually-hidden">Product Designer in London, UK, open to Senior and Product Designer roles (hybrid)</span>
    <span className="ms-agent-line" aria-hidden="true"><code>zara.status</code><span className="ms-agent-status" data-i={i}>{shown}</span><span className="ms-agent-caret" /></span>
  </>
}

export default function Home() {
  return <div className="ms-page">
    <PageMeta {...staticPageMeta.home} />
    <header className="ms-intro ms-home-intro">
      <div className="ms-home-intro-copy">
        <div className="ms-home-hero-grid">
          <div className="ms-home-hero-copy">
            <p className="ms-eyebrow ms-home-location"><span aria-hidden="true" /> <AgentStatus /></p>
            <h1>Product Designer for <span>AI-native B2B products</span></h1>
            <p>I design complex, data-heavy workflows and AI features people can trust, from research to shipped, measured results.</p>
            <div className="ms-home-actions">
              <Link className="ms-text-link ms-primary-link" to="/projects">See case studies <span aria-hidden="true">↗</span></Link>
              <Link className="ms-text-link" to="/resume">View CV <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="ms-home-hero-visual">
            <span className="ms-home-portrait-greeting">Hi, I’m Zara.</span>
            <div className="ms-home-portrait-stage">
              <img className="ms-home-portrait" src="/zara-cutout.png" alt="Zara Bani" width="509" height="600" />
            </div>
            <div className="ms-home-portrait-note">
              <span>My sweet spot</span>
              <strong>People. Technology. Business.</strong>
              <small>Bringing them together to make complexity feel simple.</small>
            </div>
          </div>
        </div>
      <MetricRow className="ms-hero-stats" metrics={heroMetrics} />
      </div>
    </header>
    <section className="ms-section ms-home-work" aria-labelledby="selected-work">
      <div className="ms-section-heading ms-home-work__heading"><div><p className="ms-eyebrow">Selected work</p><h2 id="selected-work">Thoughtful design. Useful outcomes.</h2></div><Link className="ms-secondary-link" to="/projects">All projects ↗</Link></div>
      <ProjectGrid limit={5} />
    </section>
    <section className="ms-section ms-home-about" aria-labelledby="approach-title">
      <div className="ms-approach-inner">
        <div className="ms-approach-copy">
          <p className="ms-eyebrow">How I work</p>
          <h2 id="approach-title">Curiosity first.<br />Clarity throughout.</h2>
          <p className="ms-approach-lead">Good product thinking starts before the interface—with understanding what is worth solving, for whom, and why it matters.</p>
          <p>I connect what people need with what the business needs to achieve and what technology makes possible. That means questioning assumptions, making trade-offs explicit, and helping teams choose a direction they can stand behind.</p>
          <Link className="ms-text-link" to="/about">More about my approach ↗</Link>
        </div>
        <aside className="ms-hero-framework" aria-label="My approach connects users, technology and business to turn complexity into clarity">
          <p className="ms-hero-framework__label">Where I work best</p>
          <div className="ms-hero-framework__map" aria-hidden="true">
            <svg className="ms-venn" viewBox="0 0 360 330" role="presentation">
              <circle className="ms-venn__c ms-venn__c--users" cx="180" cy="128" r="74" />
              <circle className="ms-venn__c ms-venn__c--tech" cx="138" cy="200" r="74" />
              <circle className="ms-venn__c ms-venn__c--biz" cx="222" cy="200" r="74" />
              <circle className="ms-venn__core" cx="180" cy="176" r="35" />
              <text className="ms-venn__centre" x="180" y="182" textAnchor="middle">Clarity</text>
              <text className="ms-venn__t" x="180" y="24" textAnchor="middle">Users</text>
              <text className="ms-venn__s" x="180" y="42" textAnchor="middle">needs and research</text>
              <text className="ms-venn__t" x="64" y="300" textAnchor="middle">Technology</text>
              <text className="ms-venn__s" x="64" y="318" textAnchor="middle">AI and systems</text>
              <text className="ms-venn__t" x="296" y="300" textAnchor="middle">Business</text>
              <text className="ms-venn__s" x="296" y="318" textAnchor="middle">value and metrics</text>
            </svg>
          </div>
          <p className="ms-hero-framework__focus">AI-powered products · B2B SaaS · B2C · data-heavy systems</p>
          <p className="ms-hero-framework__journey">Discovery → strategy → interaction → shipped product</p>
        </aside>
        <ol className="ms-approach-principles">
          <li><span>01 / Frame</span><h3>Find the problem behind the request.</h3><p>Understand the context, uncover friction, and separate the underlying need from the proposed solution.</p></li>
          <li><span>02 / Decide</span><h3>Make the trade-offs intentional.</h3><p>Weigh user value, business impact, and feasibility. Define what success looks like before committing to a direction.</p></li>
          <li><span>03 / Learn</span><h3>Build to learn, then refine.</h3><p>Make ideas tangible, test the riskiest assumptions, and use feedback to guide what ships and what improves next.</p></li>
        </ol>
      </div>
    </section>
    <section className="ms-section"><div className="ms-section-heading"><h2>Notes on design</h2><Link className="ms-secondary-link" to="/blog">All writing ↗</Link></div><WritingGrid limit={3} /></section>
    <section className="ms-invitation"><h2>Have something in mind?</h2><Link className="ms-text-link ms-primary-link" to="/contact">Let's talk ↗</Link></section>
  </div>
}
