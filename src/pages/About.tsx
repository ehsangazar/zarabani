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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-warm">
          {/* Artistic Blob Shapes */}
          <div className="absolute top-20 right-0 h-96 w-96 blob bg-primary/20 animate-float"></div>
          <div
            className="absolute bottom-20 left-0 h-80 w-80 blob bg-secondary/20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 h-72 w-72 blob bg-accent/15 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="relative z-10 space-y-10 lg:col-span-7 fade-in-up">
              {/* Badge */}
              <div className="inline-flex">
                <span className="group relative inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
                  <span className="relative flex items-center gap-2">
                    <span className="flex h-2 w-2">
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <span className="text-gradient">About Me</span>
                  </span>
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-primary-dark sm:text-6xl lg:text-7xl">
                  Hi, I'm{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient">Zara Bani</span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 200 8"
                      fill="none"
                    >
                      <path
                        d="M1 5C50 2 150 2 199 5"
                        stroke="url(#gradient-about)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient-about"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#B24B01" />
                          <stop offset="50%" stopColor="#B24B01" />
                          <stop offset="100%" stopColor="#B24B01" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
          </h1>
                <p className="max-w-2xl text-xl leading-relaxed text-primary-dark/80 sm:text-2xl">
                  A UX designer passionate about creating thoughtful experiences
                  that put people first, while aligning with business goals. I've
                  been learning and working in this field for about three years.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <p className="mb-1 text-2xl">🎓</p>
                    <p className="text-4xl font-extrabold text-gradient">3+</p>
                    <p className="mt-2 text-sm font-semibold text-primary-dark/80">
                      Years of Experience
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <p className="mb-1 text-2xl">🚀</p>
                    <p className="text-4xl font-extrabold text-gradient">6+</p>
                    <p className="mt-2 text-sm font-semibold text-primary-dark/80">
                      Projects Shipped
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <p className="mb-1 text-2xl">💡</p>
                    <p className="text-4xl font-extrabold text-gradient">100%</p>
                    <p className="mt-2 text-sm font-semibold text-primary-dark/80">
                      User-Centered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Card */}
            <div
              className="relative z-10 lg:col-span-5 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="glass group relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 transition-all hover:shadow-primary/20">
                {/* Decorative Elements */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="relative p-8">
                  {/* Image */}
                  <div className="relative mx-auto max-w-sm">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl"></div>
                    <div className="absolute -inset-2 bg-primary/10 rounded-3xl"></div>
                    
                    {/* Image container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <img 
                        src="/zara.png" 
                        alt="Zara Bani" 
                        className="w-full h-full object-cover aspect-[3/4]"
                      />
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-2xl shadow-xl flex items-center justify-center text-4xl opacity-90">
                      ✨
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-8 space-y-4 rounded-2xl border border-primary/10 bg-warm/50 p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📍</span>
                      <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                        Location
                      </p>
                    </div>
                    <p className="text-primary-dark font-semibold">
                      London, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-3xl p-8 shadow-xl">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-lg">
                  🎯
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
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-2xl shadow-lg">
                  💡
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
                <span className="text-2xl">💼</span>
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
                      <span className="text-xl">💼</span>
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
                <span className="text-2xl">🛠️</span>
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
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl shadow-lg">
              💬
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
