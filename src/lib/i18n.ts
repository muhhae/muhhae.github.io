/**
 * INTERNATIONALIZATION MODULE (i18n)
 * =====================================
 *
 * This module provides utilities for managing translations
 * in the bilingual template (Spanish/English).
 *
 * FUNCTIONALITY:
 * - Gets translations according to the current language
 * - Provides helpers to detect the active language
 * - Simplifies the use of translations in Astro components
 *
 * USAGE IN COMPONENTS:
 * ```astro
 * ---
 * import { useI18n } from '../lib/i18n';
 * const { t, lang, isEnglish } = useI18n(Astro.currentLocale);
 * ---
 * <h1>{t.heroTitle}</h1>
 * ```
 */

import { getTranslations, type Translations } from '../i18n/translations.js';

export function useI18n() {
  const t = getTranslations();

  return {
    t,
    lang: 'en',
    isEnglish: true,
    isSpanish: false
  };
}
