const Omaia = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2>Project Overview</h2>
      <p>
        Omaia is a human-centred UX project developed as part of the MSc User Experience Design course at BCU, showcasing an end-to-end design process to support postpartum mothers through emotionally engaging and user-driven solutions.
      </p>

      <h3>My Contribution</h3>
      <p>
        I contributed to the full end-to-end design process, with a focus on research, product scoping, ideation, wireframing, prototyping, and usability testing. I led user research efforts and synthesised insights to generate meaningful, user-centred solutions tailored to the needs of postpartum mothers.
      </p>

      <img 
        src="/cases/omaia/1.png" 
        alt="Omaia - A digital garden for the minds of postpartum mothers to grow" 
        className="w-full rounded-lg my-8"
      />

      <h2>Problem Discovery</h2>
      <p>
        <strong>Mental health crisis among new mothers is growing.</strong>
      </p>
      <p>
        As we began exploring the landscape of postpartum care, a troubling pattern started to emerge. Through early desk research and real-world stories, we uncovered a growing mental health crisis among new mothers.
      </p>

      <h3>The unspoken battle of mental health:</h3>
      
      <div className="bg-pink-50 p-6 rounded-lg my-6 flex items-center gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <span className="text-5xl font-bold text-gray-900">57%</span>
          <p className="text-gray-700 mt-2 text-lg">
            of women share how mental health challenges make them feel invisible and vulnerable.
          </p>
        </div>
      </div>

      <blockquote className="border-l-4 border-primary bg-primary/10 p-4 my-6 italic text-primary-dark">
        <p>
          "Many women feel unsupported by the healthcare system after childbirth.
        </p>
        <p>
          While pregnancy involves frequent check-ins, post-birth care often drops off, leaving a six-week gap. This can feel isolating; sending the message that mothers should be "fine," despite the emotional and physical challenges they face.
        </p>
        <p>
          Many feel overwhelmed, exhausted, and unprepared."
        </p>
        <p className="not-italic font-semibold mt-4">
          — Dr. Rachel, Clinical Psychologist
        </p>
      </blockquote>

      <h2>Validating Our Assumptions</h2>
      <p>
        <strong>Conducting a survey with 20+ participants and survey respondents shared the struggle of emotional toll of postpartum life</strong>
      </p>
      <p>
        We conducted a survey with our potential users (postpartum mothers) to validate our initial findings and better understand the emotional struggles they face after childbirth, how they navigate hormonal changes, and the role of self-care and community support in their daily lives.
      </p>

      <img 
        src="/cases/omaia/2.png" 
        alt="User feedback and statistics on postpartum experience" 
        className="w-full rounded-lg my-8"
      />

      <h3>The biggest themes we discovered were:</h3>
      <ul>
        <li>lack of awareness around postpartum mental & emotional changes - limited emotional support</li>
        <li>need for real connections with other moms to hear real stories rather than the perfection often seen on social media.</li>
      </ul>

      <h2>Analysing Market & Competitors</h2>
      <p>
        Our competitive analysis revealed that the postpartum support app market is still emerging and not saturated yet, with only a few dedicated solutions to the emotional recovery of new mothers.
      </p>
      <p>
        Looking at the popular players within the space, we discovered a similar feature offering across the apps that is centred around self-care and community. We hypothesised that these might be key features in emotional recovery and that there is an opportunity to position ourselves differently through approach.
      </p>
    </div>
  )
}

export default Omaia

