import { type ComponentType } from 'react'
import Omaia from '../pages/projects/case-studies/Omaia'
import FocusedLearning from '../pages/projects/case-studies/FocusedLearning'

export interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  achievements: string[]
  component: ComponentType
  pdfPath?: string
}

// Cache for processed case studies
let caseStudiesCache: CaseStudy[] | null = null

// Load all case studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (caseStudiesCache) {
    return caseStudiesCache
  }

  try {
    const caseStudies: CaseStudy[] = [
      {
        id: 'focused-learning',
        title: 'A learning hub that made course materials easier to find, follow, and finish',
        description: 'A learning hub that made course materials easier to find, follow, and finish. A case study in applying psychological principles to redesign an educational platform for 10,000+ students.',
        category: 'UX Design Case Study',
        technologies: ['UX Research', 'Cognitive Design', 'Information Architecture', 'User Experience Design', 'Observational Research', 'Usability Testing'],
        achievements: [
          'Consolidated scattered lesson materials into a single structured lesson page, eliminating task switching between multiple platforms',
          'Reduced interaction cost by unifying video, audio, PDF, and text content in one cohesive learning experience',
          'Designed for cognitive cohesion using psychological principles to match students\' mental models',
          'Improved platform adoption rate by replacing fragmented content access with a structured learning flow',
          'Conducted iterative usability testing and observational research to validate reduction in cognitive load'
        ],
        component: FocusedLearning,
        pdfPath: '/cases/focused-learning/case-study.pdf'
      },
      {
        id: 'omaia',
        title: 'Habit-Forming and Emotionally Engaging Design to Support and Retain Postpartum Mothers',
        description: 'Omaia is a human-centred UX product, showcasing an end-to-end design process to support postpartum mothers through emotionally engaging and user-driven solutions.',
        category: 'UX Design Case Study',
        technologies: ['UX Research', 'User Surveys', 'Wireframing', 'Prototyping', 'Usability Testing', 'Behavioral Design'],
        achievements: [
          'Comprehensive UX design process from research to MVP',
          'Emotional validation through design thinking',
          'User-centered approach validated through testing',
          'Real-world impact on postpartum mental health support'
        ],
        component: Omaia,
        pdfPath: '/cases/omaia/case-study.pdf'
      },
    ]

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