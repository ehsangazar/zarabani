/**
 * Public summaries shown above the password gate on each protected case study.
 * Text only, and only facts already public on the site or approved for it: no
 * NDA detail and no images. Leave a field out rather than guess it; the box
 * only renders the rows that exist.
 */
export interface CaseStudySummary {
  title: string
  role?: string
  company?: string
  when?: string
  problem: string
  outcome: string
}

export const caseStudySummaries: Record<string, CaseStudySummary> = {
  'altrata-boolean-search': {
    title: 'Altrata: a scalable Boolean search framework',
    role: 'Product Designer, end-to-end design',
    company: 'Altrata, enterprise data intelligence (6.1M people, 3.1M organisations)',
    when: '2026',
    problem: 'A migration asked only for feature parity; users needed a faster, more precise way to build prospect lists across three merged products.',
    outcome: '65% faster list creation, 3× fewer search cycles, 42% adoption within 45 days, 72% of Boolean searches led to a saved list or export.',
  },
  'document-management': {
    title: 'Library management platform',
    role: 'Product Designer, research to delivery',
    company: 'Tarsim, B2B platform used by 128 libraries',
    when: '2022 to 2024',
    problem: 'Librarians worked with complex records at a desk, far from the shelves where the books are.',
    outcome: '80% faster book entry with a mobile ISBN scanner; client base grew 29% (99 to 128 libraries); 94% retention.',
  },
  'focused-learning': {
    title: 'A clearer, more focused learning hub',
    company: 'EdTech learning platform for 10,000+ students',
    problem: 'Lesson materials were scattered across platforms; every student landed on the lesson page, but only 30% interacted with the content.',
    outcome: '35% faster lesson completion and 87% adoption within the first three months, with one structured learning flow.',
  },
  omaia: {
    title: 'Omaia: support for postpartum mothers',
    role: 'End-to-end design: research, product scoping, ideation, wireframing, prototyping and usability testing',
    company: 'MSc User Experience Design project, Birmingham City University',
    problem: 'After childbirth, care often drops off, leaving a six-week gap in which many mothers feel isolated and unsupported.',
    outcome: 'An MVP designed from research and validated through usability testing.',
  },
  'library-platform': {
    title: 'Library platform redesign',
    role: 'Stakeholder interviews, user research and platform redesign',
    company: 'Digital platform serving 14 libraries',
    problem: 'Users struggled to locate and interpret detailed book information.',
    outcome: '60% increase in user satisfaction and engagement, with clearer content hierarchy, filtering and search.',
  },
  'company-website': {
    title: 'Redesigning Tarsim’s website',
    role: 'Led the UX design and redesign, mobile-first',
    company: 'Tarsim',
    problem: 'The website needed to match updated branding and make the company’s services easier to understand.',
    outcome: '25% increase in user retention and a more consistent brand.',
  },
  'food-menu-app': {
    title: 'Digital food menu app',
    role: 'Product Designer',
    company: 'Digital menu app for restaurants, cafés and bars',
    problem: 'Paper menus made ordering slow and menu or price updates costly.',
    outcome: '40% reduction in customer ordering time, with paper menus removed and instant menu updates.',
  },
}
