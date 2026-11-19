/**
 * Site-wide meta and social sharing config.
 * Used for Open Graph, Twitter Cards, and document title/description.
 */

export const SITE_URL = 'https://zarabani.design'
export const SITE_NAME = 'Zara Bani'
export const SITE_TITLE = 'Zara Bani - Product Designer for AI-native B2B products'
export const SITE_DESCRIPTION =
  'Zara Bani is a London-based Product Designer for AI-native B2B products. She designs complex, data-heavy workflows and AI features people can trust, from research to shipped, measured results.'

/** Default image for social cards (use 1200×630 for best results). Falls back to /zara.png. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/zara.png`

export interface PageMetaInput {
  title: string
  description?: string
  image?: string | null
  url?: string
  type?: 'website' | 'article'
  /** Article publish date (ISO string) for og:article:published_time */
  publishedTime?: string
  /** Article author for og:article:author */
  author?: string
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const base = path.startsWith('/') ? SITE_URL : `${SITE_URL}/`
  return path.startsWith('/') ? `${SITE_URL}${path}` : `${base}${path}`
}

/** Document title for a page. Shared with the build-time prerender so both agree. */
export function formatTitle(title: string): string {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
}

function getOrCreateMeta(attribute: 'name' | 'property', key: string): HTMLMetaElement {
  const selector = attribute === 'name' ? `meta[name="${key}"]` : `meta[property="${key}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  return el
}

function setMetaContent(attribute: 'name' | 'property', key: string, content: string): void {
  const el = getOrCreateMeta(attribute, key)
  el.setAttribute('content', content)
}

/**
 * Update document title and Open Graph / Twitter Card meta tags for the current page.
 * Call when the route or page data changes (e.g. after loading a blog post).
 */
export function setPageMeta(input: PageMetaInput): void {
  const {
    title,
    description = SITE_DESCRIPTION,
    image = DEFAULT_OG_IMAGE,
    url = typeof window !== 'undefined' ? window.location.href : SITE_URL,
    type = 'website',
    publishedTime,
    author,
  } = input

  const imageUrl = image ? toAbsoluteUrl(image) : DEFAULT_OG_IMAGE

  document.title = formatTitle(title)

  setMetaContent('name', 'description', description)

  setMetaContent('property', 'og:title', title)
  setMetaContent('property', 'og:description', description)
  setMetaContent('property', 'og:image', imageUrl)
  setMetaContent('property', 'og:url', url)
  // Each route ships a prerendered canonical; keep it in step on client-side navigation.
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
  setMetaContent('property', 'og:type', type)
  setMetaContent('property', 'og:site_name', SITE_NAME)

  if (type === 'article' && publishedTime) {
    getOrCreateMeta('property', 'article:published_time').setAttribute('content', publishedTime)
  }
  if (type === 'article' && author) {
    getOrCreateMeta('property', 'article:author').setAttribute('content', author)
  }

  setMetaContent('name', 'twitter:card', 'summary_large_image')
  setMetaContent('name', 'twitter:title', title)
  setMetaContent('name', 'twitter:description', description)
  setMetaContent('name', 'twitter:image', imageUrl)
}

/**
 * Build canonical URL for a path (e.g. /blog/my-post).
 */
export function getPageUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${p}`
}
