import { Link } from "react-router-dom";

const stats = [
  {
    label: "Shipped digital products",
    value: "6+",
    icon: "🚀",
  },
  {
    label: "Measured adoption increase",
    value: "70%",
    icon: "📈",
  },
  {
    label: "Research hours with users",
    value: "400+",
    icon: "👥",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-warm">
        {/* Artistic Blob Shapes */}
        <div className="absolute top-20 right-0 h-96 w-96 blob bg-primary/20 animate-float"></div>
        <div
          className="absolute bottom-20 left-0 h-80 w-80 blob bg-primary/20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 h-72 w-72 blob bg-primary/15 animate-float"
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
                  <span className="text-gradient">Product · UX · Strategy</span>
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-primary-dark sm:text-6xl lg:text-7xl">
                Crafting digital experiences that balance{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">human insight</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M1 5C50 2 150 2 199 5"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
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
                </span>{" "}
                and measurable impact.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-primary-dark/80 sm:text-2xl">
                I'm <span className="font-bold text-gradient">Zara Bani</span>,
                a Product & UX Designer shaping thoughtful products for complex
                ecosystems. I translate research into strategic product
                decisions, turning unchecked assumptions into validated
                solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40"
              >
                <span className="absolute inset-0 bg-primary"></span>
                <span className="absolute inset-0 bg-primary"></span>
                <span className="relative flex items-center gap-2">
                  Explore Featured Work
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
              </Link>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border-2 border-primary/20 bg-white/80 px-8 py-4 text-base font-bold backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl"
              >

                <span className="relative text-gradient">
                  Book a Strategy Call
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/70 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <p className="mb-1 text-2xl">{stat.icon}</p>
                    <p className="text-4xl font-extrabold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary-dark/80">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div
            className="relative z-10 lg:col-span-5 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass group relative overflow-hidden rounded-3xl p-8 shadow-2xl shadow-primary/10 transition-all hover:shadow-primary/20">
              {/* Decorative Elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gradient">
                      Currently shaping @ TarsimInc
                    </p>
                    <p className="mb-2 text-2xl font-extrabold text-primary-dark">
                      Product & UX Designer
                    </p>
                    <p className="text-sm leading-relaxed text-primary-dark/80">
                      Leading discovery, research synthesis, and experience
                      strategy across multilingual platforms.
                    </p>
                  </div>
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-primary text-3xl font-bold text-white shadow-xl shadow-primary/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    Z
                  </div>
                </div>

                {/* Impact Section */}
                <div className="mt-8 space-y-4 rounded-2xl border border-primary/10 bg-warm/50 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                      Recent impact
                    </p>
                  </div>
                  <ul className="space-y-4 text-sm text-primary-dark">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold text-primary">
                          70% adoption
                        </strong>{" "}
                        in 3 months for multilingual learning platform by
                        aligning product vision and experience roadmap.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        Reduced data input time by{" "}
                        <strong className="font-bold text-secondary">
                          35%
                        </strong>{" "}
                        across enterprise librarian workflows with system-level
                        IA improvements.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        Elevated library platform satisfaction by{" "}
                        <strong className="font-bold text-accent">
                          60%
                        </strong>{" "}
                        through insights-led redesign across 14 institutions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="mt-6 flex items-start gap-4 rounded-2xl border border-white/50 bg-white/60 p-5 shadow-lg backdrop-blur-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl shadow-lg">
                    💬
                  </div>
                  <div className="flex-1">
                    <p className="text-sm italic leading-relaxed text-primary-dark/80">
                      "Zara balances empathy with rigorous product thinking—her
                      work makes complex journeys feel intuitive and trusted."
                    </p>
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

export default Hero;
