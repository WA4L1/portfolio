import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  template: `
    <section id="experience" class="py-20 md:py-32 bg-dark">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">
            Trayectoria Profesional
          </p>
          <h2 class="section-title">
            Experiencia <span class="text-primary-400">Laboral</span>
          </h2>
          <p class="section-subtitle">
            Mi recorrido profesional en el desarrollo de software, 
            desde startups hasta proyectos empresariales.
          </p>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-dark-300"></div>

          @for (exp of experiences; track exp.company; let i = $index) {
            <div class="relative mb-12 last:mb-0">
              <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-3 h-3 
                          bg-primary-600 rounded-full z-10"></div>
              
              <div class="ml-8 md:ml-0" 
                   [class.md:pr-12]="i % 2 === 0"
                   [class.md:pl-12]="i % 2 !== 0"
                   [class.md:text-right]="i % 2 === 0"
                   [class.md:mr-auto]="i % 2 === 0"
                   [class.md:ml-auto]="i % 2 !== 0"
                   style="max-width: calc(50% - 1rem);">
                <div class="card p-6 text-left">
                  <div class="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-white">
                        {{ exp.role }}
                      </h3>
                      <p class="text-primary-400 font-medium">
                        {{ exp.company }}
                      </p>
                    </div>
                    <div class="flex flex-col items-end text-right">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium
                                   bg-primary-600/10 text-primary-400 border border-primary-600/20">
                        {{ exp.type }}
                      </span>
                      <span class="text-sm text-gray-500 mt-1">
                        {{ exp.period }}
                      </span>
                    </div>
                  </div>

                  <p class="text-gray-400 mb-4">
                    {{ exp.description }}
                  </p>

                  <ul class="space-y-2 mb-4">
                    @for (achievement of exp.achievements; track achievement) {
                      <li class="flex items-start text-sm text-gray-400">
                        <span class="text-primary-500 mr-2 mt-1">•</span>
                        {{ achievement }}
                      </li>
                    }
                  </ul>

                  <div class="flex flex-wrap gap-1.5">
                    @for (tech of exp.technologies; track tech) {
                      <span class="px-2 py-1 text-xs font-medium rounded
                                   bg-dark-200 text-gray-400 border border-dark-300">
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @media (max-width: 767px) {
      div[style*="max-width"] {
        max-width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  `]
})
export class ExperienceSectionComponent {
  experiences: Experience[] = [
    {
      company: 'Defontana',
      role: 'Desarrollador Fullstack',
      period: 'Oct 2022 – Actualidad',
      type: 'Fulltime',
      description: 'Desarrollo y mantenimiento de módulos para sistema ERP empresarial.',
      achievements: [
        'Desarrollo de módulos ERP: Onboarding, Encuestas, Sistema de Alertas y WMS',
        'Implementación de sistemas con A/B Testing para análisis de comportamiento de usuarios',
        'Homologación de vistas previa/impresión para mejora de UX en módulos documentales',
        'Ciclo completo: levantamiento de incidencias, testing, resolución y deploy a producción'
      ],
      technologies: ['Angular', '.NET Core', '.NET Framework', 'SQL Server', 'PostgreSQL']
    },
    {
      company: 'Dukal',
      role: 'Desarrollador Fullstack',
      period: 'Oct 2022 – Actualidad',
      type: 'Freelance',
      description: 'Múltiples proyectos de desarrollo web y sistemas para cliente del rubro automotriz.',
      achievements: [
        'E-commerce completo: catálogo con variaciones, pasarelas de pago y logística integrada',
        'Remodelación completa del sitio web institucional',
        'Cotizador de autos por patente: diseño UX e integración con API externa',
        'Simulador de créditos automotrices: implementación de UX y consumo de APIs financieras'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'REST APIs', 'WooCommerce', 'UI/UX']
    },
    {
      company: 'Alphatest',
      role: 'Desarrollador Fullstack',
      period: 'Feb 2022 – Sep 2023',
      type: 'Teletrabajo',
      description: 'Desarrollo a medida de sistemas ERP y arquitecturas modulares escalables.',
      achievements: [
        'Actualización y mantenimiento continuo de sistemas ERP según necesidades del cliente',
        'Desarrollo e integración de módulos web escalables',
        'Implementación de arquitecturas modulares con mejores prácticas'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      company: 'Universidad Católica del Norte',
      role: 'Desarrollador Fullstack',
      period: 'Dic 2021 – Sep 2022',
      type: 'Presencial',
      description: 'Desarrollo del Sistema de Prácticas Pre-Profesionales para la universidad.',
      achievements: [
        'Levantamiento de requerimientos y diseño conceptual del sistema completo',
        'Creación de mockups/prototipos UI y modelado de base de datos',
        'Desarrollo modular full-stack del sistema de inscripción y seguimiento de prácticas'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL']
    }
  ];
}
