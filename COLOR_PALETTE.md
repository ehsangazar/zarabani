# Color Palette Documentation

This document defines the official color palette for the Zarabani portfolio website.

## Primary Colors

### Primary (#B24B01)
- **Hex**: `#B24B01`
- **Name**: Burnt Orange
- **Usage**: Primary brand color, main CTAs, key highlights
- **CSS Variable**: `--color-primary`
- **Tailwind Class**: `primary`

### Primary Dark (#223830)
- **Hex**: `#223830`
- **Name**: Dark Green
- **Usage**: Headings, dark text, strong contrast elements
- **CSS Variable**: `--color-primary-dark`
- **Tailwind Class**: `primary-dark`

## Secondary Colors

### Secondary (#EAA64B)
- **Hex**: `#EAA64B`
- **Name**: Golden Yellow
- **Usage**: Secondary actions, accents, gradients
- **CSS Variable**: `--color-secondary`
- **Tailwind Class**: `secondary`

### Accent (#487B79)
- **Hex**: `#487B79`
- **Name**: Teal
- **Usage**: Accent elements, tertiary actions, decorative elements
- **CSS Variable**: `--color-accent`
- **Tailwind Class**: `accent`

## Neutral Colors

### Warm (#ECDBCC)
- **Hex**: `#ECDBCC`
- **Name**: Pale Beige
- **Usage**: Backgrounds, subtle highlights, warm tones
- **CSS Variable**: `--color-warm`
- **Tailwind Class**: `warm`

### Neutral (#CDD7D7)
- **Hex**: `#CDD7D7`
- **Name**: Light Grey/Blue
- **Usage**: Backgrounds, borders, subtle elements
- **CSS Variable**: `--color-neutral`
- **Tailwind Class**: `neutral`

## Color Swatches

```
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   Primary   │  Secondary  │    Warm     │   Neutral   │   Accent    │ Primary Dark│
│  #B24B01    │  #EAA64B    │  #ECDBCC    │  #CDD7D7    │  #487B79    │  #223830    │
│ Burnt Orange│Golden Yellow│ Pale Beige  │Light Grey/Blue│    Teal    │ Dark Green  │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

## Usage Guidelines

### Buttons
- **Primary Actions**: Use `primary` color
- **Secondary Actions**: Use `secondary` color
- **Tertiary Actions**: Use `accent` color
- **Hover States**: Use darker variants (e.g., `primary/90` or custom darker shades)

### Text
- **Headings**: Use `primary-dark` for maximum contrast
- **Body Text**: Use `primary-dark` with opacity (e.g., `primary-dark/80`)
- **Links**: Use `primary` or `accent` colors
- **Emphasis**: Use `primary` or `secondary`

### Backgrounds
- **Primary Backgrounds**: Use `warm` and `neutral` colors
- **Gradients**: Combine `primary`, `secondary`, and `accent` in gradients
- **Cards/Sections**: Use `warm/30` or `neutral/30` with white overlays

### Gradients
Common gradient combinations:
- Primary to Secondary: `from-primary to-secondary`
- Secondary to Accent: `from-secondary to-accent`
- Accent to Primary: `from-accent to-primary`
- Full Spectrum: `from-primary via-secondary to-accent`

## Implementation

Colors are defined in `src/index.css` using CSS custom properties and Tailwind theme configuration. Use Tailwind utility classes to apply colors:

```tsx
// Examples
<div className="bg-primary text-white">Primary background</div>
<div className="text-primary-dark">Dark text</div>
<div className="bg-gradient-to-r from-primary to-secondary">Gradient</div>
<div className="border-accent">Accent border</div>
```

## Accessibility

- **Primary Dark (#223830)**: WCAG AA compliant for text on light backgrounds
- **Primary (#B24B01)**: WCAG AA compliant for text on white/light backgrounds
- Always ensure sufficient contrast ratios when combining colors
- Test color combinations with accessibility tools

