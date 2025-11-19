import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCaseStudyById, type CaseStudy } from '../../utils/caseStudies'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<CaseStudy | null>(null)
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
        const projectData = await getCaseStudyById(id)
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
      <div className="min-h-screen bg-warm/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary-dark/60">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-warm/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Project Not Found</h1>
          <p className="text-primary-dark/60 mb-8">{error || 'The project you\'re looking for does not exist.'}</p>
          <Link
            to="/projects"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full font-semibold border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-dark/80 leading-relaxed max-w-4xl mx-auto">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-neutral/30 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-primary-dark/60 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-primary-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link
              to="/projects"
              className="text-primary-dark/60 hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <svg className="w-4 h-4 text-primary-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary-dark font-semibold">
              {project.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {project.component && <project.component />}
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail