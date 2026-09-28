import { Link } from 'react-router-dom'
import { getAllBlogPosts } from '../pages/blog/posts'

export default function WritingGrid({ limit }: { limit?: number }) {
  return <div className="ms-writing-grid">{getAllBlogPosts().slice(0, limit).map(({ metadata: post }) => <Link className="ms-writing-card" key={post.slug} to={`/blog/${post.slug}`}>
    {post.featuredImage && <div className="ms-writing-image"><img src={post.featuredImage} alt="" loading="lazy" /></div>}
    <div className="ms-writing-body">
      <p className="ms-writing-meta">{new Date(post.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })} · {post.readTime} min read</p>
      <h2>{post.title}</h2>
      <p className="ms-writing-excerpt">{post.excerpt}</p>
      <span className="ms-writing-cta">Read article <span aria-hidden="true">↗</span></span>
    </div>
  </Link>)}</div>
}
