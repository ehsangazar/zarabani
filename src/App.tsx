import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ProjectDetail from './pages/projects/ProjectDetail'
import BlogDetail from './pages/blog/BlogDetail'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Resume page without layout - for printing */}
        <Route path="/resume" element={<Resume />} />
        
        {/* All other pages with layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
