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
      <section className="bg-gradient-to-br from-purple-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Avatar and Intro */}
            <div>
              <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                Z
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm Zara Bani! 👋
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I've been learning and working as a UX designer for about three years, and I'm currently pursuing my Master's in User Experience Design at Birmingham City University.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                During my time in the industry, I had the opportunity to work on over 6 real-world projects, designing both mobile and web experiences from research to high-fidelity prototypes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Working in this field has been a game changer; it constantly pushes me to think creatively, stay curious, and challenge assumptions. What excites me most is going beyond the surface to uncover genuine problems and design meaningful, user-centred solutions.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>

            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-purple-600 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 font-medium mt-2 md:mt-0">{exp.period}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>

            <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Master's in User Experience Design</h3>
                <p className="text-purple-600 font-semibold text-lg mb-1">Birmingham City University</p>
                <p className="text-gray-600">Current - Pursuing advanced studies in UX design</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm passionate about creating designs that make a real impact. Whether you're looking for a UX designer for your next project or just want to connect, I'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
