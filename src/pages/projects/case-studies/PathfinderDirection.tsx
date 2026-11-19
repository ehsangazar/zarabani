import './pathfinder-direction.css'

export default function PathfinderDirection() {
  return <section className="pf-direction" id="shared-direction" aria-labelledby="pf-direction-title">
    <header><p className="pf-direction__eyebrow">Systems thinking & alignment</p><h2 id="pf-direction-title">A relationship pattern that works beyond Pathfinder</h2><p>Similar relationship views appeared in Connections and Individual Network modules on profile pages. The design needed to preserve clarity across both a full-width page and smaller modules.</p></header>
    <figure className="pf-direction__contexts">
      <div className="pf-direction__surfaces">
        {[
          { title: 'Pathfinder', description: 'Full-width relationship exploration', file: 'previous-full-width.png', alt: 'Pathfinder chart in the full-width original interface' },
          { title: 'Connections', description: 'Relationship view on a profile', file: 'profile-connections.png', alt: 'Connections module on an Altrata profile, showing introduction paths and the strength legend' },
          { title: 'Individual Network', description: 'Network exploration on a profile', file: 'profile-individual-network.png', alt: 'Individual Network module on an Altrata profile, showing a person and their connected network' },
        ].map(screen => <div key={screen.title}>
          <a className="pf-direction__screenshot" href={'/case-studies/pathfinder/' + screen.file} target="_blank" rel="noreferrer" aria-label={'View full ' + screen.title + ' screenshot'}>
            <img src={'/case-studies/pathfinder/' + screen.file} alt={screen.alt} loading="lazy" />
          </a>
          <h3>{screen.title}</h3><p>{screen.description}</p>
        </div>)}
      </div>
      <figcaption>Relationship patterns across Pathfinder and profile modules. Select a screenshot to view the full screen.</figcaption>
    </figure>
    <div className="pf-direction__shift">
      <div><p className="pf-direction__eyebrow">Original framing</p><h3>More space. More information.</h3><p>Adjust the chart dimensions and add labels, dates and explanations to each row.</p></div>
      <div><p className="pf-direction__eyebrow">The direction I proposed</p><h3>Clarity, organisation and lasting context.</h3><p>Redesign how relationships communicate strength, how paths are organised, and how people maintain context as they explore.</p></div>
    </div>
    <div className="pf-direction__alignment">
      <h3>Aligning the direction with delivery</h3>
      <p>I brought the findings to our Product Manager and challenged the original framing. We agreed to take a broader approach, working with engineering to assess technical feasibility and the implications for shared interaction patterns.</p>
    </div>
    <aside className="pf-direction__goal"><p className="pf-direction__eyebrow">Shared business goal</p><h3>Support retention through a trusted core workflow</h3><p>Help customers migrating to Altrata confidently use the relationship-finding workflow they already relied on.</p></aside>
  </section>
}
