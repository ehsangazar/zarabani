export interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  achievements: string[]
  content: string
  frontmatter: {
    title: string
    description: string
    category: string
    technologies: string[]
    achievements: string[]
  }
}

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: any, content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { frontmatter: {}, content }
  }

  const frontmatterStr = match[1]
  const markdownContent = match[2]

  // Simple frontmatter parser (for YAML-like format)
  const frontmatter: any = {}
  const lines = frontmatterStr.split('\n')

  lines.forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      let value = line.substring(colonIndex + 1).trim()

      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value)
        } catch {
          // If JSON parse fails, keep as string
        }
      } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      frontmatter[key] = value
    }
  })

  return { frontmatter, content: markdownContent }
}

// Auto-generated case study imports - DO NOT EDIT MANUALLY
// Run 'npm run generate-case-studies' to update

import example_projectContent from '/src/content/case-studies/example-project/index.md?raw'
import omaiaContent from '/src/content/case-studies/omaia/index.md?raw'

// Cache for processed case studies
let caseStudiesCache: CaseStudy[] | null = null

// Load all case studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (caseStudiesCache) {
    return caseStudiesCache
  }

  try {
    const caseStudies: CaseStudy[] = []
    // Process example-project case study
    try {
      const { frontmatter, content: markdownContent } = parseFrontmatter(example_projectContent)

      caseStudies.push({
        id: 'example-project',
        title: frontmatter.title || 'example-project',
        description: frontmatter.description || '',
        category: frontmatter.category || 'Project',
        technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
        achievements: Array.isArray(frontmatter.achievements) ? frontmatter.achievements : [],
        content: markdownContent,
        frontmatter
      })
    } catch (error) {
      console.warn('Failed to load example-project case study:', error)
    }

    // Process omaia case study
    try {
      const { frontmatter, content: markdownContent } = parseFrontmatter(omaiaContent)

      caseStudies.push({
        id: 'omaia',
        title: frontmatter.title || 'omaia',
        description: frontmatter.description || '',
        category: frontmatter.category || 'Project',
        technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
        achievements: Array.isArray(frontmatter.achievements) ? frontmatter.achievements : [],
        content: markdownContent,
        frontmatter
      })
    } catch (error) {
      console.warn('Failed to load omaia case study:', error)
    }

    caseStudiesCache = caseStudies
    return caseStudies
  } catch (error) {
    console.error('Failed to load case studies:', error)
    return []
  }
}

// Load a specific case study by ID
export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  try {
    const caseStudies = await getAllCaseStudies()
    return caseStudies.find(study => study.id === id) || null
  } catch (error) {
    console.error(`Failed to load case study: ${id}`, error)
    return null
  }
}