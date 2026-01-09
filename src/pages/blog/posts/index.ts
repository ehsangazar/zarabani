// Blog Posts Registry
// Import all blog post components here

import { TurningAssumptionsIntoValidatedSolutions } from './TurningAssumptionsIntoValidatedSolutions'
import { TikTokNotificationsPersuasiveDesign } from './TikTokNotificationsPersuasiveDesign'
import type { BlogPostComponent, BlogPostMetadata } from './TurningAssumptionsIntoValidatedSolutions'

// Export the types for use in other files
export type { BlogPostComponent, BlogPostMetadata }

// Export all blog posts as an array
export const allBlogPosts: BlogPostComponent[] = [
  TikTokNotificationsPersuasiveDesign,
  TurningAssumptionsIntoValidatedSolutions,
  // Add more blog posts here as you create them
]

// Helper function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPostComponent | null {
  return allBlogPosts.find(post => post.metadata.slug === slug) || null
}

// Helper function to get all blog posts sorted by date (newest first)
export function getAllBlogPosts(): BlogPostComponent[] {
  return [...allBlogPosts].sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}

// Helper function to get related posts (excluding current post)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostComponent[] {
  return allBlogPosts
    .filter(post => post.metadata.slug !== currentSlug)
    .slice(0, limit)
}
