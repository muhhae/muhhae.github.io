/**
 * PROJECT MANAGEMENT MODULE
 * ===============================
 *
 * This module provides utility functions for working with
 * the portfolio projects. It acts as an abstraction layer over
 * the raw data defined in projects-data.ts
 *
 * FUNCTIONALITY:
 * - Get all projects
 * - Filter featured projects (PINNED)
 * - Filter by technology/skill
 * - Search for specific projects
 * - Get projects with special features (images, explanation)
 *
 * USAGE IN COMPONENTS:
 * ```astro
 * ---
 * import { getAllProjects, getFeaturedProjects } from '../lib/projects';
 * const projects = getAllProjects();
 * const featured = getFeaturedProjects();
 * ---
 * ```
 */

import { projectsData, type Project } from '../data/projects-data.js';

/**
 * FUNCTION: getAllProjects
 * -----------------------
 * Gets all portfolio projects without filters
 *
 * RETURNS:
 * @returns {Project[]} Complete array of projects
 *
 * EXAMPLE:
 * ```typescript
 * const projects = getAllProjects();
 * console.log(projects.length); // 4 (example projects)
 * ```
 */
export function getAllProjects(): Project[] {
  return projectsData;
}

/**
 * FUNCTION: getFeaturedProjects
 * ----------------------------
 * Gets only the projects marked as featured (featured: true)
 * These projects appear with the "PINNED" badge in the interface
 *
 * RETURNS:
 * @returns {Project[]} Array of featured projects
 *
 * EXAMPLE:
 * ```typescript
 * const featured = getFeaturedProjects();
 * // Returns only projects with featured: true
 * ```
 */
export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}

/**
 * FUNCTION: getProjectsByCategory
 * -------------------------------
 * Filters projects by technology/skill
 * Case-insensitive and partial search (allows partial matches)
 *
 * PARAMETERS:
 * @param category - Name of the technology to search for (e.g., "React", "Node")
 *
 * RETURNS:
 * @returns {Project[]} Array of projects that use that technology
 *
 * EXAMPLE:
 * ```typescript
 * const reactProjects = getProjectsByCategory('React');
 * const nodeProjects = getProjectsByCategory('node'); // Case-insensitive
 * ```
 *
 * NOTE: Searches in the 'tech' array of each project
 */
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project =>
    project.tech.some(tech => tech.toLowerCase().includes(category.toLowerCase()))
  );
}

/**
 * FUNCTION: getProjectByTitle
 * ---------------------------
 * Searches for a specific project by its title
 * Exact search (not case-insensitive)
 *
 * PARAMETERS:
 * @param title - Exact title of the project to search for
 *
 * RETURNS:
 * @returns {Project | undefined} Found project or undefined
 *
 * EXAMPLE:
 * ```typescript
 * const project = getProjectByTitle('My Project');
 * if (project) {
 *   console.log(project.description);
 * }
 * ```
 */
export function getProjectByTitle(title: string): Project | undefined {
  return projectsData.find(project => project.title === title);
}

/**
 * FUNCTION: getProjectsWithImages
 * -------------------------------
 * Gets only projects that have an image gallery
 * Useful for displaying projects with available screenshots
 *
 * RETURNS:
 * @returns {Project[]} Array of projects with images
 *
 * EXAMPLE:
 * ```typescript
 * const projectsWithGallery = getProjectsWithImages();
 * // Returns projects where images !== null and images.length > 0
 * ```
 *
 * NOTE: Filters projects with a non-empty 'images' property
 */
export function getProjectsWithImages(): Project[] {
  return projectsData.filter(project => project.images && project.images.length > 0);
}

/**
 * FUNCTION: getProjectsWithExplanation
 * ------------------------------------
 * Gets projects that have an extended explanation
 * These projects show an [explanation] button that opens a modal
 *
 * RETURNS:
 * @returns {Project[]} Array of projects with explanation
 *
 * EXAMPLE:
 * ```typescript
 * const detailedProjects = getProjectsWithExplanation();
 * // Returns projects with a defined 'explanation' property
 * ```
 *
 * NOTE: Useful for identifying projects with additional documentation
 */
export function getProjectsWithExplanation(): Project[] {
  return projectsData.filter(project => project.explanation);
}
