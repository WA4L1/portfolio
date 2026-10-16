# 💼 Portafolio - Walter Sierra

Portafolio profesional desarrollado con Angular 18, TypeScript y Tailwind CSS.

![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Características

- 🎨 **Diseño Moderno**: UI limpia y profesional con Tailwind CSS
- 🌓 **Modo Oscuro/Claro**: Toggle de tema con persistencia en localStorage
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Alto Rendimiento**: Angular 18 con standalone components
- 🎭 **Animaciones**: Transiciones suaves y efectos visuales atractivos
- ♿ **Accesible**: Siguiendo mejores prácticas de accesibilidad

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/walter-sierra/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El servidor estará disponible en `http://localhost:4200`

### Build de Producción

```bash
npm run build
```

Los archivos se generarán en `dist/portfolio/`

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   └── home/
│   │   │       └── sections/
│   │   │           ├── hero-section.component.ts
│   │   │           ├── about-section.component.ts
│   │   │           ├── skills-section.component.ts
│   │   │           ├── experience-section.component.ts
│   │   │           ├── certifications-section.component.ts
│   │   │           └── contact-section.component.ts
│   │   └── services/
│   │       └── theme.service.ts
│   ├── assets/
│   ├── styles.scss
│   └── index.html
├── tailwind.config.js
├── angular.json
└── package.json
```

## 🛠️ Tecnologías

- **Framework**: Angular 18 (Standalone Components)
- **Lenguaje**: TypeScript 5.4
- **Estilos**: Tailwind CSS 3.4
- **Animaciones**: CSS + Angular Animations
- **Build**: Angular CLI

## 📝 Personalización

### Modificar Información Personal

La información del portafolio está en los componentes de cada sección:

- **Hero**: `src/app/pages/home/sections/hero-section.component.ts`
- **Sobre mí**: `src/app/pages/home/sections/about-section.component.ts`
- **Habilidades**: `src/app/pages/home/sections/skills-section.component.ts`
- **Experiencia**: `src/app/pages/home/sections/experience-section.component.ts`
- **Certificaciones**: `src/app/pages/home/sections/certifications-section.component.ts`
- **Contacto**: `src/app/pages/home/sections/contact-section.component.ts`

### Agregar CV

Coloca tu CV en `src/assets/cv-walter-sierra.pdf`

### Colores del Tema

Personaliza los colores en `tailwind.config.js`:

```javascript
colors: {
  primary: { /* tus colores */ },
  accent: { /* tus colores */ }
}
```

## 📄 Licencia

MIT © Walter Sierra

---

Desarrollado con ❤️ por [Walter Sierra](https://github.com/walter-sierra)
