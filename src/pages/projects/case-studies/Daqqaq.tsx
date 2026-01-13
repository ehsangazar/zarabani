import { Link } from 'react-router-dom'

const Daqqaq = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Multilingual Online Learning Platform
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          Daqqaq
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              A multilingual learning platform serving 1,000+ students in Bahrain, 
              designed to address the most confusing area of course material delivery 
              through thoughtful content experience design.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Designed the content experience, developed responsive layouts, and conducted 
              iterative usability testing and observational research to improve content 
              hierarchy and streamline user flows.
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Project Overview
        </h2>
        <div className="prose prose-lg max-w-none text-primary-dark/80 leading-relaxed">
          <p className="text-lg mb-6">
            Designed the content experience of Daqqaq, a multilingual learning platform 
            serving 1,000+ students in Bahrain, by addressing the most confusing area which 
            was the course material delivery. Developed a responsive layout that organized 
            three content types on one screen without causing cognitive overload.
          </p>
          <p className="text-lg mb-6">
            The design led to a 87% student adoption rate within three months, reflecting 
            a successful shift from social media channels. Conducted iterative usability 
            testing and observational research to improve content hierarchy and streamline 
            user flow.
          </p>
          <p className="text-lg">
            These improvements led to a 35% reduction in task completion time (completing 
            a lesson), significantly lowered user friction across devices.
          </p>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Results
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl font-extrabold text-primary mb-2">87%</div>
            <p className="text-primary-dark/80 font-medium">
              Student adoption rate within three months
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl font-extrabold text-primary mb-2">35%</div>
            <p className="text-primary-dark/80 font-medium">
              Reduction in task completion time
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl font-extrabold text-primary mb-2">1,000+</div>
            <p className="text-primary-dark/80 font-medium">
              Students served in Bahrain
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Design Approach
        </h2>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Content Organization
            </h3>
            <p className="text-primary-dark/80">
              Developed a responsive layout that organized three content types on one screen 
              without causing cognitive overload. This approach simplified the most confusing 
              area of course material delivery.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Iterative Testing & Research
            </h3>
            <p className="text-primary-dark/80">
              Conducted iterative usability testing and observational research to improve 
              content hierarchy and streamline user flow. This data-driven approach ensured 
              continuous improvements based on real user behavior.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Platform Migration
            </h3>
            <p className="text-primary-dark/80">
              The successful 87% adoption rate reflected a significant shift from social 
              media channels to the dedicated learning platform, demonstrating effective 
              user engagement and platform value.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Projects */}
      <div className="mt-20 mb-12 text-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to All Projects</span>
        </Link>
      </div>
    </div>
  )
}

export default Daqqaq

