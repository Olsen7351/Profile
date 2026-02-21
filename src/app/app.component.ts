import { Component, HostListener, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sections/hero-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { SkillsSectionComponent } from './sections/skills-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';

const STICKY_NAV_SECTIONS = ['about', 'experience', 'projects', 'skills', 'contact'] as const;
const STICKY_SHOW_THRESHOLD = 400;
const ACTIVE_SECTION_OFFSET = 120;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
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
      </div>
    </nav>
    <app-hero-section />
    <main>
      <app-about-section />
      <app-experience-section />
      <app-projects-section />
      <app-skills-section />
      <app-contact-section />
    </main>
  `,
  styles: [
    `
      .sticky-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: rgba(10, 10, 12, 0.85);
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
  private scrollListener = () => this.onScroll();

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    this.onScroll();
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
