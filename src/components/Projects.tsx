const Projects = () => {
  const projects = [
    {
      title: "Multilingual Online Learning Platform (Daqqaq)",
      description: "Designed a multilingual online learning platform used by 1,000+ students, simplifying complex content delivery by supporting three distinct content types on a single screen without causing cognitive overload.",
      achievements: [
        "70% adoption rate within the first three months",
        "35% reduction in task completion time",
        "Students transitioned from external platforms to Daqqaq"
      ],
      technologies: ["UX Research", "User Flows", "Wireframes", "Prototypes", "Usability Testing"]
    },
    {
      title: "Document & Book Management Software Redesign",
      description: "Redesigned document and book management desktop software used by librarians and multiple user roles, streamlining the high-volume data input process to boost efficiency and reduce task time.",
      achievements: [
        "35% reduction in data input time",
        "Improved interface for four distinct personas",
        "Enhanced librarian workflow efficiency"
      ],
      technologies: ["Desktop UX", "Information Architecture", "User Research", "Interface Design"]
    },
    {
      title: "Library Platform Redesign",
      description: "Redesigned a library platform used by 14 libraries, addressing key usability challenges identified through stakeholder interviews and user research.",
      achievements: [
        "60% improvement in user satisfaction and engagement",
        "Optimized display of detailed book information"
      ],
      technologies: ["User Research", "Stakeholder Interviews", "Platform Redesign"]
    },
    {
      title: "Company Website Redesign",
      description: "Revamped the company's public website, aligning with updated branding and visual identity.",
      achievements: [
        "25% increase in user retention",
        "More consistent brand perception"
      ],
      technologies: ["Web Design", "Branding", "Visual Identity"]
    },
    {
      title: "Digital Food Menu App",
      description: "Designed a digital food menu app for restaurants shifting from a traditional system, reducing customer ordering time and improving decision-making.",
      achievements: [
        "40% reduction in customer ordering time",
        "Streamlined user flow through research and iterative testing"
      ],
      technologies: ["Mobile App Design", "User Research", "Iterative Testing"]
    },
    {
      title: "Omaia - A Digital Garden",
      description: "A digital garden project showcasing thoughtful design and user experience principles.",
      achievements: [
        "Case study available",
        "Demonstrates design thinking approach"
      ],
      technologies: ["Digital Product Design", "UX Strategy", "Case Study"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Case Studies & Projects
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my approach to user-centered design and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
