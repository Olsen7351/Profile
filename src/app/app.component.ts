import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sections/hero-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { SkillsSectionComponent } from './sections/skills-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <app-hero-section />
    <main>
      <app-about-section />
      <app-experience-section />
      <app-projects-section />
      <app-skills-section />
      <app-contact-section />
    </main>
  `,
  styles: [
    `
      main {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5rem 4rem;
      }
    `,
  ],
})
export class AppComponent {}
