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
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Problem Discovery
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          [Add your problem statement here]
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          [Add your problem description here]
        </p>
      </section>

      {/* Research */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">Research</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          [Add your research findings here]
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          [Add your research description here]
        </p>
      </section>

      {/* Solution */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">Solution</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          [Add your solution description here]
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          [Add your solution details here]
        </p>
      </section>

      {/* Takeaways */}
      <section className="py-20 my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Project Takeaways
        </h3>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              [Add your key takeaway here]
            </h2>
            <p className="text-lg text-primary-dark/70 leading-relaxed">
              [Add your takeaway description here]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FocusedLearning

