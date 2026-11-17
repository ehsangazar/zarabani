// Post-build step for GitHub Pages.
//
// GitHub Pages only serves files that exist. Without one per route, every deep
// link (/about, /projects/x, /blog/y) fell through to 404.html: the SPA still
// rendered, but with HTTP 404 and the home page's meta, so Google and LinkedIn
// previews saw nothing useful. This writes a copy of the built index.html for
// every known route with that route's own title, description, canonical, Open
// Graph and Twitter tags, plus sitemap.xml and robots.txt. 404.html stays as
// the fallback for unknown paths.
//
// Route data comes from src/utils/routeMeta.ts, loaded through Vite so the
// TypeScript and JSX sources are the single source of truth.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, extname, join } from 'path'
import { fileURLToPath } from 'url'
import { createServer } from 'vite'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(rootDir, 'dist')

// LinkedIn and most crawlers ignore SVG preview images.
const RASTER_IMAGE = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif'])

const escapeAttr = value =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, pattern, tag) {
  if (!pattern.test(html)) throw new Error(`index.html is missing a tag matching ${pattern}`)
  return html.replace(pattern, tag)
}

function renderHead(template, meta, site) {
  const url = `${site.SITE_URL}${meta.path === '/' ? '/' : meta.path}`
  const imagePath = meta.image && RASTER_IMAGE.has(extname(meta.image).toLowerCase()) && existsSync(join(distDir, meta.image))
    ? meta.image
    : null
  const image = imagePath ? `${site.SITE_URL}${imagePath}` : site.DEFAULT_OG_IMAGE
  const title = escapeAttr(site.formatTitle(meta.title))
  const ogTitle = escapeAttr(meta.title)
  const description = escapeAttr(meta.description)

  let html = template
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`)
  html = setTag(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${meta.type ?? 'website'}" />`)
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${ogTitle}" />`)
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`)
  html = setTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`)
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${ogTitle}" />`)
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`)
  html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`)
  return html
}

function write(file, contents) {
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, contents)
}

const vite = await createServer({
  root: rootDir,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, ws: false },
})

try {
  const site = await vite.ssrLoadModule('/src/utils/siteMeta.ts')
  const { getAllRouteMeta } = await vite.ssrLoadModule('/src/utils/routeMeta.ts')
  const routes = await getAllRouteMeta()
  const template = readFileSync(join(distDir, 'index.html'), 'utf8')

  const paths = new Set()
  for (const meta of routes) {
    if (paths.has(meta.path)) throw new Error(`Duplicate route ${meta.path}`)
    paths.add(meta.path)
    const html = renderHead(template, meta, site)
    if (meta.path === '/') {
      write(join(distDir, 'index.html'), html)
      continue
    }
    const route = meta.path.replace(/^\//, '')
    // /about.html answers /about directly; /about/index.html answers /about/.
    // Pages serves both without a redirect hop, whichever form a link uses.
    write(join(distDir, `${route}.html`), html)
    write(join(distDir, route, 'index.html'), html)
  }

  // Unknown paths: the SPA shell with the default meta, kept out of the index.
  const notFound = template
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace('<meta name="viewport"', '<meta name="robots" content="noindex" />\n    <meta name="viewport"')
  write(join(distDir, '404.html'), notFound)

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...paths].map(path => `  <url><loc>${site.SITE_URL}${path}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n')
  write(join(distDir, 'sitemap.xml'), sitemap)
  write(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.SITE_URL}/sitemap.xml\n`)

  console.log(`✓ Prerendered ${paths.size} routes, 404.html, sitemap.xml and robots.txt`)
} catch (error) {
  console.error('Error prerendering routes:', error)
  process.exitCode = 1
} finally {
  await vite.close()
}
