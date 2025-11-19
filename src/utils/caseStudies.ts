import { type ComponentType } from 'react'
import Omaia from '../pages/projects/case-studies/Omaia'

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
      }
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