/**
 * TRANSLATIONS FILE (i18n)
 * ===============================
 *
 * This file contains all the translations of the template in bilingual format
 * (Spanish/English). It is the central source of all the text that appears in the interface.
 *
 * ARCHITECTURE:
 * - Uses TypeScript for type-safety and autocompletion
 * - Defines an interface that ensures consistency between languages
 * - Supports HTML in translation values (with <br>, <span>, etc.)
 * - Includes automatic detection of the browser's language
 *
 * HOW TO CUSTOMIZE:
 * 1. Look for the text you want to change in the 'es' section (line 62)
 * 2. Modify the value according to your needs
 * 3. IMPORTANT: Repeat the change in the 'en' section (line 90) in English
 * 4. Save the file - Astro will automatically reload
 *
 * EDITING RULES:
 * - ALWAYS modify both languages (es and en) to maintain parity
 * - You can use basic HTML: <br>, <strong>, <span class="...">
 * - The text {year} is automatically replaced by the current year
 * - Maintain the format of terminal commands ($ whoami, cd, etc.) for visual consistency
 */

/**
 * INTERFACE: Translations
 * ----------------------
 * Defines the structure of all available translations.
 * Ensures that both languages have exactly the same properties.
 *
 * SECTIONS:
 * - Navigation & Meta: Titles, SEO descriptions
 * - Hero Section: Main presentation section
 * - Projects Section: Texts related to projects
 * - Contact Section: Contact information in footer
 * - Footer: Copyright and site status
 */
export interface Translations {
  // Navigation & Meta
  siteTitle: string;          // Title that appears in the browser tab
  siteDescription: string;    // Description for search engines (SEO)

  // Hero Section (Main)
  heroGreeting: string;       // Initial command "$ whoami"
  heroTitle: string;          // Your name or personal brand
  heroSubtitle: string;       // Your professional title
  heroDescription: string;    // Professional description (supports HTML)
  heroCta: string;            // Text of the navigation button "cd ~/projects"
  heroTemplateButton: string; // Text of the "git clone template" button

  // Projects Section
  projectsTitle: string;      // Section title "$ ls ~/projects"
  projectsFeatured: string;   // "PINNED" badge for featured projects
  projectsDemo: string;       // "[demo]" button
  projectsCode: string;       // "[code]" button (link to GitHub)
  projectsWeb: string;        // "[web]" button (link to website)
  projectsImages: string;     // "[images]" button (opens gallery)
  projectsExplanation: string;// "[explanation]" button (opens modal)
  projectsCsv: string;        // "[csv]" button (downloads data)
  teachingTitle: string;      // Section title "$ ls ~/teaching"

  // Contact Section (Footer)
  contactTitle: string;       // Title "$ contact --me"
  contactEmailButton: string; // Text of the "cat email.txt" button
  contactLinks: string;       // Title of social links "Links"

  // Footer
  footerCopyright: string;    // Copyright (uses {year} as a placeholder)
  footerStatus: string;       // Site status "● All systems operational"
}

/**
 * OBJECT: translations
 * --------------------
 * Contains the translations for each supported language.
 *
 * STRUCTURE:
 * - Key: Language code ('es', 'en')
 * - Value: Object with all the translations for that language
 *
 * SUPPORTED LANGUAGES:
 * - 'es': Spanish (default language)
 * - 'en': English
 */
export const translations: Record<string, Translations> = {
  /**
   * ENGLISH TRANSLATIONS
   * -----------------------
   * English translations. Maintain consistency with Spanish version.
   * Change these values to match your Spanish content.
   */
  en: {
    // Meta tags for SEO
    siteTitle: "Muhammad Haekal M. A. - Student Portfolio",
    siteDescription: "Student portfolio. Interested in System research.",

    // Hero Section (Main)
    heroGreeting: "$ whoami",
    heroTitle: "Muhammad Haekal Muhyidin Al-Araby", // Change this to your real name
    heroSubtitle: "Undergraduate Researcher", // E.g: "Full Stack Developer", "Frontend Engineer", "Data Scientist"
    heroDescription: "Senior undergraduate student at Sepuluh Nopember Institute of Technology with a strong interest in <strong>SYSTEM</strong> research, particularly in Storage Systems. Passionate about building efficient and robust systems.",
    heroCta: "cd ~/projects",
    heroTemplateButton: "CV",

    // Projects Section
    projectsTitle: "$ ls ~/projects",
    projectsFeatured: "PINNED",
    projectsDemo: "[demo]",
    projectsCode: "[code]",
    projectsImages: "[images]",
    projectsExplanation: "[explanation]",
    projectsCsv: "[csv]",
    projectsWeb: "[web]",

    // Teaching Section
    teachingTitle: "$ ls ~/teaching",

    // Contact Section (Footer)
    contactTitle: "$ contact --me",
    contactEmailButton: "cat email.txt",
    contactLinks: "Links",

    // Footer
    footerCopyright: "© {year} Muhammad Haekal M. A.", // {year} is automatically replaced
    footerStatus: "● All systems operational"
  }
};

/**
 * FUNCTION: getTranslations
 * -------------------------
 * Gets the translation object for a specific language.
 * If the language does not exist, it returns Spanish by default.
 *
 * PARAMETERS:
 * @param lang - Language code ('es' or 'en'), default 'es'
 *
 * RETURNS:
 * @returns {Translations} Complete translation object
 *
 * EXAMPLE:
 * ```typescript
 * const t = getTranslations('en');
 * console.log(t.siteTitle); // "Your Name - Tech Portfolio"
 * ```
 *
 * FALLBACK:
 * If an unsupported language is passed (e.g., 'fr'), it returns Spanish.
 */
export function getTranslations(): Translations {
  return translations['en'];
}

