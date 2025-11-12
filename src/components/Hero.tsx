import { Link } from 'react-router-dom'

const stats = [
  {
    label: 'Shipped digital products',
    value: '6+',
  },
  {
    label: 'Measured adoption increase',
    value: '70%',
  },
  {
    label: 'Research hours with users',
    value: '400+',
  },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50 pt-28 pb-24">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-b from-purple-100/0 via-purple-100/40 to-purple-100/10 blur-3xl lg:block" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="relative z-10 space-y-8 lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm shadow-purple-200/40">
              Product · UX · Strategy
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
                Crafting digital experiences that balance human insight and measurable impact.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                I’m <span className="font-semibold text-purple-600">Zara Bani</span>, a Product & UX Designer shaping thoughtful products for complex ecosystems. I translate research into strategic product decisions, turning unchecked assumptions into validated solutions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-purple-400/30 transition-all hover:-translate-y-0.5 hover:from-purple-500 hover:to-purple-400"
              >
                Explore Featured Work
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-8 py-3 text-base font-semibold text-purple-600 shadow-md shadow-purple-100/50 transition-all hover:-translate-y-0.5 hover:border-purple-300 hover:text-purple-700"
              >
                Book a Strategy Call
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-purple-100 bg-white/90 px-6 py-5 shadow-sm shadow-purple-100/70 backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-purple-600">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:col-span-5">
            <div className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-2xl shadow-purple-200/50 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple-600">Currently shaping @ TarsimInc</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Product & UX Designer</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Leading discovery, research synthesis, and experience strategy across multilingual platforms.
                  </p>
                </div>
                <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-400 text-2xl font-bold text-white shadow-lg shadow-purple-400/40 sm:flex">
                  Z
                </div>
              </div>

              <div className="mt-8 space-y-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                  Recent impact
                </p>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                    70% adoption in 3 months for multilingual learning platform by aligning product vision and experience roadmap.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                    Reduced data input time by 35% across enterprise librarian workflows with system-level IA improvements.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                    Elevated library platform satisfaction by 60% through insights-led redesign across 14 institutions.
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-purple-100 bg-white/60 p-4 text-sm text-slate-500">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-100 to-purple-50" />
                <p>
                  "Zara balances empathy with rigorous product thinking—her work makes complex journeys feel intuitive and trusted."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
