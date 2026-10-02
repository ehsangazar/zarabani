import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectGrid from '../components/ProjectGrid'
import WritingGrid from '../components/WritingGrid'

export default function Home() {
  return <div className="ms-page">
    <PageMeta title="Zara Bani - Product & UX Designer" description="Product and UX Designer creating thoughtful experiences that put people first. Based in London." path="/" />
    <header className="ms-intro ms-home-intro">
      <div className="ms-home-intro-copy">
        <div className="ms-home-hero-grid">
          <div className="ms-home-hero-copy">
            <p className="ms-eyebrow ms-home-location"><span aria-hidden="true" /> Product designer · London, UK</p>
            <h1>Product <span>Designer</span></h1>
            <h2 className="ms-hero-thesis">Building products is getting faster. Deciding what is worth building is becoming the real design challenge.</h2>
            <p>I’m an end-to-end Product Designer focused on turning complex problems into simple, scalable experiences. I help teams uncover the right problems, define product direction, and create experiences that people trust.</p>
            <div className="ms-home-actions">
              <Link className="ms-text-link ms-primary-link" to="/projects">Explore Featured Work <span aria-hidden="true">↗</span></Link>
              <Link className="ms-text-link" to="/about">How I work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="ms-home-hero-visual">
            <div className="ms-home-portrait-stage">
              <span className="ms-home-portrait-greeting">Hi, I’m Zara.</span>
              <img className="ms-home-portrait" src="/zara-cutout.png" alt="Zara Bani" width="509" height="600" />
            </div>
            <div className="ms-home-portrait-note">
              <span>My sweet spot</span>
              <strong>People. Technology. Business.</strong>
              <small>Bringing them together to make complexity feel simple.</small>
            </div>
          </div>
        </div>
      <dl className="ms-hero-stats">
        <div><dt>Years designing complex digital products</dt><dd>5+</dd></div>
        <div><dt>B2B SaaS, B2C &amp; enterprise workflows</dt><dd>10+</dd></div>
        <div><dt>Faster concept iteration through AI-assisted prototyping</dt><dd>80%</dd></div>
      </dl>
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
            <svg viewBox="0 0 360 290" preserveAspectRatio="none"><path d="M180 42 180 132M61 228 145 168M299 228 215 168" /></svg>
            <span className="ms-hero-node ms-hero-node--users">Users</span>
            <span className="ms-hero-node ms-hero-node--technology">Technology</span>
            <span className="ms-hero-node ms-hero-node--business">Business</span>
            <div className="ms-hero-framework__centre"><small>Turning complexity into</small><strong>Clarity</strong></div>
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
