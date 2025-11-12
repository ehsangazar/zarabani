#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Get the project name from command line arguments
const projectName = process.argv[2]

if (!projectName) {
  console.log('Usage: node create-case-study.js "Project Name"')
  console.log('Example: node create-case-study.js "My Awesome Project"')
  process.exit(1)
}

// Convert project name to slug
const slug = projectName
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

// Create the project directory
const projectDir = path.join(__dirname, '..', 'src', 'content', 'case-studies', slug)

if (fs.existsSync(projectDir)) {
  console.log(`❌ Project directory already exists: ${projectDir}`)
  process.exit(1)
}

fs.mkdirSync(projectDir, { recursive: true })

// Create the markdown file
const markdownContent = `---
title: "${projectName}"
description: "Brief description of your project"
category: "Project Category"
technologies: ["Technology 1", "Technology 2"]
achievements: [
  "Achievement 1",
  "Achievement 2"
]
---

# ${projectName}

## Project Overview

Describe your project here...

## The Challenge

What problem were you solving?

## The Solution

How did you approach the solution?

## Results

What were the outcomes and achievements?

## Technologies Used

List the technologies and tools you used.

## Want to work together?

If you like what you see and want to work together, get in touch!

[your.email@example.com](mailto:your.email@example.com)
`

const markdownPath = path.join(projectDir, 'index.md')
fs.writeFileSync(markdownPath, markdownContent)

console.log(`✅ Created new case study: ${projectName}`)
console.log(`📁 Directory: ${projectDir}`)
console.log(`📝 File: ${markdownPath}`)
console.log('')
console.log('Next steps:')
console.log('1. Edit the index.md file with your project details')
console.log('2. Add images to the project folder if needed')
console.log('3. The project will automatically appear in your portfolio!')
