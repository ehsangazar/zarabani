const Omaia = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12">
      {/* Hero Section */}
      <div className="py-12 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
          Omaia
        </h1>
        <p className="text-2xl text-primary-dark/80 mb-8 leading-relaxed">
          A digital garden for the minds of postpartum mothers to grow
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              Overview
            </h3>
            <p className="text-primary-dark/80">
              A human-centred UX project developed as part of the MSc User
              Experience Design course at BCU, showcasing an end-to-end design
              process to support postpartum mothers through emotionally engaging
              and user-driven solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary-dark/60 uppercase tracking-wide mb-2">
              My Role
            </h3>
            <p className="text-primary-dark/80">
              Full end-to-end design process: research, product scoping,
              ideation, wireframing, prototyping, and usability testing. Led
              user research efforts and synthesised insights to generate
              meaningful, user-centred solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="my-16">
        <img
          src="/case-studies/Omaia/1.png"
          alt="Omaia - A digital garden for the minds of postpartum mothers to grow"
          className="w-full"
        />
      </div>

      {/* Problem Discovery */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Problem Discovery
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Mental health crisis among new mothers is growing.
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          As we began exploring the landscape of postpartum care, a troubling
          pattern started to emerge. Through early desk research and real-world
          stories, we uncovered a growing mental health crisis among new
          mothers.
        </p>

        <h3 className="text-2xl font-bold text-primary-dark mb-6">
          The unspoken battle of mental health
        </h3>

        <div className="p-8 my-8 flex items-center gap-6">
          <div className="shrink-0 w-20 h-20 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <span className="text-6xl font-bold text-primary">57%</span>
            <p className="text-primary-dark mt-2 text-lg font-medium">
              of women share how mental health challenges make them feel
              invisible and vulnerable.
            </p>
          </div>
        </div>

        <blockquote className="border-l-4 border-accent pl-6 my-8">
          <p className="text-primary-dark/80 italic mb-3">
            "Many women feel unsupported by the healthcare system after
            childbirth. While pregnancy involves frequent check-ins, post-birth
            care often drops off, leaving a six-week gap. This can feel
            isolating; sending the message that mothers should be "fine,"
            despite the emotional and physical challenges they face. Many feel
            overwhelmed, exhausted, and unprepared."
          </p>
          <p className="text-primary-dark font-semibold mt-4">
            — Dr. Rachel, Clinical Psychologist
          </p>
        </blockquote>
      </section>

      {/* Validating Assumptions */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Validating Our Assumptions
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Conducting a survey with 20+ participants revealed the emotional toll
          of postpartum life
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          We conducted a survey with postpartum mothers to validate our initial
          findings and better understand the emotional struggles they face after
          childbirth, how they navigate hormonal changes, and the role of
          self-care and community support in their daily lives.
        </p>

        <img
          src="/case-studies/Omaia/comment-box.png"
          alt="User feedback and statistics"
          className="w-full my-8"
        />

        <div className="mt-8">
          <h3 className="text-3xl font-bold text-primary-dark mb-3 text-center">
            The biggest themes we discovered were:
          </h3>
          <img
            src="/case-studies/Omaia/biggest-theme.png"
            alt="Themes"
            className="w-full my-8"
          />
        </div>
      </section>

      {/* Market Analysis */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Analysing Market & Competitors
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Our competitive analysis revealed that the postpartum support app
          market is still emerging and not saturated yet, with only a few
          dedicated solutions to the emotional recovery of new mothers.
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
          Looking at the popular players within the space, we discovered a
          similar feature offering across the apps that is centred around
          self-care and community. We hypothesised that these might be key
          features in emotional recovery and that there is an opportunity to
          position ourselves differently through approach.
        </p>

        <div className="flex flex-wrap gap-12 items-center justify-center my-12">
          {[
            { src: "/case-studies/Omaia/Canopie.png", name: "Canopie" },
            { src: "/case-studies/Omaia/Peanut.png", name: "Peanut" },
          ].map((app, idx) => (
            <div key={idx} className="text-center">
              <img
                src={app.src}
                alt={`${app.name} app icon`}
                className="w-28 h-28 mx-auto mb-3"
              />
              <p className="text-base font-bold text-primary-dark">
                {app.name}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">
              Canopie - Resilience for motherhood
            </h3>
            <p className="text-primary-dark/60 mb-4">
              Primarily focused on Self-care
            </p>
            <img
              src="/case-studies/Omaia/2.png"
              alt="Canopie details"
              className="w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary-dark mb-2">
              Peanut - Meet like-minded moms anytime-anywhere
            </h3>
            <p className="text-primary-dark/60 mb-4">
              Primarily focused on Community
            </p>
            <img
              src="/case-studies/Omaia/3.png"
              alt="Peanut details"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Researching Problem Space
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Subject-matter research showed the effective use cases of the 'Hook'
          model to encourage small, consistent acts of self-care
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-6">
          Fairly new in behavioural science, we naturally started with a
          deep-dive into literature research on behavioural frameworks,
          particularly the Hook model that could encourage continued self-care
          without adding pressure.
        </p>
        <p className="text-lg text-primary-dark/80 leading-relaxed mb-8">
          We tailored its core ideas to fit the emotional landscape of new
          mothers—using gentle prompts, validating rewards, and moments of
          reflection to support small, meaningful actions that feel achievable &
          mothers could return to, even with busy hands and tired minds.
        </p>

        <img
          src="/case-studies/Omaia/4.png"
          alt="Hook model research"
          className="w-full my-8"
        />
      </section>

      {/* Personas */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Defining Persona
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12">
          Consolidating our key insights into 2 personas
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              img: "/case-studies/Omaia/home-mom.png",
              name: "Chanel",
              age: "25, Stay at home mom",
              goal: "Accessible ways to regulate & manage their stress and emotions without feeling overwhelmed",
            },
            {
              img: "/case-studies/Omaia/emma.png",
              name: "Emma",
              age: "35, Maternity leave",
              goal: "Find a safe space where they can listen to real, unfiltered motherhood experiences",
            },
          ].map((persona, idx) => (
            <div key={idx} className="p-8 text-center">
              <img
                src={persona.img}
                alt={`${persona.name} persona`}
                className="w-36 h-36 rounded-full mx-auto mb-5 object-cover"
              />
              <h3 className="text-2xl font-bold text-primary-dark mb-2">
                {persona.name}
              </h3>
              <p className="text-primary-dark/60 mb-5 font-medium">
                {persona.age}
              </p>
              <p className="text-primary-dark/80 leading-relaxed">
                {persona.goal}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Images */}
      {[
        {
          src: "/case-studies/Omaia/5.png",
          title: "User Storyboarding",
          mainStatement: "Placing the persona in an ideal context scenario helps identify the minimum required functions of our MVP.",
          desc: "At this stage, our primary goal is to extract a list of design requirements that we have to support in order for these ideal scenarios to happen. These requirements would then lead our idea generation phase.",
        },
        {
          src: "/case-studies/Omaia/6.png",
          title: "Brainstorming Storyboard Requirements",
          mainStatement: "How do we support for the ideal solution scenario?",
          desc: "To facilitate our generation phase, we further reframed our design requirements into key actionable statements that are broad enough to allow multiple solutions, but narrow enough to set focus.",
        },
        {
          src: "/case-studies/Omaia/7.png",
          title: "Approaching a Solution",
          mainStatement: "Emphasising emotional recovery through a visual, personal, and reflective journey 🌳",
          desc: "Leveraging our key findings and persona insights, we understood that the ideal solution must gently reconnect mothers with their emotional journey—validating their experiences and encouraging small acts of self-care.",
          additionalDesc: "This led us to the approach of visualising emotional recovery through the metaphor of cultivation—breaking down the overwhelming postpartum phase into small, nurturing moments that reflect progress, resilience, and self-compassion.",
        },
        {
          src: "/case-studies/Omaia/8.png",
          title: "Feature Prioritisation",
          mainStatement: "Limited resources forced us to re-prioritise our features based on impact and effort.",
          desc: "With a shorter time scope and technical feasibility, we decided to divide our initial features only focusing on features that requires low effort but yields high impact. This was facilitated by an initial voting system and A LOT of referring back to our persona's pain points and characteristics.",
        },
        {
          src: "/case-studies/Omaia/9.png",
          title: "System Architecture",
          mainStatement: "Consideration for our persona's context directed a user flow focusing on minimum steps, time and cognitive effort that could deliver emotional validation and visible progress.",
          desc: "To support this, we mapped out key flows—like emotional check-ins, quick self-care tasks, and community engagement—ensuring users could complete meaningful actions in just a few taps, with immediate visual feedback to reinforce a sense of care and growth.",
        },
      ].map((section, idx) => (
        <section key={idx} className="my-20">
          {section.mainStatement ? (
            <>
              <h3 className="text-xl font-bold text-primary mb-4">
                {section.title}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                {section.mainStatement}
              </h2>
              <p className="text-lg text-primary-dark/70 leading-relaxed mb-4">
                {section.desc}
              </p>
              {section.additionalDesc && (
                <p className="text-lg text-primary-dark/70 leading-relaxed mb-8">
                  {section.additionalDesc.split('cultivation').map((part, i, arr) => 
                    i === arr.length - 1 ? part : (
                      <span key={i}>
                        {part}
                        <span className="text-green-600 font-semibold">cultivation</span>
                      </span>
                    )
                  )}
                </p>
              )}
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-primary-dark/80 leading-relaxed mb-8">
                {section.desc}
              </p>
            </>
          )}
          <img src={section.src} alt={section.title} className="w-full" />
        </section>
      ))}

      {/* Solution */}
      <section className="py-20 my-20 text-center">
        <h3 className="text-xl font-bold text-primary mb-4">
          Our Solution - Omaia
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          A nurturing, personal, and reflective approach to supporting
          postpartum mothers, cultivating self-care and connection through
          gentle motivation.
        </h2>
        <p className="text-lg text-primary-dark/60 italic mb-12">
          Every act of care helps your garden (your mind) flourish.
        </p>

        <video
          src="/case-studies/Omaia/video1.mp4"
          controls
          className="w-1/3 mx-auto"
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Features */}
      <section className="my-20">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <video
            src="/case-studies/Omaia/video2.mp4"
            controls
            className="w-1/3 mx-auto"
          >
            Your browser does not support the video tag.
          </video>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-4">
              Your Garden of Growth 🌳
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
              A space to visualise nurturing your well-being with bite-sized
              daily acts.
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Daily Nourishment",
                  desc: "Complete bite-sized self-care nourishments designed for tired minds and busy hands",
                },
                {
                  title: "Watch It Bloom",
                  desc: "Each action waters (fertilizes, rains, seeds) your virtual garden, helping flowers grow and thrive",
                },
                {
                  title: "Celebrate Progress",
                  desc: "Collect your blooms in the Plant Library and exchange them for real-world rewards and staying inspired",
                },
              ].map((feature, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary-dark mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-primary-dark/70">
                    • {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <video
            src="/case-studies/Omaia/video3.mp4"
            controls
            className="w-1/3 mx-auto"
          >
            Your browser does not support the video tag.
          </video>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary mb-4">
              Support for uninspiring days 🧡
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
              A safe, honest space to feel seen, heard, and supported.
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Real Conversations",
                  desc: "Step away from perfection. Join rooms created by moms like you, where they share raw, unfiltered experiences",
                },
                {
                  title: "BuzzBoard Sharing",
                  desc: "Post about your struggles, ask questions, or simply express what's on your mind. Receive supportive comments and gentle encouragement from other moms walking a similar path",
                },
                {
                  title: "Mom-to-Mom Gifting",
                  desc: "Send a flower from your Plant Library to someone who made you feel heard. Celebrate care with care",
                },
              ].map((feature, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-primary-dark mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-primary-dark/70">
                    • {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Iterations */}
      <section className="my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Iterations from Usability Tests
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Through several rounds of moderated testing, we did informed
          iterations that helped refocus hierarchy and navigation.
        </h2>
        <p className="text-lg text-primary-dark/70 leading-relaxed mb-12">
          We asked the participants to complete several scenarios and observed their movement
          patterns, mental models and ability to complete the tasks. Through multiple rounds of feedback, we were able to make thoughtful changes to layout, language, and flow to ease mental load and help support feel just a tap away.
        </p>

        {[
          {
            img: "/case-studies/Omaia/13.png",
            title: "1. Making rewards tangibles",
            firstParagraph: "Users couldn't find the reward plan and they were unsure what their progress was leading to.",
            insight:
              "Without a clear goal, motivation dropped over time. (Goal-Gradient Effect)",
            solution:
              "Introduced plant Library where users can easily track their growth and exchange matured plants for real-life vouchers; making progress feel more tangible and rewarding.",
            reverse: false,
          },
          {
            img: "/case-studies/Omaia/14.png",
            title: '2. Reframing "Tasks" as "Nourishments"',
            firstParagraph: '"Tasks" felt like an obligation and chores and another burden for users.',
            insight:
              "(Cognitive Bias) Language affects perception and emotional response. (Framing Effect)",
            solution:
              'Renamed daily activities to "Nourishments", It softened the tone and helped users approach self-care as emotionally supportive actions rather than duties.',
            reverse: true,
          },
          {
            img: "/case-studies/Omaia/15.png",
            title:
              "3. A/B Testing: Visibility vs. Anonymity in the community (Hive)",
            abTestResults: [
              "5/10 >> Half of the users preferred profile photos to feel connected to real people.",
              "5/10 >> The other half valued anonymity to speak freely.",
            ],
            solution:
              "Insights informed a flexible profile setting, letting users choose how they show up.",
            reverse: false,
          },
        ].map((iteration, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              iteration.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 items-center mb-16`}
          >
            <img
              src={iteration.img}
              alt={iteration.title}
              className="w-full md:w-1/2"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                {iteration.title}
              </h3>
              {iteration.firstParagraph && (
                <p className="text-lg text-primary-dark/80 mb-4">
                  {iteration.firstParagraph}
                </p>
              )}
              {iteration.abTestResults ? (
                <div className="mb-4">
                  <ul className="space-y-2 mb-4">
                    {iteration.abTestResults.map((result, idx) => (
                      <li key={idx} className="text-primary-dark/80">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                iteration.insight && (
                  <div className="mb-4">
                    <p className="text-primary-dark/80">
                      <span className="text-primary font-semibold">Insight: </span>
                      {iteration.insight.split(/(\([^)]+\))/).map((part, i) => 
                        part.startsWith('(') && part.endsWith(')') ? (
                          <span key={i} className="font-bold">{part}</span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </p>
                  </div>
                )
              )}
              <div>
                <p className="text-primary-dark/80">{iteration.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Final MVP */}
      <section className="my-20">
        <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">
          The Final MVP Product
        </h2>

        {[
          {
            title: "Onboarding + Signup",
            images: [
              "/case-studies/Omaia/16.png",
              "/case-studies/Omaia/17.png",
            ],
          },
          {
            title: "Garden + Plant library (exchanging the plants)",
            images: ["/case-studies/Omaia/18.png"],
          },
          {
            title: "Hive (Live community + Buzzboard)",
            images: [
              "/case-studies/Omaia/19.png",
              "/case-studies/Omaia/20.png",
            ],
          },
          { title: "Rewards", images: ["/case-studies/Omaia/21.png"] },
          { title: "Mental Resources", images: ["/case-studies/Omaia/22.png"] },
        ].map((mvp, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              {mvp.title}
            </h3>
            <div className="space-y-6">
              {mvp.images.map((img, imgIdx) => (
                <img
                  key={imgIdx}
                  src={img}
                  alt={`${mvp.title} ${imgIdx + 1}`}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Takeaways */}
      <section className="py-20 my-20">
        <h3 className="text-xl font-bold text-primary mb-4">
          Project Takeaways
        </h3>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Designing for emotion requires empathy, not assumption
            </h2>
            <p className="text-lg text-primary-dark/70 leading-relaxed">
              What looked good on paper didn't always resonate in practice.
              Early concepts rooted in behavioural models only became meaningful
              once tested with real postpartum mothers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              Real voices shifted our design direction
            </h3>
            <p className="text-lg text-primary-dark/70 leading-relaxed">
              Our initial design intentions were rooted in structure and flow,
              but through research and survey responses, we uncovered a deeper
              need for emotional validation, connection, and gentleness. These
              user insights became the true foundation of Omaia's direction;
              from tone and visuals to features and flow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Omaia

