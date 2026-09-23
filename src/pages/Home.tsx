import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectGrid from '../components/ProjectGrid'
import WritingGrid from '../components/WritingGrid'

export default function Home() {
  return <div className="ms-page">
    <PageMeta title="Zara Bani - Product & UX Designer" description="Product and UX Designer creating thoughtful experiences that put people first. Based in London." path="/" />
    <header className="ms-intro ms-home-intro"><div className="ms-home-intro-copy"><p className="ms-eyebrow">Zara Bani · London, UK</p><h1>Product <span>Designer</span></h1><h2 className="ms-hero-thesis">Building products is getting faster. Deciding what is worth building is becoming the real design challenge.</h2><p>I’m an end to end Product Designer focused on turning complex problems into simple, scalable experiences. I work at the intersection of <strong>users, technology, and business</strong>, helping teams uncover the right problems, define product direction, and create experiences that people trust.</p><p>My work spans <strong>AI-powered products, complex B2B SaaS platforms, B2C products, and data-heavy systems</strong> — where success depends not on adding more features, but on creating clarity from complexity.</p><p>From early discovery and strategy to interaction design, prototyping, and shipping, I partner with product and engineering teams to build products that are useful, usable, and ready to scale.</p><Link className="ms-text-link ms-primary-link" to="/projects">Explore Featured Work <span aria-hidden="true">↗</span></Link>
      <dl className="ms-hero-stats">
        <div><dt>Years designing complex digital products</dt><dd>5+</dd></div>
        <div><dt>B2B SaaS &amp; enterprise workflows</dt><dd>10+</dd></div>
        <div><dt>Organisations supported through SaaS platforms</dt><dd>128</dd></div>
      </dl></div></header>
    <section className="ms-section" aria-labelledby="selected-work"><div className="ms-section-heading"><h2 id="selected-work">Selected work</h2><Link className="ms-secondary-link" to="/projects">All projects ↗</Link></div><ProjectGrid limit={4} /></section>
    <section className="ms-section ms-home-about"><div><p className="ms-eyebrow">How I work</p><h2>Curiosity first.<br />Clarity throughout.</h2></div><div><p>I help teams move from insight to action by aligning user needs with practical constraints, making informed trade-offs, and shaping clear, usable solutions.</p><p>My experience includes complex, data-heavy platforms and multi-role systems, where clarity, scalability, and usability matter.</p><Link className="ms-text-link" to="/about">More about my approach ↗</Link></div></section>
    <section className="ms-section"><div className="ms-section-heading"><h2>Notes on design</h2><Link className="ms-secondary-link" to="/blog">All writing ↗</Link></div><WritingGrid limit={3} /></section>
    <section className="ms-invitation"><h2>Have something in mind?</h2><Link className="ms-text-link ms-primary-link" to="/contact">Let's talk ↗</Link></section>
  </div>
}
