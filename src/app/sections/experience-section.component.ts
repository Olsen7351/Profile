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
            I engineer high-quality defense solutions where reliability and performance are at the center.
            I develop responsive Angular frontends and robust Kotlin backends, ensuring every line of code
            serves a clear, mission-critical purpose. Using Linux, Bash, and PowerShell I orchestrate
            complex system environments and streamline delivery through TeamCity pipelines. I apply
            foundational knowledge of Azure to support hosting and infrastructure in modern cloud-integrated workflows.
          </p>
          <span class="timeline__location">Aarhus, Denmark</span>
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
            Contributed to feature development and code quality in an agile, enterprise setting. Used
            version control and CI practices with TeamCity and Git; collaborated with the team to deliver
            reliable, maintainable code and built a strong foundation in defense-domain software engineering.
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
            A passion-driven company focused on elevating the Padel experience—we are Padel enthusiasts
            and developers who build software for the love of the sport. We operate as a hobby project
            with a professional mindset, focusing on value and simplicity: tools that connect players,
            simplify booking, and digitalize the Padel community. Our mission is to remove friction for
            players and clubs, experiment with sports tech, and write simple solutions that solve real problems on the court.
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
            I transitioned from a production role into Software Manufacturing, developing high-performance
            solutions with C# and .NET. Operating in an Agile framework, I used GitLab for version control
            and to streamline CI/CD workflows for manufacturing systems. My background as an operator
            gave me a unique advantage: I applied critical thinking to production challenges and ensured
            that every line of code directly improved manufacturing efficiency and system reliability.
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
          <p class="timeline__desc">
            Production operations in a manufacturing context; developed critical thinking and attention to
            process and quality—a foundation that later supported my move into software manufacturing and automation.
          </p>
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
            As a Sergeant in the Engineer Troops, I led teams in technical training and demolition. The role
            was built on structure, clear communication, and total accountability. I focused on making sure
            everyone worked as one unit to solve tough problems safely and effectively. I bring that same
            disciplined mindset and teamwork to software engineering—every project is built with care and strong logic.
          </p>
          <span class="timeline__location">Full-time</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Kunderådgiver</span>
            <span class="timeline__company">YouSee</span>
            <span class="timeline__date">Jan 2019 – Feb 2020</span>
          </div>
          <p class="timeline__desc">
            Customer advisory in telecommunications: supporting customers, explaining technical options, and
            resolving issues in a high-volume service setting. Strengthened communication skills and
            customer-focused problem-solving that I still use when clarifying requirements and collaborating with stakeholders.
          </p>
          <span class="timeline__location">Tranbjerg, Denmark</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Frontend-tekniker</span>
            <span class="timeline__company">Flying Superkids</span>
            <span class="timeline__date">Jul 2018 – Jan 2019</span>
          </div>
          <p class="timeline__desc">
            Front-end technical work for an educational and events company: building and maintaining
            web presence and digital tools that supported events and user experience. Early hands-on
            experience with web technologies and delivering value for end users.
          </p>
          <span class="timeline__location">Århus, Denmark</span>
          </div>
        </article>
        <article class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <div class="timeline__body">
          <div class="timeline__meta">
            <span class="timeline__role">Marketing</span>
            <span class="timeline__company">Flying Superkids</span>
            <span class="timeline__date">Feb 2016 – Jun 2018</span>
          </div>
          <p class="timeline__desc">
            Marketing and communications for an educational and events organisation: content, campaigns,
            and outreach. Developed an understanding of audience, messaging, and how products serve users—useful when defining features and talking to stakeholders in software projects.
          </p>
          <span class="timeline__location">Århus, Denmark</span>
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
