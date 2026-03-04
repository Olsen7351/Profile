import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  template: `
    <section id="projects" class="section">
      <h2 class="section__title">Projects</h2>
      <div class="section__content projects">
        <article class="project">
          <h3 class="project__name">Smash – Padel</h3>
          <p class="project__desc">
            Web app for the padel community, built for real use: connecting players, simplifying booking,
            and improving the experience for clubs and users. Demonstrates full-stack delivery, performance
            focus, and building products that users actually use.
          </p>
          <a href="https://www.smash.rns-apps.dk" target="_blank" rel="noopener noreferrer" class="project__link">
            www.smash.rns-apps.dk
            <span class="project__arrow" aria-hidden="true">→</span>
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">POS – Point of Sale</h3>
          <p class="project__desc">
            Point-of-sale and venue management tool for padel clubs: full-stack MERN (MongoDB, Express,
            React, Node.js) from idea to production. Shows I can own a product end-to-end—requirements,
            design, implementation, and deployment—and deliver value for a specific domain.
          </p>
          <a href="https://www.pos.rns-apps.dk" target="_blank" rel="noopener noreferrer" class="project__link">
            www.pos.rns-apps.dk
            <span class="project__arrow" aria-hidden="true">→</span>
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">Profile / Small Programming Project</h3>
          <p class="project__desc">
            This CV site and small programming demos; built with Angular and deployed on GitHub Pages.
            Illustrates ability to ship a modern front-end, maintain a clear structure, and keep content and tooling up to date.
          </p>
          <a href="https://olsen7351.github.io/Profile/" target="_blank" rel="noopener noreferrer" class="project__link">
            olsen7351.github.io/Profile/
            <span class="project__arrow" aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .projects { display: flex; flex-direction: column; gap: 1.25rem; }
    .project {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 1.35rem 1.5rem;
      transition: border-color var(--transition-smooth), background var(--transition-smooth), box-shadow var(--transition-smooth);
    }
    .project:hover {
      border-color: var(--color-border);
      background: var(--color-surface-elevated);
      box-shadow: var(--shadow-md);
    }
    .project__name {
      margin: 0 0 0.5rem;
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--color-text);
    }
    .project__desc {
      margin: 0 0 1rem;
      color: var(--color-text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .project__link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.9rem;
      font-family: var(--font-mono);
      font-weight: 500;
    }
    .project__arrow {
      opacity: 0.7;
      transition: transform var(--transition-fast);
    }
    .project__link:hover .project__arrow {
      transform: translateX(2px);
    }
  `],
})
export class ProjectsSectionComponent {}
