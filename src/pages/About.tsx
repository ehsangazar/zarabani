import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const About = () => {
  const skills = [
    "Human–AI interaction design",
    "Designing for uncertainty and error recovery",
    "Functional code prototyping",
    "Claude Code, Codex and Claude Design",
    "Prompt and context engineering",
    "MCP and model evaluation",
    "HTML, CSS, JavaScript and Git",
    "Discovery to delivery",
    "User research and usability testing",
    "Information architecture",
    "Interaction and visual design",
    "Design systems",
    "Accessibility (WCAG)",
    "Complex B2B SaaS",
    "Product analytics",
    "AI/LLM product design",
    "AI-assisted prototyping",
    "Cross-functional collaboration",
    "Figma"
  ]

  const experience = [
    {
      title: "Product Designer",
      company: "Altrata",
      period: "Apr 2026 - Present",
      description: "Own end-to-end design for a unified data intelligence platform bringing RelSci, Wealth-X and BoardEx together across 6.1 million people and 3.1 million organisations. Contribute to Edge, an AI assistant that turns natural-language intent into visible, editable queries users can verify.",
      achievements: [
        "Helped hold account retention at 87% through the platform migration",
        "Cut time to build actionable prospect lists by approximately 65%, with 3× fewer search cycles and 42% Boolean adoption within 45 days",
        "Halved design cycle time and cut concept iteration by 80% through AI-assisted prototyping",
        "Raised relationship-mapping prospecting accuracy to 67% and user confidence to 80%"
      ]
    },
    {
      title: "Product Designer",
      company: "BetterBoard",
      period: "Sep 2024 - Apr 2026",
      description: "Owned end-to-end design for an AI-powered practice-management platform for regulated Canadian immigration professionals. Contributed to a human–AI validation model with visible reasoning, clear uncertainty and practitioner review of every suggestion.",
      achievements: ["Increased case processing throughput by 28%", "Improved first-pass submission accuracy by 70%", "Reduced workflow friction by 30%"]
    },
    {
      title: "Product Designer",
      company: "Tarsim Inc",
      period: "May 2022 - Sep 2024",
      description: "Led the design team across 10+ B2B, B2C and EdTech products. Used repeated on-site research with librarians to rebuild a data-dense operational platform around how they actually work.",
      achievements: ["Grew the library platform from 99 to 128 libraries and increased retention by 30%", "Cut new-book entry time by 80% with a mobile ISBN-scanning companion", "Cut task completion time by 65%", "Contributed to a modular design system across 10+ modules"]
    },
    {
      title: "UI/UX Designer",
      company: "Noyan.co",
      period: "Dec 2021 - Apr 2022",
      description: "Redesigned ERP workflows and created a mobile companion for approvals and status checks away from a workstation.",
      achievements: ["Improved operational throughput by 20%", "Reduced UI inconsistencies by 85%", "Reduced handoff revisions by 30%"]
    }
  ]

  return (
    <div className="ms-page">
      <PageMeta title="About" description="Zara Bani is a London-based Product Designer with 5+ years designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms." path="/about" />
      <header className="ms-intro"><p className="ms-eyebrow">About me</p><h1>Complex problems.<br />Clear, scalable workflows.</h1><p>I'm Zara, a Product Designer based in London with 5+ years designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms.</p></header>
      <section className="ms-about-bio">
        <figure><img src="/zara.png" alt="Zara Bani" /><figcaption>Zara Bani · London, UK</figcaption></figure>
        <div><h2>My journey</h2><p>I've led design across 10+ B2B, B2C and EdTech products, from observing librarians at work to shaping enterprise search and AI-assisted immigration workflows. I own the process from discovery and strategy through execution and shipped products.</p><p>At Altrata, I help bring three enterprise data products into one experience and contribute to Edge, an AI assistant grounded in proprietary data.</p><h2>My approach</h2><p>I combine research, systems thinking and close collaboration with product and engineering to turn ambiguous problems into scalable experiences. I look beyond individual feature requests to find reusable patterns that serve the wider product.</p><p>For AI-enabled products, I focus on trust: making reasoning visible, signalling uncertainty, and helping people verify, correct and recover. I use functional prototypes to test real interactions before teams commit to building.</p><Link className="ms-text-link ms-secondary-link" to="/resume">View my résumé ↗</Link></div>
      </section>
      <section className="ms-detail-section"><h2>Experience</h2><div>{experience.map(exp => <article className="ms-experience" key={exp.company}><p className="ms-eyebrow">{exp.period}</p><h3>{exp.title}</h3><p>{exp.company}</p><p>{exp.description}</p><ul>{exp.achievements.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
      <section className="ms-detail-section"><h2>Skills & expertise</h2><ul className="ms-skills">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></section>
      <section className="ms-detail-section"><h2>Education</h2><div><article className="ms-experience"><p className="ms-eyebrow">Jan 2025 - Jan 2026</p><h3>MSc User Experience Design</h3><p>Birmingham City University</p><p>Focused on accessibility, complex systems and research-driven design. Capstone taken forward into a live digital product.</p></article><article className="ms-experience"><p className="ms-eyebrow">Sep 2017 - Jul 2022</p><h3>BA English Language and Literature</h3><p>University of Qom, Iran</p></article></div></section>
      <section className="ms-detail-section"><h2>Languages</h2><p>Persian (native) · English (fluent) · German (intermediate) · Spanish (intermediate)</p></section>
      <section className="ms-invitation"><h2>Let's make something useful.</h2><Link className="ms-text-link ms-primary-link" to="/contact">Get in touch ↗</Link></section>
    </div>
  )
}

export default About
