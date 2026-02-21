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
            www.smash.rns-apps.dk →
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">POS – Point of Sale</h3>
          <p class="project__desc">
            Point-of-sale and management tool for padel venues; full-stack project showcasing
            MERN stack and end-to-end product delivery.
          </p>
          <a href="https://www.pos.rns-apps.dk" target="_blank" rel="noopener noreferrer" class="project__link">
            www.pos.rns-apps.dk →
          </a>
        </article>
        <article class="project">
          <h3 class="project__name">Profile / Small Programming Project</h3>
          <p class="project__desc">
            Personal profile and small programming demos; hosted on GitHub Pages.
          </p>
          <a href="https://olsen7351.github.io/Profile/" target="_blank" rel="noopener noreferrer" class="project__link">
            olsen7351.github.io/Profile/ →
          </a>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .projects { display: flex; flex-direction: column; gap: 1.5rem; }
    .project {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
    }
    .project__name { margin: 0 0 0.5rem; font-size: 1.1rem; font-weight: 600; }
    .project__desc {
      margin: 0 0 0.75rem;
      color: var(--color-text-muted);
      font-size: 0.95rem;
      line-height: 1.55;
    }
    .project__link { font-size: 0.9rem; font-family: var(--font-mono); }
  `],
})
export class ProjectsSectionComponent {}
