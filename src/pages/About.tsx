import PageMeta from '../components/PageMeta'
import { Link } from 'react-router-dom'

const About = () => {
  const skills = [
    "User Research & Testing",
    "UX/UI Design",
    "Information Architecture",
    "Wireframing & Prototyping",
    "Usability Testing",
    "User Journey Mapping",
    "Design Systems",
    "Accessibility (WCAG)",
    "Figma & Design Tools",
    "Cross-functional Collaboration"
  ]

  const experience = [
    {
      title: "User Experience Designer",
      company: "TarsimInc",
      period: "May 2022 — Sep 2024",
      description: "Contributed to 6 diverse digital products, participating in user research, creating user flows, wireframes, high-fidelity prototypes, and conducting usability testing.",
      achievements: [
        "Worked on storytelling techniques to communicate design decisions clearly",
        "Ensured alignment with user and business needs",
        "Collaborated cross-functionally with developers and product managers",
        "Ensured technical feasibility and timely delivery of user-centric solutions"
      ]
    }
  ]

  return (
    <div className="ms-page">
      <PageMeta title="About" description="Zara Bani, a UX designer based in London, creating thoughtful experiences that put people first." path="/about" />
      <header className="ms-intro"><p className="ms-eyebrow">About me</p><h1>A curious mind.<br />A thoughtful approach.</h1><p>I'm Zara, a Product & UX designer based in London. I care about the people behind the product and the details that make their experience better.</p></header>
      <section className="ms-about-bio">
        <figure><img src="/zara.png" alt="Zara Bani" /><figcaption>Zara Bani · London, UK</figcaption></figure>
        <div><h2>My journey</h2><p>During my time in the industry, I had the opportunity to work on over 6 real-world projects, designing both mobile and web experiences from research to high-fidelity prototypes.</p><p>Working in this field constantly pushes me to think creatively, stay curious, and challenge assumptions.</p><h2>My approach</h2><p>What excites me most is going beyond the surface to uncover real problems and design meaningful, user-centred solutions.</p><p>I believe in research, empathy, and iterative design to create products that make a difference in people's lives.</p><Link className="ms-text-link ms-secondary-link" to="/resume">View my résumé ↗</Link></div>
      </section>
      <section className="ms-detail-section"><h2>Experience</h2><div>{experience.map(exp => <article className="ms-experience" key={exp.company}><p className="ms-eyebrow">{exp.period}</p><h3>{exp.title}</h3><p>{exp.company}</p><p>{exp.description}</p><ul>{exp.achievements.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>
      <section className="ms-detail-section"><h2>Skills & expertise</h2><ul className="ms-skills">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></section>
      <section className="ms-invitation"><h2>Let's make something useful.</h2><Link className="ms-text-link ms-primary-link" to="/contact">Get in touch ↗</Link></section>
    </div>
  )
}

export default About
