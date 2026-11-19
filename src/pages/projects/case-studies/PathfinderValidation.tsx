import './pathfinder-validation.css'

export default function PathfinderValidation() {
  return <section className="pf-validation" id="usability-testing" aria-labelledby="pf-validation-title">
    <header><p className="pf-validation__eyebrow">Usability testing</p><h2 id="pf-validation-title">Testing the interactions in realistic workflows</h2><p>I built the working prototype entirely in Claude Code, then reviewed feasibility with engineering—particularly sticky elements and their behaviour with large numbers of connections. With that input, I moved into client usability testing.</p></header>

    <dl className="pf-validation__method">
      <div><dt>Sessions</dt><dd>6</dd></div><div><dt>Duration</dt><dd>~30 minutes</dd></div><div><dt>Format</dt><dd>Remote, moderated<br />Task-based, think-aloud evaluation</dd></div><div><dt>Test material</dt><dd>Coded interactive prototype</dd></div>
    </dl>
    <p>I worked with our Product Manager to arrange sessions with clients across industries, including nonprofit fundraising and investment banking, to see whether the patterns supported their different workflows.</p>

    <div className="pf-validation__focus"><p className="pf-validation__eyebrow">What we tested</p><div className="pf-validation__questions">
      <div><span>Primary focus</span><h3>Strength encoding</h3><p>Could users interpret and compare connection strength?</p></div>
      <div><span>Maintaining context</span><h3>Sticky anchoring</h3><p>Could users follow paths while keeping their reference points in view?</p></div>
      <div><span>Discoverability</span><h3>Current-overlap indicator</h3><p>Did users notice the signal and understand what it meant?</p></div>
    </div></div>

    <aside className="pf-validation__access">
      <p className="pf-validation__eyebrow">Taking ownership · Before the first session</p><h3 className="pf-validation__brand-heading"><img src="/case-studies/pathfinder/logos/claude-code.svg" alt="Claude Code" />Two hours to make the prototype accessible</h3><p>During preparation, I discovered the internally hosted prototype could not be accessed outside the organisation. My engineering partner was on leave and other engineers were not yet online. An engineer from another team suggested Vercel, and I took ownership of getting a shareable version ready.</p>
      <div className="pf-validation__routes">
        <div><span>Parallel approach</span><h4 className="pf-validation__brand-heading"><img src="/case-studies/pathfinder/logos/figma.svg" alt="" />Figma Make</h4><p>Import the HTML and prepare a public prototype link. I was unsure all interactions would be preserved in time.</p></div>
        <div><span>Used in the sessions</span><h4 className="pf-validation__brand-heading"><img src="/case-studies/pathfinder/logos/vercel.svg" alt="" />Vercel</h4><p>Deploy the existing coded prototype directly, preserving the interactions we needed to test.</p></div>
      </div>
      <div className="pf-validation__ready"><strong>Two working prototypes ready before the session.</strong><p>I used the Vercel version, protecting a difficult-to-arrange client session while managing the technical uncertainty.</p></div>
    </aside>

    <div className="pf-validation__insights"><p className="pf-validation__eyebrow">What we learned</p><h3>Clearer connections brought the next user needs into focus</h3><p>The initial feedback was encouraging and gave us confidence in the redesign. As users understood the paths more easily, they focused on what they wanted to do with them.</p>
      <div className="pf-validation__findings">
        <div><h4>Filter for useful relationships</h4><p>One client wanted to narrow results to stronger connections and recent overlaps.</p></div>
        <div><h4>Control the order of results</h4><p>Testing also surfaced a need for sorting as users worked through potential introduction paths.</p></div>
        <div><h4>Share a shortlist</h4><p>Another client needed to export selected paths for review with colleagues before deciding which introductions to pursue.</p></div>
      </div>
    </div>
    <aside className="pf-validation__next"><p className="pf-validation__eyebrow">The next decision</p><h3>What belongs in the release?</h3><p>With confidence in the core interactions and new needs emerging, I moved on to prioritising what could ship, what should wait, and how to validate the experience safely in live use.</p></aside>
  </section>
}
