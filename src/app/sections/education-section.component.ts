import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-education-section',
  standalone: true,
  template: `
    <section id="education" class="section">
      <h2 class="section__title">{{ t().education.title }}</h2>
      <div class="section__content timeline">
        @for (item of t().education.items; track item.role + item.date) {
          <article class="timeline__item">
            <div class="timeline__meta">
              <span class="timeline__role">{{ item.role }}</span>
              @if (item.company) {
                <span class="timeline__company">{{ item.company }}</span>
              }
              <span class="timeline__date">{{ item.date }}</span>
            </div>
            <p class="timeline__desc">{{ item.desc }}</p>
            @if (item.location) {
              <span class="timeline__location">{{ item.location }}</span>
            }
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .timeline__item { padding: 1.25rem 0; border-bottom: 1px solid var(--color-border); }
    .timeline__item:last-child { border-bottom: none; }
    .timeline__meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem 1rem; margin-bottom: 0.5rem; }
    .timeline__role { font-weight: 600; color: var(--color-text); }
    .timeline__company { color: var(--color-accent); font-size: 0.95rem; }
    .timeline__date { color: var(--color-text-muted); font-size: 0.9rem; margin-left: auto; }
    .timeline__desc { margin: 0 0 0.35rem; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; }
    .timeline__location { font-size: 0.85rem; color: var(--color-text-muted); opacity: 0.9; }
  `],
})
export class EducationSectionComponent {
  protected readonly t = inject(LanguageService).t;
}
