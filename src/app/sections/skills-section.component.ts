import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="section">
      <h2 class="section__title">Skills</h2>
      <div class="section__content skills">
        <p class="skills__intro">Relevant to high-scale web and backend roles (e.g. landing pages, APIs, platform services):</p>
        <div class="skills__grid">
          <div class="skills__group"><span class="skills__label">Languages</span><span class="skills__tags">TypeScript, JavaScript, Java, C#, HTML/CSS</span></div>
          <div class="skills__group"><span class="skills__label">Frontend</span><span class="skills__tags">React, Angular, Node.js</span></div>
          <div class="skills__group"><span class="skills__label">Backend & APIs</span><span class="skills__tags">RESTful services, server-side development</span></div>
          <div class="skills__group"><span class="skills__label">Data</span><span class="skills__tags">PostgreSQL, data modeling</span></div>
          <div class="skills__group"><span class="skills__label">DevOps & CI/CD</span><span class="skills__tags">Git, GitLab, TeamCity, Docker, Kubernetes, pipeline design</span></div>
          <div class="skills__group"><span class="skills__label">Practices</span><span class="skills__tags">Agile/Scrum, unit & integration testing, clean code, code review</span></div>
          <div class="skills__group"><span class="skills__label">Tools</span><span class="skills__tags">AI-assisted development (used responsibly)</span></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills__intro { color: var(--color-text-muted); margin: 0 0 1.25rem; font-size: 0.95rem; line-height: 1.65; }
    .skills__grid { display: flex; flex-direction: column; gap: 1rem; }
    .skills__group { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem 0.75rem; }
    .skills__label { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-accent); min-width: 6.5rem; }
    .skills__tags { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; }
  `],
})
export class SkillsSectionComponent {}
