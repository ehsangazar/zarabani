import './pathfinder-context.css'

const audiences = [
  { name: 'Nonprofits', description: 'Find potential major donors and a meaningful way to approach them.', icon: 'heart' },
  { name: 'Investment banking', description: 'Identify connections to decision-makers.', icon: 'bank' },
  { name: 'Wealth management', description: 'Identify high-net-worth individuals and routes to an introduction.', icon: 'briefcase' },
]

function AudienceIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === 'heart' ? <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /><path d="m8 12 3 3 5-5" /></> : kind === 'bank' ? <><path d="m3 8 9-5 9 5H3ZM3 21h18M5 18h14M6 8v10m6-10v10m6-10v10" /></> : <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a22 22 0 0 0 18 0M10 13h4" /></>}
  </svg>
}

function RelationshipDiagram() {
  return <figure className="pf-context__diagram">
    <div className="pf-context__diagram-scroll">
      <svg viewBox="0 0 960 400" role="img" aria-labelledby="pf-route-title pf-route-description">
        <title id="pf-route-title">Introduction paths through one or two people</title>
        <desc id="pf-route-description">Both the starting point and target can be a person, organisation or list. The first-degree example has one person in the middle; the two second-degree examples each have two people. Line thickness indicates relationship strength independently of the number of people.</desc>
        <g className="pf-context__column-labels" textAnchor="middle"><text x="130" y="30">YOUR STARTING POINT</text><text x="480" y="30">PEOPLE CONNECTING YOU</text><text x="830" y="30">YOUR TARGET</text></g>
        <g fill="none" stroke="#001a3d" strokeLinejoin="round">
          <path d="M230 210H260Q280 210 280 190V120Q280 100 300 100H660Q680 100 680 120V190Q680 210 700 210H730" strokeWidth="3" />
          <path d="M230 210H730" strokeWidth="8" />
          <path d="M230 210H260Q280 210 280 230V300Q280 320 300 320H660Q680 320 680 300V230Q680 210 700 210H730" strokeWidth="1.5" />
        </g>
        <g fill="#fff" stroke="#dce2e9">
          <rect x="30" y="161" width="200" height="98" rx="10" /><rect x="730" y="161" width="200" height="98" rx="10" />
          <rect x="410" y="75" width="140" height="50" rx="8" />
          <rect x="310" y="185" width="140" height="50" rx="8" stroke="#001a3d" /><rect x="510" y="185" width="140" height="50" rx="8" stroke="#001a3d" />
          <rect x="310" y="295" width="140" height="50" rx="8" /><rect x="510" y="295" width="140" height="50" rx="8" />
        </g>
        <g textAnchor="middle" fill="#001a3d" className="pf-context__node-labels">
          <text x="130" y="192">Start from</text><text x="830" y="192">Reach</text>
          <text x="480" y="106">Person</text><text x="380" y="216">Person</text><text x="580" y="216">Person</text><text x="380" y="326">Person</text><text x="580" y="326">Person</text>
        </g>
        <g textAnchor="middle" fill="#626a78" className="pf-context__node-notes">
          <text x="130" y="217">You, an organisation</text><text x="130" y="237">or a list</text>
          <text x="830" y="217">A person, organisation</text><text x="830" y="237">or a list</text>
          <text x="480" y="61">1st degree · one person in between</text>
          <text x="480" y="171">2nd degree · two people in between</text>
          <text x="480" y="281">2nd degree · two people in between</text>
          <text x="480" y="380">Thicker line · stronger relationship</text>
        </g>
      </svg>
    </div>
    <figcaption>Paths can connect through one person or through two people. Line thickness shows strength, not the number of people in a path.</figcaption>
  </figure>
}

export default function PathfinderContext() {
  return <section className="pf-context" aria-labelledby="pf-context-title">
    <header>
      <p className="pf-context__eyebrow">Product context</p>
      <h2 id="pf-context-title">Protecting customer retention through migration</h2>
      <p className="pf-context__intro">Altrata is a data and relationship intelligence platform used across nonprofit fundraising, wealth management and investment banking.</p>
    </header>
    <aside className="pf-context__business">
      <div className="pf-context__business-goal">
        <p className="pf-context__eyebrow">Business priority</p>
        <h3>Protect customer retention during migration</h3>
        <p className="pf-context__business-approach">Retention was a key business KPI that quarter. Around 800 customers had already migrated, with more expected to follow.</p>
      </div>
      <svg className="pf-context__business-arrow" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M1 12h36M29 4l8 8-8 8" /></svg>
      <div className="pf-context__business-response">
        <p className="pf-context__eyebrow">Product opportunity</p>
        <h3>Identify friction in the workflows customers rely on</h3>
        <p>I mapped the core jobs each customer segment relied on to identify where product improvements could support the retention goal: minimising disruption and addressing friction that could put the migration experience at risk.</p>
      </div>
    </aside>
    <div className="pf-context__audiences">
      {audiences.map(audience => <div key={audience.name}>
        <AudienceIcon kind={audience.icon} />
        <h3>{audience.name}</h3>
        <p>{audience.description}</p>
      </div>)}
    </div>
    <section className="pf-context__jobs" aria-labelledby="pf-customer-jobs">
      <div className="pf-context__merge" aria-hidden="true"><svg viewBox="0 0 1000 64" preserveAspectRatio="none"><path d="M167 0V24Q167 32 175 32H825Q833 32 833 24V0M500 0V64" /></svg></div>
      <h3 id="pf-customer-jobs">Two core customer jobs shared across these groups</h3>
      <div className="pf-context__job-grid">
        <div><h4>Find the right prospects</h4><p>Identify relevant people and organisations, from potential major donors to high-net-worth individuals.</p><div className="pf-context__capability"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 3v18m-6-6 6 6 6-6" /></svg><span>Advanced Search</span></div></div>
        <div><h4>Find a useful introduction</h4><p>Understand who in your network can help you reach a prospect, and which relationship paths are strongest.</p><div className="pf-context__capability"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 3v18m-6-6 6 6 6-6" /></svg><span>Pathfinder</span></div></div>
      </div>
    </section>
    <div className="pf-context__how">
      <h3>From a network to an introduction</h3>
      <p>Start from yourself, an organisation or a list, and choose a person, organisation or list as your target. Lists can be created from Advanced Search results or other lists.</p>
      <RelationshipDiagram />
    </div>
    <div className="pf-context__strength">
      <h3>What makes a connection strong?</h3>
      <div><p>Each path represents a chain of relationships. Line thickness indicates strength, informed by shared board memberships, professional experience and other relationships.</p><p>The goal is to identify meaningful connections and decide who is worth reaching out to—an introduction users can actually act on.</p></div>
    </div>

  </section>
}
