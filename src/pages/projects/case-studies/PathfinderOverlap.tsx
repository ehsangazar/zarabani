import { useState } from 'react'
import './pathfinder-overlap.css'

export default function PathfinderOverlap() {
  const [open, setOpen] = useState(false)
  return <section className="pf-overlap" id="current-overlap" aria-labelledby="pf-overlap-title">
    <header><p className="pf-overlap__eyebrow">Current overlap · An opportunity I identified</p><h2 id="pf-overlap-title">Which connections are worth acting on?</h2><p>Hundreds of possible paths did not mean hundreds of equally useful introductions. I noticed that users had to expand each relationship to find out whether two people still shared an organisation or had overlapped years ago.</p></header>

    <div className="pf-overlap__timing"><div><span>Historical overlap</span><h3>They worked together ten years ago.</h3></div><div><span>Current overlap</span><h3>They still work together today.</h3></div></div>
    <p>That distinction could change which introduction a user chose to pursue. I proposed bringing current overlaps into the main view, so users could spot them before opening every connection.</p>

    <figure className="pf-overlap__detail"><a href="/case-studies/pathfinder/current-overlap-detail.png" target="_blank" rel="noreferrer"><img src="/case-studies/pathfinder/current-overlap-detail.png" alt="Coded prototype with relationship details expanded, showing a current shared role marked Present" loading="lazy" /></a><figcaption>The expanded relationship detail shows overlap timing. The new signal makes a current overlap visible before this step.</figcaption></figure>
    <div className="pf-overlap__demo"><button type="button" aria-expanded={open} aria-controls="pf-overlap-prototype" onClick={() => setOpen(!open)}>{open ? 'Close prototype' : 'Explore the overlap prototype'}</button><p>Open the first green-ringed expand icon to inspect the current overlap and its dates.</p>
      {open && <div id="pf-overlap-prototype"><a href="/case-studies/pathfinder/prototype.html" target="_blank" rel="noreferrer">Open full-size prototype in a new tab</a><div className="pf-overlap__viewport"><iframe src="/case-studies/pathfinder/prototype.html" sandbox="allow-scripts" title="Pathfinder current-overlap prototype: expand a connection to inspect timing" /></div></div>}
    </div>

    <div className="pf-overlap__exploration"><p className="pf-overlap__eyebrow">Two treatments</p><h3>A lightweight signal in the main view</h3><p>With our Product Manager, I agreed to reuse an existing green visual convention from elsewhere in the platform. I explored two treatments that could communicate a current overlap without adding more text to the chart.</p></div>
    <div className="pf-overlap__options">
      <figure><div className="pf-overlap__option-heading"><span className="pf-overlap__dot" aria-hidden="true" /><h4>Green dot</h4></div><img src="/case-studies/pathfinder/overlap-dot-row.png" alt="Prototype relationship between Gabriel Stone and Hana Kim with a small green dot on the connection node" loading="lazy" /><figcaption>A small green dot on the connection node.</figcaption></figure>
      <figure><div className="pf-overlap__option-heading"><span className="pf-overlap__ring" aria-hidden="true" /><h4>Green ring</h4></div><img src="/case-studies/pathfinder/overlap-ring-row.png" alt="Prototype relationship between Marcus Wright and Priya Anand with a green ring around the expand icon" loading="lazy" /><figcaption>A green ring around the expand icon.</figcaption></figure>
    </div>
    <div className="pf-overlap__testing"><div><p className="pf-overlap__eyebrow">What I wanted to learn</p><h3>Would people notice it and understand it?</h3><p>Participants encountered both versions in counterbalanced order. I compared spontaneous noticing and whether the meaning was discoverable, rather than choosing on visual preference alone.</p></div><div><p className="pf-overlap__eyebrow">What emerged</p><h3>The ring was more noticeable</h3><p>Both treatments were understood. The green ring was preferred in both client sessions, and users highlighted current-overlap information as one of the most valuable signals for evaluating an introduction.</p></div></div>
    <aside className="pf-overlap__takeaway"><p className="pf-overlap__eyebrow">From readability to usefulness</p><p>The redesign helped users identify relationships worth acting on, without investigating every individual connection.</p></aside>
  </section>
}
