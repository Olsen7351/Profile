import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <header class="hero">
      <div class="hero__inner">
        <h1 class="hero__name">Jens Møller Olsen</h1>
        <p class="hero__title">Software Engineer</p>
        <p class="hero__tagline">
          Building scalable, high-performance software with TypeScript, Java & modern web tech.
          Focused on clean code, CI/CD, and collaborative teams.
        </p>
        <nav class="hero__nav" aria-label="Page sections">
          <a href="#about" class="hero__nav-link">About</a>
          <a href="#experience" class="hero__nav-link">Experience</a>
          <a href="#projects" class="hero__nav-link">Projects</a>
          <a href="#skills" class="hero__nav-link">Skills</a>
          <a href="#contact" class="hero__nav-link">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .hero {
      background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 70%);
      padding: 5rem 1.5rem 4rem;
      border-bottom: 1px solid var(--color-border-subtle);
      position: relative;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(100%, 720px);
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
      opacity: 0.25;
    }
    .hero__inner {
      max-width: 720px;
      margin: 0 auto;
      text-align: center;
    }
    .hero__name {
      font-size: clamp(2.25rem, 5.5vw, 3.25rem);
      font-weight: 700;
      margin: 0 0 0.35rem;
      letter-spacing: -0.03em;
      color: var(--color-text);
      line-height: 1.15;
    }
    .hero__title {
      font-size: 1.2rem;
      color: var(--color-accent);
      margin: 0 0 1.25rem;
      font-weight: 500;
      letter-spacing: 0.02em;
    }
    .hero__tagline {
      color: var(--color-text-muted);
      max-width: 520px;
      margin: 0 auto 2.5rem;
      font-size: 1rem;
      line-height: 1.7;
    }
    .hero__nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }
    .hero__nav-link {
      display: inline-block;
      padding: 0.5rem 1rem;
      color: var(--color-text-muted);
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), background var(--transition-fast);
    }
    .hero__nav-link:hover {
      color: var(--color-accent);
      background: var(--color-accent-soft);
    }
    .hero__nav-link:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  `],
})
export class HeroSectionComponent {}
