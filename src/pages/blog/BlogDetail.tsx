import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPostBySlug, getRelatedPosts, type BlogPostComponent } from './posts'
import PageMeta from '../../components/PageMeta'

type TocSection = { id: string; title: string }

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostComponent | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostComponent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<string>('')
  const [tocSections, setTocSections] = useState<TocSection[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadPost = () => {
      if (!slug) {
        setError('Post slug not found')
        setLoading(false)
        return
      }

      try {
        const postData = getBlogPostBySlug(slug)
        if (postData) {
          setPost(postData)
          const related = getRelatedPosts(slug, 3)
          setRelatedPosts(related)
        } else {
          setError('Post not found')
        }
      } catch (err) {
        console.error('Failed to load post:', err)
        setError('Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  // Reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const trackLength = documentHeight - windowHeight
      const progress = (scrollTop / trackLength) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Build table of contents from post sections (after content is in the DOM)
  useEffect(() => {
    if (!post) {
      setTocSections([])
      return
    }
    const buildToc = () => {
      const contentEl = contentRef.current
      if (!contentEl) return
      const sections = contentEl.querySelectorAll('section[id]')
      const toc: TocSection[] = Array.from(sections).map((section) => {
        const h2 = section.querySelector('h2')
        const title = h2?.textContent?.trim() || section.id.replace(/-/g, ' ')
        return { id: section.id, title }
      })
      setTocSections(toc)
    }
    // Run after React has committed the content to the DOM
    const id = requestAnimationFrame(buildToc)
    return () => cancelAnimationFrame(id)
  }, [post])

  // Intersection observer for table of contents active state
  useEffect(() => {
    if (!post || tocSections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [post, tocSections.length])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const shareOnLinkedIn = () => {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
  }

  const shareOnTwitter = () => {
    const url = window.location.href
    const text = post?.metadata.title || ''
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
  }

  const shareViaEmail = () => {
    const subject = post?.metadata.title || ''
    const body = `I thought you might find this article interesting: ${window.location.href}`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-warm/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-primary-dark/60">Loading post...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-warm/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Post Not Found</h1>
          <p className="text-primary-dark/60 mb-8">{error || 'The post you\'re looking for does not exist.'}</p>
          <Link
            to="/blog"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <PageMeta
        title={post.metadata.title}
        description={post.metadata.excerpt}
        image={post.metadata.featuredImage ?? undefined}
        path={`/blog/${post.metadata.slug}`}
        type="article"
        publishedTime={post.metadata.date}
        author={post.metadata.author}
      />
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-warm transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm/40 via-warm/20 to-neutral/20 pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-dark mb-8 leading-tight">
            {post.metadata.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-primary-dark/70 mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg shadow-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <img 
                    src="/zara-logo.png" 
                    alt="Zara Bani Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-primary-dark/60">{formatDate(post.metadata.date)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.metadata.readTime} min read</span>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-primary-dark/60">Share:</span>
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            <button
              onClick={shareOnTwitter}
              className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </button>
            <button
              onClick={shareViaEmail}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-semibold border border-primary/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Link
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-neutral/30 py-4 px-4 sm:px-6 lg:px-8 sticky top-1 z-40 backdrop-blur-lg bg-white/95">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-primary-dark/60 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <svg className="w-4 h-4 text-primary-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link
              to="/blog"
              className="text-primary-dark/60 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <svg className="w-4 h-4 text-primary-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary-dark font-semibold line-clamp-1">
              {post.metadata.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Table of Contents - Sidebar (only when post has sections with ids) */}
            {tocSections.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl border border-neutral/30 p-6 shadow-lg shadow-primary/5">
                    <h3 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tocSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                            activeSection === section.id
                              ? 'bg-primary text-white font-semibold'
                              : 'text-primary-dark/70 hover:bg-primary/10 hover:text-primary'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            )}

            {/* Blog Content */}
            <article className={tocSections.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}>
              <div className="bg-white rounded-2xl shadow-xl shadow-primary/10 border border-neutral/30 p-8 sm:p-12 lg:p-16">
                {/* Featured Image */}
                {post.metadata.featuredImage && (
                  <div className="mb-12 -mx-8 sm:-mx-12 lg:-mx-16 -mt-8 sm:-mt-12 lg:-mt-16">
                    <img
                      src={post.metadata.featuredImage}
                      alt={post.metadata.title}
                      className="w-full h-auto rounded-t-2xl"
                    />
                  </div>
                )}

                {/* Content */}
                <div ref={contentRef} className="prose prose-lg max-w-none 
                  prose-headings:text-primary-dark prose-headings:font-bold prose-headings:scroll-mt-24
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                  prose-p:text-primary-dark/80 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-primary-dark prose-strong:font-bold
                  prose-ul:text-primary-dark/80 prose-ul:my-6
                  prose-ol:text-primary-dark/80 prose-ol:my-6
                  prose-li:text-primary-dark/80 prose-li:my-2
                  prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-primary-dark/70 prose-blockquote:my-8
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-primary-dark prose-pre:text-white
                  prose-img:rounded-xl prose-img:shadow-lg">
                  {post.content}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-3xl font-bold text-primary-dark mb-8">Continue Reading</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.metadata.slug}
                        to={`/blog/${relatedPost.metadata.slug}`}
                        className="group bg-white rounded-xl shadow-lg shadow-primary/5 border border-neutral/30 overflow-hidden hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 hover:-translate-y-1"
                      >
                        {relatedPost.metadata.featuredImage && (
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-warm/20">
                            <img
                              src={relatedPost.metadata.featuredImage}
                              alt={relatedPost.metadata.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.metadata.title}
                          </h3>
                          <p className="text-primary-dark/70 text-sm mb-4 line-clamp-2">
                            {relatedPost.metadata.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-primary-dark/60">
                            <span>{formatDate(relatedPost.metadata.date)}</span>
                            <span>•</span>
                            <span>{relatedPost.metadata.readTime} min read</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
