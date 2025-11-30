import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllCaseStudies, type CaseStudy } from '../utils/caseStudies'
import { allProjects } from '../utils/projects'

interface CombinedProject {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  achievements: string[]
  caseStudyId?: string
  isCaseStudy: boolean
}

const Projects = () => {
  const [projects, setProjects] = useState<CombinedProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const caseStudies = await getAllCaseStudies()
        
        // Create a map of case studies by ID
        const caseStudyMap = new Map<string, CaseStudy>()
        caseStudies.forEach(cs => {
          caseStudyMap.set(cs.id, cs)
        })

        // Combine all projects with case studies
        // Start with case studies (prioritize Omaia first)
        const combined: CombinedProject[] = []
        
        // Add Omaia first if it exists
        const omaiaCaseStudy = caseStudyMap.get('omaia')
        const omaiaProject = allProjects.find(p => p.id === 'omaia')
        if (omaiaCaseStudy && omaiaProject) {
          combined.push({
            id: omaiaCaseStudy.id,
            title: omaiaCaseStudy.title,
            description: omaiaCaseStudy.description,
            category: omaiaCaseStudy.category,
            technologies: omaiaCaseStudy.technologies,
            achievements: omaiaCaseStudy.achievements,
            caseStudyId: omaiaCaseStudy.id,
            isCaseStudy: true,
          })
        }

        // Add other case studies (excluding Omaia)
        caseStudies.forEach(cs => {
          if (cs.id !== 'omaia') {
            combined.push({
              id: cs.id,
              title: cs.title,
              description: cs.description,
              category: cs.category,
              technologies: cs.technologies,
              achievements: cs.achievements,
              caseStudyId: cs.id,
              isCaseStudy: true,
            })
          }
        })

        // Add other projects that don't have case studies
        allProjects.forEach(project => {
          if (!caseStudyMap.has(project.id)) {
            combined.push({
              id: project.id,
              title: project.title,
              description: project.description,
              category: 'Featured Project',
              technologies: project.technologies,
              achievements: project.achievements,
              isCaseStudy: false,
            })
          }
        })

        setProjects(combined)
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section className="pt-24 py-20 px-4 sm:px-6 lg:px-8 bg-warm/20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto mb-4"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <p className="text-primary-dark font-medium">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative pt-24 py-20 px-4 sm:px-6 lg:px-8 bg-warm/20 min-h-screen overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 mb-6 shadow-lg">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Portfolio
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-6">
            Case Studies &{' '}
            <span className="text-primary">
              Featured Work
            </span>
          </h1>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my approach to user-centered design and measurable impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-primary-dark mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-primary-dark/70 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Achievements Section */}
                <div className="mb-6 p-4 rounded-2xl bg-warm/40 border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">✨</span>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-primary-dark/80">
                        <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-dark/60 mb-3">
                    Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/80 border border-primary/20 text-xs font-semibold text-primary-dark/80 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer to push button to bottom */}
                <div className="mt-auto"></div>

                {/* View Project Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="group/btn relative inline-flex items-center justify-center gap-3 w-full bg-primary text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 overflow-hidden mt-6"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {project.isCaseStudy ? 'View Case Study' : 'View Project'}
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">No projects yet</h3>
            <p className="text-primary-dark/60">Check back soon for case studies!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
