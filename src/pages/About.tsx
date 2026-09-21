import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const About = () => {
  const skills = [
    "Product design across web and mobile",
    "Discovery to delivery",
    "User research and usability testing",
    "Service design and journey mapping",
    "Information architecture",
    "Interaction and visual design",
    "Design systems",
    "Accessibility (WCAG)",
    "Complex B2B SaaS",
    "Product analytics and A/B testing",
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
      description: "Own end-to-end design for a B2B data intelligence platform bringing three enterprise products into one unified experience.",
      achievements: [
        "Helped hold account retention at 87% through the platform migration",
        "Improved complex search task efficiency by approximately 65%",
        "Reduced concept iteration time by more than 80% with AI-assisted prototyping"
      ]
    },
    {
      title: "Product Designer",
      company: "BetterBoard",
      period: "Sep 2024 - Apr 2026",
      description: "Designed a regulated B2B SaaS case-management platform for complex, document-heavy immigration workflows.",
      achievements: ["Increased case processing throughput by 28%", "Improved first-pass submission accuracy by 70%", "Reduced workflow friction by 30%"]
    },
    {
      title: "Product Designer",
      company: "TarsimInc",
      period: "May 2022 - Sep 2024",
      description: "Led UX/UI across 10+ B2B, B2C and SaaS products from research and journey mapping through prototyping, testing and delivery.",
      achievements: ["Increased retention by 30% on a library management platform", "Cut task completion time by 65%", "Created a modular design system across 10+ modules"]
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
      <PageMeta title="About" description="Zara Bani is a Product Designer with 5+ years designing complex B2B SaaS products across web and mobile." path="/about" />
      <header className="ms-intro"><p className="ms-eyebrow">About me</p><h1>Complex problems.<br />Clear, scalable workflows.</h1><p>I'm Zara, a Product Designer based in London with 5+ years designing complex B2B SaaS products across web and mobile.</p></header>
      <section className="ms-about-bio">
        <figure><img src="/zara.png" alt="Zara Bani" /><figcaption>Zara Bani · London, UK</figcaption></figure>
        <div><h2>My journey</h2><p>Over the past 5+ years, I've led end-to-end design across 10+ B2B SaaS and B2C products. My work spans complex web and mobile experiences, from early research and discovery through prototyping, validation and delivery.</p><p>I specialise in data-heavy platforms, operational workflows and responsive experiences that hold together across desktop and mobile.</p><h2>My approach</h2><p>I turn ambiguous problems into intuitive, scalable workflows through research, interaction design, prototyping and close collaboration with product and engineering teams.</p><p>I combine client discovery and usability testing with product data, then make the reasoning visible so teams can validate ideas and move with confidence.</p><Link className="ms-text-link ms-secondary-link" to="/resume">View my résumé ↗</Link></div>
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
