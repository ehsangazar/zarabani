import { Link } from "react-router-dom";
import Icon from "./Icon";

const stats = [
  { label: "Shipped digital products", value: "10+", icon: "rocket_launch" },
  { label: "Measured adoption increase", value: "70%", icon: "trending_up" },
  { label: "Research hours with users", value: "400+", icon: "groups" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-warm/40">
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
          <div className="relative z-10 space-y-10 lg:col-span-8 fade-in-up">

            {/* Headline */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-medium text-primary">
                Hello there, I'm Zara Bani
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-primary-dark sm:text-6xl lg:text-7xl">
                Product & UX designer
              </h1>
              <p className="max-w-3xl text-lg sm:text-xl leading-relaxed text-primary-dark/80">
                I'm an end-to-end Product Designer and storyteller, focused on
                turning user pain into product decisions that balance usability,
                feasibility, and business goals. I help teams move from insight
                to action by aligning user needs with practical constraints,
                making informed trade-offs, and shaping clear, usable solutions
                across SaaS, B2B, and B2C products. My experience includes
                complex, data-heavy platforms, multi-role systems, and SaaS
                products, where clarity, scalability, and usability are critical.
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
                    <Icon name={stat.icon} size={2} className="mb-1 text-primary-dark/80" />
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

          {/* Right Column - Image Card */}
          <div
            className="relative z-10 lg:col-span-4 fade-in-up"
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
                </div>

                {/* Quick Info */}
                <div className="mt-8 space-y-4 rounded-2xl border border-primary/10 bg-warm/50 p-6">
                  <div className="flex items-center gap-2">
                    <Icon name="location_on" size={1.25} className="text-primary-dark/80" />
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
  );
};

export default Hero;
