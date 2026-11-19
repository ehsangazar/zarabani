import './pathfinder-reflection.css'

export default function PathfinderReflection() {
  return <section className="pf-reflection-close" id="reflection" aria-labelledby="pf-reflection-title">
    <header>
      <p className="pf-reflection-close__eyebrow">Reflection</p>
      <h2 id="pf-reflection-title">Own the problem, and follow it beyond launch</h2>
      <p>What began as a small UI improvement became a broader redesign of how people followed complex relationships. Shortly after joining Altrata, I had the opportunity to challenge the initial approach, influence product direction and work with engineering to turn that direction into a working experience.</p>
    </header>
    <div className="pf-reflection-close__lessons">
      <div><h3>What I’m proud of</h3><p>Looking beyond the request for more space and information to identify the underlying problem. I took ownership from investigation through implementation and stayed involved as we evaluated the experience after launch.</p></div>
      <div><h3>What I’d do differently</h3><p><strong>Establish the measurement plan earlier.</strong> We knew what success should look like, but lacked a behavioural baseline. Contextual questions provided valuable early signals; a baseline would have helped us quantify the impact more confidently.</p></div>
    </div>
    <div className="pf-reflection-close__takeaway">
      <p className="pf-reflection-close__eyebrow">My biggest takeaway</p>
      <p>Good product design means identifying the right problem, making informed trade-offs and staying accountable for the experience after it ships.</p>
    </div>
  </section>
}
