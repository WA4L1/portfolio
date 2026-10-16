import { Component, signal, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="headerClasses()">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          
          <a href="#" class="flex items-center space-x-2">
            <div class="w-10 h-10 rounded-lg bg-primary-600
                        flex items-center justify-center text-white font-bold text-lg">
              WS
            </div>
            <span class="hidden sm:block font-semibold text-white">
              Walter Sierra
            </span>
          </a>

          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="nav-link">Sobre mí</a>
            <a href="#skills" class="nav-link">Habilidades</a>
            <a href="#experience" class="nav-link">Experiencia</a>
            <a href="#certifications" class="nav-link">Certificaciones</a>
            <a href="#contact" class="nav-link">Contacto</a>
          </div>

          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-lg bg-dark-200 text-gray-400 hover:text-white transition-colors"
            aria-label="Menú">
            @if (!isMobileMenuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </button>
        </div>

        @if (isMobileMenuOpen()) {
          <div class="md:hidden py-4 border-t border-dark-300 animate-slide-down">
            <div class="flex flex-col space-y-3">
              <a href="#about" (click)="closeMobileMenu()" class="nav-link py-2">Sobre mí</a>
              <a href="#skills" (click)="closeMobileMenu()" class="nav-link py-2">Habilidades</a>
              <a href="#experience" (click)="closeMobileMenu()" class="nav-link py-2">Experiencia</a>
              <a href="#certifications" (click)="closeMobileMenu()" class="nav-link py-2">Certificaciones</a>
              <a href="#contact" (click)="closeMobileMenu()" class="nav-link py-2">Contacto</a>
            </div>
          </div>
        }
      </nav>
    </header>
  `
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  headerClasses = computed(() => {
    if (this.isScrolled()) {
      return 'bg-dark/95 backdrop-blur-sm border-b border-dark-300';
    }
    return 'bg-transparent';
  });

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
