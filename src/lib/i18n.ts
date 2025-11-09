/**
 * MÓDULO DE INTERNACIONALIZACIÓN (i18n)
 * =====================================
 *
 * Este módulo proporciona utilidades para la gestión de traducciones
 * en el template bilingüe (Español/Inglés).
 *
 * FUNCIONALIDAD:
 * - Obtiene las traducciones según el idioma actual
 * - Proporciona helpers para detectar el idioma activo
 * - Simplifica el uso de traducciones en componentes Astro
 *
 * USO EN COMPONENTES:
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
