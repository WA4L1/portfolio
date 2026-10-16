import { Component } from '@angular/core';

interface SkillCategory {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section id="skills" class="py-20 md:py-32 bg-dark-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">
            Stack Técnico
          </p>
          <h2 class="section-title">
            Habilidades y <span class="text-primary-400">Tecnologías</span>
          </h2>
          <p class="section-subtitle">
            Mi stack tecnológico abarca desde el frontend hasta la nube, 
            permitiéndome construir soluciones completas y escalables.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (category of skillCategories; track category.name) {
            <div class="card p-6">
              <h3 class="text-lg font-semibold text-white mb-4">
                {{ category.name }}
              </h3>
              
              <div class="flex flex-wrap gap-2">
                @for (skill of category.skills; track skill) {
                  <span class="skill-badge">{{ skill }}</span>
                }
              </div>
            </div>
          }
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (feature of features; track feature.title) {
            <div class="text-center p-6">
              <h4 class="font-semibold text-white mb-2">
                {{ feature.title }}
              </h4>
              <p class="text-sm text-gray-500">
                {{ feature.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'UI/UX']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'C#', '.NET Core', '.NET Framework', 'RESTful APIs', 'PHP']
    },
    {
      name: 'Bases de Datos',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS DynamoDB', 'SQL']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS (Certified)', 'Lambda', 'S3', 'CodeBuild', 'DynamoDB', 'Well-Architected']
    },
    {
      name: 'Herramientas',
      skills: ['Git', 'Bitbucket', 'SourceTree', 'Jira', 'FTP', 'WordPress']
    },
    {
      name: 'Metodologías',
      skills: ['Scrum', 'Trabajo en Equipo', 'Levantamiento de Requerimientos', 'A/B Testing']
    }
  ];

  features = [
    {
      title: 'Código Limpio',
      description: 'Escribo código mantenible, documentado y siguiendo las mejores prácticas.'
    },
    {
      title: 'Metodologías Ágiles',
      description: 'Experiencia en Scrum para entregas iterativas y colaboración efectiva.'
    },
    {
      title: 'Orientado a Resultados',
      description: 'Enfocado en entregar valor de negocio y soluciones que impacten.'
    }
  ];
}
