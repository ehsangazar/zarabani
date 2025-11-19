const Omaia = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2>Project Overview</h2>
      <p>
        Omaia is a human-centred UX project developed as part of the MSc User Experience Design course at BCU, showcasing an end-to-end design process to support postpartum mothers through emotionally engaging and user-driven solutions.
      </p>

      <h3>My Contributions</h3>
      <p>
        I contributed to the full end-to-end design process, with a focus on research, product scoping, ideation, wireframing, prototyping, and usability testing. I led user research efforts and synthesised insights to generate meaningful, user-centred solutions tailored to the needs of postpartum mothers.
      </p>

      <img 
        src="/case-studies/Omaia/1.png" 
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

      <div className="my-8 space-y-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <p className="font-medium">
            "Is there anything else you'd like to share about your experience as a new parent or any kind of help you wish you had?"
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800 mb-2">
              "My <strong>postpartum anxiety</strong> was severe and explaining it to my family felt impossible."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              — Sema, Maternity leave
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800 mb-2">
              "I wish I could <strong>listen</strong> to how other moms days have been and how they <strong>improved</strong> on a bad day."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              — Alisa, Housewife
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800 mb-2">
              "I need a place to go to and <strong>open up</strong> about what it's really like becoming a first time parent. It can be difficult living in a society where everyday at your fingertips, you can see people who look like the "<strong>perfect parent</strong>" who has it "all together" which <strong>isn't realistic</strong>."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              — Sara, Full-time job
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-3 font-bold text-center">
              82% Stress
            </div>
            <div className="bg-white p-4">
              <p className="text-gray-700">
                "I have reached out to friends about my mum anxiety & stress and it goes ignored. I've felt alone in it my entire journey."
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-3 font-bold text-center">
              78% Irritability
            </div>
            <div className="bg-white p-4 space-y-2">
              <p className="text-gray-700">
                "I am just irritated."
              </p>
              <p className="text-gray-700">
                "I feel irritated, sad, like I am a disappointment."
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-500 text-white p-3 font-bold text-center">
              66% Loss of identity
            </div>
            <div className="bg-white p-4 space-y-2">
              <p className="text-gray-700">
                "I feel like I don't have an identity outside of being a mum"
              </p>
              <p className="text-gray-700">
                "Motherhood changed who I am and how I feel. I am hurt, lost, broken."
              </p>
            </div>
          </div>
        </div>
      </div>

      <img 
        src="/case-studies/Omaia/2.png" 
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

      <div className="my-8 flex flex-wrap gap-8 items-center justify-center">
        <div className="text-center">
          <img 
            src="/case-studies/Omaia/Canopie.png" 
            alt="Canopie app icon" 
            className="w-24 h-24 mx-auto mb-2 rounded-lg"
          />
          <p className="text-sm font-semibold text-gray-700">Canopie</p>
        </div>
        <div className="text-center">
          <img 
            src="/case-studies/Omaia/Peanut.png" 
            alt="Peanut app icon" 
            className="w-24 h-24 mx-auto mb-2 rounded-lg"
          />
          <p className="text-sm font-semibold text-gray-700">Peanut</p>
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Canopie - Resilience for motherhood</h3>
        <p className="text-gray-700 mb-4">
          The app is primarily focused on Self-care.
        </p>
        <img 
          src="/case-studies/Omaia/2.png" 
          alt="Canopie app details" 
          className="w-full rounded-lg"
        />
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Peanut - Meet like-minded moms anytime-anywhere</h3>
        <p className="text-gray-700 mb-4">
          The app is primarily focused on Community.
        </p>
        <img 
          src="/case-studies/Omaia/3.png" 
          alt="Peanut app details" 
          className="w-full rounded-lg"
        />
      </div>

      <h2>Researching Problem Space</h2>
      <p>
        <strong>Subject-matter research showed the effective use cases of the 'Hook' model to encourage small, consistent acts of self-care.</strong>
      </p>
      <p>
        Fairly new in behavioural science, we naturally started with a deep-dive into literature research on behavioural frameworks, particularly the Hook model that could encourage continued self-care without adding pressure.
      </p>
      <p>
        We tailored its core ideas to fit the emotional landscape of new mothers—using gentle prompts, validating rewards, and moments of reflection to support small, meaningful actions that feel achievable & mothers could return to, even with busy hands and tired minds.
      </p>

      <img 
        src="/case-studies/Omaia/4.png" 
        alt="Researching Problem Space" 
        className="w-full rounded-lg my-8"
      />

      <h2>Defining Persona</h2>
      <p>
        <strong>Consolidating our key insights into 2 personas</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div className="text-center">
          <img 
            src="/case-studies/Omaia/home-mom.png" 
            alt="Chanel persona" 
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Chanel</h3>
          <p className="text-gray-600 mb-4">25, Stay at home mom</p>
          <p className="text-gray-700">
            Their goal is accessible ways to regulate & manage their stress and emotions without feeling overwhelmed.
          </p>
        </div>

        <div className="text-center">
          <img 
            src="/case-studies/Omaia/emma.png" 
            alt="Emma persona" 
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Emma</h3>
          <p className="text-gray-600 mb-4">35, Maternity leave</p>
          <p className="text-gray-700">
            Their goal is to Find a safe space where they can listen to real, unfiltered motherhood experiences.
          </p>
        </div>
      </div>

      <h2>User Storyboarding</h2>
      <p>
        Placing the persona in an ideal context scenario helps identify the minimum required functions of our MVP.
      </p>
      <p>
        At this stage, our primary goal is to extract a list of design requirements that we have to support in order for these ideal scenarios to happen. These requirements would then lead our idea generation phase.
      </p>

      <img 
        src="/case-studies/Omaia/5.png" 
        alt="User Storyboarding" 
        className="w-full rounded-lg my-8"
      />

      <h2>Brainstorming Storyboard Requirements</h2>
      <p>
        <strong>How do we support for the ideal solution scenario?</strong>
      </p>
      <p>
        To facilitate our generation phase, we further reframed our design requirements into key actionable statements that are broad enough to allow multiple solutions, but narrow enough to set focus.
      </p>

      <img 
        src="/case-studies/Omaia/6.png" 
        alt="Brainstorming Storyboard Requirements" 
        className="w-full rounded-lg my-8"
      />

      <h2>Approaching a Solution</h2>
      <p>
        <strong>Emphasising emotional recovery through a visual, personal, and reflective journey 🌳</strong>
      </p>
      <p>
        Leveraging our key findings and persona insights, we understood that the ideal solution must gently reconnect mothers with their emotional journey—validating their experiences and encouraging small acts of self-care.
      </p>
      <p>
        This led us to the approach of visualising emotional recovery through the metaphor of cultivation—breaking down the overwhelming postpartum phase into small, nurturing moments that reflect progress, resilience, and self-compassion.
      </p>

      <img 
        src="/case-studies/Omaia/7.png" 
        alt="Approaching a Solution" 
        className="w-full rounded-lg my-8"
      />

      <h2>Feature Prioritisation</h2>
      <p>
        <strong>Limited resources forced us to re-prioritise our features based on impact and effort.</strong>
      </p>
      <p>
        With a shorter time scope and technical feasibility, we decided to divide our initial features only focusing on features that requires low effort but yields high impact. This was facilitated by an initial voting system and A LOT of referring back to our persona's pain points and characteristics.
      </p>

      <img 
        src="/case-studies/Omaia/8.png" 
        alt="Feature Prioritisation" 
        className="w-full rounded-lg my-8"
      />

      <h2>System Architecture</h2>
      <p>
        Consideration for our persona's context directed a user flow focusing on minimum steps, time and cognitive effort that could deliver emotional validation and visible progress.
      </p>
      <p>
        To support this, we mapped out key flows—like emotional check-ins, quick self-care tasks, and community engagement—ensuring users could complete meaningful actions in just a few taps, with immediate visual feedback to reinforce a sense of care and growth.
      </p>

      <img 
        src="/case-studies/Omaia/9.png" 
        alt="System Architecture" 
        className="w-full rounded-lg my-8"
      />

      <h2>Our Solution - Omaia</h2>
      <p>
        A nurturing, personal, and reflective approach to supporting postpartum mothers, cultivating self-care and connection through gentle motivation.
      </p>

      <p className="text-gray-600 italic text-lg my-6">
        Every act of care helps your garden (your mind) flourish.
      </p>

      <img 
        src="/case-studies/Omaia/10.png" 
        alt="Every act of care helps your garden flourish" 
        className="w-full rounded-lg my-8"
      />

      <div className="my-8 flex flex-col md:flex-row gap-8 items-start">
        <img 
          src="/case-studies/Omaia/11.png" 
          alt="Your Garden of Growth" 
          className="w-full md:w-1/2 rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Garden of Growth 🌿
          </h3>
          <p className="text-gray-700 mb-6">
            A space to visualise nurturing your well-being with bite-sized daily acts.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Daily Nourishment</h4>
              <p className="text-gray-700">
                • Complete bite-sized self-care nourishments designed for tired minds and busy hands.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Watch It Bloom</h4>
              <p className="text-gray-700">
                • Each action waters (fertilizes, rains, seeds) your virtual garden, helping flowers grow and thrive.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Celebrate Progress</h4>
              <p className="text-gray-700">
                • Collect your blooms in the Plant Library and exchange them for real-world rewards and staying inspired.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 flex flex-col md:flex-row gap-8 items-start">
        <img 
          src="/case-studies/Omaia/12.png" 
          alt="Support for uninspiring days" 
          className="w-full md:w-1/2 rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Support for uninspiring days 🧡
          </h3>
          <p className="text-gray-700 mb-6">
            A safe, honest space to feel seen, heard, and supported.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Real Conversations</h4>
              <p className="text-gray-700">
                • Step away from perfection. Join rooms created by moms like you, where they share raw, unfiltered experiences.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">BuzzBoard Sharing</h4>
              <p className="text-gray-700">
                • Post about your struggles, ask questions, or simply express what's on your mind. Receive supportive comments and gentle encouragement from other moms walking a similar path.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Mom-to-Mom Gifting</h4>
              <p className="text-gray-700">
                • Send a flower from your Plant Library to someone who made you feel heard. Celebrate care with care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Iterations from Usability Tests</h2>
      <p>
        Through several rounds of moderated testing, we did informed iterations that helped refocus hierarchy and navigation.
      </p>
      <p>
        We asked the participants to complete several scenarios and observed their movement patterns, mental models and ability to complete the tasks. Through multiple rounds of feedback, we were able to make thoughtful changes to layout, language, and flow to ease mental load and help support feel just a tap away.
      </p>

      <div className="my-8 flex flex-col md:flex-row gap-8 items-start">
        <img 
          src="/case-studies/Omaia/13.png" 
          alt="Making rewards tangibles" 
          className="w-full md:w-1/2 rounded-lg shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Making rewards tangibles
          </h3>
          <p className="text-gray-700 mb-4">
            Users couldn't find the reward plan and they were unsure what their progress was leading to.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Insight:</strong> Without a clear goal, motivation dropped over time. (Goal-Gradient Effect)
          </p>
          <p className="text-gray-700">
            <strong>Solution:</strong> Introduced plant Library where users can easily track their growth and exchange matured plants for real-life vouchers; making progress feel more tangible and rewarding.
          </p>
        </div>
      </div>

      <div className="my-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Reframing "Tasks" as "Nourishments"
          </h3>
          <p className="text-gray-700 mb-4">
            "Tasks" felt like an obligation and chores and another burden for users.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Insight:</strong> (Cognitive Bias) Language affects perception and emotional response. (Framing Effect)
          </p>
          <p className="text-gray-700">
            <strong>Solution:</strong> Renamed daily activities to "Nourishments", It softened the tone and helped users approach self-care as emotionally supportive actions rather than duties.
          </p>
        </div>
        <img 
          src="/case-studies/Omaia/14.png" 
          alt="Reframing Tasks as Nourishments" 
          className="w-full md:w-1/2 rounded-lg shrink-0"
        />
      </div>

      <div className="my-8 flex flex-col md:flex-row gap-8 items-start">
        <img 
          src="/case-studies/Omaia/15.png" 
          alt="A/B Testing: Visibility vs. Anonymity" 
          className="w-full md:w-1/2 rounded-lg shrink-0"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            A/B Testing: Visibility vs. Anonymity in the community (Hive)
          </h3>
          <p className="text-gray-700 mb-4">
            5/10 &gt;&gt; Half of the users preferred profile photos to feel connected to real people.
          </p>
          <p className="text-gray-700 mb-4">
            5/10 &gt;&gt; The other half valued anonymity to speak freely.
          </p>
          <p className="text-gray-700">
            <strong>Insight:</strong> Insights informed a flexible profile setting, letting users choose how they show up.
          </p>
        </div>
      </div>

      <h2>The final MVP product</h2>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Onboarding + Signup</h3>

      <img 
        src="/case-studies/Omaia/16.png" 
        alt="Onboarding + Signup" 
        className="w-full rounded-lg my-8"
      />

      <img 
        src="/case-studies/Omaia/17.png" 
        alt="Final MVP product" 
        className="w-full rounded-lg my-8"
      />

      <h3 className="text-xl font-bold text-gray-900 mb-4">Garden + Plant library (exchanging the plants)</h3>

      <img 
        src="/case-studies/Omaia/18.png" 
        alt="Garden + Plant library" 
        className="w-full rounded-lg my-8"
      />

      <h3 className="text-xl font-bold text-gray-900 mb-4">Hive (Live community + Buzzboard)</h3>

      <img 
        src="/case-studies/Omaia/19.png" 
        alt="Hive Live community + Buzzboard" 
        className="w-full rounded-lg my-8"
      />

      <img 
        src="/case-studies/Omaia/20.png" 
        alt="Hive community features" 
        className="w-full rounded-lg my-8"
      />

      <h3 className="text-xl font-bold text-gray-900 mb-4">Rewards</h3>

      <img 
        src="/case-studies/Omaia/21.png" 
        alt="Rewards" 
        className="w-full rounded-lg my-8"
      />

      <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Resources</h3>

      <img 
        src="/case-studies/Omaia/22.png" 
        alt="Mental Resources" 
        className="w-full rounded-lg my-8"
      />

      <h2>Project Takeaways</h2>
      <p>
        <strong>Designing for emotion requires empathy, not assumption.</strong>
      </p>
      <p>
        What looked good on paper didn't always resonate in practice. Early concepts rooted in behavioural models only became meaningful once tested with real postpartum mothers.
      </p>
      <p>
        <strong>Real voices shifted our design direction.</strong>
      </p>
      <p>
        Our initial design intentions were rooted in structure and flow, but through research and survey responses, we uncovered a deeper need for emotional validation, connection, and gentleness. These user insights became the true foundation of Omaia's direction; from tone and visuals to features and flow.
      </p>
    </div>
  )
}

export default Omaia

