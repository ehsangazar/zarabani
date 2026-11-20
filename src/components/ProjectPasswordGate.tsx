import { type FormEvent, type ReactNode, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './case-study-shared.css'
import {
  grantProjectAccess,
  hasProjectAccess,
  projectPassword,
} from '../utils/projectPassword'
import { caseStudySummaries } from '../utils/caseStudySummaries'

interface ProjectPasswordGateProps {
  children: ReactNode
}

const ProjectPasswordGate = ({ children }: ProjectPasswordGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(hasProjectAccess)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { id } = useParams<{ id: string }>()
  const summary = id ? caseStudySummaries[id] : undefined

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password.trim() === projectPassword) {
      grantProjectAccess()
      setIsUnlocked(true)
      setPassword('')
      setError('')
      return
    }

    setError('That password does not look right. Please try again.')
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <section className={`cs-gate${summary ? ' cs-gate--with-summary' : ''}`}>
      {summary && (
        // No heading element here: the gate's h1 stays the page's first heading.
        <aside className="cs-summary" aria-label={`${summary.title}, at a glance`}>
          <p className="cs-summary__eyebrow">At a glance</p>
          <p className="cs-summary__title">{summary.title}</p>
          <dl>
            {summary.role && <div><dt>Role</dt><dd>{summary.role}</dd></div>}
            {summary.company && <div><dt>Company</dt><dd>{summary.company}</dd></div>}
            {summary.when && <div><dt>When</dt><dd>{summary.when}</dd></div>}
            <div><dt>Problem</dt><dd>{summary.problem}</dd></div>
            <div><dt>Outcome</dt><dd>{summary.outcome}</dd></div>
          </dl>
        </aside>
      )}
      <div className="cs-gate__panel">
          <p className="cs-gate__eyebrow">Protected project</p>
          <h1>Enter the password<br />to continue</h1>
          <p className="cs-gate__intro">This case study is private. Enter the access password to view it.</p>

          <form onSubmit={handleSubmit} className="cs-gate__form">
            <label htmlFor="project-password">Password</label>
            <input
              id="project-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError('')
              }}
              autoComplete="current-password"
              autoFocus
            />
            {error && <p className="cs-gate__error" role="alert">{error}</p>}

            <button type="submit">View case study <span aria-hidden="true">↗</span></button>
          </form>

          <Link to="/projects" className="cs-gate__back">← Back to case studies</Link>
      </div>
    </section>
  )
}

export default ProjectPasswordGate
