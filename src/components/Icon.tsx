export interface IconProps {
  /** Material Icons name (e.g. 'rocket_launch', 'location_on') */
  name: string
  className?: string
  /** Size in rem; default 1.5 */
  size?: number
  'aria-hidden'?: boolean
}

/**
 * Renders a Material Icon by name. Requires Material Icons font in index.html.
 */
const Icon = ({ name, className = '', size = 1.5, 'aria-hidden': ariaHidden = true }: IconProps) => (
  <span
    className={`material-icons ${className}`.trim()}
    style={{ fontSize: `${size}rem` }}
    aria-hidden={ariaHidden}
  >
    {name}
  </span>
)

export default Icon
