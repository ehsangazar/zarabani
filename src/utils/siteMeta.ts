/**
 * Site-wide meta and social sharing config.
 * Used for Open Graph, Twitter Cards, and document title/description.
 */

export const SITE_URL = 'https://zarabani.design'
export const SITE_NAME = 'Zara Bani'
export const SITE_TITLE = 'Zara Bani - Product & UX Designer'
export const SITE_DESCRIPTION =
  'Product and UX Designer passionate about creating thoughtful experiences that put people first. Based in London.'

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

  document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  setMetaContent('name', 'description', description)

  setMetaContent('property', 'og:title', title)
  setMetaContent('property', 'og:description', description)
  setMetaContent('property', 'og:image', imageUrl)
  setMetaContent('property', 'og:url', url)
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
