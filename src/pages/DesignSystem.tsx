import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectGrid from '../components/ProjectGrid'
import SpecBox from '../components/SpecBox'
import MetricRow from '../components/MetricRow'
import { staticPageMeta } from '../utils/routeMeta'
import { caseStudySummaries } from '../utils/caseStudySummaries'
import { heroMetrics } from '../utils/heroMetrics'
import { contrast, readTokens, toHex, type TokenSet } from '../utils/designTokens'
import './design-system.css'

const colourTokens = [
  { name: '--ds-text', use: 'Headings and body text' },
  { name: '--ds-text-muted', use: 'Descriptions, labels, metadata' },
  { name: '--ds-surface', use: 'Page background (warm paper)' },
  { name: '--ds-surface-raised', use: 'Cards, panels, form fields' },
  { name: '--ds-surface-sunken', use: 'Preview wells, code, quiet fills' },
  { name: '--ds-line', use: 'Hairline rules and card borders (decorative)' },
  { name: '--ds-line-strong', use: 'Form-field and control borders' },
  { name: '--ds-brand', use: 'Plum ink: links, primary actions, emphasis' },
  { name: '--ds-brand-hover', use: 'Primary action hover' },
  { name: '--ds-brand-tint', use: 'Selected and hover fills' },
  { name: '--ds-on-brand', use: 'Text on a brand fill' },
  { name: '--ds-accent', use: 'Rose: rules, markers, icons, large text only' },
  { name: '--ds-accent-text', use: 'Rose for small text (eyebrows, numbering)' },
  { name: '--ds-focus', use: 'Keyboard focus ring' },
  { name: '--ds-success', use: 'Positive status' },
  { name: '--ds-warning', use: 'Caution status' },
  { name: '--ds-danger', use: 'Errors' },
]

// AA thresholds: 4.5 for body text, 3 for large text and for non-text UI (WCAG 1.4.3 and 1.4.11).
const contrastPairs = [
  { fg: '--ds-text', bg: '--ds-surface', label: 'Text on surface', min: 4.5 },
  { fg: '--ds-text', bg: '--ds-surface-raised', label: 'Text on raised surface', min: 4.5 },
  { fg: '--ds-text-muted', bg: '--ds-surface', label: 'Muted text on surface', min: 4.5 },
  { fg: '--ds-text-muted', bg: '--ds-surface-raised', label: 'Muted text on raised surface', min: 4.5 },
  { fg: '--ds-text-muted', bg: '--ds-surface-sunken', label: 'Muted text on sunken surface', min: 4.5 },
  { fg: '--ds-text-muted', bg: '--ds-brand-tint', label: 'Muted text on brand tint', min: 4.5 },
  { fg: '--ds-brand', bg: '--ds-surface', label: 'Brand link on surface', min: 4.5 },
  { fg: '--ds-brand', bg: '--ds-brand-tint', label: 'Brand text on brand tint', min: 4.5 },
  { fg: '--ds-on-brand', bg: '--ds-brand', label: 'Primary button label', min: 4.5 },
  { fg: '--ds-accent-text', bg: '--ds-surface', label: 'Rose small text on surface', min: 4.5 },
  { fg: '--ds-accent-text', bg: '--ds-surface-raised', label: 'Rose small text on raised surface', min: 4.5 },
  { fg: '--ds-accent', bg: '--ds-surface', label: 'Rose accent: graphics and large text', min: 3 },
  { fg: '--ds-line-strong', bg: '--ds-surface', label: 'Control border on surface', min: 3 },
  { fg: '--ds-focus', bg: '--ds-surface', label: 'Focus ring on surface', min: 3 },
  { fg: '--ds-success', bg: '--ds-surface', label: 'Success text', min: 4.5 },
  { fg: '--ds-warning', bg: '--ds-surface', label: 'Warning text', min: 4.5 },
  { fg: '--ds-danger', bg: '--ds-surface', label: 'Error text', min: 4.5 },
]

const typeScale = [
  { name: '--ds-text-display', role: 'Home headline', family: 'display', sample: 'Clear, trustworthy data products' },
  { name: '--ds-text-3xl', role: 'Page headline (h1)', family: 'display', sample: 'Complex problems, clear workflows' },
  { name: '--ds-text-2xl', role: 'Section headline (h2)', family: 'display', sample: 'Selected work' },
  { name: '--ds-text-xl', role: 'Card and spec titles', family: 'display', sample: 'A scalable Boolean search framework' },
  { name: '--ds-text-lg', role: 'Lead paragraph, h3', family: 'sans', sample: 'Reasoning stays visible and editable.' },
  { name: '--ds-text-base', role: 'Body (16px on mobile)', family: 'sans', sample: 'Body copy is set in Inter at a 62-character measure with 1.55 line height.' },
  { name: '--ds-text-sm', role: 'UI, navigation, buttons', family: 'sans', sample: 'Navigation, buttons and supporting text' },
  { name: '--ds-text-xs', role: 'Labels and metadata', family: 'label', sample: 'At a glance' },
]

const spacing = ['1', '2', '3', '4', '6', '8', '12', '16', '20']

function SchemeCell({ hex }: { hex: string | null }) {
  if (!hex) return <td className="dsp-mono">n/a</td>
  return <td><span className="dsp-swatch" style={{ background: hex }} aria-hidden="true" /> <span className="dsp-mono">{hex}</span></td>
}

function Ratio({ fg, bg, min }: { fg: string | null; bg: string | null; min: number }) {
  if (!fg || !bg) return <td className="dsp-mono">n/a</td>
  const ratio = contrast(fg, bg)
  const passes = ratio >= min
  return (
    <td>
      <span className="dsp-ratio" style={{ color: fg, background: bg }} aria-hidden="true">Aa</span>{' '}
      <span className="dsp-mono">{ratio.toFixed(2)}:1</span>{' '}
      <span className={passes ? 'dsp-pass' : 'dsp-fail'}>{passes ? 'Pass' : 'Fail'}</span>
    </td>
  )
}

export default function DesignSystem() {
  // The stylesheet is in the document before React renders, so reading it once is enough.
  const [tokens] = useState<TokenSet>(readTokens)
  const light = (name: string) => toHex(tokens.light[name])
  const dark = (name: string) => toHex(tokens.dark[name])
  const summary = caseStudySummaries['altrata-boolean-search']

  return (
    <div className="ms-page dsp">
      <PageMeta {...staticPageMeta.designSystem} />
      <header className="ms-intro">
        <p className="ms-eyebrow ms-eyebrow--accent">Design system</p>
        <h1>The system behind this site</h1>
        <p>One set of semantic tokens drives every page here, in light and dark mode. Values on this page are read from the live stylesheet, and every contrast ratio is calculated from them, so the documentation cannot drift from what ships.</p>
      </header>

      <section className="dsp-section" aria-labelledby="dsp-colour">
        <div className="ms-section-heading"><div><p className="ms-eyebrow">01 / Colour</p><h2 id="dsp-colour">Colour tokens</h2></div></div>
        <p className="dsp-lead">Plum ink is the brand, rose is a small accent, and everything else is warm paper and near-black ink. Components only use semantic names; dark mode swaps the values under <code>prefers-color-scheme</code> and keeps the names.</p>
        <div className="dsp-table-wrap">
          <table className="dsp-table">
            <caption className="ms-eyebrow">Semantic colour tokens</caption>
            <thead><tr><th scope="col">Token</th><th scope="col">Light</th><th scope="col">Dark</th><th scope="col">Use</th></tr></thead>
            <tbody>
              {colourTokens.map(token => (
                <tr key={token.name}>
                  <th scope="row" className="dsp-mono">{token.name}</th>
                  <SchemeCell hex={light(token.name)} />
                  <SchemeCell hex={dark(token.name)} />
                  <td>{token.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="dsp-subhead">Contrast, measured</h3>
        <div className="dsp-table-wrap">
          <table className="dsp-table">
            <caption className="ms-eyebrow">WCAG 2.2 contrast for the pairs the components use</caption>
            <thead><tr><th scope="col">Pair</th><th scope="col">Needs</th><th scope="col">Light</th><th scope="col">Dark</th></tr></thead>
            <tbody>
              {contrastPairs.map(pair => (
                <tr key={pair.label}>
                  <th scope="row">{pair.label}<span className="dsp-pair dsp-mono">{pair.fg} on {pair.bg}</span></th>
                  <td className="dsp-mono">{pair.min}:1</td>
                  <Ratio fg={light(pair.fg)} bg={light(pair.bg)} min={pair.min} />
                  <Ratio fg={dark(pair.fg)} bg={dark(pair.bg)} min={pair.min} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="dsp-section" aria-labelledby="dsp-type">
        <div className="ms-section-heading"><div><p className="ms-eyebrow">02 / Type</p><h2 id="dsp-type">Type scale</h2></div></div>
        <p className="dsp-lead">Fraunces, an editorial serif, sets display headings at its optical size. Inter sets the interface and body. Figures in metrics, tables and dates use tabular numerals so columns line up.</p>
        <ol className="dsp-type">
          {typeScale.map(step => (
            <li key={step.name}>
              <div className="dsp-type__meta">
                <span className="dsp-mono">{step.name}</span>
                <span>{step.role}</span>
                <span className="dsp-mono">{tokens.light[step.name] ?? ''}</span>
              </div>
              <p className={`dsp-type__sample dsp-type__sample--${step.family}`} style={{ fontSize: `var(${step.name})` }}>{step.sample}</p>
            </li>
          ))}
        </ol>
        <p className="dsp-numerals"><span>Proportional 1,111 / 8,888</span><span className="dsp-numerals__tabular">Tabular 1,111 / 8,888</span></p>
      </section>

      <section className="dsp-section" aria-labelledby="dsp-space">
        <div className="ms-section-heading"><div><p className="ms-eyebrow">03 / Space</p><h2 id="dsp-space">Spacing and grid</h2></div></div>
        <p className="dsp-lead">A 4px base. Layouts sit on a 12-column grid with a 24px gutter inside a 1120px container; sections are separated by fine rules rather than boxes.</p>
        <ul className="dsp-space">
          {spacing.map(step => (
            <li key={step}>
              <span className="dsp-mono">--ds-space-{step}</span>
              <span className="dsp-space__bar" style={{ width: `var(--ds-space-${step})` }} aria-hidden="true" />
              <span className="dsp-mono">{tokens.light[`--ds-space-${step}`] ?? ''}</span>
            </li>
          ))}
        </ul>
        <div className="dsp-grid" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i}>{i + 1}</span>)}</div>
      </section>

      <section className="dsp-section" aria-labelledby="dsp-components">
        <div className="ms-section-heading"><div><p className="ms-eyebrow">04 / Components</p><h2 id="dsp-components">Components</h2></div></div>

        <h3 className="dsp-subhead">Actions</h3>
        <div className="dsp-row">
          <Link className="ms-primary-link" to="/projects">Primary action <span aria-hidden="true">↗</span></Link>
          <Link className="ms-secondary-link" to="/about">Secondary action</Link>
          <Link className="ms-text-link" to="/resume">Text link <span aria-hidden="true">→</span></Link>
        </div>
        <p className="dsp-note">One primary action per view. All actions are at least 44px tall and show a 2px focus ring offset from the edge.</p>

        <h3 className="dsp-subhead">Metric row</h3>
        <MetricRow metrics={heroMetrics} />
        <p className="dsp-note">Unboxed figures with a rose tick, tabular numerals and the label beneath. The same component runs on the home page.</p>

        <h3 className="dsp-subhead">Spec box</h3>
        {summary && (
          <div className="dsp-spec">
            <SpecBox
              eyebrow="At a glance"
              title={summary.title}
              label={`${summary.title}, at a glance (example)`}
              rows={[
                ...(summary.role ? [{ label: 'Role', value: summary.role }] : []),
                ...(summary.when ? [{ label: 'When', value: summary.when }] : []),
                { label: 'Outcome', value: summary.outcome },
              ]}
            />
          </div>
        )}
        <p className="dsp-note">Label and value rows on hairline rules, used above every protected case study.</p>

        <h3 className="dsp-subhead">Project card</h3>
        <ProjectGrid limit={1} />
        <p className="dsp-note">The whole card is one link. A plum border marks hover and focus; there are no shadows.</p>
      </section>

      <section className="dsp-section" aria-labelledby="dsp-a11y">
        <div className="ms-section-heading"><div><p className="ms-eyebrow">05 / Accessibility</p><h2 id="dsp-a11y">Accessibility rules</h2></div></div>
        <ul className="dsp-rules">
          <li><strong>Contrast.</strong> Every text pair meets WCAG AA (4.5:1) in both modes, and controls, focus rings and graphics meet 3:1. The table above is the check.</li>
          <li><strong>Rose is restricted.</strong> The brand rose #C45678 measures about 4.1:1 on paper, so it is only used for rules, markers, icons and large text. Small rose text uses the darker <code>--ds-accent-text</code>.</li>
          <li><strong>Colour is never the only signal.</strong> The current page is underlined as well as coloured; status text always carries a word.</li>
          <li><strong>Keyboard first.</strong> A skip link, visible focus on every control, Escape closes the mobile menu and returns focus, and touch targets are at least 44px.</li>
          <li><strong>Structure.</strong> One h1 per page, headings in order, real links and buttons, and landmark labels where a region has no heading.</li>
          <li><strong>Motion.</strong> With reduced motion requested, transitions and image zooms are switched off. Prototype videos never autoplay.</li>
          <li><strong>Paper surfaces.</strong> Case-study bodies and the résumé were authored on light paper, so they keep the light scheme in dark mode instead of inverting screenshots and diagrams.</li>
        </ul>
      </section>
    </div>
  )
}
