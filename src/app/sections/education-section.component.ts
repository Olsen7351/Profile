import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  standalone: true,
  template: `
    <section id="education" class="section">
      <h2 class="section__title">Education</h2>
      <div class="section__content timeline">
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Diplominginør, Softwareteknologi</span>
            <span class="timeline__company">VIA University College</span>
            <span class="timeline__date">2022 – 2025</span>
          </div>
          <p class="timeline__desc">
            Professional bachelor-level degree in software technology: software development, system design,
            and engineering practices. Gave me a solid foundation in problem-solving, full-stack development, and working in teams.
          </p>
          <span class="timeline__location">DK</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Hærens Sergent skole</span>
            <span class="timeline__date">2020 – 2021</span>
          </div>
          <p class="timeline__desc">
            Army sergeant training: leadership, structure, and operating under pressure. The discipline and
            teamwork from this period underpin how I approach projects and collaboration today.
          </p>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .timeline { position: relative; padding-left: 0; }
    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 2px;
      background: linear-gradient(180deg, var(--color-accent), var(--color-border));
      border-radius: 1px;
      opacity: 0.6;
    }
    .timeline__item {
      position: relative;
      padding: 1.5rem 0 1.5rem 1.5rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }
    .timeline__item:last-child { border-bottom: none; }
    .timeline__dot {
      position: absolute;
      left: -5px;
      top: 2rem;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-accent);
      box-shadow: 0 0 0 3px var(--color-bg);
    }
    .timeline__body { margin: 0; }
    .timeline__meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem 1rem; margin-bottom: 0.5rem; }
    .timeline__role { font-weight: 600; color: var(--color-text); font-size: 1rem; }
    .timeline__company { color: var(--color-accent); font-size: 0.9rem; }
    .timeline__date { color: var(--color-text-faint); font-size: 0.85rem; margin-left: auto; font-variant-numeric: tabular-nums; }
    .timeline__desc { margin: 0 0 0.4rem; color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.65; }
    .timeline__location { font-size: 0.8rem; color: var(--color-text-faint); }
  `],
})
export class EducationSectionComponent {}
