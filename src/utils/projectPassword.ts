const PROJECT_ACCESS_STORAGE_KEY = 'zarabani-project-access'
const FALLBACK_PROJECT_PASSWORD = 'zara2026'

export const projectPassword =
  import.meta.env.VITE_PROJECTS_PASSWORD || FALLBACK_PROJECT_PASSWORD

export const hasProjectAccess = () =>
  typeof window !== 'undefined' &&
  window.sessionStorage.getItem(PROJECT_ACCESS_STORAGE_KEY) === 'granted'

export const grantProjectAccess = () => {
  window.sessionStorage.setItem(PROJECT_ACCESS_STORAGE_KEY, 'granted')
}

