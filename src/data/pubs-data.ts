/**
 * PROJECTS DATA FILE
 * ==============================
 *
 * This file centralizes all the projects that appear in your portfolio.
 * It is the main data source for the projects section.
 *
 * PURPOSE:
 * - Defines the data structure of each project
 * - Stores bilingual information (Spanish/English)
 * - Supports multiple types of links and multimedia content
 * - Allows marking projects as featured (PINNED)
 *
 * ARCHITECTURE:
 * - TypeScript for type-safety and validation
 * - Full bilingual support in all text fields
 * - Optional properties (demo, web, images, etc.) for flexibility
 * - Technology filtering system (tech array)
 *
 * HOW TO ADD A PROJECT:
 * 1. Copy one of the existing examples
 * 2. Modify the fields according to your project
 * 3. Add it to the projectsData array
 * 4. Save - Astro will automatically reload
 *
 * HOW TO DELETE A PROJECT:
 * 1. Locate the project object in the array
 * 2. Delete from { to }, (including the comma)
 * 3. Save the file
 */

/**
 * INTERFACE: Project
 * -----------------
 * Defines the data structure that each project must have.
 * TypeScript uses this interface to validate that no mandatory fields are missing.
 *
 * MANDATORY PROPERTIES:
 * - title: Project title (bilingual)
 * - description: Brief description that appears on the card (bilingual, supports HTML)
 * - tech: Array of technologies/skills used
 * - featured: Boolean indicating if it is a featured project (PINNED)
 *
 * OPTIONAL PROPERTIES:
 * - explanation: Extended description for modal (bilingual, supports HTML)
 * - link: URL to the source code (GitHub)
 * - demo: URL to live demo
 * - web: URL to the official website
 * - csv: Path to downloadable file (CSV or any format)
 * - images: Array of paths to screenshots for gallery
 *
 * TYPES OF BUTTONS THAT ARE DISPLAYED:
 * - [demo] - If demo !== null
 * - [code] - If link !== null
 * - [web] - If web !== null
 * - [images] - If images !== null and images.length > 0
 * - [explanation] - If explanation !== undefined
 * - [csv] - If csv !== null
 */
export interface Project {
  // TITLE (Mandatory)
  // Appears as the main header of the project
  title: {
    en: string;  // Title in English
  };

  // DESCRIPTION (Mandatory)
  // Text that appears on the project card
  // SUPPORTS HTML: You can use <strong>, <br>, <span>, etc.
  description: {
    en: string;  // Description in English
  };

  // EXTENDED EXPLANATION (Optional)
  // If defined, an [explanation] button appears that opens a modal with this content
  // Useful for complex projects that need more context
  explanation?: {
    en: string;  // Explanation in English
  };

  // TECHNOLOGIES (Mandatory)
  // Array of strings with the technologies/skills used
  // Displayed as tags under the project and allows filtering
  // Example: ["React", "Node.js", "PostgreSQL", "Docker"]
  tech: string[];

  // SOURCE CODE (Optional)
  // URL to the GitHub repository (or similar)
  // If null, the [code] button is not displayed
  link: string | null;

  // LIVE DEMO (Optional)
  // URL to a functional version of the project
  // If null, the [demo] button is not displayed
  demo: string | null;

  // WEBSITE (Optional)
  // URL to the official website of the project
  // If null, the [web] button is not displayed
  web: string | null;

  // DOWNLOADABLE FILE (Optional)
  // Path to a CSV file or other downloadable format
  // Must be in public/assets/ to be accessible
  // If null, the [csv] button is not displayed
  csv: string | null;

  // FEATURED (Mandatory)
  // true = appears with a "PINNED" badge at the top of the list
  // false = appears in normal order
  featured: boolean;

  // IMAGE GALLERY (Optional)
  // Array of paths to project screenshots
  // DO NOT include extension (.png, .jpg) - it is added automatically
  // If null or an empty array, the [images] button is not displayed
  // Paths relative to public/ (example: "/screenshots/project/img-01")
  images: string[] | null;
}

/**
 * ARRAY: projectsData
 * -------------------
 * Contains all the projects in the portfolio.
 * It is exported for use in components and utilities.
 *
 * ORDER:
 * - Projects with featured: true appear first
 * - Then the others in the order you define them here
 *
 * INCLUDED EXAMPLES:
 * 1. Complete Project: Shows ALL available options
 * 2. Featured Project: Only some options, featured: true
 * 3. Regular Project: Standard basic configuration
 * 4. Simple Project: Minimum necessary
 *
 * REPLACE THESE EXAMPLES WITH YOUR REAL PROJECTS
 */
export const projectsData: Project[] = [
  {
    title: {
      en: "Lazy Promotions"
    },
    description: {
      en: "<strong>Project featured title.</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here you briefly describe your project. <strong>Feature 1</strong>, <strong>Feature 2</strong>, <strong>Feature 3</strong>."
    },
    explanation: {
      en: "Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project."
    },
    tech: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"], // CHANGE: Replace with real technologies (React, Node, etc.)
    link: null, // CHANGE: URL of your GitHub repository
    demo: null, // CHANGE: URL of your live demo (Vercel, Netlify, etc.)
    web: null, // CHANGE: URL of the official website
    csv: null, // CHANGE: Path to your CSV file in public/assets/
    featured: false, // true = appears as "PINNED" at the top
    images: []
  },
];

/**
 * QUICK CUSTOMIZATION GUIDE
 * ===============================
 *
 * STEP 1: DELETE EXAMPLES
 * Delete the 4 example projects from this file.
 *
 * STEP 2: ADD YOUR PROJECTS
 * Copy one of the example types according to your needs:
 * - Type 1: Complete project with all options
 * - Type 2: Simple featured project
 * - Type 3: Standard regular project
 * - Type 4: Minimum project with only code
 *
 * STEP 3: CUSTOMIZE FIELDS
 * Change the values of each field:
 * - title: Name of your project (Spanish and English)
 * - description: What it does and why it's interesting
 * - tech: Technologies you used
 * - link: URL of your GitHub repo
 * - demo/web/csv/images: URLs/paths as available
 * - featured: true if you want it to appear as PINNED
 *
 * STEP 4: ADD SCREENSHOTS (OPTIONAL)
 * If your project has images:
 * 1. Create a folder in public/screenshots/project-name/
 * 2. Add numbered images: screenshot-01.png, screenshot-02.png, etc.
 * 3. Create thumbnails in public/thumbnails/screenshots/project-name/
 * 4. Add paths in the images field (without extension)
 *
 * STEP 5: SAVE AND VERIFY
 * Save the file and verify at http://localhost:4321
 *
 * REAL EXAMPLE:
 * {
 *   title: {
 *     es: "E-commerce de Zapatos",
 *     en: "Shoe E-commerce"
 *   },
 *   description: {
 *     es: "<strong>Tienda online completa.</strong><br><br>E-commerce con carrito, checkout y pasarela de pago. Incluye panel de administración, gestión de inventario y analytics. <strong>React</strong>, <strong>Stripe</strong>, <strong>MongoDB</strong>.",
 *     en: "<strong>Complete online store.</strong><br><br>E-commerce with cart, checkout and payment gateway. Includes admin panel, inventory management and analytics. <strong>React</strong>, <strong>Stripe</strong>, <strong>MongoDB</strong>."
 *   },
 *   tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
 *   link: "https://github.com/your-user/shoe-ecommerce",
 *   demo: "https://shoe-demo.vercel.app",
 *   web: "https://www.shoestore.com",
 *   csv: null,
 *   featured: true,
 *   images: [
 *     "/screenshots/shoe-ecommerce/home",
 *     "/screenshots/shoe-ecommerce/product",
 *     "/screenshots/shoe-ecommerce/cart",
 *     "/screenshots/shoe-ecommerce/checkout"
 *   ]
 * }
 */
