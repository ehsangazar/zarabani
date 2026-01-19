import { useEffect } from 'react';

const Resume = () => {
  // Update document meta tags for ATS
  useEffect(() => {
    document.title = 'Zara Bani - Product Designer Resume';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Zara Bani - Product & UX Designer with 4+ years of experience designing B2B and B2C SaaS products. Expert in UX research, interaction design, and usability testing.');
    }
  }, []);

  // Structured data for ATS parsing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zara Bani",
    "jobTitle": "Product Designer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "email": "me@zarabani.design",
    "telephone": "+44 7876636625",
    "url": "https://zarabani.design",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "me@zarabani.design",
        "contactType": "Professional"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/zara-bani-95a0991a8/"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Birmingham City University",
        "degree": "MSc in User Experience Design"
      },
      {
        "@type": "EducationalOrganization",
        "name": "University of Qom",
        "degree": "BA in English Language and Literature"
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Product Designer",
      "occupationLocation": {
        "@type": "City",
        "name": "London"
      }
    },
    "knowsAbout": [
      "Product Design",
      "User Experience Design",
      "UX Research",
      "Interaction Design",
      "Usability Testing",
      "User Interface Design",
      "Figma",
      "Design Systems",
      "Accessibility",
      "Wireframing",
      "Prototyping"
    ]
  };

  return (
    <div className="resume-container" lang="en" itemScope itemType="https://schema.org/Resume">
      {/* Structured Data for ATS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Print Styles - Optimized for ATS Compatibility */}
      <style>{`
        /* Print-specific page setup */
        @page {
          size: letter;
          margin: 0.5in 0.75in;
        }
        
        @media print {
          /* Reset body styles */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          
          /* Hide non-essential elements */
          .no-print {
            display: none !important;
          }
          
          /* Main container - ATS friendly dimensions with website colors */
          .resume-container {
            max-width: 8.5in !important;
            margin: 0 auto !important;
            padding: 0.5in 0.75in !important;
            background: white !important;
            color: #223830 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
          }
          
          /* Labels with website colors */
          .contact-label {
            color: #B24B01 !important;
            font-weight: 600 !important;
          }
          
          /* Headings and main text with website colors */
          .resume-name,
          h1, h2, h3, h4, h5, h6 {
            color: #223830 !important;
          }
          
          .resume-title {
            color: #B24B01 !important;
          }
          
          .job-title {
            color: #223830 !important;
          }
          
          .company {
            color: #487B79 !important;
          }
          
          .section-title {
            color: #223830 !important;
            border-bottom: 2px solid #B24B01 !important;
          }
          
          .summary,
          .description,
          .contact-item-text,
          .achievements-list li,
          .skills-list,
          .skills-list span,
          p, li {
            color: #223830 !important;
          }
          
          .date {
            color: #487B79 !important;
          }
          
          /* Links with website colors */
          .contact-item-link,
          a {
            color: #B24B01 !important;
            text-decoration: underline !important;
          }
          
          /* Remove all decorative elements */
          .resume-header::before {
            display: none !important;
            content: none !important;
          }
          
          /* Borders with website colors */
          .resume-header {
            background: transparent !important;
            box-shadow: none !important;
            border-bottom: none !important;
          }
          
          /* Header badge with website colors */
          .header-badge {
            background: rgba(236, 219, 204, 0.3) !important;
            border: 1px solid rgba(178, 75, 1, 0.2) !important;
            color: #223830 !important;
            box-shadow: none !important;
          }
          
          .header-badge .contact-label {
            color: #B24B01 !important;
          }
          
          /* Contact info box with website colors */
          .contact-info {
            background: rgba(236, 219, 204, 0.2) !important;
            border: 1px solid rgba(178, 75, 1, 0.15) !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
            padding: 0.5rem !important;
          }
          
          /* Achievement list markers with website colors */
          .achievements-list li::marker {
            color: #B24B01 !important;
          }
          
          /* Remove all visual effects */
          * {
            box-shadow: none !important;
            text-shadow: none !important;
            background-image: none !important;
            filter: none !important;
            opacity: 1 !important;
          }
          
          /* Ensure proper page breaks */
          .experience-item {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          
          .section-page-break {
            page-break-before: always !important;
            break-before: page !important;
          }
          
          /* Remove gradients */
          .resume-header::before,
          .resume-header::after {
            display: none !important;
            content: none !important;
          }
          
          /* Ensure standard fonts for ATS parsing */
          * {
            font-family: Arial, Helvetica, sans-serif !important;
          }
          
          /* Ensure proper spacing for readability */
          .section {
            margin-bottom: 1.5rem !important;
          }
          
          .experience-item {
            margin-bottom: 1.5rem !important;
          }
          
          /* Make sure all text is selectable */
          * {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
          }
          
          /* Keep links simple - URLs are in href attribute for ATS */
          a {
            text-decoration: underline !important;
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
          color: var(--color-primary-dark);
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
          padding: 1.5rem 0;
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
          grid-template-columns: 1fr 1.2fr;
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
          font-size: 2.75rem;
          font-weight: 700;
          margin: 0;
          color: var(--color-primary-dark);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .resume-title {
          font-size: 1.375rem;
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
          background: rgba(178, 75, 1, 0.1);
          border: 1px solid rgba(178, 75, 1, 0.2);
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-primary);
          margin-top: 0.375rem;
          width: fit-content;
          letter-spacing: 0.02em;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.75rem;
          background: rgba(236, 219, 204, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(178, 75, 1, 0.15);
          box-shadow: 0 2px 8px rgba(178, 75, 1, 0.08);
        }

        @media print {
          .contact-info {
            background: transparent !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
          }
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          line-height: 1.3;
        }

        .contact-label {
          font-weight: 600;
          color: var(--color-primary);
          margin-right: 0.25rem;
          flex-shrink: 0;
          min-width: fit-content;
        }

        .header-badge .contact-label {
          font-weight: 600;
          color: var(--color-primary);
          margin-right: 0.25rem;
        }

        .contact-item-text {
          color: var(--color-primary-dark);
          font-weight: 400;
        }

        .contact-item-link {
          color: var(--color-primary);
          text-decoration: underline;
          font-weight: 500;
          transition: color 0.2s;
          word-break: break-word;
        }

        .contact-item-link:hover {
          color: var(--color-accent);
          text-decoration: underline;
        }

        @media print {
          .contact-item-link {
            color: #000 !important;
            text-decoration: underline !important;
          }
          
          .contact-item-text {
            color: #000 !important;
          }
        }

        .section {
          margin-bottom: 2.5rem;
        }

        .section-page-break {
          page-break-before: always;
          break-before: page;
        }

        .section-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          margin: 0 0 1rem 0;
          padding-bottom: 0.375rem;
          border-bottom: 2px solid var(--color-primary);
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
          color: var(--color-primary-dark);
          margin: 0;
          letter-spacing: -0.005em;
          line-height: 1.4;
        }

        .company {
          font-size: 0.875rem;
          color: var(--color-accent);
          font-weight: 500;
          margin: 0.25rem 0 0 0;
          line-height: 1.4;
        }

        .date {
          font-size: 0.8125rem;
          color: var(--color-accent);
          font-weight: 400;
          white-space: nowrap;
          line-height: 1.4;
        }

        .description {
          margin: 0.625rem 0;
          color: var(--color-primary-dark);
          opacity: 0.85;
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
          color: var(--color-primary-dark);
          opacity: 0.9;
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

        .skills-list {
          color: var(--color-primary-dark);
          font-size: 0.875rem;
          line-height: 1.8;
          margin: 0;
          padding: 0;
          text-align: left;
        }

        .skills-list span {
          display: inline;
        }

        @media print {
          .skills-list {
            color: #000 !important;
            font-size: 0.875rem !important;
            line-height: 1.8 !important;
          }
        }

        .summary {
          color: var(--color-primary-dark);
          opacity: 0.9;
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
      <header className="resume-header" itemScope itemType="https://schema.org/Person">
        <div className="header-content">
          <div className="header-main">
            <h1 className="resume-name" itemProp="name">Zara Bani</h1>
            <h2 className="resume-title" itemProp="jobTitle">Product Designer</h2>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:me@zarabani.design" className="contact-item-link" itemProp="email" aria-label="Email: me@zarabani.design">
                me@zarabani.design
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-item-text" itemProp="telephone" aria-label="Phone: +44 7876636625">+44 7876636625</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Portfolio:</span>
              <a href="https://zarabani.design" target="_blank" rel="noopener noreferrer" className="contact-item-link" itemProp="url" aria-label="Portfolio: zarabani.design">
                zarabani.design
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/zara-bani-95a0991a8/" target="_blank" rel="noopener noreferrer" className="contact-item-link" itemProp="sameAs" aria-label="LinkedIn Profile">
                https://www.linkedin.com/in/zara-bani-95a0991a8
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-item-text" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">London</span>, <span itemProp="addressCountry">UK</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="section" aria-label="Professional Summary">
        <h2 className="section-title">Professional Summary</h2>
        <p className="summary" itemProp="description">
          Product Designer and UX Designer with 4+ years of experience designing B2B and B2C SaaS products across web and mobile platforms. End-to-end designer with strong expertise in User Experience Research, Interaction Design, Usability Testing, and User Interface Design, delivering 10+ real-world products from discovery to handoff. Experienced in designing data-heavy platforms, multi-role systems, and scalable SaaS solutions, where clarity, accessibility, and usability are critical. Known for translating user pain points into practical, business-aligned design decisions through research-driven thinking and close collaboration with Product Managers and Engineers. Proficient in Figma, Design Systems, Wireframing, Prototyping, and Accessibility standards (WCAG).
        </p>
      </section>

      {/* Experience */}
      <section className="section" aria-label="Professional Experience">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-item" itemScope itemType="https://schema.org/OrganizationRole">
          <div className="experience-header">
            <div>
              <h3 className="job-title" itemProp="roleName">Product Designer (Freelance)</h3>
              <p className="company" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">Self-Employed</span> | <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">London</span>, <span itemProp="addressCountry">UK</span></span>
              </p>
            </div>
            <span className="date">
              <time itemProp="startDate" dateTime="2024-09">September 2024</time> — <time itemProp="endDate" dateTime="2025-01">Present</time>
            </span>
          </div>
          <ul className="achievements-list">
            <li>Delivered UX/UI solutions for early-stage startups, supporting user flows, interface design, and usability improvements</li>
            <li>Collaborated closely with founders and developers to translate product requirements into feasible, user-centred designs</li>
            <li>Improved usability and clarity of core flows (onboarding, content discovery, dashboards), supporting faster MVP validation and feature release</li>
            <li>Balanced speed and quality in early-stage product environments with limited resources and evolving requirements</li>
            <li>Selected products: tarazedu.com · persiajs.dev · noghtevorood.com · digitwinlab.tech · betterboard.ca · clubcp.app · commandly.dev</li>
          </ul>
        </div>

        <div className="experience-item" itemScope itemType="https://schema.org/OrganizationRole">
          <div className="experience-header">
            <div>
              <h3 className="job-title" itemProp="roleName">Product Designer (UI UX Designer)</h3>
              <p className="company" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">TarsimInc</span>
              </p>
            </div>
            <span className="date">
              <time itemProp="startDate" dateTime="2022-05">May 2022</time> — <time itemProp="endDate" dateTime="2024-09">September 2024</time>
            </span>
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

        <div className="experience-item" itemScope itemType="https://schema.org/OrganizationRole">
          <div className="experience-header">
            <div>
              <h3 className="job-title" itemProp="roleName">UI UX Designer</h3>
              <p className="company" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">NetNap</span>
              </p>
            </div>
            <span className="date">
              <time itemProp="startDate" dateTime="2021-12">December 2021</time> — <time itemProp="endDate" dateTime="2022-04">April 2022</time>
            </span>
          </div>
          <ul className="achievements-list">
            <li>Designed end-to-end user journeys for a web-based product, from requirements to high-fidelity UI</li>
            <li>Conducted competitive analysis and usability reviews to identify gaps and improve user experience</li>
            <li>Collaborated with developers to deliver consistent, user-centred interfaces under tight timelines</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section" aria-label="Skills and Expertise">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-list" itemScope itemType="https://schema.org/ItemList">
          <span itemProp="itemListElement">Product Design</span>, <span itemProp="itemListElement">User Experience Design (UX)</span>, <span itemProp="itemListElement">User Interface Design (UI)</span>, <span itemProp="itemListElement">Interaction Design</span>, <span itemProp="itemListElement">User Research</span>, <span itemProp="itemListElement">Usability Testing</span>, <span itemProp="itemListElement">User Journeys</span>, <span itemProp="itemListElement">Information Architecture</span>, <span itemProp="itemListElement">Wireframing</span>, <span itemProp="itemListElement">Prototyping</span>, <span itemProp="itemListElement">Design Systems</span>, <span itemProp="itemListElement">Accessibility (WCAG)</span>, <span itemProp="itemListElement">High-Fidelity UI Design</span>, <span itemProp="itemListElement">Figma</span>, <span itemProp="itemListElement">Responsive Design</span>, <span itemProp="itemListElement">UI Components</span>, <span itemProp="itemListElement">Design Handoff</span>, <span itemProp="itemListElement">Component Libraries</span>, <span itemProp="itemListElement">Qualitative Research</span>, <span itemProp="itemListElement">Quantitative Research</span>, <span itemProp="itemListElement">User Interviews</span>, <span itemProp="itemListElement">Competitive Analysis</span>, <span itemProp="itemListElement">Heuristic Evaluation</span>, <span itemProp="itemListElement">Cross-functional Collaboration</span>, <span itemProp="itemListElement">HTML</span>, <span itemProp="itemListElement">CSS</span>, <span itemProp="itemListElement">Agile Methodology</span>, <span itemProp="itemListElement">Stakeholder Communication</span>, <span itemProp="itemListElement">Design Iteration</span>, <span itemProp="itemListElement">SaaS Design</span>, <span itemProp="itemListElement">B2B Design</span>, <span itemProp="itemListElement">B2C Design</span>
        </p>
      </section>

      {/* Education */}
      <section className="section" aria-label="Education">
        <h2 className="section-title">Education</h2>
        
        <div className="experience-item" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
          <div className="experience-header">
            <div>
              <h3 className="job-title" itemProp="credentialCategory">MSc in User Experience Design</h3>
              <p className="company" itemProp="recognizedBy" itemScope itemType="https://schema.org/EducationalOrganization">
                <span itemProp="name">Birmingham City University</span> | <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Birmingham</span>, <span itemProp="addressCountry">UK</span></span>
              </p>
            </div>
            <span className="date">
              <time itemProp="startDate" dateTime="2025-01">January 2025</time> — <time itemProp="endDate" dateTime="2026-01">January 2026</time>
            </span>
          </div>
          <p className="description" itemProp="description">
            Key focus: Human Centred Design, UX Research & Evaluation, HTML & CSS, Interaction Design, Advanced and Immersive Technologies, Accessibility and assistive technology, Visual Interface Design
          </p>
        </div>

        <div className="experience-item" itemScope itemType="https://schema.org/EducationalOccupationalCredential">
          <div className="experience-header">
            <div>
              <h3 className="job-title" itemProp="credentialCategory">BA in English Language and Literature</h3>
              <p className="company" itemProp="recognizedBy" itemScope itemType="https://schema.org/EducationalOrganization">
                <span itemProp="name">University of Qom</span> | <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"><span itemProp="addressLocality">Qom</span>, <span itemProp="addressCountry">Iran</span></span>
              </p>
            </div>
            <span className="date">
              <time itemProp="startDate" dateTime="2017-09">September 2017</time> — <time itemProp="endDate" dateTime="2022-07">July 2022</time>
            </span>
          </div>
          <p className="description">GPA: 17.38 out of 20</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" aria-label="Certifications">
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
      <section className="section" aria-label="Languages">
        <h2 className="section-title">Languages</h2>
        <p className="skills-list">
          English (Professional), Persian (Native), German (Intermediate), Spanish (Intermediate)
        </p>
      </section>
    </div>
  );
};

export default Resume;
