import PageMeta from '../components/PageMeta'
import WritingGrid from '../components/WritingGrid'

export default function Blog() {
  return <div className="ms-page">
    <PageMeta title="Blog" description="Thoughts on UX design, product strategy, AI and design judgment, storytelling, and the design process." path="/blog" />
    <header className="ms-intro"><p className="ms-eyebrow">Writing</p><h1>Notes on design<br />and the way we think.</h1><p>Thoughts on product strategy, storytelling, and creating experiences that make sense.</p></header>
    <WritingGrid />
  </div>
}
