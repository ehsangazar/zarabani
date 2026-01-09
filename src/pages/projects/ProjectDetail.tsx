import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCaseStudyById, type CaseStudy } from '../../utils/caseStudies'
import { allProjects, type Project } from '../../utils/projects'
import ProjectDetailTemplate from './ProjectDetailTemplate'
import DocumentManagement from './case-studies/DocumentManagement'
import LibraryPlatform from './case-studies/LibraryPlatform'
import CompanyWebsite from './case-studies/CompanyWebsite'
import FoodMenuApp from './case-studies/FoodMenuApp'

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
      <div className="min-h-screen bg-warm/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary-dark/60">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || (!caseStudy && !project)) {
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

  // Render case study
  if (caseStudy) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full font-semibold border border-primary/20">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {caseStudy.category}
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-8 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-xl sm:text-2xl text-primary-dark/80 leading-relaxed max-w-4xl mx-auto">
                {caseStudy.description}
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
                {caseStudy.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {caseStudy.component && <caseStudy.component />}
          </div>
        </section>
      </div>
    )
  }

  // Render regular project
  if (project) {
    // Check if it's document-management with custom detail page
    if (project.id === 'document-management') {
      return (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary/10 text-5xl shadow-xl shadow-secondary/20 transition-transform hover:scale-110">
                    {project.icon}
                  </div>
                </div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm px-4 py-2 rounded-full font-semibold border border-secondary/50">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Featured Project
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm/20">
            <div className="max-w-7xl mx-auto">
              <DocumentManagement />
            </div>
          </section>
        </div>
      )
    }

    // Check if it's library-platform with custom detail page
    if (project.id === 'library-platform') {
      return (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-accent/10 text-5xl shadow-xl shadow-accent/20 transition-transform hover:scale-110">
                    {project.icon}
                  </div>
                </div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm px-4 py-2 rounded-full font-semibold border border-accent/50">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    Featured Project
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm/20">
            <div className="max-w-7xl mx-auto">
              <LibraryPlatform />
            </div>
          </section>
        </div>
      )
    }

    // Check if it's company-website with custom detail page
    if (project.id === 'company-website') {
      return (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10 text-5xl shadow-xl shadow-primary/20 transition-transform hover:scale-110">
                    {project.icon}
                  </div>
                </div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-4 py-2 rounded-full font-semibold border border-primary/50">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Featured Project
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm/20">
            <div className="max-w-7xl mx-auto">
              <CompanyWebsite />
            </div>
          </section>
        </div>
      )
    }

    // Check if it's food-menu-app with custom detail page
    if (project.id === 'food-menu-app') {
      return (
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary/10 text-5xl shadow-xl shadow-secondary/20 transition-transform hover:scale-110">
                    {project.icon}
                  </div>
                </div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm px-4 py-2 rounded-full font-semibold border border-secondary/50">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Featured Project
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
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warm/20">
            <div className="max-w-7xl mx-auto">
              <FoodMenuApp />
            </div>
          </section>
        </div>
      )
    }
    
    return <ProjectDetailTemplate project={project} />
  }

  return null
}

export default ProjectDetail