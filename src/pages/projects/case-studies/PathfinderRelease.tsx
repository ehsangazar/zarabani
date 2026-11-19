import './pathfinder-release.css'

export default function PathfinderRelease() {
  return <section className="pf-release" id="release-and-impact" aria-labelledby="pf-release-title">
    <header><p className="pf-release__eyebrow">Delivery, rollout & measurement</p><h2 id="pf-release-title">Build confidence before rolling out to everyone</h2><p>After validating the core design, I worked with Product Managers to agree the release scope, balancing user value, technical feasibility and the deadline. I stayed involved with engineering to ensure the key interactions carried through into implementation.</p></header>

    <div className="pf-release__scope"><div><p className="pf-release__eyebrow">In the release</p><h3>Protect the core redesign</h3><ul><li>Clearer strength encoding, sticky references and grouped paths</li><li>More accessible connection filters</li><li>Clearer terminology and refined export behaviour</li></ul></div><div><p className="pf-release__eyebrow">Future development</p><h3>Capture the larger requests</h3><p>We reviewed the filtering, sorting and export needs surfaced in testing. Larger requests were recorded for future development so the core improvements could reach customers within the delivery window.</p></div></div>

    <div className="pf-release__rollout"><p className="pf-release__eyebrow">Phased launch</p><h3>A controlled release of an established workflow</h3><p>A feature flag let us gather live feedback and make adjustments while limiting the risk of disruption.</p><ol>
      <li><strong>50%</strong><h4>Initial client accounts</h4><p>Enable the redesign for half of client accounts.</p></li>
      <li><strong>3–4 weeks</strong><h4>Listen and evaluate</h4><p>Review in-product responses and feedback from client-facing teams.</p></li>
      <li><strong>100%</strong><h4>Expand with confidence</h4><p>Agree with Product to enable the remaining accounts after positive feedback.</p></li>
    </ol></div>

    <div className="pf-release__measurement"><p className="pf-release__eyebrow">Measurement under constraints</p><h3>Use contextual feedback when a baseline is missing</h3><p>I wanted to measure the time from results loading to a first meaningful action. We had no baseline for the previous experience, and the deadline was too close to establish one reliably. I proposed lightweight in-product questions to understand whether users could find and interpret useful connections.</p></div>
    <figure className="pf-release__feedback">
      <div className="pf-release__feedback-cards">
        <div><span>After a meaningful action</span><h4>How easy was it to find the right person to contact?</h4><div className="pf-release__sample-options" aria-label="Illustrative response options"><span>Very difficult</span><span>Difficult</span><span>Neutral</span><span>Easy</span><span>Very easy</span></div></div>
        <div><span>After difficulty or switching views without action</span><h4>Did you find what you were looking for?</h4><div className="pf-release__sample-options" aria-label="Illustrative response options"><span>Yes</span><span>Partly</span><span>No</span></div></div>
      </div>
      <figcaption>Illustrative feedback cards based on the contextual questions; these are not captured product screens.</figcaption>
    </figure>
    <p>Targeted questions also checked understanding of connection strength and the current-overlap indicator.</p>
    <div className="pf-release__cadence"><div><strong>Non-blocking</strong><span>Small cards within the workflow</span></div><div><strong>One per visit</strong><span>Keep interruptions limited</span></div><div><strong>At most fortnightly</strong><span>Each question shown once per user where appropriate</span></div></div>

    <div className="pf-release__results"><p className="pf-release__eyebrow">Post-launch signals</p><h3>Encouraging feedback from users and client-facing teams</h3><div className="pf-release__metrics">
      <div><strong>79%</strong><h4>Finding an actionable connection felt easy</h4><p>Of respondents rated it easy or very easy.</p><span>In-product responses</span></div>
      <div><strong>82%</strong><h4>Understood the strength indicators</h4><p>Of respondents said they understood the connection-strength indicators.</p><span>In-product responses</span></div>
      <div><strong><small>Up to </small>60%</strong><h4>Reported increase in client satisfaction</h4><p>Aggregated reporting from Customer Support, Commercial and Account Management, particularly around readability and navigation.</p><span>Client-facing team reporting</span></div>
    </div><p className="pf-release__evidence">These are respondent feedback and aggregated client-team reports. Without a behavioural baseline, they do not establish a measured improvement in task completion time.</p></div>
    <aside className="pf-release__ownership"><p className="pf-release__eyebrow">Ownership beyond delivery</p><h3>Stay accountable after the design ships</h3><p>I helped shape what we released, how we evaluated it in live use, and when we had enough confidence to make the redesigned experience available to every client account.</p></aside>
  </section>
}
