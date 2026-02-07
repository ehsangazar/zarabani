import { useEffect } from 'react'
import { setPageMeta, SITE_TITLE, SITE_DESCRIPTION, DEFAULT_OG_IMAGE, getPageUrl } from '../utils/siteMeta'
import type { PageMetaInput } from '../utils/siteMeta'

export interface PageMetaProps extends PageMetaInput {
  /** Path for canonical URL (e.g. '/blog/my-post'). Uses window.location.pathname if not set. */
  path?: string
}

/**
 * Sets document title and Open Graph / Twitter Card meta for the current page.
 * Use on every page so social shares and SEO get the right title, description, and image.
 */
const PageMeta = ({
  title,
  description,
  image,
  path,
  type = 'website',
  publishedTime,
  author,
}: PageMetaProps) => {
  useEffect(() => {
    const url = path !== undefined ? getPageUrl(path) : undefined
    setPageMeta({
      title,
      description: description ?? SITE_DESCRIPTION,
      image: image ?? DEFAULT_OG_IMAGE,
      url,
      type,
      publishedTime,
      author,
    })
  }, [title, description, image, path, type, publishedTime, author])

  return null
}

export default PageMeta
