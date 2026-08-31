import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { Lang } from '../i18n/translations';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero__controls">
        <button
          type="button"
          class="hero__theme"
          [attr.aria-label]="themeLabel()"
          [attr.title]="themeLabel()"
          (click)="toggleTheme()"
        >
          {{ theme() === 'dark' ? '☀' : '☾' }}
        </button>
        <div class="hero__lang" role="group" aria-label="Language">
          <button
            type="button"
            [class.active]="lang() === 'da'"
            [attr.aria-pressed]="lang() === 'da'"
            (click)="setLang('da')"
          >
            DA
          </button>
          <button
            type="button"
            [class.active]="lang() === 'en'"
            [attr.aria-pressed]="lang() === 'en'"
            (click)="setLang('en')"
          >
            EN
          </button>
        </div>
      </div>
      <div class="hero__inner">
        <img
          src="assets/ProfilePicture.jpg"
          alt="Jens Møller Olsen"
          class="hero__photo"
          width="160"
          height="160"
        />
        <h1 class="hero__name">Jens Møller Olsen</h1>
        <p class="hero__title">{{ t().hero.title }}</p>
        <p class="hero__tagline">{{ t().hero.tagline }}</p>
        <nav class="hero__nav">
          <a href="#about">{{ t().hero.nav.about }}</a>
          <a href="#education">{{ t().hero.nav.education }}</a>
          <a href="#experience">{{ t().hero.nav.experience }}</a>
          <a href="#projects">{{ t().hero.nav.projects }}</a>
          <a href="#skills">{{ t().hero.nav.skills }}</a>
          <a href="#contact">{{ t().hero.nav.contact }}</a>
        </nav>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
      padding: 4rem 1.5rem 3rem;
      border-bottom: 1px solid var(--color-border);
    }
    .hero__controls {
      position: absolute;
      top: 1rem;
      right: 1.25rem;
      display: flex;
      gap: 0.5rem;
    }
    .hero__theme {
      border: 1px solid var(--color-border);
      background: var(--color-surface-elevated);
      color: var(--color-text-muted);
      font-size: 0.9rem;
      line-height: 1;
      padding: 0 0.6rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: color 0.2s ease;
    }
    .hero__theme:hover {
      color: var(--color-accent);
    }
    .hero__lang {
      display: flex;
      gap: 0.25rem;
      background: var(--color-surface-elevated);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      padding: 0.2rem;
    }
    .hero__lang button {
      border: none;
      background: transparent;
      color: var(--color-text-muted);
      font-family: var(--font-mono);
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
      border-radius: calc(var(--radius-sm) - 2px);
      cursor: pointer;
      transition: color 0.2s ease, background 0.2s ease;
    }
    .hero__lang button:hover {
      color: var(--color-text);
    }
    .hero__lang button.active {
      background: var(--color-accent-soft);
      color: var(--color-accent);
    }
    .hero__inner {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }
    .hero__photo {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--color-border);
      display: block;
      margin: 0 auto 1.5rem;
    }
    .hero__name {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      margin: 0 0 0.25rem;
      letter-spacing: -0.02em;
    }
    .hero__title {
      font-size: 1.25rem;
      color: var(--color-accent);
      margin: 0 0 1rem;
      font-weight: 500;
    }
    .hero__tagline {
      color: var(--color-text-muted);
      max-width: 560px;
      margin: 0 auto 2rem;
      font-size: 1rem;
      line-height: 1.65;
    }
    .hero__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .hero__nav a {
      color: var(--color-text-muted);
      font-size: 0.9rem;
    }
    .hero__nav a:hover {
      color: var(--color-accent);
    }
  `],
})
export class HeroSectionComponent {
  private readonly i18n = inject(LanguageService);
  private readonly themes = inject(ThemeService);
  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;
  protected readonly theme = this.themes.theme;

  protected setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }

  protected toggleTheme(): void {
    this.themes.toggle();
  }

  protected themeLabel(): string {
    return this.theme() === 'dark' ? this.t().hero.themeToLight : this.t().hero.themeToDark;
  }
}
