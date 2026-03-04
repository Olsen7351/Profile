import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sections/hero-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { SkillsSectionComponent } from './sections/skills-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';
import { EducationSectionComponent } from './sections/education-section.component';

const STICKY_NAV_SECTIONS = ['about', 'education', 'experience', 'projects', 'skills', 'contact'] as const;
const STICKY_SHOW_THRESHOLD = 400;
const ACTIVE_SECTION_OFFSET = 120;
const THEME_STORAGE_KEY = 'cv-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    EducationSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <button
      type="button"
      class="theme-toggle"
      [class.theme-toggle--sticky]="showStickyNav"
      [attr.aria-label]="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      (click)="toggleTheme()"
    >
      @if (isDark) {
        <span class="theme-toggle__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </span>
      } @else {
        <span class="theme-toggle__icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </span>
      }
    </button>
    <nav
      class="sticky-nav"
      [class.sticky-nav--visible]="showStickyNav"
      aria-label="Page sections"
    >
      <div class="sticky-nav__inner">
        @for (id of navSectionIds; track id) {
          <a
            [href]="'#' + id"
            class="sticky-nav__link"
            [class.sticky-nav__link--active]="activeSection === id"
            [attr.aria-current]="activeSection === id ? 'true' : null"
          >{{ id | titlecase }}</a>
        }
        <button
          type="button"
          class="sticky-nav__theme"
          [attr.aria-label]="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          (click)="toggleTheme()"
        >
          @if (isDark) {
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          } @else {
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          }
        </button>
      </div>
    </nav>
    <app-hero-section />
    <main>
      <app-about-section />
      <app-education-section />
      <app-experience-section />
      <app-projects-section />
      <app-skills-section />
      <app-contact-section />
    </main>
  `,
  styles: [
    `
      .theme-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 101;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        background: var(--color-surface);
        color: var(--color-text-muted);
        cursor: pointer;
        transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
      }
      .theme-toggle:hover {
        color: var(--color-accent);
        background: var(--color-accent-soft);
        border-color: var(--color-border);
      }
      .theme-toggle:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
      }
      .theme-toggle--sticky {
        display: none;
      }
      .theme-toggle__icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sticky-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: var(--color-sticky-nav-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-bottom: 1px solid var(--color-border-subtle);
        padding: 0.6rem 1rem;
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.25s ease;
        pointer-events: none;
      }
      .sticky-nav--visible {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
      .sticky-nav__inner {
        max-width: 720px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 0.5rem;
        justify-content: center;
        align-items: center;
      }
      .sticky-nav__theme {
        display: none;
        padding: 0.4rem 0.5rem;
        border: none;
        border-radius: var(--radius-sm);
        background: transparent;
        color: var(--color-text-muted);
        cursor: pointer;
        transition: color 0.15s ease, background 0.15s ease;
      }
      .sticky-nav--visible .sticky-nav__theme {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .sticky-nav__theme:hover {
        color: var(--color-accent);
        background: var(--color-accent-soft);
      }
      .sticky-nav__theme:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
      }
      .sticky-nav__link {
        display: inline-block;
        padding: 0.4rem 0.75rem;
        color: var(--color-text-muted);
        font-size: 0.8125rem;
        font-weight: 500;
        border-radius: var(--radius-sm);
        transition: color 0.15s ease, background 0.15s ease;
      }
      .sticky-nav__link:hover {
        color: var(--color-accent);
        background: var(--color-accent-soft);
      }
      .sticky-nav__link--active {
        color: var(--color-accent);
        background: var(--color-accent-soft);
      }
      .sticky-nav__link:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 2px;
      }
      main {
        max-width: 720px;
        margin: 0 auto;
        padding: 0 1.5rem 5rem;
      }
      @media (min-width: 640px) {
        main { padding-left: 2rem; padding-right: 2rem; }
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly navSectionIds = STICKY_NAV_SECTIONS;
  showStickyNav = false;
  activeSection: string | null = null;
  isDark = true;
  private scrollListener = () => this.onScroll();

  ngOnInit(): void {
    this.initTheme();
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.onScroll();
  }

  private initTheme(): void {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark = stored === 'light' ? false : stored === 'dark' ? true : prefersDark;
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem(THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
  }

  private applyTheme(): void {
    const theme = this.isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  private onScroll(): void {
    const y = window.scrollY;
    this.showStickyNav = y > STICKY_SHOW_THRESHOLD;
    this.activeSection = this.getActiveSection();
  }

  private getActiveSection(): string | null {
    let current: string | null = null;
    for (const id of STICKY_NAV_SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= ACTIVE_SECTION_OFFSET) current = id;
    }
    return current;
  }
}
