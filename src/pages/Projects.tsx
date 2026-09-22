import PageMeta from '../components/PageMeta'
import ProjectGrid from '../components/ProjectGrid'

export default function Projects() {
  return <div className="ms-page">
    <PageMeta title="Projects" description="Case studies and featured work in UX and product design. User-centred design with measurable impact." path="/projects" />
    <header className="ms-intro"><p className="ms-eyebrow ms-eyebrow--accent">Selected work</p><h1>Thoughtful design.<br />Useful outcomes.</h1><p>Product experiences shaped by research, curiosity, and a focus on the people who use them.</p></header>
    <ProjectGrid />
  </div>
}
