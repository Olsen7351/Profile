import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <h2 class="section__title">Contact</h2>
      <div class="section__content contact">
        <p>
          <strong>Jens Møller Olsen</strong><br />
          Marius Holst Gade 7, 3.TH · Denmark
        </p>
        <ul class="contact__links">
          <li><a href="mailto:olsen7351@gmail.com">olsen7351&#64;gmail.com</a></li>
          <li><a href="tel:+4521125950">+45 21 12 59 50</a></li>
          <li><a href="https://www.linkedin.com/in/jens-olsen-19b2aa222/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <p class="contact__note">
          Open to roles in software development, including positions like Software Development
          Engineer I in high-scale, product-focused teams (e.g. travel & landing platforms).
        </p>
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
export class ContactSectionComponent {}
