# Zara Bani portfolio design system

## Direction

An editorial, data-literate portfolio for a Product Designer working on AI-native, data-heavy B2B products. Plum ink on warm paper, a serif for display, Inter for everything a user operates, tabular figures wherever numbers appear, and structure carried by fine rules rather than boxes and shadows.

Not allowed: gradients, glassmorphism or backdrop blur, glow blobs, decorative drop shadows on UI, emoji icons. The portrait's soft drop shadow is part of the photo treatment and stays.

The live reference is the public page at `/design-system`, which reads its values from the stylesheet and calculates every contrast ratio from them.

## Source of truth

| File | Owns |
| --- | --- |
| `src/components/design-tokens.css` | Semantic colour tokens (light and dark), type, spacing, radius and motion scales. Loaded globally from `src/index.css`. |
| `src/index.css` | Maps the Tailwind colour names used inside older case studies and articles (`primary`, `primary-dark`, `accent`, `warm`, `neutral`, `on-primary`) onto the semantic tokens with `@theme inline`. |
| `src/components/minimal-site.css` | Shell, layout and shared components for every page inside `MinimalShell`. |
| `src/components/case-study-shared.css` | The password gate and the internal case-study shell (hero, breadcrumb, body). |
| `src/components/project-preview.css` | Product imagery inside project cards. |
| `src/pages/design-system.css` | The `/design-system` page only. |
| `SpecBox`, `MetricRow`, `ProjectGrid`, `WritingGrid` | Shared React components. |

Change a value in `design-tokens.css` and every page, including `/design-system`, follows. Never hard-code a colour in a component; add or reuse a semantic token.

## Colour

Components use semantic names only. Dark mode swaps the values under `@media (prefers-color-scheme: dark)` and keeps the names.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--ds-text` | `#1C1720` | `#F2EEF4` | Headings and body |
| `--ds-text-muted` | `#5F5866` | `#B4AABB` | Descriptions, labels, metadata |
| `--ds-surface` | `#FBFAF7` | `#17131A` | Page background (warm paper) |
| `--ds-surface-raised` | `#FFFFFF` | `#211B25` | Cards, panels, fields |
| `--ds-surface-sunken` | `#F3F0EA` | `#120F14` | Preview wells, quiet fills |
| `--ds-line` | `#E5E0D8` | `#3A3240` | Hairlines and card borders (decorative) |
| `--ds-line-strong` | `#8A8290` | `#7E7385` | Form-field and control borders |
| `--ds-brand` | `#4A265C` | `#CDB0DC` | Plum ink: links, primary actions |
| `--ds-brand-hover` | `#3A1D49` | `#DCC5E8` | Primary hover |
| `--ds-brand-tint` | `#F1EBF3` | `#2A2130` | Hover and selected fills |
| `--ds-on-brand` | `#FFFFFF` | `#1C1720` | Text on a brand fill |
| `--ds-accent` | `#C45678` | `#E58AA6` | Rose: rules, markers, icons, large text |
| `--ds-accent-text` | `#A63D60` | `#E58AA6` | Rose for small text |
| `--ds-focus` | `#4A265C` | `#E5C8F0` | Focus ring |
| `--ds-success` | `#2E6B45` | `#86C79C` | Positive status |
| `--ds-warning` | `#8A5700` | `#E6B85C` | Caution |
| `--ds-danger` | `#B3261E` | `#F2A097` | Errors |

### Contrast (WCAG 2.2)

| Pair | Light | Dark | Needs |
| --- | --- | --- | --- |
| Text on surface | 16.87 | 16.00 | 4.5 |
| Muted text on surface | 6.54 | 8.22 | 4.5 |
| Muted text on raised | 6.83 | 7.54 | 4.5 |
| Brand on surface | 11.68 | 9.47 | 4.5 |
| On-brand on brand (primary button) | 12.19 | 9.09 | 4.5 |
| Rose text (`accent-text`) on surface | 5.82 | 7.44 | 4.5 |
| Rose accent on surface | 4.06 | 7.44 | 3 (graphics, large text) |
| Control border on surface | 3.54 | 4.09 | 3 |
| Focus ring on surface | 11.68 | 12.10 | 3 |

**Rose rule.** The brand rose `#C45678` is 4.06:1 on paper: below AA for body text. Use `--ds-accent` only for rules, list markers, icons and text at 24px and above (or 18.66px bold). Any small rose text uses `--ds-accent-text`.

### Paper subtrees

`.ds-scheme-light` pins the light values on a subtree. It is applied to the case-study body (`.cs-body`), blog articles and the printable résumé, because their content (screenshots, diagrams, Tailwind `bg-white` panels) was authored on paper. In dark mode the header, hero, breadcrumb and footer go dark and the study reads as a light sheet. Converting those bodies to full dark mode means auditing every hard-coded surface in `src/pages/projects/case-studies/*.css` first.

## Typography

- **Display:** Fraunces Variable (SIL OFL), from `@fontsource-variable/fraunces`, optical-size axis, imported in `src/main.tsx`. Page and section headings, card titles, the spec-box title, the home greeting "Hi, I'm Zara." and the italic emphasis in the home headline. Weight 460 to 560; never bold.
- **UI and body:** self-hosted Inter Variable (`public/fonts/InterVariable.woff2`, licence in `public/fonts/Inter-LICENSE.txt`).
- **Labels:** Inter 600, 12px, uppercase, 0.1em tracking. Eyebrows, spec labels, table headers, metadata.
- **Figures:** `font-variant-numeric: tabular-nums` on metrics, tables, dates, card achievements and list figures.

| Token | Size | Role |
| --- | --- | --- |
| `--ds-text-display` | 40 to 68px | Home headline |
| `--ds-text-3xl` | 36 to 56px | Page h1 |
| `--ds-text-2xl` | 28 to 36px | Section h2 |
| `--ds-text-xl` | 24px | Card and spec titles |
| `--ds-text-lg` | 20px | Lead, h3 |
| `--ds-text-base` | 18px (16px mobile) | Body, 1.55 line height, 62ch measure |
| `--ds-text-sm` | 14px | UI, navigation, buttons |
| `--ds-text-xs` | 12px | Labels |

## Space and grid

4px base: `--ds-space-1` 4, `-2` 8, `-3` 12, `-4` 16, `-6` 24, `-8` 32, `-12` 48, `-16` 64, `-20` 80. Sections are `--ds-section-gap` (48 to 80px) apart. Layout uses a 12-column grid, 24px gutter (`--ds-grid-gap`), 1120px container (`--ds-width`). The home hero is 7 + 4 columns, About and detail sections are 4 + 7. Radii: 4, 8 (controls), 12px (cards).

## Components

- **Navigation:** logo plus serif name; links at least 44px tall; current route underlined in rose as well as coloured. Mobile menu uses `aria-expanded` and `aria-controls`; Escape closes it and returns focus.
- **Actions:** `.ms-primary-link` (plum fill), `.ms-secondary-link` (raised, strong border), `.ms-text-link` (plum, underlined). One primary per view. No shadows.
- **Metric row (`MetricRow`):** unboxed cells on fine dividers, a 24px rose tick, large tabular values, label beneath. Collapses to label and value rows on mobile. Never invent numbers.
- **Spec box (`SpecBox`):** "At a glance" summary above each protected case study. Label and value rows separated by hairlines. No heading element so the gate's h1 stays first.
- **Project card:** whole card is one link; raised surface, hairline border, plum border on hover and focus, sunken preview well.
- **Writing card:** image, uppercase meta, serif title, two-line excerpt.
- **Portrait:** original transparent cutout in an arched plum-tint stage with a hairline inset, the Fraunces italic greeting, and the pinned note. Do not regenerate the face.
- **Prototype:** videos have controls and never autoplay.
- **Case-study shell:** `CaseStudyPage` in `ProjectDetail.tsx` renders the hero (eyebrow, h1, lead), the breadcrumb and the body for every internal project.

## Accessibility and verification

One h1 per page, headings in order, semantic links and buttons, a skip link, a 2px focus ring offset 3px. AA contrast in both modes (the `/design-system` table is the check). Reduced motion disables transitions and image zoom.

For changes: `npm ci && npm run build` and `npx eslint .`. Inspect desktop, tablet and narrow mobile in both colour schemes; check the menu, card links, the password gate and the prototype videos.
