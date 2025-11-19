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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">{error || 'The project you\'re looking for does not exist.'}</p>
          <Link
            to="/projects"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90"
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
      <section className="bg-warm/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {project.component && <project.component />}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail