import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { SkillsSectionComponent } from './sections/skills-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { CertificationsSectionComponent } from './sections/certifications-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    CertificationsSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <app-hero-section />
    <app-about-section />
    <app-skills-section />
    <app-experience-section />
    <app-certifications-section />
    <app-contact-section />
  `
})
export class HomeComponent {}
