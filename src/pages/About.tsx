import PageMeta from '../components/PageMeta'
import Icon from '../components/Icon'

const About = () => {
  const skills = [
    "User Research & Testing",
    "UX/UI Design",
    "Information Architecture",
    "Wireframing & Prototyping",
    "Usability Testing",
    "User Journey Mapping",
    "Design Systems",
    "Accessibility (WCAG)",
    "Figma & Design Tools",
    "Cross-functional Collaboration"
  ]

  const experience = [
    {
      title: "User Experience Designer",
      company: "TarsimInc",
      period: "May 2022 — Sep 2024",
      description: "Contributed to 6 diverse digital products, participating in user research, creating user flows, wireframes, high-fidelity prototypes, and conducting usability testing.",
      achievements: [
        "Worked on storytelling techniques to communicate design decisions clearly",
        "Ensured alignment with user and business needs",
        "Collaborated cross-functionally with developers and product managers",
        "Ensured technical feasibility and timely delivery of user-centric solutions"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title="About"
        description="UX designer passionate about creating thoughtful experiences that put people first. Based in London. User research, wireframing, prototyping, and cross-functional collaboration."
        path="/about"
      />
      {/* Main Content */}
      <section className="relative pt-24 py-20 px-4 sm:px-6 lg:px-8 bg-warm/20 min-h-screen overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 h-80 w-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 backdrop-blur-sm px-5 py-2.5 mb-6 shadow-lg">
              <Icon name="waving_hand" size={2} />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                About Me
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-6">
              Hi, I'm{' '}
              <span className="text-primary">
                Zara Bani
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
              A UX designer passionate about creating thoughtful experiences that put people first, while aligning with business goals. I've been learning and working in this field for about three years.
            </p>
          </div>
          {/* Bio Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-3xl p-8 shadow-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-lg text-white">
                  <Icon name="track_changes" size={2} />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">My Journey</h3>
                <p className="text-lg text-primary-dark/80 leading-relaxed mb-4">
                  During my time in the industry, I had the opportunity to work on over 6 real-world projects, designing both mobile and web experiences from research to high-fidelity prototypes.
                </p>
                <p className="text-lg text-primary-dark/80 leading-relaxed">
                  Working in this field has been a game changer; it constantly pushes me to think creatively, stay curious, and challenge assumptions.
                </p>
              </div>
              
              <div className="glass rounded-3xl p-8 shadow-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-2xl shadow-lg text-white">
                  <Icon name="lightbulb" size={2} />
            </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">My Approach</h3>
                <p className="text-lg text-primary-dark/80 leading-relaxed mb-4">
                  What excites me most is going beyond the surface to uncover genuine problems and design meaningful, user-centred solutions.
                </p>
                <p className="text-lg text-primary-dark/80 leading-relaxed">
                  I believe in the power of research, empathy, and iterative design to create products that truly make a difference in people's lives.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
                <Icon name="work" size={2} className="text-primary" />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Experience
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">Professional Experience</h2>
            </div>

            {experience.map((exp, index) => (
              <div key={index} className="glass rounded-3xl p-8 lg:p-10 shadow-xl mb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <div className="mb-3 inline-flex items-center gap-3 rounded-2xl bg-primary px-4 py-2 shadow-lg">
                      <Icon name="work" size={1.5} className="text-white" />
                      <span className="text-sm font-bold uppercase tracking-wider text-white">
                        Current Role
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-primary-dark mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-primary font-bold text-lg">{exp.company}</p>
                      <span className="text-primary-dark/40">•</span>
                      <p className="text-primary-dark/70 font-medium">{exp.period}</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-primary-dark/80 mb-8 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-lg font-bold text-primary-dark mb-4">Key Responsibilities:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-warm/30 border border-primary/10">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg">
                          {i + 1}
                        </div>
                        <p className="text-primary-dark/80 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
                <Icon name="construction" size={2} />
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  Skills
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">Skills & Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow border border-primary/10"
                >
                  <span className="text-primary-dark font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center glass rounded-3xl p-12 shadow-xl border border-primary/10">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
              <Icon name="chat_bubble_outline" size={3} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-6">Let's Work Together</h2>
            <p className="text-lg text-primary-dark/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about creating designs that make a real impact. Whether you're looking for a UX designer for your next project or just want to connect, I'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl hover:bg-primary/90 font-bold text-lg shadow-xl hover:shadow-2xl transition-transform hover:scale-105"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
