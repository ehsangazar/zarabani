# Zara Bani portfolio design system

## Direction and scope

A quiet, editorial portfolio: clear reading hierarchy, compact product previews, personal imagery, restrained colour, and visible interaction cues. Keep the original biography and metrics, illustrated logo, outlined portrait, and prototype previews.

The system is scoped to `.minimal-site`. Internal `/projects/:id` pages retain their existing layout, typography, password gate, navigation, and footer. The printable résumé retains its dedicated print layout. Do not move these tokens onto `:root`.

## Source of truth

- `src/components/design-tokens.css`: shared colours, typography, spacing, shape, and motion.
- `src/components/minimal-site.css`: layout and component rules.
- `src/components/project-preview.css`: compact product cards and prototype presentation.
- `MinimalShell`, `ProjectGrid`, and `WritingGrid`: shared React components.

## Typography

Use self-hosted Inter Variable (100–900), the font verified on uxcel.com. The bundled SIL Open Font License is in `public/fonts/Inter-LICENSE.txt`. Font loading uses `swap`; no third-party font request is needed. Body copy is 18px on desktop (16px on mobile) with 1.5 line height and a maximum measure of 62 characters. Keep long introductions in distinct paragraphs without changing their wording.

| Role | Token | Size |
| --- | --- | --- |
| Metadata / compact labels | `--ms-text-xs` | 12px |
| Navigation / supporting text | `--ms-text-sm` | 14px |
| Body | `--ms-text-base` | 18px |
| Emphasis | `--ms-text-lg` | 18px |
| Card headings | `--ms-text-card` | 20px |
| Section statements | `--ms-text-section` | 28–40px |
| Page heading | `--ms-text-display` | 36–58px |

Use 700 weight for page and feature headings, 600 for card headings and buttons, and 400 for paragraphs. Tight tracking belongs to large headings and numbers, never body copy. Balance headings and use tabular numerals for metrics. Small screens retain readable body text rather than scaling everything down.

## Colour

| Role | Value | Use |
| --- | --- | --- |
| Ink | `#05060f` | Headings and primary text |
| Muted ink | `#60616a` | Descriptions, labels, navigation |
| Accent | `#513deb` | Text links and interaction emphasis |
| Focus | `#513deb` | Keyboard focus ring |
| Line | `#e8e8ed` | Dividers and quiet boundaries |
| Paper | `#ffffff` | Main surface |
| Surface | `#f6f5ff` | Subtle interactive backgrounds |

Pastel project backgrounds support the product imagery. They do not carry meaning by themselves. Active navigation uses an underline in addition to colour.

## Layout and spacing

Use the 4px-based spacing tokens (4, 8, 12, 16, 24, 32, 48, 64px). The page container is at most 1120px including gutters; content aligns across navigation, intro, cards, and footer. Section spacing scales from 48 to 80px. Avoid decorative empty panels or large cards with little content.

Below 768px, use one-column content, a two-column expandable navigation menu, and a centred portrait below the introduction. The three metrics remain a compact row. At tablet widths, the portrait and navigation tighten before switching to mobile.

## Components and behaviour

- **Navigation:** illustrated logo and name, 44px-tall links, underlined current route. Mobile menu has `aria-expanded` and `aria-controls`; Escape closes it and restores button focus.
- **Text link:** accent ink, underline, and at least 44px height. An arrow supplements the label; it never replaces it.
- **Project card:** compact preview, title, and existing achievement content. Preserve current content choices. Entire card is one link with a visible keyboard outline.
- **Prototype:** loads on interaction, plays muted on hover/focus, pauses on exit. Reduced-motion users see the still image.
- **Writing card:** image, date/reading time, heading, excerpt. No gradient overlays obscuring artwork.
- **Metrics:** unboxed row with fine dividers, large tabular values, legible labels. Do not invent new numbers.
- **Contact row:** descriptive channel, destination, subtle hover surface, and keyboard focus.
- **Portrait:** original transparent cutout plus SVG silhouette outline. Do not regenerate the face for style changes.

## Accessibility and verification

Maintain a single page h1, logical heading levels, semantic links and buttons, a skip link, and visible focus. Keep text legible against every surface. Never rely on hover for access to a project. Reduced motion disables decorative transitions.

For changes, run the production build and lint changed TSX files. Inspect desktop, tablet, and narrow mobile layouts; check overflow, menu operation, card links, and prototype pause/play. Confirm the internal project route has no `.minimal-site` ancestor.

## Uxcel reference adaptation

Reference: https://uxcel.com/ — inspected computed styles for Inter, 700-weight headings, 58px desktop h1, 40px h2, -1px heading tracking, white backgrounds, and #513deb primary controls. The portfolio adapts these without changing its content, identity, compact project previews, or internal project pages. The main work CTA is a purple 8px-radius button; supporting links stay lightweight.

### Links and buttons

Use `.ms-primary-link` for the main work and contact calls to action (purple fill, white text); `.ms-secondary-link` for collection navigation and résumé (white fill, neutral border, subtle shadow). Both use 8px corners, 600 weight, and a 44px minimum height. Inline links are purple with underline on hover. Cards reveal purple titles on hover and keyboard focus. All actions use a visible lavender focus ring; internal project pages are excluded.

Final palette consistency: product preview surfaces use neutral grey with a pale-purple Omaia surface; public-page text and controls share Inter. Section headings use the 28–40px bold scale. Original product imagery retains its own colours.
