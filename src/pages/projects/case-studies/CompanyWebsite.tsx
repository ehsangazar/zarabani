import { Link } from 'react-router-dom'

const CompanyWebsite = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Tarsim's Website
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          Website Redesign & Brand Alignment
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              A comprehensive website redesign to align with updated branding and visual identity, 
              creating a cohesive digital presence that reflects the company's core services.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Led the UX design and redesign process, implementing a mobile-first approach and 
              refined content structure to improve usability, engagement, and brand consistency.
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
            As a UX designer, I led the redesign of the company's website to align with its 
            updated branding and visual identity. The goal was to create a cohesive digital 
            presence that reflects the company's core services while improving usability and 
            engagement.
          </p>
          <p className="text-lg mb-6">
            Through a mobile-first approach and a refined content structure, the revamped site 
            enhanced user navigation, improved clarity around service offerings, and established 
            a more consistent brand perception.
          </p>
          <p className="text-lg">
            These improvements contributed to a 25% increase in user retention and strengthened 
            the company's overall digital credibility.
          </p>
        </div>
      </section>

      {/* Goals Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Project Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Brand Alignment
            </h3>
            <p className="text-primary-dark/80">
              Align the website with the company's updated branding and visual identity to 
              create a cohesive digital presence that accurately represents the brand.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Improved Usability
            </h3>
            <p className="text-primary-dark/80">
              Enhance user navigation and improve clarity around service offerings to make 
              it easier for visitors to understand and engage with the company's services.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Mobile-First Design
            </h3>
            <p className="text-primary-dark/80">
              Implement a mobile-first approach to ensure the website performs optimally 
              across all devices and screen sizes.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Enhanced Engagement
            </h3>
            <p className="text-primary-dark/80">
              Improve user engagement and retention by creating a more intuitive and 
              compelling user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Design Approach
        </h2>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Mobile-First Methodology
            </h3>
            <p className="text-primary-dark/80">
              Adopted a mobile-first approach, designing for smaller screens first and then 
              scaling up to desktop. This ensured optimal performance and user experience 
              across all devices, from smartphones to large desktop displays.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Refined Content Structure
            </h3>
            <p className="text-primary-dark/80">
              Restructured and refined the content architecture to improve clarity around 
              service offerings. The new structure makes it easier for users to find 
              relevant information and understand the company's core services.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Enhanced Navigation
            </h3>
            <p className="text-primary-dark/80">
              Redesigned the navigation system to be more intuitive and user-friendly. 
              The improved navigation helps users move through the site more efficiently 
              and find the information they need with fewer clicks.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Brand Consistency
            </h3>
            <p className="text-primary-dark/80">
              Ensured that all design elements, from typography to color schemes to imagery, 
              align with the updated branding guidelines. This consistency strengthens brand 
              recognition and creates a more professional, cohesive digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Results Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Results
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl font-extrabold text-primary mb-2">25%</div>
            <p className="text-primary-dark/80 font-medium">
              Increase in user retention
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
            <p className="text-primary-dark/80 font-medium">
              Mobile-responsive design implementation
            </p>
          </div>
        </div>
        <div className="mt-6 glass rounded-2xl p-6 border border-primary/10">
          <p className="text-primary-dark/80 mb-4">
            The redesigned website successfully achieved its goals:
          </p>
          <ul className="space-y-2 text-primary-dark/80 list-disc list-inside">
            <li>Created a cohesive digital presence aligned with updated branding</li>
            <li>Enhanced user navigation and improved clarity around service offerings</li>
            <li>Established a more consistent brand perception</li>
            <li>Strengthened the company's overall digital credibility</li>
          </ul>
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

export default CompanyWebsite

