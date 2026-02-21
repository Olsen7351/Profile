import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="section">
      <h2 class="section__title">Skills</h2>
      <div class="section__content skills">
        <p class="skills__intro">Relevant to high-scale web and backend roles (e.g. landing pages, APIs, platform services):</p>
        <ul class="skills__list">
          <li><strong>Languages:</strong> TypeScript, JavaScript, Java, C#, HTML/CSS</li>
          <li><strong>Frontend:</strong> React, Angular, Node.js</li>
          <li><strong>Backend & APIs:</strong> RESTful services, server-side development</li>
          <li><strong>Data:</strong> PostgreSQL, data modeling</li>
          <li><strong>DevOps & CI/CD:</strong> Git, GitLab, TeamCity, Docker, Kubernetes, pipeline design</li>
          <li><strong>Practices:</strong> Agile/Scrum, unit & integration testing, clean code, code review</li>
          <li><strong>Tools:</strong> AI-assisted development (used responsibly to refine and debug code)</li>
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
export class SkillsSectionComponent {}
