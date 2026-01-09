const FocusedLearning = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          A learning hub that made course materials easier to find, follow, and
          finish
        </h1>
      </div>

      {/* Introduction */}
      <section className="my-10">
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          A case study in applying psychological principles to redesign an
          educational platform for 10,000+ students.
        </p>
      </section>

      {/* Main Image */}
      <div className="my-16">
        <img
          src="/case-studies/Daqqaq/1.png"
          alt="From Cognitive Chaos to Focused Learning - Journey visualization"
          className="w-full"
        />
      </div>

      {/* Project Overview and My Contributions */}
      <div className="grid md:grid-cols-2 gap-8 my-16">
        <div>
          <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
            Project Overview
          </h3>
          <p className="text-primary-dark/80">
            A learning platform serving 10,000+ students of a specific
            instructor in Bahrain, designed to replace scattered course content
            delivery with a single, structured lesson experience.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
            My Contributions
          </h3>
          <p className="text-primary-dark/80">
            Designed the content experience, conducted iterative usability
            testing and observational research to improve content hierarchy and
            streamline user flows.
          </p>
        </div>
      </div>

      <div className="my-16">
        <img
          src="/case-studies/Daqqaq/2.png"
          alt="From Cognitive Chaos to Focused Learning"
          className="w-full"
        />
      </div>

      {/* Problem Discovery */}
      <section className="my-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#057251]">
          Problem Discovery (What was broken)
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/3">
            <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
              For over 10,000 students, learning was a constant struggle of assembly. Critical materials for a single lesson were scattered across disconnected platforms, forcing them to piece together their own education.
              </p>
              <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
              Students were relying on YouTube and other informal methods to follow online lessons. Materials were spread across formats (video/audio + book PDFs + script text), so students wasted time switching between sources, losing their place, and re-finding the same content again.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/case-studies/Daqqaq/3.png"
              alt="Problem Discovery - Scattered learning materials"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="my-10">
        <hr className="my-8 border-primary-dark/20" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#057251]">
          Outcome (What changed)
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mt-4">
          Daqqaq brought lesson materials into one structured lesson page, reduced the effort to complete a session, and improved
        </p>
      </section>

    </div>
  );
}

export default FocusedLearning

