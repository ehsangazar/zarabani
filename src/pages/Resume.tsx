const Resume = () => {
  return (
    <div className="resume-container">
      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .resume-container {
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in 0.75in;
          }
        }

        .resume-container {
          max-width: 10.5in;
          margin: 0 auto;
          padding: 0.75in 1in;
          background: white;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
          font-size: 11pt;
          line-height: 1.5;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        @media screen {
          .resume-container {
            min-height: 100vh;
            padding: 3.5rem 1in;
          }
        }

        .resume-header {
          position: relative;
          margin-bottom: 2rem;
          padding: 1.5rem 0;
          border-bottom: 2px solid var(--color-warm);
        }

        .resume-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%);
          border-radius: 2px;
        }

        .header-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .header-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .header-main {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .resume-name {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .resume-title {
          font-size: 1.125rem;
          color: var(--color-primary);
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.01em;
          line-height: 1.4;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.375rem 0.75rem;
          background: rgba(178, 75, 1, 0.08);
          border: 1px solid rgba(178, 75, 1, 0.15);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-primary);
          margin-top: 0.375rem;
          width: fit-content;
          letter-spacing: 0.02em;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(236, 219, 204, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(178, 75, 1, 0.1);
          min-width: 260px;
        }

        @media print {
          .contact-info {
            background: rgba(236, 219, 204, 0.2);
            backdrop-filter: none;
          }
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .contact-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: rgba(178, 75, 1, 0.1);
          border-radius: 5px;
          flex-shrink: 0;
          font-size: 0.875rem;
        }

        .contact-item-text {
          color: #2d3748;
          font-weight: 400;
        }

        .contact-item-link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          word-break: break-word;
        }

        .contact-item-link:hover {
          color: #8a3a01;
          text-decoration: underline;
        }

        @media print {
          .contact-item-link {
            color: var(--color-primary-dark);
          }
        }

        .section {
          margin-bottom: 2.5rem;
        }

        .section-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
          padding-bottom: 0.375rem;
          border-bottom: 1.5px solid var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.4;
        }

        .experience-item {
          margin-bottom: 2rem;
          page-break-inside: avoid;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }

        .job-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          letter-spacing: -0.005em;
          line-height: 1.4;
        }

        .company {
          font-size: 0.875rem;
          color: #4a5568;
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          line-height: 1.4;
        }

        .date {
          font-size: 0.8125rem;
          color: #718096;
          font-weight: 400;
          white-space: nowrap;
          line-height: 1.4;
        }

        .description {
          margin: 0.625rem 0;
          color: #4a5568;
          line-height: 1.6;
          font-size: 0.875rem;
        }

        .achievements-list {
          margin: 0.625rem 0 0 0;
          padding-left: 1.25rem;
          list-style-type: disc;
        }

        .achievements-list li {
          margin-bottom: 0.375rem;
          color: #4a5568;
          line-height: 1.6;
          font-size: 0.875rem;
          padding-left: 0.375rem;
          list-style-position: outside;
        }

        .achievements-list li::marker {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 1em;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem 1rem;
        }

        @media print {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 0.5rem;
          }
        }

        .skill-item {
          padding: 0.5rem 0.75rem;
          background: rgba(236, 219, 204, 0.3);
          border-radius: 4px;
          font-size: 0.8125rem;
          color: #2d3748;
          font-weight: 500;
          text-align: center;
          border: 1px solid rgba(178, 75, 1, 0.1);
          line-height: 1.4;
        }

        .summary {
          color: #4a5568;
          line-height: 1.65;
          font-size: 0.875rem;
          text-align: left;
        }

        .print-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(178, 75, 1, 0.25);
          transition: all 0.3s ease;
          font-size: 0.875rem;
          z-index: 100;
          letter-spacing: 0.05em;
          line-height: 1.4;
        }

        .print-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(178, 75, 1, 0.35);
        }

        .print-button:active {
          transform: translateY(-1px);
        }
      `}</style>

      {/* Print Button - Hidden when printing */}
      <button className="print-button no-print" onClick={() => window.print()}>
        Print / Save PDF
      </button>

      {/* Header */}
      <header className="resume-header">
        <div className="header-content">
          <div className="header-main">
            <h1 className="resume-name">Zara Bani</h1>
            <h2 className="resume-title">Product Designer</h2>
            <div className="header-badge">
              <span>📍</span>
              <span>London, UK</span>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <a href="mailto:zahra.ghorbanikhorabadi@mail.bcu.ac.uk" className="contact-item-link">
                zahra.ghorbanikhorabadi@mail.bcu.ac.uk
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <span className="contact-item-text">+44 7876636625</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">🔗</div>
              <a href="https://zarabani.design" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                zarabani.design
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">💼</div>
              <a href="https://www.linkedin.com/in/zara-bani-95a0991a8/" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                https://www.linkedin.com/in/zara-bani-95a0991a8
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="section">
        <h2 className="section-title">Professional Summary</h2>
        <p className="summary">
          Product & UX Designer with 4+ years of experience designing B2B and B2C SaaS products across web and mobile. End-to-end designer with strong expertise in UX research, interaction design, and usability testing, delivering 10+ real-world products from discovery to handoff. Experienced in designing data-heavy platforms, multi-role systems, and scalable SaaS solutions, where clarity, accessibility, and usability are critical. Known for translating user pain points into practical, business-aligned design decisions through research-driven thinking and close collaboration with product managers and engineers.
        </p>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">Product Designer (Freelance)</h3>
              <p className="company">Self-Employed | London, UK</p>
            </div>
            <span className="date">September 2024 — Present</span>
          </div>
          <ul className="achievements-list">
            <li>Delivered UX/UI solutions for early-stage startups, supporting user flows, interface design, and usability improvements</li>
            <li>Collaborated closely with founders and developers to translate product requirements into feasible, user-centred designs</li>
            <li>Improved usability and clarity of core flows (onboarding, content discovery, dashboards), supporting faster MVP validation and feature release</li>
            <li>Balanced speed and quality in 0→1 environments with limited resources and evolving requirements</li>
            <li>Selected products: tarazedu.com · persiajs.dev · noghtevorood.com · digitwinlab.tech · betterboard.ca · clubcp.app · commandly.dev</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">Product Designer (UI UX Designer)</h3>
              <p className="company">TarsimInc</p>
            </div>
            <span className="date">May 2022 — September 2024</span>
          </div>
          <ul className="achievements-list">
            <li>Led end-to-end UX/UI design across 10+ B2B and B2C SaaS products, owning research, flows, wireframes, prototyping, and usability testing</li>
            <li>Designed an online learning platform for 10,000+ users, improving content hierarchy and reducing task completion time by 35%</li>
            <li>Redesigned a SaaS document & library management system supporting 4 user roles, improving high-volume data entry efficiency</li>
            <li>Improved usability of a public-facing library platform used by 14 libraries, increasing user engagement and satisfaction by 60%</li>
            <li>Redesigned the company website in line with new brand guidelines, contributing to a 25% increase in user retention</li>
            <li>Worked closely with product managers and developers to ensure technical feasibility and scalable design solutions</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">UI UX Designer</h3>
              <p className="company">NetNap</p>
            </div>
            <span className="date">December 2021 — April 2022</span>
          </div>
          <ul className="achievements-list">
            <li>Designed end-to-end user journeys for a web-based product, from requirements to high-fidelity UI</li>
            <li>Conducted competitive analysis and usability reviews to identify gaps and improve user experience</li>
            <li>Collaborated with developers to deliver consistent, user-centred interfaces under tight timelines</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">Product Design</div>
          <div className="skill-item">User Experience (UX)</div>
          <div className="skill-item">Interaction Design</div>
          <div className="skill-item">User Research</div>
          <div className="skill-item">Usability Testing</div>
          <div className="skill-item">User Journeys</div>
          <div className="skill-item">Information Architecture</div>
          <div className="skill-item">Wireframing & Prototyping</div>
          <div className="skill-item">Design Systems</div>
          <div className="skill-item">Accessibility (WCAG)</div>
          <div className="skill-item">High-Fidelity UI</div>
          <div className="skill-item">Figma</div>
          <div className="skill-item">Responsive Design</div>
          <div className="skill-item">UI Components</div>
          <div className="skill-item">Design Handoff</div>
          <div className="skill-item">Component Libraries</div>
          <div className="skill-item">Qualitative & Quantitative Research</div>
          <div className="skill-item">Interviews</div>
          <div className="skill-item">Competitive Analysis</div>
          <div className="skill-item">Heuristic Evaluation</div>
          <div className="skill-item">Cross-functional Collaboration</div>
          <div className="skill-item">HTML & CSS</div>
          <div className="skill-item">Agile Teams</div>
          <div className="skill-item">Stakeholder Communication</div>
          <div className="skill-item">Design Iteration</div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">MSc in User Experience Design</h3>
              <p className="company">Birmingham City University | Birmingham, UK</p>
            </div>
            <span className="date">January 2025 — January 2026</span>
          </div>
          <p className="description">
            Key focus: Human Centred Design, UX Research & Evaluation, HTML & CSS, Interaction Design, Advanced and Immersive Technologies, Accessibility and assistive technology, Visual Interface Design
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">BA in English Language and Literature</h3>
              <p className="company">University of Qom | Qom, Iran</p>
            </div>
            <span className="date">September 2017 — July 2022</span>
          </div>
          <p className="description">GPA: 17.38 out of 20</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">UX UI Design</h3>
              <p className="company">Amanj Academy | Tehran, Iran</p>
            </div>
            <span className="date">October 2020</span>
          </div>
          <p className="description">
            58 Hours (Project Driven) - Project: Designing a money management application
          </p>
          <ul className="achievements-list">
            <li>Discovering and defining problems, conducting qualitative and quantitative research, user journey mapping</li>
            <li>Using Double Diamond technique and other design methodologies</li>
            <li>Wireframing, prototyping, and usability testing techniques</li>
            <li>Designing with human factor consideration, accessibility factor in digital design, competitive analysis</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3 className="job-title">UX & Web Design Master Course: Strategy, Design, Development</h3>
              <p className="company">Udemy - By Joe Natoli</p>
            </div>
            <span className="date">October 2023</span>
          </div>
          <p className="description">23 Hours</p>
          <ul className="achievements-list">
            <li>Success plan and Strategy-led UX</li>
            <li>Designing and building websites with human factor considerations</li>
            <li>Human-centred web design principles</li>
          </ul>
        </div>
      </section>

      {/* Languages */}
      <section className="section">
        <h2 className="section-title">Languages</h2>
        <div className="skills-grid">
          <div className="skill-item">English (Professional)</div>
          <div className="skill-item">Persian (Native)</div>
          <div className="skill-item">German (Intermediate)</div>
          <div className="skill-item">Spanish (Intermediate)</div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
