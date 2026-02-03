import type { BlogPostComponent } from './TurningAssumptionsIntoValidatedSolutions'

// Blog post: When design stops asking why and starts asking, "Can AI do it?"
export const WhenDesignStopsAskingWhy: BlogPostComponent = {
  metadata: {
    slug: 'when-design-stops-asking-why',
    title: 'When AI answers "how" before design gets to ask "why"',
    excerpt: 'The question dropped into the Slack channel before the user research summary. Before the problem was clearly defined. Your product manager already generated three interface options in ChatGPT—now they\'re asking which one to build. Not whether to build. Not why. Which. And when you slow the conversation down to ask those questions, strategic thinking starts to read as bottleneck behaviour.',
    author: 'Zara Bani',
    date: '2026-01-31',
    readTime: 9,
    tags: ['AI', 'UX Design', 'Design Strategy', 'Product Design', 'Design Leadership'],
    featuredImage: '/blog/why-ai/1.webp'
  },
  content: (
    <div className="blog-content">
      <section className="mb-12">
        <p className="text-xl leading-relaxed text-primary-dark/80 mb-6">
          I've seen it happen more than once. The question drops into the Slack channel before the user research summary. Before the problem is clearly defined. Before anyone asks if users actually need this feature.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/70 mb-6">
          Your product manager has already generated three interface options in ChatGPT. Now they're asking which one to build. Not whether to build. Not why to build. <em>Which.</em>
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/70 mb-6">
          And when you slow the conversation down to ask those questions, you're about to discover that strategic thinking now reads as bottleneck behaviour.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/70 mb-6">
          This isn't an accident. We designed the system that taught teams to trust AI outputs over design judgment.
        </p>
      </section>

      {/* Optional: team chat illustration - add image to public/blog/ when-design-stops-asking-why-1.png */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Figma's 2025 AI Report surveyed 2,500 designers and developers and found that <strong>78% agree AI significantly enhances work efficiency</strong>. Only <strong>32% say they can actually rely on the output</strong>.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          That gap isn't a quality problem. It's a power shift.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          22% of designers now use AI to create first drafts of interfaces. 33% use it to generate design assets. The time from concept to visible prototype collapsed from days to minutes.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But something shifted that nobody warned you about: "Can AI do this?" started showing up at the beginning of product discussions. Not after user needs are validated. Not after strategic intent is clarified. It arrives first.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          And when you slow teams down to ask strategic questions, you're increasingly seen as friction rather than guidance.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We built this pattern. Now it's being used against us.
        </p>
      </section>

      <section className="mb-12" id="polish-means-correctness">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">We taught teams that polish means correctness</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          For years, UX designers optimised AI interfaces to hide uncertainty. Chatbots that sounded certain even when guessing. Loading states that implied thoughtfulness without revealing computational doubt. Systems that presented single recommendations with high visual confidence rather than surfacing alternatives with calibrated uncertainty.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We did this because research told us users trust confident systems. Smooth experiences read as competent. Hesitation feels like failure. As Erika Hall noted in her conversation with John Maeda, "the level of visual polish can lead designers and decision-makers to think that the concepts underneath are stronger than they are."
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The concepts underneath are what matter. But we wrapped them in interfaces that signalled completion rather than exploration.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Those design decisions didn't stay contained. They taught organisations how to relate to AI outputs: polish became synonymous with correctness. Generation became synonymous with judgment. "AI created this" became implicit validation rather than a signal requiring verification.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We optimised for adoption. We got replacement.
        </p>
      </section>

      <section className="mb-12" id="data-disconnect">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">The data exposes the disconnect</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Figma's survey of 2,500 designers and developers reveals the mechanic driving design's strategic erosion:
        </p>
        <ul className="space-y-3 mb-8 text-primary-dark/80 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>78% agree AI significantly enhances work efficiency</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Only 32% say they can rely on AI output</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>68% of developers report AI improves their work quality</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Only 40% of designers say the same</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The gap isn't about AI capability. It's about what organisations value. When engineers can generate functional code, they're delivering tangible output. When designers generate questions about whether this serves users, they're delivering… friction.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Julie Zhuo observed: "AI is redefining how we prototype. What once took days can now be done in hours, allowing designers to iterate and test more rapidly." True. But iteration without interrogation isn't strategic design—it's production at scale.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Herbert Simon's research on bounded rationality explains why this matters: under time pressure and cognitive constraints, people accept solutions that appear "good enough" rather than optimal. AI doesn't create this behaviour—it accelerates it by making "good enough" arrive so quickly that deeper evaluation feels wasteful.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          When creation is cheap, teams learn to mistake speed for strategy.
        </p>
      </section>

      <section className="mb-12" id="decision-order-flipped">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">What actually changed: decision order flipped</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Product teams used to follow a sequence: understand user problems → clarify strategic intent → explore solutions → generate artefacts. This ordering wasn't arbitrary—it created space for judgment.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          AI disrupted that sequence not by replacing designers but by making execution nearly instantaneous. When something can be generated in seconds, the act of creation no longer signals commitment. It signals possibility.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But teams don't always treat it that way.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Once a generated interface exists—even provisionally—it reshapes the conversation. The artefact becomes gravitational. Feedback clusters around it. Critique becomes incremental. The deeper question (why this at all) arrives late, if it arrives at all.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          John Maeda's 2024 Design in Tech Report distinguishes between "makers" (designers and developers who create) and "talkers" (product managers who drive revenue). AI made it easier for makers to make. But it made it better for talkers to talk—because AI outputs give them tangible artefacts to discuss without waiting for design judgment.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          When stakeholders see "working" prototypes in first meetings, the implicit question becomes: What do we need designers for?
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The answer used to be: Strategic thinking. User advocacy. The discipline to ask why before how.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But when generation speed becomes the primary value signal, those skills read as obstruction.
        </p>
      </section>

      <section className="mb-12" id="confidence-problem">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">The confidence problem we created</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Most AI design tools are optimised for decisiveness. They generate singular recommendations with confident presentation. This makes sense from a UX perspective—confidence reads as competence, smoothness reads as quality. As design best practices emphasise, AI interfaces should "set honest expectations" and "show confidence."
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But between honest expectations and confident presentation, most products chose confidence.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This creates cascading problems. When AI presents one interface design with high visual polish, teams treat it as the answer rather than an exploration. Alternative approaches aren't surfaced. Edge cases aren't flagged. Uncertainty is smoothed over.
        </p>
        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-2">The research:</h3>
          <p className="text-primary-dark/80">
            Research on automation bias has demonstrated this dynamic for decades: people are significantly more likely to accept system output even when it conflicts with their own judgment, particularly when that output is presented confidently. Human-centred AI research has long advocated that systems should "support human judgment rather than replace it"—surfacing uncertainty, presenting multiple options, enabling override. But velocity pressures push teams toward tools that minimise friction, not maximise judgment.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We designed the experience that trained organisations to trust confident outputs over strategic questioning.
        </p>
      </section>

      <section className="mb-12" id="what-stopped-getting-asked">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">What stopped getting asked</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As generation becomes easier, certain questions surface less often in product discussions:
        </p>
        <ul className="space-y-4 mb-8 text-primary-dark/80 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>Why this approach instead of alternatives?</strong> When AI produces one polished solution quickly, exploring other directions feels wasteful. The existence of a "working" prototype creates psychological commitment before strategic evaluation happens.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>What assumptions are embedded in this output?</strong> AI training data encodes countless decisions about what "good design" looks like, what user problems matter, what solutions are appropriate. These assumptions remain invisible unless teams actively interrogate them.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>Who does this work well for—and who does it exclude?</strong> Rapid generation optimises for median cases in training data. Edge cases, accessibility considerations, users who don't match demographic norms get systematically overlooked.</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As Mike Monteiro and Erika Hall have argued for years, design's ethical responsibility is interrogating these questions before building. But when "Can AI do this?" shows up first, those questions get framed as barriers to velocity rather than essential judgment.
        </p>
      </section>

      <section className="mb-12" id="strategic-ground">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">The strategic ground designers are losing</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          1 in 3 Figma users shipped an AI-powered product in 2025—a 50% increase from 2024. Only 9% cited revenue growth as the primary goal. Instead, 35% said "experiment with AI" and 41% said "enhance customer experience"—goals that struggle to define measurable success.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Translation: teams are building because they can, not because they've clarified what problem requires solving.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Nielsen Norman Group's State of UX in 2026 names the existential tension directly: "Available roles will increasingly demand breadth and judgment, not just artefacts… The practitioners who thrive will be adaptable generalists who treat UX as strategic problem solving, rather than focusing on producing deliverables."
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But when artefacts arrive instantly via AI, organisations don't value judgment that questions whether those artefacts should exist. They value judgment that makes those artefacts ship faster.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Jared Spool notes: "AI gives us an unprecedented ability to anticipate user needs. The challenge is balancing automation with human empathy in design." The challenge isn't technical. It's organisational. When teams measure progress in shipped features rather than solved problems, empathy reads as slowdown.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          68% of developers say AI improves work quality. Only 40% of designers agree. The gap reveals who's winning the value argument. Engineers deliver code. Designers deliver questions. In velocity-obsessed cultures, questions don't ship.
        </p>
      </section>

      <section className="mb-12" id="successful-teams">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">What separates successful teams from everyone else</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Figma's data on successful versus unsuccessful AI product teams reveals the pattern: 60% of successful teams explored multiple design or technical approaches, compared to only 39% of unsuccessful ones.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The differentiator wasn't AI capability. It was judgment discipline.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Successful teams don't slow down generation. They slow down after generation.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          They treat AI output as a starting point requiring validation, not a conclusion requiring execution. They assume speed increases the risk of unexamined assumptions, not decreases it.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This aligns with principles Erika Hall has advocated for years: "80% of your job should be talking to people… The concepts underneath are the most important part." But talking takes time. In cultures optimised for generation speed, time feels expensive.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Brad Frost's work on design systems emphasises that sustainable systems require "human relationships" and collaborative judgment, not just component libraries. But when AI can generate components in seconds, the relationship part gets skipped.
        </p>
      </section>

      <section className="mb-12" id="design-complicity">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">The uncomfortable truth about design's complicity</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Here's what makes this particularly painful: UX designers built this problem.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We spent years optimising AI interfaces for confident presentation over calibrated uncertainty. We designed chatbots to sound certain even when guessing. We created loading states that implied thoughtfulness without revealing doubt. We built systems that hid alternatives behind single recommendations.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We did this because users wanted smooth experiences. Because confident systems get adopted. Because our job was removing friction.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Those design decisions didn't stay contained. They taught organisations that AI outputs deserve trust by default. That polish equals correctness. That questioning generated work slows teams down.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We optimised for smooth experiences. We didn't see what we were hiding underneath.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As John Maeda's 2025 Design in Tech Report notes: "Computational thinking is invaluable… Work transformation is coming FAST." We focused on making tools smooth. We didn't prepare for how smooth tools would reshape what organisations value about designers.
        </p>
      </section>

      <section className="mb-12" id="what-happens-next">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">What happens next</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The real risk isn't that AI will design for us. AI already designs with us, and that collaboration produces real value when guided by strategic judgment.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The risk is that organisations will stop rewarding the judgment part.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          When "AI can do this faster" becomes sufficient reason to build something, design stops being about solving meaningful problems and becomes about demonstrating AI capability. User needs become secondary to technical possibility. Strategic clarity becomes friction to be eliminated.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Teams cite "experiment with AI" and "enhance customer experience" as goals rather than measurable outcomes. They're building because they can, iterating because it's fast, shipping because velocity signals progress—all without the designers who used to ask whether any of this serves anyone beyond the team's desire to ship AI features.
        </p>
      </section>

      <section className="mb-12" id="choice-that-hasnt-disappeared">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">The choice that hasn't disappeared yet</h2>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Design has always been about judgment. Not just making things usable or attractive, but deciding what deserves to exist in the first place.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          AI changes how quickly we arrive at form. It doesn't change the need for intent.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          When creation is cheap, judgment becomes the most valuable part of the process. When generation is instant, the ability to say "this solves the wrong problem" becomes rare enough to be strategically important. When teams can build anything, knowing what not to build becomes the differentiator.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Nielsen Norman Group is clear: "Adaptability, strategy, and discernment are the skills that will serve us best in the future… If you're just slapping together components from a design system, you're already replaceable by AI. What isn't easy to automate? Curated taste, research-informed contextual understanding, critical thinking, and careful judgment."
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The question isn't whether designers can prompt AI tools.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The question is whether organisations will still value designers who slow down to ask why—even when AI has already answered how.
        </p>
      </section>

      <section className="mt-16 bg-gradient-to-br from-primary to-primary-dark text-white p-10 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Let's discuss this</h2>
        <p className="text-xl mb-8 text-white/90">
          I'd love to hear your thoughts on AI, design judgment, and strategic influence
        </p>
        <a
          href="https://www.figma.com/reports/ai-2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm mb-4 hover:bg-white/30 transition-colors"
        >
          Figma AI Report 2025
        </a>
        <span className="block mb-4">·</span>
        <a
          href="https://www.linkedin.com/in/zara-bani-95a0991a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm/40 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Connect on LinkedIn
        </a>
      </section>
    </div>
  )
}
