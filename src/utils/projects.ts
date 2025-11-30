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
    title: "Document & Book Management Software Redesign",
    description:
      "Redesigned document and book management desktop software used by librarians and multiple user roles, streamlining the high-volume data input process to boost efficiency and reduce task time.",
    icon: "📖",
    color: "violet",
    achievements: [
      "35% reduction in data input time",
      "Improved interface for four distinct personas",
      "Enhanced librarian workflow efficiency",
    ],
    technologies: [
      "Desktop UX",
      "Information Architecture",
      "User Research",
      "Interface Design",
    ],
  },
  {
    id: 'library-platform',
    title: "Library Platform Redesign",
    description:
      "Redesigned a library platform used by 14 libraries, addressing key usability challenges identified through stakeholder interviews and user research.",
    icon: "🏛️",
    color: "fuchsia",
    achievements: [
      "60% improvement in user satisfaction and engagement",
      "Optimized display of detailed book information",
    ],
    technologies: [
      "User Research",
      "Stakeholder Interviews",
      "Platform Redesign",
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

