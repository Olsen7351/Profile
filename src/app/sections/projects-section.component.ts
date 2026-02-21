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
            Web app for the padel community, built for fun and real use. Focus on performance
            and a smooth user experience.
          </p>
          <a href="https://www.smash.rns-apps.dk" target="_blank" rel="noopener noreferrer" class="project__link">
            www.smash.rns-apps.dk
            <span class="project__arrow" aria-hidden="true">→</span>
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">POS – Point of Sale</h3>
          <p class="project__desc">
            Point-of-sale and management tool for padel venues; full-stack project showcasing
            MERN stack and end-to-end product delivery.
          </p>
          <a href="https://www.pos.rns-apps.dk" target="_blank" rel="noopener noreferrer" class="project__link">
            www.pos.rns-apps.dk
            <span class="project__arrow" aria-hidden="true">→</span>
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">Profile / Small Programming Project</h3>
          <p class="project__desc">
            Personal profile and small programming demos; hosted on GitHub Pages.
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
