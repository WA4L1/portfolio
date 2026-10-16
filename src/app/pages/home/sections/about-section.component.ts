import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="about" class="py-20 md:py-32 bg-dark">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div class="relative">
            <div class="card p-8 md:p-10">
              <div class="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-xl 
                          bg-primary-600 flex items-center justify-center 
                          text-white text-5xl md:text-6xl font-bold">
                WS
              </div>
              
              <div class="text-center">
                <h3 class="text-xl font-semibold text-white mb-2">
                  Walter Ezequiel René Sierra Vega
                </h3>
                <p class="text-primary-400 font-medium mb-4">
                  Ingeniero en Computación e Informática
                </p>
                
                <div class="space-y-2 text-sm text-gray-400">
                  <p>Santiago, Chile</p>
                  <p>Español (Nativo) | Inglés (Intermedio-Avanzado)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">
              Sobre mí
            </p>
            
            <h2 class="section-title">
              Desarrollador apasionado por crear
              <span class="text-primary-400">soluciones digitales</span>
            </h2>
            
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Soy un <strong class="text-white">Ingeniero en Computación e Informática</strong> 
                con más de 4 años de experiencia en el desarrollo de software. Mi enfoque está en crear 
                aplicaciones web modernas, escalables y de alto rendimiento.
              </p>
              <p>
                Me especializo en <strong class="text-white">arquitecturas frontend con Angular</strong>, 
                desarrollo backend robusto con Node.js y .NET, e implementación de soluciones en la nube con AWS. 
                Mi experiencia abarca desde sistemas ERP hasta plataformas e-commerce.
              </p>
              <p>
                Creo en el código limpio, las metodologías ágiles y la entrega continua de valor. 
                Mi certificación <span class="text-primary-400">AWS Cloud Practitioner</span> respalda mi conocimiento en servicios cloud.
              </p>
            </div>

            <div class="grid grid-cols-3 gap-6 mt-10">
              @for (stat of stats; track stat.label) {
                <div class="text-center p-4 rounded-lg bg-dark-100 border border-dark-300">
                  <div class="text-3xl md:text-4xl font-bold text-primary-400 mb-1">
                    {{ stat.value }}
                  </div>
                  <div class="text-xs text-gray-500 uppercase tracking-wider">
                    {{ stat.label }}
                  </div>
                </div>
              }
            </div>

            <div class="mt-10 flex flex-wrap gap-4">
              <a href="#contact" class="btn-primary">
                Hablemos
              </a>
              <a href="/assets/cv-walter-sierra.pdf" download class="btn-secondary">
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutSectionComponent {
  stats = [
    { value: '+4', label: 'Años Exp.' },
    { value: '+10', label: 'Proyectos' },
    { value: '1', label: 'Cert. AWS' }
  ];
}
