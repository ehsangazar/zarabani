import { allProjects } from './projects'
import { getAllCaseStudies } from './caseStudies'
import { getAllBlogPosts } from '../pages/blog/posts'
import { SITE_DESCRIPTION, SITE_TITLE } from './siteMeta'

export interface RouteMeta {
  path: string
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
}

/**
 * Meta for the fixed pages. The pages read their PageMeta from here, and
 * scripts/prerender-routes.js writes one HTML file per route from the same
 * data, so a link preview and the rendered page never disagree.
 */
export const staticPageMeta = {
  home: { path: '/', title: SITE_TITLE, description: SITE_DESCRIPTION },
  about: {
    path: '/about',
    title: 'About',
    description: 'Zara Bani is a London-based Product Designer with 5+ years designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms.',
  },
  projects: {
    path: '/projects',
    title: 'Projects',
    description: 'Case studies and featured work in UX and product design. User-centred design with measurable impact.',
  },
  blog: {
    path: '/blog',
    title: 'Blog',
    description: 'Thoughts on UX design, product strategy, AI and design judgment, storytelling, and the design process.',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with Zara Bani for new opportunities and collaborations.',
  },
  designSystem: {
    path: '/design-system',
    title: 'Design system',
    description: 'The design system behind this portfolio: colour tokens with measured contrast, the type and spacing scales, core components and the accessibility rules they follow.',
  },
  resume: {
    path: '/resume',
    title: 'Zara Bani - Product Designer Resume',
    description: 'Zara Bani - Product Designer with 5+ years designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms.',
  },
} satisfies Record<string, RouteMeta>

/** Every route the router can render, for the prerender and the sitemap. */
export async function getAllRouteMeta(): Promise<RouteMeta[]> {
  const caseStudies = await getAllCaseStudies()
  const projectRoutes: RouteMeta[] = [
    ...caseStudies.map(study => ({ path: `/projects/${study.id}`, title: study.title, description: study.description })),
    ...allProjects
      .filter(project => !caseStudies.some(study => study.id === project.id))
      .map(project => ({ path: `/projects/${project.id}`, title: project.title, description: project.description })),
  ]
  const blogRoutes: RouteMeta[] = getAllBlogPosts().map(({ metadata }) => ({
    path: `/blog/${metadata.slug}`,
    title: metadata.title,
    description: metadata.excerpt,
    image: metadata.featuredImage,
    type: 'article',
  }))
  return [...Object.values(staticPageMeta), ...projectRoutes, ...blogRoutes]
}
