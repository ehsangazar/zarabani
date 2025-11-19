import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-warm/30 py-24 px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 h-96 w-96 blob bg-primary/10"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 blob bg-primary/10"></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
            <span className="text-2xl">💬</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gradient">
              Get In Touch
            </span>
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
            Let's Create Something{" "}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-primary-dark/80">
            I'm always interested in new opportunities and collaborations. Let's
            build better experiences together!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8 shadow-xl">
              <h3 className="mb-8 text-3xl font-extrabold text-primary-dark">
                Connect With Me
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/50 p-5 transition-transform transition-shadow hover:scale-105 hover:border-primary/20 hover:shadow-lg">
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
                    <p className="font-semibold text-primary-dark">
                      zara.bani@example.com
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/50 p-5 transition-transform transition-shadow hover:scale-105 hover:border-primary/20 hover:shadow-lg">
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
                      href="https://linkedin.com/in/zara-bani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gradient hover:underline"
                    >
                      linkedin.com/in/zara-bani
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="mt-8 rounded-2xl border border-primary/10 bg-warm/50 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                    Available for
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-primary-dark/80">
                  <li className="flex items-center gap-2">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Full-time UX Design opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-secondary"></span>
                    <span>Freelance & Contract projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-accent"></span>
                    <span>Consulting & Advisory roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 shadow-2xl lg:p-10">
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
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-shadow focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-primary-dark/80"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-shadow focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-primary-dark/80"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border-2 border-primary/10 bg-white/50 px-5 py-3.5 text-primary-dark placeholder-primary-dark/40 backdrop-blur-sm transition-shadow focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl px-8 py-4 text-base font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40"
              >
                <span className="absolute inset-0 bg-primary"></span>

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
  );
};

export default Contact;
