import { Link } from "react-router-dom";

const ExampleProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-violet-400/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <div className="text-center space-y-6">
            <div className="inline-flex">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full font-semibold">
                Mobile App Design
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Example Case Study - Mobile Banking App
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A case study demonstrating how to add new projects using the
              markdown-based system.
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Overview */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Project Overview
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This is an example case study to demonstrate how easy it is to add
              new projects to your portfolio using the new markdown-based
              system.
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                My Contributions
              </h3>
              <p className="text-slate-700 leading-relaxed">
                I led the design process from concept to launch, focusing on
                user research and iterative design.
              </p>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white text-xl font-bold">
                  ⚠️
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  The Challenge
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Users struggled with complex banking interfaces that made simple
                transactions feel overwhelming.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-xl font-bold">
                  ✨
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  The Solution
                </h2>
              </div>
              <p className="text-slate-700 leading-relaxed">
                We created an intuitive mobile banking app with simplified
                navigation and clear visual hierarchy.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Easy Transfers
                </h3>
                <p className="text-slate-600">
                  One-tap money transfers between accounts
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Smart Insights
                </h3>
                <p className="text-slate-600">
                  Spending analytics and budgeting tools
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Secure Access
                </h3>
                <p className="text-slate-600">
                  Biometric authentication for quick login
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <p className="text-xl leading-relaxed mb-8">
              The app achieved a{" "}
              <span className="font-bold text-2xl">50% increase</span> in user
              engagement and significantly improved user satisfaction scores.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-indigo-100">Increase in Engagement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">↑</div>
                <div className="text-indigo-100">Improved Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">✓</div>
                <div className="text-indigo-100">Streamlined Process</div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="glass rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Skills Applied
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "UX Research",
                "Mobile Design",
                "Prototyping",
                "User Testing",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700 px-4 py-2 rounded-full font-semibold border border-indigo-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-xl text-center bg-gradient-to-br from-slate-50 to-indigo-50">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Want to work together?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              If you like what you see and want to work together, get in touch!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExampleProject;
