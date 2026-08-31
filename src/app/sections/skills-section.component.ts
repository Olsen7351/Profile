import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="section">
      <h2 class="section__title">{{ t().skills.title }}</h2>
      <div class="section__content skills">
        <p class="skills__intro">{{ t().skills.intro }}</p>
        <ul class="skills__list">
          @for (skill of t().skills.items; track skill.label) {
            <li><strong>{{ skill.label }}:</strong> {{ skill.value }}</li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: [`
    .skills__intro { color: var(--color-text-muted); margin: 0 0 1rem; font-size: 0.95rem; }
    .skills__list { margin: 0; padding-left: 1.25rem; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.8; }
    .skills__list strong { color: var(--color-text); }
  `],
})
export class SkillsSectionComponent {
  protected readonly t = inject(LanguageService).t;
}
