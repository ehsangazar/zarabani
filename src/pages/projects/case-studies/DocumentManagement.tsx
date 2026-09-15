import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const content = `
## Overview

A redesign of a cloud-based Library Management System used by 128 institutional libraries to manage large-scale catalogues, book records, inventory information and daily operational workflows.

The platform supported multiple user roles, including librarians and library administrators, who relied on it to create, maintain and retrieve structured information about books, authors, publication details, and physical locations.

The challenge was to simplify complex data-entry and management workflows while preserving the depth of information required by professional library operations.

---

## My Role

Product Designer responsible for:

- User research and workflow analysis
- Information architecture redesign
- Dashboard and interaction design
- Data-heavy workflow optimisation
- Component and pattern definition
- Usability improvements across multiple user roles

---

## The Challenge

### Designing for complex information management at scale

The existing platform had grown around operational requirements, resulting in:

- Complex navigation structures
- High cognitive load during catalogue management
- Repetitive data-entry tasks
- Difficulty locating and updating information efficiently
- Different workflow needs across user roles

The redesign needed to balance two competing goals:

**Maintain the depth required by professional librarians while making daily workflows faster and easier to understand.**

---

## Understanding the Users

The platform served multiple organisational roles:

### Librarians

Responsible for:

- Creating and updating catalogue records
- Managing book metadata
- Tracking physical locations
- Maintaining inventory accuracy

Primary needs:

- Faster data entry
- Efficient record management
- Clear relationships between related information

---

### Library Administrators

Responsible for:

- Managing organisational data
- Monitoring library operations
- Maintaining consistency across collections

Primary needs:

- Visibility into system information
- Reliable management tools
- Scalable workflows

---

## Research & Discovery

I conducted qualitative research through:

- User surveys
- Workflow observation
- Analysis of existing task journeys

Key findings:

- Users spent significant time navigating between related records.
- High-volume catalogue updates required excessive manual effort.
- Existing information architecture reflected system structure rather than user mental models.

---

## Design Approach

### 1. Redesigned Information Architecture

I restructured the platform around user workflows rather than backend data structures.

Improvements included:

- Clearer navigation hierarchy
- Improved relationships between records
- Reduced unnecessary movement between screens
- Better visibility of related information

---

### 2. Simplified Data-Heavy Workflows

The redesign focused on reducing friction in high-frequency librarian tasks.

Examples:

- Faster catalogue creation
- Improved record editing flows
- More efficient information retrieval
- Reduced repetitive interactions

Result:

**Reduced librarian task completion time by approximately 35%.**

---

### 3. Role-Based Experiences

Instead of forcing all users through the same interface, I designed workflows around different responsibilities.

Examples:

- Librarians → catalogue management and operational tasks
- Administrators → system oversight and management workflows

This maintained platform consistency while improving relevance for each user group.

---

## Outcome

The redesign delivered:

- **35% reduction in librarian task completion time**
- Improved usability for high-volume catalogue workflows
- A more scalable information architecture supporting multiple libraries
- A foundation for future platform expansion
`

const DocumentManagement = () => {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-8 md:px-12">
      <article className="text-lg text-primary-dark/80 leading-relaxed">
        <ReactMarkdown
          components={{
            h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mt-12 mb-6 first:mt-0">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-primary-dark mt-8 mb-4">{children}</h3>,
            p: ({ children }) => <p className="mb-6">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-secondary">{children}</ul>,
            strong: ({ children }) => <strong className="font-bold text-primary-dark">{children}</strong>,
            hr: () => <hr className="my-12 border-secondary/20" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Selection of the designed solutions */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Selection of the designed solutions
        </h2>
      </section>

      <div className="my-16">
        <img
          src="/case-studies/document-management/1.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/2.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/3.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/4.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/5.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/6.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/7.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/8.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/9.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/10.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/11.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/12.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/13.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/14.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      <div className="my-16">
        <img
          src="/case-studies/document-management/15.png"
          alt="Selection of the designed solutions"
          className="w-full"
        />
      </div>

      {/* Key Results Section */}
      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8">
          Key Results
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">35%</div>
            <p className="text-primary-dark/80 font-medium">
              Reduction in librarian task completion time
            </p>
            <p className="mt-4 text-primary-dark/80 leading-relaxed">
              Improved high-volume catalogue and record management workflows through simplified information architecture and streamlined interactions.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl font-extrabold text-secondary mb-2">128</div>
            <p className="text-primary-dark/80 font-medium">
              Institutional libraries supported on the platform
            </p>
            <p className="mt-4 text-primary-dark/80 leading-relaxed">
              Designed a scalable experience supporting multiple organisations managing complex library records, inventory data and operational workflows.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-20 mb-12 text-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to All Projects</span>
        </Link>
      </div>
    </div>
  )
}

export default DocumentManagement
