import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectGrid from '../components/ProjectGrid'
import WritingGrid from '../components/WritingGrid'

export default function Home() {
  return <div className="ms-page">
    <PageMeta title="Zara Bani - Product & UX Designer" description="Product and UX Designer creating thoughtful experiences that put people first. Based in London." path="/" />
    <header className="ms-intro ms-home-intro"><div className="ms-home-intro-copy"><p className="ms-eyebrow">Zara Bani · London, UK</p><h1>Product & <span>UX designer</span></h1><p className="ms-hero-thesis">AI can build almost anything faster than ever. The real design question is <strong>what deserves to be built—and why.</strong></p><p>I'm an <strong>end-to-end Product Designer and storyteller</strong>, focused on turning user pain into product decisions that balance <strong>usability, feasibility, and business goals</strong>.</p><p>I help teams move from <strong>insight to action</strong> by aligning user needs with practical constraints, making informed trade-offs, and shaping clear, usable solutions across <strong>B2B SaaS and B2C products</strong>. My experience includes complex, data-heavy platforms, multi-role systems, and SaaS products, where <strong>clarity, scalability, and usability</strong> are critical.</p><Link className="ms-text-link ms-primary-link" to="/projects">Explore Featured Work <span aria-hidden="true">↗</span></Link>
      <dl className="ms-hero-stats">
        <div><dt>Shipped digital products</dt><dd>10+</dd></div>
        <div><dt>Measured adoption increase</dt><dd>70%</dd></div>
        <div><dt>Research hours with users</dt><dd>400+</dd></div>
      </dl></div></header>
    <section className="ms-section" aria-labelledby="selected-work"><div className="ms-section-heading"><h2 id="selected-work">Selected work</h2><Link className="ms-secondary-link" to="/projects">All projects ↗</Link></div><ProjectGrid limit={4} /></section>
    <section className="ms-section ms-home-about"><div><p className="ms-eyebrow">How I work</p><h2>Curiosity first.<br />Clarity throughout.</h2></div><div><p>I help teams move from insight to action by aligning user needs with practical constraints, making informed trade-offs, and shaping clear, usable solutions.</p><p>My experience includes complex, data-heavy platforms and multi-role systems, where clarity, scalability, and usability matter.</p><Link className="ms-text-link" to="/about">More about my approach ↗</Link></div></section>
    <section className="ms-section"><div className="ms-section-heading"><h2>Notes on design</h2><Link className="ms-secondary-link" to="/blog">All writing ↗</Link></div><WritingGrid limit={3} /></section>
    <section className="ms-invitation"><h2>Have something in mind?</h2><Link className="ms-text-link ms-primary-link" to="/contact">Let's talk ↗</Link></section>
  </div>
}
