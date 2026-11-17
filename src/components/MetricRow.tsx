export interface Metric {
  value: string
  label: string
}

/** Unboxed figures on fine dividers. Values use tabular numerals so a row lines up. */
export default function MetricRow({ metrics, className = '' }: { metrics: Metric[]; className?: string }) {
  return (
    <dl className={`ds-metrics ${className}`.trim()}>
      {metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
    </dl>
  )
}
