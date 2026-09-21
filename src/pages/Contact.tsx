import PageMeta from '../components/PageMeta'

export default function Contact() {
  return <div className="ms-page ms-contact">
    <PageMeta title="Contact" description="Get in touch with Zara Bani for new opportunities and collaborations." path="/contact" />
    <header className="ms-intro"><p className="ms-eyebrow">Get in touch</p><h1>Good work starts<br />with a conversation.</h1><p>I'm always interested in new opportunities, thoughtful collaborations, and conversations about design.</p></header>
    <div className="ms-contact-links"><a href="mailto:me@zarabani.design"><span>Email</span><strong>me@zarabani.design</strong><span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/zara-bani-95a0991a8/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Let's connect</strong><span aria-hidden="true">↗</span></a></div>
    <section className="ms-contact-note"><h2>Open to</h2><p>Full-time UX design opportunities<br />Freelance & contract projects<br />Consulting & advisory roles</p><p className="ms-muted">Based in London, UK.</p></section>
  </div>
}
