import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="about" class="section">
      <h2 class="section__title">{{ t().about.title }}</h2>
      <div class="section__content about">
        <p>{{ t().about.p1 }}</p>
        <p [innerHTML]="t().about.p2"></p>
        <p>{{ t().about.p3 }}</p>
      </div>
    </section>
  `,
  styles: [`
    .about p {
      margin: 0 0 1rem;
      color: var(--color-text-muted);
    }
    .about p:last-child { margin-bottom: 0; }
    .about strong { color: var(--color-text); }
  `],
})
export class AboutSectionComponent {
  protected readonly t = inject(LanguageService).t;
}
