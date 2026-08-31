import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, TRANSLATIONS, Translation } from './translations';

const STORAGE_KEY = 'cv-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(initialLang());
  readonly t = computed<Translation>(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang;
      document.title = TRANSLATIONS[lang].meta.title;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // storage unavailable (private mode) — language just won't persist
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'da') {
      return stored;
    }
  } catch {
    // fall through to browser language
  }
  return navigator.language?.toLowerCase().startsWith('da') ? 'da' : 'en';
}
