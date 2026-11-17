import { useState, useEffect, type ComponentType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCaseStudyById, type CaseStudy } from '../../utils/caseStudies'
import { allProjects, type Project } from '../../utils/projects'
import ProjectDetailTemplate from './ProjectDetailTemplate'
import PageMeta from '../../components/PageMeta'
import DocumentManagement from './case-studies/DocumentManagement'
import LibraryPlatform from './case-studies/LibraryPlatform'
import CompanyWebsite from './case-studies/CompanyWebsite'
import FoodMenuApp from './case-studies/FoodMenuApp'
import '../../components/case-study-shared.css'

// Projects written up as a full page rather than the generic template.
const projectPages: Record<string, ComponentType> = {
  'document-management': DocumentManagement,
  'library-platform': LibraryPlatform,
  'company-website': CompanyWebsite,
  'food-menu-app': FoodMenuApp,
}

// These two lead with their own introduction, so the hero omits the description.
const heroWithoutDescription = new Set(['focused-learning', 'altrata-boolean-search'])

interface CaseStudyPageProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  metaDescription: string
  Body: ComponentType
}

/** One shell for every internal project page: hero, breadcrumb, then the study itself. */
function CaseStudyPage({ id, eyebrow, title, description, metaDescription, Body }: CaseStudyPageProps) {
  return (
    <div className={`case-study-page case-study-page--${id}`}>
      <PageMeta title={title} description={metaDescription} path={`/projects/${id}`} />
      <header className="cs-hero">
        <div className="cs-container">
          <p className="cs-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="cs-hero__lead">{description}</p>}
        </div>
      </header>
      <nav className="cs-crumbs" aria-label="Breadcrumb">
        <ol className="cs-container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>
      {/* Study bodies were authored on paper, so they keep the light scheme in dark mode. */}
      <section className="cs-body ds-scheme-light">
        <div className="cs-container cs-container--wide">
          <Body />
        </div>
      </section>
    </div>
  )
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null)
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProject = async () => {
      if (!id) {
        setError('Project ID not found')
        setLoading(false)
        return
      }

      try {
        // First, try to load as a case study
        const caseStudyData = await getCaseStudyById(id)
        if (caseStudyData) {
          setCaseStudy(caseStudyData)
          setLoading(false)
          return
        }

        // If not a case study, try to load as a regular project
        const projectData = allProjects.find(p => p.id === id)
        if (projectData) {
          setProject(projectData)
        } else {
          setError('Project not found')
        }
      } catch (err) {
        console.error('Failed to load project:', err)
        setError('Failed to load project')
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [id])

  if (loading) {
    return (
      <div className="cs-state" role="status">
        <p>Loading project...</p>
      </div>
    )
  }

  if (error || (!caseStudy && !project)) {
    return (
      <div className="cs-state">
        <h1>Project Not Found</h1>
        <p>{error || 'The project you\'re looking for does not exist.'}</p>
        <Link to="/projects" className="ms-primary-link">Back to Projects</Link>
      </div>
    )
  }

  if (caseStudy) {
    return (
      <CaseStudyPage
        id={caseStudy.id}
        eyebrow={caseStudy.category}
        title={caseStudy.title}
        description={heroWithoutDescription.has(caseStudy.id) ? undefined : caseStudy.description}
        metaDescription={caseStudy.description}
        Body={caseStudy.component}
      />
    )
  }

  if (project) {
    const Body = projectPages[project.id]
    if (Body) {
      return (
        <CaseStudyPage
          id={project.id}
          eyebrow="Featured Project"
          title={project.title}
          description={project.description}
          metaDescription={project.description}
          Body={Body}
        />
      )
    }

    return (
      <>
        <PageMeta title={project.title} description={project.description} path={`/projects/${project.id}`} />
        <ProjectDetailTemplate project={project} />
      </>
    )
  }

  return null
}

export default ProjectDetail
