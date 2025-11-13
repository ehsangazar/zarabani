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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/50">
        {/* Artistic Blob Shapes */}
        <div className="absolute top-20 right-0 h-96 w-96 blob bg-gradient-to-br from-indigo-400/20 to-violet-400/20 animate-float"></div>
        <div
          className="absolute bottom-20 left-0 h-80 w-80 blob bg-gradient-to-br from-fuchsia-400/20 to-rose-400/20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 h-72 w-72 blob bg-gradient-to-br from-violet-400/15 to-indigo-400/15 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="relative z-10 space-y-10 lg:col-span-7 fade-in-up">
            {/* Badge */}
            <div className="inline-flex">
              <span className="group relative inline-flex items-center gap-2 rounded-2xl border border-indigo-200/50 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-widest backdrop-blur-sm transition-all hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/5 to-violet-600/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
                <span className="relative flex items-center gap-2">
                  <span className="flex h-2 w-2">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                  </span>
                  <span className="text-gradient">Product · UX · Strategy</span>
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
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
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{" "}
                and measurable impact.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
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
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-white shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/40"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
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
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border-2 border-indigo-600/20 bg-white/80 px-8 py-4 text-base font-bold backdrop-blur-sm transition-all hover:scale-105 hover:border-indigo-600/40 hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-violet-600/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
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
                  className="group relative overflow-hidden rounded-2xl border border-indigo-100/50 bg-white/70 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <p className="mb-1 text-2xl">{stat.icon}</p>
                    <p className="text-4xl font-extrabold text-gradient">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-600">
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
            <div className="glass group relative overflow-hidden rounded-3xl p-8 shadow-2xl shadow-indigo-500/10 transition-all hover:shadow-indigo-500/20">
              {/* Decorative Elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400/10 to-violet-400/10 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-400/10 to-rose-400/10 blur-3xl"></div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gradient">
                      Currently shaping @ TarsimInc
                    </p>
                    <p className="mb-2 text-2xl font-extrabold text-slate-900">
                      Product & UX Designer
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Leading discovery, research synthesis, and experience
                      strategy across multilingual platforms.
                    </p>
                  </div>
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-3xl font-bold text-white shadow-xl shadow-indigo-500/30 transition-transform group-hover:scale-110 group-hover:rotate-6">
                    Z
                  </div>
                </div>

                {/* Impact Section */}
                <div className="mt-8 space-y-4 rounded-2xl border border-indigo-100/50 bg-gradient-to-br from-indigo-50/50 to-violet-50/30 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    <p className="text-sm font-bold uppercase tracking-wider text-gradient">
                      Recent impact
                    </p>
                  </div>
                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold text-indigo-700">
                          70% adoption
                        </strong>{" "}
                        in 3 months for multilingual learning platform by
                        aligning product vision and experience roadmap.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        Reduced data input time by{" "}
                        <strong className="font-bold text-violet-700">
                          35%
                        </strong>{" "}
                        across enterprise librarian workflows with system-level
                        IA improvements.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-rose-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">
                        Elevated library platform satisfaction by{" "}
                        <strong className="font-bold text-fuchsia-700">
                          60%
                        </strong>{" "}
                        through insights-led redesign across 14 institutions.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="mt-6 flex items-start gap-4 rounded-2xl border border-white/50 bg-white/60 p-5 shadow-lg backdrop-blur-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-xl shadow-lg">
                    💬
                  </div>
                  <div className="flex-1">
                    <p className="text-sm italic leading-relaxed text-slate-700">
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
