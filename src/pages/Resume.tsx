import { useEffect } from 'react';

const Resume = () => {
  // Update document meta tags for ATS
  useEffect(() => {
    document.title = 'Zara Bani - Product Designer Resume';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Zara Bani - Product Designer with 5+ years designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms.');
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
      "https://www.linkedin.com/in/zara-bani/"
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
      "Service Design",
      "Product Analytics",
      "AI and LLM Product Design",
      "Human-AI Interaction Design",
      "Designing for Uncertainty and Error Recovery",
      "Functional Code Prototyping",
      "Prompt and Context Engineering",
      "MCP",
      "Model Evaluation",
      "A/B Testing",
      "Prototyping"
    ]
  };

  const experience = [
    {
      title: 'Product Designer', company: 'Altrata', location: 'London, UK', start: '2026-04', period: 'Apr 2026 - Present',
      achievements: [
        'Own end-to-end design for Altrata’s unified data intelligence platform, consolidating RelSci, Wealth-X and BoardEx across 6.1M people and 3.1M organisations into one experience for high-stakes prospecting and research.',
        'Contributed to Edge, an AI assistant built on proprietary data. Researched defined-query and exploratory search behaviours to shape a direction where natural-language intent becomes a visible, editable query users can verify before acting.',
        'Turned a migration parity ticket into a platform-wide Boolean search framework, aligning product and engineering on a reusable logic model. Cut time to build actionable prospect lists by approximately 65%, with 3× fewer search cycles, 42% adoption within 45 days and 72% of Boolean searches leading to downstream action.',
        'Designed an editable query summary for verification and error recovery. Validated two opposing interaction models over three research rounds; the chosen model reached 3/3 task success and was approximately 44% faster.',
        'Introduced AI-assisted prototyping with Claude as a design team practice, reproducing the live design system and product behaviour. Halved design cycle time and cut concept iteration by 80%, enabling research on real interactions before engineering implementation.',
        'Redesigned relationship mapping around how clients reason about connection paths, raising prospecting accuracy to 67% and user confidence in results to 80%.',
        'Held account retention at 87% through migration against a forecast of higher churn, and brought support tickets back to baseline halfway through, ahead of client success projections.'
      ]
    },
    {
      title: 'Product Designer', company: 'BetterBoard', location: 'London, UK', start: '2024-09', end: '2026-04', period: 'Sep 2024 - Apr 2026',
      achievements: [
        'Owned end-to-end product design for an AI-powered practice-management platform for regulated Canadian immigration professionals, where errors carry legal consequences for clients.',
        'Contributed to a high-trust human–AI validation model: AI never acts autonomously, every flag shows its reasoning, uncertain outputs are signalled, and practitioners review and correct each suggestion with clear recovery paths. First-pass submission accuracy rose by 70%.',
        'Redesigned multi-step, data-heavy case workflows and simplified system architecture, increasing case processing throughput by 28% and cutting interaction steps and time-to-decision by 30%.'
      ]
    },
    {
      title: 'Product Designer', company: 'Tarsim Inc', location: 'In-person', start: '2022-05', end: '2024-09', period: 'May 2022 - Sep 2024',
      achievements: [
        'Led the design team across 10+ B2B, B2C and EdTech products, owning research, journey mapping, prototyping, usability testing and release.',
        'Led the redesign of a data-dense operational platform used by 128 libraries to manage structured records, inventory locations and operational documentation.',
        'Ran repeated on-site research with librarians and rebuilt the information architecture around how they actually think and work.',
        'Turned field observations into a mobile companion with ISBN barcode scanning, cutting new-book entry time by 80%.',
        'Boosted new client acquisition, grew the platform from 99 to 128 libraries and increased retention by 30%, protecting and expanding recurring revenue.',
        'Cut task completion time by 65% on an information-dense system by restructuring the dashboard and reducing interaction density.',
        'Contributed to a modular design system that reduced UI fragmentation across 10+ modules.',
        'Partnered with engineers through implementation to maintain design quality through release.'
      ]
    },
    {
      title: 'UI/UX Designer', company: 'Noyan.co', location: 'In-person', start: '2021-12', end: '2022-04', period: 'Dec 2021 - Apr 2022',
      achievements: [
        'Improved operational throughput by 20% by redesigning ERP flows around users\' existing mental models.',
        'Reduced UI inconsistencies by 85% and handoff revisions by 30% through a standardised design system.',
        'Designed the ERP mobile companion around approval and status-check tasks needed away from a workstation.'
      ]
    }
  ];

  const skills = [
    'Human–AI interaction design', 'AI/LLM product design', 'Designing for uncertainty and error recovery',
    'Functional code prototyping', 'Claude Code, Codex and Claude Design', 'Prompt and context engineering',
    'MCP', 'Model evaluation', 'HTML', 'CSS', 'JavaScript', 'Git', 'Data-dense and complex workflows',
    'Information architecture', 'Interaction and visual design', 'Design systems', 'Accessibility (WCAG)',
    'User research and usability testing', 'Product analytics', 'Figma', 'Stakeholder alignment'
  ];

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
            color: #06162e !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 11pt !important;
            line-height: 1.5 !important;
          }
          
          /* Labels with website colors */
          .contact-label {
            color: #09244c !important;
            font-weight: 600 !important;
          }
          
          /* Headings and main text with website colors */
          .resume-name,
          h1, h2, h3, h4, h5, h6 {
            color: #06162e !important;
          }
          
          .resume-title {
            color: #09244c !important;
          }
          
          .job-title {
            color: #06162e !important;
          }
          
          .company {
            color: #1b4d99 !important;
          }
          
          .section-title {
            color: #06162e !important;
            border-bottom: 2px solid #09244c !important;
          }
          
          .summary,
          .description,
          .contact-item-text,
          .achievements-list li,
          .skills-list,
          .skills-list span,
          p, li {
            color: #06162e !important;
          }
          
          .date {
            color: #1b4d99 !important;
          }
          
          /* Links with website colors */
          .contact-item-link,
          a {
            color: #09244c !important;
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
            background: rgba(245, 245, 245, 0.6) !important;
            border: 1px solid rgba(9, 36, 76, 0.2) !important;
            color: #06162e !important;
            box-shadow: none !important;
          }
          
          .header-badge .contact-label {
            color: #09244c !important;
          }
          
          /* Contact info box with website colors */
          .contact-info {
            background: rgba(245, 245, 245, 0.45) !important;
            border: 1px solid rgba(9, 36, 76, 0.15) !important;
            backdrop-filter: none !important;
            box-shadow: none !important;
            padding: 0.5rem !important;
          }
          
          /* Achievement list markers with website colors */
          .achievements-list li::marker {
            color: #09244c !important;
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
          .resume-container {
            padding: 2rem 1.5rem;
          }

          .header-content {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .resume-name {
            font-size: 2.25rem;
          }

          .experience-header {
            flex-direction: column;
            gap: 0.25rem;
          }

          .contact-item {
            align-items: flex-start;
          }

          .print-button {
            right: 1rem;
            bottom: 1rem;
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
          background: rgba(9, 36, 76, 0.1);
          border: 1px solid rgba(9, 36, 76, 0.2);
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
          background: rgba(245, 245, 245, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(9, 36, 76, 0.15);
          box-shadow: 0 2px 8px rgba(9, 36, 76, 0.08);
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
          box-shadow: 0 10px 25px rgba(9, 36, 76, 0.25);
          transition: all 0.3s ease;
          font-size: 0.875rem;
          z-index: 100;
          letter-spacing: 0.05em;
          line-height: 1.4;
        }

        .print-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(9, 36, 76, 0.35);
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
              <a href="https://www.linkedin.com/in/zara-bani/" target="_blank" rel="noopener noreferrer" className="contact-item-link" itemProp="sameAs" aria-label="LinkedIn Profile">
                linkedin.com/in/zara-bani
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
          Product Designer with 5+ years experience designing complex, data-heavy and AI-enabled products across B2B SaaS, B2C and enterprise platforms. I help teams turn ambiguous problems into scalable product experiences through research, systems thinking, and close cross-functional collaboration. Experienced owning the end-to-end design process from early discovery and strategy through to execution and shipped products.
        </p>
      </section>

      {/* Experience */}
      <section className="section" aria-label="Professional Experience">
        <h2 className="section-title">Professional Experience</h2>
        
        {experience.map(role => <div className="experience-item" itemScope itemType="https://schema.org/OrganizationRole" key={`${role.company}-${role.start}`}>
          <div className="experience-header"><div><h3 className="job-title" itemProp="roleName">{role.title}</h3><p className="company" itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">{role.company}</span> | {role.location}</p></div><span className="date"><time itemProp="startDate" dateTime={role.start}>{role.period}</time>{role.end && <meta itemProp="endDate" content={role.end} />}</span></div>
          <ul className="achievements-list">{role.achievements.map(item => <li key={item}>{item}</li>)}</ul>
        </div>)}
      </section>

      {/* Skills */}
      <section className="section skills-section" aria-label="Skills and Expertise">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-list" itemScope itemType="https://schema.org/ItemList">
          {skills.map((skill, index) => <span key={skill} itemProp="itemListElement">{skill}{index < skills.length - 1 ? ' · ' : ''}</span>)}
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
            Focus on accessibility, complex systems and research-driven design. Capstone taken forward into a live digital product.
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
        </div>
      </section>

      {/* Languages */}
      <section className="section" aria-label="Languages">
        <h2 className="section-title">Languages</h2>
        <p className="skills-list">
          Persian (Native) · English (Fluent) · German (Intermediate) · Spanish (Intermediate)
        </p>
      </section>
    </div>
  );
};

export default Resume;
