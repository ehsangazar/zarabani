import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import assets from './library-assets.json'
import './library-case-study.css'

type Asset = keyof typeof assets
const base = '/case-studies/document-management/redesign/'

function Screen({ name, caption, eager = false }: { name: Asset; caption: string; eager?: boolean }) {
  return <figure className="library-screen">
    <a href={`${base}${name}.webp`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${caption}`}>
      <img src={`${base}${name}.webp`} alt={caption} width={assets[name].width} height={assets[name].height} loading={eager ? 'eager' : 'lazy'} />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>
}

function Copy({ text }: { text: string }) {
  return <div className="library-copy"><ReactMarkdown>{text}</ReactMarkdown></div>
}

const DocumentManagement = () => <article className="library-study">
  <section aria-labelledby="library-context">
    <p className="library-eyebrow" id="library-context">Context</p>
    <Copy text={CONTEXT} />
    <div className="library-impact">
      <div><strong>~35%</strong><span>Reduction in librarian task completion time</span></div>
      <div><strong>128</strong><span>Institutional libraries using the platform</span></div>
      <div><strong>Desk → shelf</strong><span>Mobile book entry with ISBN scanning</span></div>
    </div>
    <dl className="library-meta">
      <div><dt>My role</dt><dd>Product Designer, leading design end-to-end: research, information architecture, interaction design, the component system and handoff.</dd></div>
      <div><dt>Company</dt><dd>Tarsim Inc — a digital product agency; this was the agency’s own B2B product.</dd></div>
    </dl>
    <Screen name="management-of-books-main" caption="The redesigned catalogue brings book records, search, filters and everyday actions into one workspace." eager />
  </section>
  <section>
    <p className="library-eyebrow">01 · The problem</p>
    <Copy text={PROBLEM} />
    <details className="library-gallery library-gallery--showcase">
      <summary>
        <span className="library-gallery__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>
        </span>
        <span className="library-gallery__copy">
          <strong>Before: explore the existing interface</strong>
          <span>See 3 examples of the fragmented forms and workflows librarians used before the redesign.</span>
        </span>
        <span className="library-gallery__action" aria-hidden="true">
          <span className="library-gallery__closed-label">View screens</span>
          <span className="library-gallery__open-label">Hide screens</span>
          <svg viewBox="0 0 20 20"><path d="m6 8 4 4 4-4"/></svg>
        </span>
      </summary>
      <div className="library-before-grid">
        <Screen name="legacy-historical-records" caption="Before: historical document records spread across separate tabs." />
        <Screen name="legacy-persian-records" caption="Before: Persian document metadata in long, fragmented forms." />
        <Screen name="legacy-book-entry" caption="Before: the existing book-entry form." />
      </div>
    </details>
  </section>
  <section>
    <p className="library-eyebrow">02 · Research</p>
    <Copy text={RESEARCH} />
  </section>
  <section>
    <p className="library-eyebrow">03 · Users</p>
    <h2>Two roles with different jobs</h2>
    <div className="library-roles">
      <div><h3>Librarians</h3><h4>Their job</h4><p>Create and update records, manage metadata, track locations and keep inventory accurate.</p><h4>What they need</h4><p>Faster entry, efficient record management and related information in one place.</p></div>
      <div><h3>Administrators</h3><h4>Their job</h4><p>Manage organisational data, monitor operations and keep collections consistent.</p><h4>What they need</h4><p>Visibility across the system, reliable tools and workflows that scale.</p></div>
    </div>
  </section>
  <section>
    <p className="library-eyebrow">04 · Key decisions</p>
    <Copy text={DECISION1} />
    <Screen name="management-of-books-main-2" caption="Connected catalogue views keep record details beside the collection." />
    <Copy text={DECISION2} />
    <Screen name="store-dashboard---audiobook" caption="Grouped metadata and a persistent book summary support record editing." />
    <Copy text={DECISION3} />
    <div className="library-mobile-grid">
      <Screen name="iphone-16-pro---39" caption="Scan an ISBN at the shelf." />
      <Screen name="iphone-16-pro---40" caption="Review the scan result." />
      <Screen name="iphone-16-pro---31" caption="Manage the selected book records." />
    </div>
    <Copy text={DECISION4} />
    <Copy text={DECISION5} />
    <Screen name="advanced-search" caption="Shared form and filter patterns in the advanced search workflow." />
  </section>
  <section>
    <p className="library-eyebrow">05 · Impact</p>
    <h2>Less admin. More library work.</h2>
    <p>The redesign reduced librarian task completion time by approximately 35% across a platform serving 128 institutional libraries. Mobile ISBN scanning moved book entry from the desk to the shelf.</p>
    <p>For librarians, this meant less time on admin and more time on library work. For the business, a scalable foundation for future growth. For the product team, a shared component system that made future features faster to build.</p>
    <details className="library-gallery library-gallery--showcase">
      <summary>
        <span className="library-gallery__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </span>
        <span className="library-gallery__copy">
          <strong>Explore the final desktop experience</strong>
          <span>Browse 13 screens across catalogue management, search, printing and publishing.</span>
        </span>
        <span className="library-gallery__action" aria-hidden="true">
          <span className="library-gallery__closed-label">View screens</span>
          <span className="library-gallery__open-label">Hide screens</span>
          <svg viewBox="0 0 20 20"><path d="m6 8 4 4 4-4"/></svg>
        </span>
      </summary>
      {desktopScreens.map(([name, caption]) => <Screen key={name} name={name} caption={caption} />)}
    </details>
    <details className="library-gallery library-gallery--showcase">
      <summary>
        <span className="library-gallery__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></svg>
        </span>
        <span className="library-gallery__copy">
          <strong>Explore the mobile companion</strong>
          <span>See 6 screens designed for scanning and managing records at the shelf.</span>
        </span>
        <span className="library-gallery__action" aria-hidden="true">
          <span className="library-gallery__closed-label">View screens</span>
          <span className="library-gallery__open-label">Hide screens</span>
          <svg viewBox="0 0 20 20"><path d="m6 8 4 4 4-4"/></svg>
        </span>
      </summary>
      <div className="library-mobile-grid">{mobileScreens.map(([name, caption]) => <Screen key={name} name={name} caption={caption} />)}</div>
    </details>
  </section>
  <section>
    <p className="library-eyebrow">06 · Reflection</p>
    <h2>Going on-site changed the project</h2>
    <p>The most valuable fix, ISBN scanning, came from watching people work, not from analysing the interface. Understanding how librarians moved between shelves and their desks changed what the product needed to do.</p>
  </section>
  <Link className="library-back" to="/projects">← Back to all projects</Link>
</article>

export default DocumentManagement

const CONTEXT = "A cloud-based library management platform used by 128 institutional libraries to manage catalogues, book records, inventory and physical locations. The platform had grown feature by feature over years of operational requests. It held everything librarians needed, but finding, entering and updating that information took far more effort than it should have."

const PROBLEM = "## A system organised around its database, not its users\n\nThe platform's structure mirrored how data was stored in the backend. Every book, author, location and inventory record lived in its own place, so a single everyday task, like adding a new book and shelving it, meant moving through several disconnected screens.\n\nThis created:\n\n- Complex navigation that users had learned to work around rather than understood\n- Repetitive manual data entry for high-volume tasks\n- Difficulty finding and updating related information\n- One interface for everyone, even though librarians and administrators did very different jobs\n\nThe redesign had to balance two goals that pulled in opposite directions:\n\nKeep the depth professional librarians rely on, while making daily work faster and easier to understand."

const RESEARCH = "## I went into libraries to watch the work happen\n\nSurveys and task analysis showed me where time was being lost. To understand why, I spent time on-site in libraries watching librarians use the platform during their normal work.\n\nResearch methods:\n\n- On-site workflow observation in libraries\n- User surveys across librarians and administrators\n- Analysis of existing task journeys to map steps, screens and repeated actions\n\nThree insights shaped the redesign:\n\n### 1. Related information was scattered.\nLibrarians constantly moved between a book record, its author, its location and its inventory status. The information was all there, but never together.\n\n**What changed:** Navigation wasn't the real problem. The problem was that related information was split up.\n\n### 2. The bottleneck was physical, not digital.\nEntering new books meant walking between the shelves and a desk computer and typing details by hand. No amount of screen redesign would fix that.\n\n**What changed:** Part of the solution had to leave the desktop.\n\n### 3. The structure reflected the system, not the librarian.\nLibrarians think in tasks, like \"catalogue this delivery\" or \"find where this book is\", not in database tables.\n\n**What changed:** The information architecture had to be rebuilt around workflows, not data structures."

const DECISION1 = "### 1. Rebuilt the information architecture around workflows\n\nI restructured navigation around the tasks librarians actually do, and brought related information (book, author, location, inventory) into connected views, so users no longer had to jump between screens to piece a record together."

const DECISION2 = "### 2. Designed for high-volume, repetitive work\n\nThe most frequent tasks were also the most tedious ones. I simplified catalogue creation and record editing, cut repeated inputs."

const DECISION3 = "### 3. Took book entry to the shelf with mobile ISBN scanning\n\nBased directly on the on-site observation, I designed a mobile companion where librarians scan a book's ISBN barcode to create or find a record instantly, right where the book is, instead of carrying books to a desk and typing details by hand."

const DECISION4 = "### 4. Role-based experiences within one consistent platform\n\nInstead of forcing everyone through the same interface, librarians get catalogue and operational tools up front, and administrators get oversight and management tools. The underlying patterns stay shared, so the platform remains consistent."

const DECISION5 = "### 5. A component system to scale across the product\n\nI defined reusable components and patterns for tables, forms, record views and filters, so new features stayed consistent and engineering could build faster."

const desktopScreens: [Asset, string][] = [["management-of-books-main-3", "Record editing within the catalogue."], ["management-of-books-main-4", "Catalogue details and navigation."], ["management-of-books", "Choose the record type to create."], ["add", "Add a catalogue record."], ["add-copy", "Confirmation after adding a record."], ["add-copy-2", "Select related people and records."], ["delete-confirmation-message", "Confirm record deletion."], ["delete-confirmation-message-2", "Review related records before deletion."], ["print", "Configure print fields."], ["print-2", "Choose a print layout."], ["print-3", "Preview a printed book label."], ["store-dashboard---audiobook-2", "Manage audiobook metadata and files."], ["store-dashboard---publish-card", "Review the book’s publication card."]]

const mobileScreens: [Asset, string][] = [["add-magazin", "Add a magazine record on mobile."], ["frame-9845", "Preview a book label on mobile."], ["iphone-16-pro---24", "Browse the mobile catalogue."], ["iphone-16-pro---25", "Enter record details on mobile."], ["iphone-16-pro---41", "Access mobile catalogue actions."], ["iphone-16-pro---74", "Mobile navigation and record categories."]]
