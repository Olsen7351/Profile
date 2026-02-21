import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="about" class="section">
      <h2 class="section__title">About</h2>
      <div class="section__content about">
        <p>
          I'm a software engineer with a passion for building reliable, scalable applications
          and improving developer experience through automation and clear design. I thrive when
          finishing tasks well before moving on to the next, and I enjoy working in teams where
          we co-develop solutions and share ownership.
        </p>
        <p>
          My experience spans <strong>Java</strong>, <strong>C#</strong>, <strong>TypeScript</strong>,
          and modern web (HTML, CSS, JavaScript, React, Node.js), plus <strong>PostgreSQL</strong>,
          <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>CI/CD</strong> (GitLab, TeamCity).
          I'm comfortable with RESTful and GraphQL-style APIs, unit and integration testing, and
          using AI-assisted tools responsibly to speed up development while keeping code quality high.
        </p>
        <p>
          I hold a <strong>Professionsbachelor in Software Engineering</strong> from VIA Horsens
          and have worked in both product teams (Systematic) and my own side projects (RNS Apps).
          Outside work I enjoy padel, cycling, running, and OCR races.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .about p {
      margin: 0 0 1.15rem;
      color: var(--color-text-muted);
      font-size: 0.9875rem;
      line-height: 1.7;
    }
    .about p:first-child { font-size: 1.02rem; color: var(--color-text-secondary); }
    .about p:last-child { margin-bottom: 0; }
    .about strong { color: var(--color-text); }
  `],
})
export class AboutSectionComponent {}
