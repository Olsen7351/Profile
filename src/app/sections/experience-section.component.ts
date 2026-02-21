import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  template: `
    <section id="experience" class="section">
      <h2 class="section__title">Experience</h2>
      <div class="section__content timeline">
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Software Engineer</span>
            <span class="timeline__company">Systematic</span>
            <span class="timeline__date">Feb 2026 – Present</span>
          </div>
          <p class="timeline__desc">
            Building and maintaining high-quality software in an enterprise environment.
            Working with TeamCity, Git, and modern tooling; collaborating with the team to deliver reliable, maintainable code.
          </p>
          <span class="timeline__location">Aarhus, Denmark · On-site</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Junior Software Developer</span>
            <span class="timeline__company">Systematic</span>
            <span class="timeline__date">Aug 2024 – Feb 2026</span>
          </div>
          <p class="timeline__desc">
            Contributed to feature development and code quality; used version control and CI practices in a structured, agile setting.
          </p>
          <span class="timeline__location">Aarhus, Denmark</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Co-owner & Developer</span>
            <span class="timeline__company">RNS Apps</span>
            <span class="timeline__date">Jan 2026 – Present</span>
          </div>
          <p class="timeline__desc">
            Passion-driven products for the padel community. Full-stack with MERN (MongoDB, Express, React, Node.js); building and shipping web apps from idea to production.
          </p>
          <span class="timeline__location">Self-employed</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Student Assistant – Software Manufacturing</span>
            <span class="timeline__company">Kamstrup</span>
            <span class="timeline__date">Jun 2023 – Aug 2024</span>
          </div>
          <p class="timeline__desc">
            DevOps and migration of legacy projects to GitLab; pipeline templates, automation; daily work in C# and Java.
          </p>
          <span class="timeline__location">Skanderborg, Denmark</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Operator</span>
            <span class="timeline__company">Kamstrup</span>
            <span class="timeline__date">Oct 2022 – Jun 2023</span>
          </div>
          <p class="timeline__desc">Operations and critical thinking in a manufacturing context.</p>
          <span class="timeline__location">Skanderborg, Denmark</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Sergeant</span>
            <span class="timeline__company">Forsvaret (Danish Armed Forces)</span>
            <span class="timeline__date">Feb 2020 – Aug 2022</span>
          </div>
          <p class="timeline__desc">
            Leadership, teamwork, escalation, and clear communication; executing tasks correctly under pressure.
          </p>
          <span class="timeline__location">Full-time</span>
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
    .timeline__desc strong { color: var(--color-text-secondary); }
    .timeline__location { font-size: 0.8rem; color: var(--color-text-faint); }
  `],
})
export class ExperienceSectionComponent {}
