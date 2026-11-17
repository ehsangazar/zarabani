import { type ReactNode } from 'react'

export interface SpecRow {
  label: string
  value: ReactNode
}

interface SpecBoxProps {
  eyebrow: string
  title: string
  rows: SpecRow[]
  /** Accessible name for the landmark, since the box carries no heading element. */
  label: string
}

/** Label and value rows on fine rules, the way a product spec sheet reads. */
export default function SpecBox({ eyebrow, title, rows, label }: SpecBoxProps) {
  return (
    <aside className="ds-spec" aria-label={label}>
      <p className="ds-spec__eyebrow">{eyebrow}</p>
      <p className="ds-spec__title">{title}</p>
      <dl>
        {rows.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}
      </dl>
    </aside>
  )
}
