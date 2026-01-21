import { Link } from 'react-router-dom'

const DocumentManagement = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Document Management
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          Multi-Role SaaS Platform Redesign
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              A comprehensive redesign of a multi-role SaaS platform catering to librarians, 
              document enthusiasts, and organizations seeking efficient management tools.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Led the redesign process through qualitative surveys and observational research, 
              identified inefficiencies, and designed solutions for three distinct user roles 
              with tailored features for each persona.
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
            I undertook the redesign of a multi-role SaaS platform, catering to librarians, 
            document enthusiasts, and organizations seeking efficient management tools. The 
            challenge involved accommodating three distinct user roles with tailored features 
            for each of these defined personas.
          </p>
          <p className="text-lg mb-6">
            Through qualitative surveys and observational research, I identified inefficiencies 
            and frustrations in the existing system, especially around high-volume data entry 
            and task flows. My redesign introduced a cleaner information architecture, simplified 
            navigation, and role-based customizations; boosting workflow efficiency and reducing 
            librarian task completion time by approximately 35%.
          </p>
          <p className="text-lg">
            The updated interface maintained enough familiarity for ease of transition while 
            significantly enhancing usability and user satisfaction.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          The Challenge
        </h2>
        <div className="glass rounded-2xl p-8 border border-secondary/20">
          <h3 className="text-xl font-bold text-primary-dark mb-4">
            Accommodating Multiple User Roles
          </h3>
          <p className="text-primary-dark/80 mb-4">
            The platform needed to serve three distinct user groups, each with different needs 
            and workflows:
          </p>
          <ul className="space-y-3 text-primary-dark/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
              <span><strong>Librarians:</strong> Requiring efficient high-volume data entry and catalog management</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
              <span><strong>Document Enthusiasts:</strong> Needing intuitive organization and retrieval tools</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-2 w-2 flex-shrink-0 rounded-full bg-secondary"></span>
              <span><strong>Organizations:</strong> Seeking comprehensive management solutions for their document systems</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Research & Process Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Research & Design Process
        </h2>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Qualitative Research
            </h3>
            <p className="text-primary-dark/80">
              Conducted qualitative surveys and observational research to identify inefficiencies 
              and frustrations in the existing system, with a particular focus on high-volume data 
              entry and task flows that were causing user friction.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Information Architecture
            </h3>
            <p className="text-primary-dark/80">
              Redesigned the information architecture to be cleaner and more intuitive, with 
              simplified navigation that made it easier for users to find what they needed 
              regardless of their role or experience level.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/10">
            <h3 className="text-xl font-bold text-primary-dark mb-3">
              Role-Based Customizations
            </h3>
            <p className="text-primary-dark/80">
              Developed tailored features for each of the three defined personas, ensuring that 
              each user role had access to the tools and workflows most relevant to their needs 
              while maintaining a cohesive overall experience.
            </p>
          </div>
        </div>
      </section>

      {/* Selection of the designed solutions */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Selection of the designed solutions
        </h2>
      </section>

      <div className="my-16">
        <img
          src="/case-studies/document-management/1.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/2.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/3.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/4.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/5.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/6.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/7.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/8.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/9.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/10.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/11.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/12.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/13.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/14.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/15.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      {/* Key Results Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Results
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">35%</div>
            <p className="text-primary-dark/80 font-medium">
              Reduction in librarian task completion time
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">3</div>
            <p className="text-primary-dark/80 font-medium">
              Distinct user roles with tailored features
            </p>
          </div>
        </div>
        <div className="mt-6 glass rounded-2xl p-6 border border-secondary/10">
          <p className="text-primary-dark/80">
            The updated interface maintained enough familiarity for ease of transition while 
            significantly enhancing usability and user satisfaction across all user roles.
          </p>
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

export default DocumentManagement

