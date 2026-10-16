import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 md:py-32 bg-dark">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2">
            Contacto
          </p>
          <h2 class="section-title">
            Ponte en <span class="text-primary-400">Contacto</span>
          </h2>
          <p class="section-subtitle">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. 
            Contáctame y conversemos.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div class="space-y-4">
                @for (info of contactInfo; track info.label) {
                  <a [href]="info.href" 
                     class="flex items-center p-4 rounded-lg bg-dark-100 border border-dark-300
                            hover:border-primary-600/50 transition-colors"
                     [target]="info.external ? '_blank' : '_self'"
                     [rel]="info.external ? 'noopener noreferrer' : ''">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-4
                                bg-dark-200 text-primary-400">
                      <span [innerHTML]="info.icon"></span>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">{{ info.label }}</p>
                      <p class="font-medium text-gray-300">
                        {{ info.value }}
                      </p>
                    </div>
                  </a>
                }
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-4">
                Redes Sociales
              </h3>
              <div class="flex gap-3">
                @for (social of socialLinks; track social.name) {
                  <a [href]="social.url" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     class="w-10 h-10 rounded-lg flex items-center justify-center
                            bg-dark-100 border border-dark-300
                            text-gray-400 hover:text-primary-400 hover:border-primary-600/50
                            transition-colors"
                     [attr.aria-label]="social.name">
                    <span [innerHTML]="social.icon"></span>
                  </a>
                }
              </div>
            </div>

            <div class="p-6 rounded-lg bg-primary-600/10 border border-primary-600/20">
              <div class="flex items-center mb-2">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                <span class="font-medium text-primary-400">Disponible para proyectos</span>
              </div>
              <p class="text-gray-400 text-sm">
                Actualmente acepto proyectos freelance y oportunidades de colaboración.
              </p>
            </div>
          </div>

          <div class="card p-8">
            <h3 class="text-xl font-semibold text-white mb-6">
              Envíame un mensaje
            </h3>
            
            <form (ngSubmit)="onSubmit()" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-400 mb-2">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="w-full px-4 py-3 rounded-lg 
                           bg-dark-200 border border-dark-300
                           text-white placeholder-gray-600
                           focus:border-primary-600 focus:outline-none
                           transition-colors"
                    placeholder="Tu nombre">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    class="w-full px-4 py-3 rounded-lg 
                           bg-dark-200 border border-dark-300
                           text-white placeholder-gray-600
                           focus:border-primary-600 focus:outline-none
                           transition-colors"
                    placeholder="tu&#64;email.com">
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  [(ngModel)]="formData.subject"
                  required
                  class="w-full px-4 py-3 rounded-lg 
                         bg-dark-200 border border-dark-300
                         text-white placeholder-gray-600
                         focus:border-primary-600 focus:outline-none
                         transition-colors"
                  placeholder="¿En qué puedo ayudarte?">
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg 
                         bg-dark-200 border border-dark-300
                         text-white placeholder-gray-600
                         focus:border-primary-600 focus:outline-none
                         transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>

              <button 
                type="submit" 
                class="btn-primary w-full"
                [disabled]="isSubmitting()">
                @if (isSubmitting()) {
                  Enviando...
                } @else {
                  Enviar Mensaje
                }
              </button>
            </form>

            @if (showSuccessMessage()) {
              <div class="mt-4 p-4 rounded-lg bg-primary-600/10 border border-primary-600/20
                          text-primary-400 text-sm animate-fade-in">
                Mensaje enviado correctamente. Te responderé pronto.
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactSectionComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal(false);
  showSuccessMessage = signal(false);

  contactInfo = [
    {
      label: 'Email',
      value: 'walter.sierra.vega@gmail.com',
      href: 'mailto:walter.sierra.vega@gmail.com',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
      external: false
    },
    {
      label: 'Teléfono',
      value: '+56 9 3198 9679',
      href: 'tel:+56931989679',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>',
      external: false
    },
    {
      label: 'Ubicación',
      value: 'Santiago, Chile',
      href: 'https://maps.google.com/?q=Santiago,Chile',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
      external: true
    }
  ];

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/walter-sierra',
      icon: '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/walter-sierra',
      icon: '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    }
  ];

  onSubmit(): void {
    this.isSubmitting.set(true);
    
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccessMessage.set(true);
      
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.showSuccessMessage.set(false);
      }, 5000);
    }, 1500);
  }
}
