import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <h2 class="section__title">Contact</h2>
      <div class="section__content contact">
        <div class="contact__block">
          <p class="contact__name">Jens Møller Olsen</p>
          <p class="contact__address">Marius Holst Gade 7, 3.TH · Denmark</p>
        </div>
        <ul class="contact__links" aria-label="Contact links">
          <li>
            <a href="mailto:olsen7351@gmail.com" class="contact__link contact__link--primary">
              olsen7351&#64;gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+4521125950" class="contact__link">+45 21 12 59 50</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jens-olsen-19b2aa222/" target="_blank" rel="noopener noreferrer" class="contact__link">LinkedIn</a>
          </li>
        </ul>
        <p class="contact__note">
          Open to roles in software development, including positions like Software Development
          Engineer I in high-scale, product-focused teams (e.g. travel & landing platforms).
        </p>
      </div>
    </section>
  `,
  styles: [`
    .contact__block { margin-bottom: 1.25rem; }
    .contact__name {
      margin: 0 0 0.25rem;
      font-weight: 600;
      color: var(--color-text);
      font-size: 1rem;
    }
    .contact__address {
      margin: 0;
      color: var(--color-text-muted);
      font-size: 0.95rem;
    }
    .contact__links {
      list-style: none;
      margin: 0 0 1.5rem;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .contact__link {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 0.75rem;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      border-radius: var(--radius-sm);
      transition: background var(--transition-fast), color var(--transition-fast);
    }
    .contact__link:hover {
      background: var(--color-accent-soft);
      color: var(--color-accent-hover);
    }
    .contact__link--primary {
      background: var(--color-accent-soft);
      color: var(--color-accent);
      font-weight: 500;
    }
    .contact__link--primary:hover {
      background: rgba(34, 211, 238, 0.2);
      color: var(--color-accent-hover);
    }
    .contact__note {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.65;
      max-width: 520px;
      margin: 0;
    }
  `],
})
export class ContactSectionComponent {}
