import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCaseStudies, type CaseStudy } from '../utils/caseStudies'
import './more-case-studies.css'

export default function MoreCaseStudies({ currentId }: { currentId: string }) {
  const [studies, setStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    let active = true
    void getAllCaseStudies().then(items => { if (active) setStudies(items) })
    return () => { active = false }
  }, [])

  const index = studies.findIndex(study => study.id === currentId)
  const previous = index > 0 ? studies[index - 1] : undefined
  const next = index >= 0 ? studies[index + 1] : undefined
  return <nav className="more-case-studies" aria-label="Case study navigation">
    {previous ? <Link to={`/projects/${previous.id}`}>Previous case study</Link> : <button type="button" disabled>Previous case study</button>}
    {next ? <Link to={`/projects/${next.id}`}>Next case study</Link> : <button type="button" disabled>Next case study</button>}
  </nav>
}
