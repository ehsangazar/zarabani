import { useEffect, useRef, useState } from 'react'

export default function AltrataFinalScreen() {
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

  return <figure className="al-final-screen">
    <video ref={videoRef} muted loop playsInline preload="metadata" poster="/case-studies/altrata/boolean-demo-poster.jpg" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="Advanced Search demonstration: adding filters, excluding a location, editing values and removing filters">
      <source src="/case-studies/altrata/boolean-interaction-demo.mp4?v=2" type="video/mp4" />
    </video>
    <figcaption>Final design · Advanced Search in action <button type="button" onClick={togglePlayback}>{playing ? 'Pause animation' : 'Play animation'}</button></figcaption>
  </figure>
}
