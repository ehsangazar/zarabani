import { Link } from "react-router-dom";
import './case-study-shared.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cs-footer">
      <div className="cs-footer__brand"><Link to="/">Zara Bani</Link><p>Product & UX designer · London, UK</p></div>
      <nav className="cs-footer__links" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Case Study</Link>
        <Link to="/about">About</Link>
        <a href="mailto:me@zarabani.design">Email ↗</a>
        <a href="https://www.linkedin.com/in/zara-bani-95a0991a8/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <span>© {currentYear}</span>
      </nav>
    </footer>
  );
};

export default Footer;
