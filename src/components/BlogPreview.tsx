import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllBlogPosts, type BlogPostComponent } from '../pages/blog/posts'
import Icon from './Icon'

const BlogPreview = () => {
  const [posts, setPosts] = useState<BlogPostComponent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = () => {
      try {
        const allPosts = getAllBlogPosts()
        // Show only the 3 most recent posts
        setPosts(allPosts.slice(0, 3))
      } catch (error) {
        console.error('Failed to load blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (loading || posts.length === 0) {
    return null
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-warm/20 py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 h-96 w-96 blob bg-primary/10"></div>
      <div className="absolute bottom-40 left-0 h-80 w-80 blob bg-primary/10"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-2.5 backdrop-blur-sm">
            <Icon name="edit_note" size={2} />
            <span className="text-sm font-bold uppercase tracking-widest text-gradient">
              Articles
            </span>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-4">
                Latest <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-lg text-primary-dark/80 max-w-2xl">
                Thoughts on UX design, product strategy, and the design process
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden lg:flex items-center gap-2 rounded-xl border border-primary/30 bg-white/80 px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
            >
              View all articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {posts.map((post, index) => (
            <Link
              key={post.metadata.slug}
              to={`/blog/${post.metadata.slug}`}
              className="block group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="relative glass overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                {/* Decorative gradient blob */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary opacity-10 blur-3xl transition-opacity group-hover:opacity-20"></div>

                {/* Featured Image */}
                {post.metadata.featuredImage ? (
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 z-10"></div>
                    <img
                      src={post.metadata.featuredImage}
                      alt={post.metadata.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent z-10"></div>
                  </div>
                ) : (
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.metadata.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-lg border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {post.metadata.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-primary-dark/70 mb-4 leading-relaxed line-clamp-3 text-sm flex-1">
                    {post.metadata.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden border border-primary/20">
                        <img 
                          src="/zara-logo.png" 
                          alt="Zara Bani Logo" 
                          className="h-4 w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-primary-dark">Zara Bani</span>
                        <span className="text-xs text-primary-dark/60">{formatDate(post.metadata.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-primary-dark/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.metadata.readTime} min</span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Read article</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet CTA */}
        <div className="text-center lg:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-white/80 px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5"
          >
            View all articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

