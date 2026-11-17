/**
 * Reads the design tokens from the live stylesheet, so /design-system documents
 * exactly what design-tokens.css ships. Light values come from the `:root`
 * rules; dark values from `:root` inside the prefers-color-scheme: dark block.
 */
export interface TokenSet {
  light: Record<string, string>
  dark: Record<string, string>
}

const isDarkMedia = (rule: CSSMediaRule) => /prefers-color-scheme:\s*dark/.test(rule.media.mediaText)

function collect(rules: CSSRuleList, dark: boolean, out: TokenSet) {
  for (const rule of Array.from(rules)) {
    if (rule instanceof CSSMediaRule) {
      collect(rule.cssRules, dark || isDarkMedia(rule), out)
    } else if (rule instanceof CSSStyleRule) {
      if (!/(^|,)\s*:root\b/.test(rule.selectorText)) continue
      const target = dark ? out.dark : out.light
      for (const prop of Array.from(rule.style)) {
        if (prop.startsWith('--ds-')) target[prop] = rule.style.getPropertyValue(prop).trim()
      }
    } else if ('cssRules' in rule) {
      // @layer and @supports blocks
      collect((rule as CSSGroupingRule).cssRules, dark, out)
    }
  }
}

export function readTokens(): TokenSet {
  const out: TokenSet = { light: {}, dark: {} }
  if (typeof document === 'undefined') return out
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList
    try {
      rules = sheet.cssRules
    } catch {
      continue // a cross-origin sheet, such as the icon font
    }
    collect(rules, false, out)
  }
  return out
}

/** Normalises #abc, #abcd and #aabbcc forms to #AABBCC; anything else comes back as null. */
export function toHex(value: string | undefined): string | null {
  if (!value) return null
  const match = value.trim().match(/^#([0-9a-f]{3,8})$/i)
  if (!match) return null
  let hex = match[1]
  if (hex.length === 3 || hex.length === 4) hex = hex.slice(0, 3).split('').map(c => c + c).join('')
  if (hex.length !== 6 && hex.length !== 8) return null
  return `#${hex.slice(0, 6).toUpperCase()}`
}

function luminance(hex: string) {
  const channel = (i: number) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5)
}

/** WCAG 2.2 contrast ratio between two #RRGGBB colours. */
export function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}
