const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Experience
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hi 👋 I'm Zara Bani, a UX designer passionate about creating thoughtful experiences that put people first, while aligning with business goals. I've been learning and working in this field for about three years, and I'm currently pursuing my Master's in User Experience Design at Birmingham City University.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Working in this field has been a game changer; it constantly pushes me to think creatively, stay curious, and challenge assumptions. What excites me most is going beyond the surface to uncover genuine problems and design meaningful, user-centred solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Collaborating in cross-functional teams has taught me the value of clear communication, empathy, and teamwork. I enjoy learning from others, sharing ideas, and creating designs that make a real impact. Let's connect and build better experiences together!
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              User Experience Designer
            </h3>
            <p className="text-purple-600 font-semibold mb-2">At TarsimInc</p>
            <p className="text-gray-600 mb-6">May 2022 — Sep 2024</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Contributed to 6 diverse digital products, participating in user research, creating user flows, wireframes, high-fidelity prototypes, and conducting usability testing.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Worked on storytelling techniques to communicate design decisions clearly and ensure alignment with user and business needs.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Collaborated cross-functionally with developers and product managers, ensuring technical feasibility and timely delivery of user-centric solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
