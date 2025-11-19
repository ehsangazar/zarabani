const projects = [
  {
    title: "Multilingual Online Learning Platform (Daqqaq)",
    description:
      "Designed a multilingual online learning platform used by 1,000+ students, simplifying complex content delivery by supporting three distinct content types on a single screen without causing cognitive overload.",
    icon: "📚",
    color: "indigo",
    achievements: [
      "70% adoption rate within the first three months",
      "35% reduction in task completion time",
      "Students transitioned from external platforms to Daqqaq",
    ],
    technologies: [
      "UX Research",
      "User Flows",
      "Wireframes",
      "Prototypes",
      "Usability Testing",
    ],
  },
  {
    title: "Document & Book Management Software Redesign",
    description:
      "Redesigned document and book management desktop software used by librarians and multiple user roles, streamlining the high-volume data input process to boost efficiency and reduce task time.",
    icon: "📖",
    color: "violet",
    achievements: [
      "35% reduction in data input time",
      "Improved interface for four distinct personas",
      "Enhanced librarian workflow efficiency",
    ],
    technologies: [
      "Desktop UX",
      "Information Architecture",
      "User Research",
      "Interface Design",
    ],
  },
  {
    title: "Library Platform Redesign",
    description:
      "Redesigned a library platform used by 14 libraries, addressing key usability challenges identified through stakeholder interviews and user research.",
    icon: "🏛️",
    color: "fuchsia",
    achievements: [
      "60% improvement in user satisfaction and engagement",
      "Optimized display of detailed book information",
    ],
    technologies: [
      "User Research",
      "Stakeholder Interviews",
      "Platform Redesign",
    ],
  },
  {
    title: "Company Website Redesign",
    description:
      "Revamped the company's public website, aligning with updated branding and visual identity.",
    icon: "🌐",
    color: "rose",
    achievements: [
      "25% increase in user retention",
      "More consistent brand perception",
    ],
    technologies: ["Web Design", "Branding", "Visual Identity"],
  },
  {
    title: "Digital Food Menu App",
    description:
      "Designed a digital food menu app for restaurants shifting from a traditional system, reducing customer ordering time and improving decision-making.",
    icon: "🍽️",
    color: "amber",
    achievements: [
      "40% reduction in customer ordering time",
      "Streamlined user flow through research and iterative testing",
    ],
    technologies: ["Mobile App Design", "User Research", "Iterative Testing"],
  },
  {
    title: "Omaia - A Digital Garden",
    description:
      "A digital garden project showcasing thoughtful design and user experience principles.",
    icon: "🌸",
    color: "emerald",
    achievements: [
      "Case study available",
      "Demonstrates design thinking approach",
    ],
    technologies: ["Digital Product Design", "UX Strategy", "Case Study"],
  },
];

const colorClasses: Record<
  string,
  { gradient: string; text: string; shadow: string; border: string }
> = {
  indigo: {
    gradient: "from-primary to-secondary",
    text: "text-primary",
    shadow: "shadow-primary/20",
    border: "border-primary/50",
  },
  violet: {
    gradient: "from-secondary to-accent",
    text: "text-secondary",
    shadow: "shadow-secondary/20",
    border: "border-secondary/50",
  },
  fuchsia: {
    gradient: "from-accent to-primary",
    text: "text-accent",
    shadow: "shadow-accent/20",
    border: "border-accent/50",
  },
  rose: {
    gradient: "from-primary via-secondary to-accent",
    text: "text-primary",
    shadow: "shadow-primary/20",
    border: "border-primary/50",
  },
  amber: {
    gradient: "from-secondary to-primary",
    text: "text-secondary",
    shadow: "shadow-secondary/20",
    border: "border-secondary/50",
  },
  emerald: {
    gradient: "from-primary-dark to-accent",
    text: "text-primary-dark",
    shadow: "shadow-primary-dark/20",
    border: "border-primary-dark/50",
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-warm/20 py-24 px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 h-96 w-96 blob bg-primary/10"></div>
      <div className="absolute bottom-40 left-0 h-80 w-80 blob bg-primary/10"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
            <span className="text-2xl">💼</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gradient">
              Portfolio
            </span>
          </div>
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
            Case Studies &{" "}
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-primary-dark/80">
            Here are some of the projects I've worked on, showcasing my approach
            to user-centered design and measurable impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color];
            return (
              <div
                key={index}
                className="group glass relative overflow-hidden rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative gradient blob */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl shadow-lg ${colors.shadow} transition-transform group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {project.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-extrabold text-primary-dark group-hover:text-gradient">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-primary-dark/80">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-sm">✨</span>
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider ${colors.text}`}
                      >
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-primary-dark/80"
                        >
                          <span
                            className={`mt-1 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary`}
                          />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary-dark/60">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`rounded-lg border ${colors.border} bg-white/80 px-3 py-1.5 text-xs font-semibold text-primary-dark/80 shadow-sm transition-all hover:scale-105 hover:shadow-md`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-bold ${colors.text} opacity-0 transition-opacity group-hover:opacity-100`}
                  >
                    <span>View Details</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
