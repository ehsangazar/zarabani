export interface Project {
  id: string
  title: string
  description: string
  icon: string
  color: string
  achievements: string[]
  technologies: string[]
  caseStudyId?: string // Link to case study if available
}

export const allProjects: Project[] = [
  {
    id: 'omaia',
    title: "Omaia - A Digital Garden",
    description:
      "A digital garden project showcasing thoughtful design and user experience principles.",
    icon: "🌸",
    color: "emerald",
    achievements: [
      "Case study available",
      "Demonstrates design thinking approach",
    ],
    technologies: ["Digital Product Design", "UX Strategy", "Case Study"],
    caseStudyId: 'omaia',
  },
  {
    id: 'daqqaq',
    title: "Multilingual Online Learning Platform (Daqqaq)",
    description:
      "Designed a multilingual online learning platform used by 1,000+ students, simplifying complex content delivery by supporting three distinct content types on a single screen without causing cognitive overload.",
    icon: "📚",
    color: "indigo",
    achievements: [
      "70% adoption rate within the first three months",
      "35% reduction in task completion time",
      "Students transitioned from external platforms to Daqqaq",
    ],
    technologies: [
      "UX Research",
      "User Flows",
      "Wireframes",
      "Prototypes",
      "Usability Testing",
    ],
  },
  {
    id: 'document-management',
    title: "Redesigning Document Management, a SaaS Platform",
    description:
      "Redesigned a multi-role SaaS platform catering to librarians, document enthusiasts, and organizations, streamlining high-volume data entry and boosting workflow efficiency.",
    icon: "📖",
    color: "violet",
    achievements: [
      "35% reduction in task completion time",
      "Improved interface for three distinct user roles",
      "Enhanced librarian workflow efficiency",
      "Cleaner information architecture and simplified navigation",
    ],
    technologies: [
      "Desktop UX",
      "Information Architecture",
      "User Research",
      "Interface Design",
      "Qualitative Surveys",
      "Observational Research",
    ],
  },
  {
    id: 'library-platform',
    title: "Library Platform Redesign",
    description:
      "Redesigned a digital platform serving 14 libraries, creating a more intuitive and user-friendly experience with improved content hierarchy and enhanced book information accessibility.",
    icon: "🏛️",
    color: "fuchsia",
    achievements: [
      "60% increase in user satisfaction and engagement",
      "Improved filtering and search functionality",
      "Enhanced layout making complex book data more accessible",
      "Clearer content hierarchy",
    ],
    technologies: [
      "User Research",
      "Stakeholder Interviews",
      "Platform Redesign",
      "Information Architecture",
      "Usability Testing",
    ],
  },
  {
    id: 'company-website',
    title: "Company Website Redesign",
    description:
      "Revamped the company's public website, aligning with updated branding and visual identity.",
    icon: "🌐",
    color: "rose",
    achievements: [
      "25% increase in user retention",
      "More consistent brand perception",
    ],
    technologies: ["Web Design", "Branding", "Visual Identity"],
  },
  {
    id: 'food-menu-app',
    title: "Digital Food Menu App",
    description:
      "Designed a digital food menu app for restaurants shifting from a traditional system, reducing customer ordering time and improving decision-making.",
    icon: "🍽️",
    color: "amber",
    achievements: [
      "40% reduction in customer ordering time",
      "Streamlined user flow through research and iterative testing",
    ],
    technologies: ["Mobile App Design", "User Research", "Iterative Testing"],
  },
];

