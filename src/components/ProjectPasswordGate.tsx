import { type FormEvent, type ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import './case-study-shared.css'
import {
  grantProjectAccess,
  hasProjectAccess,
  projectPassword,
} from '../utils/projectPassword'

interface ProjectPasswordGateProps {
  children: ReactNode
}

const ProjectPasswordGate = ({ children }: ProjectPasswordGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(hasProjectAccess)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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
    <section className="cs-gate">
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
