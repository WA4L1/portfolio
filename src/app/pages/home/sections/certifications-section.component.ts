import { Component } from '@angular/core';

interface Certification {
  name: string;
  issuer: string;
  description: string;
  official?: boolean;
}

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  template: `
    <section id="certifications" class="py-20 md:py-32 bg-dark-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">
            Formación Continua
          </p>
          <h2 class="section-title">
            Certificaciones y <span class="text-primary-400">Educación</span>
          </h2>
          <p class="section-subtitle">
            Comprometido con el aprendizaje continuo y la actualización 
            en las últimas tecnologías.
          </p>
        </div>

        <div class="max-w-3xl mx-auto mb-12">
          <div class="card p-8">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 rounded-lg bg-primary-600 flex items-center justify-center 
                          text-white text-2xl font-bold flex-shrink-0">
                UCN
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-1">
                  Ingeniería en Computación e Informática
                </h3>
                <p class="text-primary-400 font-medium mb-2">
                  Universidad Católica del Norte
                </p>
                <p class="text-gray-500 text-sm">
                  Antofagasta, Chile
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          @for (cert of certifications; track cert.name) {
            <div class="card p-6">
              <div>
                @if (cert.official) {
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium
                               bg-primary-600/10 text-primary-400 border border-primary-600/20 mb-3">
                    Certificado Oficial
                  </span>
                }
                <h3 class="font-semibold text-white mb-1 leading-tight">
                  {{ cert.name }}
                </h3>
                <p class="text-sm text-primary-400 font-medium mb-2">
                  {{ cert.issuer }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ cert.description }}
                </p>
              </div>
            </div>
          }
        </div>

        <div class="mt-16 text-center">
          <p class="text-gray-500 mb-6">
            Áreas de interés para futuras certificaciones
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            @for (topic of learningTopics; track topic) {
              <span class="px-4 py-2 rounded-lg bg-dark-100 border border-dark-300
                           text-sm text-gray-400">
                {{ topic }}
              </span>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class CertificationsSectionComponent {
  certifications: Certification[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description: 'Conocimientos fundamentales en servicios AWS y arquitectura cloud.',
      official: true
    },
    {
      name: 'Well-Architected Best Practices',
      issuer: 'Amazon Web Services',
      description: 'Mejores prácticas para diseñar arquitecturas seguras y eficientes.',
      official: true
    },
    {
      name: 'Angular: De Cero a Experto',
      issuer: 'Udemy',
      description: 'Desarrollo completo de aplicaciones web con Angular y TypeScript.'
    }
  ];

  learningTopics = [
    'AWS Solutions Architect',
    'Seguridad en la Nube',
    'Data Analytics',
    'Inteligencia Artificial',
    'Docker & Kubernetes'
  ];
}
