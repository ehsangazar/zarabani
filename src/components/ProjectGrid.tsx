import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCaseStudies } from '../utils/caseStudies'
import { allProjects } from '../utils/projects'
import ProjectPreview from './ProjectPreview'

const cardCopy: Record<string, { title: string; achievements: string[] }> = {
  'altrata-boolean-search': {
    title: 'A scalable Boolean search framework',
    achievements: ['Expanded a single-filter request into platform-wide search', 'Prototyped two interaction models', 'Led three rounds of validation with teams and clients'],
  },
  'focused-learning': {
    title: 'A clearer, more focused learning hub',
    achievements: ['Brought scattered materials into one lesson workspace', 'Unified video, audio, PDFs and text', 'Validated the experience through usability testing'],
  },
  omaia: {
    title: 'Omaia: support for postpartum mothers',
    achievements: ['Led research through to MVP design', 'Designed for emotional support and engagement', 'Validated the approach through user testing'],
  },
}

export default function ProjectGrid({ limit }: { limit?: number }) {
  const [projects, setProjects] = useState<{ id: string; title: string; achievements: string[] }[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let cancelled = false
    void getAllCaseStudies().then(studies => {
      if (cancelled) return
      setProjects([...studies, ...allProjects.filter(project => !studies.some(study => study.id === project.id))])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])
  if (loading) return <p className="ms-muted" role="status">Loading projects…</p>
  return <div className="project-grid">
    {projects.slice(0, limit).map(project => <Link
      key={project.id} to={`/projects/${project.id}`} className="project-card"
    >
      <ProjectPreview projectId={project.id} />
      <div className="project-card__body">
        <div className="project-card__caption"><h3>{cardCopy[project.id]?.title ?? project.title}</h3><span aria-hidden="true">↗</span></div>
        <p className="project-card__label">Key achievements</p>
        <ul className="project-card__achievements">
          {(cardCopy[project.id]?.achievements ?? project.achievements.slice(0, 3)).map(achievement => <li key={achievement}>{achievement}</li>)}
        </ul>
      </div>
    </Link>)}
  </div>
}
