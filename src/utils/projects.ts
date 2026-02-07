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
    icon: "local_florist",
    color: "emerald",
    achievements: [
      "Case study available",
      "Demonstrates design thinking approach",
    ],
    technologies: ["Digital Product Design", "UX Strategy", "Case Study"],
    caseStudyId: 'omaia',
  },
  {
    id: 'document-management',
    title: "Redesigning Document Management, a SaaS Platform",
    description:
      "Redesigned a multi-role SaaS platform catering to librarians, document enthusiasts, and organizations, streamlining high-volume data entry and boosting workflow efficiency.",
    icon: "menu_book",
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
    icon: "account_balance",
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
    title: "Redesigning Tarsim's Website",
    description:
      "Led the redesign of the company's website to align with updated branding and visual identity, creating a cohesive digital presence that reflects core services while improving usability and engagement.",
    icon: "public",
    color: "rose",
    achievements: [
      "25% increase in user retention",
      "More consistent brand perception",
      "Enhanced user navigation",
      "Improved clarity around service offerings",
    ],
    technologies: ["Web Design", "Branding", "Visual Identity", "Mobile-First Design", "UX Design"],
  },
  {
    id: 'food-menu-app',
    title: "Digital Food Menu App",
    description:
      "Developed an innovative digital food menu app for restaurants, fast-food joints, bars, and coffee shops, simplifying the ordering process and streamlining operations for both customers and restaurant owners.",
    icon: "restaurant",
    color: "amber",
    achievements: [
      "40% reduction in customer ordering time",
      "Eliminated paper menus reducing costs",
      "Enabled instant menu updates and price adjustments",
      "Streamlined order submission process for waitstaff",
    ],
    technologies: ["Mobile App Design", "User Research", "Iterative Testing", "Product Design", "UX/UI Design"],
  },
];

