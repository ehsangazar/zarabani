import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import BlogPreview from '../components/BlogPreview'
import PageMeta from '../components/PageMeta'

const Home = () => {
  return (
    <div>
      <PageMeta
        title="Zara Bani - Product & UX Designer"
        description="Product and UX Designer passionate about creating thoughtful experiences that put people first. Based in London. Explore featured work and articles."
        path="/"
      />
      <Hero />
      <Projects />
      <About />
      <BlogPreview />
    </div>
  )
}

export default Home
