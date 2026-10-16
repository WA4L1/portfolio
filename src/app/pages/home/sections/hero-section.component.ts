import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="relative min-h-screen flex items-center justify-center pt-16 bg-dark">
      <div class="absolute inset-0">
        <div class="absolute top-20 left-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">

          <div class="inline-flex items-center px-4 py-2 rounded-full 
                      bg-primary-600/10 border border-primary-600/20
                      text-primary-400 text-sm font-medium mb-8 animate-fade-in">
            <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Disponible para nuevos proyectos
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span class="text-white">Hola, soy </span>
            <span class="text-primary-400">Walter Sierra</span>
          </h1>

          <p class="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up" style="animation-delay: 0.1s;">
            <span class="text-primary-400 font-semibold">Fullstack Developer</span>
            <span class="mx-3 text-gray-600">|</span>
            <span class="text-gray-300 font-semibold">Cloud Specialist</span>
          </p>

          <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up" style="animation-delay: 0.2s;">
            +4 años de experiencia desarrollando soluciones con Angular, Node.js, .NET y AWS.
            Especializado en arquitecturas frontend escalables y servicios cloud.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style="animation-delay: 0.3s;">
            <a href="#contact" class="btn-primary w-full sm:w-auto">
              Contáctame
            </a>
            <a href="#experience" class="btn-secondary w-full sm:w-auto">
              Ver Experiencia
            </a>
          </div>

          <div class="mt-16 mb-24 animate-slide-up" style="animation-delay: 0.4s;">
            <p class="text-sm text-gray-500 mb-4 uppercase tracking-wider">Stack principal</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
              @for (tech of techStack; track tech) {
                <div class="px-4 py-2 bg-dark-100 rounded-lg border border-dark-300
                            text-sm font-medium text-gray-300">
                  {{ tech }}
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" class="flex flex-col items-center text-gray-500 hover:text-primary-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  `
})
export class HeroSectionComponent {
  techStack = ['Angular', 'TypeScript', 'Node.js', '.NET', 'AWS', 'PostgreSQL'];
}
