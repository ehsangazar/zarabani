# Case Studies

This directory contains all case studies for the portfolio website. Each case study is stored in its own folder with a markdown file and optional images.

## Structure

```
case-studies/
├── project-name/
│   ├── index.md          # Main case study content
│   ├── image1.jpg        # Optional images
│   ├── screenshot.png    # Optional screenshots
│   └── diagram.svg       # Optional diagrams
└── README.md            # This file
```

## How to Add a New Case Study

1. **Create a new folder** in the `case-studies` directory with a descriptive name (this will be the URL slug)

2. **Create `index.md`** with your case study content using the frontmatter format:

```markdown
---
title: "Your Project Title"
description: "Brief description of the project"
category: "Project Category"
technologies: ["Tech 1", "Tech 2", "Tech 3"]
achievements: [
  "Achievement 1",
  "Achievement 2",
  "Achievement 3"
]
---

# Your Project Title

## Project Overview

Your content here...

## The Challenge

...

## The Solution

...
```

3. **Add images** (optional) - Place any images in the same folder and reference them in your markdown:

```markdown
![Project Screenshot](./screenshot.png)
```

## Frontmatter Fields

- `title`: The full project title
- `description`: Brief project description (shown in project cards)
- `category`: Project category (e.g., "Mobile App", "Web Design", "UX Research")
- `technologies`: Array of technologies/tools used
- `achievements`: Array of key achievements/results

## Markdown Features Supported

- Headers (H1, H2, H3)
- **Bold text** and *italic text*
- Lists (ordered and unordered)
- Links: `[Link Text](url)`
- Blockquotes: `> Quote text`
- Code blocks and inline code
- Tables
- Images: `![Alt text](./image.jpg)`

## Example

See the `omaia/` folder for a complete example of a detailed case study.

## Notes

- The folder name becomes the URL slug (e.g., `my-awesome-project` → `/projects/my-awesome-project`)
- Images should be placed in the same folder as the markdown file
- Frontmatter arrays should use YAML array syntax: `["item1", "item2"]`
- The system automatically discovers and loads all case studies
