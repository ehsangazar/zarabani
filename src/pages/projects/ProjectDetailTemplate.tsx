import { Link } from 'react-router-dom'
import type { Project } from '../../utils/projects'

interface ProjectDetailTemplateProps {
  project: Project
}

const colorClasses: Record<
  string,
  { gradient: string; text: string; shadow: string; border: string; bg: string }
> = {
  indigo: {
    gradient: "from-primary to-secondary",
    text: "text-primary",
    shadow: "shadow-primary/20",
    border: "border-primary/50",
    bg: "bg-primary/10",
  },
  violet: {
    gradient: "from-secondary to-accent",
    text: "text-secondary",
    shadow: "shadow-secondary/20",
    border: "border-secondary/50",
    bg: "bg-secondary/10",
  },
  fuchsia: {
    gradient: "from-accent to-primary",
    text: "text-accent",
    shadow: "shadow-accent/20",
    border: "border-accent/50",
    bg: "bg-accent/10",
  },
  rose: {
    gradient: "from-primary via-secondary to-accent",
    text: "text-primary",
    shadow: "shadow-primary/20",
    border: "border-primary/50",
    bg: "bg-primary/10",
  },
  amber: {
    gradient: "from-secondary to-primary",
    text: "text-secondary",
    shadow: "shadow-secondary/20",
    border: "border-secondary/50",
    bg: "bg-secondary/10",
  },
  emerald: {
    gradient: "from-primary-dark to-accent",
    text: "text-primary-dark",
    shadow: "shadow-primary-dark/20",
    border: "border-primary-dark/50",
    bg: "bg-primary-dark/10",
  },
}

const ProjectDetailTemplate = ({ project }: ProjectDetailTemplateProps) => {
  const colors = colorClasses[project.color] || colorClasses.indigo

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <div
                className={`inline-flex h-24 w-24 items-center justify-center rounded-3xl ${colors.bg} text-5xl shadow-xl ${colors.shadow} transition-transform hover:scale-110`}
              >
                {project.icon}
              </div>
            </div>
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} text-sm px-4 py-2 rounded-full font-semibold border ${colors.border}`}>
                <span className={`w-2 h-2 ${colors.bg} rounded-full`} style={{ backgroundColor: 'currentColor' }}></span>
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
        <div className="max-w-5xl mx-auto">
          {/* Achievements Section */}
          <div className="mb-16 glass rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">✨</span>
              <h2 className="text-3xl font-extrabold text-primary-dark">
                Key Achievements
              </h2>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              {project.achievements.map((achievement, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-6 rounded-2xl ${colors.bg} border ${colors.border} backdrop-blur-sm transition-transform hover:scale-[1.02]`}
                >
                  <span className={`mt-1 flex h-3 w-3 flex-shrink-0 rounded-full bg-primary`}></span>
                  <p className="text-lg text-primary-dark/90 leading-relaxed font-medium">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🛠️</span>
              <h2 className="text-3xl font-extrabold text-primary-dark">
                Skills & Technologies Applied
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center px-5 py-3 rounded-xl bg-white/90 border ${colors.border} text-base font-semibold text-primary-dark/90 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 backdrop-blur-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Back to Projects */}
          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 overflow-hidden"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to All Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetailTemplate

