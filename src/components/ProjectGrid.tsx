import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCaseStudies } from '../utils/caseStudies'
import { allProjects } from '../utils/projects'
import ProjectPreview from './ProjectPreview'

const featuredOrder = ['altrata-boolean-search', 'focused-learning', 'altrata-ai-search', 'document-management', 'omaia']

const comingSoonProject = {
  id: 'altrata-ai-search',
  title: 'AI-powered Advanced Search with Boolean control',
  achievements: [
    'Natural-language intent translated into structured filters',
    'Boolean capability remains visible, editable and verifiable',
    'A continuation of the Advanced Search framework',
  ],
  comingSoon: true,
}

const cardCopy: Record<string, { title: string; achievements: string[] }> = {
  'altrata-boolean-search': {
    title: 'A scalable Boolean search framework',
    achievements: ['Reduced time to create an actionable prospect list by 64%', 'Reached 42% Boolean adoption among multi-filter search users within 45 days', '72% of Boolean queries led to a meaningful downstream action'],
  },
  'focused-learning': {
    title: 'A clearer, more focused learning hub',
    achievements: ['Reduced lesson completion time by 35%', 'Reached an 81% adoption rate within the first three months', 'Created one structured learning flow for 10,000+ students'],
  },
  omaia: {
    title: 'Omaia: support for postpartum mothers',
    achievements: ['Led research through to MVP design', 'Designed for emotional support and engagement', 'Validated the approach through user testing'],
  },
}

type GridProject = { id: string; title: string; achievements: string[]; comingSoon?: boolean }

export default function ProjectGrid({ limit }: { limit?: number }) {
  const [projects, setProjects] = useState<GridProject[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let cancelled = false
    void getAllCaseStudies().then(studies => {
      if (cancelled) return
      const combined: GridProject[] = [
        ...studies,
        ...allProjects.filter(project => !studies.some(study => study.id === project.id)),
        comingSoonProject,
      ]
      setProjects([
        ...featuredOrder.flatMap(id => combined.filter(project => project.id === id)),
        ...combined.filter(project => !featuredOrder.includes(project.id)),
      ])
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])
  if (loading) return <p className="ms-muted" role="status">Loading projects…</p>
  return <div className="project-grid">
    {projects.slice(0, limit).map((project, index) => {
      const content = <>
      <div className="project-card__body">
        <p className="project-card__eyebrow">Case study <span>{String(index + 1).padStart(2, '0')}</span></p>
        <div className="project-card__caption"><h3>{cardCopy[project.id]?.title ?? project.title}</h3></div>
        <p className="project-card__label">{project.comingSoon ? 'What the case study will explore' : 'Key achievements'}</p>
        <ul className="project-card__achievements">
          {(cardCopy[project.id]?.achievements ?? project.achievements.slice(0, 3)).map(achievement => <li key={achievement}>{achievement}</li>)}
        </ul>
        {project.comingSoon
          ? <span className="project-card__coming-soon">Coming soon</span>
          : <span className="project-card__cta">Explore case study <span aria-hidden="true">↗</span></span>}
      </div>
      <ProjectPreview projectId={project.id} />
      </>

      return project.comingSoon
        ? <article key={project.id} className="project-card project-card--coming-soon" aria-label={`${project.title}, coming soon`}>{content}</article>
        : <Link key={project.id} to={`/projects/${project.id}`} className="project-card">{content}</Link>
    })}
  </div>
}
