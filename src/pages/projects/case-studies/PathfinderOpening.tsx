import { useEffect, useRef, useState } from 'react'
import './pathfinder-opening.css'
import PathfinderContext from './PathfinderContext'
import PathfinderDiagnosis from './PathfinderDiagnosis'
import PathfinderDirection from './PathfinderDirection'
import PathfinderDecisions from './PathfinderDecisions'
import PathfinderOverlap from './PathfinderOverlap'
import PathfinderValidation from './PathfinderValidation'
import PathfinderRelease from './PathfinderRelease'
import PathfinderReflection from './PathfinderReflection'

const details = [
  [
    ['My role', 'Product Designer · Sole designer'],
    ['Scope', 'Problem discovery, interaction design, vibe coding, usability testing and delivery'],
    ['Collaboration', 'Product Management, Engineering and client-facing teams'],
  ],
  [
    ['Company & industry', 'Altrata · Data & relationship intelligence'],
    ['Platform', 'Enterprise SaaS · Web application'],
  ],
]

export default function PathfinderOpening() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let manuallyPaused = false
    const rememberPause = () => { manuallyPaused = true }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !motion.matches && !manuallyPaused) {
        void video.play().catch(() => {})
      } else if (!entry.isIntersecting) {
        video.pause()
      }
    }, { threshold: 0.2 })
    const pauseForMotion = () => { if (motion.matches) video.pause() }
    video.addEventListener('demo-pause', rememberPause)
    motion.addEventListener('change', pauseForMotion)
    observer.observe(video)
    return () => {
      observer.disconnect()
      video.removeEventListener('demo-pause', rememberPause)
      motion.removeEventListener('change', pauseForMotion)
    }
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play().catch(() => {})
    else {
      video.dispatchEvent(new Event('demo-pause'))
      video.pause()
    }
  }

  return (
    <article className="pathfinder-opening" aria-label="Pathfinder project overview">
      <div className="pathfinder-opening__details">
        {details.map((column, index) => <dl key={index}>{column.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}</dl>)}
      </div>
      <section className="pathfinder-opening__impact" aria-labelledby="pathfinder-impact-title">
        <h2 id="pathfinder-impact-title">Impact</h2>
        <dl>
          <div><dt>Ease of finding connections</dt><dd>79%</dd></div>
          <div><dt>Customer retention<small className="pathfinder-opening__retention-note">Exceeded the 78% target · Company-wide migration outcome</small></dt><dd>80%</dd></div>
          <div><dt>Reported client satisfaction increase</dt><dd><span>Up to </span>60%</dd></div>
        </dl>
      </section>
      <figure className="pathfinder-opening__demo">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster="/case-studies/pathfinder/interaction-demo-poster.jpg"
          aria-label="Pathfinder redesign demonstration: opening strong, moderate and weak relationship details, revealing more connections and scrolling through expanded groups."
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/case-studies/pathfinder/interaction-demo.mp4?v=2" type="video/mp4" />
        </video>
        <figcaption>
          <span>The redesigned Pathfinder · From connection overview to relationship detail</span>
          <button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause Pathfinder animation' : 'Play Pathfinder animation'}>
            {playing ? 'Pause animation' : 'Play animation'}
          </button>
        </figcaption>
      </figure>
      <PathfinderContext />
      <PathfinderDiagnosis />
      <PathfinderDirection />
      <PathfinderDecisions />
      <PathfinderOverlap />
      <PathfinderValidation />
      <PathfinderRelease />
      <PathfinderReflection />
    </article>
  )
}
