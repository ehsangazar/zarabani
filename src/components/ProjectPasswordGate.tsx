import { type FormEvent, type ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
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
    <section className="relative min-h-screen overflow-hidden bg-warm/20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-3xl items-center justify-center">
        <div className="glass w-full rounded-3xl p-8 text-center shadow-xl sm:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon name="lock" size={2.25} />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Protected Project
          </p>
          <h1 className="mb-4 text-3xl font-extrabold text-primary-dark sm:text-4xl">
            Enter the password to view this project
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-primary-dark/70">
            Project details are private. Please enter the access password to continue.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md text-left">
            <label
              htmlFor="project-password"
              className="mb-2 block text-sm font-bold text-primary-dark"
            >
              Password
            </label>
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
              className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-primary-dark shadow-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
            {error && (
              <p className="mt-3 text-sm font-medium text-red-700">{error}</p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              Unlock Project
              <Icon name="arrow_forward" size={1.25} />
            </button>
          </form>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold text-primary transition hover:text-primary-dark"
          >
            <Icon name="arrow_back" size={1.1} />
            Back to projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectPasswordGate

