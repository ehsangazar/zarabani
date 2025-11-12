#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const CASE_STUDIES_DIR = path.join(__dirname, '..', 'src', 'content', 'case-studies')
const UTILS_FILE = path.join(__dirname, '..', 'src', 'utils', 'caseStudies.ts')

function getCaseStudyFolders() {
  try {
    return fs.readdirSync(CASE_STUDIES_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  } catch (error) {
    console.error('Error reading case studies directory:', error)
    return []
  }
}

function generateCaseStudiesCode() {
  const folders = getCaseStudyFolders()

  // Generate import statements
  const imports = folders.map(folder => {
    const importPath = `/src/content/case-studies/${folder}/index.md?raw`
    const variableName = `${folder.replace(/[^a-zA-Z0-9]/g, '_')}Content`
    return `import ${variableName} from '${importPath}'`
  }).join('\n')

  // Generate processing code
  const processingCode = folders.map(folder => {
    const variableName = `${folder.replace(/[^a-zA-Z0-9]/g, '_')}Content`
    return `
    // Process ${folder} case study
    try {
      const { frontmatter, content: markdownContent } = parseFrontmatter(${variableName})

      caseStudies.push({
        id: '${folder}',
        title: frontmatter.title || '${folder}',
        description: frontmatter.description || '',
        category: frontmatter.category || 'Project',
        technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
        achievements: Array.isArray(frontmatter.achievements) ? frontmatter.achievements : [],
        content: markdownContent,
        frontmatter
      })
    } catch (error) {
      console.warn('Failed to load ${folder} case study:', error)
    }`
  }).join('\n')

  return `// Auto-generated case study imports - DO NOT EDIT MANUALLY
// Run 'npm run generate-case-studies' to update

${imports}

// Cache for processed case studies
let caseStudiesCache: CaseStudy[] | null = null

// Load all case studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (caseStudiesCache) {
    return caseStudiesCache
  }

  try {
    const caseStudies: CaseStudy[] = []${processingCode}

    caseStudiesCache = caseStudies
    return caseStudies
  } catch (error) {
    console.error('Failed to load case studies:', error)
    return []
  }
}

// Load a specific case study by ID
export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  try {
    const caseStudies = await getAllCaseStudies()
    return caseStudies.find(study => study.id === id) || null
  } catch (error) {
    console.error(\`Failed to load case study: \${id}\`, error)
    return null
  }
}`
}

function updateCaseStudiesFile() {
  try {
    // Read the current file
    let currentContent = fs.readFileSync(UTILS_FILE, 'utf-8')

    // Split at the comment marker
    const marker = '// Auto-generated case study imports - DO NOT EDIT MANUALLY'
    const markerIndex = currentContent.indexOf(marker)

    if (markerIndex === -1) {
      console.error('Could not find auto-generation marker in caseStudies.ts')
      return false
    }

    // Keep everything before the marker
    const beforeMarker = currentContent.substring(0, markerIndex)

    // Generate new content
    const newContent = generateCaseStudiesCode()

    // Combine
    const finalContent = beforeMarker + newContent

    // Write back
    fs.writeFileSync(UTILS_FILE, finalContent, 'utf-8')

    console.log(`✅ Updated case studies for ${getCaseStudyFolders().length} projects:`)
    getCaseStudyFolders().forEach(folder => console.log(`  - ${folder}`))

    return true
  } catch (error) {
    console.error('Error updating case studies file:', error)
    return false
  }
}

// Run if called directly
if (require.main === module) {
  if (updateCaseStudiesFile()) {
    console.log('\n💡 Tip: Restart your dev server to see the changes!')
    process.exit(0)
  } else {
    process.exit(1)
  }
}

module.exports = { updateCaseStudiesFile, getCaseStudyFolders }
