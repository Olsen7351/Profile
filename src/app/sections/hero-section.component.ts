import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero__inner">
        <h1 class="hero__name">Jens Møller Olsen</h1>
        <p class="hero__title">Software Engineer</p>
        <p class="hero__tagline">
          Building scalable, high-performance software with TypeScript, Java & modern web tech.
          Focused on clean code, CI/CD, and collaborative teams.
        </p>
        <nav class="hero__nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
      padding: 4rem 1.5rem 3rem;
      border-bottom: 1px solid var(--color-border);
    }
    .hero__inner {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
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
export class HeroSectionComponent {}
