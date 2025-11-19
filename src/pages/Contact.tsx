import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
            <span className="text-2xl">💬</span>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-dark mb-6">
            Let's Create Something{' '}
            <span className="text-primary">
              Amazing Together
            </span>
          </h1>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-primary-dark/80 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. Let's build better experiences together!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-extrabold text-primary-dark mb-8">
                Connect With Me
              </h2>

              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/50 p-5 transition-all hover:scale-105 hover:border-primary/30 hover:shadow-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30 transition-transform group-hover:rotate-6">
                    <svg
                      className="h-7 w-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-sm font-bold uppercase tracking-wider text-primary-dark/60">
                      Email
                    </p>
                    <a
                      href="mailto:me@zarabani.design"
                      className="font-semibold text-primary-dark hover:text-primary transition-colors"
                    >
                      me@zarabani.design
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/50 p-5 transition-all hover:scale-105 hover:border-primary/30 hover:shadow-lg">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-secondary shadow-lg shadow-secondary/30 transition-transform group-hover:rotate-6">
                    <svg
                      className="h-7 w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 text-sm font-bold uppercase tracking-wider text-primary-dark/60">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/zara-bani-95a0991a8/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-dark hover:text-primary transition-colors"
                    >
                      linkedin.com/in/zara-bani-95a0991a8
                    </a>
                  </div>
                </div>
              </div>

              {/* Available For Section */}
              <div className="rounded-2xl border border-primary/10 bg-warm/40 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">
                    Available for
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-primary-dark/80">
                  <li className="flex items-center gap-3">
                    <span className="flex h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                    <span>Full-time UX Design opportunities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
                    <span>Freelance & Contract projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
                    <span>Consulting & Advisory roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 lg:p-10 shadow-xl">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-extrabold text-primary-dark">
                Send a Message
              </h3>
              <p className="text-primary-dark/80">
                Fill out the form below and I'll get back to you soon!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-primary-dark/80"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-primary-dark/80"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-primary-dark/80"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
