import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  template: `
    <section id="experience" class="section">
      <h2 class="section__title">Experience</h2>
      <div class="section__content timeline">
        <article class="timeline__item">
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
        </article>
        <article class="timeline__item">
          <div class="timeline__meta">
            <span class="timeline__role">Junior Software Developer</span>
            <span class="timeline__company">Systematic</span>
            <span class="timeline__date">Aug 2024 – Feb 2026</span>
          </div>
          <p class="timeline__desc">
            Contributed to feature development and code quality; used version control and CI practices in a structured, agile setting.
          </p>
          <span class="timeline__location">Aarhus, Denmark</span>
        </article>
        <article class="timeline__item">
          <div class="timeline__meta">
            <span class="timeline__role">Co-owner & Developer</span>
            <span class="timeline__company">RNS Apps</span>
            <span class="timeline__date">Jan 2026 – Present</span>
          </div>
          <p class="timeline__desc">
            Passion-driven products for the padel community. Full-stack with MERN (MongoDB, Express, React, Node.js); building and shipping web apps from idea to production.
          </p>
          <span class="timeline__location">Self-employed</span>
        </article>
        <article class="timeline__item">
          <div class="timeline__meta">
            <span class="timeline__role">Student Assistant – Software Manufacturing</span>
            <span class="timeline__company">Kamstrup</span>
            <span class="timeline__date">Jun 2023 – Aug 2024</span>
          </div>
          <p class="timeline__desc">
            DevOps and migration of legacy projects to GitLab; pipeline templates, automation; daily work in C# and Java.
          </p>
          <span class="timeline__location">Skanderborg, Denmark</span>
        </article>
        <article class="timeline__item">
          <div class="timeline__meta">
            <span class="timeline__role">Operator</span>
            <span class="timeline__company">Kamstrup</span>
            <span class="timeline__date">Oct 2022 – Jun 2023</span>
          </div>
          <p class="timeline__desc">Operations and critical thinking in a manufacturing context.</p>
          <span class="timeline__location">Skanderborg, Denmark</span>
        </article>
        <article class="timeline__item">
          <div class="timeline__meta">
            <span class="timeline__role">Sergeant</span>
            <span class="timeline__company">Forsvaret (Danish Armed Forces)</span>
            <span class="timeline__date">Feb 2020 – Aug 2022</span>
          </div>
          <p class="timeline__desc">
            Leadership, teamwork, escalation, and clear communication; executing tasks correctly under pressure.
          </p>
          <span class="timeline__location">Full-time</span>
        </article>
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
    .timeline__desc strong { color: var(--color-text); }
    .timeline__location { font-size: 0.85rem; color: var(--color-text-muted); opacity: 0.9; }
  `],
})
export class ExperienceSectionComponent {}
