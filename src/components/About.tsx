const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 px-6 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 h-64 w-64 blob bg-secondary/10"></div>
      <div className="absolute bottom-20 right-0 h-80 w-80 blob bg-primary/10"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
            <span className="text-2xl">👋</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gradient">
              About Me
            </span>
          </div>
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
            Designing with purpose,{" "}
            <span className="text-gradient">driven by curiosity</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="glass group rounded-3xl p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl shadow-lg">
                ✨
              </div>
              <p className="mb-6 text-lg leading-relaxed text-primary-dark/80">
                Hi! I'm{" "}
                <strong className="font-bold text-gradient">Zara Bani</strong>,
                a UX designer passionate about creating thoughtful experiences
                that put people first, while aligning with business goals. I've
                been learning and working in this field for about three years.
              </p>
            </div>

            <div className="glass group rounded-3xl p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-2xl shadow-lg">
                🎯
              </div>
              <p className="mb-6 text-lg leading-relaxed text-primary-dark/80">
                Working in this field has been a game changer; it constantly
                pushes me to think creatively, stay curious, and challenge
                assumptions. What excites me most is going beyond the surface to
                uncover genuine problems and design meaningful, user-centred
                solutions.
              </p>
            </div>

            <div className="glass group rounded-3xl p-8 shadow-xl transition-all hover:shadow-2xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl shadow-lg">
                🤝
              </div>
              <p className="text-lg leading-relaxed text-primary-dark/80">
                Collaborating in cross-functional teams has taught me the value
                of clear communication, empathy, and teamwork. I enjoy learning
                from others, sharing ideas, and creating designs that make a
                real impact. Let's connect and build better experiences
                together!
              </p>
            </div>
          </div>

          {/* Right Column - Experience Card */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass group relative overflow-hidden rounded-3xl p-10 shadow-2xl transition-all hover:shadow-primary/20">
              {/* Decorative gradient */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>

              <div className="relative">
                {/* Header */}
                <div className="mb-8">
                  <div className="mb-4 inline-flex items-center gap-3 rounded-2xl bg-primary px-4 py-2 shadow-lg shadow-primary/30">
                    <span className="text-2xl">💼</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-white">
                      Current Role
                    </span>
                  </div>
                  <h3 className="mb-3 text-3xl font-extrabold text-primary-dark">
                    User Experience Designer
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gradient">
                      At TarsimInc
                    </span>
                    <span className="text-primary-dark/60">•</span>
                    <span className="text-primary-dark/80">May 2022 — Sep 2024</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-5">
                  <div className="group/item flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary shadow-lg transition-transform group-hover/item:scale-110">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <p className="text-primary-dark/80 leading-relaxed">
                      Contributed to{" "}
                      <strong className="font-bold text-primary">
                        6 diverse digital products
                      </strong>
                      , participating in user research, creating user flows,
                      wireframes, high-fidelity prototypes, and conducting
                      usability testing.
                    </p>
                  </div>

                  <div className="group/item flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary shadow-lg transition-transform group-hover/item:scale-110">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <p className="text-primary-dark/80 leading-relaxed">
                      Worked on{" "}
                      <strong className="font-bold text-secondary">
                        storytelling techniques
                      </strong>{" "}
                      to communicate design decisions clearly and ensure
                      alignment with user and business needs.
                    </p>
                  </div>

                  <div className="group/item flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent shadow-lg transition-transform group-hover/item:scale-110">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <p className="text-primary-dark/80 leading-relaxed">
                      Collaborated{" "}
                      <strong className="font-bold text-accent">
                        cross-functionally
                      </strong>{" "}
                      with developers and product managers, ensuring technical
                      feasibility and timely delivery of user-centric solutions.
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mt-8 rounded-2xl border border-primary/10 bg-warm/50 p-6">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gradient">
                    Core Competencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "User Research",
                      "Prototyping",
                      "Usability Testing",
                      "Design Systems",
                      "Storytelling",
                      "Cross-functional",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-primary/20 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-dark/80 shadow-sm transition-transform transition-shadow hover:scale-105 hover:border-primary/40 hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
