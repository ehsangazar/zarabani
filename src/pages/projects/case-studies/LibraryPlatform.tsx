import { Link } from 'react-router-dom'

const LibraryPlatform = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Library Platform
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          Digital Platform Redesign for 14 Libraries
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              A comprehensive redesign of a digital platform serving 14 libraries, 
              focused on creating a more intuitive and user-friendly experience.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Conducted stakeholder interviews and user research to identify usability 
              challenges, then redesigned the platform with improved content hierarchy, 
              filtering, and search functionality.
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
            This project involved the redesign of a digital platform serving 14 libraries, 
            aiming to create a more intuitive and user-friendly experience. Usability challenges, 
            particularly in locating and interpreting detailed book information, were uncovered 
            through stakeholder interviews and user research.
          </p>
          <p className="text-lg mb-6">
            The redesigned platform introduced a clearer content hierarchy, improved filtering 
            and search functionality, and an enhanced layout that made complex book data more 
            accessible.
          </p>
          <p className="text-lg">
            These improvements led to a 60% increase in user satisfaction and user engagement.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          The Challenge
        </h2>
        <div className="glass rounded-2xl p-8 border border-accent/20">
          <h3 className="text-xl font-bold text-primary-dark mb-4">
            Usability Challenges in Book Information Access
          </h3>
          <p className="text-primary-dark/80 mb-4">
            Through stakeholder interviews and user research, key usability challenges were 
            identified:
          </p>
          <ul className="space-y-3 text-primary-dark/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span>Difficulty in <strong>locating</strong> detailed book information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span>Challenges in <strong>interpreting</strong> complex book data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span>Lack of clear content hierarchy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-accent"></span>
              <span>Ineffective filtering and search functionality</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          The Solution
        </h2>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-accent/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Clearer Content Hierarchy
            </h3>
            <p className="text-primary-dark/80">
              Redesigned the information architecture to create a clearer content hierarchy, 
              making it easier for users to navigate and find the book information they need.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-accent/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Improved Filtering & Search
            </h3>
            <p className="text-primary-dark/80">
              Enhanced the filtering and search functionality to help users quickly locate 
              books and access detailed information with greater ease.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-accent/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Enhanced Layout for Complex Data
            </h3>
            <p className="text-primary-dark/80">
              Created an enhanced layout that made complex book data more accessible and 
              easier to interpret, improving the overall user experience across all 14 libraries.
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
          <div className="glass rounded-2xl p-6 border border-accent/20">
            <div className="text-4xl font-extrabold text-accent mb-2">60%</div>
            <p className="text-primary-dark/80 font-medium">
              Increase in user satisfaction and engagement
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-accent/20">
            <div className="text-4xl font-extrabold text-accent mb-2">14</div>
            <p className="text-primary-dark/80 font-medium">
              Libraries served by the redesigned platform
            </p>
          </div>
        </div>
        <div className="mt-6 glass rounded-2xl p-6 border border-accent/10">
          <p className="text-primary-dark/80">
            The redesigned platform successfully addressed usability challenges, making book 
            information more accessible and significantly improving user satisfaction across 
            all participating libraries.
          </p>
        </div>
      </section>

      {/* Research Process Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Research & Discovery
        </h2>
        <div className="glass rounded-2xl p-6 border border-accent/10">
          <p className="text-primary-dark/80 mb-4">
            The design process began with comprehensive stakeholder interviews and user research 
            to understand the specific challenges facing library users. This research phase was 
            crucial in identifying:
          </p>
          <ul className="space-y-2 text-primary-dark/80 list-disc list-inside">
            <li>Pain points in locating book information</li>
            <li>Difficulties interpreting complex bibliographic data</li>
            <li>Gaps in filtering and search capabilities</li>
            <li>Opportunities for improved content organization</li>
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

export default LibraryPlatform

