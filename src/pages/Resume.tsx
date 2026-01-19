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
    "email": "zahra.ghorbanikhorabadi@mail.bcu.ac.uk",
    "telephone": "+44 7876636625",
    "url": "https://zarabani.design",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "zahra.ghorbanikhorabadi@mail.bcu.ac.uk",
        "contactType": "Personal"
      },
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
          
          /* Main container - ATS friendly dimensions */
          .resume-container {
            max-width: 8.5in !important;
            margin: 0 auto !important;
            padding: 0.5in 0.75in !important;
            background: white !important;
            color: #000 !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
          }
          
          /* Hide all icons and SVG graphics for ATS */
          .contact-item-icon,
          .header-icon,
          .contact-item-icon svg,
          .header-icon svg {
            display: none !important;
            visibility: hidden !important;
          }
          
          /* Show text labels when printing */
          .print-label {
            display: inline !important;
            font-weight: 600 !important;
            margin-right: 0.25rem !important;
            color: #000 !important;
          }
          
          /* Force all text to be black for optimal OCR/ATS parsing */
          h1, h2, h3, h4, h5, h6,
          .resume-name,
          .resume-title,
          .job-title,
          .company,
          .section-title,
          .summary,
          .description,
          .contact-item-text,
          .contact-item-link,
          .achievements-list li,
          .skill-item,
          p, span, div, a, li {
            color: #000 !important;
          }
          
          .date {
            color: #333 !important;
          }
          
          /* Remove all decorative elements */
          .resume-header::before {
            display: none !important;
            content: none !important;
          }
          
          /* Simplify borders - use simple black lines */
          .resume-header {
            border-bottom: 1px solid #000 !important;
            background: transparent !important;
            box-shadow: none !important;
          }
          
          .section-title {
            border-bottom: 1px solid #000 !important;
            color: #000 !important;
            background: transparent !important;
          }
          
          /* Simplify contact info box */
          .contact-info {
            background: transparent !important;
            border: 1px solid #ccc !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
            padding: 0.5rem !important;
          }
          
          /* Ensure links are visible and underlined */
          .contact-item-link,
          a {
            color: #000 !important;
            text-decoration: underline !important;
          }
          
          /* Simplify skill items for ATS */
          .skill-item {
            background: transparent !important;
            border: 1px solid #ccc !important;
            color: #000 !important;
            box-shadow: none !important;
          }
          
          /* Simplify header badge */
          .header-badge {
            background: transparent !important;
            border: 1px solid #ccc !important;
            color: #000 !important;
            box-shadow: none !important;
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
          grid-template-columns: 1.5fr 1fr;
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
          color: #1a1a1a;
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
          background: rgba(178, 75, 1, 0.08);
          border: 1px solid rgba(178, 75, 1, 0.15);
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
          padding: 0.5rem;
          background: rgba(236, 219, 204, 0.3);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(178, 75, 1, 0.1);
          min-width: 280px;
          max-width: 380px;
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
          gap: 0.5rem;
          font-size: 0.8125rem;
          line-height: 1.3;
        }

        .contact-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: rgba(178, 75, 1, 0.1);
          border-radius: 5px;
          flex-shrink: 0;
        }

        .contact-item-icon svg {
          width: 14px;
          height: 14px;
          fill: var(--color-primary);
          display: block;
        }

        .header-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin-right: 0.25rem;
          flex-shrink: 0;
        }

        .header-icon svg {
          width: 14px;
          height: 14px;
          fill: var(--color-primary);
          display: block;
        }

        @media print {
          .contact-item-icon svg,
          .header-icon svg {
            display: none !important;
          }
        }

        .print-label {
          display: none;
        }

        .contact-item-text {
          color: #2d3748;
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
          color: #8a3a01;
          text-decoration: underline;
        }

        @media print {
          .contact-item-link {
            color: var(--color-primary-dark);
            text-decoration: underline;
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
      <header className="resume-header" itemScope itemType="https://schema.org/Person">
        <div className="header-content">
          <div className="header-main">
            <h1 className="resume-name" itemProp="name">Zara Bani</h1>
            <h2 className="resume-title" itemProp="jobTitle">Product Designer</h2>
            <div className="header-badge">
              <span className="header-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </span>
              <span className="print-label">Location:</span>
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">London</span>, <span itemProp="addressCountry">UK</span>
              </span>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="print-label">Email:</span>
              <a href="mailto:zahra.ghorbanikhorabadi@mail.bcu.ac.uk" className="contact-item-link" itemProp="email" aria-label="Email: zahra.ghorbanikhorabadi@mail.bcu.ac.uk">
                zahra.ghorbanikhorabadi@mail.bcu.ac.uk
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="print-label">Email:</span>
              <a href="mailto:me@zarabani.design" className="contact-item-link" itemProp="email" aria-label="Email: me@zarabani.design">
                me@zarabani.design
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span className="print-label">Phone:</span>
              <span className="contact-item-text" itemProp="telephone" aria-label="Phone: +44 7876636625">+44 7876636625</span>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.34.16-2h4.68c.09.66.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
                </svg>
              </div>
              <span className="print-label">Website:</span>
              <a href="https://zarabani.design" target="_blank" rel="noopener noreferrer" className="contact-item-link" itemProp="url" aria-label="Website: zarabani.design">
                zarabani.design
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <span className="print-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/zara-bani-95a0991a8/" target="_blank" rel="noopener noreferrer" className="contact-item-link" itemProp="sameAs" aria-label="LinkedIn Profile">
                LinkedIn Profile
              </a>
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
            <li>Balanced speed and quality in 0→1 environments with limited resources and evolving requirements</li>
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
      <section className="section section-page-break" aria-label="Skills and Expertise">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid" itemScope itemType="https://schema.org/ItemList" role="list">
          <div className="skill-item" itemProp="itemListElement">Product Design</div>
          <div className="skill-item" itemProp="itemListElement">User Experience Design (UX)</div>
          <div className="skill-item" itemProp="itemListElement">User Interface Design (UI)</div>
          <div className="skill-item" itemProp="itemListElement">Interaction Design</div>
          <div className="skill-item" itemProp="itemListElement">User Research</div>
          <div className="skill-item" itemProp="itemListElement">Usability Testing</div>
          <div className="skill-item" itemProp="itemListElement">User Journeys</div>
          <div className="skill-item" itemProp="itemListElement">Information Architecture</div>
          <div className="skill-item" itemProp="itemListElement">Wireframing</div>
          <div className="skill-item" itemProp="itemListElement">Prototyping</div>
          <div className="skill-item" itemProp="itemListElement">Design Systems</div>
          <div className="skill-item" itemProp="itemListElement">Accessibility (WCAG)</div>
          <div className="skill-item" itemProp="itemListElement">High-Fidelity UI Design</div>
          <div className="skill-item" itemProp="itemListElement">Figma</div>
          <div className="skill-item" itemProp="itemListElement">Responsive Design</div>
          <div className="skill-item" itemProp="itemListElement">UI Components</div>
          <div className="skill-item" itemProp="itemListElement">Design Handoff</div>
          <div className="skill-item" itemProp="itemListElement">Component Libraries</div>
          <div className="skill-item" itemProp="itemListElement">Qualitative Research</div>
          <div className="skill-item" itemProp="itemListElement">Quantitative Research</div>
          <div className="skill-item" itemProp="itemListElement">User Interviews</div>
          <div className="skill-item" itemProp="itemListElement">Competitive Analysis</div>
          <div className="skill-item" itemProp="itemListElement">Heuristic Evaluation</div>
          <div className="skill-item" itemProp="itemListElement">Cross-functional Collaboration</div>
          <div className="skill-item" itemProp="itemListElement">HTML</div>
          <div className="skill-item" itemProp="itemListElement">CSS</div>
          <div className="skill-item" itemProp="itemListElement">Agile Methodology</div>
          <div className="skill-item" itemProp="itemListElement">Stakeholder Communication</div>
          <div className="skill-item" itemProp="itemListElement">Design Iteration</div>
          <div className="skill-item" itemProp="itemListElement">SaaS Design</div>
          <div className="skill-item" itemProp="itemListElement">B2B Design</div>
          <div className="skill-item" itemProp="itemListElement">B2C Design</div>
        </div>
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
