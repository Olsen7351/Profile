import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <h2 class="section__title">{{ t().contact.title }}</h2>
      <div class="section__content contact">
        <p>
          <strong>{{ t().contact.name }}</strong><br />
          {{ t().contact.location }}
        </p>
        <ul class="contact__links">
          <li><a [href]="'mailto:' + t().contact.email">{{ t().contact.email }}</a></li>
          <li><a [href]="t().contact.phoneHref">{{ t().contact.phone }}</a></li>
        </ul>
        <p class="contact__note">{{ t().contact.note }}</p>
      </div>
    </section>
  `,
  styles: [`
    .contact p { margin: 0 0 0.75rem; color: var(--color-text-muted); font-size: 0.95rem; }
    .contact strong { color: var(--color-text); }
    .contact__links {
      list-style: none;
      margin: 0 0 1rem;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .contact__links a { font-family: var(--font-mono); font-size: 0.9rem; }
    .contact__note {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      opacity: 0.9;
      max-width: 560px;
    }
  `],
})
export class ContactSectionComponent {
  protected readonly t = inject(LanguageService).t;
}
