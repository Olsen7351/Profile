import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  template: `
    <section id="projects" class="section">
      <h2 class="section__title">{{ t().projects.title }}</h2>
      <div class="section__content projects">
        @for (project of t().projects.items; track project.name) {
          <article class="project">
            <h3 class="project__name">{{ project.name }}</h3>
            <p class="project__desc">{{ project.desc }}</p>
            @if (project.url) {
              <a [href]="project.url" target="_blank" rel="noopener noreferrer" class="project__link">
                {{ project.urlLabel }} →
              </a>
            }
          </article>
        }
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
    @media print {
      .projects { gap: 0.75rem; }
      .project { break-inside: avoid; }
    }
  `],
})
export class ProjectsSectionComponent {
  protected readonly t = inject(LanguageService).t;
}
